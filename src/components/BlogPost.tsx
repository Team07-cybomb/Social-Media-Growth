import React, { useState } from "react";
import { Link } from "react-router-dom";


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
  const [imageError, setImageError] = useState(false);

  const categoryRoutes: Record<string, string> = {
    "Digital Strategy": "/digital-strategy",
    "Content Marketing": "/content-marketing",
    "Best Practices": "/best-practices",
    "SMM Page": "/smm-page",
    "Social Media": "/social-media",
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "1rem",
        marginBottom: "1rem",
        borderRadius: "8px",
        background: "#fff",
      }}
    >
      <div style={{ marginBottom: "1rem" }}>
        <img
          src={imageError ? "https://via.placeholder.com/400" : image}
          alt={title}
          style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
          onError={() => setImageError(true)}
        />
      </div>
      <h2>{title}</h2>
      <p>
        <strong>{readTime}</strong> • {date}
      </p>
      <p>{content}</p>

      <div style={{ marginTop: "1rem" }}>
        {categoryRoutes[category] ? (
          <Link
            to={categoryRoutes[category]}
            style={{ color: "blue", textDecoration: "underline", fontWeight: "bold" }}
          >
            Read More →
          </Link>
        ) : (
          <span style={{ color: "gray" }}>No Page Available</span>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
