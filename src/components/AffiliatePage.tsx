// src/components/AffiliatePage.tsx
import React from "react";
import {
  ArrowRight,
  Users,
  DollarSign,
  BarChart3,
  Clock,
  Shield,
  TrendingUp,
  Instagram,
  Youtube,
  Linkedin,
  Facebook,
  Twitter,
  Zap,
  Rocket,
  Target,
} from "lucide-react";

import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useNavigate } from "react-router-dom";

const AffiliatePage: React.FC = () => {
  const navigate = useNavigate();

  const stats = [
    { number: "30%", label: "Commission Rate", icon: DollarSign },
    { number: "60", label: "Day Cookie Duration", icon: Clock },
    { number: "24h", label: "Payout Processing", icon: TrendingUp },
    { number: "$50", label: "Minimum Payout", icon: Shield },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "High Commissions",
      description:
        "Earn up to 30% on every sale you refer with our tiered commission structure.",
    },
    {
      icon: BarChart3,
      title: "Real-time Dashboard",
      description:
        "Track clicks, conversions, and earnings in real-time with our intuitive dashboard.",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description:
        "Get personalized assistance from our affiliate management team whenever you need it.",
    },
    {
      icon: Shield,
      title: "Reliable Payments",
      description:
        "Receive your earnings reliably every month through PayPal or bank transfer.",
    },
  ];

  const socialPlatforms = [
    {
      icon: Instagram,
      name: "Instagram",
      description: "Perfect for influencers, content creators, and marketers",
      color: "from-pink-500 to-purple-600",
      logoColor: "text-white",
    },
    {
      icon: Youtube,
      name: "YouTube",
      description: "Ideal for video creators and tutorial channels",
      color: "from-red-500 to-red-600",
      logoColor: "text-white",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      description: "Great for B2B marketers and professionals",
      color: "from-blue-500 to-blue-600",
      logoColor: "text-white",
    },
    {
      icon: Facebook,
      name: "Facebook",
      description: "Excellent for community managers and groups",
      color: "from-blue-600 to-blue-700",
      logoColor: "text-white",
    },
    {
      icon: Twitter,
      name: "Twitter/X",
      description: "Perfect for real-time engagement and trends",
      color: "from-black to-gray-800",
      logoColor: "text-white",
    },
  ];

  const successStories = [
    {
      name: "Sarah Martinez",
      role: "Instagram Influencer",
      result: "$12,500 earned",
      story:
        "Promoted SocialGrowth to my 500K followers and earned consistent monthly income.",
      avatar: "👩‍💼",
    },
    {
      name: "Tech Review Channel",
      role: "YouTube Creator",
      result: "$8,200 earned",
      story:
        "Shared my growth results and generated high-converting leads for the platform.",
      avatar: "📹",
    },
    {
      name: "Mike Johnson",
      role: "Digital Marketer",
      result: "$15,000+ earned",
      story:
        "Added SocialGrowth to my service offerings and increased client satisfaction.",
      avatar: "👨‍💻",
    },
  ];

  const marketingMaterials = [
    {
      icon: Zap,
      title: "Pre-made Content",
      description: "Ready-to-use social media posts, stories, and reels",
    },
    {
      icon: Target,
      title: "Targeted Banners",
      description:
        "Platform-specific banners and creatives for all social networks",
    },
    {
      icon: Rocket,
      title: "Email Templates",
      description:
        "Professionally designed email sequences for your subscribers",
    },
    {
      icon: BarChart3,
      title: "Analytics Tools",
      description: "Track performance and optimize your campaigns effectively",
    },
  ];

  const handleJoinNow = () => {
    navigate("/register");
  };

  const handleContactSupport = () => {
    navigate("/contact");
  };

  return (
    <>
      <style>
        {`
          .affiliate-page {
            min-height: 100vh;
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          }

          /* Hero Section */
          .affiliate-hero {
            padding: 5rem 1rem;
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            color: white;
          }

          .affiliate-hero-container {
            max-width: 72rem;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }

          .affiliate-badge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.75rem;
            border-radius: 9999px;
            background: rgba(59, 130, 246, 0.2);
            border: 1px solid rgba(59, 130, 246, 0.4);
            color: #60a5fa;
            font-weight: 500;
            font-size: 0.875rem;
            margin-bottom: 1.5rem;
          }

          .affiliate-heading {
            font-size: 2.25rem;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 1.5rem;
          }

          @media (min-width: 768px) {
            .affiliate-heading {
              font-size: 3rem;
            }
          }

          .gradient-text {
            background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .affiliate-subtitle {
            font-size: 1.125rem;
            color: #cbd5e1;
            opacity: 0.9;
            margin-bottom: 2rem;
            max-width: 42rem;
            margin-left: auto;
            margin-right: auto;
            line-height: 1.75;
          }

          .affiliate-cta-buttons {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: center;
          }

          @media (min-width: 640px) {
            .affiliate-cta-buttons {
              flex-direction: row;
            }
          }

          .affiliate-cta-primary {
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
            border: none;
            color: white;
            font-weight: 600;
            padding: 1.5rem 2rem;
            border-radius: 9999px;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            cursor: pointer;
          }

          .affiliate-cta-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3);
          }

          .affiliate-cta-secondary {
            border: 1px solid rgba(255, 255, 255, 0.3);
            color: white;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            padding: 1.5rem 2rem;
            border-radius: 9999px;
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .affiliate-cta-secondary:hover {
            background: rgba(255, 255, 255, 0.2);
            border-color: rgba(255, 255, 255, 0.5);
          }

          /* Stats Section */
          .affiliate-stats {
            padding: 5rem 1rem;
            background: white;
          }

          .affiliate-stats-container {
            max-width: 72rem;
            margin-left: auto;
            margin-right: auto;
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

          .stats-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          @media (min-width: 768px) {
            .stats-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (min-width: 1024px) {
            .stats-grid {
              grid-template-columns: repeat(4, 1fr);
            }
          }

          .affiliate-stat-card {
            border: 1px solid #e2e8f0;
            border-radius: 0.5rem;
            transition: all 0.3s ease;
            height: 100%;
            background: white;
          }

          .affiliate-stat-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
          }

          .stat-content {
            padding: 2rem;
            text-align: center;
          }

          .stat-icon {
            width: 4rem;
            height: 4rem;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 1rem;
            border-radius: 9999px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
            color: #3b82f6;
          }

          .stat-icon svg {
            width: 2rem;
            height: 2rem;
          }

          .stat-number {
            font-size: 1.875rem;
            font-weight: bold;
            color: #1e293b;
            margin-bottom: 0.5rem;
          }

          .stat-label {
            font-size: 1rem;
            font-weight: 500;
            color: #64748b;
          }

          /* Platforms Section */
          .affiliate-platforms {
            padding: 5rem 1rem;
            background: #f9fafb;
          }

          .platforms-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          @media (min-width: 768px) {
            .platforms-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (min-width: 1024px) {
            .platforms-grid {
              grid-template-columns: repeat(5, 1fr);
            }
          }

          .platform-card {
            border: 1px solid #e2e8f0;
            border-radius: 0.5rem;
            transition: all 0.3s ease;
            height: 100%;
            background: white;
            text-align: center;
            display: flex;
            flex-direction: column;
          }

          .platform-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
          }

          .platform-content {
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
          }

          .platform-icon {
            width: 5rem;
            height: 5rem;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 1rem;
            border-radius: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s ease;
            background: linear-gradient(135deg, var(--from-color), var(--from-color));
          }

          .platform-card:hover .platform-icon {
            transform: scale(1.1);
          }

          .platform-name {
            font-size: 1.125rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 0.75rem;
          }

          .platform-description {
            font-size: 0.875rem;
            color: #64748b;
            flex-grow: 1;
          }

          /* Process Section */
          .affiliate-process {
            padding: 5rem 1rem;
            background: #f8fafc;
          }

          .process-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            position: relative;
          }

          @media (min-width: 768px) {
            .process-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          .process-card {
            border-radius: 0.5rem;
            transition: all 0.3s ease;
            height: 100%;
            background: white;
            text-align: center;
            position: relative;
            border: 1px solid #e2e8f0;
          }

          .process-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
          }

          .process-content {
            padding: 2rem;
            height: 100%;
            display: flex;
            flex-direction: column;
          }

          .process-step {
            width: 5rem;
            height: 5rem;
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
            color: white;
            border-radius: 9999px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: bold;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 1.5rem;
            transition: transform 0.3s ease;
          }

          .process-card:hover .process-step {
            transform: scale(1.1);
          }

          .process-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 1rem;
          }

          .process-description {
            color: #64748b;
            flex-grow: 1;
          }

          /* Success Stories */
          .affiliate-success {
            padding: 5rem 1rem;
            background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
          }

          .success-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          @media (min-width: 768px) {
            .success-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          .success-card {
            border: 1px solid #e2e8f0;
            border-radius: 0.5rem;
            transition: all 0.3s ease;
            height: 100%;
            background: white;
          }

          .success-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
          }

          .success-content {
            padding: 2rem;
            height: 100%;
            display: flex;
            flex-direction: column;
            text-align: center;
          }

          .success-avatar {
            font-size: 3rem;
            margin-bottom: 1.5rem;
          }

          .success-name {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 0.5rem;
          }

          .success-role {
            font-size: 0.875rem;
            color: #64748b;
            margin-bottom: 1rem;
          }

          .success-result {
            color: #10b981;
            font-weight: bold;
            margin-bottom: 1rem;
          }

          .success-story {
            font-size: 0.875rem;
            color: #64748b;
            line-height: 1.5;
            flex-grow: 1;
          }

          /* Marketing Materials */
          .affiliate-materials {
            padding: 5rem 1rem;
            background: white;
          }

          .materials-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          @media (min-width: 768px) {
            .materials-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          .material-card {
            border-radius: 0.5rem;
            transition: all 0.3s ease;
            height: 100%;
            background: white;
            border: 1px solid #e2e8f0;
          }

          .material-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
          }

          .material-content {
            padding: 2rem;
            height: 100%;
          }

          .material-row {
            display: flex;
            align-items: flex-start;
            gap: 1.5rem;
          }

          .material-icon {
            width: 4rem;
            height: 4rem;
            background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
            border-radius: 0.75rem;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            transition: transform 0.3s ease;
          }

          .material-card:hover .material-icon {
            transform: rotate(10deg) scale(1.1);
          }

          .material-icon svg {
            width: 2rem;
            height: 2rem;
            color: white;
          }

          .material-text {
            flex-grow: 1;
          }

          .material-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 0.75rem;
          }

          .material-description {
            color: #64748b;
          }

          /* Benefits Section */
          .affiliate-benefits {
            padding: 5rem 1rem;
            background: #f9fafb;
          }

          .benefits-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          @media (min-width: 768px) {
            .benefits-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          .benefit-card {
            border-radius: 0.5rem;
            transition: all 0.3s ease;
            height: 100%;
            background: white;
            border: 1px solid #e2e8f0;
          }

          .benefit-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
          }

          .benefit-content {
            padding: 2rem;
            height: 100%;
          }

          .benefit-row {
            display: flex;
            align-items: flex-start;
            gap: 1.5rem;
          }

          .benefit-icon {
            width: 4rem;
            height: 4rem;
            background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
            border-radius: 0.75rem;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            color: #3b82f6;
          }

          .benefit-icon svg {
            width: 2rem;
            height: 2rem;
          }

          .benefit-text {
            flex-grow: 1;
          }

          .benefit-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 0.75rem;
          }

          .benefit-description {
            color: #64748b;
          }

          /* Final CTA */
          .affiliate-final-cta {
            padding: 5rem 1rem;
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            color: white;
          }

          .final-cta-container {
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
              font-size: 3rem;
            }
          }

          .final-cta-subtitle {
            font-size: 1.125rem;
            color: #cbd5e1;
            opacity: 0.9;
            margin-bottom: 2rem;
            line-height: 1.75;
          }

          .final-cta-buttons {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: center;
          }

          @media (min-width: 640px) {
            .final-cta-buttons {
              flex-direction: row;
            }
          }

          .final-cta-button {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            border: none;
            font-weight: 600;
            padding: 1.5rem 2rem;
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
            padding: 1.5rem 2rem;
            border-radius: 9999px;
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .final-cta-secondary:hover {
            background: rgba(255, 255, 255, 0.2);
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
            .affiliate-hero,
            .affiliate-stats,
            .affiliate-platforms,
            .affiliate-process,
            .affiliate-success,
            .affiliate-materials,
            .affiliate-benefits,
            .affiliate-final-cta {
              padding: 3rem 1rem;
            }
            
            .affiliate-heading,
            .section-heading,
            .final-cta-heading {
              font-size: 2rem;
            }
          }
        `}
      </style>

      <div className="affiliate-page">
        {/* Hero Section */}
        <section className="affiliate-hero">
          <div className="affiliate-hero-container">
            <div className="affiliate-badge">
              <span>EARN WITH SOCIAL MEDIA GROWTH</span>
            </div>
            <h1 className="affiliate-heading">
              Promote Social Media Growth &{" "}
              <span className="gradient-text">Earn 30% Commission</span>
            </h1>
            <p className="affiliate-subtitle">
              Join our affiliate program and earn generous commissions by
              promoting the #1 social media growth platform. Perfect for
              influencers, marketers, and content creators.
            </p>
            <div className="affiliate-cta-buttons">
              <button onClick={handleJoinNow} className="affiliate-cta-primary">
                Join Affiliate Program
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                className="affiliate-cta-secondary"
                onClick={() => {
                  const element = document.getElementById("affiliate-stats");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                See How It Works
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="affiliate-stats" className="affiliate-stats">
          <div className="affiliate-stats-container">
            <div className="text-center mb-16">
              <h2 className="section-heading">
                Why Choose Our Affiliate Program?
              </h2>
              <p className="section-subtitle">
                Industry-leading benefits designed for your success
              </p>
            </div>
            <div className="stats-grid">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="affiliate-stat-card">
                    <div className="stat-content">
                      <div className="stat-icon">
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="stat-number">{stat.number}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Platform-Specific Section */}
        <section className="affiliate-platforms">
          <div className="affiliate-stats-container">
            <div className="text-center mb-16">
              <h2 className="section-heading">
                Perfect for Every Social Platform
              </h2>
              <p className="section-subtitle">
                Promote growth strategies tailored to specific social media
                platforms
              </p>
            </div>

            <div className="platforms-grid">
              {socialPlatforms.map((platform, index) => {
                const Icon = platform.icon;
                return (
                  <div key={index} className="platform-card">
                    <div className="platform-content">
                      <div
                        className="platform-icon"
                        style={{
                          background: platform.color.includes("pink")
                            ? "linear-gradient(135deg, #ec4899, #8b5cf6)"
                            : platform.color.includes("red")
                            ? "linear-gradient(135deg, #ef4444, #dc2626)"
                            : platform.color.includes("blue") &&
                              platform.color.includes("500")
                            ? "linear-gradient(135deg, #3b82f6, #2563eb)"
                            : platform.color.includes("blue") &&
                              platform.color.includes("600")
                            ? "linear-gradient(135deg, #2563eb, #1d4ed8)"
                            : "linear-gradient(135deg, #000000, #374151)",
                        }}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="platform-name">{platform.name}</h3>
                      <p className="platform-description">
                        {platform.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="affiliate-process">
          <div className="affiliate-stats-container">
            <div className="text-center mb-16">
              <h2 className="section-heading">
                Start Earning in 3 Simple Steps
              </h2>
              <p className="section-subtitle">
                Our straightforward process makes it easy to start generating
                commissions
              </p>
            </div>

            <div className="process-grid">
              {[
                {
                  step: "1",
                  title: "Sign Up & Get Approved",
                  description:
                    "Join our affiliate program and get instant access to marketing materials.",
                },
                {
                  step: "2",
                  title: "Promote on Your Platforms",
                  description:
                    "Share your unique affiliate link across social media, blogs, or emails.",
                },
                {
                  step: "3",
                  title: "Earn Monthly Commissions",
                  description:
                    "Get up to 30% commission on every sale. Payouts processed monthly.",
                },
              ].map((step, index) => (
                <div key={index} className="process-card">
                  <div className="process-content">
                    <div className="process-step">{step.step}</div>
                    <h3 className="process-title">{step.title}</h3>
                    <p className="process-description">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="affiliate-success">
          <div className="affiliate-stats-container">
            <div className="text-center mb-16">
              <h2 className="section-heading">Real Success Stories</h2>
              <p className="section-subtitle">
                See how other affiliates are earning significant income with our
                platform
              </p>
            </div>

            <div className="success-grid">
              {successStories.map((story, index) => (
                <div key={index} className="success-card">
                  <div className="success-content">
                    <div className="success-avatar">{story.avatar}</div>
                    <div className="success-name">{story.name}</div>
                    <div className="success-role">{story.role}</div>
                    <div className="success-result">{story.result}</div>
                    <p className="success-story">{story.story}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Marketing Materials Section */}
        <section className="affiliate-materials">
          <div className="affiliate-stats-container">
            <div className="text-center mb-16">
              <h2 className="section-heading">Powerful Marketing Resources</h2>
              <p className="section-subtitle">
                Everything you need to promote effectively and maximize your
                earnings
              </p>
            </div>

            <div className="materials-grid">
              {marketingMaterials.map((material, index) => {
                const Icon = material.icon;
                return (
                  <div key={index} className="material-card">
                    <div className="material-content">
                      <div className="material-row">
                        <div className="material-icon">
                          <Icon className="w-8 h-8" />
                        </div>
                        <div className="material-text">
                          <h3 className="material-title">{material.title}</h3>
                          <p className="material-description">
                            {material.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="affiliate-benefits">
          <div className="affiliate-stats-container">
            <div className="text-center mb-16">
              <h2 className="section-heading">Exclusive Program Benefits</h2>
              <p className="section-subtitle">
                Why top affiliates choose to partner with SocialGrowth
              </p>
            </div>

            <div className="benefits-grid">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="benefit-card">
                    <div className="benefit-content">
                      <div className="benefit-row">
                        <div className="benefit-icon">
                          <Icon className="w-8 h-8" />
                        </div>
                        <div className="benefit-text">
                          <h3 className="benefit-title">{benefit.title}</h3>
                          <p className="benefit-description">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="affiliate-final-cta">
          <div className="final-cta-container">
            <h2 className="final-cta-heading">Ready to Start Earning?</h2>
            <p className="final-cta-subtitle">
              Join thousands of successful affiliates who are monetizing their
              audience with the leading social media growth platform. Start
              earning today!
            </p>
            <div className="final-cta-buttons">
              <button onClick={handleJoinNow} className="final-cta-button">
                Join Now - Get 30% Commission
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                className="final-cta-secondary"
                onClick={() => (window.location.href = "/register")}
              >
                Have Questions? Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AffiliatePage;
