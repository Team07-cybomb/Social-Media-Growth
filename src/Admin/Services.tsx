// src/Admin/Services.tsx
import { useState, useEffect } from "react";
import * as XLSX from "xlsx";
const API_URL = import.meta.env.VITE_API_URL;

// Type definitions for Order model
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

const Services = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  // Fetch orders from API
  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/api/orders`);
      const result = await response.json();

      if (result.success) {
        setOrders(result.data);
      } else {
        setError(result.msg || "Failed to fetch orders");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      setError("Failed to connect to server");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Export to Excel function
  const exportToExcel = () => {
    try {
      // Prepare data for export
      const exportData = orders.map((order) => ({
        "Customer Name": order.name,
        "Email": order.email,
        "Phone": order.phone,
        "Service": order.service,
        "Budget": order.serviceBudget,
        "Platform": order.platform,
        "Timeline": order.timeline,
        "Status": order.status.charAt(0).toUpperCase() + order.status.slice(1).replace("_", " "),
        "Created Date": new Date(order.createdAt).toLocaleDateString(),
        "Created Time": new Date(order.createdAt).toLocaleTimeString(),
        "Account Age": getAccountAge(order.createdAt),
      }));

      // Create workbook and worksheet
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(exportData);

      // Set column widths for better formatting
      const colWidths = [
        { wch: 20 }, // Customer Name
        { wch: 30 }, // Email
        { wch: 15 }, // Phone
        { wch: 25 }, // Service
        { wch: 15 }, // Budget
        { wch: 15 }, // Platform
        { wch: 15 }, // Timeline
        { wch: 12 }, // Status
        { wch: 12 }, // Created Date
        { wch: 12 }, // Created Time
        { wch: 15 }, // Account Age
      ];
      ws["!cols"] = colWidths;

      // Add worksheet to workbook
      XLSX.utils.book_append_sheet(wb, ws, "Orders");

      // Generate Excel file and trigger download
      const fileName = `orders_export_${
        new Date().toISOString().split("T")[0]
      }.xlsx`;
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
        "Status": order.status.charAt(0).toUpperCase() + order.status.slice(1).replace("_", " "),
        "Created Date": new Date(order.createdAt).toLocaleDateString(),
        "Created Time": new Date(order.createdAt).toLocaleTimeString(),
        "Account Age": getAccountAge(order.createdAt),
      }));

      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(exportData);

      // Set column widths
      const colWidths = [
        { wch: 20 }, // Customer Name
        { wch: 30 }, // Email
        { wch: 15 }, // Phone
        { wch: 25 }, // Service
        { wch: 15 }, // Budget
        { wch: 15 }, // Platform
        { wch: 15 }, // Timeline
        { wch: 12 }, // Status
        { wch: 12 }, // Created Date
        { wch: 12 }, // Created Time
        { wch: 15 }, // Account Age
      ];
      ws["!cols"] = colWidths;

      XLSX.utils.book_append_sheet(wb, ws, "Orders");

      const fileName = `orders_${filter}_${
        new Date().toISOString().split("T")[0]
      }.xlsx`;
      XLSX.writeFile(wb, fileName);
    } catch (err) {
      console.error("Export error:", err);
      alert("Error exporting data to Excel");
    }
  };

  // Calculate account age
  const getAccountAge = (createdAt: string): string => {
    const created = new Date(createdAt);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - created.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "1 day";
    if (diffDays < 30) return `${diffDays} days`;
    if (diffDays < 60) return "1 month";

    const months = Math.floor(diffDays / 30);
    return `${months} months`;
  };

  // Filter orders based on status
  const filteredOrders = orders.filter(
    (order) => filter === "all" || order.status === filter
  );

  // Get status color
  const getStatusColor = (status: string) => {
    const colors = {
      pending: { bg: "#fef3c7", text: "#92400e" },
      confirmed: { bg: "#dbeafe", text: "#1e40af" },
      in_progress: { bg: "#f0f9ff", text: "#0c4a6e" },
      completed: { bg: "#d1fae5", text: "#065f46" },
      cancelled: { bg: "#fee2e2", text: "#991b1b" },
    };
    return colors[status as keyof typeof colors] || colors.pending;
  };

  // Get platform color
  const getPlatformColor = (platform: string) => {
    const colors = {
      Facebook: { bg: "#dbeafe", text: "#1e40af" },
      Instagram: { bg: "#fce7f3", text: "#be185d" },
      Twitter: { bg: "#e0f2fe", text: "#0369a1" },
      "X (Twitter)": { bg: "#e0f2fe", text: "#0369a1" },
      YouTube: { bg: "#fef2f2", text: "#dc2626" },
      LinkedIn: { bg: "#f0f9ff", text: "#0c4a6e" },
      TikTok: { bg: "#f5f3ff", text: "#7c3aed" },
      Other: { bg: "#f3f4f6", text: "#374151" },
    };
    return colors[platform as keyof typeof colors] || colors.Other;
  };

  const styles = {
    pageContainer: {
      padding: "2rem",
      maxWidth: "1400px",
      margin: "0 auto",
      background: "#f8fafc",
      minHeight: "100vh",
    },
    pageHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "2rem",
      flexWrap: "wrap" as const,
      gap: "1rem",
    },
    pageTitle: {
      fontSize: "2rem",
      fontWeight: "700",
      color: "#1a202c",
      marginBottom: "0.5rem",
    },
    pageSubtitle: {
      fontSize: "1rem",
      color: "#718096",
    },
    headerActions: {
      display: "flex",
      gap: "1rem",
      flexWrap: "wrap" as const,
    },
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
      fontSize: "0.875rem",
    },
    exportBtnHover: {
      background: "#059669",
      transform: "translateY(-1px)",
    },
    filters: {
      display: "flex",
      gap: "1rem",
      marginBottom: "2rem",
      flexWrap: "wrap" as const,
    },
    filterBtn: {
      padding: "0.5rem 1rem",
      border: "1px solid #e2e8f0",
      background: "white",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontSize: "0.875rem",
      fontWeight: "500",
    },
    filterBtnActive: {
      background: "#4f46e5",
      color: "white",
      borderColor: "#4f46e5",
    },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "1rem",
      marginBottom: "2rem",
    },
    statCard: {
      background: "white",
      padding: "1.5rem",
      borderRadius: "12px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      textAlign: "center" as const,
      border: "1px solid #e2e8f0",
    },
    statValue: {
      fontSize: "2rem",
      fontWeight: "700",
      marginBottom: "0.5rem",
    },
    statLabel: {
      color: "#718096",
      fontSize: "0.875rem",
      fontWeight: "500",
    },
    tableContainer: {
      background: "white",
      borderRadius: "12px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      overflow: "hidden",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse" as const,
    },
    tableHeader: {
      background: "#f8fafc",
      borderBottom: "1px solid #e2e8f0",
    },
    tableHeaderCell: {
      padding: "1rem",
      textAlign: "left" as const,
      fontWeight: "600",
      color: "#374151",
      fontSize: "0.875rem",
    },
    tableRow: {
      borderBottom: "1px solid #e2e8f0",
      transition: "background 0.3s ease",
    },
    tableRowHover: {
      background: "#f8fafc",
    },
    tableCell: {
      padding: "1rem",
      fontSize: "0.875rem",
      color: "#6b7280",
    },
    statusBadge: {
      padding: "0.25rem 0.75rem",
      borderRadius: "20px",
      fontSize: "0.75rem",
      fontWeight: "600",
      display: "inline-block",
    },
    platformBadge: {
      padding: "0.25rem 0.5rem",
      borderRadius: "6px",
      fontSize: "0.75rem",
      fontWeight: "600",
      display: "inline-block",
    },
    loadingState: {
      textAlign: "center" as const,
      padding: "3rem",
      color: "#6b7280",
    },
    errorState: {
      textAlign: "center" as const,
      padding: "2rem",
      background: "#fef2f2",
      border: "1px solid #fecaca",
      borderRadius: "8px",
      color: "#dc2626",
      marginBottom: "2rem",
    },
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.pageHeader}>
        <div>
          <h1 style={styles.pageTitle}>Order Management</h1>
          <p style={styles.pageSubtitle}>
            View and manage customer orders and services
          </p>
        </div>

        <div style={styles.headerActions}>
          <button
            style={styles.exportBtn}
            onClick={exportToExcel}
            title="Export all orders to Excel"
            onMouseOver={(e) => {
              e.currentTarget.style.background =
                styles.exportBtnHover.background;
              e.currentTarget.style.transform = styles.exportBtnHover.transform;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = styles.exportBtn.background;
              e.currentTarget.style.transform = "none";
            }}
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
              style={{
                ...styles.exportBtn,
                background: "#f59e0b",
              }}
              onClick={exportFilteredToExcel}
              title={`Export ${filter} orders to Excel`}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#d97706";
                e.currentTarget.style.transform =
                  styles.exportBtnHover.transform;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "#f59e0b";
                e.currentTarget.style.transform = "none";
              }}
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
              Export {filter.charAt(0).toUpperCase() + filter.slice(1).replace("_", " ")}
            </button>
          )}
        </div>
      </div>

      {error && (
        <div style={styles.errorState}>
          <strong>Error:</strong> {error}
          <button
            onClick={() => setError(null)}
            style={{
              marginLeft: "1rem",
              background: "none",
              border: "none",
              color: "#dc2626",
              cursor: "pointer",
            }}
          >
            ×
          </button>
        </div>
      )}

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
          <div style={styles.statLabel}>Pending Orders</div>
        </div>
        <div style={styles.statCard}>
          <div style={{ ...styles.statValue, color: "#10b981" }}>
            {orders.filter((o) => o.status === "completed").length}
          </div>
          <div style={styles.statLabel}>Completed</div>
        </div>
        <div style={styles.statCard}>
          <div style={{ ...styles.statValue, color: "#8b5cf6" }}>
            {orders.filter((o) => o.status === "in_progress").length}
          </div>
          <div style={styles.statLabel}>In Progress</div>
        </div>
      </div>

      <div style={styles.filters}>
        <button
          style={{
            ...styles.filterBtn,
            ...(filter === "all" ? styles.filterBtnActive : {}),
          }}
          onClick={() => setFilter("all")}
        >
          All Orders
        </button>
        <button
          style={{
            ...styles.filterBtn,
            ...(filter === "pending" ? styles.filterBtnActive : {}),
          }}
          onClick={() => setFilter("pending")}
        >
          Pending
        </button>
        <button
          style={{
            ...styles.filterBtn,
            ...(filter === "confirmed" ? styles.filterBtnActive : {}),
          }}
          onClick={() => setFilter("confirmed")}
        >
          Confirmed
        </button>
        <button
          style={{
            ...styles.filterBtn,
            ...(filter === "in_progress" ? styles.filterBtnActive : {}),
          }}
          onClick={() => setFilter("in_progress")}
        >
          In Progress
        </button>
        <button
          style={{
            ...styles.filterBtn,
            ...(filter === "completed" ? styles.filterBtnActive : {}),
          }}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>

      {loading ? (
        <div style={styles.loadingState}>
          <div>Loading orders...</div>
        </div>
      ) : (
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead style={styles.tableHeader}>
              <tr>
                <th style={styles.tableHeaderCell}>Customer</th>
                <th style={styles.tableHeaderCell}>Service</th>
                <th style={styles.tableHeaderCell}>Platform</th>
                {/* <th style={styles.tableHeaderCell}>Budget</th> */}
                <th style={styles.tableHeaderCell}>Timeline</th>
                <th style={styles.tableHeaderCell}>Status</th>
                <th style={styles.tableHeaderCell}>Created At</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => {
                const statusColor = getStatusColor(order.status);
                const platformColor = getPlatformColor(order.platform);
                
                return (
                  <tr
                    key={order._id}
                    style={styles.tableRow}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.background =
                        styles.tableRowHover.background)
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    <td style={styles.tableCell}>
                      <div>
                        <strong style={{ color: "#1a202c", display: "block" }}>
                          {order.name}
                        </strong>
                        <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>
                          {order.email}
                        </div>
                        <div style={{ fontSize: "0.75rem", color: "#9ca3af" }}>
                          {order.phone}
                        </div>
                      </div>
                    </td>
                    <td style={styles.tableCell}>
                      <strong style={{ color: "#1a202c" }}>
                        {order.service}
                      </strong>
                    </td>
                    <td style={styles.tableCell}>
                      <span
                        style={{
                          ...styles.platformBadge,
                          background: platformColor.bg,
                          color: platformColor.text,
                        }}
                      >
                        {order.platform}
                      </span>
                    </td>
                    {/* <td style={styles.tableCell}>
                      <strong style={{ color: "#059669" }}>
                        {order.serviceBudget}
                      </strong>
                    </td> */}
                    <td style={styles.tableCell}>{order.timeline}</td>
                    <td style={styles.tableCell}>
                      <span
                        style={{
                          ...styles.statusBadge,
                          background: statusColor.bg,
                          color: statusColor.text,
                        }}
                      >
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1).replace("_", " ")}
                      </span>
                    </td>
                    <td style={styles.tableCell}>
                      {new Date(order.createdAt).toLocaleDateString()}
                      <div style={{ fontSize: "0.75rem", color: "#9ca3af" }}>
                        {new Date(order.createdAt).toLocaleTimeString()}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Services;