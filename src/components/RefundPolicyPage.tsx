// RefundPolicyPage.tsx
import { FileText, Mail, Phone, Shield } from "lucide-react";

export function RefundPolicyPage() {
  const policySections = [
    {
      title: "1. Refund Eligibility",
      content: [
        "Service Not Delivered: Full refund if social media growth services are not delivered as described in the service agreement.",
        "Technical Issues: Refund available if technical problems prevent service usage that we cannot resolve within 48 hours.",
        "Duplicate Payments: Full refund for accidental duplicate payments or charges.",
        "Platform API Changes: Refund consideration for significant platform API changes affecting service delivery.",
        "Cancellation Window: 14-day refund window from purchase date for unused services across all platforms.",
      ],
    },
    {
      title: "2. Service-Specific Refund Policies",
      content: [
        "Instagram Growth: 14-day refund if no content posting, engagement activities, or growth strategies have been initiated.",
        "LinkedIn B2B Growth: 30-day pro-rated refund based on services rendered, including connection building and content distribution.",
        "Facebook Page Management: Refund available if no page optimization, content scheduling, or audience growth activities have started.",
        "YouTube Channel Growth: Partial refunds based on video content created, SEO optimization, and subscriber growth activities performed.",
        "X (Twitter) Growth: Refund eligibility based on tweet scheduling, engagement activities, and follower growth strategies implemented.",
      ],
    },
    {
      title: "3. Non-Refundable Services",
      content: [
        "Services Rendered: No refund for social media management services already performed or delivered.",
        "Content Creation: Fees for social media content (posts, graphics, videos) created and delivered are non-refundable.",
        "Platform Advertising: Costs for Facebook Ads, Instagram Ads, or other paid social campaigns are non-refundable.",
        "Analytics Reports: Social media performance reports and analytics already delivered cannot be refunded.",
        "Strategy Development: Bespoke social media strategy planning and consultation sessions are non-refundable once conducted.",
      ],
    },
    {
      title: "4. Refund Process & Timeline",
      content: [
        "Request Submission: Submit refund requests via email to support@socialgrowth.com with your order details and platform information.",
        "Review Period: Our team reviews Instagram, LinkedIn, Facebook, YouTube, and Twitter service requests within 2 business days.",
        "Platform Verification: We verify service status across all connected social media platforms before processing refunds.",
        "Approval Notification: You'll receive email confirmation once your social media service refund is approved.",
        "Processing Time: Refunds are processed to your original payment method within 7-10 business days after approval.",
      ],
    },
    {
      title: "5. Partial Refunds & Prorated Calculations",
      content: [
        "Multi-Platform Services: Refunds calculated separately for each social media platform based on services used.",
        "Content Library: Deductions for social media content libraries, post calendars, and visual assets already created.",
        "Platform Management: Charges for active platform management during the service period on Instagram, Facebook, etc.",
        "Growth Activities: Costs for follower growth campaigns, engagement strategies, and community management performed.",
        "Analytics Setup: Fees for social media analytics dashboard setup and reporting systems already implemented.",
      ],
    },
    {
      title: "6. Platform-Specific Considerations",
      content: [
        "Instagram API Limits: No refunds for service limitations due to Instagram API restrictions or rate limits.",
        "LinkedIn Policy Changes: Services affected by LinkedIn platform policy updates are evaluated case by case.",
        "Facebook Algorithm Changes: No refunds for performance variations due to Facebook algorithm updates.",
        "YouTube Content Policies: No refunds for content rejection or demonetization due to YouTube policy violations.",
        "Twitter/X Rate Limits: Services affected by Twitter API limitations or rate restrictions are not refundable.",
      ],
    },
    {
      title: "7. Special Circumstances",
      content: [
        "Account Bans: No refunds for services affected by client's social media platform policy violations or account suspensions.",
        "Content Rejection: No refunds for content rejection due to platform content guidelines or community standards.",
        "Service Interruptions: No refunds for temporary service interruptions due to platform maintenance or technical issues.",
        "Client Inactivity: Refunds not available for periods of client inactivity or failure to provide necessary access/materials.",
        "Platform Migration: Costs associated with transferring social media management between accounts are non-refundable.",
      ],
    },
    {
      title: "8. Dispute Resolution & Communication",
      content: [
        "Direct Communication: We encourage direct communication to resolve any social media service issues before requesting refunds.",
        "Performance Documentation: Keep records of all social media performance reports and service communications.",
        "Service Escalation: Unresolved issues with Instagram growth, LinkedIn engagement, or other services can be escalated to management.",
        "Platform Access: Ensure we have proper access to all social media platforms and necessary permissions for service delivery.",
        "Legal Compliance: All refund processes comply with applicable consumer protection and digital service regulations.",
      ],
    },
    {
      title: "9. Contact Us",
      content: [
        "If you have any questions about our Refund Policy for social media services, please contact us:",
        "Email: support@socialgrowth.com",
        "Phone: +91 9715092104",
        "By using SocialGrowth services, you agree to the terms outlined in this Refund Policy.",
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
          .refund-page {
            min-height: 100vh;
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            padding: 3rem 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .refund-container {
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
            .refund-page {
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
            .refund-page {
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

      <div className="refund-page">
        <div className="refund-container">
          {/* A4 Style Document */}
          <div id="policy-document" className="a4-document">
            {/* Document Header */}
            <div className="document-header">
              <h1 className="document-title">Refund Policy</h1>
              <div className="document-subtitle">SocialGrowth</div>
              <div className="document-date">
                Effective Date: September 20, 2025
              </div>
            </div>

            {/* Introduction */}
            <div className="policy-section">
              <p className="section-content">
                At <strong>SocialGrowth</strong>, we are committed to your
                satisfaction with our comprehensive social media growth
                services. This Refund Policy outlines the circumstances under
                which refunds may be granted for our Instagram, LinkedIn,
                Facebook, YouTube, and Twitter growth services, our refund
                process, and important terms related to service cancellations
                and reimbursements.
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
                This Refund Policy may be updated from time to time. Please
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
                Your satisfaction with our social media services is important to
                us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
