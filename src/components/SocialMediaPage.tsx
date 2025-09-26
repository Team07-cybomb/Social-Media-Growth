import React from "react";

const SocialMediaPage: React.FC = () => {
  return (
    <>
      <style>
        {`
          .social-media-page {
            min-height: 100vh;
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            padding: 5rem 1rem;
            width: 100vw;
            margin: 0;
            overflow-x: hidden;
          }

          .social-media-container {
            max-width: none;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
          }

          .section-heading {
            font-size: 3rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 2rem;
            text-align: center;
          }

          @media (min-width: 1200px) {
            .section-heading {
              font-size: 4rem;
            }
          }

          .gradient-text {
            background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .content-text {
            color: #374151;
            line-height: 1.7;
            font-size: 1.2rem;
            margin-bottom: 2rem;
            text-align: center;
            max-width: 1000px;
            margin-left: auto;
            margin-right: auto;
            padding: 0 2rem;
          }

          .platform-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin: 4rem 0;
            padding: 0 2rem;
            max-width: 1400px;
            margin-left: auto;
            margin-right: auto;
          }

          .platform-card {
            background: white;
            padding: 2.5rem;
            border-radius: 1rem;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
            border: 1px solid #e2e8f0;
            transition: all 0.3s ease;
            text-align: center;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .platform-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          }

          .platform-title {
            font-size: 1.75rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
          }

          .platform-description {
            color: #64748b;
            font-size: 1.1rem;
            line-height: 1.7;
          }

          .strategy-section {
            background: white;
            padding: 4rem 2rem;
            margin: 4rem 0;
            text-align: center;
            width: 100%;
          }

          .strategy-title {
            font-size: 2.5rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 3rem;
          }

          .strategy-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            text-align: left;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
          }

          .strategy-item {
            display: flex;
            align-items: flex-start;
            gap: 1.5rem;
            padding: 1.5rem;
            background: #f8fafc;
            border-radius: 0.75rem;
            border-left: 6px solid #3b82f6;
            font-size: 1.1rem;
          }

          .strategy-icon {
            color: #3b82f6;
            font-weight: bold;
            font-size: 1.5rem;
            min-width: 2rem;
          }

          .benefits-section {
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
            padding: 3rem 2rem;
            margin: 3rem 0;
            text-align: center;
            color: white;
            width: 100%;
          }

          .benefits-title {
            font-size: 2rem;
            font-weight: 600;
            margin-bottom: 2rem;
          }

          .benefits-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            max-width: 1000px;
            margin: 0 auto;
            padding: 0 2rem;
          }

          .benefit-item {
            text-align: center;
            padding: 1rem;
          }

          .benefit-number {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 0.75rem;
            color: white;
          }

          .benefit-text {
            font-size: 1.1rem;
            opacity: 0.95;
            line-height: 1.4;
          }

          .cta-section {
            text-align: center;
            margin: 4rem 0;
            padding: 4rem 2rem;
            background: white;
            width: 100%;
          }

          .cta-title {
            font-size: 2.5rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 1.5rem;
          }

          .cta-description {
            color: #64748b;
            font-size: 1.2rem;
            margin-bottom: 3rem;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
            line-height: 1.6;
          }

          .cta-button {
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
            color: white;
            padding: 1.25rem 3rem;
            border: none;
            border-radius: 0.75rem;
            font-weight: 600;
            font-size: 1.2rem;
            cursor: pointer;
            transition: all 0.3s ease;
            min-width: 250px;
          }

          .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 20px 40px rgba(59, 130, 246, 0.4);
          }

          /* Full-width sections */
          .full-width-section {
            width: 100vw;
            position: relative;
            left: 50%;
            right: 50%;
            margin-left: -50vw;
            margin-right: -50vw;
          }

          /* Global Overrides */
          body {
            margin: 0;
            padding: 0;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            overflow-x: hidden;
          }

          * {
            box-sizing: border-box;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .social-media-page {
              padding: 3rem 1rem;
            }
            
            .section-heading {
              font-size: 2.5rem;
            }
            
            .platform-grid {
              grid-template-columns: 1fr;
              padding: 0 1rem;
              gap: 1.5rem;
            }
            
            .strategy-list {
              grid-template-columns: 1fr;
              padding: 0 1rem;
            }
            
            .benefits-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 1.5rem;
              padding: 0 1rem;
            }
            
            .content-text {
              padding: 0 1rem;
              font-size: 1.1rem;
            }

            .platform-card {
              padding: 2rem;
            }

            .strategy-item {
              padding: 1.25rem;
            }

            .benefit-number {
              font-size: 2rem;
            }

            .benefits-section {
              padding: 2rem 1rem;
              margin: 2rem 0;
            }

            .benefits-title {
              font-size: 1.75rem;
              margin-bottom: 1.5rem;
            }
          }

          @media (max-width: 480px) {
            .benefits-grid {
              grid-template-columns: 1fr;
            }
            
            .section-heading {
              font-size: 2rem;
            }
            
            .strategy-title, .benefits-title, .cta-title {
              font-size: 1.75rem;
            }

            .benefit-number {
              font-size: 1.75rem;
            }

            .benefit-text {
              font-size: 1rem;
            }
          }

          /* Animation for elements */
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

          .section-heading, .content-text, .platform-grid, .strategy-section, .benefits-section, .cta-section {
            animation: fadeInUp 0.8s ease-out;
          }

          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>

      <div className="social-media-page">
        <div className="social-media-container">
          {/* Header Section */}
          <div style={{marginBottom: '5rem', padding: '0 2rem'}}>
            <h2 className="section-heading">
              Social <span className="gradient-text">Media</span> Strategy
            </h2>

            <p className="content-text">
              Social media is one of the most powerful tools for growing your brand and connecting with your audience. 
              Our comprehensive strategies help businesses increase visibility, engage followers, and drive traffic 
              across all major platforms.
            </p>
          </div>

          {/* Platform Cards Grid */}
          <div className="platform-grid">
            <div className="platform-card">
              <h3 className="platform-title">📘 Facebook</h3>
              <p className="platform-description">
                Build community engagement through targeted content, groups, and advertising campaigns 
                that reach your ideal demographic with precision targeting and analytics.
              </p>
            </div>

            <div className="platform-card">
              <h3 className="platform-title">📷 Instagram</h3>
              <p className="platform-description">
                Visual storytelling through posts, stories, and reels to showcase your brand's 
                personality and connect with younger audiences through authentic content.
              </p>
            </div>

            <div className="platform-card">
              <h3 className="platform-title">💼 LinkedIn</h3>
              <p className="platform-description">
                Establish thought leadership and B2B connections through professional content, 
                articles, and network building in the world's largest professional community.
              </p>
            </div>

            <div className="platform-card">
              <h3 className="platform-title">🐦 Twitter</h3>
              <p className="platform-description">
                Real-time engagement, customer service, and trend participation to keep your 
                brand relevant and responsive in fast-moving conversations.
              </p>
            </div>

            <div className="platform-card">
              <h3 className="platform-title">🎵 TikTok</h3>
              <p className="platform-description">
                Viral content creation and short-form video strategies to reach Gen Z and 
                millennial audiences with authentic, engaging messaging that trends.
              </p>
            </div>

            <div className="platform-card">
              <h3 className="platform-title">📹 YouTube</h3>
              <p className="platform-description">
                Long-form content and video marketing to establish expertise and build 
                lasting relationships with your audience through valuable video content.
              </p>
            </div>
          </div>

          {/* Strategy Section */}
          <div className="full-width-section strategy-section">
            <h3 className="strategy-title">Our Proven Strategies</h3>
            <div className="strategy-list">
              <div className="strategy-item">
                <span className="strategy-icon">✓</span>
                <span>Content calendar development and consistent posting schedule across all platforms</span>
              </div>
              <div className="strategy-item">
                <span className="strategy-icon">✓</span>
                <span>Audience analysis and targeted content creation based on demographic insights</span>
              </div>
              <div className="strategy-item">
                <span className="strategy-icon">✓</span>
                <span>Performance analytics and ROI tracking with detailed reporting dashboards</span>
              </div>
              <div className="strategy-item">
                <span className="strategy-icon">✓</span>
                <span>Community management and engagement optimization for maximum interaction</span>
              </div>
              <div className="strategy-item">
                <span className="strategy-icon">✓</span>
                <span>Paid advertising campaign management with A/B testing and optimization</span>
              </div>
              <div className="strategy-item">
                <span className="strategy-icon">✓</span>
                <span>Influencer partnerships and collaborations to expand brand reach</span>
              </div>
            </div>
          </div>

          {/* Benefits Section - Reduced Height */}
          <div className="full-width-section benefits-section">
            <h3 className="benefits-title">Measurable Results</h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-number">89%</div>
                <div className="benefit-text">Increase in Brand Awareness</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-number">67%</div>
                <div className="benefit-text">Higher Engagement Rates</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-number">3.5x</div>
                <div className="benefit-text">More Website Traffic</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-number">42%</div>
                <div className="benefit-text">Cost Reduction in Marketing</div>
              </div>
            </div>
          </div>

          {/* Final Content */}
          <div style={{textAlign: 'center', margin: '3rem 0', padding: '0 2rem'}}>
            <p className="content-text">
              Whether you're looking to launch a new brand presence or optimize your existing social media efforts, 
              our data-driven approach ensures you get the best return on your investment. We combine creative content 
              with analytical insights to deliver results that matter for your business growth and online presence.
            </p>
          </div>

          {/* CTA Section */}
          <div className="full-width-section cta-section">
            <h3 className="cta-title">Ready to Transform Your Social Media Presence?</h3>
            <p className="cta-description">
              Let's create a customized strategy that drives real business results and takes your brand to the next level. 
              Our expert team is ready to help you achieve remarkable growth across all social platforms.
            </p>
            <button className="cta-button">Get Started Today</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMediaPage;