// src/Admin/PromotionRequests.tsx
import { useState, useEffect } from "react";
import * as XLSX from "xlsx";
const API_URL = import.meta.env.VITE_API_URL;

// Type definitions - Updated to match your Order model
interface Order {
  _id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  serviceBudget: string;
  platform: string;
  timeline: string;
  goals: string;
  message: string;
  status: "pending" | "confirmed" | "in_progress" | "completed" | "cancelled";
  source: string;
  createdAt: string;
  updatedAt: string;
}

// Type for status colors
interface StatusColors {
  [key: string]: { bg: string; text: string };
  pending: { bg: string; text: string };
  confirmed: { bg: string; text: string };
  in_progress: { bg: string; text: string };
  completed: { bg: string; text: string };
  cancelled: { bg: string; text: string };
}

// Type for platform colors
interface PlatformColors {
  [key: string]: { bg: string; text: string };
  Facebook: { bg: string; text: string };
  Instagram: { bg: string; text: string };
  Twitter: { bg: string; text: string };
  "X (Twitter)": { bg: string; text: string };
  YouTube: { bg: string; text: string };
  LinkedIn: { bg: string; text: string };
  TikTok: { bg: string; text: string };
  Other: { bg: string; text: string };
}

const PromotionRequests = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Fetch orders from API
  const fetchOrders = async (page: number = 1, statusFilter: string = "all") => {
    try {
      setLoading(true);
      let url = `${API_URL}/api/orders?page=${page}&limit=10`;
      
      if (statusFilter !== "all") {
        url += `&status=${statusFilter}`;
      }

      const response = await fetch(url);
      const result = await response.json();

      if (result.success) {
        setOrders(result.data);
        setTotalPages(result.pagination?.total || 1);
      } else {
        setError("Failed to fetch orders");
      }
    } catch (err) {
      setError("Error connecting to server");
      console.error("Fetch orders error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders(currentPage, filter);
  }, [currentPage, filter]);

  // Filter orders based on search term
  const filteredOrders = orders.filter(order =>
    order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.platform.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Export to Excel function
  const exportToExcel = () => {
    try {
      const exportData = orders.map((order) => ({
        "Customer Name": order.name,
        "Email": order.email,
        "Phone": order.phone,
        "Service": order.service,
        "Budget": order.serviceBudget,
        "Platform": order.platform,
        "Timeline": order.timeline,
        "Goals": order.goals,
        "Status": order.status.charAt(0).toUpperCase() + order.status.slice(1).replace("_", " "),
        "Source": order.source,
        "Created At": new Date(order.createdAt).toLocaleDateString(),
        "Updated At": new Date(order.updatedAt).toLocaleDateString(),
      }));

      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(exportData);
      XLSX.utils.book_append_sheet(wb, ws, "Orders");

      const fileName = `orders_export_${new Date().toISOString().split("T")[0]}.xlsx`;
      XLSX.writeFile(wb, fileName);
    } catch (err) {
      console.error("Export error:", err);
      alert("Error exporting data to Excel");
    }
  };

  // Export filtered orders to Excel
  const exportFilteredToExcel = () => {
    try {
      const ordersToExport = filter === "all" ? orders : filteredOrders;

      const exportData = ordersToExport.map((order) => ({
        "Customer Name": order.name,
        "Email": order.email,
        "Phone": order.phone,
        "Service": order.service,
        "Budget": order.serviceBudget,
        "Platform": order.platform,
        "Timeline": order.timeline,
        "Goals": order.goals,
        "Status": order.status.charAt(0).toUpperCase() + order.status.slice(1).replace("_", " "),
        "Source": order.source,
        "Created At": new Date(order.createdAt).toLocaleDateString(),
        "Updated At": new Date(order.updatedAt).toLocaleDateString(),
      }));

      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(exportData);
      XLSX.utils.book_append_sheet(wb, ws, "Orders");

      const fileName = `orders_${filter}_${new Date().toISOString().split("T")[0]}.xlsx`;
      XLSX.writeFile(wb, fileName);
    } catch (err) {
      console.error("Export error:", err);
      alert("Error exporting data to Excel");
    }
  };

  // Status colors
  const getStatusColor = (status: string) => {
    const colors: StatusColors = {
      pending: { bg: "#fef3c7", text: "#92400e" },
      confirmed: { bg: "#dbeafe", text: "#1e40af" },
      in_progress: { bg: "#f0f9ff", text: "#0c4a6e" },
      completed: { bg: "#d1fae5", text: "#065f46" },
      cancelled: { bg: "#fee2e2", text: "#991b1b" },
    };
    return colors[status] || colors.pending;
  };

  // Platform colors
  const getPlatformColor = (platform: string) => {
    const colors: PlatformColors = {
      Facebook: { bg: "#dbeafe", text: "#1e40af" },
      Instagram: { bg: "#fce7f3", text: "#be185d" },
      Twitter: { bg: "#e0f2fe", text: "#0369a1" },
      "X (Twitter)": { bg: "#e0f2fe", text: "#0369a1" },
      YouTube: { bg: "#fef2f2", text: "#dc2626" },
      LinkedIn: { bg: "#f0f9ff", text: "#0c4a6e" },
      TikTok: { bg: "#f5f3ff", text: "#7c3aed" },
      Other: { bg: "#f3f4f6", text: "#374151" },
    };
    return colors[platform] || colors.Other;
  };

  // Update order status
  const updateOrderStatus = async (id: string, newStatus: string) => {
    try {
      const response = await fetch(`${API_URL}/api/orders/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      const result = await response.json();

      if (result.success) {
        setOrders(orders.map((order) =>
          order._id === id ? { ...order, status: newStatus as any } : order
        ));
      } else {
        alert("Failed to update order status");
      }
    } catch (err) {
      console.error("Update order error:", err);
      alert("Error updating order status");
    }
  };

  // Delete order
  const deleteOrder = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      try {
        const response = await fetch(`${API_URL}/api/orders/${id}`, {
          method: "DELETE",
        });

        const result = await response.json();

        if (result.success) {
          setOrders(orders.filter((order) => order._id !== id));
        } else {
          alert("Failed to delete order");
        }
      } catch (err) {
        console.error("Delete order error:", err);
        alert("Error deleting order");
      }
    }
  };

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Pagination handlers
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const styles = {
    pageContainer: {
      padding: "2rem",
      maxWidth: "1400px",
      margin: "0 auto",
    } as React.CSSProperties,
    pageHeader: {
      marginBottom: "2rem",
    } as React.CSSProperties,
    pageTitle: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#1a202c",
      marginBottom: "0.5rem",
    } as React.CSSProperties,
    pageSubtitle: {
      fontSize: "1.2rem",
      color: "#718096",
      marginBottom: "2rem",
    } as React.CSSProperties,
    headerActions: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "2rem",
      flexWrap: "wrap" as const,
      gap: "1rem",
    } as React.CSSProperties,
    searchBox: {
      padding: "0.75rem 1rem",
      border: "1px solid #e2e8f0",
      borderRadius: "8px",
      fontSize: "0.875rem",
      width: "300px",
      marginBottom: "1rem",
    } as React.CSSProperties,
    exportBtn: {
      background: "#10b981",
      color: "white",
      border: "none",
      padding: "0.75rem 1.5rem",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "600",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      transition: "all 0.3s ease",
    } as React.CSSProperties,
    filters: {
      display: "flex",
      gap: "1rem",
      marginBottom: "2rem",
      flexWrap: "wrap" as const,
    } as React.CSSProperties,
    filterBtn: {
      padding: "0.5rem 1rem",
      border: "1px solid #e2e8f0",
      background: "white",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "all 0.3s ease",
    } as React.CSSProperties,
    filterBtnActive: {
      background: "#4f46e5",
      color: "white",
      borderColor: "#4f46e5",
    } as React.CSSProperties,
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "1rem",
      marginBottom: "2rem",
    } as React.CSSProperties,
    statCard: {
      background: "white",
      padding: "1.5rem",
      borderRadius: "12px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      textAlign: "center" as const,
    } as React.CSSProperties,
    statValue: {
      fontSize: "2rem",
      fontWeight: "700",
      marginBottom: "0.5rem",
    } as React.CSSProperties,
    statLabel: {
      color: "#718096",
      fontSize: "0.875rem",
    } as React.CSSProperties,
    tableContainer: {
      background: "white",
      borderRadius: "12px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      overflow: "hidden",
    } as React.CSSProperties,
    table: {
      width: "100%",
      borderCollapse: "collapse" as const,
    } as React.CSSProperties,
    tableHeader: {
      background: "#f8fafc",
      borderBottom: "1px solid #e2e8f0",
    } as React.CSSProperties,
    tableHeaderCell: {
      padding: "1rem",
      textAlign: "left" as const,
      fontWeight: "600",
      color: "#374151",
      fontSize: "0.875rem",
    } as React.CSSProperties,
    tableCell: {
      padding: "1rem",
      borderBottom: "1px solid #f1f5f9",
    } as React.CSSProperties,
    statusBadge: {
      padding: "0.25rem 0.75rem",
      borderRadius: "20px",
      fontSize: "0.75rem",
      fontWeight: "600",
      display: "inline-block",
    } as React.CSSProperties,
    platformBadge: {
      padding: "0.25rem 0.5rem",
      borderRadius: "6px",
      fontSize: "0.75rem",
      fontWeight: "600",
      display: "inline-block",
    } as React.CSSProperties,
    actionBtn: {
      padding: "0.25rem 0.75rem",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "0.75rem",
      marginRight: "0.5rem",
      transition: "all 0.3s ease",
    } as React.CSSProperties,
    viewBtn: {
      background: "#dbeafe",
      color: "#1e40af",
    } as React.CSSProperties,
    deleteBtn: {
      background: "#fee2e2",
      color: "#dc2626",
    } as React.CSSProperties,
    modalOverlay: {
      position: "fixed" as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    } as React.CSSProperties,
    modalContent: {
      background: "white",
      padding: "2rem",
      borderRadius: "12px",
      maxWidth: "600px",
      width: "90%",
      maxHeight: "80vh",
      overflow: "auto",
    } as React.CSSProperties,
    detailGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "1rem",
      marginBottom: "1rem",
    } as React.CSSProperties,
    detailItem: {
      marginBottom: "1rem",
    } as React.CSSProperties,
    detailLabel: {
      fontWeight: "600",
      color: "#374151",
      marginBottom: "0.25rem",
    } as React.CSSProperties,
    detailValue: {
      color: "#6b7280",
    } as React.CSSProperties,
    messageBox: {
      background: "#f8fafc",
      padding: "1rem",
      borderRadius: "8px",
      marginTop: "1rem",
      whiteSpace: "pre-wrap" as const,
    } as React.CSSProperties,
    loading: {
      textAlign: "center" as const,
      padding: "2rem",
      color: "#6b7280",
    } as React.CSSProperties,
    error: {
      textAlign: "center" as const,
      padding: "2rem",
      color: "#dc2626",
      background: "#fef2f2",
      borderRadius: "8px",
      marginBottom: "2rem",
    } as React.CSSProperties,
    pagination: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem",
      background: "#f8fafc",
      borderTop: "1px solid #e2e8f0",
    } as React.CSSProperties,
    paginationBtn: {
      padding: "0.5rem 1rem",
      border: "1px solid #e2e8f0",
      background: "white",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "all 0.3s ease",
    } as React.CSSProperties,
    paginationInfo: {
      color: "#6b7280",
      fontSize: "0.875rem",
    } as React.CSSProperties,
  };

  if (loading) {
    return (
      <div style={styles.pageContainer}>
        <div style={styles.loading}>Loading orders...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.pageContainer}>
        <div style={styles.error}>
          <h3>Error</h3>
          <p>{error}</p>
          <button
            onClick={() => fetchOrders(currentPage, filter)}
            style={
              {
                background: "#4f46e5",
                color: "white",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "6px",
                cursor: "pointer",
                marginTop: "1rem",
              } as React.CSSProperties
            }
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.pageContainer}>
      <div style={styles.headerActions}>
        <div style={styles.pageHeader}>
          <h1 style={styles.pageTitle}>Order Management</h1>
          <p style={styles.pageSubtitle}>
            Manage and track all customer orders
          </p>
        </div>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <button
            style={styles.exportBtn}
            onClick={exportToExcel}
            title="Export all orders to Excel"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Export All to Excel
          </button>

          {filter !== "all" && (
            <button
              style={
                {
                  ...styles.exportBtn,
                  background: "#f59e0b",
                } as React.CSSProperties
              }
              onClick={exportFilteredToExcel}
              title={`Export ${filter} orders to Excel`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Export {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          )}
        </div>
      </div>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search orders by name, email, service, or platform..."
        style={styles.searchBox}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={{ ...styles.statValue, color: "#3b82f6" }}>
            {orders.length}
          </div>
          <div style={styles.statLabel}>Total Orders</div>
        </div>
        <div style={styles.statCard}>
          <div style={{ ...styles.statValue, color: "#f59e0b" }}>
            {orders.filter((o) => o.status === "pending").length}
          </div>
          <div style={styles.statLabel}>Pending</div>
        </div>
        <div style={styles.statCard}>
          <div style={{ ...styles.statValue, color: "#10b981" }}>
            {orders.filter((o) => o.status === "confirmed").length}
          </div>
          <div style={styles.statLabel}>Confirmed</div>
        </div>
        <div style={styles.statCard}>
          <div style={{ ...styles.statValue, color: "#8b5cf6" }}>
            {orders.filter((o) => o.status === "in_progress").length}
          </div>
          <div style={styles.statLabel}>In Progress</div>
        </div>
        <div style={styles.statCard}>
          <div style={{ ...styles.statValue, color: "#06b6d4" }}>
            {orders.filter((o) => o.status === "completed").length}
          </div>
          <div style={styles.statLabel}>Completed</div>
        </div>
      </div>

      <div style={styles.filters}>
        <button
          style={
            {
              ...styles.filterBtn,
              ...(filter === "all" ? styles.filterBtnActive : {}),
            } as React.CSSProperties
          }
          onClick={() => setFilter("all")}
        >
          All Orders
        </button>
        <button
          style={
            {
              ...styles.filterBtn,
              ...(filter === "pending" ? styles.filterBtnActive : {}),
            } as React.CSSProperties
          }
          onClick={() => setFilter("pending")}
        >
          Pending
        </button>
        <button
          style={
            {
              ...styles.filterBtn,
              ...(filter === "confirmed" ? styles.filterBtnActive : {}),
            } as React.CSSProperties
          }
          onClick={() => setFilter("confirmed")}
        >
          Confirmed
        </button>
        <button
          style={
            {
              ...styles.filterBtn,
              ...(filter === "in_progress" ? styles.filterBtnActive : {}),
            } as React.CSSProperties
          }
          onClick={() => setFilter("in_progress")}
        >
          In Progress
        </button>
        <button
          style={
            {
              ...styles.filterBtn,
              ...(filter === "completed" ? styles.filterBtnActive : {}),
            } as React.CSSProperties
          }
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>

      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead style={styles.tableHeader}>
            <tr>
              <th style={styles.tableHeaderCell}>Customer</th>
              <th style={styles.tableHeaderCell}>Service</th>
              <th style={styles.tableHeaderCell}>Platform</th>
              <th style={styles.tableHeaderCell}>Budget</th>
              <th style={styles.tableHeaderCell}>Timeline</th>
              <th style={styles.tableHeaderCell}>Status</th>
              <th style={styles.tableHeaderCell}>Created</th>
              <th style={styles.tableHeaderCell}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => {
              const statusColor = getStatusColor(order.status);
              const platformColor = getPlatformColor(order.platform);

              return (
                <tr key={order._id}>
                  <td style={styles.tableCell}>
                    <div>
                      <div style={{ fontWeight: "600" } as React.CSSProperties}>
                        {order.name}
                      </div>
                      <div
                        style={
                          {
                            fontSize: "0.875rem",
                            color: "#6b7280",
                          } as React.CSSProperties
                        }
                      >
                        {order.email}
                      </div>
                      <div
                        style={
                          {
                            fontSize: "0.75rem",
                            color: "#9ca3af",
                          } as React.CSSProperties
                        }
                      >
                        {order.phone}
                      </div>
                    </div>
                  </td>
                  <td style={styles.tableCell}>
                    <div style={{ fontWeight: "600" } as React.CSSProperties}>
                      {order.service}
                    </div>
                  </td>
                  <td style={styles.tableCell}>
                    <span
                      style={
                        {
                          ...styles.platformBadge,
                          background: platformColor.bg,
                          color: platformColor.text,
                        } as React.CSSProperties
                      }
                    >
                      {order.platform}
                    </span>
                  </td>
                  <td style={styles.tableCell}>{order.serviceBudget}</td>
                  <td style={styles.tableCell}>{order.timeline}</td>
                  <td style={styles.tableCell}>
                    <span
                      style={
                        {
                          ...styles.statusBadge,
                          background: statusColor.bg,
                          color: statusColor.text,
                        } as React.CSSProperties
                      }
                    >
                      {order.status.charAt(0).toUpperCase() +
                        order.status.slice(1).replace("_", " ")}
                    </span>
                  </td>
                  <td style={styles.tableCell}>
                    <div
                      style={
                        {
                          fontSize: "0.875rem",
                          color: "#6b7280",
                        } as React.CSSProperties
                      }
                    >
                      {formatDate(order.createdAt)}
                    </div>
                  </td>
                  <td style={styles.tableCell}>
                    <button
                      style={
                        {
                          ...styles.actionBtn,
                          ...styles.viewBtn,
                        } as React.CSSProperties
                      }
                      onClick={() => setSelectedOrder(order)}
                    >
                      View
                    </button>
                    <select
                      value={order.status}
                      onChange={(e) =>
                        updateOrderStatus(order._id, e.target.value)
                      }
                      style={
                        {
                          padding: "0.25rem",
                          borderRadius: "4px",
                          border: "1px solid #e2e8f0",
                          fontSize: "0.75rem",
                          marginRight: "0.5rem",
                        } as React.CSSProperties
                      }
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="in_progress">In Progress</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                    <button
                      style={
                        {
                          ...styles.actionBtn,
                          ...styles.deleteBtn,
                        } as React.CSSProperties
                      }
                      onClick={() => deleteOrder(order._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Pagination */}
        <div style={styles.pagination}>
          <button
            style={styles.paginationBtn}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <div style={styles.paginationInfo}>
            Page {currentPage} of {totalPages}
          </div>
          <button
            style={styles.paginationBtn}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      {selectedOrder && (
        <div
          style={styles.modalOverlay}
          onClick={() => setSelectedOrder(null)}
        >
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2 style={{ marginBottom: "1rem" } as React.CSSProperties}>
              Order Details
            </h2>
            <div style={styles.detailGrid}>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Customer Name</div>
                <div style={styles.detailValue}>{selectedOrder.name}</div>
              </div>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Email</div>
                <div style={styles.detailValue}>{selectedOrder.email}</div>
              </div>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Phone</div>
                <div style={styles.detailValue}>{selectedOrder.phone}</div>
              </div>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Service</div>
                <div style={styles.detailValue}>{selectedOrder.service}</div>
              </div>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Budget</div>
                <div style={styles.detailValue}>{selectedOrder.serviceBudget}</div>
              </div>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Platform</div>
                <div style={styles.detailValue}>
                  <span
                    style={
                      {
                        ...styles.platformBadge,
                        background: getPlatformColor(selectedOrder.platform).bg,
                        color: getPlatformColor(selectedOrder.platform).text,
                      } as React.CSSProperties
                    }
                  >
                    {selectedOrder.platform}
                  </span>
                </div>
              </div>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Timeline</div>
                <div style={styles.detailValue}>{selectedOrder.timeline}</div>
              </div>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Status</div>
                <div style={styles.detailValue}>
                  <span
                    style={
                      {
                        ...styles.statusBadge,
                        background: getStatusColor(selectedOrder.status).bg,
                        color: getStatusColor(selectedOrder.status).text,
                      } as React.CSSProperties
                    }
                  >
                    {selectedOrder.status.charAt(0).toUpperCase() +
                      selectedOrder.status.slice(1).replace("_", " ")}
                  </span>
                </div>
              </div>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Source</div>
                <div style={styles.detailValue}>{selectedOrder.source}</div>
              </div>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Created</div>
                <div style={styles.detailValue}>
                  {formatDate(selectedOrder.createdAt)}
                </div>
              </div>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Last Updated</div>
                <div style={styles.detailValue}>
                  {formatDate(selectedOrder.updatedAt)}
                </div>
              </div>
            </div>
            <div style={styles.detailItem}>
              <div style={styles.detailLabel}>Goals</div>
              <div style={styles.messageBox}>{selectedOrder.goals}</div>
            </div>
            {selectedOrder.message && (
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Additional Message</div>
                <div style={styles.messageBox}>{selectedOrder.message}</div>
              </div>
            )}
            <button
              style={
                {
                  background: "#4f46e5",
                  color: "white",
                  border: "none",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "8px",
                  cursor: "pointer",
                  marginTop: "1rem",
                } as React.CSSProperties
              }
              onClick={() => setSelectedOrder(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PromotionRequests;