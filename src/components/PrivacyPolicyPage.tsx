// PrivacyPolicyPage.tsx
import { FileText, Mail, Phone, Shield } from "lucide-react";

export function PrivacyPolicyPage() {
  const policySections = [
    {
      title: "1. Information We Collect",
      content: [
        "Account Information: Name, email address, social media handles, and login details when you create an account.",
        "Payment Information: Billing details when you purchase our growth services (processed securely through third-party providers).",
        "Social Media Data: Public profile information, content analytics, and engagement metrics from connected social platforms.",
        "Usage Data: Analytics on how you use our growth tools and services.",
        "Device & Log Data: IP address, browser type, and technical information to improve security and performance.",
      ],
    },
    {
      title: "2. How We Use Your Information",
      content: [
        "Provide, operate, and improve our social media growth tools and services.",
        "Process payments and manage service subscriptions.",
        "Send important updates, service news, and customer support communications.",
        "Analyze social media performance to enhance our growth strategies and reporting accuracy.",
        "Develop personalized growth strategies based on your social media analytics.",
      ],
    },
    {
      title: "3. Sharing of Information",
      content: [
        "We do not sell or rent your personal information.",
        "We may share limited data with trusted third-party service providers (e.g., payment processors, analytics providers) who help us operate our Service, under strict confidentiality agreements.",
        "We only share social media data necessary for providing our growth services, in compliance with platform API terms.",
      ],
    },
    {
      title: "4. Data Security",
      content: [
        "We implement industry-standard security measures to protect your data.",
        "All social media credentials are encrypted and stored securely.",
        "However, no online service can guarantee 100% security.",
        "You are responsible for safeguarding your account credentials.",
      ],
    },
    {
      title: "5. Cookies and Tracking",
      content: [
        "We use cookies and similar tracking technologies to track activity on our Service and hold certain information.",
        "Cookies are files with a small amount of data which may include an anonymous unique identifier.",
        "You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.",
        "We use analytics to understand how our growth services are used and to improve user experience.",
      ],
    },
    {
      title: "6. Your Rights",
      content: [
        "Access the personal data we hold about you.",
        "Request correction or deletion of your personal data.",
        "Opt out of marketing emails at any time.",
        "Withdraw consent for data processing (where applicable).",
        "Request export of your social media analytics data.",
      ],
    },
    {
      title: "7. Children's Privacy",
      content: [
        "Our Service is not intended for children under 13.",
        "We do not knowingly collect data from children.",
        "If we discover such data, we will delete it promptly.",
      ],
    },
    {
      title: "8. Changes to this Policy",
      content: [
        "We may update this Privacy Policy from time to time.",
        "Any changes will be posted on this page with a revised 'Last updated' date.",
        "If the changes are significant, we may notify you by email or platform announcement.",
      ],
    },
    {
      title: "9. Contact Us",
      content: [
        "If you have any questions about this Privacy Policy, please contact us:",
        "Email: support@socialgrowth.com",
        "Phone: +91 9715092104",
        "By using SocialGrowth services, you consent to the practices described in this Privacy Policy.",
      ],
    },
  ];

  const handleEmailClick = () => {
    window.location.href = "mailto:support@socialgrowth.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+919715092104";
  };

  return (
    <>
      <style>
        {`
          .privacy-page {
            min-height: 100vh;
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            padding: 3rem 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .privacy-container {
            max-width: 72rem;
            width: 100%;
            margin: 0 auto;
          }

          /* A4 Document Styling */
          .a4-document {
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            padding: 3rem;
            border: 1px solid #e2e8f0;
            min-height: 29.7cm;
            position: relative;
            margin: 0 auto;
          }

          .document-header {
            border-bottom: 2px solid #1e293b;
            padding-bottom: 2rem;
            margin-bottom: 2rem;
            text-align: center;
          }

          .document-title {
            font-size: 2rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 0.5rem;
          }

          .document-subtitle {
            font-size: 1.25rem;
            color: #64748b;
            font-weight: 500;
          }

          .document-date {
            color: #64748b;
            font-size: 0.875rem;
            margin-top: 0.5rem;
          }

          .policy-section {
            margin-bottom: 2rem;
            page-break-inside: avoid;
          }

          .section-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 1rem;
            border-left: 4px solid #3b82f6;
            padding-left: 1rem;
            background: #f8fafc;
            padding: 0.75rem 1rem;
            border-radius: 0 4px 4px 0;
          }

          .section-content {
            color: #374151;
            line-height: 1.7;
            margin-left: 1rem;
          }

          .policy-list {
            list-style-type: none;
            padding: 0;
            margin: 0;
          }

          .policy-list li {
            margin-bottom: 0.75rem;
            padding-left: 1.5rem;
            position: relative;
            line-height: 1.6;
          }

          .policy-list li:before {
            content: "•";
            color: #3b82f6;
            font-weight: bold;
            position: absolute;
            left: 0.5rem;
          }

          .contact-info {
            background: #f0f9ff;
            border: 1px solid #e0f2fe;
            border-radius: 6px;
            padding: 1.5rem;
            margin-top: 1rem;
          }

          .contact-item {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 0.75rem;
            color: #0369a1;
            cursor: pointer;
            transition: all 0.3s ease;
            padding: 0.5rem;
            border-radius: 4px;
            text-decoration: none;
          }

          .contact-item:hover {
            background: #e0f2fe;
            transform: translateY(-1px);
          }

          .contact-item svg {
            width: 1.25rem;
            height: 1.25rem;
            flex-shrink: 0;
          }

          .contact-text {
            color: inherit;
            text-decoration: none;
          }

          .consent-notice {
            background: #f0fdf4;
            border: 1px solid #dcfce7;
            border-radius: 6px;
            padding: 1.5rem;
            margin-top: 1.5rem;
            text-align: center;
            font-weight: 500;
            color: #166534;
          }

          .document-footer {
            border-top: 1px solid #e2e8f0;
            padding-top: 2rem;
            margin-top: 3rem;
            text-align: center;
            color: #64748b;
            font-size: 0.875rem;
          }

          /* Print Styles */
          @media print {
            .privacy-page {
              background: white;
              padding: 0;
            }
            
            .a4-document {
              box-shadow: none;
              border: none;
              padding: 2.5cm;
              margin: 0;
              min-height: auto;
            }
            
            .document-header {
              border-bottom-color: #000;
            }

            .contact-item {
              cursor: default;
              text-decoration: none;
            }

            .contact-item:hover {
              background: transparent;
              transform: none;
            }
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .privacy-page {
              padding: 2rem 1rem;
            }
            
            .a4-document {
              padding: 1.5rem;
            }
            
            .document-title {
              font-size: 1.75rem;
            }

            .contact-item {
              padding: 0.75rem;
            }
          }

          .text-center {
            text-align: center;
          }

          .mx-auto {
            margin-left: auto;
            margin-right: auto;
          }

          .mb-4 { margin-bottom: 1rem; }
          .mb-6 { margin-bottom: 1.5rem; }
          .mb-8 { margin-bottom: 2rem; }
          .mt-2 { margin-top: 0.5rem; }
        `}
      </style>

      <div className="privacy-page">
        <div className="privacy-container">
          {/* A4 Style Document */}
          <div id="policy-document" className="a4-document">
            {/* Document Header */}
            <div className="document-header">
              <h1 className="document-title">Privacy Policy</h1>
              <div className="document-subtitle">SocialGrowth</div>
              <div className="document-date">
                Effective Date: September 20, 2025
              </div>
            </div>

            {/* Introduction */}
            <div className="policy-section">
              <p className="section-content">
                At <strong>SocialGrowth</strong>, we respect your privacy and
                are committed to protecting your personal information. This
                Privacy Policy explains how we collect, use, and safeguard your
                data when you use our social media growth services and
                optimization tools (the "Service").
              </p>
            </div>

            {/* Policy Sections */}
            {policySections.map((section, index) => (
              <div key={index} className="policy-section">
                <h2 className="section-title">{section.title}</h2>
                <div className="section-content">
                  {section.title === "9. Contact Us" ? (
                    <>
                      <p>{section.content[0]}</p>
                      <div className="contact-info">
                        <a
                          href="mailto:support@socialgrowth.com"
                          className="contact-item"
                          onClick={(e) => {
                            e.preventDefault();
                            handleEmailClick();
                          }}
                        >
                          <Mail />
                          <span className="contact-text">
                            Email: support@socialgrowth.com
                          </span>
                        </a>
                        <a
                          href="tel:+919715092104"
                          className="contact-item"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePhoneClick();
                          }}
                        >
                          <Phone />
                          <span className="contact-text">
                            Phone: +91 9715092104
                          </span>
                        </a>
                      </div>
                      <div className="consent-notice">{section.content[3]}</div>
                    </>
                  ) : (
                    <ul className="policy-list">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}

            {/* Document Footer */}
            <div className="document-footer">
              <p>
                This Privacy Policy may be updated from time to time. Please
                check this page periodically for updates.
              </p>
              <p className="mt-2">
                <Shield
                  style={{
                    width: "1rem",
                    height: "1rem",
                    display: "inline",
                    marginRight: "0.5rem",
                  }}
                />
                Your privacy is important to us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
