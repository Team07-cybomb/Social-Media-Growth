import { useState, useEffect } from "react";
import {
  X,
  Users,
  TrendingUp,
  MessageCircle,
  BarChart3,
  Target,
  Rocket,
  Heart,
  Calendar,
} from "lucide-react";

interface OrderNowModalProps {
  isOpen: boolean;
  onClose: () => void;
  service?: string;
  serviceBudget?: string;
  platform?: string;
}

interface ServiceOption {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  icon: React.ComponentType<any>;
}

interface UserData {
  name: string;
  email: string;
  phone: string;
}

export const OrderNowFacebook = ({
  isOpen,
  onClose,
  service,
  serviceBudget = "",
  platform = "Facebook",
}: OrderNowModalProps) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: service || "",
    serviceBudget: serviceBudget || "",
    budget: serviceBudget || "",
    timeline: "",
    goals: "",
    message: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Fetch user data from localStorage when modal opens
  useEffect(() => {
    if (isOpen) {
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");

      console.log("Token found:", !!token);
      console.log("User data found:", !!user);
      console.log("Service budget:", serviceBudget);

      if (token && user) {
        try {
          const userObj = JSON.parse(user);
          console.log("User data loaded:", userObj);

          const userPhone =
            userObj.phone || userObj.phoneNumber || userObj.userPhone || "";

          setUserData({
            name: userObj.name || "",
            email: userObj.email || "",
            phone: userPhone,
          });

          setFormData((prev) => ({
            ...prev,
            name: userObj.name || "",
            email: userObj.email || "",
            phone: userPhone,
            serviceBudget: serviceBudget || "",
            budget: serviceBudget || "",
          }));

          console.log("Service budget pre-filled:", serviceBudget);
        } catch (error) {
          console.error("Error parsing user data:", error);
        }
      }
    }
  }, [isOpen, serviceBudget]);

  // ✅ Reset form when service changes
  useEffect(() => {
    if (service) {
      setFormData((prev) => ({
        ...prev,
        service: service,
      }));
    }
  }, [service]);

  const serviceOptions: ServiceOption[] = [
    {
      id: "page-likes-growth",
      name: "Page Likes Growth",
      description:
        "Organic page likes growth with targeted audience acquisition",
      price: "$249/month",
      features: [
        "500-1000 real page likes per month",
        "Targeted audience research",
        "Competitor page analysis",
        "Growth analytics dashboard",
      ],
      icon: Users,
    },
    {
      id: "engagement-boost",
      name: "Engagement Boost",
      description: "Increase post likes, comments, and shares",
      price: "$179/month",
      features: [
        "200%+ engagement rate increase",
        "Strategic comment management",
        "Post engagement tactics",
        "Community building",
      ],
      icon: MessageCircle,
    },
    {
      id: "content-strategy",
      name: "Content Strategy",
      description: "Complete Facebook content planning and optimization",
      price: "$349/month",
      features: [
        "Monthly content calendar",
        "Post timing optimization",
        "Content performance analysis",
        "Viral content strategy",
      ],
      icon: TrendingUp,
    },
    {
      id: "analytics-insights",
      name: "Analytics & Insights",
      description: "Deep Facebook analytics and performance tracking",
      price: "$129/month",
      features: [
        "Weekly performance reports",
        "Audience insights analysis",
        "Competitor benchmarking",
        "Growth recommendations",
      ],
      icon: BarChart3,
    },
    {
      id: "facebook-ads",
      name: "Facebook Ads Management",
      description: "Professional Facebook ads management and optimization",
      price: "$449/month",
      features: [
        "Ad creative strategy",
        "Audience targeting",
        "Budget optimization",
        "ROI tracking",
      ],
      icon: Target,
    },
    {
      id: "complete-management",
      name: "Complete Page Management",
      description: "Full-service Facebook page management",
      price: "$699/month",
      features: [
        "Daily post management",
        "Comment moderation",
        "Engagement management",
        "Growth strategy",
      ],
      icon: Rocket,
    },
  ];

  const timelineOptions = [
    "Immediately",
    "Within 2 weeks",
    "Within 1 month",
    "Within 3 months",
    "Flexible",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceSelect = (serviceName: string, servicePrice: string) => {
    setFormData((prev) => ({
      ...prev,
      service: serviceName,
      serviceBudget: servicePrice,
      budget: servicePrice,
    }));
    setCurrentStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Order submitted:", formData);
      alert("Thank you for your order! We will contact you within 24 hours.");
      onClose();
      setFormData({
        name: userData?.name || "",
        email: userData?.email || "",
        phone: userData?.phone || "",
        service: "",
        serviceBudget: "",
        budget: "",
        timeline: "",
        goals: "",
        message: "",
      });
      setCurrentStep(1);
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("There was an error submitting your order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

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
            border-radius: 1.5rem;
            padding: 0;
            max-width: 900px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          }

          .order-modal-header {
            padding: 2rem 2rem 1rem;
            border-bottom: 1px solid #e2e8f0;
            position: sticky;
            top: 0;
            background: white;
            border-radius: 1.5rem 1.5rem 0 0;
            z-index: 10;
          }

          .order-modal-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 0.5rem;
          }

          .order-modal-subtitle {
            color: #64748b;
            font-size: 0.9rem;
          }

          .order-modal-close {
            position: absolute;
            top: 1.5rem;
            right: 1.5rem;
            background: #f1f5f9;
            border: none;
            border-radius: 0.5rem;
            width: 2.5rem;
            height: 2.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .order-modal-close:hover {
            background: #e2e8f0;
          }

          .order-modal-body {
            padding: 2rem;
          }

          .progress-steps {
            display: flex;
            justify-content: space-between;
            margin-bottom: 2rem;
            position: relative;
          }

          .progress-steps::before {
            content: '';
            position: absolute;
            top: 1rem;
            left: 0;
            right: 0;
            height: 2px;
            background: #e2e8f0;
            z-index: 1;
          }

          .progress-step {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            z-index: 2;
          }

          .step-number {
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            background: #f1f5f9;
            border: 2px solid #e2e8f0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            color: #64748b;
            margin-bottom: 0.5rem;
            transition: all 0.3s ease;
          }

          .step-number.active {
            background: linear-gradient(135deg, #1877F2 0%, #0A3B75 100%);
            border-color: transparent;
            color: white;
          }

          .step-number.completed {
            background: #10b981;
            border-color: #10b981;
            color: white;
          }

          .step-label {
            font-size: 0.75rem;
            font-weight: 600;
            color: #64748b;
          }

          .step-label.active {
            color: #1e293b;
          }

          .service-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1rem;
            margin-bottom: 2rem;
          }

          .service-option {
            border: 2px solid #e2e8f0;
            border-radius: 1rem;
            padding: 1.5rem;
            cursor: pointer;
            transition: all 0.3s ease;
            background: white;
          }

          .service-option:hover {
            border-color: #cbd5e1;
            transform: translateY(-2px);
          }

          .service-option.selected {
            border-color: #1877F2;
            background: #f0f7ff;
          }

          .service-icon {
            width: 3rem;
            height: 3rem;
            border-radius: 0.75rem;
            background: linear-gradient(135deg, #1877F2 0%, #0A3B75 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            margin-bottom: 1rem;
          }

          .service-name {
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 0.5rem;
          }

          .service-description {
            font-size: 0.875rem;
            color: #64748b;
            margin-bottom: 1rem;
            line-height: 1.4;
          }

          .service-price {
            font-weight: 700;
            color: #1877F2;
            font-size: 1.125rem;
          }

          .service-features {
            list-style: none;
            padding: 0;
            margin: 1rem 0 0 0;
          }

          .service-feature {
            font-size: 0.75rem;
            color: #64748b;
            padding: 0.25rem 0;
            position: relative;
            padding-left: 1rem;
          }

          .service-feature:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #10b981;
            font-weight: bold;
          }

          .form-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }

          .form-group {
            margin-bottom: 1rem;
          }

          .form-group.full-width {
            grid-column: 1 / -1;
          }

          .form-label {
            display: block;
            font-weight: 600;
            color: #374151;
            margin-bottom: 0.5rem;
            font-size: 0.875rem;
          }

          .form-input,
          .form-select,
          .form-textarea {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #d1d5db;
            border-radius: 0.5rem;
            font-size: 0.875rem;
            transition: all 0.3s ease;
          }

          .form-input:focus,
          .form-select:focus,
          .form-textarea:focus {
            outline: none;
            border-color: #1877F2;
            box-shadow: 0 0 0 3px rgba(24, 119, 242, 0.1);
          }

          .form-textarea {
            resize: vertical;
            min-height: 100px;
          }

          .form-actions {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 2rem;
            padding-top: 1rem;
            border-top: 1px solid #e2e8f0;
          }

          .btn {
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 0.5rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 0.875rem;
          }

          .btn-primary {
            background: linear-gradient(135deg, #1877F2 0%, #0A3B75 100%);
            color: white;
          }

          .btn-primary:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(24, 119, 242, 0.3);
          }

          .btn-primary:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none;
          }

          .btn-secondary {
            background: #f3f4f6;
            color: #374151;
          }

          .btn-secondary:hover {
            background: #e5e7eb;
          }

          .step-indicator {
            font-size: 0.875rem;
            color: #64748b;
            font-weight: 600;
          }

          .user-data-note {
            font-size: 0.75rem;
            color: #64748b;
            font-style: italic;
            margin-top: 0.25rem;
          }

          .phone-warning {
            font-size: 0.75rem;
            color: #ef4444;
            font-style: italic;
            margin-top: 0.25rem;
          }

          /* Budget Display Styles */
          .budget-display {
            background: linear-gradient(135deg, #f0f7ff 0%, #e0f2fe 100%);
            border: 1px solid #bae6fd;
            border-radius: 0.75rem;
            padding: 1.5rem;
            text-align: center;
            margin-bottom: 1rem;
          }

          .budget-label {
            font-size: 0.875rem;
            color: #64748b;
            margin-bottom: 0.5rem;
            font-weight: 600;
          }

          .budget-amount {
            font-size: 1.5rem;
            font-weight: 700;
            color: #1877F2;
          }

          .budget-note {
            font-size: 0.75rem;
            color: #64748b;
            font-style: italic;
            margin-top: 0.5rem;
          }

          @media (max-width: 768px) {
            .form-grid {
              grid-template-columns: 1fr;
            }
            
            .service-grid {
              grid-template-columns: 1fr;
            }
            
            .form-actions {
              flex-direction: column;
              gap: 1rem;
            }
            
            .btn {
              width: 100%;
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
            <button className="order-modal-close" onClick={onClose}>
              <X size={20} />
            </button>
            <h2 className="order-modal-title">
              Get Started with {platform} Growth
            </h2>
            <p className="order-modal-subtitle">
              Complete the form below and we'll get back to you within 24 hours
            </p>

            <div className="progress-steps">
              <div className="progress-step">
                <div
                  className={`step-number ${currentStep >= 1 ? "active" : ""} ${
                    currentStep > 1 ? "completed" : ""
                  }`}
                >
                  1
                </div>
                <div
                  className={`step-label ${currentStep === 1 ? "active" : ""}`}
                >
                  Service
                </div>
              </div>
              <div className="progress-step">
                <div
                  className={`step-number ${currentStep >= 2 ? "active" : ""} ${
                    currentStep > 2 ? "completed" : ""
                  }`}
                >
                  2
                </div>
                <div
                  className={`step-label ${currentStep === 2 ? "active" : ""}`}
                >
                  Details
                </div>
              </div>
              <div className="progress-step">
                <div
                  className={`step-number ${currentStep >= 3 ? "active" : ""}`}
                >
                  3
                </div>
                <div
                  className={`step-label ${currentStep === 3 ? "active" : ""}`}
                >
                  Review
                </div>
              </div>
            </div>
          </div>

          <div className="order-modal-body">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Service Selection */}
              {currentStep === 1 && (
                <div>
                  <h3
                    className="form-label"
                    style={{ fontSize: "1.125rem", marginBottom: "1rem" }}
                  >
                    Choose a Service
                  </h3>
                  <div className="service-grid">
                    {serviceOptions.map((option) => {
                      const Icon = option.icon;
                      return (
                        <div
                          key={option.id}
                          className={`service-option ${
                            formData.service === option.name ? "selected" : ""
                          }`}
                          onClick={() =>
                            handleServiceSelect(option.name, option.price)
                          }
                        >
                          <div className="service-icon">
                            <Icon size={20} />
                          </div>
                          <div className="service-name">{option.name}</div>
                          <div className="service-description">
                            {option.description}
                          </div>
                          <div className="service-price">{option.price}</div>
                          <ul className="service-features">
                            {option.features.map((feature, index) => (
                              <li key={index} className="service-feature">
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>

                  <div className="form-actions">
                    <div></div> {/* Spacer */}
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={nextStep}
                      disabled={!formData.service}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Contact Information */}
              {currentStep === 2 && (
                <div>
                  <h3
                    className="form-label"
                    style={{ fontSize: "1.125rem", marginBottom: "1rem" }}
                  >
                    Contact Information
                  </h3>

                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                      {userData?.name && (
                        <div className="user-data-note">
                          Pre-filled from your account
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                      {userData?.email && (
                        <div className="user-data-note">
                          Pre-filled from your account
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Enter your phone number"
                        required
                      />
                      {userData?.phone ? (
                        <div className="user-data-note">
                          Pre-filled from your registration
                        </div>
                      ) : (
                        <div className="phone-warning">
                          Please provide your phone number for better
                          communication
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Platform</label>
                      <input
                        type="text"
                        value={platform}
                        className="form-input"
                        readOnly
                        style={{ background: "#f9fafb" }}
                      />
                    </div>

                    <div className="form-group full-width">
                      <label className="form-label">Selected Service</label>
                      <input
                        type="text"
                        value={formData.service}
                        className="form-input"
                        readOnly
                        style={{ background: "#f9fafb" }}
                      />
                    </div>
                  </div>

                  <div className="form-actions">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={prevStep}
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={nextStep}
                      disabled={
                        !formData.name || !formData.email || !formData.phone
                      }
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Project Details */}
              {currentStep === 3 && (
                <div>
                  <h3
                    className="form-label"
                    style={{ fontSize: "1.125rem", marginBottom: "1rem" }}
                  >
                    Project Details
                  </h3>

                  <div className="form-grid">
                    {/* Service Budget Display - No Dropdown */}
                    <div className="form-group full-width">
                      <div className="budget-display">
                        <div className="budget-label">Service Budget</div>
                        <div className="budget-amount">
                          {formData.serviceBudget}
                        </div>
                        <div className="budget-note">
                          This is the price for your selected service
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Timeline *</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="form-select"
                        required
                      >
                        <option value="">Select timeline</option>
                        {timelineOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group full-width">
                      <label className="form-label">Primary Goals *</label>
                      <textarea
                        name="goals"
                        value={formData.goals}
                        onChange={handleInputChange}
                        className="form-textarea"
                        placeholder={`What are your main objectives for ${platform} growth? (e.g., increase page likes, boost engagement, generate leads, build community, etc.)`}
                        required
                      />
                    </div>

                    <div className="form-group full-width">
                      <label className="form-label">Additional Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="form-textarea"
                        placeholder="Any specific requirements or questions..."
                      />
                    </div>
                  </div>

                  <div className="form-actions">
                    <div className="step-indicator">Step 3 of 3</div>
                    <div style={{ display: "flex", gap: "1rem" }}>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={prevStep}
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={
                          isSubmitting || !formData.timeline || !formData.goals
                        }
                      >
                        {isSubmitting ? "Submitting..." : "Complete Order"}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
