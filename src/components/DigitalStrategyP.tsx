// src/pages/DigitalStrategyPage.tsx
import React from "react";

const DigitalStrategyPage: React.FC = () => {
  return (
    <>
      <style>
        {`
          .digital-strategy-page {
            min-height: 100vh;
            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
            padding: 5rem 1rem;
            width: 100vw;
            margin: 0;
            overflow-x: hidden;
          }

          .digital-strategy-container {
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
            background: linear-gradient(135deg, #0369a1 0%, #0ea5e9 100%);
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

          .strategy-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin: 4rem 0;
            padding: 0 2rem;
            max-width: 1400px;
            margin-left: auto;
            margin-right: auto;
          }

          .strategy-card {
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

          .strategy-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          }

          .strategy-title {
            font-size: 1.75rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
          }

          .strategy-description {
            color: #64748b;
            font-size: 1.1rem;
            line-height: 1.7;
          }

          .framework-section {
            background: white;
            padding: 4rem 2rem;
            margin: 4rem 0;
            text-align: center;
            width: 100%;
          }

          .framework-title {
            font-size: 2.5rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 3rem;
          }

          .framework-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            text-align: left;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
          }

          .framework-item {
            display: flex;
            align-items: flex-start;
            gap: 1.5rem;
            padding: 1.5rem;
            background: #f0f9ff;
            border-radius: 0.75rem;
            border-left: 6px solid #0369a1;
            font-size: 1.1rem;
          }

          .framework-icon {
            color: #0369a1;
            font-weight: bold;
            font-size: 1.5rem;
            min-width: 2rem;
          }

          .benefits-section {
            background: linear-gradient(135deg, #0369a1 0%, #0ea5e9 100%);
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
            background: linear-gradient(135deg, #0369a1 0%, #0ea5e9 100%);
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
            box-shadow: 0 20px 40px rgba(3, 105, 161, 0.4);
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
            background: linear-gradient(135deg, #0369a1 0%, #0ea5e9 100%);
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
            .digital-strategy-page {
              padding: 3rem 1rem;
            }
            
            .section-heading {
              font-size: 2.5rem;
            }
            
            .strategy-grid, .content-grid {
              grid-template-columns: 1fr;
              padding: 0 1rem;
              gap: 1.5rem;
            }
            
            .framework-list {
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

            .strategy-card, .content-card {
              padding: 2rem;
            }

            .framework-item {
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
            
            .framework-title, .benefits-title, .cta-title {
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

          .section-heading, .content-text, .strategy-grid, .framework-section, .benefits-section, .cta-section, .content-grid {
            animation: fadeInUp 0.8s ease-out;
          }

          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>

      <div className="digital-strategy-page">
        <div className="digital-strategy-container">
          {/* Header Section */}
          <div style={{marginBottom: '5rem', padding: '0 2rem'}}>
            <h2 className="section-heading">
              Digital <span className="gradient-text">Strategy Blog</span>
            </h2>

            <p className="content-text">
              Explore comprehensive digital strategy frameworks that transform businesses in the digital age. 
              Learn how to align technology, marketing, and business objectives to drive growth, innovation, 
              and competitive advantage in today's rapidly evolving digital landscape.
            </p>
          </div>

          {/* Strategy Grid */}
          <div className="strategy-grid">
            <div className="strategy-card">
              <h3 className="strategy-title">🌐 Digital Transformation</h3>
              <p className="strategy-description">
                Guide your organization through digital transformation with proven frameworks that 
                integrate technology, processes, and people for sustainable competitive advantage.
              </p>
            </div>

            <div className="strategy-card">
              <h3 className="strategy-title">📈 Growth Strategy</h3>
              <p className="strategy-description">
                Develop data-driven growth strategies that leverage digital channels, customer insights, 
                and innovative technologies to scale your business effectively.
              </p>
            </div>

            <div className="strategy-card">
              <h3 className="strategy-title">🤝 Customer Experience</h3>
              <p className="strategy-description">
                Create seamless omnichannel experiences that delight customers at every touchpoint, 
                building loyalty and driving long-term business value.
              </p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="content-grid">
            <div className="content-card">
              <span className="content-category">Transformation</span>
              <h3 className="content-title">Digital Transformation Roadmap: A Step-by-Step Guide</h3>
              <p className="content-excerpt">
                Learn how to create and execute a comprehensive digital transformation strategy that 
                aligns technology investments with business objectives and drives measurable results.
              </p>
              <div className="content-meta">
                <span>14 min read</span>
                <span>Published: Jan 25, 2024</span>
              </div>
            </div>

            <div className="content-card">
              <span className="content-category">Strategy</span>
              <h3 className="content-title">Building a Data-Driven Digital Strategy for 2024</h3>
              <p className="content-excerpt">
                Discover how to leverage data analytics and customer insights to inform your digital 
                strategy decisions and create personalized experiences that drive conversion and loyalty.
              </p>
              <div className="content-meta">
                <span>12 min read</span>
                <span>Published: Jan 20, 2024</span>
              </div>
            </div>

            <div className="content-card">
              <span className="content-category">Technology</span>
              <h3 className="content-title">Choosing the Right Technology Stack for Your Digital Strategy</h3>
              <p className="content-excerpt">
                Navigate the complex landscape of digital tools and platforms to build a technology 
                infrastructure that supports your strategic goals without unnecessary complexity.
              </p>
              <div className="content-meta">
                <span>11 min read</span>
                <span>Published: Jan 15, 2024</span>
              </div>
            </div>

            <div className="content-card">
              <span className="content-category">ROI</span>
              <h3 className="content-title">Measuring Digital Strategy ROI: Beyond Vanity Metrics</h3>
              <p className="content-excerpt">
                Learn which metrics truly matter when evaluating digital strategy success and how to 
                demonstrate tangible business impact to stakeholders and decision-makers.
              </p>
              <div className="content-meta">
                <span>13 min read</span>
                <span>Published: Jan 10, 2024</span>
              </div>
            </div>

            <div className="content-card">
              <span className="content-category">Innovation</span>
              <h3 className="content-title">Innovation in Digital Strategy: Staying Ahead of Disruption</h3>
              <p className="content-excerpt">
                Explore frameworks for fostering innovation within your organization and adapting 
                your digital strategy to stay competitive in rapidly changing markets.
              </p>
              <div className="content-meta">
                <span>10 min read</span>
                <span>Published: Jan 5, 2024</span>
              </div>
            </div>

            <div className="content-card">
              <span className="content-category">Case Study</span>
              <h3 className="content-title">How Digital Strategy Transformed a Traditional Business</h3>
              <p className="content-excerpt">
                Real-world case study showing how a legacy business successfully implemented a digital 
                strategy to increase revenue by 300% and enter new markets within 18 months.
              </p>
              <div className="content-meta">
                <span>16 min read</span>
                <span>Published: Dec 30, 2023</span>
              </div>
            </div>
          </div>

          {/* Framework Section */}
          <div className="full-width-section framework-section">
            <h3 className="framework-title">Digital Strategy Framework Components</h3>
            <div className="framework-list">
              <div className="framework-item">
                <span className="framework-icon">🎯</span>
                <span>Business objective alignment and goal setting</span>
              </div>
              <div className="framework-item">
                <span className="framework-icon">👥</span>
                <span>Customer persona development and journey mapping</span>
              </div>
              <div className="framework-item">
                <span className="framework-icon">📱</span>
                <span>Channel strategy and platform selection</span>
              </div>
              <div className="framework-item">
                <span className="framework-icon">🛠️</span>
                <span>Technology infrastructure and tool implementation</span>
              </div>
              <div className="framework-item">
                <span className="framework-icon">📈</span>
                <span>Performance measurement and KPI tracking</span>
              </div>
              <div className="framework-item">
                <span className="framework-icon">🔄</span>
                <span>Continuous optimization and iteration processes</span>
              </div>
            </div>
          </div>

          {/* Benefits Section - Reduced Height */}
          <div className="full-width-section benefits-section">
            <h3 className="benefits-title">Digital Strategy Impact</h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-number">45%</div>
                <div className="benefit-text">Higher Customer Engagement</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-number">60%</div>
                <div className="benefit-text">Increase in Operational Efficiency</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-number">3.5x</div>
                <div className="benefit-text">Faster Time to Market</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-number">28%</div>
                <div className="benefit-text">Higher Customer Retention</div>
              </div>
            </div>
          </div>

          {/* Final Content */}
          <div style={{textAlign: 'center', margin: '3rem 0', padding: '0 2rem'}}>
            <p className="content-text">
              A well-crafted digital strategy integrates technology, data, and customer insights to create 
              sustainable competitive advantages. By aligning digital initiatives with core business objectives, 
              organizations can drive meaningful growth, improve operational efficiency, and deliver exceptional 
              customer experiences in today's digital-first world.
            </p>
          </div>

          {/* CTA Section */}
          <div className="full-width-section cta-section">
            <h3 className="cta-title">Ready to Develop Your Digital Strategy?</h3>
            <p className="cta-description">
              Let us help you create a comprehensive digital strategy that aligns technology, marketing, 
              and business goals to drive measurable results and sustainable growth for your organization.
            </p>
            <button className="cta-button">Start Your Digital Transformation</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalStrategyPage;