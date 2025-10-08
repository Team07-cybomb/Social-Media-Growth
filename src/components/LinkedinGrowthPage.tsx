import {
  Linkedin,
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
  Briefcase,
  Building,
  Network,
  Calendar,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { OrderNowLinkedin } from "./OrderNowLinkedin";

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

export const LinkedInGrowthPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedServiceBudget, setSelectedServiceBudget] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);

  // ✅ Check if user is authenticated on component mount/update
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    setIsAuthenticated(!!(token && user));
  }, [location]);

  // ✅ Check for order modal state on component mount/update
  useEffect(() => {
    const locationState = location.state as any;
    if (locationState?.openOrderModal) {
      setSelectedService(locationState.service || "");
      setSelectedServiceBudget(locationState.serviceBudget || "");
      setIsOrderModalOpen(true);

      // Clear the state to prevent reopening on refresh
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  const linkedinServices: Service[] = [
    {
      icon: Users,
      title: "Follower Growth",
      description:
        "Organic follower growth with targeted professional audience",
      features: [
        "300-600 real followers per month",
        "Industry-specific targeting",
        "Competitor analysis",
        "Growth analytics dashboard",
      ],
      price: "$349/month",
      budget: "$349/month",
    },
    {
      icon: MessageCircle,
      title: "Engagement Boost",
      description: "Increase likes, comments, and post interactions",
      features: [
        "180%+ engagement rate increase",
        "Strategic comment management",
        "Industry discussion participation",
        "Thought leadership building",
      ],
      price: "$249/month",
      budget: "$249/month",
    },
    {
      icon: TrendingUp,
      title: "Content Strategy",
      description: "Professional content planning and optimization",
      features: [
        "Monthly content calendar",
        "Industry insight articles",
        "Post optimization for professionals",
        "Performance analytics",
      ],
      price: "$499/month",
      budget: "$499/month",
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Professional network analytics and performance tracking",
      features: [
        "Weekly performance reports",
        "Audience demographic insights",
        "Industry benchmarking",
        "Growth recommendations",
      ],
      price: "$199/month",
      budget: "$199/month",
    },
    {
      icon: Target,
      title: "LinkedIn Ads",
      description: "Professional ad management and optimization",
      features: [
        "Ad creative strategy",
        "B2B audience targeting",
        "Lead generation optimization",
        "ROI tracking",
      ],
      price: "$599/month",
      budget: "$599/month",
    },
    {
      icon: Rocket,
      title: "Complete Management",
      description: "Full-service LinkedIn profile management",
      features: [
        "Daily post management",
        "Article creation",
        "Network engagement",
        "Lead generation strategy",
      ],
      price: "$899/month",
      budget: "$899/month",
    },
  ];

  const successStories: SuccessStory[] = [
    {
      metric: "8.2K+",
      description: "Professional Connections",
    },
    {
      metric: "225%",
      description: "Engagement Increase",
    },
    {
      metric: "65%",
      description: "Lead Quality Improvement",
    },
    {
      metric: "200+",
      description: "B2B Clients",
    },
  ];

  const whyChooseUs: WhyChooseUsItem[] = [
    {
      icon: Shield,
      title: "100% Professional Network",
      description:
        "No fake profiles, only genuine professionals. We focus on building authentic connections that drive real business opportunities.",
      color: "#0077B5",
    },
    {
      icon: Zap,
      title: "Strategic Growth Approach",
      description:
        "See measurable professional growth within 30 days with our proven B2B strategies and industry-specific targeting.",
      color: "#00A0DC",
    },
    {
      icon: Users2,
      title: "Dedicated LinkedIn Strategist",
      description:
        "Get personalized attention from a LinkedIn expert who understands your industry and professional goals.",
      color: "#0077B5",
    },
    {
      icon: Rocket,
      title: "Proven B2B Strategies",
      description:
        "Industry-tested methods that have helped 200+ businesses achieve LinkedIn success and generate quality leads.",
      color: "#FF6B00",
    },
  ];

  const clientSuccessStories: ClientSuccessStory[] = [
    {
      name: "Tech Solutions Inc.",
      growth: "8,200+ connections",
      period: "in 6 months",
      results: "225% engagement increase, 45 qualified leads",
      testimonial:
        "The LinkedIn growth service transformed our B2B presence. We went from 500 to 8,700+ quality connections and generated 6-figure deals through the platform!",
      avatar: "💼",
    },
    {
      name: "Marketing Agency",
      growth: "12,500+ followers",
      period: "in 8 months",
      results: "300% content reach, 32 new enterprise clients",
      testimonial:
        "The strategic content approach established us as industry thought leaders. Our inbound lead quality improved dramatically with decision-makers engaging daily.",
      avatar: "📈",
    },
    {
      name: "Consulting Firm",
      growth: "15,000+ connections",
      period: "in 12 months",
      results: "185% profile visibility, 3 major partnerships",
      testimonial:
        "The professional network growth opened doors to C-level executives we couldn't reach before. Our authority in the niche skyrocketed.",
      avatar: "🏢",
    },
  ];

  const linkedinFeatures: Feature[] = [
    { icon: CheckCircle, text: "Daily professional content optimization" },
    { icon: CheckCircle, text: "Industry trend monitoring" },
    { icon: CheckCircle, text: "Competitor analysis & benchmarking" },
    { icon: CheckCircle, text: "Hashtag strategy for professionals" },
    { icon: CheckCircle, text: "Engagement rate optimization" },
    { icon: CheckCircle, text: "Thought leadership development" },
    { icon: CheckCircle, text: "Article creation and publishing" },
    { icon: CheckCircle, text: "Lead generation strategy" },
  ];

  // ✅ Enhanced function to handle Order Now button click
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
      setSelectedService(serviceTitle);
      setSelectedServiceBudget(serviceBudget);
      setShowAuthPrompt(true);
    }
  };

  // ✅ Enhanced function to handle authentication prompt actions
  const handleAuthPrompt = (action: "login" | "cancel") => {
    setShowAuthPrompt(false);
    if (action === "login") {
      // ✅ Navigate to register with order flow context
      navigate("/register", {
        state: {
          isOrderFlow: true,
          serviceData: {
            service: selectedService,
            serviceBudget: selectedServiceBudget,
            platform: "LinkedIn",
            returnPath: location.pathname,
          },
          from: location,
        },
      });
    }
  };

  // ✅ Enhanced function for CTA button (when no specific service is selected)
  const handleCTAClick = () => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      // Open modal without pre-selected service
      setSelectedService("");
      setSelectedServiceBudget("");
      setIsOrderModalOpen(true);
    } else {
      // Show auth prompt for general order
      setSelectedService("");
      setSelectedServiceBudget("");
      setShowAuthPrompt(true);
    }
  };

  return (
    <>
      <style>
        {`
          .linkedin-page {
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
            background: linear-gradient(135deg, #0077B5 0%, #00A0DC 100%);
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
            background: linear-gradient(135deg, #0077B5 0%, #00A0DC 100%);
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
            box-shadow: 0 10px 20px rgba(0, 119, 181, 0.3);
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
          .linkedin-hero {
            padding: 6rem 1rem;
            background: linear-gradient(135deg, #0077B5 0%, #00A0DC 25%, #008CC9 50%, #006699 75%, #004D73 100%);
            color: white;
            text-align: center;
          }

          .linkedin-hero-container {
            max-width: 64rem;
            margin-left: auto;
            margin-right: auto;
          }

          .linkedin-badge {
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

          .linkedin-heading {
            font-size: 3rem;
            font-weight: 700;
            line-height: 1.1;
            margin-bottom: 1.5rem;
          }

          .linkedin-subtitle {
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
          .linkedin-services {
            padding: 5rem 1rem;
            background: #f9fafb;
          }

          .linkedin-container {
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

          .linkedin-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
          }

          .linkedin-service-card {
            background: white;
            border-radius: 1.5rem;
            padding: 2rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
            border: 1px solid #e2e8f0;
          }

          .linkedin-service-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
          }

          .linkedin-service-content {
            height: 100%;
            display: flex;
            flex-direction: column;
          }

          .linkedin-service-icon {
            width: 4rem;
            height: 4rem;
            border-radius: 1rem;
            background: linear-gradient(135deg, #0077B5 0%, #00A0DC 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            margin-bottom: 1.5rem;
          }

          .linkedin-service-icon svg {
            width: 2rem;
            height: 2rem;
          }

          .linkedin-service-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 1rem;
          }

          .linkedin-service-description {
            color: #64748b;
            line-height: 1.6;
            margin-bottom: 1.5rem;
          }

          .linkedin-service-features {
            list-style: none;
            padding: 0;
            margin: 0 0 2rem 0;
            flex: 1;
          }

          .linkedin-service-feature {
            padding: 0.5rem 0;
            color: #475569;
            position: relative;
            padding-left: 1.5rem;
          }

          .linkedin-service-feature:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #10b981;
            font-weight: bold;
          }

          .linkedin-service-price {
            font-size: 2rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 1.5rem;
            text-align: center;
          }

          .linkedin-service-button {
            background: linear-gradient(135deg, #0077B5 0%, #00A0DC 100%);
            color: white;
            border: none;
            padding: 0.75rem 1rem;
            border-radius: 0.75rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            width: 100%;
            font-size: 0.9rem;
          }

          .linkedin-service-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(0, 119, 181, 0.3);
          }

          /* Process Section */
          .linkedin-process {
            padding: 5rem 1rem;
            background: white;
          }

          .linkedin-process-container {
            max-width: 80rem;
            margin-left: auto;
            margin-right: auto;
          }

          .linkedin-process-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
          }

          .linkedin-process-card {
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

          .linkedin-process-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 50px rgba(0, 119, 181, 0.15);
            border-color: #cbd5e1;
          }

          .linkedin-process-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(0, 119, 181, 0.05), transparent);
            transition: left 0.6s ease;
          }

          .linkedin-process-card:hover::before {
            left: 100%;
          }

          .linkedin-process-step {
            width: 4rem;
            height: 4rem;
            background: linear-gradient(135deg, #0077B5 0%, #00A0DC 100%);
            color: white;
            border-radius: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 1.5rem;
            margin: 0 auto 1.5rem;
            box-shadow: 0 8px 20px rgba(0, 119, 181, 0.3);
          }

          .linkedin-process-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 1rem;
          }

          .linkedin-process-description {
            color: #64748b;
            line-height: 1.6;
            font-size: 1rem;
          }

          /* CTA Section */
          .linkedin-cta {
            padding: 5rem 1rem;
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            color: white;
            text-align: center;
          }

          .linkedin-cta-container {
            max-width: 48rem;
            margin-left: auto;
            margin-right: auto;
          }

          .linkedin-cta-heading {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
          }

          .linkedin-cta-subtitle {
            font-size: 1.25rem;
            opacity: 0.9;
            line-height: 1.6;
            margin-bottom: 3rem;
          }

          .linkedin-cta-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
          }

          .linkedin-cta-primary {
            background: linear-gradient(135deg, #0077B5 0%, #00A0DC 100%);
            color: white;
            border: none;
            padding: 1rem 2rem;
            border-radius: 0.75rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .linkedin-cta-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(0, 119, 181, 0.3);
          }

          .linkedin-cta-secondary {
            background: transparent;
            color: white;
            border: 2px solid rgba(255, 255, 255, 0.3);
            padding: 1rem 2rem;
            border-radius: 0.75rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .linkedin-cta-secondary:hover {
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
            background: linear-gradient(90deg, transparent, rgba(0, 119, 181, 0.05), transparent);
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
            box-shadow: 0 10px 40px rgba(0, 119, 181, 0.1);
            transition: all 0.3s ease;
            border: 1px solid #e2e8f0;
            position: relative;
          }

          .story-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 60px rgba(0, 119, 181, 0.15);
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
            background: linear-gradient(135deg, #0077B5 0%, #00A0DC 100%);
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
            color: #0077B5;
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
            border-left: 4px solid #0077B5;
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
          .linkedin-features {
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
            color: #0077B5;
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
            background: linear-gradient(135deg, #0077B5 0%, #00A0DC 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .section-badge {
            display: inline-block;
            background: rgba(0, 119, 181, 0.1);
            color: #0077B5;
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            font-size: 0.875rem;
            font-weight: 600;
            margin-bottom: 1rem;
          }

          @media (max-width: 768px) {
            .linkedin-heading {
              font-size: 2rem;
            }
            
            .linkedin-cta-heading {
              font-size: 2rem;
            }
            
            .section-heading {
              font-size: 2rem;
            }
            
            .linkedin-cta-buttons {
              flex-direction: column;
            }
            
            .linkedin-process-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>

      <div className="linkedin-page">
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
        <section className="linkedin-hero">
          <div className="linkedin-hero-container">
            <div className="linkedin-badge">
              <Linkedin />
              <span>LINKEDIN GROWTH SPECIALISTS</span>
            </div>
            <h1 className="linkedin-heading">
              Professional LinkedIn Growth Services
            </h1>
            <p className="linkedin-subtitle">
              Transform your LinkedIn presence with our expert B2B strategies.
              We specialize in organic growth, professional content creation,
              and engagement optimization to help you build an authentic,
              high-converting professional network.
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
                Why Our LinkedIn Growth{" "}
                <span className="gradient-heading">Stands Out</span>
              </h2>
              <p className="section-subtitle">
                We don't just grow your connections - we build professional
                networks that drive real business opportunities and career
                advancement
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
        <section className="linkedin-services">
          <div className="linkedin-container">
            <div className="text-center mb-16">
              <h2 className="section-heading">LinkedIn Growth Services</h2>
              <p className="section-subtitle">
                Comprehensive B2B solutions tailored to boost your LinkedIn
                presence and drive professional results through strategic
                networking
              </p>
            </div>
            <div className="linkedin-grid">
              {linkedinServices.map((service: Service, index: number) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="linkedin-service-card">
                    <div className="linkedin-service-content">
                      <div className="linkedin-service-icon">
                        <Icon />
                      </div>
                      <h3 className="linkedin-service-title">
                        {service.title}
                      </h3>
                      <p className="linkedin-service-description">
                        {service.description}
                      </p>
                      <ul className="linkedin-service-features">
                        {service.features.map(
                          (feature: string, featureIndex: number) => (
                            <li
                              key={featureIndex}
                              className="linkedin-service-feature"
                            >
                              {feature}
                            </li>
                          )
                        )}
                      </ul>
                      <div className="linkedin-service-price">
                        {service.price}
                      </div>
                      <button
                        className="linkedin-service-button"
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
        <section className="linkedin-features">
          <div className="features-container">
            <div className="text-center mb-12">
              <div className="section-badge">PROFESSIONAL FEATURES</div>
              <h2 className="section-heading">
                Everything You Need for{" "}
                <span className="gradient-heading">LinkedIn Success</span>
              </h2>
            </div>
            <div className="features-grid">
              {linkedinFeatures.map((feature: Feature, index: number) => {
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
                <span className="gradient-heading">Real Business Results</span>
              </h2>
              <p className="section-subtitle">
                See how we've helped businesses and professionals achieve
                LinkedIn growth success and generate quality opportunities
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
        <section className="linkedin-process">
          <div className="linkedin-process-container">
            <div className="text-center mb-16">
              <div className="section-badge">OUR PROCESS</div>
              <h2 className="section-heading">
                Our LinkedIn Growth{" "}
                <span className="gradient-heading">Process</span>
              </h2>
              <p className="section-subtitle">
                A strategic B2B approach that delivers measurable LinkedIn
                growth, professional engagement, and business opportunities
              </p>
            </div>

            <div className="linkedin-process-grid">
              {[
                {
                  step: "1",
                  title: "Profile Audit & Analysis",
                  description:
                    "Comprehensive LinkedIn profile audit, competitor analysis, and industry research to identify professional growth opportunities.",
                },
                {
                  step: "2",
                  title: "Content Strategy Development",
                  description:
                    "Customized professional content strategy, posting schedule, and engagement plan tailored to your industry and goals.",
                },
                {
                  step: "3",
                  title: "Professional Content Creation",
                  description:
                    "High-quality industry articles, posts, and thought leadership content designed to maximize professional engagement.",
                },
                {
                  step: "4",
                  title: "Network Growth & Optimization",
                  description:
                    "Strategic connection building, community management, and continuous optimization for sustainable professional growth.",
                },
              ].map((process, index: number) => (
                <div key={index} className="linkedin-process-card">
                  <div className="linkedin-process-step">{process.step}</div>
                  <h3 className="linkedin-process-title">{process.title}</h3>
                  <p className="linkedin-process-description">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="linkedin-cta">
          <div className="linkedin-cta-container">
            <h2 className="linkedin-cta-heading">
              Ready to Dominate LinkedIn?
            </h2>
            <p className="linkedin-cta-subtitle">
              Join hundreds of successful professionals and businesses that have
              transformed their LinkedIn presence with our expert growth
              services and established industry authority.
            </p>
            <div className="linkedin-cta-buttons">
              <button className="linkedin-cta-primary" onClick={handleCTAClick}>
                Start Growing Now
              </button>
              <button
                className="linkedin-cta-secondary"
                onClick={() => (window.location.href = "#contact")}
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Order Now Modal */}
      {isOrderModalOpen && (
        <OrderNowLinkedin
          isOpen={isOrderModalOpen}
          onClose={() => setIsOrderModalOpen(false)}
          service={selectedService}
          serviceBudget={selectedServiceBudget}
          platform="LinkedIn"
        />
      )}
    </>
  );
};
