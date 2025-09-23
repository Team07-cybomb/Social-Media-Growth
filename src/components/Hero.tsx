import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
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
                </div>
              </div>
            </div>
          </div>

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
        </div>
      </div>
    </section>
  );
}
