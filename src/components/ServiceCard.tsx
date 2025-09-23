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

export function ServiceCard({ icon: Icon, title, description, features, onGetStarted }: ServiceCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="text-center pb-4">
        <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl">{title}</h3>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-6 text-center">
          {description}
        </p>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={onGetStarted}
          className="w-full rounded-full"
          variant="outline"
        >
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
}