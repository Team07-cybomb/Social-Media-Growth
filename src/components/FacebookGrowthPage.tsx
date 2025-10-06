import {
  Facebook,
  Star,
  Users,
  TrendingUp,
  Target,
  BarChart3,
  Clock,
  Shield,
  Zap,
  Users2,
  Rocket,
  CheckCircle,
  Award,
  MessageCircle,
  Heart,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { OrderNowFacebook } from "./OrderNowFacebook";

interface Service {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  budget: string;
}

interface SuccessStory {
  metric: string;
  description: string;
}

interface WhyChooseUsItem {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  color: string;
}

interface ClientSuccessStory {
  name: string;
  growth: string;
  period: string;
  results: string;
  testimonial: string;
  avatar: string;
}

interface Feature {
  icon: React.ComponentType<any>;
  text: string;
}

export const FacebookGrowthPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedServiceBudget, setSelectedServiceBudget] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);

  // ✅ Check if user is authenticated on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    setIsAuthenticated(!!(token && user));
  }, []);

  const facebookServices: Service[] = [
    {
      icon: Users,
      title: "Page Likes Growth",
      description:
        "Organic page likes growth with targeted audience acquisition",
      features: [
        "500-1000 real page likes per month",
        "Targeted audience research",
        "Competitor page analysis",
        "Growth analytics dashboard",
      ],
      price: "$249/month",
      budget: "$249/month",
    },
    {
      icon: MessageCircle,
      title: "Engagement Boost",
      description: "Increase post likes, comments, and shares",
      features: [
        "200%+ engagement rate increase",
        "Strategic comment management",
        "Post engagement tactics",
        "Community building",
      ],
      price: "$179/month",
      budget: "$179/month",
    },
    {
      icon: TrendingUp,
      title: "Content Strategy",
      description: "Complete Facebook content planning and optimization",
      features: [
        "Monthly content calendar",
        "Post timing optimization",
        "Content performance analysis",
        "Viral content strategy",
      ],
      price: "$349/month",
      budget: "$349/month",
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Deep Facebook analytics and performance tracking",
      features: [
        "Weekly performance reports",
        "Audience insights analysis",
        "Competitor benchmarking",
        "Growth recommendations",
      ],
      price: "$129/month",
      budget: "$129/month",
    },
    {
      icon: Target,
      title: "Facebook Ads Management",
      description: "Professional Facebook ads management and optimization",
      features: [
        "Ad creative strategy",
        "Audience targeting",
        "Budget optimization",
        "ROI tracking",
      ],
      price: "$449/month",
      budget: "$449/month",
    },
    {
      icon: Rocket,
      title: "Complete Page Management",
      description: "Full-service Facebook page management",
      features: [
        "Daily post management",
        "Comment moderation",
        "Engagement management",
        "Growth strategy",
      ],
      price: "$699/month",
      budget: "$699/month",
    },
  ];

  const successStories: SuccessStory[] = [
    {
      metric: "15.2K+",
      description: "Page Likes Gained",
    },
    {
      metric: "325%",
      description: "Engagement Increase",
    },
    {
      metric: "52%",
      description: "Lead Generation Growth",
    },
    {
      metric: "400+",
      description: "Happy Clients",
    },
  ];

  const whyChooseUs: WhyChooseUsItem[] = [
    {
      icon: Shield,
      title: "100% Organic Growth",
      description:
        "No fake likes or bots. We focus on authentic engagement and real audience building that drives meaningful interactions.",
      color: "#1877F2",
    },
    {
      icon: Zap,
      title: "Rapid Results",
      description:
        "See noticeable growth within the first 30 days with our proven Facebook algorithms and optimization strategies.",
      color: "#1877F2",
    },
    {
      icon: Users2,
      title: "Dedicated Page Manager",
      description:
        "Get personalized attention with a dedicated Facebook expert who understands your brand and business goals.",
      color: "#1877F2",
    },
    {
      icon: Rocket,
      title: "Proven Facebook Strategies",
      description:
        "Battle-tested methods that have helped 400+ businesses achieve Facebook success and community growth.",
      color: "#1877F2",
    },
  ];

  const clientSuccessStories: ClientSuccessStory[] = [
    {
      name: "Local Restaurant Chain",
      growth: "18,500+ page likes",
      period: "in 5 months",
      results: "325% engagement increase, 45% more reservations",
      testimonial:
        "The Facebook growth service transformed our online presence. We went from 3K to 22K page likes with real local customers who engage with our content and visit our restaurants!",
      avatar: "🍽️",
    },
    {
      name: "E-commerce Store",
      growth: "12,300+ page likes",
      period: "in 4 months",
      results: "52% more leads, 35% sales increase from Facebook",
      testimonial:
        "The targeted page likes growth brought us genuine customers. Our Facebook-driven sales increased by 35% thanks to the strategic content approach and community building.",
      avatar: "🛒",
    },
    {
      name: "Fitness Coach",
      growth: "8,700+ page likes",
      period: "in 3 months",
      results: "280% reach increase, 68 new clients",
      testimonial:
        "The content strategy and engagement management took my coaching business to the next level. I've gained real clients who actively participate in my programs!",
      avatar: "💪",
    },
  ];

  const facebookFeatures: Feature[] = [
    { icon: CheckCircle, text: "Daily post strategy optimization" },
    { icon: CheckCircle, text: "Facebook algorithm monitoring" },
    { icon: CheckCircle, text: "Competitor page analysis & benchmarking" },
    { icon: CheckCircle, text: "Content performance tracking" },
    { icon: CheckCircle, text: "Engagement rate optimization" },
    { icon: CheckCircle, text: "Comment management tactics" },
    { icon: CheckCircle, text: "Facebook Groups integration" },
    { icon: CheckCircle, text: "Live video strategy development" },
  ];

  // ✅ Function to handle Order Now button click with authentication check
  const handleOrderNowClick = (
    serviceTitle: string = "",
    serviceBudget: string = ""
  ) => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      // User is authenticated - open order modal
      setSelectedService(serviceTitle);
      setSelectedServiceBudget(serviceBudget);
      setIsOrderModalOpen(true);
    } else {
      // User is not authenticated - show auth prompt
      setShowAuthPrompt(true);
    }
  };

  // ✅ Function to handle authentication prompt actions
  const handleAuthPrompt = (action: "login" | "cancel") => {
    setShowAuthPrompt(false);
    if (action === "login") {
      // ✅ Navigate to register with return URL
      navigate("/register", {
        state: {
          from: location,
        },
      });
    }
  };

  return (
    <>
      <style>
        {`
          .facebook-page {
            font-family: system-ui, -apple-system, sans-serif;
          }

          /* Auth Prompt Modal Styles */
          .auth-prompt-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1001;
            padding: 1rem;
          }

          .auth-prompt-content {
            background: white;
            border-radius: 1rem;
            padding: 2rem;
            max-width: 400px;
            width: 100%;
            text-align: center;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          }

          .auth-prompt-icon {
            width: 4rem;
            height: 4rem;
            background: linear-gradient(135deg, #1877F2 0%, #0A3B75 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
            color: white;
          }

          .auth-prompt-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 1rem;
          }

          .auth-prompt-message {
            color: #64748b;
            line-height: 1.6;
            margin-bottom: 2rem;
          }

          .auth-prompt-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
          }

          .auth-prompt-primary {
            background: linear-gradient(135deg, #1877F2 0%, #0A3B75 100%);
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .auth-prompt-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(24, 119, 242, 0.3);
          }

          .auth-prompt-secondary {
            background: transparent;
            color: #64748b;
            border: 1px solid #d1d5db;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .auth-prompt-secondary:hover {
            background: #f9fafb;
            border-color: #9ca3af;
          }

          /* Hero Section */
          .facebook-hero {
            padding: 6rem 1rem;
            background: linear-gradient(135deg, #1877F2 0%, #166FE5 25%, #1458B9 50%, #0E4A93 75%, #0A3B75 100%);
            color: white;
            text-align: center;
          }

          .facebook-hero-container {
            max-width: 64rem;
            margin-left: auto;
            margin-right: auto;
          }

          .facebook-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: rgba(255, 255, 255, 0.1);
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            font-size: 0.875rem;
            font-weight: 600;
            margin-bottom: 2rem;
            backdrop-filter: blur(10px);
          }

          .facebook-heading {
            font-size: 3rem;
            font-weight: 700;
            line-height: 1.1;
            margin-bottom: 1.5rem;
          }

          .facebook-subtitle {
            font-size: 1.25rem;
            opacity: 0.9;
            line-height: 1.6;
            max-width: 48rem;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 3rem;
          }

          .success-metrics {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin-top: 4rem;
          }

          .metric-card {
            background: rgba(255, 255, 255, 0.1);
            padding: 2rem;
            border-radius: 1rem;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }

          .metric-value {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
          }

          .metric-description {
            font-size: 0.9rem;
            opacity: 0.8;
          }

          /* Services Section */
          .facebook-services {
            padding: 5rem 1rem;
            background: #f9fafb;
          }

          .facebook-container {
            max-width: 80rem;
            margin-left: auto;
            margin-right: auto;
          }

          .text-center {
            text-align: center;
          }

          .mb-16 {
            margin-bottom: 4rem;
          }

          .section-heading {
            font-size: 2.5rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 1rem;
          }

          .section-subtitle {
            font-size: 1.125rem;
            color: #64748b;
            max-width: 48rem;
            margin-left: auto;
            margin-right: auto;
            line-height: 1.6;
          }

          .facebook-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
          }

          .facebook-service-card {
            background: white;
            border-radius: 1.5rem;
            padding: 2rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
            border: 1px solid #e2e8f0;
          }

          .facebook-service-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
          }

          .facebook-service-content {
            height: 100%;
            display: flex;
            flex-direction: column;
          }

          .facebook-service-icon {
            width: 4rem;
            height: 4rem;
            border-radius: 1rem;
            background: linear-gradient(135deg, #1877F2 0%, #0A3B75 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            margin-bottom: 1.5rem;
          }

          .facebook-service-icon svg {
            width: 2rem;
            height: 2rem;
          }

          .facebook-service-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 1rem;
          }

          .facebook-service-description {
            color: #64748b;
            line-height: 1.6;
            margin-bottom: 1.5rem;
          }

          .facebook-service-features {
            list-style: none;
            padding: 0;
            margin: 0 0 2rem 0;
            flex: 1;
          }

          .facebook-service-feature {
            padding: 0.5rem 0;
            color: #475569;
            position: relative;
            padding-left: 1.5rem;
          }

          .facebook-service-feature:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #10b981;
            font-weight: bold;
          }

          .facebook-service-price {
            font-size: 2rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 1.5rem;
            text-align: center;
          }

          .facebook-service-button {
            background: linear-gradient(135deg, #1877F2 0%, #0A3B75 100%);
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 0.75rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            width: 100%;
            font-size: 0.9rem;
          }

          .facebook-service-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(24, 119, 242, 0.3);
          }

          /* Process Section */
          .facebook-process {
            padding: 5rem 1rem;
            background: white;
          }

          .facebook-process-container {
            max-width: 80rem;
            margin-left: auto;
            margin-right: auto;
          }

          .facebook-process-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
          }

          .facebook-process-card {
            background: white;
            border-radius: 1.5rem;
            padding: 2.5rem 2rem;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            border: 1px solid #e2e8f0;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          .facebook-process-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 50px rgba(24, 119, 242, 0.15);
            border-color: #cbd5e1;
          }

          .facebook-process-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(24, 119, 242, 0.05), transparent);
            transition: left 0.6s ease;
          }

          .facebook-process-card:hover::before {
            left: 100%;
          }

          .facebook-process-step {
            width: 4rem;
            height: 4rem;
            background: linear-gradient(135deg, #1877F2 0%, #0A3B75 100%);
            color: white;
            border-radius: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 1.5rem;
            margin: 0 auto 1.5rem;
            box-shadow: 0 8px 20px rgba(24, 119, 242, 0.3);
          }

          .facebook-process-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 1rem;
          }

          .facebook-process-description {
            color: #64748b;
            line-height: 1.6;
            font-size: 1rem;
          }

          /* CTA Section */
          .facebook-cta {
            padding: 5rem 1rem;
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            color: white;
            text-align: center;
          }

          .facebook-cta-container {
            max-width: 48rem;
            margin-left: auto;
            margin-right: auto;
          }

          .facebook-cta-heading {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
          }

          .facebook-cta-subtitle {
            font-size: 1.25rem;
            opacity: 0.9;
            line-height: 1.6;
            margin-bottom: 3rem;
          }

          .facebook-cta-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
          }

          .facebook-cta-primary {
            background: linear-gradient(135deg, #1877F2 0%, #0A3B75 100%);
            color: white;
            border: none;
            padding: 1rem 2rem;
            border-radius: 0.75rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .facebook-cta-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(24, 119, 242, 0.3);
          }

          .facebook-cta-secondary {
            background: transparent;
            color: white;
            border: 2px solid rgba(255, 255, 255, 0.3);
            padding: 1rem 2rem;
            border-radius: 0.75rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .facebook-cta-secondary:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(255, 255, 255, 0.5);
          }

          /* Why Choose Us Section */
          .why-choose-us {
            padding: 5rem 1rem;
            background: white;
          }

          .why-choose-container {
            max-width: 80rem;
            margin-left: auto;
            margin-right: auto;
          }

          .why-choose-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
          }

          .why-choose-card {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 1.5rem;
            padding: 2.5rem 2rem;
            text-align: center;
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
          }

          .why-choose-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(24, 119, 242, 0.05), transparent);
            transition: left 0.6s ease;
          }

          .why-choose-card:hover::before {
            left: 100%;
          }

          .why-choose-card:hover {
            transform: translateY(-8px);
            background: white;
            border-color: #cbd5e1;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          }

          .why-choose-icon {
            width: 5rem;
            height: 5rem;
            margin: 0 auto 1.5rem;
            border-radius: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f9fafb;
            transition: all 0.3s ease;
          }

          .why-choose-card:hover .why-choose-icon {
            transform: scale(1.1) rotate(5deg);
          }

          .why-choose-icon svg {
            width: 2.5rem;
            height: 2.5rem;
          }

          .why-choose-title {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: #1e293b;
          }

          .why-choose-description {
            color: #64748b;
            line-height: 1.6;
            font-size: 1rem;
          }

          /* Success Stories Section */
          .success-stories {
            padding: 5rem 1rem;
            background: #f9fafb;
          }

          .stories-container {
            max-width: 80rem;
            margin-left: auto;
            margin-right: auto;
          }

          .stories-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
          }

          .story-card {
            background: white;
            border-radius: 1.5rem;
            padding: 2.5rem;
            box-shadow: 0 10px 40px rgba(24, 119, 242, 0.1);
            transition: all 0.3s ease;
            border: 1px solid #e2e8f0;
            position: relative;
          }

          .story-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 60px rgba(24, 119, 242, 0.15);
          }

          .story-card::before {
            content: '"';
            position: absolute;
            top: 1rem;
            right: 2rem;
            font-size: 4rem;
            color: #f1f5f9;
            font-family: serif;
            line-height: 1;
          }

          .story-header {
            display: flex;
            align-items: center;
            margin-bottom: 1.5rem;
          }

          .story-avatar {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            background: linear-gradient(135deg, #1877F2 0%, #0A3B75 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            margin-right: 1rem;
            flex-shrink: 0;
          }

          .story-client-info {
            flex: 1;
          }

          .story-client-name {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 0.25rem;
          }

          .story-growth {
            font-size: 0.9rem;
            color: #1877F2;
            font-weight: 600;
          }

          .story-period {
            font-size: 0.8rem;
            color: #64748b;
          }

          .story-results {
            background: #f9fafb;
            padding: 1rem;
            border-radius: 0.75rem;
            margin: 1.5rem 0;
            border-left: 4px solid #1877F2;
          }

          .story-results-text {
            font-size: 0.9rem;
            color: #64748b;
            font-weight: 500;
          }

          .story-testimonial {
            color: #64748b;
            line-height: 1.6;
            font-style: italic;
            position: relative;
            z-index: 2;
          }

          /* Features List Section */
          .facebook-features {
            padding: 4rem 1rem;
            background: white;
          }

          .features-container {
            max-width: 64rem;
            margin-left: auto;
            margin-right: auto;
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
            margin-top: 2rem;
          }

          .feature-item {
            display: flex;
            align-items: center;
            padding: 1rem;
            border-radius: 0.75rem;
            transition: all 0.3s ease;
          }

          .feature-item:hover {
            background: #f8fafc;
            transform: translateX(5px);
          }

          .feature-icon {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 0.75rem;
            background: #f9fafb;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 1rem;
            color: #1877F2;
            flex-shrink: 0;
          }

          .feature-icon svg {
            width: 1.25rem;
            height: 1.25rem;
          }

          .feature-text {
            color: #64748b;
            font-weight: 500;
          }

          /* Enhanced section headings */
          .gradient-heading {
            background: linear-gradient(135deg, #1877F2 0%, #0A3B75 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .section-badge {
            display: inline-block;
            background: rgba(24, 119, 242, 0.1);
            color: #1877F2;
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            font-size: 0.875rem;
            font-weight: 600;
            margin-bottom: 1rem;
          }

          @media (max-width: 768px) {
            .facebook-heading {
              font-size: 2rem;
            }
            
            .facebook-cta-heading {
              font-size: 2rem;
            }
            
            .section-heading {
              font-size: 2rem;
            }
            
            .facebook-cta-buttons {
              flex-direction: column;
            }
            
            .facebook-process-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>

      <div className="facebook-page">
        {/* ✅ Authentication Prompt Modal */}
        {showAuthPrompt && (
          <div className="auth-prompt-overlay">
            <div className="auth-prompt-content">
              <div className="auth-prompt-icon">
                <Users size={24} />
              </div>
              <h3 className="auth-prompt-title">Sign In Required</h3>
              <p className="auth-prompt-message">
                Please sign up or log in to place an order and access our
                services.
              </p>
              <div className="auth-prompt-buttons">
                <button
                  className="auth-prompt-secondary"
                  onClick={() => handleAuthPrompt("cancel")}
                >
                  Cancel
                </button>
                <button
                  className="auth-prompt-primary"
                  onClick={() => handleAuthPrompt("login")}
                >
                  Sign Up / Log In
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section className="facebook-hero">
          <div className="facebook-hero-container">
            <div className="facebook-badge">
              <Facebook />
              <span>FACEBOOK GROWTH SPECIALISTS</span>
            </div>
            <h1 className="facebook-heading">
              Professional Facebook Growth Services
            </h1>
            <p className="facebook-subtitle">
              Transform your Facebook presence with our expert strategies. We
              specialize in organic page growth, content creation, and community
              building to help you build an authentic, engaged audience that
              drives business results.
            </p>

            <div className="success-metrics">
              {successStories.map((story: SuccessStory, index: number) => (
                <div key={index} className="metric-card">
                  <div className="metric-value">{story.metric}</div>
                  <div className="metric-description">{story.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose-us">
          <div className="why-choose-container">
            <div className="text-center mb-16">
              <div className="section-badge">WHY CHOOSE US</div>
              <h2 className="section-heading">
                Why Our Facebook Growth{" "}
                <span className="gradient-heading">Stands Out</span>
              </h2>
              <p className="section-subtitle">
                We don't just grow your page likes - we build engaged
                communities that drive real business results and meaningful
                interactions
              </p>
            </div>

            <div className="why-choose-grid">
              {whyChooseUs.map((item: WhyChooseUsItem, index: number) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="why-choose-card">
                    <div
                      className="why-choose-icon"
                      style={{ color: item.color }}
                    >
                      <Icon />
                    </div>
                    <h3 className="why-choose-title">{item.title}</h3>
                    <p className="why-choose-description">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="facebook-services">
          <div className="facebook-container">
            <div className="text-center mb-16">
              <h2 className="section-heading">Facebook Growth Services</h2>
              <p className="section-subtitle">
                Comprehensive solutions tailored to boost your Facebook presence
                and drive real business results through strategic growth
              </p>
            </div>
            <div className="facebook-grid">
              {facebookServices.map((service: Service, index: number) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="facebook-service-card">
                    <div className="facebook-service-content">
                      <div className="facebook-service-icon">
                        <Icon />
                      </div>
                      <h3 className="facebook-service-title">
                        {service.title}
                      </h3>
                      <p className="facebook-service-description">
                        {service.description}
                      </p>
                      <ul className="facebook-service-features">
                        {service.features.map(
                          (feature: string, featureIndex: number) => (
                            <li
                              key={featureIndex}
                              className="facebook-service-feature"
                            >
                              {feature}
                            </li>
                          )
                        )}
                      </ul>
                      <div className="facebook-service-price">
                        {service.price}
                      </div>
                      <button
                        className="facebook-service-button"
                        onClick={() =>
                          handleOrderNowClick(service.title, service.budget)
                        }
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features List Section */}
        <section className="facebook-features">
          <div className="features-container">
            <div className="text-center mb-12">
              <div className="section-badge">COMPREHENSIVE FEATURES</div>
              <h2 className="section-heading">
                Everything You Need for{" "}
                <span className="gradient-heading">Facebook Success</span>
              </h2>
            </div>
            <div className="features-grid">
              {facebookFeatures.map((feature: Feature, index: number) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="feature-item">
                    <div className="feature-icon">
                      <Icon />
                    </div>
                    <span className="feature-text">{feature.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="success-stories">
          <div className="stories-container">
            <div className="text-center mb-16">
              <div className="section-badge">SUCCESS STORIES</div>
              <h2 className="section-heading">
                Real Clients,{" "}
                <span className="gradient-heading">Real Results</span>
              </h2>
              <p className="section-subtitle">
                See how we've helped businesses like yours achieve Facebook
                growth success and drive meaningful business outcomes
              </p>
            </div>

            <div className="stories-grid">
              {clientSuccessStories.map(
                (story: ClientSuccessStory, index: number) => (
                  <div key={index} className="story-card">
                    <div className="story-header">
                      <div className="story-avatar">{story.avatar}</div>
                      <div className="story-client-info">
                        <div className="story-client-name">{story.name}</div>
                        <div className="story-growth">
                          {story.growth}{" "}
                          <span className="story-period">{story.period}</span>
                        </div>
                      </div>
                    </div>

                    <div className="story-results">
                      <div className="story-results-text">{story.results}</div>
                    </div>

                    <p className="story-testimonial">{story.testimonial}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="facebook-process">
          <div className="facebook-process-container">
            <div className="text-center mb-16">
              <div className="section-badge">OUR PROCESS</div>
              <h2 className="section-heading">
                Our Facebook Growth{" "}
                <span className="gradient-heading">Process</span>
              </h2>
              <p className="section-subtitle">
                A strategic approach that delivers measurable Facebook growth
                and community engagement
              </p>
            </div>

            <div className="facebook-process-grid">
              {[
                {
                  step: "1",
                  title: "Page Audit & Analysis",
                  description:
                    "Comprehensive Facebook page audit, competitor analysis, and audience research to identify growth opportunities.",
                },
                {
                  step: "2",
                  title: "Content Strategy Development",
                  description:
                    "Customized content strategy, posting schedule, and engagement plan tailored to your brand and audience.",
                },
                {
                  step: "3",
                  title: "Community Building",
                  description:
                    "Strategic engagement tactics, comment management, and community growth initiatives.",
                },
                {
                  step: "4",
                  title: "Growth & Optimization",
                  description:
                    "Continuous monitoring, performance analysis, and strategy refinement for optimal Facebook results.",
                },
              ].map((process, index: number) => (
                <div key={index} className="facebook-process-card">
                  <div className="facebook-process-step">{process.step}</div>
                  <h3 className="facebook-process-title">{process.title}</h3>
                  <p className="facebook-process-description">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="facebook-cta">
          <div className="facebook-cta-container">
            <h2 className="facebook-cta-heading">
              Ready to Dominate Facebook?
            </h2>
            <p className="facebook-cta-subtitle">
              Join hundreds of successful brands that have transformed their
              Facebook presence with our expert growth services and community
              building strategies.
            </p>
            <div className="facebook-cta-buttons">
              <button
                className="facebook-cta-primary"
                onClick={() => handleOrderNowClick()}
              >
                Start Your Facebook Growth
              </button>
              <button
                onClick={() => navigate("/services")}
                className="facebook-cta-secondary"
              >
                View All Services
              </button>
            </div>
          </div>
        </section>

        {/* ✅ Order Now Modal */}
        <OrderNowFacebook
          isOpen={isOrderModalOpen}
          onClose={() => setIsOrderModalOpen(false)}
          service={selectedService}
          serviceBudget={selectedServiceBudget}
          platform="Facebook"
        />
      </div>
    </>
  );
};
