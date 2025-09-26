// src/Admin/Customers.tsx
import { useState, useEffect } from "react";

// Type definitions
interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  joinDate: string;
  totalRequests: number;
  completedRequests: number;
  totalSpent: string;
  status: string;
}

const Customers = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    // Mock data
    const mockCustomers = [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "+1234567890",
        joinDate: "2024-01-10",
        totalRequests: 5,
        completedRequests: 3,
        totalSpent: "$225",
        status: "active"
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "+1234567891",
        joinDate: "2024-01-08",
        totalRequests: 8,
        completedRequests: 6,
        totalSpent: "$480",
        status: "active"
      },
      {
        id: 3,
        name: "Mike Johnson",
        email: "mike@example.com",
        phone: "+1234567892",
        joinDate: "2024-01-05",
        totalRequests: 2,
        completedRequests: 2,
        totalSpent: "$150",
        status: "active"
      },
      {
        id: 4,
        name: "Sarah Wilson",
        email: "sarah@example.com",
        phone: "+1234567893",
        joinDate: "2023-12-20",
        totalRequests: 12,
        completedRequests: 10,
        totalSpent: "$850",
        status: "premium"
      }
    ];
    setCustomers(mockCustomers);
  }, []);

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const styles = {
    pageContainer: {
      padding: '2rem',
      maxWidth: '1400px',
      margin: '0 auto',
    },
    pageHeader: {
      marginBottom: '2rem',
    },
    pageTitle: {
      fontSize: '2.5rem',
      fontWeight: '700' as const,
      color: '#1a202c',
      marginBottom: '0.5rem',
    },
    pageSubtitle: {
      fontSize: '1.2rem',
      color: '#718096',
      marginBottom: '2rem',
    },
    searchBox: {
      padding: '0.75rem 1rem',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      width: '300px',
      marginBottom: '2rem',
      fontSize: '1rem',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1rem',
      marginBottom: '2rem',
    },
    statCard: {
      background: 'white',
      padding: '1.5rem',
      borderRadius: '12px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      textAlign: 'center' as const,
    },
    statValue: {
      fontSize: '2rem',
      fontWeight: '700' as const,
      marginBottom: '0.5rem',
    },
    statLabel: {
      color: '#718096',
      fontSize: '0.875rem',
    },
    tableContainer: {
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      overflow: 'hidden' as const,
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse' as const,
    },
    tableHeader: {
      background: '#f8fafc',
      borderBottom: '1px solid #e2e8f0',
    },
    tableHeaderCell: {
      padding: '1rem',
      textAlign: 'left' as const,
      fontWeight: '600' as const,
      color: '#374151',
      fontSize: '0.875rem',
    },
    tableCell: {
      padding: '1rem',
      borderBottom: '1px solid #f1f5f9',
    },
    statusBadge: {
      padding: '0.25rem 0.75rem',
      borderRadius: '20px',
      fontSize: '0.75rem',
      fontWeight: '600' as const,
      display: 'inline-block' as const,
    },
    actionBtn: {
      padding: '0.5rem 1rem',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer' as const,
      fontSize: '0.875rem',
      marginRight: '0.5rem',
      transition: 'all 0.3s ease',
    },
    viewBtn: {
      background: '#dbeafe',
      color: '#1e40af',
    },
    contactBtn: {
      background: '#f0fdf4',
      color: '#166534',
      border: '1px solid #bbf7d0',
    },
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>Customer Management</h1>
        <p style={styles.pageSubtitle}>Manage customer information and track their activity</p>
      </div>

      <input
        type="text"
        placeholder="Search customers by name or email..."
        style={styles.searchBox}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={{...styles.statValue, color: '#3b82f6'}}>{customers.length}</div>
          <div style={styles.statLabel}>Total Customers</div>
        </div>
        <div style={styles.statCard}>
          <div style={{...styles.statValue, color: '#10b981'}}>
            {customers.filter(c => c.status === 'active' || c.status === 'premium').length}
          </div>
          <div style={styles.statLabel}>Active Customers</div>
        </div>
        <div style={styles.statCard}>
          <div style={{...styles.statValue, color: '#8b5cf6'}}>
            {customers.reduce((sum, c) => sum + c.totalRequests, 0)}
          </div>
          <div style={styles.statLabel}>Total Requests</div>
        </div>
        <div style={styles.statCard}>
          <div style={{...styles.statValue, color: '#f59e0b'}}>
            ${customers.reduce((sum, c) => sum + parseInt(c.totalSpent.replace('$', '')), 0)}
          </div>
          <div style={styles.statLabel}>Total Revenue</div>
        </div>
      </div>

      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead style={styles.tableHeader}>
            <tr>
              <th style={styles.tableHeaderCell}>Customer</th>
              <th style={styles.tableHeaderCell}>Contact</th>
              <th style={styles.tableHeaderCell}>Join Date</th>
              <th style={styles.tableHeaderCell}>Total Requests</th>
              <th style={styles.tableHeaderCell}>Completed</th>
              <th style={styles.tableHeaderCell}>Total Spent</th>
              <th style={styles.tableHeaderCell}>Status</th>
              <th style={styles.tableHeaderCell}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer) => (
              <tr key={customer.id}>
                <td style={styles.tableCell}>
                  <div style={{fontWeight: '600'}}>{customer.name}</div>
                </td>
                <td style={styles.tableCell}>
                  <div>{customer.email}</div>
                  <div style={{fontSize: '0.875rem', color: '#6b7280'}}>{customer.phone}</div>
                </td>
                <td style={styles.tableCell}>{customer.joinDate}</td>
                <td style={styles.tableCell}>{customer.totalRequests}</td>
                <td style={styles.tableCell}>{customer.completedRequests}</td>
                <td style={styles.tableCell}>{customer.totalSpent}</td>
                <td style={styles.tableCell}>
                  <span style={{
                    ...styles.statusBadge,
                    background: customer.status === 'premium' ? '#fef3c7' : '#d1fae5',
                    color: customer.status === 'premium' ? '#92400e' : '#065f46'
                  }}>
                    {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                  </span>
                </td>
                <td style={styles.tableCell}>
                  <button style={{...styles.actionBtn, ...styles.viewBtn}}>
                    View Details
                  </button>
                  <button style={{...styles.actionBtn, ...styles.contactBtn}}>
                    Contact
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;