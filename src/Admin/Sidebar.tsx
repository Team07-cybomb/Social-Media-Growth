// src/Admin/Sidebar.tsx
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/admin/dashboard", label: "Dashboard", icon: "📊" },
    { path: "/admin/promotion-requests", label: "Promotion Requests", icon: "🚀" },
    { path: "/admin/customers", label: "Log-in Users", icon: "👥" },
    { path: "/admin/services", label: "Customers", icon: "👥" },
    // { path: "/admin/analytics", label: "Analytics", icon: "📈" },
    // { path: "/admin/settings", label: "Settings", icon: "⚙️" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
  };

  const styles = {
    sidebar: {
      width: '280px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column' as const,
      position: 'fixed' as const,
      height: '100vh',
      left: 0,
      top: 0,
      zIndex: 1000,
      boxShadow: '4px 0 20px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease',
    },
    sidebarHeader: {
      padding: '2rem 1.5rem 1.5rem',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
    },
    logoIcon: {
      fontSize: '2rem',
      background: 'rgba(255, 255, 255, 0.1)',
      padding: '0.5rem',
      borderRadius: '12px',
      backdropFilter: 'blur(10px)',
    },
    companyName: {
      fontSize: '1.25rem',
      fontWeight: '700',
      marginBottom: '0.25rem',
    },
    companySubtitle: {
      fontSize: '0.75rem',
      opacity: 0.7,
    },
    sidebarNav: {
      flex: 1,
      padding: '1.5rem 1rem',
    },
    navItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '0.875rem 1rem',
      marginBottom: '0.5rem',
      borderRadius: '12px',
      color: 'rgba(255, 255, 255, 0.8)',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      position: 'relative' as const,
      overflow: 'hidden',
    },
    navItemActive: {
      background: 'rgba(255, 255, 255, 0.15)',
      color: 'white',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    navIcon: {
      fontSize: '1.25rem',
      marginRight: '0.75rem',
      width: '24px',
      textAlign: 'center' as const,
    },
    navLabel: {
      fontWeight: '500',
      flex: 1,
    },
    navIndicator: {
      position: 'absolute' as const,
      right: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 0,
      height: '20px',
      background: 'transparent',
      borderRadius: '2px 0 0 2px',
      transition: 'width 0.3s ease',
    },
    navIndicatorActive: {
      width: '4px',
      background: 'white',
    },
    sidebarFooter: {
      padding: '1.5rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    },
    logoutBtn: {
      width: '100%',
      background: 'rgba(255, 255, 255, 0.1)',
      border: 'none',
      color: 'white',
      padding: '0.875rem 1rem',
      borderRadius: '12px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      backdropFilter: 'blur(10px)',
    },
    mobileToggle: {
      display: 'none',
      position: 'fixed' as const,
      top: '1rem',
      left: '1rem',
      zIndex: 1100,
      background: '#4f46e5',
      border: 'none',
      borderRadius: '8px',
      padding: '0.5rem',
      color: 'white',
      cursor: 'pointer',
    },
    badge: {
      background: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '12px',
      padding: '2px 8px',
      fontSize: '0.75rem',
      fontWeight: '600',
    },
    '@media (max-width: 768px)': {
      sidebar: {
        transform: 'translateX(-100%)',
      },
      sidebarOpen: {
        transform: 'translateX(0)',
      },
      mobileToggle: {
        display: 'block',
      },
    },
  };

  return (
    <>
      <button 
        style={styles.mobileToggle}
        onClick={() => {
          const sidebar = document.querySelector('.admin-sidebar') as HTMLElement;
          if (sidebar) {
            sidebar.style.transform = sidebar.style.transform === 'translateX(0px)' 
              ? 'translateX(-100%)' 
              : 'translateX(0px)';
          }
        }}
      >
        ☰
      </button>
      <div className="admin-sidebar" style={styles.sidebar}>
        <div style={styles.sidebarHeader}>
          <div style={styles.logoContainer}>
            <div style={styles.logoIcon}>🚀</div>
            <div>
              <h2 style={styles.companyName}>PromoManager</h2>
              <p style={styles.companySubtitle}>Social Media Promotion</p>
            </div>
          </div>
        </div>
        
        <nav style={styles.sidebarNav}>
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                ...styles.navItem,
                ...(location.pathname === item.path ? styles.navItemActive : {}),
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== item.path) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateX(4px)';
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== item.path) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }
              }}
            >
              <span style={styles.navIcon}>{item.icon}</span>
              <span style={styles.navLabel}>{item.label}</span>
              {/* {item.path === "/admin/promotion-requests" && (
                <span style={styles.badge}></span>
              )} */}
              <div style={{
                ...styles.navIndicator,
                ...(location.pathname === item.path ? styles.navIndicatorActive : {})
              }}></div>
            </Link>
          ))}
        </nav>
        
        <div style={styles.sidebarFooter}>
          <button
            onClick={handleLogout}
            style={styles.logoutBtn}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>🚪</span>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;