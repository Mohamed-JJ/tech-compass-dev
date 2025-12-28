import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Software Development", href: "#services" },
    { label: "Cloud Architecture", href: "#services" },
    { label: "DevOps & CI/CD", href: "#services" },
    { label: "Technical Consulting", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Process", href: "#process" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ],
  resources: [
    { label: "Blog", href: "#" },
    { label: "Case Studies", href: "#portfolio" },
    { label: "Technologies", href: "#technologies" },
    { label: "Careers", href: "#" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">N</span>
              </div>
              <span className="font-display font-bold text-2xl">NexaCode</span>
            </a>
            <p className="text-primary-foreground/70 leading-relaxed mb-6 max-w-sm">
              Your trusted global technology partner. We architect, build, and ship 
              scalable software solutions that drive real business outcomes.
            </p>
            <a 
              href="mailto:hello@nexacode.dev" 
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
            >
              hello@nexacode.dev
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/50">
              © {currentYear} NexaCode. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
