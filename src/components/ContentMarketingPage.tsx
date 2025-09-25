import React from "react";

const ContentMarketingPage: React.FC = () => {
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
            background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
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
            border-left: 6px solid #10b981;
            font-size: 1.1rem;
          }

          .strategy-icon {
            color: #10b981;
            font-weight: bold;
            font-size: 1.5rem;
            min-width: 2rem;
          }

          .benefits-section {
            background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
            padding: 5rem 2rem;
            margin: 4rem 0;
            text-align: center;
            color: white;
            width: 100%;
          }

          .benefits-title {
            font-size: 2.5rem;
            font-weight: 600;
            margin-bottom: 3rem;
          }

          .benefits-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 3rem;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
          }

          .benefit-item {
            text-align: center;
            padding: 1.5rem;
          }

          .benefit-number {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: white;
          }

          .benefit-text {
            font-size: 1.2rem;
            opacity: 0.95;
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
            background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
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
            box-shadow: 0 20px 40px rgba(16, 185, 129, 0.4);
          }

          .content-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            margin: 4rem 0;
            padding: 0 2rem;
            max-width: 1400px;
            margin-left: auto;
            margin-right: auto;
          }

          .content-card {
            background: white;
            padding: 2.5rem;
            border-radius: 1rem;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
            border: 1px solid #e2e8f0;
            transition: all 0.3s ease;
            text-align: left;
            height: 100%;
          }

          .content-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          }

          .content-category {
            background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            font-size: 0.9rem;
            font-weight: 600;
            display: inline-block;
            margin-bottom: 1rem;
          }

          .content-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 1rem;
            line-height: 1.4;
          }

          .content-excerpt {
            color: #64748b;
            font-size: 1rem;
            line-height: 1.6;
            margin-bottom: 1.5rem;
          }

          .content-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #94a3b8;
            font-size: 0.9rem;
            border-top: 1px solid #e2e8f0;
            padding-top: 1rem;
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
            
            .platform-grid, .content-grid {
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

            .platform-card, .content-card {
              padding: 2rem;
            }

            .strategy-item {
              padding: 1.25rem;
            }

            .benefit-number {
              font-size: 2.5rem;
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
              font-size: 2rem;
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

          .section-heading, .content-text, .platform-grid, .strategy-section, .benefits-section, .cta-section, .content-grid {
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
              Content <span className="gradient-text">Marketing Blog</span>
            </h2>

            <p className="content-text">
              Discover powerful content marketing strategies, SEO tips, and real-world examples that drive results. 
              Learn how to create compelling content that attracts, engages, and converts your target audience.
            </p>
          </div>

          {/* Content Types Grid */}
          <div className="content-grid">
            <div className="content-card">
              <span className="content-category">SEO Strategy</span>
              <h3 className="content-title">Mastering Keyword Research: A Complete Guide for 2024</h3>
              <p className="content-excerpt">
                Learn advanced keyword research techniques that uncover hidden opportunities and drive organic traffic. 
                Discover tools and methodologies for comprehensive SEO content planning.
              </p>
              <div className="content-meta">
                <span>12 min read</span>
                <span>Published: Jan 18, 2024</span>
              </div>
            </div>

            <div className="content-card">
              <span className="content-category">Content Creation</span>
              <h3 className="content-title">The Art of Storytelling: Creating Compelling Brand Narratives</h3>
              <p className="content-excerpt">
                Transform your content from ordinary to extraordinary with proven storytelling techniques. 
                Learn how to craft narratives that resonate with your audience and build emotional connections.
              </p>
              <div className="content-meta">
                <span>10 min read</span>
                <span>Published: Jan 12, 2024</span>
              </div>
            </div>

            <div className="content-card">
              <span className="content-category">Strategy</span>
              <h3 className="content-title">Building a Content Marketing Funnel That Converts</h3>
              <p className="content-excerpt">
                Create a comprehensive content marketing funnel that guides prospects from awareness to conversion. 
                Learn how to map content to each stage of the buyer's journey effectively.
              </p>
              <div className="content-meta">
                <span>15 min read</span>
                <span>Published: Jan 8, 2024</span>
              </div>
            </div>

            <div className="content-card">
              <span className="content-category">Analytics</span>
              <h3 className="content-title">Measuring Content ROI: Key Metrics That Matter</h3>
              <p className="content-excerpt">
                Go beyond page views and learn which metrics truly measure content marketing success. 
                Discover how to track engagement, conversion, and revenue attribution for your content.
              </p>
              <div className="content-meta">
                <span>11 min read</span>
                <span>Published: Jan 3, 2024</span>
              </div>
            </div>

            <div className="content-card">
              <span className="content-category">Video Marketing</span>
              <h3 className="content-title">Video Content Strategy: Engaging Audiences in 2024</h3>
              <p className="content-excerpt">
                Leverage the power of video content to boost engagement and conversions. Learn best practices 
                for creating compelling video content across different platforms and formats.
              </p>
              <div className="content-meta">
                <span>9 min read</span>
                <span>Published: Dec 28, 2023</span>
              </div>
            </div>

            <div className="content-card">
              <span className="content-category">Case Study</span>
              <h3 className="content-title">How We Increased Organic Traffic by 300% in 6 Months</h3>
              <p className="content-excerpt">
                Real case study showing the exact strategies and tactics used to achieve massive organic growth. 
                Learn actionable insights you can apply to your own content strategy.
              </p>
              <div className="content-meta">
                <span>14 min read</span>
                <span>Published: Dec 22, 2023</span>
              </div>
            </div>
          </div>

          {/* Strategy Section */}
          <div className="full-width-section strategy-section">
            <h3 className="strategy-title">Content Marketing Focus Areas</h3>
            <div className="strategy-list">
              <div className="strategy-item">
                <span className="strategy-icon">📝</span>
                <span>Content strategy development and editorial calendar planning</span>
              </div>
              <div className="strategy-item">
                <span className="strategy-icon">🔍</span>
                <span>SEO optimization and keyword strategy implementation</span>
              </div>
              <div className="strategy-item">
                <span className="strategy-icon">🎯</span>
                <span>Audience research and persona development for targeted content</span>
              </div>
              <div className="strategy-item">
                <span className="strategy-icon">📊</span>
                <span>Performance analytics and content ROI measurement</span>
              </div>
              <div className="strategy-item">
                <span className="strategy-icon">🔄</span>
                <span>Content repurposing and multi-channel distribution strategies</span>
              </div>
              <div className="strategy-item">
                <span className="strategy-icon">🤝</span>
                <span>Influencer collaboration and guest posting opportunities</span>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="full-width-section benefits-section">
            <h3 className="benefits-title">Content Marketing Impact</h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-number">3x</div>
                <div className="benefit-text">More Leads Than Outbound Marketing</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-number">62%</div>
                <div className="benefit-text">Lower Cost Per Lead</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-number">434%</div>
                <div className="benefit-text">Higher Conversion Rates</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-number">24/7</div>
                <div className="benefit-text">Lead Generation</div>
              </div>
            </div>
          </div>

          {/* Final Content */}
          <div style={{textAlign: 'center', margin: '4rem 0', padding: '0 2rem'}}>
            <p className="content-text">
              Effective content marketing is about creating valuable, relevant content that attracts and retains 
              a clearly defined audience. Whether you're building brand awareness, generating leads, or establishing 
              thought leadership, our strategies deliver measurable results that drive business growth.
            </p>
          </div>

          {/* CTA Section */}
          <div className="full-width-section cta-section">
            <h3 className="cta-title">Ready to Transform Your Content Strategy?</h3>
            <p className="cta-description">
              Let us help you create a content marketing plan that drives real business results. 
              Get expert guidance on content creation, SEO optimization, and performance tracking.
            </p>
            <button className="cta-button">Start Your Content Journey</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentMarketingPage;