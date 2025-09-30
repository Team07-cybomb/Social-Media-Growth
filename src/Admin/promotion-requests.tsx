// src/Admin/PromotionRequests.tsx
import { useState, useEffect } from "react";
import * as XLSX from 'xlsx';

// Type definitions - Updated to match your Service model
interface Service {
  _id: string;
  serviceName: string;
  username: string;
  email: string;
  phoneNumber: string;
  platform: string;
  basePrice: number;
  minQuantity: number;
  maxQuantity: number;
  deliveryTime: string;
  status: string;
  description: string;
  category: string;
  quality: string;
  refill: boolean;
  refillPeriod?: string;
  createdAt: string;
  updatedAt: string;
}

// Type for status colors
interface StatusColors {
  [key: string]: { bg: string; text: string };
  active: { bg: string; text: string };
  inactive: { bg: string; text: string };
}

// Type for urgency colors (we'll derive this from delivery time)
interface UrgencyColors {
  [key: string]: string;
  high: string;
  medium: string;
  low: string;
}

const PromotionRequests = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch services from API
  const fetchServices = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/services');
      const result = await response.json();
      
      if (result.success) {
        setServices(result.data);
      } else {
        setError('Failed to fetch services');
      }
    } catch (err) {
      setError('Error connecting to server');
      console.error('Fetch services error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // Filter services based on status
  const filteredServices = services.filter(service => 
    filter === "all" || service.status === filter
  );

  // Export to Excel function
  const exportToExcel = () => {
    try {
      // Prepare data for export
      const exportData = services.map(service => ({
        'Service Name': service.serviceName,
        'Provider': service.username,
        'Email': service.email,
        'Phone': service.phoneNumber,
        'Platform': service.platform,
        'Category': service.category,
        'Base Price': service.basePrice,
        'Min Quantity': service.minQuantity,
        'Max Quantity': service.maxQuantity,
        'Delivery Time': service.deliveryTime,
        'Status': service.status.charAt(0).toUpperCase() + service.status.slice(1),
        'Quality': service.quality,
        'Refill Available': service.refill ? 'Yes' : 'No',
        'Refill Period': service.refillPeriod || 'N/A',
        'Description': service.description,
        'Created At': new Date(service.createdAt).toLocaleDateString(),
        'Updated At': new Date(service.updatedAt).toLocaleDateString()
      }));

      // Create workbook and worksheet
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(exportData);

      // Add worksheet to workbook
      XLSX.utils.book_append_sheet(wb, ws, 'Services');

      // Generate Excel file and trigger download
      const fileName = `services_export_${new Date().toISOString().split('T')[0]}.xlsx`;
      XLSX.writeFile(wb, fileName);

    } catch (err) {
      console.error('Export error:', err);
      alert('Error exporting data to Excel');
    }
  };

  // Export filtered services to Excel
  const exportFilteredToExcel = () => {
    try {
      const servicesToExport = filter === "all" ? services : filteredServices;
      
      const exportData = servicesToExport.map(service => ({
        'Service Name': service.serviceName,
        'Provider': service.username,
        'Email': service.email,
        'Phone': service.phoneNumber,
        'Platform': service.platform,
        'Category': service.category,
        'Base Price': service.basePrice,
        'Min Quantity': service.minQuantity,
        'Max Quantity': service.maxQuantity,
        'Delivery Time': service.deliveryTime,
        'Status': service.status.charAt(0).toUpperCase() + service.status.slice(1),
        'Quality': service.quality,
        'Refill Available': service.refill ? 'Yes' : 'No',
        'Refill Period': service.refillPeriod || 'N/A',
        'Description': service.description,
        'Created At': new Date(service.createdAt).toLocaleDateString(),
        'Updated At': new Date(service.updatedAt).toLocaleDateString()
      }));

      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(exportData);
      XLSX.utils.book_append_sheet(wb, ws, 'Services');

      const fileName = `services_${filter}_${new Date().toISOString().split('T')[0]}.xlsx`;
      XLSX.writeFile(wb, fileName);

    } catch (err) {
      console.error('Export error:', err);
      alert('Error exporting data to Excel');
    }
  };

  // Determine urgency based on delivery time
  const getUrgency = (deliveryTime: string): string => {
    const time = deliveryTime.toLowerCase();
    if (time.includes('instant') || time.includes('immediate') || time.includes('1 hour') || time.includes('fast')) {
      return 'high';
    } else if (time.includes('day') || time.includes('24') || time.includes('48')) {
      return 'medium';
    } else {
      return 'low';
    }
  };

  const getStatusColor = (status: string) => {
    const colors: StatusColors = {
      active: { bg: '#d1fae5', text: '#065f46' },
      inactive: { bg: '#fef3c7', text: '#92400e' }
    };
    return colors[status] || colors.inactive;
  };

  const getUrgencyColor = (urgency: string) => {
    const colors: UrgencyColors = {
      high: '#ef4444',
      medium: '#f59e0b',
      low: '#10b981'
    };
    return colors[urgency] || '#6b7280';
  };

  const updateServiceStatus = async (id: string, newStatus: string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/services/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      const result = await response.json();

      if (result.success) {
        // Update local state
        setServices(services.map(service => 
          service._id === id ? { ...service, status: newStatus } : service
        ));
      } else {
        alert('Failed to update service status');
      }
    } catch (err) {
      console.error('Update service error:', err);
      alert('Error updating service status');
    }
  };

  const deleteService = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      try {
        const response = await fetch(`http://localhost:5000/api/services/${id}`, {
          method: 'DELETE',
        });

        const result = await response.json();

        if (result.success) {
          // Remove from local state
          setServices(services.filter(service => service._id !== id));
        } else {
          alert('Failed to delete service');
        }
      } catch (err) {
        console.error('Delete service error:', err);
        alert('Error deleting service');
      }
    }
  };

  const styles = {
    pageContainer: {
      padding: '2rem',
      maxWidth: '1400px',
      margin: '0 auto',
    } as React.CSSProperties,
    pageHeader: {
      marginBottom: '2rem',
    } as React.CSSProperties,
    pageTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#1a202c',
      marginBottom: '0.5rem',
    } as React.CSSProperties,
    pageSubtitle: {
      fontSize: '1.2rem',
      color: '#718096',
      marginBottom: '2rem',
    } as React.CSSProperties,
    headerActions: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '2rem',
      flexWrap: 'wrap' as const,
      gap: '1rem',
    } as React.CSSProperties,
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
    } as React.CSSProperties,
    filters: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '2rem',
      flexWrap: 'wrap' as const,
    } as React.CSSProperties,
    filterBtn: {
      padding: '0.5rem 1rem',
      border: '1px solid #e2e8f0',
      background: 'white',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    } as React.CSSProperties,
    filterBtnActive: {
      background: '#4f46e5',
      color: 'white',
      borderColor: '#4f46e5',
    } as React.CSSProperties,
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1rem',
      marginBottom: '2rem',
    } as React.CSSProperties,
    statCard: {
      background: 'white',
      padding: '1.5rem',
      borderRadius: '12px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      textAlign: 'center' as const,
    } as React.CSSProperties,
    statValue: {
      fontSize: '2rem',
      fontWeight: '700',
      marginBottom: '0.5rem',
    } as React.CSSProperties,
    statLabel: {
      color: '#718096',
      fontSize: '0.875rem',
    } as React.CSSProperties,
    tableContainer: {
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      overflow: 'hidden',
    } as React.CSSProperties,
    table: {
      width: '100%',
      borderCollapse: 'collapse' as const,
    } as React.CSSProperties,
    tableHeader: {
      background: '#f8fafc',
      borderBottom: '1px solid #e2e8f0',
    } as React.CSSProperties,
    tableHeaderCell: {
      padding: '1rem',
      textAlign: 'left' as const,
      fontWeight: '600',
      color: '#374151',
      fontSize: '0.875rem',
    } as React.CSSProperties,
    tableCell: {
      padding: '1rem',
      borderBottom: '1px solid #f1f5f9',
    } as React.CSSProperties,
    statusBadge: {
      padding: '0.25rem 0.75rem',
      borderRadius: '20px',
      fontSize: '0.75rem',
      fontWeight: '600',
      display: 'inline-block',
    } as React.CSSProperties,
    actionBtn: {
      padding: '0.25rem 0.75rem',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '0.75rem',
      marginRight: '0.5rem',
      transition: 'all 0.3s ease',
    } as React.CSSProperties,
    viewBtn: {
      background: '#dbeafe',
      color: '#1e40af',
    } as React.CSSProperties,
    editBtn: {
      background: '#fef3c7',
      color: '#92400e',
    } as React.CSSProperties,
    deleteBtn: {
      background: '#fee2e2',
      color: '#dc2626',
    } as React.CSSProperties,
    modalOverlay: {
      position: 'fixed' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    } as React.CSSProperties,
    modalContent: {
      background: 'white',
      padding: '2rem',
      borderRadius: '12px',
      maxWidth: '600px',
      width: '90%',
      maxHeight: '80vh',
      overflow: 'auto',
    } as React.CSSProperties,
    detailGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
      marginBottom: '1rem',
    } as React.CSSProperties,
    detailItem: {
      marginBottom: '1rem',
    } as React.CSSProperties,
    detailLabel: {
      fontWeight: '600',
      color: '#374151',
      marginBottom: '0.25rem',
    } as React.CSSProperties,
    detailValue: {
      color: '#6b7280',
    } as React.CSSProperties,
    messageBox: {
      background: '#f8fafc',
      padding: '1rem',
      borderRadius: '8px',
      marginTop: '1rem',
    } as React.CSSProperties,
    loading: {
      textAlign: 'center' as const,
      padding: '2rem',
      color: '#6b7280',
    } as React.CSSProperties,
    error: {
      textAlign: 'center' as const,
      padding: '2rem',
      color: '#dc2626',
      background: '#fef2f2',
      borderRadius: '8px',
      marginBottom: '2rem',
    } as React.CSSProperties,
  };

  if (loading) {
    return (
      <div style={styles.pageContainer}>
        <div style={styles.loading}>Loading services...</div>
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
            onClick={fetchServices}
            style={{
              background: '#4f46e5',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              cursor: 'pointer',
              marginTop: '1rem'
            } as React.CSSProperties}
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
          <h1 style={styles.pageTitle}>Service Management</h1>
          <p style={styles.pageSubtitle}>Manage and track all social media services</p>
        </div>
        
        <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
          <button 
            style={styles.exportBtn}
            onClick={exportToExcel}
            title="Export all services to Excel"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Export All to Excel
          </button>
          
          {filter !== 'all' && (
            <button 
              style={{
                ...styles.exportBtn,
                background: '#f59e0b'
              } as React.CSSProperties}
              onClick={exportFilteredToExcel}
              title={`Export ${filter} services to Excel`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Export {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          )}
        </div>
      </div>

      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={{...styles.statValue, color: '#3b82f6'}}>{services.length}</div>
          <div style={styles.statLabel}>Total Services</div>
        </div>
        <div style={styles.statCard}>
          <div style={{...styles.statValue, color: '#10b981'}}>
            {services.filter(s => s.status === 'active').length}
          </div>
          <div style={styles.statLabel}>Active</div>
        </div>
        <div style={styles.statCard}>
          <div style={{...styles.statValue, color: '#f59e0b'}}>
            {services.filter(s => s.status === 'inactive').length}
          </div>
          <div style={styles.statLabel}>Inactive</div>
        </div>
      </div>

      <div style={styles.filters}>
        <button 
          style={{
            ...styles.filterBtn, 
            ...(filter === 'all' ? styles.filterBtnActive : {})
          } as React.CSSProperties}
          onClick={() => setFilter('all')}
        >
          All Services
        </button>
        <button 
          style={{
            ...styles.filterBtn, 
            ...(filter === 'active' ? styles.filterBtnActive : {})
          } as React.CSSProperties}
          onClick={() => setFilter('active')}
        >
          Active
        </button>
        <button 
          style={{
            ...styles.filterBtn, 
            ...(filter === 'inactive' ? styles.filterBtnActive : {})
          } as React.CSSProperties}
          onClick={() => setFilter('inactive')}
        >
          Inactive
        </button>
      </div>

      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead style={styles.tableHeader}>
            <tr>
              <th style={styles.tableHeaderCell}>Service Name</th>
              <th style={styles.tableHeaderCell}>Provider</th>
              <th style={styles.tableHeaderCell}>Platform</th>
              <th style={styles.tableHeaderCell}>Price</th>
              <th style={styles.tableHeaderCell}>Quantity Range</th>
              <th style={styles.tableHeaderCell}>Delivery Time</th>
              <th style={styles.tableHeaderCell}>Status</th>
              <th style={styles.tableHeaderCell}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredServices.map((service) => {
              const statusColor = getStatusColor(service.status);
              const urgency = getUrgency(service.deliveryTime);
              const urgencyColor = getUrgencyColor(urgency);
              
              return (
                <tr key={service._id}>
                  <td style={styles.tableCell}>
                    <div>
                      <div style={{fontWeight: '600'} as React.CSSProperties}>{service.serviceName}</div>
                      <div style={{fontSize: '0.875rem', color: '#6b7280'} as React.CSSProperties}>{service.category}</div>
                    </div>
                  </td>
                  <td style={styles.tableCell}>
                    <div>
                      <div style={{fontWeight: '600'} as React.CSSProperties}>{service.username}</div>
                      <div style={{fontSize: '0.875rem', color: '#6b7280'} as React.CSSProperties}>{service.email}</div>
                    </div>
                  </td>
                  <td style={styles.tableCell}>{service.platform}</td>
                  <td style={styles.tableCell}>${service.basePrice}</td>
                  <td style={styles.tableCell}>
                    {service.minQuantity} - {service.maxQuantity}
                  </td>
                  <td style={styles.tableCell}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'} as React.CSSProperties}>
                      <div 
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: urgencyColor
                        } as React.CSSProperties}
                      />
                      {service.deliveryTime}
                    </div>
                  </td>
                  <td style={styles.tableCell}>
                    <span style={{
                      ...styles.statusBadge,
                      background: statusColor.bg,
                      color: statusColor.text
                    } as React.CSSProperties}>
                      {service.status.charAt(0).toUpperCase() + service.status.slice(1).replace('_', ' ')}
                    </span>
                  </td>
                  <td style={styles.tableCell}>
                    <button 
                      style={{...styles.actionBtn, ...styles.viewBtn} as React.CSSProperties}
                      onClick={() => setSelectedService(service)}
                    >
                      View
                    </button>
                    <select 
                      value={service.status}
                      onChange={(e) => updateServiceStatus(service._id, e.target.value)}
                      style={{
                        padding: '0.25rem',
                        borderRadius: '4px',
                        border: '1px solid #e2e8f0',
                        fontSize: '0.75rem',
                        marginRight: '0.5rem'
                      } as React.CSSProperties}
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                    <button 
                      style={{...styles.actionBtn, ...styles.deleteBtn} as React.CSSProperties}
                      onClick={() => deleteService(service._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {selectedService && (
        <div style={styles.modalOverlay} onClick={() => setSelectedService(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2 style={{marginBottom: '1rem'} as React.CSSProperties}>Service Details</h2>
            <div style={styles.detailGrid}>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Service Name</div>
                <div style={styles.detailValue}>{selectedService.serviceName}</div>
              </div>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Provider</div>
                <div style={styles.detailValue}>{selectedService.username}</div>
              </div>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Email</div>
                <div style={styles.detailValue}>{selectedService.email}</div>
              </div>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Phone</div>
                <div style={styles.detailValue}>{selectedService.phoneNumber}</div>
              </div>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Platform</div>
                <div style={styles.detailValue}>{selectedService.platform}</div>
              </div>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Category</div>
                <div style={styles.detailValue}>{selectedService.category}</div>
              </div>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Base Price</div>
                <div style={styles.detailValue}>${selectedService.basePrice}</div>
              </div>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Quantity Range</div>
                <div style={styles.detailValue}>{selectedService.minQuantity} - {selectedService.maxQuantity}</div>
              </div>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Delivery Time</div>
                <div style={styles.detailValue}>{selectedService.deliveryTime}</div>
              </div>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Quality</div>
                <div style={styles.detailValue}>{selectedService.quality}</div>
              </div>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Refill Available</div>
                <div style={styles.detailValue}>{selectedService.refill ? 'Yes' : 'No'}</div>
              </div>
              {selectedService.refillPeriod && (
                <div style={styles.detailItem}>
                  <div style={styles.detailLabel}>Refill Period</div>
                  <div style={styles.detailValue}>{selectedService.refillPeriod}</div>
                </div>
              )}
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Status</div>
                <div style={styles.detailValue}>
                  <span style={{
                    ...styles.statusBadge,
                    background: getStatusColor(selectedService.status).bg,
                    color: getStatusColor(selectedService.status).text
                  } as React.CSSProperties}>
                    {selectedService.status.charAt(0).toUpperCase() + selectedService.status.slice(1).replace('_', ' ')}
                  </span>
                </div>
              </div>
            </div>
            <div style={styles.detailItem}>
              <div style={styles.detailLabel}>Description</div>
              <div style={styles.messageBox}>
                {selectedService.description}
              </div>
            </div>
            <button 
              style={{
                background: '#4f46e5',
                color: 'white',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                cursor: 'pointer',
                marginTop: '1rem'
              } as React.CSSProperties}
              onClick={() => setSelectedService(null)}
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
