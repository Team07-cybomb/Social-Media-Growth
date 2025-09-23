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

  return (
    <div
      className={`bg-white rounded-xl shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full
        ${isHovered ? "transform hover:-translate-y-2 hover:shadow-xl" : ""}
        border border-gray-100`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Blog Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-gray-500 font-medium">{readTime}</span>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 hover:text-primary transition-colors">
          {title}
        </h2>
        <p className="text-sm text-gray-500 mb-4 font-medium">{date}</p>
        <p className="text-gray-700 text-base mb-4 line-clamp-3 flex-1">
          {content}
        </p>

        <div className="mt-auto pt-4">
          <a
            href="#"
            className="text-primary hover:text-primary-dark font-medium text-sm flex items-center group"
          >
            Read More
            <svg
              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
          </a>
        </div>
      </div>
    </div>
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
    "Viral Marketing",
    "Advertising",
  ];

  const blogPosts = [
    {
      title:
        "Why interactive content is critical to user engagement and growing your business",
      date: "18 Sep 2023",
      content:
        "Interactive content has revolutionized how businesses connect with their audience. Unlike passive content, interactive elements require active participation, leading to higher engagement rates, longer time spent on page, and ultimately better conversion rates.",
      readTime: "5 min read",
      category: "Best Practices",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "How to effectively use the tool of AI with Digital Marketing",
      date: "06 Sep 2023",
      content:
        "Artificial Intelligence is no longer a futuristic concept—it's a practical tool that's transforming digital marketing. From personalized recommendations to chatbots and predictive analytics, AI helps marketers deliver more relevant experiences.",
      readTime: "7 min read",
      category: "Digital Strategy",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "The Continued Expansion of Social Commerce",
      date: "28 Aug 2023",
      content:
        "Social commerce is blurring the lines between social media and e-commerce. Platforms like Instagram, TikTok, and Pinterest are becoming shopping destinations, allowing users to discover and purchase products without leaving the app.",
      readTime: "4 min read",
      category: "SMM",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Why You Should Start a Podcast (Audio Social Media)",
      date: "24 Jun 2023",
      content:
        "With the rise of audio-based social media and the continued popularity of podcasts, there's never been a better time to launch your own show. Podcasts offer an intimate way to connect with your audience and establish thought leadership.",
      readTime: "6 min read",
      category: "Content Marketing",
      image:
        "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Leveraging AI for your social media strategy",
      date: "13 Jun 2023",
      content:
        "AI-powered tools can analyze vast amounts of social data to identify trends, optimize posting schedules, and even generate content ideas. Learn how to integrate AI into your social media workflow for better results.",
      readTime: "5 min read",
      category: "SMM",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Discord needs to be one of your social media channels",
      date: "28 May 2023",
      content:
        "While traditionally associated with gaming, Discord has evolved into a powerful community-building platform for brands across various industries. Its organized server structure allows for deep engagement with your most dedicated followers.",
      readTime: "8 min read",
      category: "Social Media",
      image:
        "https://images.unsplash.com/photo-1633265486064-086c21ebc0a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "How to grow your Podcast with Social Media",
      date: "21 May 2023",
      content:
        "Social media and podcasts are a powerful combination. Learn strategies to promote your podcast episodes, engage with listeners, and repurpose audio content into social media snippets that drive subscriptions.",
      readTime: "6 min read",
      category: "Content Marketing",
      image:
        "https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "How's digital marketing in 2023 looking?",
      date: "20 May 2023",
      content:
        "2023 has brought significant changes to the digital marketing landscape. From privacy updates to new platform algorithms, marketers need to adapt their strategies to stay effective in this evolving environment.",
      readTime: "9 min read",
      category: "Digital Strategy",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Social media Checkup – Make sure your strategy is correct",
      date: "06 Mar 2023",
      content:
        "Regular audits of your social media strategy are essential for maintaining effectiveness. This guide walks you through the key metrics to track, content performance evaluation, and adjustment strategies.",
      readTime: "7 min read",
      category: "SMM",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Which social media channels to use for which businesses?",
      date: "05 Feb 2023",
      content:
        "Not all social media platforms are right for every business. This comprehensive breakdown helps you identify which channels align with your target audience, industry, and marketing objectives.",
      readTime: "5 min read",
      category: "Social Media",
      image:
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Do I need a website? Or is social media enough?",
      date: "31 Jan 2023",
      content:
        "While social media profiles are essential for modern businesses, they shouldn't replace a dedicated website. We explore the advantages of each and why you need both in your digital ecosystem.",
      readTime: "6 min read",
      category: "Digital Strategy",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "What if my marketing budget is $0 or close to none?",
      date: "15 Jan 2023",
      content:
        "Limited budget doesn't mean limited results. Discover creative strategies for building your brand presence, generating leads, and driving conversions without significant financial investment.",
      readTime: "8 min read",
      category: "Best Practices",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-16 pt-12">
        <div className="text-center mb-12">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The Social Media Growth Blog
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Expert insights, strategies, and tips to grow your brand through
              social media and digital marketing
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search blog posts..."
                className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white text-gray-900 placeholder-gray-500 text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                  ${
                    activeCategory === category
                      ? "bg-primary text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                  }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <div className="col-span-full text-center py-16">
              <div className="max-w-md mx-auto">
                <svg
                  className="mx-auto h-16 w-16 text-gray-400 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No posts found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="max-w-4xl mx-auto mt-20 pt-16 border-t border-gray-200">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get the latest social media trends, strategies, and tips delivered
            directly to your inbox every week.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary w-full text-base"
          />
          <button className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors whitespace-nowrap w-full sm:w-auto">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-200">
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            © 2023 Social Media Growth Blog. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;

<style>{`
  :root {
    --color-primary: #4f46e5;
    --color-primary-dark: #4338ca;
  }
  
  .bg-primary { background-color: var(--color-primary); }
  .bg-primary-dark { background-color: var(--color-primary-dark); }
  .text-primary { color: var(--color-primary); }
  .hover\:bg-primary-dark:hover { background-color: var(--color-primary-dark); }
  .hover\:text-primary-dark:hover { color: var(--color-primary-dark); }
  .focus\:ring-primary:focus { --tw-ring-color: var(--color-primary); }
  .focus\:border-primary:focus { border-color: var(--color-primary); }
  
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`}</style>;
