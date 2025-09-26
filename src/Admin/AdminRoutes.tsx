// src/Admin/AdminRoutes.tsx
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";
import Login from "./Login/login";
import Dashboard from "./Dashboard";
import PromotionRequests from "./promotion-requests";
import Customers from "./Customers";
import Services from "./Services";
import Analytics from "./Analytics";
import Settings from "./settings";
import Sidebar from "./Sidebar";

const AdminRoutes = () => {
  const styles = {
    adminApp: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      lineHeight: 1.6,
      color: '#333',
    },
    adminLayout: {
      display: 'flex',
      minHeight: '100vh',
      background: '#f8fafc',
    },
    adminMain: {
      flex: 1,
      overflow: 'auto',
      marginLeft: '280px',
      transition: 'margin-left 0.3s ease',
    },
    pageContainer: {
      padding: '2rem',
      maxWidth: '1400px',
      margin: '0 auto',
    },
    pageTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#1a202c',
      marginBottom: '1rem',
    },
    pageSubtitle: {
      fontSize: '1.2rem',
      color: '#718096',
      marginBottom: '2rem',
    },
    '@media (max-width: 1024px)': {
      adminMain: {
        marginLeft: '0',
      },
    },
    '@media (max-width: 768px)': {
      pageContainer: {
        padding: '1rem',
      },
      pageTitle: {
        fontSize: '2rem',
      },
    },
  };

  return (
    <div style={styles.adminApp}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route 
          path="/*" 
          element={
            <ProtectedRoute>
              <div style={styles.adminLayout}>
                <Sidebar />
                <main style={styles.adminMain}>
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/promotion-requests" element={<PromotionRequests/>} />
                    <Route path="/customers" element={<Customers/>} />
                    <Route path="/services" element={<Services/>} />
                    <Route path="/analytics" element={<Analytics/>} />
                    <Route path="/settings" element={<Settings/>} />
                  </Routes>
                </main>
              </div>
            </ProtectedRoute>
          } 
        />
      </Routes>
    </div>
  );
};

export default AdminRoutes;