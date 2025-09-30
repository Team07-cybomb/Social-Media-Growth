import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Footer() {
  const navigate = useNavigate();

  const handleEmailClick = () => {
    window.location.href = "mailto:support@socialgrowth.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+919715092104";
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 border-t border-blue-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <button
              onClick={handleLogoClick}
              className="mb-4 text-left cursor-pointer hover:opacity-80 transition-opacity"
            >
              <h3>SocialGrowth</h3>
            </button>
            <p className="text-muted-foreground mb-4 max-w-md">
              Helping businesses grow their social media presence with proven
              strategies and authentic engagement across all major platforms.
            </p>
            <div className="flex space-x-4">
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigate("/")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("services")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("about")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("contact")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <button
                  onClick={handleEmailClick}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  support@socialgrowth.com
                </button>
              </li>
              <li>
                <button
                  onClick={handlePhoneClick}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  +91 9715092104
                </button>
              </li>
              <li>Chennai, Tamilnadu</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">
              © 2025 SocialGrowth. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button
                onClick={() => navigate("/terms")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </button>
              <button
                onClick={() => navigate("/privacy")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => navigate("/refund")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Refund Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
