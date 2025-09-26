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
import { useNavigate } from "react-router-dom";
interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage() {
  const navigate = useNavigate();
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

  const statsData = [
    {
      number: "500+",
      label: "Happy Clients",
      description: "Satisfied businesses across various industries",
      colorClass: "blue",
      icon: "👥",
    },
    {
      number: "2M+",
      label: "Followers Gained",
      description: "Organic growth across all social platforms",
      colorClass: "green",
      icon: "📈",
    },
    {
      number: "95%",
      label: "Success Rate",
      description: "Clients achieving their growth targets",
      colorClass: "amber",
      icon: "🎯",
    },
    {
      number: "24/7",
      label: "Support",
      description: "Round-the-clock dedicated assistance",
      colorClass: "red",
      icon: "⚡",
    },
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

        .homepage-subtitle-mb {
          margin-bottom: 2rem;
        }

        /* Section Background Colors - UPDATED */
        .homepage-stats {
          background: white;
          border-top: 1px solid #e2e8f0;
        }

        .homepage-how-it-works {
          background: #f9fafb;
        }

        .homepage-benefits {
          background: white;
        }

        .homepage-why-choose-us {
          background: #f9fafb;
        }

        .homepage-testimonials {
          background: white;
        }

        .homepage-cta {
          background: linear-gradient(135deg, rgba(239, 246, 255, 0.9) 0%, rgba(237, 233, 254, 0.9) 100%);
        }

        /* Dark mode support */
        .dark .homepage-stats {
          background: #1f2937;
          border-top: 1px solid #374151;
        }

        .dark .homepage-how-it-works {
          background: #111827;
        }

        .dark .homepage-benefits {
          background: #1f2937;
        }

        .dark .homepage-why-choose-us {
          background: #111827;
        }

        .dark .homepage-testimonials {
          background: #1f2937;
        }

        .dark .homepage-cta {
          background: linear-gradient(135deg, rgba(30, 58, 138, 0.2) 0%, rgba(76, 29, 149, 0.2) 100%);
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
          max-width: 48rem;
          margin: 0 auto;
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

        .homepage-centered-cta-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .homepage-centered-cta-text {
          margin-bottom: 2rem;
          opacity: 0.9;
          font-size: 1.125rem;
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

        /* Stats Card Styles - UPDATED WITH ICONS */
        .stats-card {
          text-align: center;
          padding: 2rem 1.5rem;
          position: relative;
          overflow: hidden;
          animation: fadeInUp 0.6s ease-out both;
        }

        .stats-card-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          opacity: 0.8;
          transform: scale(1);
          transition: transform 0.3s ease;
          position: relative;
          z-index: 2;
          display: block;
        }

        .stats-card:hover .stats-card-icon {
          transform: scale(1.2);
        }

        .stats-card-number {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          transition: transform 0.3s ease;
          position: relative;
          z-index: 2;
        }

        .stats-card:hover .stats-card-number {
          transform: scale(1.1);
        }

        .stats-card-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: var(--foreground);
          position: relative;
          z-index: 2;
        }

        .stats-card-description {
          font-size: 0.875rem;
          color: #6b7280;
          line-height: 1.4;
          margin: 0;
          position: relative;
          z-index: 2;
        }

        .stats-card-radial-bg {
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 50%;
        }

        .stats-card:hover .stats-card-radial-bg {
          opacity: 1;
        }

        /* Stats card color variations */
        .stats-card-blue {
          background: linear-gradient(135deg, #3B82F610 0%, #3B82F605 100%);
          border: 1px solid #3B82F620;
        }
        .stats-card-blue .stats-card-number { color: #3B82F6; }
        .stats-card-blue .stats-card-radial-bg { background: radial-gradient(circle, #3B82F615 0%, transparent 70%); }

        .stats-card-green {
          background: linear-gradient(135deg, #10B98110 0%, #10B98105 100%);
          border: 1px solid #10B98120;
        }
        .stats-card-green .stats-card-number { color: #10B981; }
        .stats-card-green .stats-card-radial-bg { background: radial-gradient(circle, #10B98115 0%, transparent 70%); }

        .stats-card-amber {
          background: linear-gradient(135deg, #F59E0B10 0%, #F59E0B05 100%);
          border: 1px solid #F59E0B20;
        }
        .stats-card-amber .stats-card-number { color: #F59E0B; }
        .stats-card-amber .stats-card-radial-bg { background: radial-gradient(circle, #F59E0B15 0%, transparent 70%); }

        .stats-card-red {
          background: linear-gradient(135deg, #EF444410 0%, #EF444405 100%);
          border: 1px solid #EF444420;
        }
        .stats-card-red .stats-card-number { color: #EF4444; }
        .stats-card-red .stats-card-radial-bg { background: radial-gradient(circle, #EF444415 0%, transparent 70%); }

        /* How It Works Card Styles */
        .how-it-works-step-header {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .how-it-works-icon-container {
          width: 4rem;
          height: 4rem;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1.5rem;
          flex-shrink: 0;
        }

        .how-it-works-step-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--foreground);
          margin: 0 0 0.5rem 0;
        }

        .how-it-works-step-description {
          color: #6b7280;
          line-height: 1.6;
          margin: 0;
          font-size: 1rem;
        }

        /* Benefit Card Icon Styles */
        .benefit-card-icon {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .benefit-card-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--foreground);
        }

        .benefit-card-description {
          color: #6b7280;
          line-height: 1.5;
        }

        /* Testimonial Card Styles */
        .testimonial-rating {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }

        .testimonial-quote {
          width: 1.5rem;
          height: 1.5rem;
          color: #93c5fd;
          margin-bottom: 1rem;
        }

        .testimonial-content {
          color: #6b7280;
          font-style: italic;
          margin-bottom: 1.5rem;
          line-height: 1.5;
          font-size: 0.875rem;
          flex-grow: 1;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .testimonial-avatar {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #93c5fd;
        }

        .testimonial-name {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--foreground);
        }

        .testimonial-company {
          font-size: 0.75rem;
          color: #6b7280;
        }

        /* CTA Button Styles */
        .cta-button {
          background: white;
          color: #2563eb;
          border: none;
          border-radius: 0.5rem;
          padding: 0.75rem 2rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.3s ease;
          font-size: 1rem;
        }

        .cta-button:hover {
          transform: scale(1.05);
        }

        /* Button Container Styles */
        .button-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          justify-content: center;
          align-items: center;
          max-width: 20rem;
          margin: 0 auto;
        }

        .button-full-width {
          width: 100%;
        }

        /* Main Container Styles */
        .homepage-main {
          min-height: 100vh;
          background-color: var(--background);
          color: var(--foreground);
        }

        /* Full Width Content */
        .full-width-content {
          width: 100%;
        }

        /* Benefits Grid Margin */
        .benefits-grid-margin {
          margin-bottom: 3rem;
        }

        /* Text Center Alignment */
        .text-center-align {
          text-align: center;
        }

        /* Animation delays for stats cards */
        .stats-card-delay-0 { animation-delay: 0s; }
        .stats-card-delay-1 { animation-delay: 0.1s; }
        .stats-card-delay-2 { animation-delay: 0.2s; }
        .stats-card-delay-3 { animation-delay: 0.3s; }

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

          .stats-card-number {
            font-size: 2rem;
          }

          .stats-card-title {
            font-size: 1.125rem;
          }

          .stats-card-icon {
            font-size: 2rem;
          }
        }
      `}</style>

      <div className="homepage-main">
        {/* Hero Section */}
        <Hero />

        {/* Our Impact - At a Glance Section - WHITE BACKGROUND */}
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
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className={`homepage-testimonial-card stats-card stats-card-${stat.colorClass} stats-card-delay-${index}`}
                >
                  <div className="stats-card-radial-bg" />
                  <div className="stats-card-icon">{stat.icon}</div>
                  <div className="stats-card-number">{stat.number}</div>
                  <h3 className="stats-card-title">{stat.label}</h3>
                  <p className="stats-card-description">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section - #f9fafb BACKGROUND */}
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
                  style={{ borderLeft: `4px solid ${step.color}` }}
                >
                  <div className="how-it-works-step-header">
                    <div
                      className="how-it-works-icon-container"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}20 0%, ${step.color}10 100%)`,
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
                      <h3 className="how-it-works-step-title">{step.title}</h3>
                      <p className="how-it-works-step-description">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div>
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="checklist-item">
                        <div className="checkmark" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section - WHITE BACKGROUND */}
        <section className="homepage-section homepage-benefits">
          <div className="homepage-container">
            <div className="text-center mb-16">
              <h2 className="homepage-heading">Why Choose SocialGrowth?</h2>
              <p className="homepage-subtitle">
                Experience the difference with our proven approach to social
                media growth
              </p>
            </div>

            <div className="homepage-grid homepage-grid-4 benefits-grid-margin">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-card-icon">
                    <benefit.icon
                      style={{
                        width: "3rem",
                        height: "3rem",
                        color: "#2563eb",
                      }}
                    />
                  </div>
                  <h3 className="benefit-card-title">{benefit.title}</h3>
                  <p className="benefit-card-description">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section - #f9fafb BACKGROUND */}
        <section className="homepage-section homepage-why-choose-us">
          <div className="homepage-centered-section">
            <div className="homepage-centered-content">
              <div className="full-width-content">
                <h2 className="homepage-heading">What Makes Us Different</h2>
                <p className="homepage-subtitle homepage-subtitle-mb">
                  We don't just manage social media - we build sustainable
                  growth engines that drive real business results.
                </p>
                <div className="why-choose-us-list">
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
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="homepage-centered-cta">
                <h3 className="homepage-centered-cta-title">
                  Ready to Transform Your Social Media?
                </h3>
                <p className="homepage-centered-cta-text">
                  Join the hundreds of businesses that have achieved remarkable
                  growth with our strategies.
                </p>
                <button
                  onClick={() => navigate("contact")}
                  className="cta-button"
                >
                  Contact Support Team
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - WHITE BACKGROUND */}
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
                  <div className="testimonial-rating">
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

                  <Quote className="testimonial-quote" />

                  <p className="testimonial-content">"{testimonial.content}"</p>

                  <div className="testimonial-author">
                    <ImageWithFallback
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="testimonial-avatar"
                    />
                    <div>
                      <div className="testimonial-name">{testimonial.name}</div>
                      <div className="testimonial-company">
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
          <div className="homepage-container text-center-align">
            <h2 className="homepage-heading">
              Ready to Grow Your Social Media?
            </h2>
            <p className="homepage-subtitle homepage-subtitle-mb">
              Join hundreds of businesses that have transformed their social
              media presence with our proven strategies.
            </p>
            <div className="button-container">
              <button
                onClick={() => navigate("register")}
                className="homepage-button-primary button-full-width"
              >
                Get Started Today
              </button>
              <button
                onClick={() => navigate("about")}
                className="homepage-button-secondary button-full-width"
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
