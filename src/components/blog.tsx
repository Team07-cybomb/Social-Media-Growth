import React, { useState } from "react";

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
  readTime: string;
  category: string;
  image: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  date,
  content,
  readTime,
  category,
  image,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <style>
        {`
          .blog-post {
            background: white;
            border-radius: 0.5rem;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            height: 100%;
            border: 1px solid #e2e8f0;
          }

          .blog-post:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
          }

          .blog-image-container {
            position: relative;
            overflow: hidden;
            height: 15rem;
            flex-shrink: 0;
            background: #f8fafc;
          }

          .blog-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
          }

          .blog-post:hover .blog-image {
            transform: scale(1.1);
          }

          .blog-category {
            position: absolute;
            top: 1rem;
            left: 1rem;
            padding: 0.375rem 0.875rem;
            background: #3b82f6;
            color: white;
            font-size: 0.75rem;
            font-weight: 500;
            border-radius: 9999px;
            backdrop-filter: blur(4px);
          }

          .blog-overlay {
            position: absolute;
            inset: 0;
            background: black;
            transition: opacity 0.3s ease;
            opacity: 0;
          }

          .blog-post:hover .blog-overlay {
            opacity: 0.1;
          }

          .blog-content {
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            height: 100%;
          }

          .blog-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.75rem;
          }

          .blog-meta-item {
            font-size: 0.75rem;
            color: #64748b;
            font-weight: 500;
          }

          .blog-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 0.75rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            transition: color 0.2s ease;
            line-height: 1.4;
          }

          .blog-post:hover .blog-title {
            color: #3b82f6;
          }

          .blog-excerpt {
            color: #64748b;
            font-size: 0.875rem;
            margin-bottom: 1rem;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            line-height: 1.625;
          }

          .blog-spacer {
            flex-grow: 1;
          }

          .blog-read-more {
            padding-top: 1rem;
            border-top: 1px solid #f1f5f9;
          }

          .blog-read-button {
            color: #3b82f6;
            font-weight: 500;
            font-size: 0.875rem;
            display: flex;
            align-items: center;
            transition: color 0.2s ease;
            width: 100%;
            text-align: left;
            background: none;
            border: none;
            cursor: pointer;
          }

          .blog-read-button:hover {
            color: #2563eb;
          }

          .blog-read-button svg {
            width: 1rem;
            height: 1rem;
            margin-left: 0.5rem;
            transition: transform 0.2s ease;
          }

          .blog-read-button:hover svg {
            transform: translateX(0.25rem);
          }

          /* Blog Page Styles */
          .blog-page {
            min-height: 100vh;
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            padding: 5rem 1rem;
          }

          .blog-container {
            max-width: 72rem;
            margin-left: auto;
            margin-right: auto;
          }

          .blog-hero {
            margin-bottom: 4rem;
            text-align: center;
          }

          .blog-main-title {
            font-size: 3rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 1.5rem;
            line-height: 1.2;
          }

          .blog-subtitle {
            font-size: 1.125rem;
            color: #64748b;
            max-width: 48rem;
            margin-left: auto;
            margin-right: auto;
            line-height: 1.75;
          }

          .blog-search-container {
            max-width: 42rem;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 3rem;
          }

          .blog-search {
            position: relative;
          }

          .blog-search-input {
            display: block;
            width: 100%;
            height: 3.5rem;
            padding-left: 3rem;
            padding-right: 1rem;
            border: 1px solid #cbd5e1;
            border-radius: 0.5rem;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
            background: white;
            color: #1e293b;
            font-size: 1rem;
            transition: all 0.3s ease;
          }

          .blog-search-input:focus {
            outline: none;
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
          }

          .blog-categories {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.75rem;
            margin-bottom: 4rem;
          }

          .blog-category-button {
            padding: 0.75rem 1.5rem;
            border-radius: 9999px;
            font-size: 0.875rem;
            font-weight: 500;
            transition: all 0.3s ease;
            border: 1px solid #e2e8f0;
            background: white;
            color: #475569;
            cursor: pointer;
          }

          .blog-category-button.active {
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
            color: white;
            box-shadow: 0 4px 6px rgba(59, 130, 246, 0.2);
            border-color: transparent;
          }

          .blog-category-button:hover:not(.active) {
            background: #f8fafc;
            border-color: #cbd5e1;
          }

          .blog-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          @media (min-width: 768px) {
            .blog-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (min-width: 1024px) {
            .blog-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          .blog-no-results {
            grid-column: 1 / -1;
            text-align: center;
            padding: 4rem 0;
          }

          .blog-no-results svg {
            margin-left: auto;
            margin-right: auto;
            height: 4rem;
            width: 4rem;
            color: #94a3b8;
            margin-bottom: 1rem;
          }

          .blog-no-results-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 0.5rem;
          }

          .blog-no-results-text {
            color: #64748b;
            font-size: 1rem;
          }

          .blog-newsletter {
            max-width: 56rem;
            margin-left: auto;
            margin-right: auto;
            margin-top: 5rem;
            padding-top: 3rem;
            border-top: 1px solid #e2e8f0;
            text-align: center;
          }

          .blog-newsletter-title {
            font-size: 2.25rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 1rem;
          }

          .blog-newsletter-text {
            font-size: 1.125rem;
            color: #64748b;
            max-width: 42rem;
            margin-left: auto;
            margin-right: auto;
            line-height: 1.75;
            margin-bottom: 2rem;
          }

          .blog-newsletter-form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: center;
            align-items: center;
            max-width: 28rem;
            margin-left: auto;
            margin-right: auto;
          }

          .blog-newsletter-input {
            padding: 1rem 1.5rem;
            border: 1px solid #cbd5e1;
            border-radius: 0.5rem;
            font-size: 1rem;
            width: 100%;
            transition: all 0.3s ease;
          }

          .blog-newsletter-input:focus {
            outline: none;
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
          }

          .blog-newsletter-button {
            padding: 1rem 2rem;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            font-weight: 600;
            border-radius: 0.5rem;
            border: none;
            transition: all 0.3s ease;
            white-space: nowrap;
            width: 100%;
            cursor: pointer;
          }

          .blog-newsletter-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(16, 185, 129, 0.2);
          }

          @media (min-width: 640px) {
            .blog-newsletter-form {
              flex-direction: row;
            }
            
            .blog-newsletter-button {
              width: auto;
            }
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
            .blog-page {
              padding: 3rem 1rem;
            }
            
            .blog-main-title {
              font-size: 2.25rem;
            }
            
            .blog-hero {
              margin-bottom: 2rem;
            }
            
            .blog-newsletter {
              margin-top: 4rem;
              padding-top: 3rem;
            }
            
            .blog-newsletter-title {
              font-size: 1.875rem;
            }

            .blog-categories {
              margin-bottom: 2rem;
            }
          }

          /* Animation for blog posts */
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .blog-post {
            animation: fadeInUp 0.6s ease-out;
          }

          .blog-post:nth-child(1) { animation-delay: 0.1s; }
          .blog-post:nth-child(2) { animation-delay: 0.2s; }
          .blog-post:nth-child(3) { animation-delay: 0.3s; }
          .blog-post:nth-child(4) { animation-delay: 0.4s; }
          .blog-post:nth-child(5) { animation-delay: 0.5s; }
          .blog-post:nth-child(6) { animation-delay: 0.6s; }
        `}
      </style>

      <div 
        className="blog-post"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Blog Image Container */}
        <div className="blog-image-container">
          <img
            src={imageError ? "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" : image}
            alt={title}
            className="blog-image"
            onError={() => setImageError(true)}
          />
          <span className="blog-category">{category}</span>
          <div className="blog-overlay" />
        </div>

        {/* Content Container */}
        <div className="blog-content">
          {/* Meta Information */}
          <div className="blog-meta">
            <span className="blog-meta-item">{readTime}</span>
            <span className="blog-meta-item">{date}</span>
          </div>

          {/* Title */}
          <h2 className="blog-title">{title}</h2>

          {/* Content Excerpt */}
          <p className="blog-excerpt">{content}</p>

          {/* Spacer pushes Read More to bottom */}
          <div className="blog-spacer"></div>

          {/* Read More Link */}
          <div className="blog-read-more">
            <button className="blog-read-button">
              Read More
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Digital Strategy",
    "Content Marketing",
    "Social Media",
    "Best Practices",
    "SMM",
    "Viral Marketing", // No posts for this category
    "Advertising", // No posts for this category
  ];

  const blogPosts = [
    {
      title: "Why interactive content is critical to user engagement and growing your business",
      date: "18 Sep 2023",
      content: "Interactive content has revolutionized how businesses connect with their audience. Unlike passive content, interactive elements require active participation, leading to higher engagement rates, longer time spent on page, and ultimately better conversion rates.",
      readTime: "5 min read",
      category: "Best Practices",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "How to effectively use the tool of AI with Digital Marketing",
      date: "06 Sep 2023",
      content: "Artificial Intelligence is no longer a futuristic concept—it's a practical tool that's transforming digital marketing. From personalized recommendations to chatbots and predictive analytics, AI helps marketers deliver more relevant experiences.",
      readTime: "7 min read",
      category: "Digital Strategy",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "The Continued Expansion of Social Commerce",
      date: "28 Aug 2023",
      content: "Social commerce is blurring the lines between social media and e-commerce. Platforms like Instagram, TikTok, and Pinterest are becoming shopping destinations, allowing users to discover and purchase products without leaving the app.",
      readTime: "4 min read",
      category: "SMM",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Why You Should Start a Podcast (Audio Social Media)",
      date: "24 Jun 2023",
      content: "With the rise of audio-based social media and the continued popularity of podcasts, there's never been a better time to launch your own show. Podcasts offer an intimate way to connect with your audience and establish thought leadership.",
      readTime: "6 min read",
      category: "Content Marketing",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Leveraging AI for your social media strategy",
      date: "13 Jun 2023",
      content: "AI-powered tools can analyze vast amounts of social data to identify trends, optimize posting schedules, and even generate content ideas. Learn how to integrate AI into your social media workflow for better results.",
      readTime: "5 min read",
      category: "SMM",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Discord needs to be one of your social media channels",
      date: "28 May 2023",
      content: "While traditionally associated with gaming, Discord has evolved into a powerful community-building platform for brands across various industries. Its organized server structure allows for deep engagement with your most dedicated followers.",
      readTime: "8 min read",
      category: "Social Media",
      image: "https://images.unsplash.com/photo-1633265486064-086c21ebc0a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "How to grow your Podcast with Social Media",
      date: "21 May 2023",
      content: "Social media and podcasts are a powerful combination. Learn strategies to promote your podcast episodes, engage with listeners, and repurpose audio content into social media snippets that drive subscriptions.",
      readTime: "6 min read",
      category: "Content Marketing",
      image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "How's digital marketing in 2023 looking?",
      date: "20 May 2023",
      content: "2023 has brought significant changes to the digital marketing landscape. From privacy updates to new platform algorithms, marketers need to adapt their strategies to stay effective in this evolving environment.",
      readTime: "9 min read",
      category: "Digital Strategy",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Social media Checkup – Make sure your strategy is correct",
      date: "06 Mar 2023",
      content: "Regular audits of your social media strategy are essential for maintaining effectiveness. This guide walks you through the key metrics to track, content performance evaluation, and adjustment strategies.",
      readTime: "7 min read",
      category: "SMM",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Which social media channels to use for which businesses?",
      date: "05 Feb 2023",
      content: "Not all social media platforms are right for every business. This comprehensive breakdown helps you identify which channels align with your target audience, industry, and marketing objectives.",
      readTime: "5 min read",
      category: "Social Media",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Do I need a website? Or is social media enough?",
      date: "31 Jan 2023",
      content: "While social media profiles are essential for modern businesses, they shouldn't replace a dedicated website. We explore the advantages of each and why you need both in your digital ecosystem.",
      readTime: "6 min read",
      category: "Digital Strategy",
      image: "https://images.unsplash.com/photo-1683721003111-070bcc053d8b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "What if my marketing budget is $0 or close to none?",
      date: "15 Jan 2023",
      content: "Limited budget doesn't mean limited results. Discover creative strategies for building your brand presence, generating leads, and driving conversions without significant financial investment.",
      readTime: "8 min read",
      category: "Best Practices",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  const emptyCategories = ["Viral Marketing", "Advertising"];
  
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Special handling for categories with no posts
    if (emptyCategories.includes(activeCategory)) {
      return false; // Always return false for these categories to show no posts
    }
    
    return matchesCategory && matchesSearch;
  });

  const getNoResultsMessage = () => {
    if (emptyCategories.includes(activeCategory)) {
      return {
        title: "No posts available for this category yet",
        text: "Check back soon for new content in this category!"
      };
    } else if (searchQuery) {
      return {
        title: "No posts found",
        text: "Try adjusting your search criteria or browse different categories"
      };
    } else {
      return {
        title: "No posts found",
        text: "Try selecting a different category"
      };
    }
  };

  const noResultsMessage = getNoResultsMessage();

  return (
    <div className="blog-page">
      <div className="blog-container">
        {/* Hero Section */}
        <div className="blog-hero">
          <div className="blog-hero-content">
            <h1 className="blog-main-title">
              The Social Media Growth Blog
            </h1>
            <p className="blog-subtitle">
              Expert insights, strategies, and tips to grow your brand through social media and digital marketing
            </p>
          </div>

          {/* Search Bar */}
          <div className="blog-search-container">
            <div className="blog-search">
              <input
                type="text"
                placeholder="Search blog posts..."
                className="blog-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="blog-categories">
            {categories.map((category) => (
              <button
                key={category}
                className={`blog-category-button ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="blog-grid">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <BlogPost
                key={index}
                title={post.title}
                date={post.date}
                content={post.content}
                readTime={post.readTime}
                category={post.category}
                image={post.image}
              />
            ))
          ) : (
            <div className="blog-no-results">
              {/* <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg> */}
              <h3 className="blog-no-results-title">{noResultsMessage.title}</h3>
              <p className="blog-no-results-text">{noResultsMessage.text}</p>
            </div>
          )}
        </div>

        {/* Newsletter Section */}
        <div className="blog-newsletter">
          <div className="blog-hero-content">
            <h2 className="blog-newsletter-title">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="blog-newsletter-text">
              Get the latest social media trends, strategies, and tips delivered directly to your inbox every week.
            </p>
          </div>

          <div className="blog-newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              className="blog-newsletter-input"
            />
            <button className="blog-newsletter-button">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;