import { Target, Users, Award, TrendingUp } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Rocket, Eye, Headphones } from "lucide-react";


interface AboutPageProps {
 onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
const teamMembers = [
{
 name: "Alex Johnson",
role: "Founder & CEO",
bio: "10+ years in digital marketing with expertise in social media growth strategies.",
image: "https://i.pinimg.com/1200x/45/17/9d/45179d43379464798e63c5006815ac41.jpg"
},
 {
 name: "Sarah Chen",
role: "Head of Strategy",
bio: "Former social media manager for Fortune 500 companies, specializing in B2B growth.",
image: "https://i.pinimg.com/1200x/6e/d0/f3/6ed0f34f94a2ef29b776c99938468378.jpg"
 },
 {
 name: "Eve Rodriguez",
 role: "Content Director",
bio: "Award-winning content creator with experience across all major social platforms.",
image: "https://i.pinimg.com/736x/0a/d1/93/0ad19309a59be71b028548801ac38353.jpg"
 }
 ];

const values = [
 {
 icon: Target,
 title: "Results-Driven",
description: "We focus on delivering measurable growth and ROI for every client, using data-driven strategies that work."
 },
 {
icon: Users,
title: "Authentic Growth",
 description: "We believe in building genuine communities, not just follower counts. Quality engagement over quantity."
 },
 {
 icon: Award,
 title: "Excellence",
description: "We maintain the highest standards in everything we do, from strategy development to client communication."
 },
 {
icon: TrendingUp,
title: "Innovation",
 description: "We stay ahead of social media trends and algorithm changes to keep our clients' growth consistent."
 }
 ];

 const stats = [
 { number: "500+", label: "Clients Served" },
 { number: "2M+", label: "Followers Generated" },
 { number: "95%", label: "Client Retention Rate" },
{ number: "5", label: "Years Experience" }
 ];

 return (
<div className="min-h-screen">
 {/* Hero Section */}
 <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-primary/5">
 <div className="max-w-6xl mx-auto animate-fade-in">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
 <div>
<h1 className="text-4xl md:text-5xl mb-6">
 Hi! We're The<br/><span className="text-primary font-bold">Social Media Growth!</span>
 </h1>
 <p className="text-lg text-muted-foreground mb-8">
 We're a team of social media experts passionate about helping businesses 
 build authentic, engaged communities across all major platforms. Founded in 2019, 
 we've helped hundreds of companies transform their social media presence and 
 achieve remarkable growth.
 </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
 {stats.map((stat, index) => (
 <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
 <div className="text-2xl text-primary mb-1">{stat.number}</div>
 <div className="text-sm text-muted-foreground">{stat.label}</div>
 </div>
))}
</div>
</div>

 <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
 <ImageWithFallback
src="https://i.pinimg.com/1200x/db/0f/1a/db0f1abb02e1f9c0a531165b67a2366f.jpg"
 alt="SocialGrowth team"
 className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
 />
 </div>
</div>
</div>
</section>

{/* Mission Section */}
<section className="py-20 px-4 sm:px-8 lg:px-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Different So We Can Make A<br/> Difference
          </h2>
          <div className="w-24 h-1 green-700 mx-auto mb-5 ">__________</div>

          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Here at <span className="font-semibold text-primary">The Social Media Growth</span>, 
            we know how important it is for brands to have an audience that listens, engages, and cares. 
            Our goal isn’t just to inflate numbers — it’s to expand your brand’s awareness and following 
            with wholehearted support from our committed team of professionals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Mission */}
          <div className="bg-white dark:bg-gray-800 text-center rounded-xl shadow-lg p-8 transition hover:shadow-xl">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <Rocket className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-xl font-bold uppercase text-gray-900 dark:text-white mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              <span className="font-semibold">The Social Media Growth</span> gives you the push you need
              to go viral on social media and compete with influencers and companies.
              We aim to boost your presence credibly and naturally, reflecting a trustworthy image
              in your community.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white dark:bg-gray-800 text-center rounded-xl shadow-lg p-8 transition hover:shadow-xl">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <Eye className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-xl font-bold uppercase text-gray-900 dark:text-white mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We know that going viral on social media is not a walk in the park!
              That’s why we created this engagement service and made it public.
              Whether you’re a blogger, public figure, brand, or organization,
              we help you set the bar high and stand out online.
            </p>
          </div>

          {/* Support */}
          <div className="bg-white dark:bg-gray-800 text-center rounded-xl shadow-lg p-8 transition hover:shadow-xl">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <Headphones className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-xl font-bold uppercase text-gray-900 dark:text-white mb-4">
              24/7 Support
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              At <span className="font-semibold">The Social Media Growth</span>, 
              we’re always ready to assist with our dedicated <strong>24/7 support</strong>. 
              Reach us via Ticket, Email, or WhatsApp — our expert team is on hand to 
              answer your questions and resolve issues within minutes.
            </p>
          </div>
        </div>
      </div>
    </section>

{/* Values Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
 <div className="max-w-6xl mx-auto">
 <div className="text-center mb-16">
 <h2 className="text-3xl md:text-4xl mb-4">Our Values</h2>
 <p className="text-lg text-muted-foreground">
The principles that guide everything we do
 </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
 {values.map((value, index) => (
 <Card key={index} className="text-center h-full transition-transform duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${1 + index * 0.1}s` }}>
 <CardContent className="p-6">
 <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
<value.icon className="w-8 h-8 text-primary" />
 </div>
 <h3 className="text-lg mb-3">{value.title}</h3>
<p className="text-muted-foreground text-sm">{value.description}</p>
 </CardContent>
</Card>
 ))}
 </div>
 </div>
 </section>

 {/* Team Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 animate-fade-in" style={{ animationDelay: '1.2s' }}>
 <div className="max-w-6xl mx-auto">
 <div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl mb-4">Meet Our Team</h2>
 <p className="text-lg text-muted-foreground">
 The experts behind your social media success
</p>
</div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {teamMembers.map((member, index) => (
 <Card key={index} className="text-center overflow-hidden transition-transform duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${1.4 + index * 0.1}s` }}>
 <div className="aspect-square overflow-hidden">
 <ImageWithFallback
 src={member.image}
alt={member.name}
 className="w-full h-full object-cover transition-transform duration-300"
 />
 </div>
<CardContent className="p-6">
<h3 className="text-xl mb-1">{member.name}</h3>
 <p className="text-primary mb-3">{member.role}</p>
<p className="text-muted-foreground text-sm">{member.bio}</p>
 </CardContent>
 </Card>
 ))}
</div>
</div>
</section>

{/* CTA Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/20 animate-fade-in" style={{ animationDelay: '1.8s' }}>
<div className="max-w-4xl mx-auto text-center">
 <h2 className="text-3xl md:text-4xl mb-4">
Ready to Work With Us?
 </h2>
 <p className="text-lg text-muted-foreground mb-8">
Let's discuss how we can help you achieve your social media goals and 
 build a thriving online community for your business.
</p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
<button
onClick={() => onNavigate("contact")}
 className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full transition-colors"
>
 Get In Touch
 </button>
<button
onClick={() => onNavigate("services")}
 className="border border-border hover:bg-secondary px-8 py-3 rounded-full transition-colors"
 >
 View Our Services
 </button>
</div>
 </div>
 </section>
 </div>
 );
}