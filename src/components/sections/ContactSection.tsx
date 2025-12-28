import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Let's Talk
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Build
              <span className="text-gradient"> Something Great?</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Whether you're a startup with a bold idea or an enterprise looking to 
              modernize, we'd love to hear from you. Let's discuss how we can help 
              bring your vision to life.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email us at</p>
                  <a 
                    href="mailto:hello@nexacode.dev" 
                    className="text-foreground font-medium hover:text-accent transition-colors"
                  >
                    hello@nexacode.dev
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Working globally from</p>
                  <p className="text-foreground font-medium">Remote-first, Worldwide</p>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="p-6 rounded-2xl bg-gradient-card border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Perfect for startups, SMEs, and enterprises
              </h3>
              <p className="text-muted-foreground text-sm">
                No matter your size or industry, we adapt our approach to meet your 
                unique needs and help you achieve your technology goals.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="p-8 lg:p-10 rounded-2xl bg-card border border-border shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Start a Project
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div>
                <label 
                  htmlFor="company" 
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Company (Optional)
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your Company"
                  className="h-12"
                />
              </div>

              <div>
                <label 
                  htmlFor="subject" 
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  How can we help?
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="e.g., New web application development"
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Project Details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project, goals, and timeline..."
                  rows={5}
                  required
                  className="resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="accent" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-pulse">Sending...</span>
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                We typically respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
