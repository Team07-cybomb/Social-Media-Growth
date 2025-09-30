import { useState, useEffect } from "react";

// Type definitions - matching your User model
interface Customer {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  createdAt: string;
  status?: string;
}

const Customers = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('http://localhost:5000/api/auth/profile', {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch customers: ${response.statusText}`);
      }

      const data = await response.json();
      
      if (data.success) {
        setCustomers(data.data); // Note: your API returns data in `data` property
      } else {
        throw new Error(data.message || 'Failed to load customers');
      }
    } catch (error) {
      console.error('Error fetching customers:', error);
      setError(error instanceof Error ? error.message : 'Failed to load customers. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm)
  );

  const handleViewDetails = (customer: Customer) => {
    setSelectedCustomer(customer);
    setShowDetailsModal(true);
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Styles
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
      width: '250px',
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
    actionBtn: {
      padding: '0.5rem 1rem',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer' as const,
      fontSize: '0.875rem',
      marginRight: '0.5rem',
      transition: 'all 0.3s ease',
      background: '#dbeafe',
      color: '#1e40af',
    },
    modalOverlay: {
      position: 'fixed' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    },
    modalContent: {
      background: 'white',
      padding: '2rem',
      borderRadius: '12px',
      maxWidth: '500px',
      width: '90%',
      maxHeight: '80vh',
      overflow: 'auto',
    },
    modalTitle: {
      fontSize: '1.5rem',
      fontWeight: '600' as const,
      marginBottom: '1rem',
    },
    modalActions: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'flex-end',
      marginTop: '2rem',
    },
    loadingText: {
      textAlign: 'center' as const,
      fontSize: '1.2rem',
      color: '#6b7280',
      padding: '2rem',
    },
    errorText: {
      textAlign: 'center' as const,
      fontSize: '1.2rem',
      color: '#ef4444',
      padding: '2rem',
    },
  };

  if (loading) {
    return (
      <div style={styles.pageContainer}>
        <div style={styles.loadingText}>Loading customers...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.pageContainer}>
        <div style={styles.errorText}>{error}</div>
        <button 
          onClick={fetchCustomers}
          style={{
            padding: '0.5rem 1rem',
            background: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            display: 'block',
            margin: '0 auto',
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div style={styles.pageContainer}>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>User Management</h1>
        <p style={styles.pageSubtitle}>Manage User information and track their activity</p>
      </div>

      <input
        type="text"
        placeholder="Search customers by name, email, or phone..."
        style={styles.searchBox}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={{...styles.statValue, color: '#3b82f6'}}>{customers.length}</div>
          <div style={styles.statLabel}>Total Users</div>
        </div>
        {/* <div style={styles.statCard}>
          <div style={{...styles.statValue, color: '#10b981'}}>
            {customers.filter(c => c.role === 'customer').length}
          </div>
          <div style={styles.statLabel}>Customers</div>
        </div> */}
        {/* <div style={styles.statCard}>
          <div style={{...styles.statValue, color: '#8b5cf6'}}>
            {customers.filter(c => c.role === 'admin').length}
          </div>
          <div style={styles.statLabel}>Admins</div>
        </div> */}
      </div>

      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead style={styles.tableHeader}>
            <tr>
              <th style={styles.tableHeaderCell}>Name</th>
              <th style={styles.tableHeaderCell}>Contact</th>
              <th style={styles.tableHeaderCell}>Role</th>
              <th style={styles.tableHeaderCell}>Join Date</th>
              <th style={styles.tableHeaderCell}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.length === 0 ? (
              <tr>
                <td colSpan={5} style={{...styles.tableCell, textAlign: 'center'}}>
                  {customers.length === 0 ? 'No users found' : 'No users match your search'}
                </td>
              </tr>
            ) : (
              filteredCustomers.map((customer) => (
                <tr key={customer._id}>
                  <td style={styles.tableCell}>
                    <div style={{fontWeight: '600'}}>{customer.name}</div>
                  </td>
                  <td style={styles.tableCell}>
                    <div>{customer.email}</div>
                    <div style={{fontSize: '0.875rem', color: '#6b7280'}}>{customer.phone}</div>
                  </td>
                  <td style={styles.tableCell}>
                    <span 
                      style={{
                        padding: '0.25rem 0.75rem',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: '600' as const,
                        display: 'inline-block' as const,
                        background: customer.role === 'admin' ? '#fef3c7' : '#d1fae5',
                        color: customer.role === 'admin' ? '#92400e' : '#065f46'
                      }}
                    >
                      {customer.role.charAt(0).toUpperCase() + customer.role.slice(1)}
                    </span>
                  </td>
                  <td style={styles.tableCell}>
                    {customer.createdAt ? formatDate(customer.createdAt) : 'N/A'}
                  </td>
                  <td style={styles.tableCell}>
                    <button 
                      style={styles.actionBtn}
                      onClick={() => handleViewDetails(customer)}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Customer Details Modal */}
      {showDetailsModal && selectedCustomer && (
        <div style={styles.modalOverlay} onClick={() => setShowDetailsModal(false)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h3 style={styles.modalTitle}>User Details</h3>
            <div>
              <p><strong>Name:</strong> {selectedCustomer.name}</p>
              <p><strong>Email:</strong> {selectedCustomer.email}</p>
              <p><strong>Phone:</strong> {selectedCustomer.phone}</p>
              <p><strong>Role:</strong> {selectedCustomer.role}</p>
              <p><strong>Join Date:</strong> {selectedCustomer.createdAt ? formatDate(selectedCustomer.createdAt) : 'N/A'}</p>
              <p><strong>User ID:</strong> {selectedCustomer._id}</p>
            </div>
            <div style={styles.modalActions}>
              <button 
                style={{...styles.actionBtn, background: '#ef4444', color: 'white'}}
                onClick={() => setShowDetailsModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customers;