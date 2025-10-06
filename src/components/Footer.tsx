import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Footer: React.FC = () => {
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

  const handleServiceClick = (service: string) => {
    navigate(`/services#${service.toLowerCase()}`);
  };

  const styles: { [key: string]: React.CSSProperties } = {
    footer: {
      background:
        "linear-gradient(135deg, #ffffffff, #ffffffff, #ffffffff)",
      borderTop: "1px solid rgba(59, 130, 246, 0.3)",
      color: "#000000ff",
      padding: "60px 20px 30px",
      fontFamily: "Arial, sans-serif",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "40px",
      alignItems: "flex-start",
    },
    column: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },
    title: {
      color: "#000000ff",
      fontSize: "18px",
      fontWeight: 600,
      marginBottom: "8px",
    },
    text: {
      color: "#94a3b8",
      lineHeight: "1.6",
      fontSize: "15px",
      maxWidth: "350px",
    },
    link: {
      background: "none",
      border: "none",
      color: "#94a3b8",
      textAlign: "left",
      cursor: "pointer",
      fontSize: "15px",
      padding: 0,
      transition: "color 0.3s ease",
    },
    linkHover: {
      color: "#3b82f6",
    },
    socialRow: {
      display: "flex",
      gap: "12px",
      marginTop: "12px",
    },
    socialIcon: {
      color: "#94a3b8",
      cursor: "pointer",
      transition: "color 0.3s ease",
    },
    bottomBar: {
      borderTop: "1px solid rgba(255,255,255,0.1)",
      marginTop: "40px",
      paddingTop: "20px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "14px",
      color: "#94a3b8",
    },
    bottomLinks: {
      display: "flex",
      gap: "20px",
      marginTop: "10px",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Company Info */}
        <div style={styles.column}>
          <button
            onClick={handleLogoClick}
            style={{
              background: "none",
              border: "none",
              textAlign: "left",
              cursor: "pointer",
            }}
          >
            <h3 style={{ color: "#000000ff", fontSize: "20px", fontWeight: 700 }}>
              SocialGrowth
            </h3>
          </button>
          <p style={styles.text}>
            Helping businesses grow their social media presence with proven
            strategies and authentic engagement across all major platforms.
          </p>
          <div style={styles.socialRow}>
            <Facebook style={styles.socialIcon} />
            <Instagram style={styles.socialIcon} />
            <Linkedin style={styles.socialIcon} />
            <Twitter style={styles.socialIcon} />
            <Youtube style={styles.socialIcon} />
          </div>
        </div>

        {/* Quick Links */}
        <div style={styles.column}>
          <h4 style={styles.title}>Quick Links</h4>
          <button onClick={() => navigate("/")} style={styles.link}>
            Home
          </button>
          <button onClick={() => navigate("/services")} style={styles.link}>
            Services
          </button>
          <button onClick={() => navigate("/about")} style={styles.link}>
            About Us
          </button>
          <button onClick={() => navigate("/contact")} style={styles.link}>
            Contact
          </button>
        </div>
        {/* Services */}
        <div style={styles.column}>
          <h4 style={styles.title}>Services</h4>
          <button
            onClick={() => navigate("/instagram-growth")}
            style={styles.link}
          >
            Instagram Growth
          </button>
          <button
            onClick={() => navigate("/twitter-growth")}
            style={styles.link}
          >
            Twitter Growth
          </button>
          <button
            onClick={() => navigate("facebook-growth")}
            style={styles.link}
          >
            Facebook Growth
          </button>
          <button
            onClick={() => navigate("linkedin-growth")}
            style={styles.link}
          >
            LinkedIn Growth
          </button>
          <button
            onClick={() => navigate("youtube-growth")}
            style={styles.link}
          >
            YouTube Growth
          </button>
        </div>

        {/* Contact Info */}
        <div style={styles.column}>
          <h4 style={styles.title}>Contact</h4>
          <button onClick={handleEmailClick} style={styles.link}>
            support@socialgrowth.com
          </button>
          <button onClick={handlePhoneClick} style={styles.link}>
            +91 9715092104
          </button>
          <p style={styles.text}>Chennai, Tamilnadu</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottomBar}>
        <p>© 2025 SocialGrowth. All rights reserved.</p>
        <div style={styles.bottomLinks}>
          <button onClick={() => navigate("/terms")} style={styles.link}>
            Terms of Service
          </button>
          <button onClick={() => navigate("/privacy")} style={styles.link}>
            Privacy Policy
          </button>
          <button onClick={() => navigate("/refund")} style={styles.link}>
            Refund Policy
          </button>
        </div>
      </div>
    </footer>
  );
};
