import React from "react";
import BlogPost from "./BlogPost";

interface CategoryPageProps {
  category: string;
}

const blogPosts = [
  // All posts (same as your previous blogPosts array)
  {
    title: "Content Marketing Hacks",
    date: "2025-09-22",
    content: "Discover tips to boost your content reach...",
    readTime: "3 min read",
    category: "Content Marketing",
    image: "https://via.placeholder.com/400",
  },
  {
    title: "Content That Converts",
    date: "2025-09-23",
    content: "How to write content that engages and sells...",
    readTime: "6 min read",
    category: "Content Marketing",
    image: "https://via.placeholder.com/400",
  },
  {
    title: "Best Practices for Developers",
    date: "2025-09-25",
    content: "Explore coding standards and industry practices...",
    readTime: "4 min read",
    category: "Best Practices",
    image: "https://via.placeholder.com/400",
  },
  {
    title: "Agile Best Practices",
    date: "2025-09-26",
    content: "Agile workflows that maximize efficiency...",
    readTime: "5 min read",
    category: "Best Practices",
    image: "https://via.placeholder.com/400",
  },
  {
    title: "Mastering Digital Strategy",
    date: "2025-09-20",
    content: "Learn strategies for digital transformation and growth...",
    readTime: "5 min read",
    category: "Digital Strategy",
    image: "https://via.placeholder.com/400",
  },
  {
    title: "Future of Digital Strategy",
    date: "2025-09-28",
    content: "AI and automation in shaping strategies...",
    readTime: "7 min read",
    category: "Digital Strategy",
    image: "https://via.placeholder.com/400",
  },
  {
    title: "SMM Basics",
    date: "2025-09-24",
    content: "Everything you need to know about social media marketing...",
    readTime: "4 min read",
    category: "SMM Page",
    image: "https://via.placeholder.com/400",
  },
  {
    title: "Advanced SMM Tactics",
    date: "2025-09-29",
    content: "Level up your SMM campaigns with pro tips...",
    readTime: "6 min read",
    category: "SMM Page",
    image: "https://via.placeholder.com/400",
  },
  {
    title: "Growing with Social Media",
    date: "2025-09-27",
    content: "Techniques to grow your brand online...",
    readTime: "3 min read",
    category: "Social Media",
    image: "https://via.placeholder.com/400",
  },
  {
    title: "Social Media Trends 2025",
    date: "2025-09-30",
    content: "Stay updated with the latest trends...",
    readTime: "5 min read",
    category: "Social Media",
    image: "https://via.placeholder.com/400",
  },
  {
    title: "Influencer Marketing",
    date: "2025-10-01",
    content: "How influencers impact brand growth...",
    readTime: "4 min read",
    category: "Social Media",
    image: "https://via.placeholder.com/400",
  },
  {
    title: "Building a Social Media Calendar",
    date: "2025-10-02",
    content: "Plan posts effectively for maximum reach...",
    readTime: "5 min read",
    category: "Social Media",
    image: "https://via.placeholder.com/400",
  },
];

const CategoryPage: React.FC<CategoryPageProps> = ({ category }) => {
  const filteredPosts = blogPosts.filter((post) => post.category === category);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{category}</h1>
      {filteredPosts.map((post, idx) => (
        <BlogPost
          key={idx}
          title={post.title}
          date={post.date}
          content={post.content}
          readTime={post.readTime}
          category={post.category}
          image={post.image}
        />
      ))}
      {filteredPosts.length === 0 && <p>No posts available in this category.</p>}
    </div>
  );
};

export default CategoryPage;
