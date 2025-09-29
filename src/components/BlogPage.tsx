import React, { useState } from "react";
import BlogPost from "./BlogPost";

const blogPosts = [
  // Content Marketing

  {
    title: "Content Marketing Hacks",
    date: "2025-09-22",
    content: "Understand what your audience loves, needs, and engages with the most. Tailor your posts to speak directly to their interests.",
    readTime: "3 min read",
    category: "Content Marketing",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    title: "Content That Converts",
    date: "2025-09-23",
    content: "Learn how to craft powerful content that captivates your audience and drives real sales. Master the art of blending storytelling with strategy to turn readers into loyal customers.",
    readTime: "6 min read",
    category: "Content Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
  },
  // Best Practices
  {
    title: "Best Practices for Developers",
    date: "2025-09-25",
    content: "Explore coding standards and industry best practices to write clean, maintainable, and efficient code. Master techniques that improve quality, collaboration, and long-term project success.",
    readTime: "4 min read",
    category: "Best Practices",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    title: "Agile Best Practices",
    date: "2025-09-26",
    content: "Adopt Agile workflows to streamline processes, enhance collaboration, and deliver value faster. Focus on iterative progress, clear priorities, and continuous improvement for maximum efficiency.",
    readTime: "5 min read",
    category: "Best Practices",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
  },
  // Digital Strategy
  {
    title: "Mastering Digital Strategy",
    date: "2025-09-20",
    content: "Discover effective strategies for digital transformation to modernize operations and drive innovation. Unlock growth by leveraging technology, data, and agile processes to stay ahead in a competitive market.",
    readTime: "5 min read",
    category: "Digital Strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    title: "Future of Digital Strategy",
    date: "2025-09-28",
    content: "Explore how AI and automation are transforming business strategies for smarter, faster decision-making. Harness technology to optimize processes, improve efficiency, and drive sustainable growth.",
    readTime: "7 min read",
    category: "Digital Strategy",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
  },
  // SMM Page
  {
    title: "SMM Basics",
    date: "2025-09-24",
    content: "Discover everything you need to know about social media marketing to grow your brand and engage your audience. Learn strategies, tips, and tools to boost reach, drive engagement, and convert followers into customers.",
    readTime: "4 min read",
    category: "SMM Page",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    title: "Advanced SMM Tactics",
    date: "2025-09-29",
    content: "Level up your social media marketing campaigns with expert tips and proven strategies. Boost engagement, increase reach, and turn your content into measurable results.",
    readTime: "6 min read",
    category: "SMM Page",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
  },
  // Social Media
  {
    title: "Growing with Social Media",
    date: "2025-09-27",
    content: "Discover effective techniques to grow your brand online and stand out in a crowded digital space. Leverage content, social media, SEO, and engagement strategies to attract and retain loyal customers.",
    readTime: "3 min read",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    title: "Social Media Trends 2025",
    date: "2025-09-30",
    content: "Stay updated with the latest trends to keep your strategies relevant and ahead of the competition. Leverage new insights, tools, and innovations to make informed decisions and drive growth.",
    readTime: "5 min read",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    title: "Influencer Marketing",
    date: "2025-10-01",
    content: "Learn how influencers can accelerate brand growth by reaching targeted audiences and building trust. Their authentic endorsements boost visibility, engagement, and customer loyalty.",
    readTime: "4 min read",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    title: "Building a Social Media Calendar",
    date: "2025-10-02",
    content: "Plan your posts strategically to maximize reach and engagement across platforms. Optimize timing, content type, and audience targeting for the best results.",
    readTime: "5 min read",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
  },
];

const categories = [
  "All",
  "Content Marketing",
  "Best Practices",
  "Digital Strategy",
  "SMM Page",
  "Social Media",
];

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <>
      <style>
        {`
          .blog-page {
            min-height: 100vh;
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            padding: 4rem 1rem;
            width: 100%;
            margin: 0;
          }

          .blog-container {
            max-width: 1200px;
            margin: 0 auto;
          }

          .blog-header {
            text-align: center;
            margin-bottom: 3rem;
          }

          .blog-title {
            font-size: 3.5rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .blog-subtitle {
            font-size: 1.2rem;
            color: #64748b;
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.6;
          }

          .category-filters {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1rem;
            margin-bottom: 3rem;
            padding: 0 1rem;
          }

          .category-btn {
            padding: 0.75rem 1.5rem;
            background: white;
            color: #64748b;
            border: 2px solid #e2e8f0;
            border-radius: 2rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 0.95rem;
          }

          .category-btn:hover {
            border-color: #3b82f6;
            color: #3b82f6;
            transform: translateY(-2px);
          }

          .category-btn.active {
            background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
            color: white;
            border-color: transparent;
            box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
          }

          .blog-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            padding: 0 1rem;
          }

          .results-count {
            text-align: center;
            color: #64748b;
            margin-bottom: 2rem;
            font-size: 1.1rem;
          }

          .results-count strong {
            color: #1e293b;
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

          .blog-post {
            animation: fadeInUp 0.6s ease-out;
          }
          
          /* Responsive Design */
          @media (max-width: 768px) {
            .blog-page {
              padding: 2rem 1rem;
            }
            
            .blog-title {
              font-size: 2.5rem;
            }
            
            .blog-grid {
              grid-template-columns: 1fr;
              gap: 1.5rem;
              padding: 0;
            }
            
            .category-filters {
              gap: 0.5rem;
            }
            
            .category-btn {
              padding: 0.6rem 1.2rem;
              font-size: 0.9rem;
            }
          }

          @media (max-width: 480px) {
            .blog-title {
              font-size: 2rem;
            }
            
            .blog-subtitle {
              font-size: 1rem;
            }
            
            .category-filters {
              flex-direction: column;
              align-items: center;
            }
            
            .category-btn {
              width: 200px;
            }
          }

          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>

      <div className="blog-page">
        <div className="blog-container">
          {/* Header Section */}
          <div className="blog-header">
            <h1 className="blog-title">Our Blog</h1>
            <p className="blog-subtitle">
              Discover insights, strategies, and best practices to elevate your digital presence. 
              Stay updated with the latest trends in content marketing, social media, and digital strategy.
            </p>
          </div>

          {/* Category Filter */}
          <div className="category-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="results-count">
            Showing <strong>{filteredPosts.length}</strong> post{filteredPosts.length !== 1 ? 's' : ''} 
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </div>

          {/* Blog Grid */}
          <div className="blog-grid">
            {filteredPosts.map((post, index) => (
              <div key={index} className="blog-post">
                <BlogPost
                  title={post.title}
                  date={post.date}
                  content={post.content}
                  readTime={post.readTime}
                  category={post.category}
                  image={post.image}
                />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              color: '#64748b'
            }}>
              <h3 style={{ color: '#1e293b', marginBottom: '1rem' }}>No posts found</h3>
              <p>Try selecting a different category or check back later for new content.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogPage;