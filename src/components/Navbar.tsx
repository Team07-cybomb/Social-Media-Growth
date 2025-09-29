import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, User, LogOut, Settings, LayoutDashboard } from "lucide-react";
interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isLoggedIn: boolean;
  user: { name: string; email: string } | null;
  onLogout: () => void;
}

export function Navbar({
  currentPage,
  onNavigate,
  isLoggedIn,
  user,
  onLogout,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Affiliate", href: "/affiliate" },
    { name: "FAQ", href: "/faq" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsProfileDropdownOpen(false);
  }, [location]);

  const handleLogout = () => {
    onLogout();
    setIsProfileDropdownOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <>
      <style>
        {`
          /* Navbar background styles */
          .navbar-sticky {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(226, 232, 240, 0.8);
            animation: slideDown 0.5s ease-out;
          }
          .navbar-sticky.scrolled {
            background: rgba(255, 255, 255, 0.98);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          }

          /* Logo hover effect */
          .logo-hover {
            position: relative;
            font-weight: bold;
            font-size: 1.2rem;
            color: #3b82f6;
            transition: all 0.3s ease;
          }
          .logo-hover::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -2px;
            left: 0;
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.3s ease;
          }
          .logo-hover:hover::before {
            transform: scaleX(1);
            transform-origin: left;
          }

          /* Desktop Nav Links */
          .nav-link {
            position: relative;
            font-weight: 500;
            transition: all 0.3s ease;
          }
          .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: 0;
            left: 50%;
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            transition: all 0.3s ease;
            transform: translateX(-50%);
          }
          .nav-link:hover::after,
          .nav-link.active::after {
            width: 80%;
            animation: underlineSlide 0.3s ease-out;
          }

          /* Register button */
          .register-special {
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            color: white;
            border-radius: 8px;
            padding: 0.5rem 1rem;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }
          .register-special::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.2),
              transparent
            );
            transition: left 0.5s ease;
          }
          .register-special:hover::before {
            left: 100%;
          }
          .register-special:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
          }

          /* Mobile Menu Button */
          .menu-button {
            transition: all 0.3s ease;
            border-radius: 8px;
          }
          .menu-button:hover {
            background: rgba(59, 130, 246, 0.1);
            transform: scale(1.05);
          }

          /* Mobile menu animation */
          .mobile-menu-slide {
            animation: slideDown 0.3s ease-out;
          }
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* 🔹 Profile Icon and Dropdown */
          .profile-dropdown {
            position: relative;
          }
          .profile-button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 42px;
            height: 42px;
            border-radius: 50%;
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            color: #ffffff;
            border: none;
            cursor: pointer;
            font-size: 18px;
            transition: all 0.3s ease;
            box-shadow: 0 3px 8px rgba(59, 130, 246, 0.25);
          }
          .profile-button:hover {
            transform: scale(1.1);
            box-shadow: 0 5px 15px rgba(59, 130, 246, 0.35);
          }

          .dropdown-menu {
            position: absolute;
            top: 110%;
            right: 0;
            background: #ffffff;
            border: 1px solid #e5e7eb;
            border-radius: 10px;
            min-width: 220px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
            animation: fadeSlideDown 0.25s ease-out;
            z-index: 1000;
            overflow: hidden;
          }
          @keyframes fadeSlideDown {
            from {
              opacity: 0;
              transform: translateY(-12px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .user-info {
            padding: 12px 16px;
            background: #f9fafb;
            border-bottom: 1px solid #f1f5f9;
          }
          .user-name {
            font-weight: 600;
            font-size: 15px;
            color: #1e293b;
          }
          .user-email {
            font-size: 13px;
            color: #6b7280;
            margin-top: 2px;
          }

          .dropdown-item {
            display: flex;
            align-items: center;
            width: 100%;
            padding: 12px 16px;
            font-size: 14px;
            color: #374151;
            background: none;
            border: none;
            text-decoration: none;
            cursor: pointer;
            gap: 8px;
            transition: all 0.2s ease;
          }
          .dropdown-item:hover {
            background: #f3f4f6;
            color: #3b82f6;
          }
          .dropdown-item svg {
            width: 18px;
            height: 18px;
            color: #6b7280;
            transition: color 0.2s ease;
          }
          .dropdown-item:hover svg {
            color: #3b82f6;
          }

          .dropdown-item.logout {
            color: #ef4444;
          }
          .dropdown-item.logout svg {
            color: #ef4444;
          }
          .dropdown-item.logout:hover {
            background: #fef2f2;
            color: #dc2626;
          }

          .dropdown-backdrop {
            position: fixed;
            inset: 0;
            z-index: 900;
            background: transparent;
          }
        `}
      </style>

      <nav
        className={`navbar-sticky sticky top-0 z-50 ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="logo-hover"
                onClick={() => onNavigate("home")}
              >
                SocialGrowth
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`nav-link px-3 py-2 ${
                      location.pathname === item.href
                        ? "active text-primary font-semibold"
                        : "text-gray-600 hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                {isLoggedIn ? (
                  <div className="profile-dropdown">
                    <button
                      className="profile-button"
                      onClick={() =>
                        setIsProfileDropdownOpen(!isProfileDropdownOpen)
                      }
                    >
                      <User size={20} />
                    </button>
                    {isProfileDropdownOpen && (
                      <>
                        <div
                          className="dropdown-backdrop"
                          onClick={() => setIsProfileDropdownOpen(false)}
                        />
                        <div className="dropdown-menu">
                          <div className="user-info">
                            <div className="user-name">
                              {user?.name || "User"}
                            </div>
                            <div className="user-email">
                              {user?.email || "user@example.com"}
                            </div>
                          </div>
                          <Link to="/dashboard" className="dropdown-item">
                            <LayoutDashboard size={16} /> Dashboard
                          </Link>
                          <Link to="/profile" className="dropdown-item">
                            <User size={16} /> My Profile
                          </Link>
                          <Link to="/settings" className="dropdown-item">
                            <Settings size={16} /> Settings
                          </Link>
                          <button
                            className="dropdown-item logout"
                            onClick={handleLogout}
                          >
                            <LogOut size={16} /> Logout
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <Link
                    to="/register"
                    onClick={() => onNavigate("register")}
                    className="register-special"
                  >
                    Register
                  </Link>
                )}
              </div>
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="menu-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 transition-transform duration-300 rotate-90" />
                ) : (
                  <Menu className="h-5 w-5 transition-transform duration-300" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mobile-menu-slide">
            <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-white border-b border-border backdrop-blur-lg bg-white/95">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg ${
                    location.pathname === item.href
                      ? "text-primary bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-primary shadow-sm"
                      : "text-gray-600 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {isLoggedIn ? (
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <Link
                    to="/dashboard"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/profile"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3"
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/settings"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3"
                  >
                    Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-3 text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 mt-1"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
