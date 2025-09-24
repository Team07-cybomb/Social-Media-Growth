import { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  onGetStarted: () => void;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  onGetStarted,
}: ServiceCardProps) {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        borderRadius: "0.75rem",
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        border: "1px solid #e5e7eb",
        transition: "all 0.3s ease",
        cursor: "pointer",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow =
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
      }}
    >
      {/* Card Header */}
      <div
        style={{
          padding: "1.5rem 1.5rem 1rem 1.5rem",
          textAlign: "center",
          borderBottom: "1px solid #f3f4f6",
        }}
      >
        <div
          style={{
            width: "4rem",
            height: "4rem",
            backgroundColor: "rgba(37, 99, 235, 0.1)",
            borderRadius: "0.75rem",
            margin: "0 auto 1rem auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon style={{ width: "2rem", height: "2rem", color: "#2563eb" }} />
        </div>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: "600",
            color: "#111827",
            margin: 0,
            lineHeight: "1.4",
          }}
        >
          {title}
        </h3>
      </div>

      {/* Card Content */}
      <div
        style={{
          padding: "1.5rem",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            color: "#6b7280",
            marginBottom: "1.5rem",
            textAlign: "center",
            fontSize: "0.875rem",
            lineHeight: "1.5",
            minHeight: "3.5rem",
          }}
        >
          {description}
        </p>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            flexGrow: 1,
          }}
        >
          {features.map((feature, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  width: "0.375rem",
                  height: "0.375rem",
                  backgroundColor: "#2563eb",
                  borderRadius: "50%",
                  marginTop: "0.5rem",
                  flexShrink: 0,
                }}
              ></div>
              <span
                style={{
                  fontSize: "0.875rem",
                  color: "#6b7280",
                  lineHeight: "1.4",
                }}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Footer */}
      <div
        style={{
          padding: "1.5rem",
          borderTop: "1px solid #f3f4f6",
        }}
      >
        <button
          onClick={onGetStarted}
          style={{
            width: "100%",
            backgroundColor: "transparent",
            color: "#2563eb",
            border: "1px solid #d1d5db",
            borderRadius: "0.5rem",
            padding: "0.75rem 1.5rem",
            fontSize: "0.875rem",
            fontWeight: "500",
            cursor: "pointer",
            transition: "all 0.2s ease",
            outline: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#2563eb";
            e.currentTarget.style.color = "#ffffff";
            e.currentTarget.style.borderColor = "#2563eb";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#2563eb";
            e.currentTarget.style.borderColor = "#d1d5db";
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
