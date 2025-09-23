import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { Card, CardContent } from "./ui/card";

export function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "hello@socialgrowth.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      description: "Call us during business hours",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "New York, NY",
      description: "Come visit our office",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri 9AM-6PM EST",
      description: "We're here to help",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl mb-6">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Ready to transform your social media presence? We'd love to hear
            from you. Reach out to discuss your goals and learn how we can help
            you achieve them.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl mb-4">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Choose the best way to reach us. We typically respond within
                  24 hours during business days.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="mb-1">{info.title}</h3>
                          <p className="text-primary mb-1">{info.content}</p>
                          <p className="text-sm text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Office Hours */}
              <Card className="mt-8">
                <CardContent className="p-6">
                  <h3 className="text-lg mb-4">Office Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Monday - Friday
                      </span>
                      <span>9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span>10:00 AM - 2:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg mb-2">Emergency Support</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    For existing clients with urgent issues outside business
                    hours
                  </p>
                  <p className="text-sm">
                    <span className="text-primary">Emergency Line:</span> +1
                    (555) 999-0000
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions before you reach out
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "How quickly can I expect a response?",
                answer:
                  "We typically respond to all inquiries within 24 hours during business days. For urgent matters, we offer emergency support for existing clients.",
              },
              {
                question: "Do you offer free consultations?",
                answer:
                  "Yes! We offer a complimentary 30-minute consultation to discuss your social media goals and how we can help achieve them.",
              },
              {
                question: "What information should I include in my inquiry?",
                answer:
                  "Please include your current social media presence, growth goals, target audience, and any specific challenges you're facing. This helps us provide more targeted advice.",
              },
              {
                question: "Can you work with businesses outside the US?",
                answer:
                  "Absolutely! We work with clients globally. While our primary hours are EST, we're flexible with meeting times to accommodate different time zones.",
              },
              {
                question: "What's the typical timeline to get started?",
                answer:
                  "After our initial consultation, we typically can begin strategy development within 1-2 weeks, depending on the complexity of your requirements.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Visit Our Office</h2>
            <p className="text-lg text-muted-foreground">
              Located in the heart of New York City
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="aspect-video bg-secondary/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl mb-2">Our Office Location</h3>
                <p className="text-muted-foreground">
                  123 Social Media Street
                  <br />
                  New York, NY 10001
                  <br />
                  United States
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
