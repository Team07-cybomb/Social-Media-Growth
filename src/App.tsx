// src/App.tsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { ServicesPage } from "./components/ServicesPage";
import { AboutPage } from "./components/AboutPage";
import { ContactPage } from "./components/ContactPage";
import Blog from "./components/blog"; // Import the Blog component
import { Toaster } from "./components/ui/sonner";
import AffiliatePage from "./components/AffiliatePage"; // Ensure this import
import FAQPage from "./components/FAQPage";
import RegisterPage from "./components/RegisterPage"; // Import RegisterPage component
import LoginPage from "./components/LoginPage";
export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<HomePage onNavigate={handleNavigate} />}
            />
            <Route
              path="/services"
              element={<ServicesPage onNavigate={handleNavigate} />}
            />
            <Route
              path="/about"
              element={<AboutPage onNavigate={handleNavigate} />}
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<Blog />} />{" "}
            {/* Add this route for the Blog page */}
            <Route path="/affiliate" element={<AffiliatePage />} />{" "}
            {/* Ensure the correct path */}
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/register" element={<RegisterPage />} />{" "}
            {/* Add this route for the Register page */}
            <Route path="/login" element={<LoginPage />} />

          </Routes>
        </main>

        <Footer onNavigate={handleNavigate} />
        <Toaster />
      </div>
    </Router>
  );
}
