import {
  Target,
  Users,
  Award,
  TrendingUp,
  Star,
  Shield,
  Zap,
  CheckCircle,
  Clock,
  ThumbsUp,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Rocket, Eye, Headphones } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function AboutPage() {
  const navigate = useNavigate();

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "We focus on delivering measurable growth and ROI for every client, using data-driven strategies that work.",
    },
    {
      icon: Users,
      title: "Authentic Growth",
      description:
        "We believe in building genuine communities, not just follower counts. Quality engagement over quantity.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We maintain the highest standards in everything we do, from strategy development to client communication.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description:
        "We stay ahead of social media trends and algorithm changes to keep our clients' growth consistent.",
    },
  ];

  const stats = [
    { number: "500+", label: "Clients Served" },
    { number: "2M+", label: "Followers Generated" },
    { number: "95%", label: "Client Retention Rate" },
    { number: "5", label: "Years Experience" },
  ];

  const trustIndicators = [
    {
      icon: <Users className="h-5 w-5" style={{ color: "#60a5fa" }} />,
      text: "Trusted by 500+ businesses worldwide",
    },
    {
      icon: <Shield className="h-5 w-5" style={{ color: "#60a5fa" }} />,
      text: "100% Organic Growth Guarantee",
    },
    {
      icon: <Clock className="h-5 w-5" style={{ color: "#60a5fa" }} />,
      text: "24/7 Expert Support Team",
    },
    {
      icon: <ThumbsUp className="h-5 w-5" style={{ color: "#60a5fa" }} />,
      text: "4.9/5 Customer Rating",
    },
    {
      icon: <Zap className="h-5 w-5" style={{ color: "#60a5fa" }} />,
      text: "Real Results in 30 Days",
    },
    {
      icon: <CheckCircle className="h-5 w-5" style={{ color: "#60a5fa" }} />,
      text: "No Contracts, Cancel Anytime",
    },
  ];

  const growthMetrics = [
    {
      metric: "Average Follower Growth",
      value: "+285%",
      color: "#10b981",
    },
    {
      metric: "Engagement Rate Increase",
      value: "+150%",
      color: "#3b82f6",
    },
    {
      metric: "Content Reach Expansion",
      value: "+200%",
      color: "#f59e0b",
    },
  ];

  return (
    <>
      <style>
        {`
          .about-page {
            min-height: 100vh;
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          }

          /* Hero Section */
          .about-hero {
            padding: 5rem 1rem;
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            color: white;
          }

          .about-hero-container {
            max-width: 72rem;
            margin-left: auto;
            margin-right: auto;
          }

          .about-hero-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
            align-items: center;
          }

          @media (min-width: 1024px) {
            .about-hero-grid {
              grid-template-columns: 1fr 1fr;
            }
          }

          .about-hero-title {
            font-size: 2.25rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            line-height: 1.2;
          }

          @media (min-width: 768px) {
            .about-hero-title {
              font-size: 3rem;
            }
          }

          .gradient-text {
            background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .about-hero-text {
            font-size: 1.125rem;
            color: #cbd5e1;
            opacity: 0.9;
            margin-bottom: 2rem;
            line-height: 1.75;
          }

          .about-stats-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          @media (min-width: 768px) {
            .about-stats-grid {
              grid-template-columns: repeat(4, 1fr);
            }
          }

          .about-stat {
            text-align: center;
          }

          .about-stat-number {
            font-size: 1.875rem;
            font-weight: bold;
            color: #60a5fa;
            margin-bottom: 0.5rem;
          }

          .about-stat-label {
            font-size: 1rem;
            font-weight: 500;
            color: #cbd5e1;
          }

          .about-hero-image {
            position: relative;
          }

          .about-image {
            border-radius: 1rem;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
            width: 100%;
            height: 25rem;
            object-fit: cover;
          }

          /* Mission Section - UPDATED: White background with #f9fafb cards */
          .about-mission {
            padding: 5rem 1rem;
            background: white;
          }

          .about-mission-container {
            max-width: 72rem;
            margin-left: auto;
            margin-right: auto;
          }

          .about-mission-heading {
            text-align: center;
            margin-bottom: 4rem;
          }

          .section-heading {
            font-size: 2.25rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 1rem;
          }

          @media (min-width: 768px) {
            .section-heading {
              font-size: 2.5rem;
            }
          }

          .section-subtitle {
            font-size: 1.125rem;
            color: #64748b;
            line-height: 1.75;
          }

          .about-mission-divider {
            width: 6rem;
            height: 0.125rem;
            background: #10b981;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 1.5rem;
          }

          .about-mission-text {
            font-size: 1.125rem;
            color: #64748b;
            line-height: 1.75;
            max-width: 48rem;
            margin-left: auto;
            margin-right: auto;
          }

          .about-mission-text span {
            font-weight: 600;
            color: #3b82f6;
          }

          .about-cards-grid {
            display: grid;
            gap: 2rem;
          }

          @media (min-width: 768px) {
            .about-cards-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          .about-card {
            background: #f9fafb;
            text-align: center;
            border-radius: 0.5rem;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            padding: 2rem;
            transition: all 0.3s ease;
            border: 1px solid #e2e8f0;
            height: 100%;
          }

          .about-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
          }

          .about-card-icon {
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 1.5rem;
            display: flex;
            height: 5rem;
            width: 5rem;
            align-items: center;
            justify-content: center;
            border-radius: 9999px;
            background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
          }

          .about-card-icon svg {
            height: 2.5rem;
            width: 2.5rem;
            color: #059669;
          }

          .about-card-title {
            font-size: 1.25rem;
            font-weight: 600;
            text-transform: uppercase;
            color: #1e293b;
            margin-bottom: 1rem;
          }

          .about-card-text {
            color: #64748b;
            line-height: 1.75;
          }

          .about-card-text span {
            font-weight: 600;
          }

          .about-card-text strong {
            font-weight: 700;
          }

          /* Values Section - UPDATED: #f9fafb background with white cards */
          .about-values {
            padding: 5rem 1rem;
            background: #f9fafb;
          }

          .about-values-container {
            max-width: 72rem;
            margin-left: auto;
            margin-right: auto;
          }

          .about-values-heading {
            text-align: center;
            margin-bottom: 4rem;
          }

          .about-values-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          @media (min-width: 768px) {
            .about-values-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (min-width: 1024px) {
            .about-values-grid {
              grid-template-columns: repeat(4, 1fr);
            }
          }

          .about-value-card {
            text-align: center;
            height: 100%;
            transition: all 0.3s ease;
            background: white;
            border-radius: 0.5rem;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            border: 1px solid #e2e8f0;
          }

          .about-value-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
          }

          .about-value-content {
            padding: 2rem;
          }

          .about-value-icon {
            width: 4rem;
            height: 4rem;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
            border-radius: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .about-value-icon svg {
            width: 2rem;
            height: 2rem;
            color: #3b82f6;
          }

          .about-value-card-title {
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 0.75rem;
            color: #1e293b;
          }

          .about-value-card-text {
            color: #64748b;
            font-size: 0.875rem;
            line-height: 1.5;
          }

          /* Trust Indicators Section - WHITE BACKGROUND */
          .about-trust {
            padding: 5rem 1rem;
            background: white;
          }

          .about-trust-container {
            max-width: 72rem;
            margin-left: auto;
            margin-right: auto;
          }

          .about-trust-heading {
            text-align: center;
            margin-bottom: 4rem;
          }

          .about-trust-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
            max-width: 48rem;
            margin: 0 auto;
          }

          @media (min-width: 768px) {
            .about-trust-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          .about-trust-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 0.5rem;
            transition: all 0.3s ease;
            border: 1px solid #e2e8f0;
          }

          .about-trust-item:hover {
            background: rgba(255, 255, 255, 0.8);
            transform: translateX(5px);
          }

          .dark .about-trust-item {
            background: rgba(255, 255, 255, 0.05);
            border-color: #374151;
          }

          .dark .about-trust-item:hover {
            background: rgba(255, 255, 255, 0.1);
          }

          .about-trust-icon {
            width: 3rem;
            height: 3rem;
            border-radius: 0.75rem;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            background: rgba(59, 130, 246, 0.2);
            border: 1px solid rgba(59, 130, 246, 0.3);
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
          }

          .about-trust-text {
            font-size: 0.875rem;
            font-weight: 500;
            color: #374151;
            flex: 1;
          }

          /* Growth Metrics Section - #f9fafb BACKGROUND */
          .about-growth {
            padding: 5rem 1rem;
            background: #f9fafb;
          }

          .about-growth-container {
            max-width: 72rem;
            margin-left: auto;
            margin-right: auto;
          }

          .about-growth-heading {
            text-align: center;
            margin-bottom: 4rem;
          }

          .about-growth-card {
            background: white;
            border-radius: 1rem;
            padding: 3rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            border: 1px solid #e2e8f0;
            max-width: 36rem;
            margin: 0 auto;
          }

          .about-growth-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 2rem;
            text-align: center;
          }

          .about-growth-metrics {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .about-growth-metric {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            border-radius: 0.5rem;
            background: #f8fafc;
            transition: all 0.3s ease;
          }

          .about-growth-metric:hover {
            background: #f1f5f9;
            transform: translateX(5px);
          }

          .about-growth-metric-name {
            font-size: 1rem;
            font-weight: 500;
            color: #64748b;
          }

          .about-growth-metric-value {
            font-size: 1.25rem;
            font-weight: bold;
          }

          /* CTA Section */
          .about-cta {
            padding: 5rem 1rem;
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            color: white;
          }

          .about-cta-container {
            max-width: 56rem;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }

          .final-cta-heading {
            font-size: 2.25rem;
            font-weight: 700;
            margin-bottom: 1rem;
          }

          @media (min-width: 768px) {
            .final-cta-heading {
              font-size: 2.5rem;
            }
          }

          .final-cta-subtitle {
            font-size: 1.125rem;
            color: #cbd5e1;
            opacity: 0.9;
            margin-bottom: 2rem;
            line-height: 1.75;
          }

          .about-cta-buttons {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: center;
          }

          @media (min-width: 640px) {
            .about-cta-buttons {
              flex-direction: row;
            }
          }

          .final-cta-button {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            border: none;
            font-weight: 600;
            padding: 1rem 2rem;
            border-radius: 9999px;
            transition: all 0.3s ease;
            color: white;
            display: flex;
            align-items: center;
            cursor: pointer;
          }

          .final-cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 20px 40px rgba(16, 185, 129, 0.3);
          }

          .final-cta-secondary {
            border: 1px solid rgba(255, 255, 255, 0.3);
            color: white;
            background: rgba(255, 255, 255, 0.1);
            padding: 1rem 2rem;
            border-radius: 9999px;
            transition: all 0.3s ease;
            cursor: pointer;
            font-weight: 500;
          }

          .final-cta-secondary:hover {
            background: rgba(255, 255, 255, 0.2);
          }

          /* Dark mode support for updated sections */
          .dark .about-mission {
            background: #1f2937;
          }

          .dark .about-card {
            background: #374151;
            border-color: #4b5563;
          }

          .dark .about-values {
            background: #111827;
          }

          .dark .about-value-card {
            background: #374151;
            border-color: #4b5563;
          }

          .dark .about-trust {
            background: #1f2937;
          }

          .dark .about-growth {
            background: #111827;
          }

          .dark .about-growth-card {
            background: #374151;
            border-color: #4b5563;
          }

          .dark .about-growth-metric {
            background: #4b5563;
          }

          .dark .about-growth-metric:hover {
            background: #6b7280;
          }

          /* Animations */
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in {
            animation: fadeIn 0.8s ease-out;
          }

          /* Global Overrides */
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
          .mb-16 { margin-bottom: 4rem; }

          /* Responsive Design */
          @media (max-width: 768px) {
            .about-hero,
            .about-mission,
            .about-values,
            .about-trust,
            .about-growth,
            .about-cta {
              padding: 3rem 1rem;
            }
            
            .about-hero-title,
            .section-heading,
            .final-cta-heading {
              font-size: 2rem;
            }
            
            .about-hero-grid {
              gap: 2rem;
            }
            
            .about-cards-grid {
              grid-template-columns: 1fr;
            }

            .about-growth-card {
              padding: 2rem 1.5rem;
            }
          }
        `}
      </style>

      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-container">
            <div className="about-hero-grid">
              <div>
                <h1 className="about-hero-title">
                  Hi! We're <br />
                  <span className="gradient-text">
                    The Social Media Growth!
                  </span>
                </h1>
                <p className="about-hero-text">
                  We're a team of social media experts passionate about helping
                  businesses build authentic, engaged communities across all
                  major platforms. Founded in 2019, we've helped hundreds of
                  companies transform their social media presence and achieve
                  remarkable growth.
                </p>
                <div className="about-stats-grid">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="about-stat animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="about-stat-number">{stat.number}</div>
                      <div className="about-stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="about-hero-image animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <ImageWithFallback
                  src="https://i.pinimg.com/1200x/db/0f/1a/db0f1abb02e1f9c0a531165b67a2366f.jpg"
                  alt="SocialGrowth team"
                  className="about-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section - UPDATED: White background with #f9fafb cards */}
        <section className="about-mission">
          <div className="about-mission-container">
            <div className="about-mission-heading">
              <h2 className="section-heading">
                Different So We Can Make A<br /> Difference
              </h2>
              <div className="about-mission-divider"></div>
              <p className="section-subtitle">
                Here at <span>The Social Media Growth</span>, we know how
                important it is for brands to have an audience that listens,
                engages, and cares. Our goal isn't just to inflate numbers —
                it's to expand your brand's awareness and following with
                wholehearted support from our committed team of professionals.
              </p>
            </div>

            <div className="about-cards-grid">
              {/* Mission */}
              <div className="about-card">
                <div className="about-card-icon">
                  <Rocket className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="about-card-title">Our Mission</h3>
                <p className="about-card-text">
                  <span>The Social Media Growth</span> gives you the push you
                  need to go viral on social media and compete with influencers
                  and companies. We aim to boost your presence credibly and
                  naturally, reflecting a trustworthy image in your community.
                </p>
              </div>

              {/* Vision */}
              <div className="about-card">
                <div className="about-card-icon">
                  <Eye className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="about-card-title">Our Vision</h3>
                <p className="about-card-text">
                  We know that going viral on social media is not a walk in the
                  park! That's why we created this engagement service and made
                  it public. Whether you're a blogger, public figure, brand, or
                  organization, we help you set the bar high and stand out
                  online.
                </p>
              </div>

              {/* Support */}
              <div className="about-card">
                <div className="about-card-icon">
                  <Headphones className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="about-card-title">24/7 Support</h3>
                <p className="about-card-text">
                  At <span>The Social Media Growth</span>, we're always ready to
                  assist with our dedicated <strong>24/7 support</strong>. Reach
                  us via Ticket, Email, or WhatsApp — our expert team is on hand
                  to answer your questions and resolve issues within minutes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section - UPDATED: #f9fafb background with white cards */}
        <section
          className="about-values animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="about-values-container">
            <div className="about-values-heading">
              <h2 className="section-heading">Our Values</h2>
              <p className="section-subtitle">
                The principles that guide everything we do
              </p>
            </div>

            <div className="about-values-grid">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="about-value-card animate-fade-in"
                  style={{ animationDelay: `${1 + index * 0.1}s` }}
                >
                  <div className="about-value-content">
                    <div className="about-value-icon">
                      <value.icon className="w-8 h-8" />
                    </div>
                    <h3 className="about-value-card-title">{value.title}</h3>
                    <p className="about-value-card-text">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators Section - WHITE BACKGROUND */}
        <section
          className="about-trust animate-fade-in"
          style={{ animationDelay: "1.2s" }}
        >
          <div className="about-trust-container">
            <div className="about-trust-heading">
              <h2 className="section-heading">Why Businesses Trust Us</h2>
              <p className="section-subtitle">
                Proven results and exceptional service that sets us apart
              </p>
            </div>

            <div className="about-trust-grid">
              {trustIndicators.map((item, index) => (
                <div
                  key={index}
                  className="about-trust-item animate-fade-in"
                  style={{ animationDelay: `${1.4 + index * 0.1}s` }}
                >
                  <div className="about-trust-icon">{item.icon}</div>
                  <span className="about-trust-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Growth Metrics Section - #f9fafb BACKGROUND */}
        <section
          className="about-growth animate-fade-in"
          style={{ animationDelay: "1.6s" }}
        >
          <div className="about-growth-container">
            <div className="about-growth-heading">
              <h2 className="section-heading">Proven Growth Metrics</h2>
              <p className="section-subtitle">
                Real results from our client success stories
              </p>
            </div>

            <div className="about-growth-card">
              <h3 className="about-growth-title">Average Client Results</h3>
              <div className="about-growth-metrics">
                {growthMetrics.map((metric, index) => (
                  <div
                    key={index}
                    className="about-growth-metric"
                    style={{ animationDelay: `${1.8 + index * 0.1}s` }}
                  >
                    <span className="about-growth-metric-name">
                      {metric.metric}
                    </span>
                    <span
                      className="about-growth-metric-value"
                      style={{ color: metric.color }}
                    >
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="about-cta animate-fade-in"
          style={{ animationDelay: "2s" }}
        >
          <div className="about-cta-container">
            <h2 className="final-cta-heading">Ready to Work With Us?</h2>
            <p className="final-cta-subtitle">
              Let's discuss how we can help you achieve your social media goals
              and build a thriving online community for your business.
            </p>
            <div className="about-cta-buttons">
              <button
                onClick={() => navigate("/contact")}
                className="final-cta-button"
              >
                Get In Touch
              </button>
              <button
                onClick={() => navigate("/services")}
                className="final-cta-secondary"
              >
                View Our Services
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
