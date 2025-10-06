// src/Admin/ContactMessages.tsx
import { useState, useEffect } from "react";
import { toast } from "sonner";

const API_URL = import.meta.env.VITE_API_URL;

interface ContactMessage {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: "new" | "read" | "replied" | "archived";
  submittedAt: string;
  createdAt: string;
  updatedAt: string;
}

interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalContacts: number;
  hasNext: boolean;
  hasPrev: boolean;
}

const ContactMessages = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState<PaginationInfo>({
    currentPage: 1,
    totalPages: 1,
    totalContacts: 0,
    hasNext: false,
    hasPrev: false,
  });
  const [filters, setFilters] = useState({
    status: "all",
    search: "",
  });

  const fetchMessages = async (page = 1) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("adminToken");
      
      if (!token) {
        toast.error("No authentication token found");
        return;
      }

      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: "10",
        ...(filters.status !== "all" && { status: filters.status }),
        ...(filters.search && { search: filters.search }),
      });

      const response = await fetch(
        `${API_URL}/api/contact?${queryParams}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Check if response is OK
      if (!response.ok) {
        if (response.status === 401) {
          toast.error("Session expired. Please login again.");
          localStorage.removeItem("adminToken");
          window.location.href = "/admin/login";
          return;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setMessages(data.data || []);
        setPagination(data.pagination || {
          currentPage: 1,
          totalPages: 1,
          totalContacts: 0,
          hasNext: false,
          hasPrev: false,
        });
      } else {
        toast.error(data.msg || data.message || "Failed to fetch messages");
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
      if (error instanceof Error) {
        toast.error(error.message || "Network error");
      } else {
        toast.error("Failed to fetch messages");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [filters]);

  const updateStatus = async (id: string, newStatus: ContactMessage["status"]) => {
    try {
      const token = localStorage.getItem("adminToken");
      
      if (!token) {
        toast.error("No authentication token found");
        return;
      }

      const response = await fetch(
        `${API_URL}/api/contact/${id}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (!response.ok) {
        if (response.status === 401) {
          toast.error("Session expired. Please login again.");
          localStorage.removeItem("adminToken");
          window.location.href = "/admin/login";
          return;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        toast.success(data.msg || "Status updated successfully");
        setMessages((prev) =>
          prev.map((msg) =>
            msg._id === id ? { ...msg, status: newStatus } : msg
          )
        );
      } else {
        toast.error(data.msg || data.message || "Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      if (error instanceof Error) {
        toast.error(error.message || "Network error");
      } else {
        toast.error("Failed to update status");
      }
    }
  };

  const deleteMessage = async (id: string) => {
    if (!confirm("Are you sure you want to delete this message?")) return;

    try {
      const token = localStorage.getItem("adminToken");
      
      if (!token) {
        toast.error("No authentication token found");
        return;
      }

      const response = await fetch(
        `${API_URL}/api/contact/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        if (response.status === 401) {
          toast.error("Session expired. Please login again.");
          localStorage.removeItem("adminToken");
          window.location.href = "/admin/login";
          return;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        toast.success(data.msg || "Message deleted successfully");
        setMessages((prev) => prev.filter((msg) => msg._id !== id));
        // Refresh the list to update pagination
        fetchMessages(pagination.currentPage);
      } else {
        toast.error(data.msg || data.message || "Failed to delete message");
      }
    } catch (error) {
      console.error("Error deleting message:", error);
      if (error instanceof Error) {
        toast.error(error.message || "Network error");
      } else {
        toast.error("Failed to delete message");
      }
    }
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, { background: string; color: string }> = {
      new: { background: "#dbeafe", color: "#1e40af" },
      read: { background: "#f3f4f6", color: "#374151" },
      replied: { background: "#dcfce7", color: "#166534" },
      archived: { background: "#f3e8ff", color: "#7e22ce" },
    };
    
    return colors[status] || { background: "#f3f4f6", color: "#374151" };
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleRefresh = () => {
    fetchMessages(pagination.currentPage);
  };

  const styles = {
    container: {
      padding: "2rem",
      maxWidth: "1400px",
      margin: "0 auto",
      minHeight: "100vh",
      backgroundColor: "#f8fafc",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "2rem",
      flexWrap: "wrap" as const,
      gap: "1rem",
    },
    titleSection: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "700",
      color: "#1a202c",
      margin: 0,
    },
    refreshButton: {
      padding: "0.5rem 1rem",
      backgroundColor: "#3b82f6",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "500",
    },
    stats: {
      color: "#6b7280",
      fontSize: "14px",
      fontWeight: "500",
    },
    filters: {
      display: "flex",
      gap: "1rem",
      marginBottom: "2rem",
      flexWrap: "wrap" as const,
    },
    filterSelect: {
      padding: "0.5rem 1rem",
      border: "1px solid #d1d5db",
      borderRadius: "6px",
      fontSize: "14px",
      backgroundColor: "white",
      minWidth: "150px",
    },
    searchInput: {
      padding: "0.5rem 1rem",
      border: "1px solid #d1d5db",
      borderRadius: "6px",
      fontSize: "14px",
      width: "300px",
      backgroundColor: "white",
    },
    tableContainer: {
      background: "white",
      borderRadius: "8px",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      marginBottom: "2rem",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse" as const,
    },
    tableHeader: {
      background: "#f8fafc",
      borderBottom: "1px solid #e5e7eb",
    },
    tableHeaderCell: {
      padding: "1rem",
      textAlign: "left" as const,
      fontWeight: "600",
      color: "#374151",
      fontSize: "14px",
      borderBottom: "1px solid #e5e7eb",
    },
    tableRow: {
      borderBottom: "1px solid #e5e7eb",
      transition: "background-color 0.2s",
    },
    tableCell: {
      padding: "1rem",
      fontSize: "14px",
      verticalAlign: "top" as const,
    },
    statusBadge: {
      display: "inline-flex",
      alignItems: "center",
      padding: "0.25rem 0.75rem",
      borderRadius: "9999px",
      fontSize: "0.75rem",
      fontWeight: "600",
    },
    actionGroup: {
      display: "flex",
      gap: "0.5rem",
      alignItems: "center",
    },
    statusSelect: {
      padding: "0.25rem 0.5rem",
      border: "1px solid #d1d5db",
      borderRadius: "4px",
      fontSize: "12px",
      backgroundColor: "white",
      cursor: "pointer",
    },
    deleteButton: {
      padding: "0.25rem 0.5rem",
      border: "none",
      borderRadius: "4px",
      fontSize: "12px",
      backgroundColor: "#fee2e2",
      color: "#dc2626",
      cursor: "pointer",
      fontWeight: "500",
    },
    loadingState: {
      padding: "3rem",
      textAlign: "center" as const,
      color: "#6b7280",
    },
    emptyState: {
      padding: "3rem",
      textAlign: "center" as const,
      color: "#6b7280",
    },
    pagination: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem",
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    },
    paginationInfo: {
      color: "#6b7280",
      fontSize: "14px",
    },
    paginationButtons: {
      display: "flex",
      gap: "0.5rem",
    },
    paginationButton: {
      padding: "0.5rem 1rem",
      border: "1px solid #d1d5db",
      borderRadius: "6px",
      background: "white",
      cursor: "pointer",
      fontSize: "14px",
      color: "#374151",
    },
    paginationButtonDisabled: {
      opacity: 0.5,
      cursor: "not-allowed",
      color: "#9ca3af",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.titleSection}>
          <h1 style={styles.title}>Contact Messages</h1>
          <button 
            onClick={handleRefresh}
            style={styles.refreshButton}
            disabled={loading}
          >
            {loading ? "Refreshing..." : "Refresh"}
          </button>
        </div>
        <div style={styles.stats}>
          Total: {pagination.totalContacts} messages
          {filters.status !== "all" && ` • Filtered: ${messages.length}`}
        </div>
      </div>

      {/* Filters */}
      <div style={styles.filters}>
        <select
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          style={styles.filterSelect}
          disabled={loading}
        >
          <option value="all">All Status</option>
          <option value="new">New</option>
          <option value="read">Read</option>
          <option value="replied">Replied</option>
          <option value="archived">Archived</option>
        </select>

        <input
          type="text"
          placeholder="Search by name, email, or message..."
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          style={styles.searchInput}
          disabled={loading}
        />
      </div>

      {/* Messages Table */}
      <div style={styles.tableContainer}>
        {loading ? (
          <div style={styles.loadingState}>
            Loading messages...
          </div>
        ) : messages.length === 0 ? (
          <div style={styles.emptyState}>
            {filters.status !== "all" || filters.search ? "No messages match your filters" : "No messages found"}
          </div>
        ) : (
          <table style={styles.table}>
            <thead style={styles.tableHeader}>
              <tr>
                <th style={styles.tableHeaderCell}>Name</th>
                <th style={styles.tableHeaderCell}>Email</th>
                <th style={styles.tableHeaderCell}>Phone</th>
                <th style={styles.tableHeaderCell}>Message</th>
                <th style={styles.tableHeaderCell}>Status</th>
                <th style={styles.tableHeaderCell}>Date</th>
                <th style={styles.tableHeaderCell}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((message) => {
                const statusColor = getStatusColor(message.status);
                return (
                  <tr key={message._id} style={styles.tableRow}>
                    <td style={styles.tableCell}>
                      <strong>{message.name}</strong>
                    </td>
                    <td style={styles.tableCell}>
                      <a
                        href={`mailto:${message.email}`}
                        style={{ 
                          color: "#3b82f6", 
                          textDecoration: "none",
                          fontSize: "13px",
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.textDecoration = "underline"}
                        onMouseLeave={(e) => e.currentTarget.style.textDecoration = "none"}
                      >
                        {message.email}
                      </a>
                    </td>
                    <td style={styles.tableCell}>
                      {message.phone ? (
                        <a
                          href={`tel:${message.phone}`}
                          style={{ 
                            color: "#059669", 
                            textDecoration: "none",
                            fontSize: "13px",
                          }}
                        >
                          {message.phone}
                        </a>
                      ) : (
                        <span style={{ color: "#9ca3af", fontStyle: "italic" }}>N/A</span>
                      )}
                    </td>
                    <td style={styles.tableCell}>
                      <div
                        style={{
                          maxWidth: "300px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          fontSize: "13px",
                          lineHeight: "1.4",
                        }}
                        title={message.message}
                      >
                        {message.message}
                      </div>
                    </td>
                    <td style={styles.tableCell}>
                      <span
                        style={{
                          ...styles.statusBadge,
                          backgroundColor: statusColor.background,
                          color: statusColor.color,
                        }}
                      >
                        {message.status.charAt(0).toUpperCase() + message.status.slice(1)}
                      </span>
                    </td>
                    <td style={styles.tableCell}>
                      <div style={{ fontSize: "13px", color: "#6b7280" }}>
                        {formatDate(message.createdAt)}
                      </div>
                    </td>
                    <td style={styles.tableCell}>
                      <div style={styles.actionGroup}>
                        <select
                          value={message.status}
                          onChange={(e) =>
                            updateStatus(
                              message._id,
                              e.target.value as ContactMessage["status"]
                            )
                          }
                          style={styles.statusSelect}
                          disabled={loading}
                        >
                          <option value="new">New</option>
                          <option value="read">Read</option>
                          <option value="replied">Replied</option>
                          <option value="archived">Archived</option>
                        </select>
                        <button
                          onClick={() => deleteMessage(message._id)}
                          style={styles.deleteButton}
                          disabled={loading}
                          title="Delete message"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination */}
      {messages.length > 0 && (
        <div style={styles.pagination}>
          <div style={styles.paginationInfo}>
            Showing {(pagination.currentPage - 1) * 10 + 1} to{" "}
            {Math.min(pagination.currentPage * 10, pagination.totalContacts)} of{" "}
            {pagination.totalContacts} messages
          </div>
          <div style={styles.paginationButtons}>
            <button
              onClick={() => fetchMessages(pagination.currentPage - 1)}
              disabled={!pagination.hasPrev || loading}
              style={{
                ...styles.paginationButton,
                ...((!pagination.hasPrev || loading) && styles.paginationButtonDisabled),
              }}
            >
              Previous
            </button>
            <button
              onClick={() => fetchMessages(pagination.currentPage + 1)}
              disabled={!pagination.hasNext || loading}
              style={{
                ...styles.paginationButton,
                ...((!pagination.hasNext || loading) && styles.paginationButtonDisabled),
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactMessages;