import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Simulate form submission
    toast.success("Message sent successfully! We'll get back to you soon.");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const fields = [
    {
      id: "name",
      label: "Your Name *",
      required: true,
      component: Input,
      placeholder: "Enter your full name",
    },
    {
      id: "email",
      label: "Your Email *",
      required: true,
      component: Input,
      type: "email",
      placeholder: "Enter your email address",
    },
    {
      id: "phone",
      label: "Your Phone (Optional)",
      required: false,
      component: Input,
      type: "tel",
      placeholder: "Enter your phone number",
    },
    {
      id: "message",
      label: "Your Message *",
      required: true,
      component: Textarea,
      placeholder: "Type your message here...",
      rows: 4,
    },
  ];

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundColor: "#f9fafb",
      }}
    >
      <Card
        className="w-full max-w-md border-none"
        style={{
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardHeader className="text-center pb-2">
          <div className="mb-2"></div>
          <h2 className="text-xl font-semibold" style={{ color: "#374151" }}>
            Contact Us
          </h2>
        </CardHeader>

        <CardContent className="pt-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            {fields.map((field) => (
              <div key={field.id} className="space-y-2">
                <Label
                  htmlFor={field.id}
                  className="text-sm font-medium block"
                  style={{
                    color: "#374151",
                    marginBottom: "4px",
                  }}
                >
                  {field.label}
                </Label>

                <field.component
                  id={field.id}
                  name={field.id}
                  value={formData[field.id as keyof typeof formData]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required={field.required}
                  type={field.type || "text"}
                  rows={field.rows}
                  className="w-full"
                  style={{
                    borderColor: "#d1d5db",
                    borderRadius: "6px",
                    borderWidth: "1px",
                    padding: "8px 12px",
                    fontSize: "14px",
                    lineHeight: "1.5",
                    outline: "none",
                    transition: "all 0.2s",
                  }}
                  onFocus={(
                    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
                  ) => {
                    e.target.style.borderColor = "#3b82f6";
                    e.target.style.boxShadow =
                      "0 0 0 3px rgba(59, 130, 246, 0.1)";
                  }}
                  onBlur={(
                    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
                  ) => {
                    e.target.style.borderColor = "#d1d5db";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
            ))}

            <div
              style={{
                height: "1px",
                backgroundColor: "#e5e7eb",
                margin: "20px 0",
              }}
            ></div>

            <Button
              type="submit"
              className="w-full font-medium py-2.5 px-4 rounded-md transition-all duration-300 ease-in-out"
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                color: "white",
                fontSize: "14px",
                fontWeight: "600",
                border: "none",
                cursor: "pointer",
                borderRadius: "0.5rem",
                padding: "1rem 2rem",
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(59, 130, 246, 0.3)";
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Send Message
            </Button>
          </form>

          {/* Custom styles for the form elements */}
          <style>{`
            input, textarea {
              border: 1px solid #d1d5db;
              border-radius: 6px;
              padding: 8px 12px;
              font-size: 14px;
              line-height: 1.5;
              outline: none;
              transition: all 0.2s;
              width: 100%;
              box-sizing: border-box;
            }
            
            input:focus, textarea:focus {
              border-color: #3b82f6;
              box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
            }
            
            input::placeholder, textarea::placeholder {
              color: #9ca3af;
            }
            
            label {
              font-size: 14px;
              font-weight: 500;
              line-height: 1.5;
            }
          `}</style>
        </CardContent>
      </Card>
    </div>
  );
}
