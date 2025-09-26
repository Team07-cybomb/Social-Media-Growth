import {
  Instagram,
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

interface InstagramGrowthPageProps {
  onNavigate: (page: string) => void;
}

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

export function InstagramGrowthPage({ onNavigate }: InstagramGrowthPageProps) {
  const instagramServices: Service[] = [
    {
      icon: Users,
      title: "Follower Growth",
      description: "Organic follower growth with targeted audience acquisition",
      features: [
        "500-1000 real followers per month",
        "Targeted audience research",
        "Competitor analysis",
        "Growth analytics dashboard",
      ],
      price: "$299/month",
    },
    {
      icon: MessageCircle,
      title: "Engagement Boost",
      description: "Increase likes, comments, and story interactions",
      features: [
        "200%+ engagement rate increase",
        "Strategic comment management",
        "Story engagement tactics",
        "Community building",
      ],
      price: "$199/month",
    },
    {
      icon: TrendingUp,
      title: "Content Strategy",
      description: "Complete content planning and optimization",
      features: [
        "Monthly content calendar",
        "Hashtag strategy",
        "Post optimization",
        "Performance analytics",
      ],
      price: "$399/month",
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
      price: "$149/month",
    },
    {
      icon: Target,
      title: "Instagram Ads",
      description: "Professional ad management and optimization",
      features: [
        "Ad creative strategy",
        "Audience targeting",
        "Budget optimization",
        "ROI tracking",
      ],
      price: "$499/month",
    },
    {
      icon: Rocket,
      title: "Complete Management",
      description: "Full-service Instagram account management",
      features: [
        "Daily post management",
        "Story creation",
        "Engagement management",
        "Growth strategy",
      ],
      price: "$799/month",
    },
  ];

  const successStories: SuccessStory[] = [
    {
      metric: "12.5K+",
      description: "New Followers Gained",
    },
    {
      metric: "287%",
      description: "Engagement Increase",
    },
    {
      metric: "45%",
      description: "Sales Growth",
    },
    {
      metric: "500+",
      description: "Happy Clients",
    },
  ];

  const whyChooseUs: WhyChooseUsItem[] = [
    {
      icon: Shield,
      title: "100% Organic Growth",
      description:
        "No bots, no fake followers. We focus on authentic engagement and real audience building that converts.",
      color: "#405DE6",
    },
    {
      icon: Zap,
      title: "Lightning Fast Results",
      description:
        "See noticeable growth within the first 30 days with our proven strategies and aggressive optimization.",
      color: "#FD1D1D",
    },
    {
      icon: Users2,
      title: "Dedicated Account Manager",
      description:
        "Get personalized attention with a dedicated growth expert who understands your brand and goals.",
      color: "#C13584",
    },
    {
      icon: Rocket,
      title: "Proven Strategies",
      description:
        "Battle-tested methods that have helped 500+ brands achieve Instagram success and viral growth.",
      color: "#F56040",
    },
  ];

  const clientSuccessStories: ClientSuccessStory[] = [
    {
      name: "Sarah's Fashion Boutique",
      growth: "12,500+ followers",
      period: "in 4 months",
      results: "287% engagement increase, 45% sales growth",
      testimonial:
        "The Instagram growth service completely transformed our online presence. We went from 2K to 15K followers with real customers who actually engage with our content!",
      avatar: "👗",
    },
    {
      name: "Mike's Fitness Studio",
      growth: "8,200+ followers",
      period: "in 3 months",
      results: "156% reach increase, 32 new members",
      testimonial:
        "The targeted follower growth brought us genuine fitness enthusiasts. Our class bookings increased by 40% thanks to the strategic content approach.",
      avatar: "💪",
    },
    {
      name: "Organic Food Co.",
      growth: "25,000+ followers",
      period: "in 6 months",
      results: "420% story engagement, 3 viral Reels",
      testimonial:
        "The content strategy and Reels management took our brand viral. We've become a go-to source for healthy recipes in our niche!",
      avatar: "🥑",
    },
  ];

  const instagramFeatures: Feature[] = [
    { icon: CheckCircle, text: "Daily content strategy optimization" },
    { icon: CheckCircle, text: "Real-time trend monitoring" },
    { icon: CheckCircle, text: "Competitor analysis & benchmarking" },
    { icon: CheckCircle, text: "Hashtag performance tracking" },
    { icon: CheckCircle, text: "Engagement rate optimization" },
    { icon: CheckCircle, text: "Story engagement tactics" },
    { icon: CheckCircle, text: "Reels viral potential analysis" },
    { icon: CheckCircle, text: "IGTV strategy development" },
  ];

  return (
    <>
      <style>
        {`
          .instagram-page {
            font-family: system-ui, -apple-system, sans-serif;
          }

          /* Hero Section */
          .instagram-hero {
            padding: 6rem 1rem;
            background: linear-gradient(135deg, #405DE6 0%, #5851DB 25%, #833AB4 50%, #C13584 75%, #E1306C 100%);
            color: white;
            text-align: center;
          }

          .instagram-hero-container {
            max-width: 64rem;
            margin-left: auto;
            margin-right: auto;
          }

          .instagram-badge {
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

          .instagram-heading {
            font-size: 3.5rem;
            font-weight: 700;
            line-height: 1.1;
            margin-bottom: 1.5rem;
          }

          .instagram-subtitle {
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

          /* Services Section - Updated to #f9fafb */
          .instagram-services {
            padding: 5rem 1rem;
            background: #f9fafb;
          }

          .instagram-container {
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
            font-size: 3rem;
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

          .instagram-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
          }

          .instagram-service-card {
            background: white;
            border-radius: 1.5rem;
            padding: 2rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
            border: 1px solid #e2e8f0;
          }

          .instagram-service-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
          }

          .instagram-service-content {
            height: 100%;
            display: flex;
            flex-direction: column;
          }

          .instagram-service-icon {
            width: 4rem;
            height: 4rem;
            border-radius: 1rem;
            background: linear-gradient(135deg, #405DE6 0%, #C13584 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            margin-bottom: 1.5rem;
          }

          .instagram-service-icon svg {
            width: 2rem;
            height: 2rem;
          }

          .instagram-service-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 1rem;
          }

          .instagram-service-description {
            color: #64748b;
            line-height: 1.6;
            margin-bottom: 1.5rem;
          }

          .instagram-service-features {
            list-style: none;
            padding: 0;
            margin: 0 0 2rem 0;
            flex: 1;
          }

          .instagram-service-feature {
            padding: 0.5rem 0;
            color: #475569;
            position: relative;
            padding-left: 1.5rem;
          }

          .instagram-service-feature:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #10b981;
            font-weight: bold;
          }

          .instagram-service-price {
            font-size: 2rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 1.5rem;
            text-align: center;
          }

          .instagram-service-buttons {
            display: flex;
            gap: 0.75rem;
            width: 100%;
          }

          .instagram-service-button {
            background: linear-gradient(135deg, #405DE6 0%, #C13584 100%);
            color: white;
            border: none;
            padding: 0.75rem 1rem;
            border-radius: 0.75rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            flex: 1;
            font-size: 0.9rem;
          }

          .instagram-service-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(192, 38, 211, 0.3);
          }

          .instagram-service-button-secondary {
            background: transparent;
            color: #64748b;
            border: 2px solid #e2e8f0;
            padding: 0.75rem 1rem;
            border-radius: 0.75rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            flex: 1;
            font-size: 0.9rem;
          }

          .instagram-service-button-secondary:hover {
            background: #f8fafc;
            border-color: #cbd5e1;
            transform: translateY(-2px);
          }

          /* Process Section - Updated with box design */
          .instagram-process {
            padding: 5rem 1rem;
            background: white;
          }

          .instagram-process-container {
            max-width: 80rem;
            margin-left: auto;
            margin-right: auto;
          }

          .instagram-process-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
          }

          .instagram-process-card {
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

          .instagram-process-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 50px rgba(192, 38, 211, 0.15);
            border-color: #cbd5e1;
          }

          .instagram-process-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(192, 38, 211, 0.05), transparent);
            transition: left 0.6s ease;
          }

          .instagram-process-card:hover::before {
            left: 100%;
          }

          .instagram-process-step {
            width: 4rem;
            height: 4rem;
            background: linear-gradient(135deg, #405DE6 0%, #C13584 100%);
            color: white;
            border-radius: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 1.5rem;
            margin: 0 auto 1.5rem;
            box-shadow: 0 8px 20px rgba(192, 38, 211, 0.3);
          }

          .instagram-process-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 1rem;
          }

          .instagram-process-description {
            color: #64748b;
            line-height: 1.6;
            font-size: 1rem;
          }

          /* CTA Section */
          .instagram-cta {
            padding: 5rem 1rem;
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            color: white;
            text-align: center;
          }

          .instagram-cta-container {
            max-width: 48rem;
            margin-left: auto;
            margin-right: auto;
          }

          .instagram-cta-heading {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
          }

          .instagram-cta-subtitle {
            font-size: 1.25rem;
            opacity: 0.9;
            line-height: 1.6;
            margin-bottom: 3rem;
          }

          .instagram-cta-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
          }

          .instagram-cta-primary {
            background: linear-gradient(135deg, #405DE6 0%, #C13584 100%);
            color: white;
            border: none;
            padding: 1rem 2rem;
            border-radius: 0.75rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .instagram-cta-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(192, 38, 211, 0.3);
          }

          .instagram-cta-secondary {
            background: transparent;
            color: white;
            border: 2px solid rgba(255, 255, 255, 0.3);
            padding: 1rem 2rem;
            border-radius: 0.75rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .instagram-cta-secondary:hover {
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
            background: linear-gradient(90deg, transparent, rgba(192, 38, 211, 0.05), transparent);
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

          /* Success Stories Section - Updated to #f9fafb */
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
            box-shadow: 0 10px 40px rgba(192, 38, 211, 0.1);
            transition: all 0.3s ease;
            border: 1px solid #e2e8f0;
            position: relative;
          }

          .story-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 60px rgba(192, 38, 211, 0.15);
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
            background: linear-gradient(135deg, #405DE6 0%, #C13584 100%);
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
            color: #C13584;
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
            border-left: 4px solid #C13584;
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
          .instagram-features {
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
            color: #C13584;
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
            background: linear-gradient(135deg, #405DE6 0%, #C13584 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .section-badge {
            display: inline-block;
            background: rgba(192, 38, 211, 0.1);
            color: #C13584;
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            font-size: 0.875rem;
            font-weight: 600;
            margin-bottom: 1rem;
          }

          @media (max-width: 768px) {
            .instagram-heading {
              font-size: 2.5rem;
            }
            
            .instagram-cta-heading {
              font-size: 2rem;
            }
            
            .section-heading {
              font-size: 2rem;
            }
            
            .instagram-cta-buttons {
              flex-direction: column;
            }
            
            .instagram-process-grid {
              grid-template-columns: 1fr;
            }

            .instagram-service-buttons {
              flex-direction: column;
            }
          }
        `}
      </style>

      <div className="instagram-page">
        {/* Hero Section */}
        <section className="instagram-hero">
          <div className="instagram-hero-container">
            <div className="instagram-badge">
              <Instagram />
              <span>INSTAGRAM GROWTH SPECIALISTS</span>
            </div>
            <h1 className="instagram-heading">
              Professional Instagram Growth Services
            </h1>
            <p className="instagram-subtitle">
              Transform your Instagram presence with our expert strategies. We
              specialize in organic growth, content creation, and engagement
              optimization to help you build an authentic, high-converting
              audience.
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
                Why Our Instagram Growth{" "}
                <span className="gradient-heading">Stands Out</span>
              </h2>
              <p className="section-subtitle">
                We don't just grow your followers - we build engaged communities
                that drive real business results
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
        <section className="instagram-services">
          <div className="instagram-container">
            <div className="text-center mb-16">
              <h2 className="section-heading">Instagram Growth Services</h2>
              <p className="section-subtitle">
                Comprehensive solutions tailored to boost your Instagram
                presence and drive real results
              </p>
            </div>
            <div className="instagram-grid">
              {instagramServices.map((service: Service, index: number) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="instagram-service-card">
                    <div className="instagram-service-content">
                      <div className="instagram-service-icon">
                        <Icon />
                      </div>
                      <h3 className="instagram-service-title">
                        {service.title}
                      </h3>
                      <p className="instagram-service-description">
                        {service.description}
                      </p>
                      <ul className="instagram-service-features">
                        {service.features.map(
                          (feature: string, featureIndex: number) => (
                            <li
                              key={featureIndex}
                              className="instagram-service-feature"
                            >
                              {feature}
                            </li>
                          )
                        )}
                      </ul>
                      <div className="instagram-service-price">
                        {service.price}
                      </div>
                      <div className="instagram-service-buttons">
                        <button
                          className="instagram-service-button"
                          onClick={() => onNavigate("register")}
                        >
                          Start Growing
                        </button>
                        <button
                          className="instagram-service-button-secondary"
                          onClick={() => onNavigate("order")}
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
        <section className="instagram-features">
          <div className="features-container">
            <div className="text-center mb-12">
              <div className="section-badge">COMPREHENSIVE FEATURES</div>
              <h2 className="section-heading">
                Everything You Need for{" "}
                <span className="gradient-heading">Instagram Success</span>
              </h2>
            </div>
            <div className="features-grid">
              {instagramFeatures.map((feature: Feature, index: number) => {
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
                See how we've helped businesses like yours achieve Instagram
                growth success
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
        <section className="instagram-process">
          <div className="instagram-process-container">
            <div className="text-center mb-16">
              <div className="section-badge">OUR PROCESS</div>
              <h2 className="section-heading">
                Our Instagram Growth{" "}
                <span className="gradient-heading">Process</span>
              </h2>
              <p className="section-subtitle">
                A strategic approach that delivers measurable Instagram growth
                and engagement
              </p>
            </div>

            <div className="instagram-process-grid">
              {[
                {
                  step: "1",
                  title: "Audit & Analysis",
                  description:
                    "Comprehensive profile audit, competitor analysis, and audience research to identify growth opportunities.",
                },
                {
                  step: "2",
                  title: "Strategy Development",
                  description:
                    "Customized content strategy, posting schedule, and engagement plan tailored to your brand.",
                },
                {
                  step: "3",
                  title: "Content Creation",
                  description:
                    "High-quality visual content, captions, and Stories designed to maximize engagement.",
                },
                {
                  step: "4",
                  title: "Growth & Optimization",
                  description:
                    "Continuous monitoring, A/B testing, and strategy refinement for optimal results.",
                },
              ].map((process, index: number) => (
                <div key={index} className="instagram-process-card">
                  <div className="instagram-process-step">{process.step}</div>
                  <h3 className="instagram-process-title">{process.title}</h3>
                  <p className="instagram-process-description">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="instagram-cta">
          <div className="instagram-cta-container">
            <h2 className="instagram-cta-heading">
              Ready to Dominate Instagram?
            </h2>
            <p className="instagram-cta-subtitle">
              Join hundreds of successful brands that have transformed their
              Instagram presence with our expert growth services.
            </p>
            <div className="instagram-cta-buttons">
              <button
                onClick={() => onNavigate("register")}
                className="instagram-cta-primary"
              >
                Start Your Instagram Growth
              </button>
              <button
                onClick={() => onNavigate("services")}
                className="instagram-cta-secondary"
              >
                View All Services
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
