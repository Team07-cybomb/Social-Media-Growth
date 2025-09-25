// src/Admin/PromotionRequests.tsx
import { useState, useEffect } from "react";

// Type definitions
interface PromotionRequest {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  platform: string;
  quantity: string;
  budget: string;
  message: string;
  status: string;
  date: string;
  urgency: string;
}

// Type for status colors
interface StatusColors {
  [key: string]: { bg: string; text: string };
  pending: { bg: string; text: string };
  'in-progress': { bg: string; text: string };
  completed: { bg: string; text: string };
  rejected: { bg: string; text: string };
}

// Type for urgency colors
interface UrgencyColors {
  [key: string]: string;
  high: string;
  medium: string;
  low: string;
}

const PromotionRequests = () => {
  const [requests, setRequests] = useState<PromotionRequest[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const [selectedRequest, setSelectedRequest] = useState<PromotionRequest | null>(null);

  useEffect(() => {
    // Mock data - replace with API call
    const mockRequests: PromotionRequest[] = [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "+1234567890",
        service: "YouTube Subscribers",
        platform: "YouTube",
        quantity: "1000",
        budget: "$50",
        message: "Need organic subscribers for my tech channel",
        status: "pending",
        date: "2024-01-15",
        urgency: "high"
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "+1234567891",
        service: "Instagram Followers",
        platform: "Instagram",
        quantity: "5000",
        budget: "$100",
        message: "Looking for real followers for fashion brand",
        status: "in-progress",
        date: "2024-01-14",
        urgency: "medium"
      },
      {
        id: 3,
        name: "Mike Johnson",
        email: "mike@example.com",
        phone: "+1234567892",
        service: "Facebook Page Likes",
        platform: "Facebook",
        quantity: "2000",
        budget: "$75",
        message: "Boost page engagement for local business",
        status: "completed",
        date: "2024-01-13",
        urgency: "low"
      },
      {
        id: 4,
        name: "Sarah Wilson",
        email: "sarah@example.com",
        phone: "+1234567893",
        service: "Twitter Followers",
        platform: "Twitter",
        quantity: "3000",
        budget: "$60",
        message: "Increase Twitter presence for personal brand",
        status: "pending",
        date: "2024-01-12",
        urgency: "high"
      }
    ];
    setRequests(mockRequests);
  }, []);

  const filteredRequests = requests.filter(request => 
    filter === "all" || request.status === filter
  );

  const getStatusColor = (status: string) => {
    const colors: StatusColors = {
      pending: { bg: '#fef3c7', text: '#92400e' },
      'in-progress': { bg: '#dbeafe', text: '#1e40af' },
      completed: { bg: '#d1fae5', text: '#065f46' },
      rejected: { bg: '#fee2e2', text: '#991b1b' }
    };
    return colors[status] || colors.pending;
  };

  const getUrgencyColor = (urgency: string) => {
    const colors: UrgencyColors = {
      high: '#ef4444',
      medium: '#f59e0b',
      low: '#10b981'
    };
    return colors[urgency] || '#6b7280';
  };

  const updateStatus = (id: number, newStatus: string) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: newStatus } : req
    ));
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
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>Promotion Requests</h1>
        <p style={styles.pageSubtitle}>Manage and track all promotion requests from customers</p>
      </div>

      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={{...styles.statValue, color: '#3b82f6'}}>{requests.length}</div>
          <div style={styles.statLabel}>Total Requests</div>
        </div>
        <div style={styles.statCard}>
          <div style={{...styles.statValue, color: '#f59e0b'}}>
            {requests.filter(r => r.status === 'pending').length}
          </div>
          <div style={styles.statLabel}>Pending</div>
        </div>
        <div style={styles.statCard}>
          <div style={{...styles.statValue, color: '#10b981'}}>
            {requests.filter(r => r.status === 'completed').length}
          </div>
          <div style={styles.statLabel}>Completed</div>
        </div>
        <div style={styles.statCard}>
          <div style={{...styles.statValue, color: '#8b5cf6'}}>
            {requests.filter(r => r.status === 'in-progress').length}
          </div>
          <div style={styles.statLabel}>In Progress</div>
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
          All Requests
        </button>
        <button 
          style={{
            ...styles.filterBtn, 
            ...(filter === 'pending' ? styles.filterBtnActive : {})
          } as React.CSSProperties}
          onClick={() => setFilter('pending')}
        >
          Pending
        </button>
        <button 
          style={{
            ...styles.filterBtn, 
            ...(filter === 'in-progress' ? styles.filterBtnActive : {})
          } as React.CSSProperties}
          onClick={() => setFilter('in-progress')}
        >
          In Progress
        </button>
        <button 
          style={{
            ...styles.filterBtn, 
            ...(filter === 'completed' ? styles.filterBtnActive : {})
          } as React.CSSProperties}
          onClick={() => setFilter('completed')}
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
              <th style={styles.tableHeaderCell}>Quantity</th>
              <th style={styles.tableHeaderCell}>Budget</th>
              <th style={styles.tableHeaderCell}>Status</th>
              <th style={styles.tableHeaderCell}>Date</th>
              <th style={styles.tableHeaderCell}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map((request) => {
              const statusColor = getStatusColor(request.status);
              const urgencyColor = getUrgencyColor(request.urgency);
              
              return (
                <tr key={request.id}>
                  <td style={styles.tableCell}>
                    <div>
                      <div style={{fontWeight: '600'} as React.CSSProperties}>{request.name}</div>
                      <div style={{fontSize: '0.875rem', color: '#6b7280'} as React.CSSProperties}>{request.email}</div>
                    </div>
                  </td>
                  <td style={styles.tableCell}>{request.service}</td>
                  <td style={styles.tableCell}>{request.platform}</td>
                  <td style={styles.tableCell}>{request.quantity}</td>
                  <td style={styles.tableCell}>{request.budget}</td>
                  <td style={styles.tableCell}>
                    <span style={{
                      ...styles.statusBadge,
                      background: statusColor.bg,
                      color: statusColor.text
                    } as React.CSSProperties}>
                      {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                    </span>
                  </td>
                  <td style={styles.tableCell}>{request.date}</td>
                  <td style={styles.tableCell}>
                    <button 
                      style={{...styles.actionBtn, ...styles.viewBtn} as React.CSSProperties}
                      onClick={() => setSelectedRequest(request)}
                    >
                      View
                    </button>
                    <select 
                      value={request.status}
                      onChange={(e) => updateStatus(request.id, e.target.value)}
                      style={{
                        padding: '0.25rem',
                        borderRadius: '4px',
                        border: '1px solid #e2e8f0',
                        fontSize: '0.75rem'
                      } as React.CSSProperties}
                    >
                      <option value="pending">Pending</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {selectedRequest && (
        <div style={styles.modalOverlay} onClick={() => setSelectedRequest(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2 style={{marginBottom: '1rem'} as React.CSSProperties}>Request Details</h2>
            <div style={styles.detailGrid}>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Customer Name</div>
                <div style={styles.detailValue}>{selectedRequest.name}</div>
              </div>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Email</div>
                <div style={styles.detailValue}>{selectedRequest.email}</div>
              </div>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Phone</div>
                <div style={styles.detailValue}>{selectedRequest.phone}</div>
              </div>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Service</div>
                <div style={styles.detailValue}>{selectedRequest.service}</div>
              </div>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Platform</div>
                <div style={styles.detailValue}>{selectedRequest.platform}</div>
              </div>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Quantity</div>
                <div style={styles.detailValue}>{selectedRequest.quantity}</div>
              </div>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Budget</div>
                <div style={styles.detailValue}>{selectedRequest.budget}</div>
              </div>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Status</div>
                <div style={styles.detailValue}>
                  <span style={{
                    ...styles.statusBadge,
                    background: getStatusColor(selectedRequest.status).bg,
                    color: getStatusColor(selectedRequest.status).text
                  } as React.CSSProperties}>
                    {selectedRequest.status}
                  </span>
                </div>
              </div>
            </div>
            <div style={styles.detailItem}>
              <div style={styles.detailLabel}>Customer Message</div>
              <div style={styles.messageBox}>
                {selectedRequest.message}
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
              onClick={() => setSelectedRequest(null)}
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