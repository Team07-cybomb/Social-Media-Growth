import { Instagram, Linkedin, Facebook, Twitter, Youtube } from "lucide-react";
import { useNavigate } from "react-router-dom";
interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage() {
  const navigate = useNavigate();
  const services = [
    {
      icon: Instagram,
      title: "Instagram Growth",
      description:
        "Boost your Instagram presence with authentic followers, increased engagement, and strategic content optimization.",
      route: "instagram-growth",
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
      route: "linkedin-growth",
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
      route: "facebook-growth",
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
      route: "twitter-growth",
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
      route: "youtube-growth",
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
      <style>
        {`
          .services-page {
            min-height: 100vh;
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          }

          /* Hero Section - Same as Affiliate Hero */
          .services-hero {
            padding: 5rem 1rem;
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            color: white;
          }

          .services-hero-container {
            max-width: 72rem;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }

          .services-badge {
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

          .services-heading {
            font-size: 2.25rem;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 1.5rem;
            color: white;
          }

          @media (min-width: 768px) {
            .services-heading {
              font-size: 3rem;
            }
          }

          .gradient-text {
            background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .services-subtitle {
            font-size: 1.125rem;
            color: #cbd5e1;
            opacity: 0.9;
            margin-bottom: 2rem;
            max-width: 48rem;
            margin-left: auto;
            margin-right: auto;
            line-height: 1.75;
          }

          /* Services Grid Section - UPDATED TO WHITE BACKGROUND */
          .services-grid-section {
            padding: 5rem 1rem;
            background: white;
          }

          .services-container {
            max-width: 80rem;
            margin-left: auto;
            margin-right: auto;
          }

          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2rem;
            align-items: stretch;
          }

          .service-card {
            border: 1px solid #e2e8f0;
            border-radius: 0.5rem;
            transition: all 0.3s ease;
            height: 100%;
            background: white;
          }

          .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
          }

          .service-content {
            padding: 2rem;
            height: 100%;
            display: flex;
            flex-direction: column;
          }

          .service-icon {
            width: 4rem;
            height: 4rem;
            margin-bottom: 1rem;
            border-radius: 0.75rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
            color: #3b82f6;
          }

          .service-icon svg {
            width: 2rem;
            height: 2rem;
          }

          .service-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 1rem;
          }

          .service-description {
            color: #64748b;
            margin-bottom: 1.5rem;
            flex-grow: 1;
          }

          .service-features {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .service-feature {
            display: flex;
            align-items: center;
            margin-bottom: 0.5rem;
            color: #64748b;
            font-size: 0.875rem;
          }

          .service-feature:before {
            content: "✓";
            color: #10b981;
            font-weight: bold;
            margin-right: 0.5rem;
          }

          .service-button {
            width: 100%;
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 1.5rem;
          }

          .service-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
          }

          /* Process Section - UPDATED TO #f9fafb BACKGROUND */
          .services-process {
            padding: 5rem 1rem;
            background: #f9fafb;
          }

          .services-process-container {
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
              font-size: 2.5rem;
            }
          }

          .section-subtitle {
            font-size: 1.125rem;
            color: #64748b;
            line-height: 1.75;
          }

          .process-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            position: relative;
          }

          @media (min-width: 768px) {
            .process-grid {
              grid-template-columns: repeat(4, 1fr);
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

          /* FAQ Section - UPDATED TO WHITE BACKGROUND */
          .services-faq {
            padding: 5rem 1rem;
            background: white;
          }

          .faq-container {
            max-width: 56rem;
            margin-left: auto;
            margin-right: auto;
          }

          .faq-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          @media (min-width: 768px) {
            .faq-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          .faq-card {
            background-color: #ffffff;
            border-radius: 0.5rem;
            border: 1px solid #e2e8f0;
            padding: 2rem;
            transition: all 0.3s ease;
            height: 100%;
          }

          .faq-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
          }

          .faq-content {
            height: 100%;
            display: flex;
            flex-direction: column;
          }

          .faq-question {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: #1e293b;
            display: flex;
            align-items: flex-start;
            gap: 1rem;
          }

          .faq-q {
            width: 2rem;
            height: 2rem;
            background: rgba(37, 99, 235, 0.1);
            color: #2563eb;
            border-radius: 0.375rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.875rem;
            font-weight: bold;
            flex-shrink: 0;
            margin-top: 0.125rem;
          }

          .faq-answer {
            color: #64748b;
            line-height: 1.5;
            font-size: 0.875rem;
            margin-left: 3rem;
            flex-grow: 1;
          }

          /* CTA Section - Same as Affiliate Final CTA */
          .services-cta {
            padding: 5rem 1rem;
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            color: white;
          }

          .cta-container {
            max-width: 56rem;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }

          .cta-heading {
            font-size: 2.25rem;
            font-weight: 700;
            margin-bottom: 1rem;
          }

          @media (min-width: 768px) {
            .cta-heading {
              font-size: 2.5rem;
            }
          }

          .cta-subtitle {
            font-size: 1.125rem;
            color: #cbd5e1;
            opacity: 0.9;
            margin-bottom: 2rem;
            line-height: 1.75;
          }

          .cta-buttons {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: center;
          }

          @media (min-width: 640px) {
            .cta-buttons {
              flex-direction: row;
            }
          }

          .cta-primary {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            border: none;
            font-weight: 600;
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .cta-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(16, 185, 129, 0.3);
          }

          .cta-secondary {
            background: transparent;
            color: #ffffff;
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            border: 2px solid #ffffff;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .cta-secondary:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: translateY(-2px);
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

          /* Dark mode support for updated sections */
          .dark .services-grid-section {
            background: #1f2937;
          }

          .dark .services-process {
            background: #111827;
          }

          .dark .services-faq {
            background: #1f2937;
          }

          .dark .service-card {
            background: #374151;
            border-color: #4b5563;
          }

          .dark .service-title {
            color: #f9fafb;
          }

          .dark .service-description {
            color: #d1d5db;
          }

          .dark .process-card {
            background: #374151;
            border-color: #4b5563;
          }

          .dark .process-title {
            color: #f9fafb;
          }

          .dark .process-description {
            color: #d1d5db;
          }

          .dark .faq-card {
            background: #374151;
            border-color: #4b5563;
          }

          .dark .faq-question {
            color: #f9fafb;
          }

          .dark .faq-answer {
            color: #d1d5db;
          }

          /* Responsive Design - Same as Affiliate */
          @media (max-width: 768px) {
            .services-hero,
            .services-grid-section,
            .services-process,
            .services-faq,
            .services-cta {
              padding: 3rem 1rem;
            }
            
            .services-heading,
            .section-heading,
            .cta-heading {
              font-size: 2rem;
            }

            .services-grid {
              grid-template-columns: 1fr;
            }

            .process-grid {
              grid-template-columns: 1fr;
            }

            .faq-grid {
              grid-template-columns: 1fr;
            }

            .cta-buttons {
              flex-direction: column;
            }
          }
        `}
      </style>

      <div className="services-page">
        {/* Hero Section - Same dark background as Affiliate */}
        <section className="services-hero">
          <div className="services-hero-container">
            <div className="services-badge">
              <span>PROFESSIONAL SOCIAL MEDIA GROWTH</span>
            </div>
            <h1 className="services-heading">
              Expert Social Media Growth{" "}
              <span className="gradient-text">Services</span>
            </h1>
            <p className="services-subtitle">
              Comprehensive social media growth solutions designed to elevate
              your brand across all major platforms. Each service is tailored to
              your specific goals and industry requirements.
            </p>
          </div>
        </section>

        {/* Services Grid Section - UPDATED TO WHITE BACKGROUND */}
        <section className="services-grid-section">
          <div className="services-container">
            <div className="text-center mb-16">
              <h2 className="section-heading">Our Growth Services</h2>
              <p className="section-subtitle">
                Professional social media growth strategies for every platform
              </p>
            </div>
            <div className="services-grid">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="service-card">
                    <div className="service-content">
                      <div className="service-icon">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="service-title">{service.title}</h3>
                      <p className="service-description">
                        {service.description}
                      </p>
                      <ul className="service-features">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="service-feature">
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <button
                        className="service-button"
                        onClick={() => navigate(`/${service.route}`)}
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section - UPDATED TO #f9fafb BACKGROUND */}
        <section className="services-process">
          <div className="services-process-container">
            <div className="text-center mb-16">
              <h2 className="section-heading">Our Growth Process</h2>
              <p className="section-subtitle">
                A proven 4-step methodology that delivers consistent results
              </p>
            </div>

            <div className="process-grid">
              {[
                {
                  step: "1",
                  title: "Analysis",
                  description:
                    "We analyze your current social media presence and identify growth opportunities.",
                },
                {
                  step: "2",
                  title: "Strategy",
                  description:
                    "Create a customized growth strategy aligned with your business goals and target audience.",
                },
                {
                  step: "3",
                  title: "Implementation",
                  description:
                    "Execute the strategy with consistent content creation and engagement tactics.",
                },
                {
                  step: "4",
                  title: "Optimization",
                  description:
                    "Monitor performance and continuously optimize for better results and ROI.",
                },
              ].map((process, index) => (
                <div key={index} className="process-card">
                  <div className="process-content">
                    <div className="process-step">{process.step}</div>
                    <h3 className="process-title">{process.title}</h3>
                    <p className="process-description">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - UPDATED TO WHITE BACKGROUND */}
        <section className="services-faq">
          <div className="faq-container">
            <div className="text-center mb-16">
              <h2 className="section-heading">Frequently Asked Questions</h2>
              <p className="section-subtitle">
                Everything you need to know about our services
              </p>
            </div>

            <div className="faq-grid">
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
                <div key={index} className="faq-card">
                  <div className="faq-content">
                    <h3 className="faq-question">
                      <span className="faq-q">Q</span>
                      {faq.question}
                    </h3>
                    <p className="faq-answer">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Same dark background as Affiliate Final CTA */}
        <section className="services-cta">
          <div className="cta-container">
            <h2 className="cta-heading">Ready to Grow Your Social Media?</h2>
            <p className="cta-subtitle">
              Let's discuss your goals and create a customized growth strategy
              for your business.
            </p>
            <div className="cta-buttons">
              <button
                onClick={() => navigate("/contact")}
                className="cta-primary"
              >
                Contact Our Team
              </button>
              <button onClick={() => navigate("/")} className="cta-secondary">
                Back to Home
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
