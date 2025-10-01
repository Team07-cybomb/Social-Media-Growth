// src/Admin/Services.tsx
import { useState, useEffect } from "react";
import * as XLSX from "xlsx";
const API_URL = import.meta.env.VITE_API_URL;
// Simplified Type definitions for Customer
interface Customer {
  _id: string;
  username: string;
  email: string;
  phoneNumber: string;
  status: string;
  createdAt: string;
}

const Services = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  // Fetch customers from API
  const fetchCustomers = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/api/services`);
      const result = await response.json();

      if (result.success) {
        setCustomers(result.data);
      } else {
        setError(result.msg || "Failed to fetch customers");
      }
    } catch (error) {
      console.error("Error fetching customers:", error);
      setError("Failed to connect to server");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  // Export to Excel function
  const exportToExcel = () => {
    try {
      // Prepare data for export
      const exportData = customers.map((customer) => ({
        Username: customer.username,
        Email: customer.email,
        "Phone Number": customer.phoneNumber,
        Status:
          customer.status.charAt(0).toUpperCase() + customer.status.slice(1),
        "Created Date": new Date(customer.createdAt).toLocaleDateString(),
        "Created Time": new Date(customer.createdAt).toLocaleTimeString(),
        "Account Age": getAccountAge(customer.createdAt),
      }));

      // Create workbook and worksheet
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(exportData);

      // Set column widths for better formatting
      const colWidths = [
        { wch: 20 }, // Username
        { wch: 30 }, // Email
        { wch: 15 }, // Phone Number
        { wch: 10 }, // Status
        { wch: 12 }, // Created Date
        { wch: 12 }, // Created Time
        { wch: 15 }, // Account Age
      ];
      ws["!cols"] = colWidths;

      // Add worksheet to workbook
      XLSX.utils.book_append_sheet(wb, ws, "Customers");

      // Generate Excel file and trigger download
      const fileName = `customers_export_${
        new Date().toISOString().split("T")[0]
      }.xlsx`;
      XLSX.writeFile(wb, fileName);
    } catch (err) {
      console.error("Export error:", err);
      alert("Error exporting data to Excel");
    }
  };

  // Export filtered customers to Excel
  const exportFilteredToExcel = () => {
    try {
      const customersToExport =
        filter === "all" ? customers : filteredCustomers;

      const exportData = customersToExport.map((customer) => ({
        Username: customer.username,
        Email: customer.email,
        "Phone Number": customer.phoneNumber,
        Status:
          customer.status.charAt(0).toUpperCase() + customer.status.slice(1),
        "Created Date": new Date(customer.createdAt).toLocaleDateString(),
        "Created Time": new Date(customer.createdAt).toLocaleTimeString(),
        "Account Age": getAccountAge(customer.createdAt),
      }));

      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(exportData);

      // Set column widths
      const colWidths = [
        { wch: 20 }, // Username
        { wch: 30 }, // Email
        { wch: 15 }, // Phone Number
        { wch: 10 }, // Status
        { wch: 12 }, // Created Date
        { wch: 12 }, // Created Time
        { wch: 15 }, // Account Age
      ];
      ws["!cols"] = colWidths;

      XLSX.utils.book_append_sheet(wb, ws, "Customers");

      const fileName = `customers_${filter}_${
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

  const filteredCustomers = customers.filter(
    (customer) => filter === "all" || customer.status === filter
  );

  const styles = {
    pageContainer: {
      padding: "2rem",
      maxWidth: "1200px",
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
          <h1 style={styles.pageTitle}>Customer Management</h1>
          <p style={styles.pageSubtitle}>
            View customer accounts and information
          </p>
        </div>

        <div style={styles.headerActions}>
          <button
            style={styles.exportBtn}
            onClick={exportToExcel}
            title="Export all customers to Excel"
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
              title={`Export ${filter} customers to Excel`}
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
              Export {filter.charAt(0).toUpperCase() + filter.slice(1)}
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
            {customers.length}
          </div>
          <div style={styles.statLabel}>Total Customers</div>
        </div>
        <div style={styles.statCard}>
          <div style={{ ...styles.statValue, color: "#10b981" }}>
            {customers.filter((c) => c.status === "active").length}
          </div>
          <div style={styles.statLabel}>Active Customers</div>
        </div>
        <div style={styles.statCard}>
          <div style={{ ...styles.statValue, color: "#f59e0b" }}>
            {customers.filter((c) => c.status === "inactive").length}
          </div>
          <div style={styles.statLabel}>Inactive Customers</div>
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
          All Customers
        </button>
        <button
          style={{
            ...styles.filterBtn,
            ...(filter === "active" ? styles.filterBtnActive : {}),
          }}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          style={{
            ...styles.filterBtn,
            ...(filter === "inactive" ? styles.filterBtnActive : {}),
          }}
          onClick={() => setFilter("inactive")}
        >
          Inactive
        </button>
      </div>

      {loading ? (
        <div style={styles.loadingState}>
          <div>Loading customers...</div>
        </div>
      ) : (
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead style={styles.tableHeader}>
              <tr>
                <th style={styles.tableHeaderCell}>Username</th>
                <th style={styles.tableHeaderCell}>Email</th>
                <th style={styles.tableHeaderCell}>Phone Number</th>
                <th style={styles.tableHeaderCell}>Status</th>
                <th style={styles.tableHeaderCell}>Created At</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => (
                <tr
                  key={customer._id}
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
                    <strong style={{ color: "#1a202c" }}>
                      {customer.username}
                    </strong>
                  </td>
                  <td style={styles.tableCell}>{customer.email}</td>
                  <td style={styles.tableCell}>{customer.phoneNumber}</td>
                  <td style={styles.tableCell}>
                    <span
                      style={{
                        ...styles.statusBadge,
                        background:
                          customer.status === "active" ? "#d1fae5" : "#fef3c7",
                        color:
                          customer.status === "active" ? "#065f46" : "#92400e",
                      }}
                    >
                      {customer.status}
                    </span>
                  </td>
                  <td style={styles.tableCell}>
                    {new Date(customer.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Services;
