import { Target, Users, Award, TrendingUp } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Rocket, Eye, Headphones } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function AboutPage() {
  const navigate = useNavigate();
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "10+ years in digital marketing with expertise in social media growth strategies.",
      image:
        "https://i.pinimg.com/1200x/45/17/9d/45179d43379464798e63c5006815ac41.jpg",
    },
    {
      name: "Sarah Chen",
      role: "Head of Strategy",
      bio: "Former social media manager for Fortune 500 companies, specializing in B2B growth.",
      image:
        "https://i.pinimg.com/1200x/6e/d0/f3/6ed0f34f94a2ef29b776c99938468378.jpg",
    },
    {
      name: "Eve Rodriguez",
      role: "Content Director",
      bio: "Award-winning content creator with experience across all major social platforms.",
      image:
        "https://i.pinimg.com/736x/0a/d1/93/0ad19309a59be71b028548801ac38353.jpg",
    },
  ];

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
              font-size: 3rem;
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

          /* Team Section - UPDATED: White background */
          .about-team {
            padding: 5rem 1rem;
            background: white;
          }

          .about-team-container {
            max-width: 72rem;
            margin-left: auto;
            margin-right: auto;
          }

          .about-team-heading {
            text-align: center;
            margin-bottom: 4rem;
          }

          .about-team-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          @media (min-width: 768px) {
            .about-team-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (min-width: 1024px) {
            .about-team-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          .about-team-card {
            text-align: center;
            overflow: hidden;
            transition: all 0.3s ease;
            background: white;
            border-radius: 0.5rem;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            border: 1px solid #e2e8f0;
          }

          .about-team-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
          }

          .about-team-image-container {
            aspect-ratio: 1;
            overflow: hidden;
          }

          .about-team-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
          }

          .about-team-card:hover .about-team-image {
            transform: scale(1.1);
          }

          .about-team-content {
            padding: 1.5rem;
          }

          .about-team-name {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.25rem;
            color: #1e293b;
          }

          .about-team-role {
            color: #3b82f6;
            margin-bottom: 0.75rem;
            font-weight: 500;
          }

          .about-team-bio {
            color: #64748b;
            font-size: 0.875rem;
            line-height: 1.5;
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

          .dark .about-team {
            background: #1f2937;
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
            .about-team,
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

        {/* Team Section - UPDATED: White background */}
        <section
          className="about-team animate-fade-in"
          style={{ animationDelay: "1.2s" }}
        >
          <div className="about-team-container">
            <div className="about-team-heading">
              <h2 className="section-heading">Meet Our Team</h2>
              <p className="section-subtitle">
                The experts behind your social media success
              </p>
            </div>

            <div className="about-team-grid">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="about-team-card animate-fade-in"
                  style={{ animationDelay: `${1.4 + index * 0.1}s` }}
                >
                  <div className="about-team-image-container">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="about-team-image"
                    />
                  </div>
                  <div className="about-team-content">
                    <h3 className="about-team-name">{member.name}</h3>
                    <p className="about-team-role">{member.role}</p>
                    <p className="about-team-bio">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="about-cta animate-fade-in"
          style={{ animationDelay: "1.8s" }}
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
