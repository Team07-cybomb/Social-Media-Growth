import { useState, useEffect } from "react";
import {
  Youtube,
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
  PlayCircle,
  ThumbsUp,
  Eye,
  Share2,
  Search,
  Film,
  Mic,
  Edit3,
  Lightbulb,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { OrderNowYoutube } from "./OrderNowYoutube";

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

export const YouTubeGrowthPage = () => {
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

  const youtubeServices: Service[] = [
    {
      icon: Users,
      title: "Subscriber Growth",
      description:
        "Organic subscriber growth with targeted audience acquisition",
      features: [
        "1,000-5,000 real subscribers per month",
        "Niche audience targeting",
        "Competitor channel analysis",
        "Growth analytics dashboard",
      ],
      price: "$399/month",
      budget: "$399/month",
    },
    {
      icon: PlayCircle,
      title: "Video Optimization",
      description: "Maximize views and engagement through video SEO",
      features: [
        "Title & description optimization",
        "Thumbnail design strategy",
        "Keyword research implementation",
        "YouTube SEO audit",
      ],
      price: "$299/month",
      budget: "$299/month",
    },
    {
      icon: TrendingUp,
      title: "Content Strategy",
      description: "Complete content planning and video production guidance",
      features: [
        "Monthly content calendar",
        "Video topic research",
        "Content format optimization",
        "Performance analytics",
      ],
      price: "$499/month",
      budget: "$499/month",
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Deep analytics and channel performance tracking",
      features: [
        "Weekly performance reports",
        "Audience retention analysis",
        "Competitor benchmarking",
        "Growth recommendations",
      ],
      price: "$199/month",
      budget: "$199/month",
    },
    {
      icon: Target,
      title: "YouTube Ads Management",
      description: "Professional ad campaigns for rapid growth",
      features: [
        "Ad creative strategy",
        "Audience targeting setup",
        "Budget optimization",
        "ROI tracking & reporting",
      ],
      price: "$599/month",
      budget: "$599/month",
    },
    {
      icon: Rocket,
      title: "Complete Channel Management",
      description: "Full-service YouTube channel management",
      features: [
        "End-to-end video strategy",
        "Community management",
        "Monetization optimization",
        "Growth strategy execution",
      ],
      price: "$899/month",
      budget: "$899/month",
    },
  ];

  const successStories: SuccessStory[] = [
    {
      metric: "50K+",
      description: "Subscribers Gained",
    },
    {
      metric: "300%",
      description: "View Increase",
    },
    {
      metric: "250%",
      description: "Watch Time Growth",
    },
    {
      metric: "400+",
      description: "Channels Managed",
    },
  ];

  const whyChooseUs: WhyChooseUsItem[] = [
    {
      icon: Shield,
      title: "100% Organic Growth",
      description:
        "No fake subscribers or views. We focus on authentic audience building that leads to real engagement and monetization.",
      color: "#c91d1d",
    },
    {
      icon: Zap,
      title: "Rapid Results",
      description:
        "See significant growth within the first 60 days with our proven YouTube algorithm optimization strategies.",
      color: "#c91d1d",
    },
    {
      icon: Users2,
      title: "Dedicated Channel Manager",
      description:
        "Get personalized attention with a YouTube expert who understands your niche and content goals.",
      color: "#c91d1d",
    },
    {
      icon: Rocket,
      title: "Proven YouTube Strategies",
      description:
        "Battle-tested methods that have helped 400+ channels achieve YouTube success and monetization.",
      color: "#c91d1d",
    },
  ];

  const clientSuccessStories: ClientSuccessStory[] = [
    {
      name: "Tech Review Channel",
      growth: "45,000+ subscribers",
      period: "in 6 months",
      results: "300% view increase, 250% watch time growth",
      testimonial:
        "The YouTube growth service transformed our channel from 5K to 50K subscribers. Their video optimization strategies tripled our views!",
      avatar: "📱",
    },
    {
      name: "Cooking Tutorials",
      growth: "28,000+ subscribers",
      period: "in 4 months",
      results: "400% engagement increase, monetization achieved",
      testimonial:
        "Their content strategy helped us find our niche. We went viral multiple times and finally reached YouTube Partner Program requirements!",
      avatar: "👨‍🍳",
    },
    {
      name: "Gaming Channel",
      growth: "75,000+ subscribers",
      period: "in 8 months",
      results: "500% revenue growth, brand deals secured",
      testimonial:
        "The complete channel management service took our gaming content to the next level. We're now getting consistent brand partnerships!",
      avatar: "🎮",
    },
  ];

  const youtubeFeatures: Feature[] = [
    { icon: CheckCircle, text: "Video SEO optimization" },
    { icon: CheckCircle, text: "Thumbnail design strategy" },
    { icon: CheckCircle, text: "Audience retention analysis" },
    { icon: CheckCircle, text: "Competitor research & analysis" },
    { icon: CheckCircle, text: "Content calendar planning" },
    { icon: CheckCircle, text: "YouTube algorithm optimization" },
    { icon: CheckCircle, text: "Monetization strategy" },
    { icon: CheckCircle, text: "Community management" },
    { icon: CheckCircle, text: "Analytics reporting" },
    { icon: CheckCircle, text: "Brand collaboration setup" },
    { icon: CheckCircle, text: "Video content strategy" },
    { icon: CheckCircle, text: "Growth hacking techniques" },
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

  const closeOrderModal = () => {
    setIsOrderModalOpen(false);
    setSelectedService("");
    setSelectedServiceBudget("");
  };

  return (
    <>
      <style>
        {`
          .youtube-page {
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
            background: #c91d1d;
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
            background: #c91d1d;
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
            box-shadow: 0 10px 20px rgba(201, 29, 29, 0.3);
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

          /* Hero Section - Updated to #c91d1d */
          .youtube-hero {
            padding: 6rem 1rem;
            background: #c91d1d;
            color: white;
            text-align: center;
          }

          .youtube-hero-container {
            max-width: 64rem;
            margin-left: auto;
            margin-right: auto;
          }

          .youtube-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: rgba(255, 255, 255, 0.2);
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            font-size: 0.875rem;
            font-weight: 600;
            margin-bottom: 2rem;
            backdrop-filter: blur(10px);
          }

          .youtube-heading {
            font-size: 3rem;
            font-weight: 700;
            line-height: 1.1;
            margin-bottom: 1.5rem;
          }

          .youtube-subtitle {
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
            background: rgba(255, 255, 255, 0.2);
            padding: 2rem;
            border-radius: 1rem;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
          }

          .metric-value {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
          }

          .metric-description {
            font-size: 0.9rem;
            opacity: 0.9;
          }

          /* Services Section */
          .youtube-services {
            padding: 5rem 1rem;
            background: #f9fafb;
          }

          .youtube-container {
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

          .youtube-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
          }

          .youtube-service-card {
            background: white;
            border-radius: 1.5rem;
            padding: 2rem;
            box-shadow: 0 4px 20px rgba(201, 29, 29, 0.08);
            transition: all 0.3s ease;
            border: 1px solid #e2e8f0;
          }

          .youtube-service-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(201, 29, 29, 0.15);
          }

          .youtube-service-content {
            height: 100%;
            display: flex;
            flex-direction: column;
          }

          .youtube-service-icon {
            width: 4rem;
            height: 4rem;
            border-radius: 1rem;
            background: #c91d1d;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            margin-bottom: 1.5rem;
          }

          .youtube-service-icon svg {
            width: 2rem;
            height: 2rem;
          }

          .youtube-service-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 1rem;
          }

          .youtube-service-description {
            color: #64748b;
            line-height: 1.6;
            margin-bottom: 1.5rem;
          }

          .youtube-service-features {
            list-style: none;
            padding: 0;
            margin: 0 0 2rem 0;
            flex: 1;
          }

          .youtube-service-feature {
            padding: 0.5rem 0;
            color: #475569;
            position: relative;
            padding-left: 1.5rem;
          }

          .youtube-service-feature:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #c91d1d;
            font-weight: bold;
          }

          .youtube-service-price {
            font-size: 2rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 1.5rem;
            text-align: center;
          }

          .youtube-service-button {
            background: #c91d1d;
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

          .youtube-service-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(201, 29, 29, 0.3);
          }

          /* Process Section */
          .youtube-process {
            padding: 5rem 1rem;
            background: white;
          }

          .youtube-process-container {
            max-width: 80rem;
            margin-left: auto;
            margin-right: auto;
          }

          .youtube-process-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
          }

          .youtube-process-card {
            background: white;
            border-radius: 1.5rem;
            padding: 2.5rem 2rem;
            text-align: center;
            box-shadow: 0 10px 30px rgba(201, 29, 29, 0.08);
            border: 1px solid #e2e8f0;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          .youtube-process-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 50px rgba(201, 29, 29, 0.15);
            border-color: #cbd5e1;
          }

          .youtube-process-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(201, 29, 29, 0.05), transparent);
            transition: left 0.6s ease;
          }

          .youtube-process-card:hover::before {
            left: 100%;
          }

          .youtube-process-step {
            width: 4rem;
            height: 4rem;
            background: #c91d1d;
            color: white;
            border-radius: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 1.5rem;
            margin: 0 auto 1.5rem;
            box-shadow: 0 8px 20px rgba(201, 29, 29, 0.2);
          }

          .youtube-process-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 1rem;
          }

          .youtube-process-description {
            color: #64748b;
            line-height: 1.6;
            font-size: 1rem;
          }

          /* CTA Section - Kept as original (dark theme) */
          .youtube-cta {
            padding: 5rem 1rem;
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            color: white;
            text-align: center;
          }

          .youtube-cta-container {
            max-width: 48rem;
            margin-left: auto;
            margin-right: auto;
          }

          .youtube-cta-heading {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
          }

          .youtube-cta-subtitle {
            font-size: 1.25rem;
            opacity: 0.9;
            line-height: 1.6;
            margin-bottom: 3rem;
          }

          .youtube-cta-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
          }

          .youtube-cta-primary {
            background: #c91d1d;
            color: white;
            border: none;
            padding: 1rem 2rem;
            border-radius: 0.75rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .youtube-cta-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(201, 29, 29, 0.3);
          }

          .youtube-cta-secondary {
            background: transparent;
            color: white;
            border: 2px solid rgba(255, 255, 255, 0.3);
            padding: 1rem 2rem;
            border-radius: 0.75rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .youtube-cta-secondary:hover {
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
            background: linear-gradient(90deg, transparent, rgba(201, 29, 29, 0.05), transparent);
            transition: left 0.6s ease;
          }

          .why-choose-card:hover::before {
            left: 100%;
          }

          .why-choose-card:hover {
            transform: translateY(-8px);
            background: white;
            border-color: #cbd5e1;
            box-shadow: 0 10px 30px rgba(201, 29, 29, 0.1);
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
            box-shadow: 0 10px 40px rgba(201, 29, 29, 0.1);
            transition: all 0.3s ease;
            border: 1px solid #e2e8f0;
            position: relative;
          }

          .story-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 60px rgba(201, 29, 29, 0.15);
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
            background: #c91d1d;
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
            color: #c91d1d;
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
            border-left: 4px solid #c91d1d;
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
          .youtube-features {
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
            color: #c91d1d;
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
            color: #c91d1d;
          }

          .section-badge {
            display: inline-block;
            background: rgba(201, 29, 29, 0.1);
            color: #c91d1d;
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            font-size: 0.875rem;
            font-weight: 600;
            margin-bottom: 1rem;
          }

          @media (max-width: 768px) {
            .youtube-heading {
              font-size: 2rem;
            }
            
            .youtube-cta-heading {
              font-size: 2rem;
            }
            
            .section-heading {
              font-size: 2rem;
            }
            
            .youtube-cta-buttons {
              flex-direction: column;
            }
            
            .youtube-process-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>

      <div className="youtube-page">
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
        <section className="youtube-hero">
          <div className="youtube-hero-container">
            <div className="youtube-badge">
              <Youtube />
              <span>YOUTUBE GROWTH SPECIALISTS</span>
            </div>
            <h1 className="youtube-heading">
              Professional YouTube Growth Services
            </h1>
            <p className="youtube-subtitle">
              Transform your YouTube channel with our expert strategies. We
              specialize in subscriber growth, video optimization, and algorithm
              mastery to help you build a successful, monetized channel.
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
                Why Our YouTube Growth{" "}
                <span className="gradient-heading">Stands Out</span>
              </h2>
              <p className="section-subtitle">
                We don't just grow your subscribers - we build engaged
                communities that drive real revenue and brand recognition
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
        <section className="youtube-services">
          <div className="youtube-container">
            <div className="text-center mb-16">
              <h2 className="section-heading">YouTube Growth Services</h2>
              <p className="section-subtitle">
                Comprehensive solutions tailored to boost your YouTube presence
                and drive real results
              </p>
            </div>
            <div className="youtube-grid">
              {youtubeServices.map((service: Service, index: number) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="youtube-service-card">
                    <div className="youtube-service-content">
                      <div className="youtube-service-icon">
                        <Icon />
                      </div>
                      <h3 className="youtube-service-title">{service.title}</h3>
                      <p className="youtube-service-description">
                        {service.description}
                      </p>
                      <ul className="youtube-service-features">
                        {service.features.map(
                          (feature: string, featureIndex: number) => (
                            <li
                              key={featureIndex}
                              className="youtube-service-feature"
                            >
                              {feature}
                            </li>
                          )
                        )}
                      </ul>
                      <div className="youtube-service-price">
                        {service.price}
                      </div>
                      <button
                        className="youtube-service-button"
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
        <section className="youtube-features">
          <div className="features-container">
            <div className="text-center mb-12">
              <div className="section-badge">COMPREHENSIVE FEATURES</div>
              <h2 className="section-heading">
                Everything You Need for{" "}
                <span className="gradient-heading">YouTube Success</span>
              </h2>
            </div>
            <div className="features-grid">
              {youtubeFeatures.map((feature: Feature, index: number) => {
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
                See how we've helped channels like yours achieve YouTube growth
                success
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
        <section className="youtube-process">
          <div className="youtube-process-container">
            <div className="text-center mb-16">
              <div className="section-badge">OUR PROCESS</div>
              <h2 className="section-heading">
                Our YouTube Growth{" "}
                <span className="gradient-heading">Process</span>
              </h2>
              <p className="section-subtitle">
                A strategic approach that delivers measurable YouTube growth and
                engagement
              </p>
            </div>

            <div className="youtube-process-grid">
              {[
                {
                  step: "1",
                  title: "Channel Audit & Analysis",
                  description:
                    "Comprehensive channel audit, competitor analysis, and audience research to identify growth opportunities.",
                },
                {
                  step: "2",
                  title: "Content Strategy Development",
                  description:
                    "Customized video strategy, content calendar, and optimization plan tailored to your niche.",
                },
                {
                  step: "3",
                  title: "Video Optimization",
                  description:
                    "SEO optimization, thumbnail design, and metadata optimization for maximum visibility.",
                },
                {
                  step: "4",
                  title: "Growth & Monetization",
                  description:
                    "Continuous optimization, audience building, and monetization strategy implementation.",
                },
              ].map((process, index: number) => (
                <div key={index} className="youtube-process-card">
                  <div className="youtube-process-step">{process.step}</div>
                  <h3 className="youtube-process-title">{process.title}</h3>
                  <p className="youtube-process-description">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="youtube-cta">
          <div className="youtube-cta-container">
            <h2 className="youtube-cta-heading">Ready to Dominate YouTube?</h2>
            <p className="youtube-cta-subtitle">
              Join hundreds of successful channels that have transformed their
              YouTube presence with our expert growth services.
            </p>
            <div className="youtube-cta-buttons">
              <button
                onClick={() =>
                  handleOrderNowClick("YouTube Growth Service", "")
                }
                className="youtube-cta-primary"
              >
                Start Your YouTube Growth
              </button>
              <button
                onClick={() => navigate("/services")}
                className="youtube-cta-secondary"
              >
                View All Services
              </button>
            </div>
          </div>
        </section>

        {/* Order Now Modal */}
        {isOrderModalOpen && (
          <OrderNowYoutube
            isOpen={isOrderModalOpen}
            onClose={closeOrderModal}
            service={selectedService}
            serviceBudget={selectedServiceBudget}
            platform="YouTube"
          />
        )}
      </div>
    </>
  );
};
