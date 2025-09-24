import {
  Star,
  Quote,
  CheckCircle,
  Shield,
  Zap,
  Users,
  Play,
  Target,
  BarChart3,
  Calendar,
  MessageCircle,
  TrendingUp,
} from "lucide-react";
import { Hero } from "./Hero";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const howItWorks = [
    {
      icon: Target,
      title: "Strategy Session",
      description:
        "We analyze your goals, audience, and current presence to create a customized growth plan.",
      color: "#3B82F6",
      details: [
        "Comprehensive audit of your social media",
        "Competitor analysis",
        "Goal setting and KPI definition",
      ],
    },
    {
      icon: BarChart3,
      title: "Content Planning",
      description:
        "Our team develops engaging content strategies tailored to your brand voice and objectives.",
      color: "#10B981",
      details: [
        "Content calendar creation",
        "Visual branding guidelines",
        "Engagement strategy development",
      ],
    },
    {
      icon: Play,
      title: "Execution & Growth",
      description:
        "We implement the strategy while continuously optimizing for maximum engagement and growth.",
      color: "#F59E0B",
      details: [
        "Daily content posting",
        "Community management",
        "Performance tracking",
      ],
    },
    {
      icon: TrendingUp,
      title: "Optimization",
      description:
        "Regular analysis and adjustments ensure your strategy evolves with algorithm changes.",
      color: "#EF4444",
      details: [
        "Weekly performance reports",
        "A/B testing",
        "Strategy refinement",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Startup CEO",
      content:
        "SocialGrowth helped us increase our Instagram followers by 300% in just 6 months. The quality of engagement is outstanding!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1739298061757-7a3339cee982?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc1ODUwNzM3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Michael Chen",
      company: "Digital Marketing Agency",
      content:
        "Their LinkedIn growth strategies transformed our B2B lead generation. We now get 5x more qualified leads monthly.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1676282827533-d6058df56a69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZyUyMHRlYW0lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU4NTE5Mzg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Emma Rodriguez",
      company: "E-commerce Brand",
      content:
        "The YouTube growth package exceeded our expectations. Our subscriber count doubled and video views increased by 400%.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1736066331155-c95740b0bd6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzU4NDUzNTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Rapid Results",
      description:
        "See measurable growth within the first 30 days of partnership",
    },
    {
      icon: Shield,
      title: "Safe & Organic",
      description:
        "100% compliant with platform guidelines - no bots or fake followers",
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description:
        "Your personal growth strategist and content team assigned to your account",
    },
    {
      icon: CheckCircle,
      title: "Proven Strategies",
      description: "Battle-tested methods that have worked for 500+ businesses",
    },
  ];

  const whyChooseUs = [
    "5+ years of specialized social media growth experience",
    "Customized strategies tailored to your specific industry",
    "Transparent reporting with real-time analytics dashboard",
    "A/B testing to optimize content performance continuously",
    "Crisis management and reputation protection",
    "Competitor analysis and market positioning",
  ];

  return (
    <>
      <style>{`
        /* Global Styles from AffiliatePage */
        body {
          margin: 0;
          padding: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        /* Text Center Utility */
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

        /* Updated HomePage Styles with AffiliatePage spacing */
        .homepage-section {
          padding: 5rem 1rem;
        }

        @media (max-width: 768px) {
          .homepage-section {
            padding: 3rem 1rem;
          }
        }

        .homepage-container {
          max-width: 72rem;
          margin-left: auto;
          margin-right: auto;
        }

        .homepage-heading {
          font-size: 2.25rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1rem;
        }

        @media (min-width: 768px) {
          .homepage-heading {
            font-size: 3rem;
          }
        }

        .homepage-subtitle {
          font-size: 1.125rem;
          color: #64748b;
          line-height: 1.75;
          max-width: 42rem;
          margin-left: auto;
          margin-right: auto;
        }

        .homepage-how-it-works {
          background: linear-gradient(to bottom, var(--background) 0%, rgba(243, 244, 246, 0.8) 100%);
        }

        .dark .homepage-how-it-works {
          background: linear-gradient(to bottom, var(--background) 0%, rgba(17, 24, 39, 0.8) 100%);
        }

        .homepage-testimonials {
          background: rgba(249, 250, 251, 0.9);
        }

        .dark .homepage-testimonials {
          background: rgba(17, 24, 39, 0.5);
        }

        .homepage-cta {
          background: linear-gradient(135deg, rgba(239, 246, 255, 0.9) 0%, rgba(237, 233, 254, 0.9) 100%);
        }

        .dark .homepage-cta {
          background: linear-gradient(135deg, rgba(30, 58, 138, 0.2) 0%, rgba(76, 29, 149, 0.2) 100%);
        }

        .homepage-stats {
          background: white;
          border-top: 1px solid #e2e8f0;
        }

        .dark .homepage-stats {
          background: #1f2937;
          border-top: 1px solid #374151;
        }

        .homepage-benefits {
          background: linear-gradient(135deg, rgba(239, 246, 255, 0.6) 0%, rgba(255, 251, 235, 0.6) 100%);
        }

        .dark .homepage-benefits {
          background: linear-gradient(135deg, rgba(30, 58, 138, 0.1) 0%, rgba(120, 53, 15, 0.1) 100%);
        }

        .homepage-why-choose-us {
          background: linear-gradient(135deg, rgba(236, 253, 245, 0.6) 0%, rgba(254, 242, 242, 0.6) 100%);
        }

        .dark .homepage-why-choose-us {
          background: linear-gradient(135deg, rgba(6, 78, 59, 0.1) 0%, rgba(127, 29, 29, 0.1) 100%);
        }

        /* Card Styles from AffiliatePage */
        .homepage-testimonial-card {
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
          padding: 1.5rem;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .homepage-testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
        }

        .dark .homepage-testimonial-card {
          background: #1f2937;
          border: 1px solid #374151;
        }

        /* Button Styles from AffiliatePage */
        .homepage-button-primary {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          border: none;
          color: white;
          font-weight: 600;
          padding: 1rem 2rem;
          border-radius: 9999px;
          transition: all 0.3s ease;
          cursor: pointer;
          font-size: 0.875rem;
        }

        .homepage-button-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3);
        }

        .homepage-button-secondary {
          border: 1px solid #d1d5db;
          color: #374151;
          background: white;
          padding: 1rem 2rem;
          border-radius: 9999px;
          transition: all 0.3s ease;
          cursor: pointer;
          font-weight: 600;
        }

        .homepage-button-secondary:hover {
          background: #f8fafc;
          border-color: #3b82f6;
          transform: translateY(-2px);
        }

        .dark .homepage-button-secondary {
          color: #d1d5db;
          border-color: #4b5563;
          background: #374151;
        }

        .dark .homepage-button-secondary:hover {
          background: #4b5563;
          border-color: #60a5fa;
        }

        /* Stats Section Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .homepage-stats .homepage-testimonial-card {
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .homepage-stats .homepage-testimonial-card:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .dark .homepage-stats .homepage-testimonial-card {
          background: linear-gradient(135deg, rgba(30, 30, 30, 0.8) 0%, rgba(50, 50, 50, 0.6) 100%);
        }

        .dark .homepage-stats .homepage-testimonial-card:hover {
          background: linear-gradient(135deg, rgba(40, 40, 40, 0.9) 0%, rgba(60, 60, 60, 0.7) 100%);
        }

        /* Benefit Cards */
        .benefit-card {
          background: white;
          border-radius: 0.5rem;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
          height: 100%;
        }

        .benefit-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
        }

        .dark .benefit-card {
          background: #1f2937;
          border-color: #374151;
        }

        /* Why Choose Us List - FIXED RESPONSIVE STYLES */
        .why-choose-us-list {
          display: grid;
          gap: 1rem;
          grid-template-columns: 1fr;
          width: 100%;
        }

        @media (min-width: 768px) {
          .why-choose-us-list {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .why-choose-us-list {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          }
        }

        .why-choose-us-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 0.5rem;
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }

        .why-choose-us-item:hover {
          background: rgba(255, 255, 255, 0.8);
          transform: translateX(5px);
        }

        .dark .why-choose-us-item {
          background: rgba(255, 255, 255, 0.05);
          border-color: #374151;
        }

        .dark .why-choose-us-item:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        /* Centered What Makes Us Different section */
        .homepage-centered-section {
          text-align: center;
          max-width: 56rem;
          margin: 0 auto;
        }

        .homepage-centered-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .homepage-centered-cta {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 1rem;
          padding: 3rem 2rem;
          color: white;
          text-align: center;
          width: 100%;
          max-width: 36rem;
          border: none;
        }

        /* Grid Layouts */
        .homepage-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .homepage-grid-2 {
            grid-template-columns: repeat(2, 1fr);
          }
          .homepage-grid-3 {
            grid-template-columns: repeat(3, 1fr);
          }
          .homepage-grid-4 {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .homepage-grid-5 {
            grid-template-columns: repeat(5, 1fr);
          }
        }

        /* How It Works Specific Styles */
        .how-it-works-card {
          background: white;
          border-radius: 1rem;
          padding: 2.5rem;
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
          position: relative;
          overflow: hidden;
          height: 100%;
          text-align: left;
        }

        .how-it-works-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
        }

        .dark .how-it-works-card {
          background: #1f2937;
          border-color: #374151;
        }

        .checklist-item {
          display: flex;
          align-items: center;
          margin-bottom: 0.75rem;
          padding: 0.5rem;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
        }

        .checklist-item:hover {
          background: rgba(59, 130, 246, 0.05);
          transform: translateX(5px);
        }

        .dark .checklist-item:hover {
          background: rgba(59, 130, 246, 0.1);
        }

        .checkmark {
          width: 1.25rem;
          height: 1.25rem;
          border-radius: 50%;
          border: 2px solid #10B981;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
          flex-shrink: 0;
          position: relative;
        }

        .checkmark::before {
          content: '✓';
          color: #10B981;
          font-size: 0.75rem;
          font-weight: bold;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .homepage-heading {
            font-size: 2rem;
          }
          
          .homepage-centered-cta {
            padding: 2rem 1.5rem;
          }

          .how-it-works-card {
            padding: 2rem 1.5rem;
          }

          .why-choose-us-item {
            padding: 0.75rem;
            gap: 0.75rem;
          }

          .why-choose-us-item span {
            font-size: 0.9rem;
          }
        }
      `}</style>

      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        }}
      >
        {/* Hero Section */}
        <Hero onNavigate={onNavigate} />

        {/* Our Impact - At a Glance Section */}
        <section className="homepage-section homepage-stats">
          <div className="homepage-container">
            <div className="text-center mb-16">
              <h2 className="homepage-heading">Our Impact - At a Glance</h2>
              <p className="homepage-subtitle">
                Transforming social media presence with measurable results and
                exceptional service
              </p>
            </div>

            <div className="homepage-grid homepage-grid-4">
              {[
                {
                  number: "500+",
                  label: "Happy Clients",
                  icon: "👥",
                  description: "Satisfied businesses across various industries",
                  color: "#3B82F6",
                },
                {
                  number: "2M+",
                  label: "Followers Gained",
                  icon: "📈",
                  description: "Organic growth across all social platforms",
                  color: "#10B981",
                },
                {
                  number: "95%",
                  label: "Success Rate",
                  icon: "🎯",
                  description: "Clients achieving their growth targets",
                  color: "#F59E0B",
                },
                {
                  number: "24/7",
                  label: "Support",
                  icon: "⚡",
                  description: "Round-the-clock dedicated assistance",
                  color: "#EF4444",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="homepage-testimonial-card"
                  style={{
                    textAlign: "center",
                    padding: "2rem 1.5rem",
                    position: "relative",
                    overflow: "hidden",
                    background: `linear-gradient(135deg, ${stat.color}10 0%, ${stat.color}05 100%)`,
                    border: `1px solid ${stat.color}20`,
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-8px) scale(1.02)";
                    e.currentTarget.style.background = `linear-gradient(135deg, ${stat.color}15 0%, ${stat.color}10 100%)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.background = `linear-gradient(135deg, ${stat.color}10 0%, ${stat.color}05 100%)`;
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-50%",
                      right: "-50%",
                      width: "100%",
                      height: "100%",
                      background: `radial-gradient(circle, ${stat.color}15 0%, transparent 70%)`,
                      opacity: "0",
                      transition: "opacity 0.3s ease",
                      borderRadius: "50%",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = "1";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = "0";
                    }}
                  />

                  <div
                    style={{
                      fontSize: "3rem",
                      marginBottom: "0.5rem",
                      opacity: "0.8",
                      transform: "scale(1)",
                      transition: "transform 0.3s ease",
                      position: "relative",
                      zIndex: "2",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    {stat.icon}
                  </div>

                  <div
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: "bold",
                      color: stat.color,
                      marginBottom: "0.5rem",
                      background: `linear-gradient(135deg, ${stat.color} 0%, ${stat.color}AA 100%)`,
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      transition: "transform 0.3s ease",
                      position: "relative",
                      zIndex: "2",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    {stat.number}
                  </div>

                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "600",
                      marginBottom: "0.75rem",
                      color: "var(--foreground)",
                      position: "relative",
                      zIndex: "2",
                    }}
                  >
                    {stat.label}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#6b7280",
                      lineHeight: "1.4",
                      margin: "0",
                      position: "relative",
                      zIndex: "2",
                    }}
                  >
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="homepage-section homepage-how-it-works">
          <div className="homepage-container">
            <div className="text-center mb-16">
              <h2 className="homepage-heading">Our Process</h2>
              <p className="homepage-subtitle">
                A systematic approach to transforming your social media presence
                and driving measurable results
              </p>
            </div>

            <div className="homepage-grid homepage-grid-2">
              {howItWorks.map((step, index) => (
                <div
                  key={index}
                  className="how-it-works-card"
                  style={{
                    borderLeft: `4px solid ${step.color}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderLeftWidth = "6px";
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderLeftWidth = "4px";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <div
                      style={{
                        width: "4rem",
                        height: "4rem",
                        borderRadius: "0.75rem",
                        background: `linear-gradient(135deg, ${step.color}20 0%, ${step.color}10 100%)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "1.5rem",
                        flexShrink: "0",
                      }}
                    >
                      <step.icon
                        style={{
                          width: "2rem",
                          height: "2rem",
                          color: step.color,
                        }}
                      />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: "600",
                          color: "var(--foreground)",
                          margin: "0 0 0.5rem 0",
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        style={{
                          color: "#6b7280",
                          lineHeight: "1.6",
                          margin: 0,
                          fontSize: "1rem",
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div>
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="checklist-item">
                        <div className="checkmark" />
                        <span
                          style={{
                            color: "var(--foreground)",
                            fontSize: "0.95rem",
                            lineHeight: "1.4",
                          }}
                        >
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="homepage-section homepage-benefits">
          <div className="homepage-container">
            <div className="text-center mb-16">
              <h2 className="homepage-heading">Why Choose SocialGrowth?</h2>
              <p className="homepage-subtitle">
                Experience the difference with our proven approach to social
                media growth
              </p>
            </div>

            <div
              className="homepage-grid homepage-grid-4"
              style={{ marginBottom: "3rem" }}
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <benefit.icon
                      style={{
                        width: "3rem",
                        height: "3rem",
                        color: "#2563eb",
                      }}
                    />
                  </div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "600",
                      marginBottom: "1rem",
                      color: "var(--foreground)",
                    }}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    style={{
                      color: "#6b7280",
                      lineHeight: "1.5",
                    }}
                  >
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section - CENTERED */}
        <section className="homepage-section homepage-why-choose-us">
          <div className="homepage-centered-section">
            <div className="homepage-centered-content">
              <div style={{ width: "100%" }}>
                <h2 className="homepage-heading">What Makes Us Different</h2>
                <p
                  className="homepage-subtitle"
                  style={{ marginBottom: "2rem" }}
                >
                  We don't just manage social media - we build sustainable
                  growth engines that drive real business results.
                </p>
                <div
                  className="why-choose-us-list"
                  style={{
                    maxWidth: "48rem",
                    margin: "0 auto",
                  }}
                >
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="why-choose-us-item">
                      <CheckCircle
                        style={{
                          width: "1.5rem",
                          height: "1.5rem",
                          color: "#10B981",
                          flexShrink: "0",
                        }}
                      />
                      <span
                        style={{
                          color: "var(--foreground)",
                          textAlign: "left",
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="homepage-centered-cta">
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                  }}
                >
                  Ready to Transform Your Social Media?
                </h3>
                <p
                  style={{
                    marginBottom: "2rem",
                    opacity: "0.9",
                    fontSize: "1.125rem",
                  }}
                >
                  Join the hundreds of businesses that have achieved remarkable
                  growth with our strategies.
                </p>
                <button
                  onClick={() => onNavigate("contact")}
                  style={{
                    background: "white",
                    color: "#2563eb",
                    border: "none",
                    borderRadius: "0.5rem",
                    padding: "0.75rem 2rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
                    fontSize: "1rem",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  Contact Support Team
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="homepage-section homepage-testimonials">
          <div className="homepage-container">
            <div className="text-center mb-16">
              <h2 className="homepage-heading">What Our Clients Say</h2>
              <p className="homepage-subtitle">
                Real results from real businesses
              </p>
            </div>

            <div className="homepage-grid homepage-grid-3">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="homepage-testimonial-card">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        style={{
                          width: "1rem",
                          height: "1rem",
                          fill: "#fbbf24",
                          color: "#fbbf24",
                        }}
                      />
                    ))}
                  </div>

                  <Quote
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                      color: "#93c5fd",
                      marginBottom: "1rem",
                    }}
                  />

                  <p
                    style={{
                      color: "#6b7280",
                      fontStyle: "italic",
                      marginBottom: "1.5rem",
                      lineHeight: "1.5",
                      fontSize: "0.875rem",
                      flexGrow: 1,
                    }}
                  >
                    "{testimonial.content}"
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <ImageWithFallback
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "2px solid #93c5fd",
                      }}
                    />
                    <div>
                      <div
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: "500",
                          color: "var(--foreground)",
                        }}
                      >
                        {testimonial.name}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="homepage-section homepage-cta">
          <div className="homepage-container" style={{ textAlign: "center" }}>
            <h2 className="homepage-heading">
              Ready to Grow Your Social Media?
            </h2>
            <p className="homepage-subtitle" style={{ marginBottom: "2rem" }}>
              Join hundreds of businesses that have transformed their social
              media presence with our proven strategies.
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
                onClick={() => onNavigate("register")}
                className="homepage-button-primary"
                style={{ width: "100%" }}
              >
                Get Started Today
              </button>
              <button
                onClick={() => onNavigate("about")}
                className="homepage-button-secondary"
                style={{ width: "100%" }}
              >
                Learn More About Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
