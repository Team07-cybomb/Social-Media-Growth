import { useState, useEffect } from "react";
import * as XLSX from 'xlsx';

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
        // Sort customers by createdAt in descending order (newest first)
        const sortedCustomers = data.data.sort((a: Customer, b: Customer) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setCustomers(sortedCustomers);
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

  // Export to Excel function
  const exportToExcel = () => {
    try {
      // Prepare data for export (already sorted by recent first)
      const exportData = customers.map(customer => ({
        'User ID': customer._id,
        'Name': customer.name,
        'Email': customer.email,
        'Phone': customer.phone,
        'Role': customer.role.charAt(0).toUpperCase() + customer.role.slice(1),
        'Status': customer.status || 'Active',
        'Join Date': customer.createdAt ? new Date(customer.createdAt).toLocaleDateString() : 'N/A',
        'Join Time': customer.createdAt ? new Date(customer.createdAt).toLocaleTimeString() : 'N/A',
        'Account Age': customer.createdAt ? getAccountAge(customer.createdAt) : 'N/A'
      }));

      // Create workbook and worksheet
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(exportData);

      // Set column widths for better formatting
      const colWidths = [
        { wch: 25 }, // User ID
        { wch: 20 }, // Name
        { wch: 30 }, // Email
        { wch: 15 }, // Phone
        { wch: 10 }, // Role
        { wch: 10 }, // Status
        { wch: 12 }, // Join Date
        { wch: 12 }, // Join Time
        { wch: 15 }  // Account Age
      ];
      ws['!cols'] = colWidths;

      // Add worksheet to workbook
      XLSX.utils.book_append_sheet(wb, ws, 'Users');

      // Generate Excel file and trigger download
      const fileName = `users_export_${new Date().toISOString().split('T')[0]}.xlsx`;
      XLSX.writeFile(wb, fileName);

    } catch (err) {
      console.error('Export error:', err);
      alert('Error exporting data to Excel');
    }
  };

  // Export filtered customers to Excel
  const exportFilteredToExcel = () => {
    try {
      const customersToExport = filteredCustomers;
      
      const exportData = customersToExport.map(customer => ({
        'User ID': customer._id,
        'Name': customer.name,
        'Email': customer.email,
        'Phone': customer.phone,
        'Role': customer.role.charAt(0).toUpperCase() + customer.role.slice(1),
        'Status': customer.status || 'Active',
        'Join Date': customer.createdAt ? new Date(customer.createdAt).toLocaleDateString() : 'N/A',
        'Join Time': customer.createdAt ? new Date(customer.createdAt).toLocaleTimeString() : 'N/A',
        'Account Age': customer.createdAt ? getAccountAge(customer.createdAt) : 'N/A'
      }));

      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(exportData);

      // Set column widths
      const colWidths = [
        { wch: 25 }, // User ID
        { wch: 20 }, // Name
        { wch: 30 }, // Email
        { wch: 15 }, // Phone
        { wch: 10 }, // Role
        { wch: 10 }, // Status
        { wch: 12 }, // Join Date
        { wch: 12 }, // Join Time
        { wch: 15 }  // Account Age
      ];
      ws['!cols'] = colWidths;

      XLSX.utils.book_append_sheet(wb, ws, 'Users');

      const fileName = `users_filtered_${new Date().toISOString().split('T')[0]}.xlsx`;
      XLSX.writeFile(wb, fileName);

    } catch (err) {
      console.error('Export error:', err);
      alert('Error exporting data to Excel');
    }
  };

  // Calculate account age
  const getAccountAge = (createdAt: string): string => {
    const created = new Date(createdAt);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - created.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day';
    if (diffDays < 30) return `${diffDays} days`;
    if (diffDays < 60) return '1 month';
    
    const months = Math.floor(diffDays / 30);
    return `${months} months`;
  };

  // Filter and sort customers - maintain recent first order
  const filteredCustomers = customers
    .filter(customer =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm)
    )
    // Maintain the sorted order (already sorted by createdAt descending)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

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

  // Get relative time (e.g., "2 days ago")
  const getRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    const diffMinutes = Math.floor(diffTime / (1000 * 60));

    if (diffMinutes < 60) {
      return `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} ago`;
    } else if (diffHours < 24) {
      return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    } else if (diffDays < 7) {
      return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
    } else {
      return formatDate(dateString);
    }
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
    headerActions: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '2rem',
      flexWrap: 'wrap' as const,
      gap: '1rem',
    },
    searchExportContainer: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
      flexWrap: 'wrap' as const,
    },
    searchBox: {
      padding: '0.75rem 1rem',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      width: '300px',
      fontSize: '1rem',
    },
    exportBtn: {
      background: '#10b981',
      color: 'white',
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: '600',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
      fontSize: '0.875rem',
    },
    exportBtnHover: {
      background: '#059669',
      transform: 'translateY(-1px)',
    },
    exportFilteredBtn: {
      background: '#f59e0b',
      color: 'white',
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: '600',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
      fontSize: '0.875rem',
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
      width:'250px',
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
    recentBadge: {
      padding: '0.2rem 0.5rem',
      borderRadius: '12px',
      fontSize: '0.7rem',
      fontWeight: '600' as const,
      display: 'inline-block' as const,
      background: '#dcfce7',
      color: '#166534',
      marginLeft: '0.5rem',
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
      <div style={styles.headerActions}>
        <div style={styles.pageHeader}>
          <h1 style={styles.pageTitle}>User Management</h1>
          <p style={styles.pageSubtitle}>Manage User information and track their activity</p>
        </div>
        
        <div style={styles.searchExportContainer}>
          <input
            type="text"
            placeholder="Search users by name, email, or phone..."
            style={styles.searchBox}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
            <button 
              style={styles.exportBtn}
              onClick={exportToExcel}
              title="Export all users to Excel"
              onMouseOver={(e) => {
                e.currentTarget.style.background = styles.exportBtnHover.background;
                e.currentTarget.style.transform = styles.exportBtnHover.transform;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = styles.exportBtn.background;
                e.currentTarget.style.transform = 'none';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Export All
            </button>
            
            {searchTerm && filteredCustomers.length > 0 && (
              <button 
                style={styles.exportFilteredBtn}
                onClick={exportFilteredToExcel}
                title="Export filtered users to Excel"
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#d97706';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = styles.exportFilteredBtn.background;
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Export Filtered
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Updated Stats Grid - Removed Admin and Filtered User stats */}
      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={{...styles.statValue, color: '#3b82f6'}}>{customers.length}</div>
          <div style={styles.statLabel}>Total Users</div>
        </div>
        {/* <div style={styles.statCard}>
          <div style={{...styles.statValue, color: '#10b981'}}>
            {customers.filter(c => c.role === 'user' || c.role === 'customer').length}
          </div>
          <div style={styles.statLabel}>Customers</div>
        </div> */}
      </div>

      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead style={styles.tableHeader}>
            <tr>
              <th style={styles.tableHeaderCell}>Name</th>
              <th style={styles.tableHeaderCell}>Contact</th>
              {/* Role column removed */}
              <th style={styles.tableHeaderCell}>Join Date</th>
              <th style={styles.tableHeaderCell}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.length === 0 ? (
              <tr>
                <td colSpan={4} style={{...styles.tableCell, textAlign: 'center'}}>
                  {customers.length === 0 ? 'No users found' : 'No users match your search'}
                </td>
              </tr>
            ) : (
              filteredCustomers.map((customer, index) => {
                const isRecent = index < 5; // Highlight first 5 as most recent
                return (
                  <tr key={customer._id}>
                    <td style={styles.tableCell}>
                      <div style={{fontWeight: '600', display: 'flex', alignItems: 'center'}}>
                        {customer.name}
                        {isRecent && (
                          <span style={styles.recentBadge}>
                            New
                          </span>
                        )}
                      </div>
                    </td>
                    <td style={styles.tableCell}>
                      <div>{customer.email}</div>
                      <div style={{fontSize: '0.875rem', color: '#6b7280'}}>{customer.phone}</div>
                    </td>
                    {/* Role cell removed */}
                    <td style={styles.tableCell}>
                      <div>{customer.createdAt ? formatDate(customer.createdAt) : 'N/A'}</div>
                      <div style={{fontSize: '0.75rem', color: '#9ca3af'}}>
                        {customer.createdAt ? getRelativeTime(customer.createdAt) : ''}
                      </div>
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
                );
              })
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
              <p><strong>Joined:</strong> {selectedCustomer.createdAt ? getRelativeTime(selectedCustomer.createdAt) : 'N/A'}</p>
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