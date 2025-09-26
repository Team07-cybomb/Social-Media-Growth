// src/components/Navbar.tsx

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

export function Navbar({ currentPage, onNavigate, isLoggedIn, user, onLogout }: NavbarProps) {
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
          .navbar-sticky {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(226, 232, 240, 0.8);
            transition: all 0.3s ease;
          }

          .navbar-sticky.scrolled {
            background: rgba(255, 255, 255, 0.98);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          }

          .logo-hover {
            position: relative;
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

          .logo-hover:hover {
            transform: translateY(-1px);
          }

          .nav-link {
            position: relative;
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

          .nav-link:hover::after {
            width: 80%;
          }

          .nav-link.active::after {
            width: 80%;
          }

          .nav-link:hover {
            transform: translateY(-1px);
          }

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

          .menu-button {
            transition: all 0.3s ease;
            border-radius: 8px;
          }

          .menu-button:hover {
            background: rgba(59, 130, 246, 0.1);
            transform: scale(1.05);
          }

          .register-special {
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            color: white;
            border-radius: 8px;
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
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s ease;
          }

          .register-special:hover::before {
            left: 100%;
          }

          .register-special:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
          }

          .profile-dropdown {
            position: relative;
          }

          .profile-button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            color: white;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .profile-button:hover {
            transform: scale(1.1);
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
          }

          .dropdown-menu {
            position: absolute;
            top: 100%;
            right: 0;
            margin-top: 0.5rem;
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 0.5rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            min-width: 200px;
            z-index: 1000;
            animation: slideDown 0.2s ease-out;
          }

          .dropdown-item {
            display: flex;
            align-items: center;
            width: 100%;
            padding: 0.75rem 1rem;
            text-align: left;
            background: none;
            border: none;
            color: #374151;
            text-decoration: none;
            transition: all 0.3s ease;
            cursor: pointer;
            border-bottom: 1px solid #f1f5f9;
            gap: 0.5rem;
          }

          .dropdown-item:last-child {
            border-bottom: none;
          }

          .dropdown-item:hover {
            background: #f8fafc;
            color: #3b82f6;
          }

          .dropdown-item.logout {
            color: #ef4444;
          }

          .dropdown-item.logout:hover {
            background: #fef2f2;
            color: #dc2626;
          }

          .user-info {
            padding: 0.75rem 1rem;
            border-bottom: 1px solid #f1f5f9;
            background: #f8fafc;
          }

          .user-name {
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 0.25rem;
          }

          .user-email {
            font-size: 0.875rem;
            color: #64748b;
          }

          .dropdown-backdrop {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 999;
          }
        `}
      </style>

      <nav className={`navbar-sticky sticky top-0 z-50 ${scrolled ? 'scrolled' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="logo-hover font-medium text-primary text-lg font-bold"
                onClick={() => onNavigate("home")}
              >
                SocialGrowth
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`nav-link px-3 py-2 transition-all duration-300 ${
                      location.pathname === item.href
                        ? "active text-primary font-semibold"
                        : "text-muted-foreground hover:text-primary"
                    } ${
                      item.name === "Register"
                        ? "register-special ml-4 px-4 py-2"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* User Authentication Section */}
                {isLoggedIn ? (
                  // Profile Dropdown (Logged In)
                  <div className="profile-dropdown">
                    <button
                      className="profile-button"
                      onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                      aria-label="User profile menu"
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
                            <div className="user-name">{user?.name || 'User'}</div>
                            <div className="user-email">{user?.email || 'user@example.com'}</div>
                          </div>
                          <Link
                            to="/dashboard"
                            className="dropdown-item"
                            onClick={() => setIsProfileDropdownOpen(false)}
                          >
                            <LayoutDashboard size={16} />
                            Dashboard
                          </Link>
                          <Link
                            to="/profile"
                            className="dropdown-item"
                            onClick={() => setIsProfileDropdownOpen(false)}
                          >
                            <User size={16} />
                            My Profile
                          </Link>
                          <Link
                            to="/settings"
                            className="dropdown-item"
                            onClick={() => setIsProfileDropdownOpen(false)}
                          >
                            <Settings size={16} />
                            Settings
                          </Link>
                          <button
                            className="dropdown-item logout"
                            onClick={handleLogout}
                          >
                            <LogOut size={16} />
                            Logout
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  // Register Button (Logged Out)
                  <Link
                    to="/register"
                    onClick={() => onNavigate("register")}
                    className="register-special px-4 py-2 text-sm font-medium"
                  >
                    Register
                  </Link>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="menu-button p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mobile-menu-slide">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-gray-200">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 w-full text-left transition-all duration-300 rounded-lg ${
                    location.pathname === item.href
                      ? "text-primary bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-primary shadow-sm"
                      : "text-muted-foreground hover:text-primary hover:bg-gray-50"
                  } ${
                    item.name === "Register"
                      ? "register-special bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 mt-2"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {isLoggedIn ? (
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <Link
                    to="/profile"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 mt-1"
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
