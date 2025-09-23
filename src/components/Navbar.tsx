// src/components/Navbar.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Affiliate", href: "/affiliate" },
    { name: "FAQ", href: "/faq" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Register", href: "/register" },
  ];

  return (
    <>
      <style>
        {`
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

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes pulseGlow {
            0% {
              box-shadow: 0 0 5px rgba(59, 130, 246, 0.3);
            }
            50% {
              box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
            }
            100% {
              box-shadow: 0 0 5px rgba(59, 130, 246, 0.3);
            }
          }

          @keyframes underlineSlide {
            from {
              transform: scaleX(0);
            }
            to {
              transform: scaleX(1);
            }
          }

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
            animation: underlineSlide 0.3s ease-out;
          }

          .nav-link:hover {
            transform: translateY(-1px);
          }

          .mobile-menu-slide {
            animation: slideDown 0.3s ease-out;
          }

          .menu-button {
            transition: all 0.3s ease;
            border-radius: 8px;
          }

          .menu-button:hover {
            background: rgba(59, 130, 246, 0.1);
            transform: scale(1.05);
          }

          .menu-button:active {
            transform: scale(0.95);
          }

          .pulse-once {
            animation: pulseGlow 2s ease-in-out;
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
        `}
      </style>

      <nav className="navbar-sticky sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="logo-hover font-medium text-primary text-lg font-bold"
                onClick={() => onNavigate("home")}
              >
                SocialGrowth
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => onNavigate(item.href)}
                    className={`nav-link px-3 py-2 transition-all duration-300 ${
                      currentPage === item.href
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
                  onClick={() => {
                    onNavigate(item.href);
                    setIsMenuOpen(false);
                  }}
                  className={`block px-4 py-3 w-full text-left transition-all duration-300 rounded-lg ${
                    currentPage === item.href
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
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
