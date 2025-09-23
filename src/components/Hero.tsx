<<<<<<< HEAD
import { ArrowRight } from "lucide-react";
=======
import { ArrowRight, Play, Star, Shield, Zap } from "lucide-react";
>>>>>>> 7201db0e6bd271d98de5541bfb21099d8ac48f76
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
<<<<<<< HEAD
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl">
                Grow Your Social Media{" "}
                <span className="text-primary">Presence</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Transform your social media strategy with our proven growth
                techniques. Increase engagement, build authentic followers, and
                drive real results across all major platforms.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => onNavigate("/register")}
                className="rounded-full px-8 py-6 group"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                onClick={() => onNavigate("services")}
                className="rounded-full px-8 py-6"
              >
                View Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl text-primary">500+</div>
                <div className="text-sm text-muted-foreground">
                  Happy Clients
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-primary">2M+</div>
                <div className="text-sm text-muted-foreground">
                  Followers Gained
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-primary">95%</div>
                <div className="text-sm text-muted-foreground">
                  Success Rate
=======
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Social media analytics dashboard"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for better text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.6) 100%)",
          }}
        ></div>

        {/* Animated Background Elements */}
        <div
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
            opacity: 0.1,
          }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
            opacity: 0.1,
          }}
        ></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Content - Takes full width on mobile, left side on desktop */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            {/* Badge - Added more margin top for spacing above */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mx-auto lg:mx-0 mt-12"
              style={{
                marginTop: "60px",
                background: "rgba(59, 130, 246, 0.2)",
                border: "1px solid rgba(59, 130, 246, 0.3)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Star className="h-4 w-4" style={{ color: "#60a5fa" }} />
              <span
                className="text-sm font-medium"
                style={{ color: "#e0f2fe" }}
              >
                Trusted by 500+ businesses worldwide
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                style={{ color: "#ffffff" }}
              >
                Social Media
                <br />
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Like Never Before
                </span>
              </h1>

              <p
                className="text-lg md:text-xl lg:text-2xl mx-auto lg:mx-0 max-w-2xl"
                style={{ color: "#cbd5e1", lineHeight: "1.6" }}
              >
                Transform your social presence with AI-powered growth
                strategies. Get real followers, increase engagement, and drive
                measurable results across all platforms.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => onNavigate("register")}
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg border-0 transition-all duration-300 hover:scale-105 group"
                style={{
                  background:
                    "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
                  color: "white",
                  boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)",
                }}
              >
                <Zap className="h-5 w-5" />
                Start Growing Today
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onNavigate("services")}
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg border transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  color: "white",
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Play className="h-5 w-5" />
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center gap-3">
                <span
                  className="text-sm font-medium"
                  style={{ color: "#e2e8f0" }}
                >
                  Join 500+ successful brands
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="h-4 w-4"
                      style={{ fill: "#fbbf24", color: "#fbbf24" }}
                    />
                  ))}
                </div>
                <span
                  className="text-sm font-medium"
                  style={{ color: "#e2e8f0" }}
                >
                  4.9/5 Rating
                </span>
              </div>
            </div>

            {/* Features Grid - Reduced top padding */}
            <div className="grid grid-cols-2 gap-4 pt-4 max-w-md mx-auto lg:mx-0">
              {[
                { icon: Shield, text: "100% Organic Growth" },
                { icon: Zap, text: "Real Results in 30 Days" },
                { icon: Star, text: "24/7 Expert Support" },
                { icon: ArrowRight, text: "No Contracts" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: "rgba(59, 130, 246, 0.2)",
                      border: "1px solid rgba(59, 130, 246, 0.3)",
                    }}
                  >
                    <feature.icon
                      className="h-5 w-5"
                      style={{ color: "#60a5fa" }}
                    />
                  </div>
                  <span
                    className="text-sm font-medium text-left"
                    style={{ color: "#e2e8f0" }}
                  >
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Optional Additional Content or Image Preview */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md lg:max-w-lg"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <div className="p-6">
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: "white" }}
                >
                  Real-time Analytics Preview
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      metric: "Engagement Rate",
                      value: "+285%",
                      color: "#10b981",
                    },
                    {
                      metric: "New Followers",
                      value: "+2.1M",
                      color: "#3b82f6",
                    },
                    {
                      metric: "Content Reach",
                      value: "+150%",
                      color: "#f59e0b",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span style={{ color: "#cbd5e1" }}>{item.metric}</span>
                      <span style={{ color: item.color, fontWeight: "bold" }}>
                        {item.value}
                      </span>
                    </div>
                  ))}
>>>>>>> 7201db0e6bd271d98de5541bfb21099d8ac48f76
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Digital marketing growth"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
=======
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
>>>>>>> 7201db0e6bd271d98de5541bfb21099d8ac48f76
        </div>
      </div>
    </section>
  );
}
