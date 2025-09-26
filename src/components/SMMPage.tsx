import React from "react";

const SMMPage: React.FC = () => {
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

          .blog-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            margin: 4rem 0;
            padding: 0 2rem;
            max-width: 1400px;
            margin-left: auto;
            margin-right: auto;
          }

          .blog-card {
            background: white;
            padding: 2.5rem;
            border-radius: 1rem;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
            border: 1px solid #e2e8f0;
            transition: all 0.3s ease;
            text-align: left;
            height: 100%;
          }

          .blog-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          }

          .blog-category {
            background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            font-size: 0.9rem;
            font-weight: 600;
            display: inline-block;
            margin-bottom: 1rem;
          }

          .blog-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 1rem;
            line-height: 1.4;
          }

          .blog-excerpt {
            color: #64748b;
            font-size: 1rem;
            line-height: 1.6;
            margin-bottom: 1.5rem;
          }

          .blog-meta {
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
            
            .platform-grid, .blog-grid {
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

            .platform-card, .blog-card {
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

          .section-heading, .content-text, .platform-grid, .strategy-section, .benefits-section, .cta-section, .blog-grid {
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
              Social Media <span className="gradient-text">Marketing Blog</span>
            </h2>

            <p className="content-text">
              Welcome to our Social Media Marketing blog! Here, you'll find insights, strategies, and tips to help your business grow online. 
              We cover everything from content planning, social media trends, and engagement strategies to analytics and advertising techniques.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="blog-grid">
            <div className="blog-card">
              <span className="blog-category">Content Strategy</span>
              <h3 className="blog-title">Mastering Content Planning: A 30-Day Social Media Calendar</h3>
              <p className="blog-excerpt">
                Learn how to create an effective content calendar that keeps your social media channels active and engaging. 
                Discover tools and techniques for planning ahead while staying flexible for real-time opportunities.
              </p>
              <div className="blog-meta">
                <span>8 min read</span>
                <span>Published: Jan 15, 2024</span>
              </div>
            </div>

            <div className="blog-card">
              <span className="blog-category">Trend Analysis</span>
              <h3 className="blog-title">Top Social Media Trends for 2024: What You Need to Know</h3>
              <p className="blog-excerpt">
                Stay ahead of the curve with our comprehensive analysis of emerging social media trends. 
                From AI-powered content to new platform features, learn what's shaping the digital landscape.
              </p>
              <div className="blog-meta">
                <span>12 min read</span>
                <span>Published: Jan 10, 2024</span>
              </div>
            </div>

            <div className="blog-card">
              <span className="blog-category">Engagement</span>
              <h3 className="blog-title">Boost Your Engagement: 10 Proven Strategies That Work</h3>
              <p className="blog-excerpt">
                Increase your social media engagement with these actionable strategies. Learn how to create content 
                that sparks conversations and builds genuine connections with your audience.
              </p>
              <div className="blog-meta">
                <span>6 min read</span>
                <span>Published: Jan 5, 2024</span>
              </div>
            </div>

            <div className="blog-card">
              <span className="blog-category">Analytics</span>
              <h3 className="blog-title">Measuring Success: Key Social Media Metrics That Matter</h3>
              <p className="blog-excerpt">
                Understand which metrics truly matter for your business goals. We break down vanity metrics vs. 
                meaningful KPIs and show you how to track ROI effectively.
              </p>
              <div className="blog-meta">
                <span>10 min read</span>
                <span>Published: Dec 28, 2023</span>
              </div>
            </div>

            <div className="blog-card">
              <span className="blog-category">Advertising</span>
              <h3 className="blog-title">Social Media Advertising: Maximizing Your Budget for Results</h3>
              <p className="blog-excerpt">
                Get the most out of your advertising dollars with our expert tips on targeting, creative optimization, 
                and campaign management across different social platforms.
              </p>
              <div className="blog-meta">
                <span>14 min read</span>
                <span>Published: Dec 20, 2023</span>
              </div>
            </div>

            <div className="blog-card">
              <span className="blog-category">Platform Guide</span>
              <h3 className="blog-title">TikTok for Business: Complete Guide to Viral Marketing</h3>
              <p className="blog-excerpt">
                Unlock the power of TikTok for your business. Learn content strategies, algorithm insights, 
                and best practices for reaching younger demographics effectively.
              </p>
              <div className="blog-meta">
                <span>9 min read</span>
                <span>Published: Dec 15, 2023</span>
              </div>
            </div>
          </div>

          {/* Strategy Section */}
          <div className="full-width-section strategy-section">
            <h3 className="strategy-title">Latest Blog Categories</h3>
            <div className="strategy-list">
              <div className="strategy-item">
                <span className="strategy-icon">📊</span>
                <span>Analytics & Data-driven insights for social media performance optimization</span>
              </div>
              <div className="strategy-item">
                <span className="strategy-icon">🎯</span>
                <span>Advertising strategies and paid social media campaign management</span>
              </div>
              <div className="strategy-item">
                <span className="strategy-icon">💡</span>
                <span>Content creation tips and creative strategy development</span>
              </div>
              <div className="strategy-item">
                <span className="strategy-icon">📈</span>
                <span>Growth hacking techniques and audience expansion strategies</span>
              </div>
              <div className="strategy-item">
                <span className="strategy-icon">🔍</span>
                <span>Platform-specific guides and algorithm updates analysis</span>
              </div>
              <div className="strategy-item">
                <span className="strategy-icon">🔄</span>
                <span>Trend forecasting and industry news updates</span>
              </div>
            </div>
          </div>

          {/* Benefits Section - Reduced Height */}
          <div className="full-width-section benefits-section">
            <h3 className="benefits-title">Blog Statistics</h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-number">250+</div>
                <div className="benefit-text">Articles Published</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-number">50K+</div>
                <div className="benefit-text">Monthly Readers</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-number">95%</div>
                <div className="benefit-text">Reader Satisfaction</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-number">24/7</div>
                <div className="benefit-text">Updated Content</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="full-width-section cta-section">
            <h3 className="cta-title">Stay Updated with Our Latest Insights</h3>
            <p className="cta-description">
              Subscribe to our newsletter and never miss an update. Get weekly social media tips, industry news, 
              and exclusive content delivered directly to your inbox.
            </p>
            <button className="cta-button">Subscribe to Newsletter</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SMMPage;