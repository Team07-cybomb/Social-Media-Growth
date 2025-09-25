// src/App.tsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { ServicesPage } from "./components/ServicesPage";
import { AboutPage } from "./components/AboutPage";
import { ContactPage } from "./components/ContactPage";
import Blog from "./components/blog";
import { Toaster } from "./components/ui/sonner";
import AffiliatePage from "./components/AffiliatePage";
import FAQPage from "./components/FAQPage";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import AdminRoutes from "./Admin/AdminRoutes";

// Layout component to conditionally show navbar/footer
function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  if (isAdminRoute) {
    return <div className="h-screen w-screen">{children}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={location.pathname.slice(1) || 'home'} onNavigate={() => {}} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer onNavigate={() => {}} />
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    const pageRoutes: { [key: string]: string } = {
      register: "/register",
      about: "/about",
      contact: "/contact",
      services: "/services",
      home: "/",
      blog: "/blog",
      affiliate: "/affiliate",
      faq: "/faq",
      login: "/login"
    };
    
    if (pageRoutes[page]) {
      window.location.href = pageRoutes[page];
    }
  };

  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage onNavigate={handleNavigate} />} />
          <Route path="/services" element={<ServicesPage onNavigate={handleNavigate} />} />
          <Route path="/about" element={<AboutPage onNavigate={handleNavigate} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/affiliate" element={<AffiliatePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          
          {/* Admin Routes */}
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
      </Layout>
      <Toaster />
    </Router>
  );
}