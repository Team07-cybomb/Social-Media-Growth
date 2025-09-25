// src/Admin/Dashboard.tsx
import { useState, useEffect } from "react";

// Define types for our data
interface PromotionRequest {
  id: number;
  name: string;
  service: string;
  status: 'pending' | 'in-progress' | 'completed' | 'rejected';
  date: string;
}

interface DashboardStats {
  totalRequests: number;
  pendingRequests: number;
  completedRequests: number;
  totalCustomers: number;
}

interface StatData {
  value: string;
  label: string;
  change: string;
  icon: string;
  color: string;
}

interface Service {
  name: string;
  count: number;
  icon: string;
}

const Dashboard = () => {
  const [promotionRequests, setPromotionRequests] = useState<PromotionRequest[]>([]);
  const [stats, setStats] = useState<DashboardStats>({
    totalRequests: 0,
    pendingRequests: 0,
    completedRequests: 0,
    totalCustomers: 0
  });

  // Mock data - replace with actual API calls
  useEffect(() => {
    // Simulate API call
    const mockData = {
      promotionRequests: [
        { id: 1, name: "John Doe", service: "YouTube Subscribers", status: "pending" as const, date: "2024-01-15" },
        { id: 2, name: "Jane Smith", service: "Instagram Followers", status: "in-progress" as const, date: "2024-01-14" },
        { id: 3, name: "Mike Johnson", service: "Facebook Page Likes", status: "completed" as const, date: "2024-01-13" },
        { id: 4, name: "Sarah Wilson", service: "Twitter Followers", status: "pending" as const, date: "2024-01-12" }
      ],
      stats: {
        totalRequests: 156,
        pendingRequests: 12,
        completedRequests: 134,
        totalCustomers: 89
      }
    };
    
    setPromotionRequests(mockData.promotionRequests);
    setStats(mockData.stats);
  }, []);

  const statsData: StatData[] = [
    { 
      value: stats.totalRequests.toString(), 
      label: "Total Requests", 
      change: "+8%", 
      icon: "📨", 
      color: "blue" 
    },
    { 
      value: stats.pendingRequests.toString(), 
      label: "Pending Requests", 
      change: "+3 new", 
      icon: "⏳", 
      color: "orange" 
    },
    { 
      value: stats.completedRequests.toString(), 
      label: "Completed", 
      change: "+12%", 
      icon: "✅", 
      color: "green" 
    },
    { 
      value: stats.totalCustomers.toString(), 
      label: "Total Customers", 
      change: "+5 new", 
      icon: "👥", 
      color: "purple" 
    }
  ];

  const services: Service[] = [
    { name: "YouTube Subscribers", count: 45, icon: "📺" },
    { name: "Instagram Followers", count: 67, icon: "📷" },
    { name: "Facebook Page Likes", count: 23, icon: "👍" },
    { name: "Twitter Followers", count: 34, icon: "🐦" },
    { name: "TikTok Followers", count: 28, icon: "🎵" },
    { name: "Website Traffic", count: 15, icon: "🌐" }
  ];

  const getStatusColor = (status: PromotionRequest['status']): string => {
    const colors = {
      pending: '#f59e0b',
      'in-progress': '#3b82f6',
      completed: '#10b981',
      rejected: '#ef4444'
    };
    return colors[status] || '#6b7280';
  };

  const styles = {
    dashboardContainer: {
      padding: '2rem',
      maxWidth: '1400px',
      margin: '0 auto',
      marginLeft: '0px',
      transition: 'margin-left 0.3s ease',
    },
    dashboardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '2rem',
      flexWrap: 'wrap' as const,
      gap: '1rem',
    },
    dashboardTitle: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#1a202c',
      marginBottom: '0.5rem',
    },
    dashboardSubtitle: {
      color: '#718096',
      fontSize: '1.1rem',
    },
    headerActions: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap' as const,
    },
    btnPrimary: {
      background: '#4f46e5',
      color: 'white',
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '10px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    btnSecondary: {
      background: 'white',
      color: '#4a5568',
      border: '1px solid #e2e8f0',
      padding: '0.75rem 1.5rem',
      borderRadius: '10px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
      marginBottom: '2rem',
    },
    statCard: {
      background: 'white',
      padding: '1.5rem',
      borderRadius: '16px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      border: '1px solid #e2e8f0',
      transition: 'all 0.3s ease',
    },
    statContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '1rem',
    },
    statLabel: {
      fontSize: '0.875rem',
      fontWeight: '600',
      color: '#718096',
      marginBottom: '0.5rem',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.05em',
    },
    statValue: {
      fontSize: '2rem',
      fontWeight: '700',
      marginBottom: '0.25rem',
    },
    statChange: {
      fontSize: '0.875rem',
      fontWeight: '600',
    },
    statChangePositive: {
      color: '#10b981',
    },
    statIcon: {
      fontSize: '2.5rem',
      opacity: 0.8,
    },
    dashboardContent: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: '2rem',
      marginBottom: '2rem',
    },
    contentCard: {
      background: 'white',
      borderRadius: '16px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      border: '1px solid #e2e8f0',
      overflow: 'hidden',
    },
    cardHeader: {
      padding: '1.5rem',
      borderBottom: '1px solid #e2e8f0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#1a202c',
    },
    textLink: {
      color: '#4f46e5',
      textDecoration: 'none',
      fontWeight: '500',
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      fontSize: '0.875rem',
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
      fontWeight: '600',
      color: '#374151',
      fontSize: '0.875rem',
    },
    tableCell: {
      padding: '1rem',
      borderBottom: '1px solid #f1f5f9',
    },
    statusBadge: {
      padding: '0.25rem 0.75rem',
      borderRadius: '12px',
      fontSize: '0.75rem',
      fontWeight: '600',
      display: 'inline-block',
    },
    servicesGrid: {
      padding: '1.5rem',
      display: 'grid',
      gap: '1rem',
    },
    serviceItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem',
      background: '#f8fafc',
      borderRadius: '12px',
      transition: 'all 0.3s ease',
    },
    serviceInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },
    serviceIcon: {
      fontSize: '1.5rem',
    },
    serviceName: {
      fontWeight: '500',
      color: '#374151',
    },
    serviceCount: {
      background: '#4f46e5',
      color: 'white',
      padding: '0.25rem 0.75rem',
      borderRadius: '12px',
      fontSize: '0.875rem',
      fontWeight: '600',
    },
    quickActionsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1rem',
      marginTop: '2rem',
    },
    quickActionBtn: {
      background: 'white',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      padding: '1.5rem 1rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      gap: '0.5rem',
      fontWeight: '500',
      color: '#374151',
    },
    actionIcon: {
      fontSize: '2rem',
    },
    '@media (max-width: 1024px)': {
      dashboardContent: {
        gridTemplateColumns: '1fr',
      },
      dashboardContainer: {
        marginLeft: '0',
        padding: '1rem',
      },
    },
    '@media (max-width: 768px)': {
      statsGrid: {
        gridTemplateColumns: '1fr',
      },
      headerActions: {
        width: '100%',
        justifyContent: 'center',
      },
      dashboardHeader: {
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center' as const,
      },
      quickActionsGrid: {
        gridTemplateColumns: '1fr',
      },
    },
  };

  const getColorStyle = (color: string) => {
    const colors: { [key: string]: any } = {
      blue: { color: '#3b82f6' },
      green: { color: '#10b981' },
      purple: { color: '#8b5cf6' },
      orange: { color: '#f59e0b' },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div style={styles.dashboardContainer}>
      <div style={styles.dashboardHeader}>
        <div>
          <h1 style={styles.dashboardTitle}>Promotion Dashboard</h1>
          <p style={styles.dashboardSubtitle}>Manage social media promotion requests and services</p>
        </div>
        <div style={styles.headerActions}>
          <button 
            style={styles.btnSecondary}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f7fafc';
              e.currentTarget.style.borderColor = '#cbd5e0';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.borderColor = '#e2e8f0';
            }}
            onClick={() => window.location.reload()}
          >
            <span>↻</span>
            Refresh Data
          </button>
          <button 
            style={styles.btnPrimary}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#4338ca';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(79, 70, 229, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#4f46e5';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            onClick={() => window.location.href = '/admin/promotion-requests'}
          >
            <span>+</span>
            View All Requests
          </button>
        </div>
      </div>
      
      <div style={styles.statsGrid}>
        {statsData.map((stat, index) => (
          <div 
            key={index} 
            style={styles.statCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
            }}
          >
            <div style={styles.statContent}>
              <div>
                <h3 style={styles.statLabel}>{stat.label}</h3>
                <p style={{...styles.statValue, ...getColorStyle(stat.color)}}>{stat.value}</p>
                <span style={{...styles.statChange, ...styles.statChangePositive}}>{stat.change}</span>
              </div>
              <div style={styles.statIcon}>{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>
      
      <div style={styles.dashboardContent}>
        <div style={styles.contentCard}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>Recent Promotion Requests</h2>
            <button style={styles.textLink}>View All</button>
          </div>
          <table style={styles.table}>
            <thead style={styles.tableHeader}>
              <tr>
                <th style={styles.tableHeaderCell}>Customer</th>
                <th style={styles.tableHeaderCell}>Service</th>
                <th style={styles.tableHeaderCell}>Status</th>
                <th style={styles.tableHeaderCell}>Date</th>
                <th style={styles.tableHeaderCell}>Action</th>
              </tr>
            </thead>
            <tbody>
              {promotionRequests.map((request) => (
                <tr key={request.id}>
                  <td style={styles.tableCell}>{request.name}</td>
                  <td style={styles.tableCell}>{request.service}</td>
                  <td style={styles.tableCell}>
                    <span style={{
                      ...styles.statusBadge,
                      background: getStatusColor(request.status) + '20',
                      color: getStatusColor(request.status)
                    }}>
                      {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                    </span>
                  </td>
                  <td style={styles.tableCell}>{request.date}</td>
                  <td style={styles.tableCell}>
                    <button style={styles.textLink}>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div style={styles.contentCard}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>Popular Services</h2>
          </div>
          <div style={styles.servicesGrid}>
            {services.map((service, index) => (
              <div 
                key={index} 
                style={styles.serviceItem}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#4f46e5';
                  e.currentTarget.style.transform = 'translateX(4px)';
                  const name = e.currentTarget.querySelector('.service-name') as HTMLElement;
                  const count = e.currentTarget.querySelector('.service-count') as HTMLElement;
                  if (name && count) {
                    name.style.color = 'white';
                    count.style.background = 'white';
                    count.style.color = '#4f46e5';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f8fafc';
                  e.currentTarget.style.transform = 'translateX(0)';
                  const name = e.currentTarget.querySelector('.service-name') as HTMLElement;
                  const count = e.currentTarget.querySelector('.service-count') as HTMLElement;
                  if (name && count) {
                    name.style.color = '#374151';
                    count.style.background = '#4f46e5';
                    count.style.color = 'white';
                  }
                }}
              >
                <div style={styles.serviceInfo}>
                  <span style={styles.serviceIcon}>{service.icon}</span>
                  <span style={styles.serviceName} className="service-name">{service.name}</span>
                </div>
                <span style={styles.serviceCount} className="service-count">{service.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={styles.quickActionsGrid}>
        <button 
          style={styles.quickActionBtn}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#4f46e5';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'white';
            e.currentTarget.style.color = '#374151';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          onClick={() => window.location.href = '/admin/promotion-requests'}
        >
          <span style={styles.actionIcon}>🚀</span>
          Manage Requests
        </button>
        <button 
          style={styles.quickActionBtn}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#4f46e5';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'white';
            e.currentTarget.style.color = '#374151';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          onClick={() => window.location.href = '/admin/customers'}
        >
          <span style={styles.actionIcon}>👥</span>
          Customer Management
        </button>
        <button 
          style={styles.quickActionBtn}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#4f46e5';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'white';
            e.currentTarget.style.color = '#374151';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          onClick={() => window.location.href = '/admin/analytics'}
        >
          <span style={styles.actionIcon}>📈</span>
          View Analytics
        </button>
        <button 
          style={styles.quickActionBtn}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#4f46e5';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'white';
            e.currentTarget.style.color = '#374151';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          onClick={() => window.location.href = '/admin/settings'}
        >
          <span style={styles.actionIcon}>⚙️</span>
          Settings
        </button>
      </div>
    </div>
  );
};

export default Dashboard;