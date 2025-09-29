// OrderNowModal.tsx
import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface OrderFormData {
  serviceName: string;
  username: string;
  email: string;
  phoneNumber: string;
  platform: string;
  basePrice: string;
  minQuantity: string;
  maxQuantity: string;
  deliveryTime: string;
  description: string;
  category: string;
  quality: string;
  refill: boolean;
  refillPeriod: string;
}

interface Service {
  _id: string;
  serviceName: string;
  username: string;
  email: string;
  phoneNumber: string;
  platform: string;
  basePrice: number;
  minQuantity: number;
  maxQuantity: number;
  deliveryTime: string;
  status: string;
  description: string;
  category: string;
  quality: string;
  refill: boolean;
  refillPeriod: string;
  createdAt: string;
  updatedAt: string;
}

interface OrderNowModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlatform?: string;
  defaultService?: string;
}

export function OrderNowModal({
  isOpen,
  onClose,
  defaultPlatform = "",
  defaultService = "",
}: OrderNowModalProps) {
  const [formData, setFormData] = useState<OrderFormData>({
    serviceName: defaultService,
    username: "",
    email: "",
    phoneNumber: "",
    platform: defaultPlatform,
    basePrice: "",
    minQuantity: "",
    maxQuantity: "",
    deliveryTime: "",
    description: "",
    category: "",
    quality: "standard",
    refill: false,
    refillPeriod: "",
  });

  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Fetch services from backend
  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:5000/api/services");
        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }
        const result = await response.json();
        setServices(result.data || []);
      } catch (error) {
        console.error("Error fetching services:", error);
        alert("Failed to load services. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (isOpen) {
      fetchServices();
    }
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Enhanced validation
    const requiredFields = [
      "serviceName",
      "username",
      "email",
      "phoneNumber",
      "platform",
      "basePrice",
      "minQuantity",
      "maxQuantity",
      "deliveryTime",
      "description",
      "category",
    ];

    const missingFields = requiredFields.filter(
      (field) => !formData[field as keyof OrderFormData]
    );

    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(", ")}`);
      setSubmitting(false);
      return;
    }

    // Quantity validation
    if (parseInt(formData.minQuantity) >= parseInt(formData.maxQuantity)) {
      alert("Minimum quantity must be less than maximum quantity");
      setSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please provide a valid email address");
      setSubmitting(false);
      return;
    }

    // Price validation
    if (parseFloat(formData.basePrice) <= 0) {
      alert("Base price must be greater than 0");
      setSubmitting(false);
      return;
    }

    try {
      // Submit service to backend
      const response = await fetch("http://localhost:5000/api/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          basePrice: parseFloat(formData.basePrice),
          minQuantity: parseInt(formData.minQuantity),
          maxQuantity: parseInt(formData.maxQuantity),
          status: "active",
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.msg || "Failed to create service");
      }

      const result = await response.json();

      alert("Service created successfully!");

      // Reset form and close modal
      setFormData({
        serviceName: "",
        username: "",
        email: "",
        phoneNumber: "",
        platform: "",
        basePrice: "",
        minQuantity: "",
        maxQuantity: "",
        deliveryTime: "",
        description: "",
        category: "",
        quality: "standard",
        refill: false,
        refillPeriod: "",
      });
      onClose();
    } catch (error) {
      console.error("Error creating service:", error);
      alert(
        error instanceof Error
          ? error.message
          : "Failed to create service. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const platforms = [
    "Facebook",
    "Instagram",
    "Twitter",
    "YouTube",
    "TikTok",
    "LinkedIn",
    "Other",
  ];

  const categories = [
    "Likes",
    "Followers",
    "Views",
    "Comments",
    "Shares",
    "Subscribers",
    "Social Media",
    "Other",
  ];

  const qualities = ["premium", "standard", "economy"];

  const fields = [
    {
      id: "serviceName",
      label: "Service Name",
      required: true,
      type: "text",
      placeholder: "Enter service name",
    },
    {
      id: "username",
      label: "Username",
      required: true,
      type: "text",
      placeholder: "Enter your username",
    },
    {
      id: "email",
      label: "Email",
      required: true,
      type: "email",
      placeholder: "Enter your email address",
    },
    {
      id: "phoneNumber",
      label: "Phone Number",
      required: true,
      type: "tel",
      placeholder: "Enter your phone number",
    },
    {
      id: "platform",
      label: "Platform",
      required: true,
      type: "select",
      placeholder: "Select platform",
      options: platforms,
    },
    {
      id: "basePrice",
      label: "Base Price ($)",
      required: true,
      type: "number",
      placeholder: "Enter base price",
      step: "0.01",
      min: "0",
    },
    {
      id: "minQuantity",
      label: "Minimum Quantity",
      required: true,
      type: "number",
      placeholder: "Enter minimum quantity",
      min: "0",
    },
    {
      id: "maxQuantity",
      label: "Maximum Quantity",
      required: true,
      type: "number",
      placeholder: "Enter maximum quantity",
      min: "0",
    },
    {
      id: "deliveryTime",
      label: "Delivery Time",
      required: true,
      type: "text",
      placeholder: "e.g., 24 hours, 3-7 days",
    },
    {
      id: "category",
      label: "Category",
      required: true,
      type: "select",
      placeholder: "Select category",
      options: categories,
    },
    {
      id: "quality",
      label: "Quality",
      required: false,
      type: "select",
      placeholder: "Select quality",
      options: qualities,
    },
    {
      id: "description",
      label: "Description",
      required: true,
      type: "textarea",
      placeholder: "Describe your service...",
      rows: 4,
    },
  ];

  if (!isOpen) return null;

  return (
    <>
      <style>
        {`
          .order-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            padding: 1rem;
          }

          .order-modal-content {
            background: white;
            border-radius: 0.75rem;
            width: 100%;
            max-width: 32rem;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          }

          .order-modal-header {
            position: sticky;
            top: 0;
            background: white;
            border-bottom: 1px solid #e5e7eb;
            padding: 1.5rem 1.5rem 1rem;
            border-radius: 0.75rem 0.75rem 0 0;
            z-index: 10;
          }

          .order-modal-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: #374151;
            margin-bottom: 0.25rem;
          }

          .order-modal-subtitle {
            font-size: 0.875rem;
            color: #6b7280;
          }

          .close-button {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 0.375rem;
            color: #6b7280;
            transition: all 0.2s;
          }

          .close-button:hover {
            background-color: #f3f4f6;
            color: #374151;
          }

          .order-modal-body {
            padding: 0 1.5rem 1.5rem;
          }

          .order-modal-form {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .form-field {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
          }

          .form-label {
            font-size: 0.875rem;
            font-weight: 500;
            color: #374151;
            line-height: 1.5;
          }

          .form-input, .form-textarea, .form-select {
            width: 100%;
            border: 1px solid #d1d5db;
            border-radius: 0.375rem;
            padding: 0.5rem 0.75rem;
            font-size: 0.875rem;
            line-height: 1.5;
            outline: none;
            transition: all 0.2s;
            box-sizing: border-box;
          }

          .form-input:focus, .form-textarea:focus, .form-select:focus {
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
          }

          .form-input::placeholder, .form-textarea::placeholder, .form-select::placeholder {
            color: #9ca3af;
          }

          .form-textarea {
            resize: vertical;
            min-height: 80px;
          }

          .form-select {
            background-color: white;
            cursor: pointer;
          }

          .form-select:disabled {
            background-color: #f9fafb;
            cursor: not-allowed;
          }

          .checkbox-field {
            flex-direction: row;
            align-items: center;
            gap: 0.5rem;
          }

          .checkbox-input {
            width: auto;
          }

          .divider {
            height: 1px;
            background-color: #e5e7eb;
            margin: 1.25rem 0;
          }

          .submit-button {
            width: 100%;
            font-weight: 600;
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            border: none;
            cursor: pointer;
            font-size: 0.875rem;
            transition: all 0.3s ease-in-out;
            background: linear-gradient(135deg, #405DE6 0%, #C13584 100%);
            color: white;
          }

          .submit-button:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 20px 40px rgba(192, 38, 211, 0.3);
          }

          .submit-button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }

          .required-star {
            color: #ef4444;
          }

          .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }

          @media (max-width: 640px) {
            .form-row {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>

      <div className="order-modal-overlay" onClick={onClose}>
        <div
          className="order-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="order-modal-header">
            <button className="close-button" onClick={onClose}>
              <X size={20} />
            </button>
            <h2 className="order-modal-title">Create New Service</h2>
            <p className="order-modal-subtitle">
              Fill in the details below to add a new service
            </p>
          </div>

          <div className="order-modal-body">
            <form onSubmit={handleSubmit} className="order-modal-form">
              {fields.map((field) => (
                <div
                  key={field.id}
                  className={`form-field ${
                    field.id === "basePrice" ||
                    field.id === "minQuantity" ||
                    field.id === "maxQuantity"
                      ? "form-row"
                      : ""
                  }`}
                  style={
                    field.id === "basePrice" ||
                    field.id === "minQuantity" ||
                    field.id === "maxQuantity"
                      ? { gridColumn: "1 / -1" }
                      : {}
                  }
                >
                  <label htmlFor={field.id} className="form-label">
                    {field.label}
                    {field.required && (
                      <span className="required-star"> *</span>
                    )}
                  </label>

                  {field.type === "select" ? (
                    <select
                      id={field.id}
                      name={field.id}
                      value={
                        formData[field.id as keyof OrderFormData] as string
                      }
                      onChange={handleChange}
                      required={field.required}
                      className="form-select"
                    >
                      <option value="">{field.placeholder}</option>
                      {field.options?.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      name={field.id}
                      value={
                        formData[field.id as keyof OrderFormData] as string
                      }
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required={field.required}
                      rows={field.rows || 4}
                      className="form-textarea"
                    />
                  ) : (
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      value={
                        formData[field.id as keyof OrderFormData] as string
                      }
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required={field.required}
                      step={field.step}
                      min={field.min}
                      className="form-input"
                    />
                  )}
                </div>
              ))}

              {/* Refill Options */}
              <div className="form-field checkbox-field">
                <input
                  id="refill"
                  name="refill"
                  type="checkbox"
                  checked={formData.refill}
                  onChange={handleChange}
                  className="checkbox-input"
                />
                <label htmlFor="refill" className="form-label">
                  Offer Refill Guarantee
                </label>
              </div>

              {formData.refill && (
                <div className="form-field">
                  <label htmlFor="refillPeriod" className="form-label">
                    Refill Period
                  </label>
                  <input
                    id="refillPeriod"
                    name="refillPeriod"
                    type="text"
                    value={formData.refillPeriod}
                    onChange={handleChange}
                    placeholder="e.g., 30 days, 60 days"
                    className="form-input"
                  />
                </div>
              )}

              <div className="divider"></div>

              <button
                type="submit"
                className="submit-button"
                disabled={submitting || loading}
              >
                {submitting ? "Creating Service..." : "Create Service"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
