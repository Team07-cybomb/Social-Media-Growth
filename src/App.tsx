// src/App.tsx
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { ServicesPage } from "./components/ServicesPage";
import { AboutPage } from "./components/AboutPage";
import { ContactPage } from "./components/ContactPage";
import Blog from "./components/BlogPage";
import ContentMarketingPage from "./components/ContentMarketingPage";
import DigitalStrategyPage from "./components/DigitalStrategyP";
import BestPracticesPage from "./components/BestPracticesPage";
import SMMPage from "./components/SMMPage";
import SocialMediaPage from "./components/SocialMediaPage";
import { Toaster } from "./components/ui/sonner";
import AffiliatePage from "./components/AffiliatePage";
import FAQPage from "./components/FAQPage";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import BlogPost from "./components/BlogPost";
import { InstagramGrowthPage } from "./components/InstagramGrowthPage";
import { TwitterGrowthPage } from "./components/TwitterGrowthPage";
import { FacebookGrowthPage } from "./components/FacebookGrowthPage";
import { LinkedInGrowthPage } from "./components/LinkedinGrowthPage";
import { YouTubeGrowthPage } from "./components/YoutubeGrowthPage";
import AdminRoutes from "./Admin/AdminRoutes";
import SettingsPage from "./components/SettingsPage";
import ProfilePage from "./components/ProfilePage";
import React from "react";

/* Scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/* Layout with Navbar & Footer except for admin routes */
function Layout({
  children,
  isLoggedIn,
  user,
  onLogout,
}: {
  children: React.ReactNode;
  isLoggedIn: boolean;
  user: { name: string; email: string } | null;
  onLogout: () => void;
}) {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  if (isAdminRoute) {
    return <div className="h-screen w-screen">{children}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        currentPage={location.pathname.slice(1) || "home"}
        onNavigate={() => {}}
        isLoggedIn={isLoggedIn}
        user={user}
        onLogout={onLogout}
      />
      <main className="flex-grow">{children}</main>
      <Footer onNavigate={() => {}} />
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );

  /* ✅ Load login state from localStorage on first load */
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  /* ✅ Login handler */
  const handleLogin = (userData: { name: string; email: string }) => {
    setIsLoggedIn(true);
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  /* ✅ Logout handler */
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem("user");
  };

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
      login: "/login",
    };

    if (pageRoutes[page]) {
      window.location.href = pageRoutes[page];
    }
  };

  return (
    <Router>
      <ScrollToTop />

      <Layout isLoggedIn={isLoggedIn} user={user} onLogout={handleLogout}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/affiliate" element={<AffiliatePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />

          <Route path="/instagram-growth" element={<InstagramGrowthPage />} />
          <Route path="/twitter-growth" element={<TwitterGrowthPage />} />
          <Route path="/facebook-growth" element={<FacebookGrowthPage />} />
          <Route path="/linkedin-growth" element={<LinkedInGrowthPage />} />
          <Route path="/youtube-growth" element={<YouTubeGrowthPage />} />
          <Route path="/content-marketing" element={<ContentMarketingPage />} />
          <Route path="/digital-strategy" element={<DigitalStrategyPage />} />
          <Route path="/best-practices" element={<BestPracticesPage />} />
          <Route path="/smm-page" element={<SMMPage />} />
          <Route path="/social-media" element={<SocialMediaPage />} />
          <Route path="/blog-post" element={<BlogPost />} />

          {/* Admin Routes */}
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route
            path="/home"
            element={<HomePage onNavigate={handleNavigate} />}
          />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Layout>

      <Toaster />
    </Router>
  );
}
