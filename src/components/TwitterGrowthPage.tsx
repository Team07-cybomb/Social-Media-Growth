import { useState } from "react";
import {
  Twitter,
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
  Repeat,
  Hash,
  List,
  Calendar,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { OrderNowModal } from "./OrderNowModal";

interface Service {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
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

export const TwitterGrowthPage = () => {
  const navigate = useNavigate();
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleOrderNowClick = (serviceTitle: string = "") => {
    setSelectedService(serviceTitle);
    setIsOrderModalOpen(true);
  };

  const closeOrderModal = () => {
    setIsOrderModalOpen(false);
    setSelectedService("");
  };

  const twitterServices: Service[] = [
    {
      icon: Users,
      title: "Follower Growth",
      description: "Organic follower growth with targeted audience acquisition",
      features: [
        "500-800 real followers per month",
        "Targeted audience research",
        "Competitor analysis",
        "Growth analytics dashboard",
      ],
      price: "$249/month",
    },
    {
      icon: MessageCircle,
      title: "Engagement Boost",
      description: "Increase likes, retweets, and replies",
      features: [
        "150%+ engagement rate increase",
        "Strategic reply management",
        "Thread engagement tactics",
        "Community building",
      ],
      price: "$179/month",
    },
    {
      icon: TrendingUp,
      title: "Content Strategy",
      description: "Complete content planning and optimization",
      features: [
        "Monthly content calendar",
        "Hashtag strategy",
        "Tweet optimization",
        "Performance analytics",
      ],
      price: "$349/month",
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Deep analytics and performance tracking",
      features: [
        "Weekly performance reports",
        "Audience insights",
        "Competitor benchmarking",
        "Growth recommendations",
      ],
      price: "$129/month",
    },
    {
      icon: Target,
      title: "Twitter Ads",
      description: "Professional ad management and optimization",
      features: [
        "Ad creative strategy",
        "Audience targeting",
        "Budget optimization",
        "ROI tracking",
      ],
      price: "$449/month",
    },
    {
      icon: Rocket,
      title: "Complete Management",
      description: "Full-service Twitter account management",
      features: [
        "Daily tweet management",
        "Thread creation",
        "Engagement management",
        "Growth strategy",
      ],
      price: "$699/month",
    },
  ];

  const successStories: SuccessStory[] = [
    {
      metric: "8.7K+",
      description: "New Followers Gained",
    },
    {
      metric: "215%",
      description: "Engagement Increase",
    },
    {
      metric: "38%",
      description: "Lead Generation Growth",
    },
    {
      metric: "300+",
      description: "Happy Clients",
    },
  ];

  const whyChooseUs: WhyChooseUsItem[] = [
    {
      icon: Shield,
      title: "100% Organic Growth",
      description:
        "No bots, no fake followers. We focus on authentic engagement and real audience building that drives meaningful conversations.",
      color: "#1D9BF0",
    },
    {
      icon: Zap,
      title: "Rapid Results",
      description:
        "See noticeable growth within the first 30 days with our proven Twitter-specific strategies and real-time optimization.",
      color: "#FFD400",
    },
    {
      icon: Users2,
      title: "Dedicated Twitter Strategist",
      description:
        "Get personalized attention with a dedicated Twitter expert who understands your industry and goals.",
      color: "#1D9BF0",
    },
    {
      icon: Rocket,
      title: "Proven Twitter Strategies",
      description:
        "Battle-tested methods that have helped 300+ brands achieve Twitter success and viral growth.",
      color: "#00BA7C",
    },
  ];

  const clientSuccessStories: ClientSuccessStory[] = [
    {
      name: "Tech Startup Inc.",
      growth: "8,700+ followers",
      period: "in 3 months",
      results: "215% engagement increase, 38% lead growth",
      testimonial:
        "The Twitter growth service completely transformed our online presence. We went from 1K to 10K followers with real industry professionals who engage with our content daily!",
      avatar: "💻",
    },
    {
      name: "Digital Marketing Agency",
      growth: "12,500+ followers",
      period: "in 4 months",
      results: "300% reach increase, 45 new clients",
      testimonial:
        "The targeted follower growth brought us genuine marketing professionals. Our lead generation increased by 60% thanks to the strategic content approach.",
      avatar: "📊",
    },
    {
      name: "E-commerce Brand",
      growth: "15,000+ followers",
      period: "in 5 months",
      results: "185% click-through rate, 2 viral threads",
      testimonial:
        "The content strategy and thread management took our brand viral. We've become a thought leader in our niche with consistent engagement!",
      avatar: "🛒",
    },
  ];

  const twitterFeatures: Feature[] = [
    { icon: CheckCircle, text: "Daily tweet strategy optimization" },
    { icon: CheckCircle, text: "Real-time trend monitoring" },
    { icon: CheckCircle, text: "Competitor analysis & benchmarking" },
    { icon: CheckCircle, text: "Hashtag performance tracking" },
    { icon: CheckCircle, text: "Engagement rate optimization" },
    { icon: CheckCircle, text: "Thread creation & management" },
    { icon: CheckCircle, text: "Viral content potential analysis" },
    { icon: CheckCircle, text: "Twitter Spaces strategy" },
  ];

  return (
    <>
      <style>
        {`
          .twitter-page {
            font-family: system-ui, -apple-system, sans-serif;
          }

          /* Hero Section */
          .twitter-hero {
            padding: 6rem 1rem;
            background: linear-gradient(135deg, #1D9BF0 0%, #1A8CD8 25%, #166BAD 50%, #134D82 75%, #0F3A63 100%);
            color: white;
            text-align: center;
          }

          .twitter-hero-container {
            max-width: 64rem;
            margin-left: auto;
            margin-right: auto;
          }

          .twitter-badge {
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

          .twitter-heading {
            font-size: 3rem;
            font-weight: 700;
            line-height: 1.1;
            margin-bottom: 1.5rem;
          }

          .twitter-subtitle {
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
          .twitter-services {
            padding: 5rem 1rem;
            background: #f9fafb;
          }

          .twitter-container {
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

          .twitter-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
          }

          .twitter-service-card {
            background: white;
            border-radius: 1.5rem;
            padding: 2rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
            border: 1px solid #e2e8f0;
          }

          .twitter-service-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
          }

          .twitter-service-content {
            height: 100%;
            display: flex;
            flex-direction: column;
          }

          .twitter-service-icon {
            width: 4rem;
            height: 4rem;
            border-radius: 1rem;
            background: linear-gradient(135deg, #1D9BF0 0%, #00BA7C 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            margin-bottom: 1.5rem;
          }

          .twitter-service-icon svg {
            width: 2rem;
            height: 2rem;
          }

          .twitter-service-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 1rem;
          }

          .twitter-service-description {
            color: #64748b;
            line-height: 1.6;
            margin-bottom: 1.5rem;
          }

          .twitter-service-features {
            list-style: none;
            padding: 0;
            margin: 0 0 2rem 0;
            flex: 1;
          }

          .twitter-service-feature {
            padding: 0.5rem 0;
            color: #475569;
            position: relative;
            padding-left: 1.5rem;
          }

          .twitter-service-feature:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #10b981;
            font-weight: bold;
          }

          .twitter-service-price {
            font-size: 2rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 1.5rem;
            text-align: center;
          }

          .twitter-service-buttons {
            display: flex;
            gap: 0.75rem;
            margin-top: auto;
          }

          .twitter-service-button {
            background: linear-gradient(135deg, #1D9BF0 0%, #00BA7C 100%);
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 0.75rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            flex: 1;
            font-size: 0.9rem;
          }

          .twitter-service-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(29, 155, 240, 0.3);
          }

          .twitter-service-button-secondary {
            background: transparent;
            color: #1D9BF0;
            border: 2px solid #1D9BF0;
            padding: 0.75rem 1.5rem;
            border-radius: 0.75rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            flex: 1;
            font-size: 0.9rem;
          }

          .twitter-service-button-secondary:hover {
            background: rgba(29, 155, 240, 0.1);
            transform: translateY(-2px);
          }

          /* Process Section */
          .twitter-process {
            padding: 5rem 1rem;
            background: white;
          }

          .twitter-process-container {
            max-width: 80rem;
            margin-left: auto;
            margin-right: auto;
          }

          .twitter-process-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
          }

          .twitter-process-card {
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

          .twitter-process-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 50px rgba(29, 155, 240, 0.15);
            border-color: #cbd5e1;
          }

          .twitter-process-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(29, 155, 240, 0.05), transparent);
            transition: left 0.6s ease;
          }

          .twitter-process-card:hover::before {
            left: 100%;
          }

          .twitter-process-step {
            width: 4rem;
            height: 4rem;
            background: linear-gradient(135deg, #1D9BF0 0%, #00BA7C 100%);
            color: white;
            border-radius: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 1.5rem;
            margin: 0 auto 1.5rem;
            box-shadow: 0 8px 20px rgba(29, 155, 240, 0.3);
          }

          .twitter-process-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 1rem;
          }

          .twitter-process-description {
            color: #64748b;
            line-height: 1.6;
            font-size: 1rem;
          }

          /* CTA Section */
          .twitter-cta {
            padding: 5rem 1rem;
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            color: white;
            text-align: center;
          }

          .twitter-cta-container {
            max-width: 48rem;
            margin-left: auto;
            margin-right: auto;
          }

          .twitter-cta-heading {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
          }

          .twitter-cta-subtitle {
            font-size: 1.25rem;
            opacity: 0.9;
            line-height: 1.6;
            margin-bottom: 3rem;
          }

          .twitter-cta-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
          }

          .twitter-cta-primary {
            background: linear-gradient(135deg, #1D9BF0 0%, #00BA7C 100%);
            color: white;
            border: none;
            padding: 1rem 2rem;
            border-radius: 0.75rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .twitter-cta-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(29, 155, 240, 0.3);
          }

          .twitter-cta-secondary {
            background: transparent;
            color: white;
            border: 2px solid rgba(255, 255, 255, 0.3);
            padding: 1rem 2rem;
            border-radius: 0.75rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .twitter-cta-secondary:hover {
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
            background: linear-gradient(90deg, transparent, rgba(29, 155, 240, 0.05), transparent);
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
            box-shadow: 0 10px 40px rgba(29, 155, 240, 0.1);
            transition: all 0.3s ease;
            border: 1px solid #e2e8f0;
            position: relative;
          }

          .story-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 60px rgba(29, 155, 240, 0.15);
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
            background: linear-gradient(135deg, #1D9BF0 0%, #00BA7C 100%);
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
            color: #1D9BF0;
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
            border-left: 4px solid #1D9BF0;
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
          .twitter-features {
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
            color: #1D9BF0;
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
            background: linear-gradient(135deg, #1D9BF0 0%, #00BA7C 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .section-badge {
            display: inline-block;
            background: rgba(29, 155, 240, 0.1);
            color: #1D9BF0;
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            font-size: 0.875rem;
            font-weight: 600;
            margin-bottom: 1rem;
          }

          @media (max-width: 768px) {
            .twitter-heading {
              font-size: 2rem;
            }
            
            .twitter-cta-heading {
              font-size: 2rem;
            }
            
            .section-heading {
              font-size: 2rem;
            }
            
            .twitter-cta-buttons {
              flex-direction: column;
            }
            
            .twitter-process-grid {
              grid-template-columns: 1fr;
            }

            .twitter-service-buttons {
              flex-direction: column;
            }
          }
        `}
      </style>

      <div className="twitter-page">
        {/* Hero Section */}
        <section className="twitter-hero">
          <div className="twitter-hero-container">
            <div className="twitter-badge">
              <Twitter />
              <span>X (TWITTER) GROWTH SPECIALISTS</span>
            </div>
            <h1 className="twitter-heading">
              Professional X (Twitter) Growth Services
            </h1>
            <p className="twitter-subtitle">
              Transform your Twitter presence with our expert strategies. We
              specialize in organic growth, content creation, and engagement
              optimization to help you build an authentic, high-converting
              audience on the world's most powerful conversation platform.
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
                Why Our Twitter Growth{" "}
                <span className="gradient-heading">Stands Out</span>
              </h2>
              <p className="section-subtitle">
                We don't just grow your followers - we build engaged communities
                that drive real business results and meaningful conversations
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
        <section className="twitter-services">
          <div className="twitter-container">
            <div className="text-center mb-16">
              <h2 className="section-heading">X (Twitter) Growth Services</h2>
              <p className="section-subtitle">
                Comprehensive solutions tailored to boost your Twitter presence
                and drive real results through strategic engagement and content
              </p>
            </div>
            <div className="twitter-grid">
              {twitterServices.map((service: Service, index: number) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="twitter-service-card">
                    <div className="twitter-service-content">
                      <div className="twitter-service-icon">
                        <Icon />
                      </div>
                      <h3 className="twitter-service-title">{service.title}</h3>
                      <p className="twitter-service-description">
                        {service.description}
                      </p>
                      <ul className="twitter-service-features">
                        {service.features.map(
                          (feature: string, featureIndex: number) => (
                            <li
                              key={featureIndex}
                              className="twitter-service-feature"
                            >
                              {feature}
                            </li>
                          )
                        )}
                      </ul>
                      <div className="twitter-service-price">
                        {service.price}
                      </div>
                      <div className="twitter-service-buttons">
                        <button
                          className="twitter-service-button"
                          onClick={() => navigate("/services")}
                        >
                          View All Services
                        </button>
                        <button
                          className="twitter-service-button-secondary"
                          onClick={() => handleOrderNowClick(service.title)}
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features List Section */}
        <section className="twitter-features">
          <div className="features-container">
            <div className="text-center mb-12">
              <div className="section-badge">COMPREHENSIVE FEATURES</div>
              <h2 className="section-heading">
                Everything You Need for{" "}
                <span className="gradient-heading">Twitter Success</span>
              </h2>
            </div>
            <div className="features-grid">
              {twitterFeatures.map((feature: Feature, index: number) => {
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
                See how we've helped businesses like yours achieve Twitter
                growth success and build influential presence
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
        <section className="twitter-process">
          <div className="twitter-process-container">
            <div className="text-center mb-16">
              <div className="section-badge">OUR PROCESS</div>
              <h2 className="section-heading">
                Our Twitter Growth{" "}
                <span className="gradient-heading">Process</span>
              </h2>
              <p className="section-subtitle">
                A strategic approach that delivers measurable Twitter growth,
                engagement, and thought leadership
              </p>
            </div>

            <div className="twitter-process-grid">
              {[
                {
                  step: "1",
                  title: "Profile Audit & Analysis",
                  description:
                    "Comprehensive Twitter profile audit, competitor analysis, and audience research to identify growth opportunities and conversation gaps.",
                },
                {
                  step: "2",
                  title: "Content Strategy Development",
                  description:
                    "Customized tweet strategy, thread planning, and engagement plan tailored to your brand voice and industry.",
                },
                {
                  step: "3",
                  title: "Content Creation & Optimization",
                  description:
                    "High-quality tweet writing, thread creation, and visual content designed to maximize engagement and virality.",
                },
                {
                  step: "4",
                  title: "Growth & Community Building",
                  description:
                    "Strategic engagement, community management, and continuous optimization for sustainable growth.",
                },
              ].map((process, index: number) => (
                <div key={index} className="twitter-process-card">
                  <div className="twitter-process-step">{process.step}</div>
                  <h3 className="twitter-process-title">{process.title}</h3>
                  <p className="twitter-process-description">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="twitter-cta">
          <div className="twitter-cta-container">
            <h2 className="twitter-cta-heading">
              Ready to Dominate X (Twitter)?
            </h2>
            <p className="twitter-cta-subtitle">
              Join hundreds of successful brands that have transformed their
              Twitter presence with our expert growth services and become a
              thought leader in your industry.
            </p>
            <div className="twitter-cta-buttons">
              <button
                onClick={() => handleOrderNowClick("Twitter Growth Service")}
                className="twitter-cta-primary"
              >
                Start Your Twitter Growth
              </button>
              <button
                onClick={() => navigate("/services")}
                className="twitter-cta-secondary"
              >
                View All Services
              </button>
            </div>
          </div>
        </section>

        {/* Order Now Modal */}
        <OrderNowModal
          isOpen={isOrderModalOpen}
          onClose={closeOrderModal}
          defaultPlatform="X (Twitter)"
          defaultService={selectedService}
        />
      </div>
    </>
  );
};
