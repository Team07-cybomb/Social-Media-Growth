// TermsOfServicePage.tsx
import { FileText, Mail, Phone, Shield } from "lucide-react";

export function TermsOfServicePage() {
  const policySections = [
    {
      title: "1. Acceptance of Terms",
      content: [
        "By accessing and using SocialGrowth services, you accept and agree to be bound by these Terms of Service.",
        "If you disagree with any part of these terms, you may not access our social media growth services.",
        "These terms apply to all visitors, users, and others who access or use our Service across all platforms including Instagram, LinkedIn, Facebook, YouTube, and Twitter.",
        "Your continued use of our services constitutes acceptance of any modifications to these terms.",
      ],
    },
    {
      title: "2. Services Description",
      content: [
        "SocialGrowth provides comprehensive social media growth services including content strategy, audience development, engagement optimization, and performance analytics.",
        "Services include but are not limited to: Instagram growth, LinkedIn B2B networking, Facebook page management, YouTube channel growth, and Twitter/X audience building.",
        "We offer customized growth strategies tailored to your specific platform requirements and business objectives.",
        "All services are provided on a subscription basis with clearly defined deliverables and performance metrics.",
      ],
    },
    {
      title: "3. User Responsibilities",
      content: [
        "Provide accurate and complete information during account registration and service setup.",
        "Maintain security of your account credentials and notify us immediately of any unauthorized access.",
        "Comply with all applicable laws, regulations, and platform-specific terms of service.",
        "Provide necessary access to social media platforms and permissions required for service delivery.",
        "Ensure all content provided for posting complies with platform community guidelines and copyright laws.",
      ],
    },
    {
      title: "4. Account Registration",
      content: [
        "You must be at least 18 years old to create an account and use our social media growth services.",
        "You must provide valid and verifiable information during the registration process.",
        "You are responsible for maintaining the confidentiality of your account and password.",
        "You agree to accept responsibility for all activities that occur under your account.",
        "We reserve the right to refuse service, terminate accounts, or remove content at our discretion.",
      ],
    },
    {
      title: "5. Payment Terms",
      content: [
        "All social media growth services are billed according to the selected subscription plan.",
        "Payments are processed securely through our third-party payment providers.",
        "Subscription fees are non-refundable except as specified in our Refund Policy.",
        "Late payments may result in temporary suspension of social media management services.",
        "We reserve the right to change service fees with 30 days notice to existing customers.",
      ],
    },
    {
      title: "6. Prohibited Activities",
      content: [
        "Using automated bots, fake engagement, or any artificial growth methods.",
        "Violating platform terms of service or engaging in spam-like behavior.",
        "Impersonating others or misrepresenting your affiliation with any person or entity.",
        "Sharing illegal, harmful, or inappropriate content through our services.",
        "Attempting to circumvent security measures or interfere with service functionality.",
        "Using our services for any unlawful purpose or to promote illegal activities.",
      ],
    },
    {
      title: "7. Intellectual Property",
      content: [
        "We retain all intellectual property rights to our growth strategies, methodologies, and proprietary tools.",
        "You retain ownership of your social media content, brand assets, and platform-specific materials.",
        "By using our services, you grant us limited license to use your content for service delivery purposes.",
        "All analytics reports, growth insights, and performance data remain your property.",
        "Unauthorized copying, modification, or distribution of our proprietary materials is prohibited.",
      ],
    },
    {
      title: "8. Service Modifications",
      content: [
        "We reserve the right to modify or discontinue any social media service with reasonable notice.",
        "Changes to service features or pricing will be communicated via email or platform notifications.",
        "We may temporarily suspend services for maintenance, updates, or security reasons.",
        "Service availability may be affected by third-party platform API changes or restrictions.",
        "We are not liable for service interruptions caused by social media platform changes.",
      ],
    },
    {
      title: "9. Limitation of Liability",
      content: [
        "Our liability for any claims related to our social media growth services is limited to the amount paid for services.",
        "We are not responsible for platform-specific algorithm changes affecting growth metrics.",
        "No guarantee of specific follower counts, engagement rates, or revenue generation is provided.",
        "We are not liable for account suspensions or content removal by social media platforms.",
        "Indirect damages including lost profits or business opportunities are excluded from liability.",
      ],
    },
    {
      title: "10. Termination",
      content: [
        "You may terminate your social media growth services at any time through your account dashboard.",
        "We reserve the right to terminate services for violation of these terms or platform policies.",
        "Upon termination, all outstanding payments become immediately due and payable.",
        "Termination does not relieve you of obligations to pay for services already rendered.",
        "We will provide reasonable assistance with service transition upon termination.",
      ],
    },
    {
      title: "11. Governing Law",
      content: [
        "These Terms shall be governed by the laws of the State of Delaware, without regard to its conflict of law provisions.",
        "Any disputes arising from these terms or our services shall be resolved through arbitration.",
        "Arbitration proceedings shall be conducted in Wilmington, Delaware in accordance with AAA rules.",
        "You agree to waive any right to participate in class-action lawsuits against SocialGrowth.",
        "Failure to enforce any right or provision of these Terms will not be considered a waiver.",
      ],
    },
    {
      title: "12. Changes to Terms",
      content: [
        "We reserve the right to modify these Terms of Service at any time.",
        "Material changes will be notified via email or prominent service announcements.",
        "Continued use of our services after changes constitutes acceptance of modified terms.",
        "The 'Last Updated' date at the top of this document indicates the most recent revisions.",
        "We recommend reviewing these terms periodically for any updates or changes.",
      ],
    },
    {
      title: "13. Contact Us",
      content: [
        "If you have any questions about these Terms of Service, please contact us:",
        "Email: support@socialgrowth.com",
        "Phone: +91 9715092104",
        "By using SocialGrowth services, you agree to be bound by these Terms of Service.",
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
          .terms-page {
            min-height: 100vh;
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            padding: 3rem 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .terms-container {
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

          .contact-link {
            color: inherit;
            text-decoration: none;
            transition: color 0.3s ease;
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
            .terms-page {
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
            .terms-page {
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

      <div className="terms-page">
        <div className="terms-container">
          {/* A4 Style Document */}
          <div id="policy-document" className="a4-document">
            {/* Document Header */}
            <div className="document-header">
              <h1 className="document-title">Terms of Service</h1>
              <div className="document-subtitle">SocialGrowth</div>
              <div className="document-date">
                Effective Date: September 20, 2025
              </div>
            </div>

            {/* Introduction */}
            <div className="policy-section">
              <p className="section-content">
                Welcome to <strong>SocialGrowth</strong>. These Terms of Service
                govern your use of our social media growth services and
                optimization tools (the "Service"). Please read these terms
                carefully before accessing or using our services across
                Instagram, LinkedIn, Facebook, YouTube, Twitter, and other
                social media platforms.
              </p>
            </div>

            {/* Policy Sections */}
            {policySections.map((section, index) => (
              <div key={index} className="policy-section">
                <h2 className="section-title">{section.title}</h2>
                <div className="section-content">
                  {section.title === "13. Contact Us" ? (
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
                These Terms of Service may be updated from time to time. Please
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
                Thank you for choosing SocialGrowth for your social media growth
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
