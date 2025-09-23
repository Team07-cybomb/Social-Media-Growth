import { Star, Quote } from "lucide-react";
import { Hero } from "./Hero";
import { ServiceCard } from "./ServiceCard";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Instagram, Linkedin, Facebook, Twitter, Youtube } from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const services = [
    {
      icon: Instagram,
      title: "Instagram Growth",
      description: "Boost your Instagram presence with authentic followers and engagement.",
      features: ["Organic follower growth", "Content strategy", "Hashtag optimization"]
    },
    {
      icon: Linkedin,
      title: "LinkedIn Growth",
      description: "Build your professional network and establish thought leadership.",
      features: ["Network expansion", "Content creation", "Lead generation"]
    },
    {
      icon: Youtube,
      title: "YouTube Growth",
      description: "Grow your YouTube channel with optimized content and engagement.",
      features: ["Video optimization", "Thumbnail design", "Audience retention"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Startup CEO",
      content: "SocialGrowth helped us increase our Instagram followers by 300% in just 6 months. The quality of engagement is outstanding!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1739298061757-7a3339cee982?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc1ODUwNzM3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Michael Chen",
      company: "Digital Marketing Agency",
      content: "Their LinkedIn growth strategies transformed our B2B lead generation. We now get 5x more qualified leads monthly.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1676282827533-d6058df56a69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZyUyMHRlYW0lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU4NTE5Mzg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Emma Rodriguez",
      company: "E-commerce Brand",
      content: "The YouTube growth package exceeded our expectations. Our subscriber count doubled and video views increased by 400%.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1736066331155-c95740b0bd6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzU4NDUzNTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero onNavigate={onNavigate} />

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive social media growth solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                onGetStarted={() => onNavigate("contact")}
              />
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={() => onNavigate("services")}
              variant="outline"
              className="rounded-full px-8"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real results from real businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  
                  <p className="text-muted-foreground mb-6">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <ImageWithFallback
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Ready to Grow Your Social Media?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of businesses that have transformed their social media presence with our proven strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onNavigate("contact")}
              className="rounded-full px-8"
            >
              Get Started Today
            </Button>
            <Button
              variant="outline"
              onClick={() => onNavigate("about")}
              className="rounded-full px-8"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}