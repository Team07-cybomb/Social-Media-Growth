// src/components/FAQPage.tsx
import React, { useState, useRef } from "react";

const FAQPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const sectionRefs = {
    general: useRef<HTMLDivElement>(null),
    payment: useRef<HTMLDivElement>(null),
    gettingStarted: useRef<HTMLDivElement>(null),
    rules: useRef<HTMLDivElement>(null),
  };

  // Smooth scroll to section
  const scrollToSection = (sectionKey: keyof typeof sectionRefs) => {
    sectionRefs[sectionKey].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActiveSection(sectionKey);
  };

  // Toggle FAQ item
  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  // FAQ data structure
  const faqData = [
    {
      id: "general",
      title: "General Questions",
      icon: "❓",
      items: [
        {
          id: "general-1",
          question: "What is the Affiliate Program?",
          answer:
            "Our Affiliate Program allows you to earn commissions by referring customers to our platform. You'll get a unique referral link that tracks your sales and provides real-time analytics.",
        },
        {
          id: "general-2",
          question: "How can I promote the program?",
          answer:
            "You can promote the program through your website, blog, social media, email newsletters, or even YouTube channel. We provide comprehensive marketing materials including banners, links, and content templates to help you succeed.",
        },
        {
          id: "general-3",
          question: "What products can I promote?",
          answer:
            "You can promote any of our products or services. We offer a wide range of digital marketing tools, SaaS solutions, and educational resources that appeal to various audiences across different industries.",
        },
      ],
    },
    {
      id: "payment",
      title: "Payment and Earnings",
      icon: "💰",
      items: [
        {
          id: "payment-1",
          question: "How much can I earn?",
          answer:
            "You can earn up to 30% commission on each sale made through your referral link. We also offer performance bonuses and tiered commission rates for top-performing affiliates. The more you promote, the more you can earn!",
        },
        {
          id: "payment-2",
          question: "How do I get paid?",
          answer:
            "We pay commissions monthly via PayPal, bank transfer, or direct deposit. Payments are processed on the 1st of every month for the previous month's earnings. Make sure your payment information is up to date in your affiliate dashboard.",
        },
        {
          id: "payment-3",
          question: "Is there a minimum payout?",
          answer:
            "Yes, the minimum payout threshold is $50. Once you reach that amount, you will receive your payment on the next scheduled payout date. Unpaid balances roll over to the following month.",
        },
      ],
    },
    {
      id: "gettingStarted",
      title: "Getting Started",
      icon: "🚀",
      items: [
        {
          id: "started-1",
          question: "How do I sign up?",
          answer:
            "To sign up, click the 'Join Now' button and complete our simple registration form. After submitting your application, you'll gain access to your affiliate dashboard and unique tracking links.",
        },
        {
          id: "started-2",
          question: "How long does it take to get approved?",
          answer:
            "Approval is typically processed within 24-48 hours. Once approved, you'll receive a welcome email with everything you need to start promoting and earning commissions immediately.",
        },
        {
          id: "started-3",
          question: "What if I need help?",
          answer:
            "Our dedicated affiliate support team is available via email, live chat, or scheduled video calls. We also provide extensive documentation, webinars, and one-on-one coaching to ensure your success.",
        },
      ],
    },
    {
      id: "rules",
      title: "Program Rules",
      icon: "📋",
      items: [
        {
          id: "rules-1",
          question: "Are there any restrictions on my affiliate links?",
          answer:
            "We require affiliates to use ethical marketing practices. Deceptive methods, spam, or misleading claims are prohibited. All promotions must comply with our brand guidelines and applicable laws.",
        },
        {
          id: "rules-2",
          question: "Can I refer people who already use your service?",
          answer:
            "Commissions are only available for new customers who sign up through your unique referral link. Existing users are not eligible for referral commissions to ensure fair compensation.",
        },
        {
          id: "rules-3",
          question: "Can't promote your services outside of my website?",
          answer:
            "Absolutely! You can promote through social media, email marketing, videos, podcasts, paid ads, and more. We encourage diverse promotion strategies while adhering to our terms and conditions.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Enhanced Header */}
      <header className="text-center mb-16 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Find comprehensive answers to all your questions about our affiliate
            program. Everything you need to know to start earning commissions is
            right here.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {faqData.map((section) => (
            <button
              key={section.id}
              onClick={() =>
                scrollToSection(section.id as keyof typeof sectionRefs)
              }
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 ${
                activeSection === section.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-blue-300 shadow-md hover:shadow-lg"
              }`}
            >
              <span>{section.icon}</span>
              <span>{section.title}</span>
            </button>
          ))}
        </div>
      </header>

      {/* Enhanced FAQ Sections */}
      <section className="max-w-6xl w-full space-y-8">
        {faqData.map((section) => (
          <div
            key={section.id}
            ref={sectionRefs[section.id as keyof typeof sectionRefs]}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            {/* Section Header */}
            <div className="px-8 py-6 border-b border-gray-100">
              <div className="flex items-center space-x-4">
                <span className="text-2xl">{section.icon}</span>
                <h2 className="text-2xl font-bold text-gray-800">
                  {section.title}
                </h2>
              </div>
            </div>

            {/* FAQ Items */}
            <div className="divide-y divide-gray-100">
              {section.items.map((item, index) => (
                <div
                  key={item.id}
                  className="group transition-all duration-300 hover:bg-blue-50/30"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center transition-all duration-300 hover:bg-blue-50/50 rounded-lg mx-2 my-1"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition-colors text-left">
                        {item.question}
                      </h3>
                    </div>
                    <span
                      className={`transform transition-transform duration-300 text-blue-600 ${
                        openItems[item.id] ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`px-8 pb-6 transition-all duration-300 overflow-hidden ${
                      openItems[item.id]
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex space-x-4">
                      <div className="flex-shrink-0 w-8 flex justify-center">
                        <div className="w-1 h-full bg-gradient-to-b from-blue-200 to-purple-200 rounded-full"></div>
                      </div>
                      <div className="bg-blue-50/50 rounded-lg p-4 border-l-4 border-blue-400 flex-1">
                        <p className="text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Fixed Spacing Contact Section */}
      <section className="mt-16 w-full max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="px-6 py-8 sm:px-8 sm:py-10">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mb-3">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Still Have Questions?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Our dedicated support team is ready to help you succeed. Get
                personalized assistance and expert guidance whenever you need
                it.
              </p>
            </div>

            {/* Contact Box */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-6 border border-gray-200 max-w-2xl mx-auto">
              <div className="flex items-start space-x-3">
                {/* Checkbox */}
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 border-2 border-blue-500 rounded-md flex items-center justify-center bg-white">
                    <svg
                      className="w-3 h-3 text-blue-500 hidden"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Can't promote your services outside of my website?
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                    Absolutely! You can promote through social media, email
                    marketing, videos, podcasts, paid ads, and more. We
                    encourage diverse promotion strategies while adhering to our
                    terms and conditions.
                  </p>

                  <div className="bg-white rounded-md p-3 border border-gray-300">
                    <p className="text-gray-600 text-xs mb-3">
                      Our dedicated support team is ready to help you succeed.
                      Get personalized assistance and expert guidance whenever
                      you need it.
                    </p>

                    {/* Contact Button */}
                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 text-sm">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span>Contact Support Team</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional CTA */}
            <div className="text-center mt-6">
              <p className="text-gray-600 mb-3 text-sm">
                Prefer to explore on your own?
              </p>
              <a
                href="/affiliate"
                className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300 text-sm"
              >
                <span>Visit our affiliate resources</span>
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-10"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default FAQPage;
