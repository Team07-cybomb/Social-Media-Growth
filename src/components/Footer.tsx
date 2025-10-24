import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleEmailClick = () => {
    window.location.href =
      "mailto:support@cybomb.com?subject=Inquiry&body=Hello, I would like to know more about your services.";
  };

  const handlePhoneClick = () => {
    // For mobile devices, this will open the phone dialer
    // For desktop, it may open the default calling application
    window.location.href = "tel:+919715092104";
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleServiceClick = (service: string) => {
    navigate(`/services#${service.toLowerCase()}`);
  };

  const handleSocialClick = (platform: string) => {
    // Add your actual social media URLs here
    const socialUrls: { [key: string]: string } = {
      //facebook: "https://facebook.com/yourpage",
      instagram: "https://www.instagram.com/cybomb_tech/",
      linkedin: "https://www.linkedin.com/company/cybomb/",
      twitter: "https://x.com/CybombTech",
      //youtube: "https://youtube.com/yourchannel",
    };

    if (socialUrls[platform]) {
      window.open(socialUrls[platform], "_blank", "noopener,noreferrer");
    }
  };

  const styles: { [key: string]: React.CSSProperties } = {
    footer: {
      background: "linear-gradient(135deg, #ffffffff, #ffffffff, #ffffffff)",
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
      fontFamily: "inherit",
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
      transition: "color 0.3s ease, transform 0.2s ease",
    },
    socialIconHover: {
      color: "#3b82f6",
      transform: "scale(1.1)",
    },
    bottomBar: {
      borderTop: "1px solid rgba(0, 0, 0, 0.1)",
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
    contactButton: {
      background: "none",
      border: "none",
      color: "#94a3b8",
      textAlign: "left",
      cursor: "pointer",
      fontSize: "15px",
      padding: "4px 0",
      transition: "color 0.3s ease",
      fontFamily: "inherit",
      textDecoration: "none",
      display: "block",
    },
  };

  // State for hover effects
  const [hoverStates, setHoverStates] = React.useState({
    email: false,
    phone: false,
    facebook: false,
    instagram: false,
    linkedin: false,
    twitter: false,
    youtube: false,
  });

  const handleMouseEnter = (element: string) => {
    setHoverStates((prev) => ({ ...prev, [element]: true }));
  };

  const handleMouseLeave = (element: string) => {
    setHoverStates((prev) => ({ ...prev, [element]: false }));
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
              padding: 0,
              fontFamily: "inherit",
            }}
          >
            <h3
              style={{ color: "#000000ff", fontSize: "20px", fontWeight: 700 }}
            >
              SocialGrowth
            </h3>
          </button>
          <p style={styles.text}>
            Helping businesses grow their social media presence with proven
            strategies and authentic engagement across all major platforms.
          </p>
          <div style={styles.socialRow}>
            {/* <Facebook
              style={{
                ...styles.socialIcon,
                ...(hoverStates.facebook ? styles.socialIconHover : {}),
              }}
              onMouseEnter={() => handleMouseEnter("facebook")}
              onMouseLeave={() => handleMouseLeave("facebook")}
              onClick={() => handleSocialClick("facebook")}
            /> */}
            <Instagram
              style={{
                ...styles.socialIcon,
                ...(hoverStates.instagram ? styles.socialIconHover : {}),
              }}
              onMouseEnter={() => handleMouseEnter("instagram")}
              onMouseLeave={() => handleMouseLeave("instagram")}
              onClick={() => handleSocialClick("instagram")}
            />
            <Linkedin
              style={{
                ...styles.socialIcon,
                ...(hoverStates.linkedin ? styles.socialIconHover : {}),
              }}
              onMouseEnter={() => handleMouseEnter("linkedin")}
              onMouseLeave={() => handleMouseLeave("linkedin")}
              onClick={() => handleSocialClick("linkedin")}
            />
            <svg
              style={{
                ...styles.socialIcon,
                ...(hoverStates.twitter ? styles.socialIconHover : {}),
              }}
              onMouseEnter={() => handleMouseEnter("twitter")}
              onMouseLeave={() => handleMouseLeave("twitter")}
              onClick={() => handleSocialClick("twitter")}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                fill="currentColor"
              />
            </svg>
            {/* <Youtube
              style={{
                ...styles.socialIcon,
                ...(hoverStates.youtube ? styles.socialIconHover : {}),
              }}
              onMouseEnter={() => handleMouseEnter("youtube")}
              onMouseLeave={() => handleMouseLeave("youtube")}
              onClick={() => handleSocialClick("youtube")}
            /> */}
          </div>
        </div>

        {/* Quick Links */}
        <div style={styles.column}>
          <h4 style={styles.title}>Quick Links</h4>
          <button
            onClick={() => navigate("/")}
            style={styles.link}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#3b82f6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#94a3b8";
            }}
          >
            Home
          </button>
          <button
            onClick={() => navigate("/services")}
            style={styles.link}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#3b82f6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#94a3b8";
            }}
          >
            Services
          </button>
          <button
            onClick={() => navigate("/about")}
            style={styles.link}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#3b82f6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#94a3b8";
            }}
          >
            About Us
          </button>
          <button
            onClick={() => navigate("/contact")}
            style={styles.link}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#3b82f6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#94a3b8";
            }}
          >
            Contact
          </button>

        </div>

        {/* Services */}
        <div style={styles.column}>
          <h4 style={styles.title}>Services</h4>
          <button
            onClick={() => navigate("/instagram-growth")}
            style={styles.link}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#3b82f6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#94a3b8";
            }}
          >
            Instagram Growth
          </button>
          <button
            onClick={() => navigate("/twitter-growth")}
            style={styles.link}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#3b82f6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#94a3b8";
            }}
          >
            Twitter Growth
          </button>
          <button
            onClick={() => navigate("/facebook-growth")}
            style={styles.link}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#3b82f6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#94a3b8";
            }}
          >
            Facebook Growth
          </button>
          <button
            onClick={() => navigate("/linkedin-growth")}
            style={styles.link}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#3b82f6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#94a3b8";
            }}
          >
            LinkedIn Growth
          </button>
          <button
            onClick={() => navigate("/youtube-growth")}
            style={styles.link}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#3b82f6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#94a3b8";
            }}
          >
            YouTube Growth
          </button>
        </div>

        {/* Contact Info */}
        <div style={styles.column}>
          <h4 style={styles.title}>Contact</h4>
          <button
            onClick={handleEmailClick}
            style={{
              ...styles.contactButton,
              color: hoverStates.email ? "#3b82f6" : "#94a3b8",
            }}
            onMouseEnter={() => handleMouseEnter("email")}
            onMouseLeave={() => handleMouseLeave("email")}
            title="Click to send us an email"
          >
            support@cybomb.com
          </button>
          <button
            onClick={handlePhoneClick}
            style={{
              ...styles.contactButton,
              color: hoverStates.phone ? "#3b82f6" : "#94a3b8",
            }}
            onMouseEnter={() => handleMouseEnter("phone")}
            onMouseLeave={() => handleMouseLeave("phone")}
            title="Click to call us"
          >
            +91 9715092104
          </button>
          <p style={styles.text}>Chennai, Tamilnadu</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottomBar}>
        <p>© 2025 SocialGrowth. All rights reserved.</p>
        <div style={styles.bottomLinks}>
          <button
            onClick={() => navigate("/terms")}
            style={styles.link}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#3b82f6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#94a3b8";
            }}
          >
            Terms of Service
          </button>
          <button
            onClick={() => navigate("/privacy")}
            style={styles.link}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#3b82f6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#94a3b8";
            }}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => navigate("/refund")}
            style={styles.link}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#3b82f6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#94a3b8";
            }}
          >
            Refund Policy
          </button>
        </div>
      </div>
    </footer>
  );
};
