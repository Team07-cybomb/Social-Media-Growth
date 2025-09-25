// src/Admin/Services.tsx
import { useState } from "react";

// Type definitions
interface Service {
  id: number;
  name: string;
  platform: string;
  basePrice: string;
  minQuantity: number;
  maxQuantity: number;
  deliveryTime: string;
  status: string;
  description: string;
}

const Services = () => {
  const [services, setServices] = useState<Service[]>([
    {
      id: 1,
      name: "YouTube Subscribers",
      platform: "YouTube",
      basePrice: "$50",
      minQuantity: 100,
      maxQuantity: 10000,
      deliveryTime: "3-7 days",
      status: "active",
      description: "Organic YouTube subscribers with real engagement"
    },
    {
      id: 2,
      name: "Instagram Followers",
      platform: "Instagram",
      basePrice: "$30",
      minQuantity: 100,
      maxQuantity: 5000,
      deliveryTime: "2-5 days",
      status: "active",
      description: "High-quality Instagram followers"
    },
    {
      id: 3,
      name: "Facebook Page Likes",
      platform: "Facebook",
      basePrice: "$40",
      minQuantity: 100,
      maxQuantity: 10000,
      deliveryTime: "3-7 days",
      status: "active",
      description: "Real Facebook page likes from active users"
    },
    {
      id: 4,
      name: "Twitter Followers",
      platform: "Twitter",
      basePrice: "$25",
      minQuantity: 100,
      maxQuantity: 5000,
      deliveryTime: "2-4 days",
      status: "inactive",
      description: "Active Twitter followers"
    }
  ]);

  const [showForm, setShowForm] = useState<boolean>(false);
  const [editingService, setEditingService] = useState<Service | null>(null);

  const toggleServiceStatus = (id: number) => {
    setServices(services.map(service =>
      service.id === id 
        ? { ...service, status: service.status === 'active' ? 'inactive' : 'active' }
        : service
    ));
  };

  const styles = {
    pageContainer: {
      padding: '2rem',
      maxWidth: '1400px',
      margin: '0 auto',
    },
    pageHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '2rem',
    },
    pageTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#1a202c',
      marginBottom: '0.5rem',
    },
    pageSubtitle: {
      fontSize: '1.2rem',
      color: '#718096',
    },
    btnPrimary: {
      background: '#4f46e5',
      color: 'white',
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '8px',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '1.5rem',
    },
    serviceCard: {
      background: 'white',
      padding: '1.5rem',
      borderRadius: '12px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      border: '1px solid #e2e8f0',
    },
    serviceHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '1rem',
    },
    serviceName: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '0.5rem',
    },
    servicePlatform: {
      color: '#6b7280',
      fontSize: '0.875rem',
    },
    serviceStatus: {
      padding: '0.25rem 0.75rem',
      borderRadius: '20px',
      fontSize: '0.75rem',
      fontWeight: '600',
    },
    serviceDetails: {
      marginBottom: '1rem',
    },
    detailItem: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.5rem',
      fontSize: '0.875rem',
    },
    detailLabel: {
      color: '#6b7280',
    },
    detailValue: {
      fontWeight: '600',
    },
    serviceDescription: {
      color: '#6b7280',
      fontSize: '0.875rem',
      marginBottom: '1rem',
    },
    actionButtons: {
      display: 'flex',
      gap: '0.5rem',
    },
    btnSecondary: {
      background: '#f1f5f9',
      color: '#475569',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '0.875rem',
    },
    btnDanger: {
      background: '#fef2f2',
      color: '#dc2626',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '0.875rem',
    },
    formOverlay: {
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
    },
    formContent: {
      background: 'white',
      padding: '2rem',
      borderRadius: '12px',
      width: '90%',
      maxWidth: '500px',
    },
    formGroup: {
      marginBottom: '1rem',
    },
    formLabel: {
      display: 'block',
      marginBottom: '0.5rem',
      fontWeight: '600',
    },
    formInput: {
      width: '100%',
      padding: '0.75rem',
      border: '1px solid #e2e8f0',
      borderRadius: '6px',
      fontSize: '1rem',
    },
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.pageHeader}>
        <div>
          <h1 style={styles.pageTitle}>Services Management</h1>
          <p style={styles.pageSubtitle}>Configure and manage promotion services</p>
        </div>
        <button 
          style={styles.btnPrimary}
          onClick={() => setShowForm(true)}
        >
          + Add New Service
        </button>
      </div>

      <div style={styles.servicesGrid}>
        {services.map((service) => (
          <div key={service.id} style={styles.serviceCard}>
            <div style={styles.serviceHeader}>
              <div>
                <h3 style={styles.serviceName}>{service.name}</h3>
                <span style={styles.servicePlatform}>{service.platform}</span>
              </div>
              <span style={{
                ...styles.serviceStatus,
                background: service.status === 'active' ? '#d1fae5' : '#fef3c7',
                color: service.status === 'active' ? '#065f46' : '#92400e'
              }}>
                {service.status}
              </span>
            </div>
            
            <div style={styles.serviceDetails}>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>Base Price:</span>
                <span style={styles.detailValue}>{service.basePrice}</span>
              </div>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>Quantity Range:</span>
                <span style={styles.detailValue}>{service.minQuantity} - {service.maxQuantity}</span>
              </div>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>Delivery Time:</span>
                <span style={styles.detailValue}>{service.deliveryTime}</span>
              </div>
            </div>
            
            <p style={styles.serviceDescription}>{service.description}</p>
            
            <div style={styles.actionButtons}>
              <button 
                style={styles.btnSecondary}
                onClick={() => {
                  setEditingService(service);
                  setShowForm(true);
                }}
              >
                Edit
              </button>
              <button 
                style={{
                  ...styles.btnSecondary,
                  background: service.status === 'active' ? '#fef3c7' : '#d1fae5',
                  color: service.status === 'active' ? '#92400e' : '#065f46'
                }}
                onClick={() => toggleServiceStatus(service.id)}
              >
                {service.status === 'active' ? 'Deactivate' : 'Activate'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <div style={styles.formOverlay} onClick={() => setShowForm(false)}>
          <div style={styles.formContent} onClick={(e) => e.stopPropagation()}>
            <h2>{editingService ? 'Edit Service' : 'Add New Service'}</h2>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Service Name</label>
              <input 
                type="text" 
                style={styles.formInput}
                defaultValue={editingService?.name || ''}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Platform</label>
              <input 
                type="text" 
                style={styles.formInput}
                defaultValue={editingService?.platform || ''}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Base Price</label>
              <input 
                type="text" 
                style={styles.formInput}
                defaultValue={editingService?.basePrice || ''}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Description</label>
              <textarea 
                style={{...styles.formInput, minHeight: '100px'}}
                defaultValue={editingService?.description || ''}
              />
            </div>
            <div style={{display: 'flex', gap: '1rem', marginTop: '2rem'}}>
              <button style={styles.btnPrimary}>
                {editingService ? 'Update Service' : 'Add Service'}
              </button>
              <button 
                style={styles.btnSecondary}
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;