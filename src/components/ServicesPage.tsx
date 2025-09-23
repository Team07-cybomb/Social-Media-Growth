import { Instagram, Linkedin, Facebook, Twitter, Youtube } from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import {React} from "React";

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      icon: Instagram,
      title: "Instagram Growth",
      description:
        "Boost your Instagram presence with authentic followers, increased engagement, and strategic content optimization.",
      features: [
        "Organic follower growth strategies",
        "Content creation and curation",
        "Hashtag research and optimization",
        "Story and Reels strategy",
        "Influencer collaboration guidance",
        "Analytics and performance tracking",
      ],
    },
    {
      icon: Linkedin,
      title: "LinkedIn Growth",
      description:
        "Build your professional network, establish thought leadership, and generate quality B2B leads through strategic LinkedIn growth.",
      features: [
        "Professional network expansion",
        "Content strategy for thought leadership",
        "Lead generation optimization",
        "Personal branding development",
        "Connection building strategies",
        "LinkedIn article writing",
      ],
    },
    {
      icon: Facebook,
      title: "Facebook Growth",
      description:
        "Expand your Facebook reach with targeted audience growth, engaging content, and effective community building strategies.",
      features: [
        "Targeted audience development",
        "Facebook page optimization",
        "Community management",
        "Facebook ads strategy",
        "Event promotion tactics",
        "Cross-platform integration",
      ],
    },
    {
      icon: Twitter,
      title: "X (Twitter) Growth",
      description:
        "Amplify your voice on X with strategic tweeting, trending topic participation, and authentic follower acquisition.",
      features: [
        "Tweet strategy and timing",
        "Trending hashtag participation",
        "Thread creation for engagement",
        "Twitter Spaces strategy",
        "Influencer engagement tactics",
        "Real-time marketing opportunities",
      ],
    },
    {
      icon: Youtube,
      title: "YouTube Growth",
      description:
        "Grow your YouTube channel with optimized content, improved discoverability, and increased subscriber engagement.",
      features: [
        "Video SEO optimization",
        "Thumbnail design strategy",
        "Content planning and scheduling",
        "Audience retention techniques",
        "YouTube Shorts strategy",
        "Monetization guidance",
      ],
    },
  ];

  return (
    <>
      <style>{`
        .services-page * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        .services-page {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
          color: #111827;
        }
        
        .services-page h1, .services-page h2, .services-page h3 {
          font-weight: 600;
          line-height: 1.25;
        }
        
        .services-page button {
          font-family: inherit;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .services-page button:focus {
          outline: 2px solid #2563eb;
          outline-offset: 2px;
        }
        
        @media (max-width: 768px) {
          .services-page h1 {
            font-size: 2rem !important;
          }
          
          .services-page h2 {
            font-size: 1.75rem !important;
          }
          
          .services-page section {
            padding: 2rem 1rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .services-page h1 {
            font-size: 1.75rem !important;
          }
          
          .services-page section {
            padding: 1.5rem 1rem !important;
          }
        }
      `}</style>

      <div className="services-page" style={{ minHeight: "100vh" }}>
        {/* Header Section */}
        <section
          style={{
            padding: "4rem 1rem",
            background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
          }}
        >
          <div
            style={{ maxWidth: "56rem", margin: "0 auto", textAlign: "center" }}
          >
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "1.5rem",
                color: "#111827",
                lineHeight: "1.2",
              }}
            >
              Our <span style={{ color: "#2563eb" }}>Services</span>
            </h1>
            <p
              style={{
                fontSize: "1.125rem",
                color: "#6b7280",
                marginBottom: "2rem",
                lineHeight: "1.6",
                maxWidth: "48rem",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Comprehensive social media growth solutions designed to elevate your
              brand across all major platforms. Each service is tailored to your
              specific goals and industry requirements.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section
          style={{
            padding: "4rem 1rem",
            background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)",
          }}
        >
          <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "2rem",
                alignItems: "stretch",
              }}
            >
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  onGetStarted={() => onNavigate("contact")}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section
          style={{
            padding: "4rem 1rem",
            background: "linear-gradient(135deg, #eff6ff 0%, #f0f9ff 100%)",
          }}
        >
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  color: "#111827",
                }}
              >
                Our Growth Process
              </h2>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "#6b7280",
                  maxWidth: "48rem",
                  margin: "0 auto",
                }}
              >
                A proven 4-step methodology that delivers consistent results
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {[
                {
                  step: "01",
                  title: "Analysis",
                  description:
                    "We analyze your current social media presence and identify growth opportunities.",
                  icon: "🔍",
                },
                {
                  step: "02",
                  title: "Strategy",
                  description:
                    "Create a customized growth strategy aligned with your business goals and target audience.",
                  icon: "📊",
                },
                {
                  step: "03",
                  title: "Implementation",
                  description:
                    "Execute the strategy with consistent content creation and engagement tactics.",
                  icon: "🚀",
                },
                {
                  step: "04",
                  title: "Optimization",
                  description:
                    "Monitor performance and continuously optimize for better results and ROI.",
                  icon: "⚡",
                },
              ].map((process, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "0.75rem",
                    boxShadow:
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                    border: "1px solid #e5e7eb",
                    padding: "1.5rem",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
                  }}
                >
                  <div
                    style={{
                      width: "4rem",
                      height: "4rem",
                      backgroundColor: "rgba(37, 99, 235, 0.1)",
                      color: "#2563eb",
                      borderRadius: "0.75rem",
                      margin: "0 auto 1rem auto",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                    }}
                  >
                    {process.icon}
                  </div>
                  <div
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      backgroundColor: "#2563eb",
                      color: "#ffffff",
                      borderRadius: "50%",
                      margin: "0 auto 1rem auto",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.875rem",
                      fontWeight: "bold",
                    }}
                  >
                    {process.step}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: "600",
                      marginBottom: "0.75rem",
                      color: "#111827",
                    }}
                  >
                    {process.title}
                  </h3>
                  <p
                    style={{
                      color: "#6b7280",
                      fontSize: "0.875rem",
                      lineHeight: "1.5",
                      flexGrow: 1,
                    }}
                  >
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          style={{
            padding: "4rem 1rem",
            background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
          }}
        >
          <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  color: "#111827",
                }}
              >
                Frequently Asked Questions
              </h2>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {[
                {
                  question: "How long does it take to see results?",
                  answer:
                    "Most clients start seeing noticeable growth within 30-60 days, with significant results typically visible after 3-6 months of consistent strategy implementation.",
                },
                {
                  question: "Do you guarantee follower growth?",
                  answer:
                    "While we cannot guarantee specific numbers due to platform algorithm changes, our proven strategies have delivered consistent growth for 95% of our clients.",
                },
                {
                  question: "Can I choose multiple platforms?",
                  answer:
                    "Absolutely! Many clients benefit from multi-platform strategies. We offer bundled packages that provide better value for multiple platform growth.",
                },
                {
                  question: "Do you create content for us?",
                  answer:
                    "Yes, our services include content strategy, creation, and curation tailored to your brand voice and audience preferences.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "0.75rem",
                    boxShadow:
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                    border: "1px solid #e5e7eb",
                    padding: "1.5rem",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: "600",
                      marginBottom: "0.75rem",
                      color: "#111827",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                    }}
                  >
                    <span
                      style={{
                        width: "1.5rem",
                        height: "1.5rem",
                        backgroundColor: "rgba(37, 99, 235, 0.1)",
                        color: "#2563eb",
                        borderRadius: "0.25rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.75rem",
                        fontWeight: "bold",
                        flexShrink: 0,
                        marginTop: "0.125rem",
                      }}
                    >
                      Q
                    </span>
                    {faq.question}
                  </h3>
                  <p
                    style={{
                      color: "#6b7280",
                      lineHeight: "1.5",
                      fontSize: "0.875rem",
                      marginLeft: "2.25rem",
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          style={{
            padding: "4rem 1rem",
            background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
          }}
        >
          <div
            style={{ maxWidth: "56rem", margin: "0 auto", textAlign: "center" }}
          >
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "#ffffff",
                lineHeight: "1.2",
              }}
            >
              Ready to Grow Your Social Media?
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                color: "#dbeafe",
                marginBottom: "2rem",
                lineHeight: "1.5",
              }}
            >
              Let's discuss your goals and create a customized growth strategy for
              your business.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "20rem",
                margin: "0 auto",
              }}
            >
              <button
                onClick={() => onNavigate("contact")}
                style={{
                  width: "100%",
                  backgroundColor: "#ffffff",
                  color: "#2563eb",
                  padding: "0.75rem 2rem",
                  borderRadius: "0.5rem",
                  border: "none",
                  fontWeight: "600",
                  fontSize: "1rem",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 6px -1px rgba(59, 130, 246, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px -5px rgba(255, 255, 255, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 6px -1px rgba(59, 130, 246, 0.3)";
                }}
              >
                Get Started Today
              </button>
              <button
                onClick={() => onNavigate("home")}
                style={{
                  width: "100%",
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  padding: "0.75rem 2rem",
                  borderRadius: "0.5rem",
                  border: "2px solid #ffffff",
                  fontWeight: "600",
                  fontSize: "1rem",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                Back to Home
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}