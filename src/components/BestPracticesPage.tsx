import React from "react";

const BestPracticesPage: React.FC = () => {
  return (
    <>
      <style>
        {`
          .best-practices-page {
            min-height: 100vh;
            background: linear-gradient(135deg, #fef7ed 0%, #fed7aa 100%);
            padding: 5rem 1rem;
            width: 100vw;
            margin: 0;
            overflow-x: hidden;
          }

          .best-practices-container {
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
            background: linear-gradient(135deg, #d97706 0%, #ea580c 100%);
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

          .practices-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin: 4rem 0;
            padding: 0 2rem;
            max-width: 1400px;
            margin-left: auto;
            margin-right: auto;
          }

          .practice-card {
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

          .practice-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          }

          .practice-title {
            font-size: 1.75rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
          }

          .practice-description {
            color: #64748b;
            font-size: 1.1rem;
            line-height: 1.7;
          }

          .guidelines-section {
            background: white;
            padding: 4rem 2rem;
            margin: 4rem 0;
            text-align: center;
            width: 100%;
          }

          .guidelines-title {
            font-size: 2.5rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 3rem;
          }

          .guidelines-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            text-align: left;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
          }

          .guideline-item {
            display: flex;
            align-items: flex-start;
            gap: 1.5rem;
            padding: 1.5rem;
            background: #fef7ed;
            border-radius: 0.75rem;
            border-left: 6px solid #d97706;
            font-size: 1.1rem;
          }

          .guideline-icon {
            color: #d97706;
            font-weight: bold;
            font-size: 1.5rem;
            min-width: 2rem;
          }

          .benefits-section {
            background: linear-gradient(135deg, #d97706 0%, #ea580c 100%);
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
            background: linear-gradient(135deg, #d97706 0%, #ea580c 100%);
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
            box-shadow: 0 20px 40px rgba(217, 119, 6, 0.4);
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
            background: linear-gradient(135deg, #d97706 0%, #ea580c 100%);
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
            .best-practices-page {
              padding: 3rem 1rem;
            }
            
            .section-heading {
              font-size: 2.5rem;
            }
            
            .practices-grid, .content-grid {
              grid-template-columns: 1fr;
              padding: 0 1rem;
              gap: 1.5rem;
            }
            
            .guidelines-list {
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

            .practice-card, .content-card {
              padding: 2rem;
            }

            .guideline-item {
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
            
            .guidelines-title, .benefits-title, .cta-title {
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

          .section-heading, .content-text, .practices-grid, .guidelines-section, .benefits-section, .cta-section, .content-grid {
            animation: fadeInUp 0.8s ease-out;
          }

          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>

      <div className="best-practices-page">
        <div className="best-practices-container">
          {/* Header Section */}
          <div style={{marginBottom: '5rem', padding: '0 2rem'}}>
            <h2 className="section-heading">
              Best Practices <span className="gradient-text">Blog</span>
            </h2>

            <p className="content-text">
              Discover proven methodologies, industry standards, and expert guidelines for achieving excellence 
              in your projects. Learn from real-world experiences and avoid common pitfalls with our comprehensive 
              best practices collection.
            </p>
          </div>

          {/* Practices Grid */}
          <div className="practices-grid">
            <div className="practice-card">
              <h3 className="practice-title">🚀 Agile Methodology</h3>
              <p className="practice-description">
                Implement agile frameworks that enhance team collaboration, accelerate delivery, 
                and adapt to changing requirements while maintaining quality standards.
              </p>
            </div>

            <div className="practice-card">
              <h3 className="practice-title">🔒 Security First</h3>
              <p className="practice-description">
                Build secure applications from the ground up with industry-standard security practices, 
                vulnerability assessments, and proactive threat mitigation strategies.
              </p>
            </div>

            <div className="practice-card">
              <h3 className="practice-title">📊 Code Quality</h3>
              <p className="practice-description">
                Maintain high code quality through consistent coding standards, comprehensive testing, 
                code reviews, and continuous integration practices.
              </p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="content-grid">
            <div className="content-card">
              <span className="content-category">Development</span>
              <h3 className="content-title">10 Code Review Best Practices Every Team Should Follow</h3>
              <p className="content-excerpt">
                Learn how to conduct effective code reviews that improve code quality, share knowledge, 
                and foster collaboration while maintaining team velocity and morale.
              </p>
              <div className="content-meta">
                <span>8 min read</span>
                <span>Published: Jan 22, 2024</span>
              </div>
            </div>

            <div className="content-card">
              <span className="content-category">Project Management</span>
              <h3 className="content-title">Agile Sprint Planning: Best Practices for Maximum Efficiency</h3>
              <p className="content-excerpt">
                Master the art of sprint planning with techniques that ensure realistic commitments, 
                clear objectives, and sustainable pace for development teams.
              </p>
              <div className="content-meta">
                <span>12 min read</span>
                <span>Published: Jan 18, 2024</span>
              </div>
            </div>

            <div className="content-card">
              <span className="content-category">DevOps</span>
              <h3 className="content-title">CI/CD Pipeline Best Practices for Reliable Deployments</h3>
              <p className="content-excerpt">
                Build robust continuous integration and deployment pipelines that catch issues early, 
                reduce manual errors, and ensure smooth, predictable releases.
              </p>
              <div className="content-meta">
                <span>10 min read</span>
                <span>Published: Jan 14, 2024</span>
              </div>
            </div>

            <div className="content-card">
              <span className="content-category">Security</span>
              <h3 className="content-title">Web Application Security: Essential Practices for 2024</h3>
              <p className="content-excerpt">
                Stay ahead of security threats with updated best practices for authentication, 
                authorization, data protection, and vulnerability prevention in modern web applications.
              </p>
              <div className="content-meta">
                <span>15 min read</span>
                <span>Published: Jan 10, 2024</span>
              </div>
            </div>

            <div className="content-card">
              <span className="content-category">Testing</span>
              <h3 className="content-title">Test Automation Best Practices: Building Maintainable Test Suites</h3>
              <p className="content-excerpt">
                Create automated tests that provide value without becoming a maintenance burden. 
                Learn patterns for writing reliable, scalable, and meaningful test cases.
              </p>
              <div className="content-meta">
                <span>11 min read</span>
                <span>Published: Jan 6, 2024</span>
              </div>
            </div>

            <div className="content-card">
              <span className="content-category">Team Collaboration</span>
              <h3 className="content-title">Remote Team Best Practices: Maintaining Productivity and Connection</h3>
              <p className="content-excerpt">
                Effective strategies for managing remote teams, fostering communication, maintaining 
                culture, and ensuring productivity in distributed work environments.
              </p>
              <div className="content-meta">
                <span>13 min read</span>
                <span>Published: Jan 2, 2024</span>
              </div>
            </div>
          </div>

          {/* Guidelines Section */}
          <div className="full-width-section guidelines-section">
            <h3 className="guidelines-title">Essential Best Practices Framework</h3>
            <div className="guidelines-list">
              <div className="guideline-item">
                <span className="guideline-icon">📝</span>
                <span>Documentation standards and knowledge sharing protocols</span>
              </div>
              <div className="guideline-item">
                <span className="guideline-icon">🧪</span>
                <span>Testing strategies and quality assurance processes</span>
              </div>
              <div className="guideline-item">
                <span className="guideline-icon">🔍</span>
                <span>Code review procedures and quality gates</span>
              </div>
              <div className="guideline-item">
                <span className="guideline-icon">🚀</span>
                <span>Deployment strategies and release management</span>
              </div>
              <div className="guideline-item">
                <span className="guideline-icon">📊</span>
                <span>Performance monitoring and optimization techniques</span>
              </div>
              <div className="guideline-item">
                <span className="guideline-icon">🛡️</span>
                <span>Security protocols and vulnerability management</span>
              </div>
            </div>
          </div>

          {/* Benefits Section - Reduced Height */}
          <div className="full-width-section benefits-section">
            <h3 className="benefits-title">Best Practices Impact</h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-number">50%</div>
                <div className="benefit-text">Fewer Bugs in Production</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-number">40%</div>
                <div className="benefit-text">Faster Development Cycles</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-number">65%</div>
                <div className="benefit-text">Higher Team Productivity</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-number">80%</div>
                <div className="benefit-text">Better Code Maintainability</div>
              </div>
            </div>
          </div>

          {/* Final Content */}
          <div style={{textAlign: 'center', margin: '3rem 0', padding: '0 2rem'}}>
            <p className="content-text">
              Implementing industry best practices is not about following rigid rules, but about adopting 
              proven methods that enhance efficiency, reduce risks, and deliver consistent quality. 
              These practices evolve through collective experience and continuous improvement.
            </p>
          </div>

          {/* CTA Section */}
          <div className="full-width-section cta-section">
            <h3 className="cta-title">Ready to Implement Best Practices?</h3>
            <p className="cta-description">
              Get expert guidance on adopting industry best practices tailored to your specific needs. 
              Transform your processes and achieve higher quality outcomes with proven methodologies.
            </p>
            <button className="cta-button">Start Improving Today</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestPracticesPage;