// src/components/FAQPage.tsx
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
const FAQPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const sectionRefs = {
    general: useRef<HTMLDivElement>(null),
    payment: useRef<HTMLDivElement>(null),
    gettingStarted: useRef<HTMLDivElement>(null),
    rules: useRef<HTMLDivElement>(null),
  };

  // Smooth scroll to section
  const scrollToSection = (sectionKey: keyof typeof sectionRefs) => {
    sectionRefs[sectionKey].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActiveSection(sectionKey);
  };

  // Toggle FAQ item
  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  // FAQ data structure
  const faqData = [
    {
      id: "general",
      title: "General Questions",
      icon: "❓",
      items: [
        {
          id: "general-1",
          question: "What is the Affiliate Program?",
          answer:
            "Our Affiliate Program allows you to earn commissions by referring customers to our platform. You'll get a unique referral link that tracks your sales and provides real-time analytics.",
        },
        {
          id: "general-2",
          question: "How can I promote the program?",
          answer:
            "You can promote the program through your website, blog, social media, email newsletters, or even YouTube channel. We provide comprehensive marketing materials including banners, links, and content templates to help you succeed.",
        },
        {
          id: "general-3",
          question: "What products can I promote?",
          answer:
            "You can promote any of our products or services. We offer a wide range of digital marketing tools, SaaS solutions, and educational resources that appeal to various audiences across different industries.",
        },
      ],
    },
    {
      id: "payment",
      title: "Payment and Earnings",
      icon: "💰",
      items: [
        {
          id: "payment-1",
          question: "How much can I earn?",
          answer:
            "You can earn up to 30% commission on each sale made through your referral link. We also offer performance bonuses and tiered commission rates for top-performing affiliates. The more you promote, the more you can earn!",
        },
        {
          id: "payment-2",
          question: "How do I get paid?",
          answer:
            "We pay commissions monthly via PayPal, bank transfer, or direct deposit. Payments are processed on the 1st of every month for the previous month's earnings. Make sure your payment information is up to date in your affiliate dashboard.",
        },
        {
          id: "payment-3",
          question: "Is there a minimum payout?",
          answer:
            "Yes, the minimum payout threshold is $50. Once you reach that amount, you will receive your payment on the next scheduled payout date. Unpaid balances roll over to the following month.",
        },
      ],
    },
    {
      id: "gettingStarted",
      title: "Getting Started",
      icon: "🚀",
      items: [
        {
          id: "started-1",
          question: "How do I sign up?",
          answer:
            "To sign up, click the 'Join Now' button and complete our simple registration form. After submitting your application, you'll gain access to your affiliate dashboard and unique tracking links.",
        },
        {
          id: "started-2",
          question: "How long does it take to get approved?",
          answer:
            "Approval is typically processed within 24-48 hours. Once approved, you'll receive a welcome email with everything you need to start promoting and earning commissions immediately.",
        },
        {
          id: "started-3",
          question: "What if I need help?",
          answer:
            "Our dedicated affiliate support team is available via email, live chat, or scheduled video calls. We also provide extensive documentation, webinars, and one-on-one coaching to ensure your success.",
        },
      ],
    },
    {
      id: "rules",
      title: "Program Rules",
      icon: "📋",
      items: [
        {
          id: "rules-1",
          question: "Are there any restrictions on my affiliate links?",
          answer:
            "We require affiliates to use ethical marketing practices. Deceptive methods, spam, or misleading claims are prohibited. All promotions must comply with our brand guidelines and applicable laws.",
        },
        {
          id: "rules-2",
          question: "Can I refer people who already use your service?",
          answer:
            "Commissions are only available for new customers who sign up through your unique referral link. Existing users are not eligible for referral commissions to ensure fair compensation.",
        },
        {
          id: "rules-3",
          question: "Can't promote your services outside of my website?",
          answer:
            "Absolutely! You can promote through social media, email marketing, videos, podcasts, paid ads, and more. We encourage diverse promotion strategies while adhering to our terms and conditions.",
        },
      ],
    },
  ];

  return (
    <>
      <style>
        {`
          .faq-page {
            min-height: 100vh;
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          }

          /* FAQ Header Section */
          .faq-header {
            padding: 5rem 1rem;
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            color: white;
          }

          .faq-header-container {
            max-width: 72rem;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }

          .faq-heading {
            font-size: 2.25rem;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 1.5rem;
          }

          @media (min-width: 768px) {
            .faq-heading {
              font-size: 3rem;
            }
          }

          .gradient-text {
            background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .faq-subtitle {
            font-size: 1.125rem;
            color: #cbd5e1;
            opacity: 0.9;
            margin-bottom: 2rem;
            max-width: 42rem;
            margin-left: auto;
            margin-right: auto;
            line-height: 1.75;
          }

          .section-heading {
            font-size: 2.25rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 1rem;
          }

          @media (min-width: 768px) {
            .section-heading {
              font-size: 3rem;
            }
          }

          .section-subtitle {
            font-size: 1.125rem;
            color: #64748b;
            line-height: 1.75;
          }

          /* Quick Navigation */
          .quick-nav {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 3rem;
          }

          .nav-button {
            padding: 1rem 1.5rem;
            border-radius: 9999px;
            font-weight: 600;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
          }

          .nav-button.active {
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
            color: white;
            box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
          }

          .nav-button.inactive {
            background: white;
            color: #374151;
            border: 1px solid #e5e7eb;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          }

          .nav-button.inactive:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            border-color: #3b82f6;
          }

          /* FAQ Sections */
          .faq-sections {
            padding: 5rem 1rem;
            background: #f9fafb;
          }

          .faq-sections-container {
            max-width: 72rem;
            margin-left: auto;
            margin-right: auto;
          }

          .faq-section-card {
            background: white;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            border: 1px solid #e5e7eb;
            margin-bottom: 2rem;
            transition: all 0.3s ease;
          }

          .faq-section-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
          }

          .section-header {
            padding: 2rem;
            border-bottom: 1px solid #f3f4f6;
            display: flex;
            align-items: center;
            gap: 1rem;
          }

          .section-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: #1e293b;
          }

          .faq-items {
            padding: 0;
          }

          .faq-item {
            border-bottom: 1px solid #f3f4f6;
            transition: all 0.3s ease;
          }

          .faq-item:last-child {
            border-bottom: none;
          }

          .faq-item:hover {
            background: #f8fafc;
          }

          .faq-question {
            width: 100%;
            padding: 1.5rem 2rem;
            text-align: left;
            display: flex;
            justify-content: between;
            align-items: center;
            gap: 1rem;
            cursor: pointer;
            background: none;
            border: none;
            transition: all 0.3s ease;
          }

          .question-number {
            width: 2rem;
            height: 2rem;
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.875rem;
            font-weight: 600;
            flex-shrink: 0;
          }

          .question-text {
            flex: 1;
            font-size: 1.125rem;
            font-weight: 500;
            color: #1e293b;
            text-align: left;
          }

          .chevron-icon {
            transition: transform 0.3s ease;
            color: #6b7280;
          }

          .chevron-icon.open {
            transform: rotate(180deg);
          }

          .faq-answer {
            padding: 0 2rem;
            transition: all 0.3s ease;
            overflow: hidden;
          }

          .faq-answer.open {
            padding: 0 2rem 2rem 2rem;
            max-height: 500px;
            opacity: 1;
          }

          .faq-answer.closed {
            max-height: 0;
            opacity: 0;
            padding: 0 2rem;
          }

          .answer-content {
            background: #f8fafc;
            border-left: 4px solid #3b82f6;
            padding: 1.5rem;
            border-radius: 0.375rem;
          }

          .answer-text {
            color: #4b5563;
            line-height: 1.6;
          }

          /* Contact Section */
          .faq-contact {
            padding: 5rem 1rem;
            background: white;
          }

          .faq-contact-container {
            max-width: 72rem;
            margin-left: auto;
            margin-right: auto;
          }

          .contact-card {
            background: white;
            border-radius: 0.5rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            border: 1px solid #e5e7eb;
            padding: 3rem;
            text-align: center;
          }

          .contact-icon {
            width: 4rem;
            height: 4rem;
            background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
          }

          .contact-heading {
            font-size: 1.875rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 1rem;
          }

          .contact-subtitle {
            color: #6b7280;
            margin-bottom: 2rem;
            line-height: 1.6;
          }

          .contact-box {
            background: #f8fafc;
            border: 1px solid #e5e7eb;
            border-radius: 0.5rem;
            padding: 2rem;
            margin-bottom: 2rem;
          }

          .contact-button {
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
            color: white;
            border: none;
            padding: 1rem 2rem;
            border-radius: 0.375rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            margin: 0 auto;
          }

          .contact-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
          }

          /* Back to Top Button */
          .back-to-top {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 3rem;
            height: 3rem;
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
          }

          .back-to-top:hover {
            transform: translateY(-2px);
            box-shadow: 0 15px 30px rgba(59, 130, 246, 0.4);
          }

          /* Utility Classes */
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
          .mb-12 { margin-bottom: 3rem; }
          .mb-16 { margin-bottom: 4rem; }

          /* Responsive Design */
          @media (max-width: 768px) {
            .faq-header,
            .faq-sections,
            .faq-contact {
              padding: 3rem 1rem;
            }
            
            .faq-heading,
            .section-heading {
              font-size: 2rem;
            }

            .quick-nav {
              flex-direction: column;
              align-items: center;
            }

            .nav-button {
              width: 100%;
              max-width: 300px;
              justify-content: center;
            }

            .faq-question {
              padding: 1rem;
            }

            .contact-card {
              padding: 2rem 1rem;
            }
          }
        `}
      </style>

      <div className="faq-page">
        {/* Header Section */}
        <section className="faq-header">
          <div className="faq-header-container">
            <h1 className="faq-heading">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="faq-subtitle">
              Find comprehensive answers to all your questions about our
              affiliate program. Everything you need to know to start earning
              commissions is right here.
            </p>

            {/* Quick Navigation */}
            <div className="quick-nav">
              {faqData.map((section) => (
                <button
                  key={section.id}
                  onClick={() =>
                    scrollToSection(section.id as keyof typeof sectionRefs)
                  }
                  className={`nav-button ${
                    activeSection === section.id ? "active" : "inactive"
                  }`}
                >
                  <span>{section.icon}</span>
                  <span>{section.title}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="faq-sections">
          <div className="faq-sections-container">
            {faqData.map((section, sectionIndex) => (
              <div
                key={section.id}
                ref={sectionRefs[section.id as keyof typeof sectionRefs]}
                className="faq-section-card"
              >
                <div className="section-header">
                  <span className="text-2xl">{section.icon}</span>
                  <h2 className="section-title">{section.title}</h2>
                </div>

                <div className="faq-items">
                  {section.items.map((item, itemIndex) => (
                    <div key={item.id} className="faq-item">
                      <button
                        className="faq-question"
                        onClick={() => toggleItem(item.id)}
                      >
                        <div className="question-number">{itemIndex + 1}</div>
                        <div className="question-text">{item.question}</div>
                        <svg
                          className={`chevron-icon ${
                            openItems[item.id] ? "open" : ""
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      <div
                        className={`faq-answer ${
                          openItems[item.id] ? "open" : "closed"
                        }`}
                      >
                        <div className="answer-content">
                          <p className="answer-text">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="faq-contact">
          <div className="faq-contact-container">
            <div className="contact-card">
              <div className="contact-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>

              <h2 className="contact-heading">Still Have Questions?</h2>
              <p className="contact-subtitle">
                Our dedicated support team is ready to help you succeed. Get
                personalized assistance and expert guidance whenever you need
                it.
              </p>

              <div className="contact-box">
                <p className="mb-4">
                  Can't find what you're looking for? Contact our support team
                  for personalized assistance.
                </p>
                <Link to="/contact">
                  {" "}
                  <button className="contact-button">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Contact Support Team
                  </button>
                </Link>
              </div>

              <div>
                <p className="mb-4">Prefer to explore on your own?</p>
                <a
                  href="/affiliate"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Visit our affiliate resources →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Top Button */}
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default FAQPage;
