import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "FinTech Trading Platform",
    category: "Web Application",
    description: "A high-performance trading platform processing millions of transactions daily with real-time market data and advanced analytics.",
    problem: "Legacy system couldn't handle growing transaction volume and lacked modern analytics capabilities.",
    solution: "Built a microservices architecture with event-driven processing, achieving sub-millisecond latency and 99.99% uptime.",
    technologies: ["TypeScript", "Node.js", "React", "PostgreSQL", "Redis", "AWS"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
  },
  {
    title: "Healthcare Management System",
    category: "Enterprise Software",
    description: "A comprehensive healthcare platform connecting hospitals, clinics, and patients across multiple regions.",
    problem: "Fragmented systems led to data silos and poor patient experience across healthcare providers.",
    solution: "Developed a unified platform with HIPAA-compliant data sharing, reducing administrative overhead by 60%.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "GCP", "Docker"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  },
  {
    title: "E-Commerce Platform",
    category: "Scalable Platform",
    description: "A modern e-commerce solution handling peak traffic of 100K+ concurrent users during flash sales.",
    problem: "Existing platform crashed during high-traffic events, resulting in significant revenue loss.",
    solution: "Implemented auto-scaling infrastructure with CDN optimization, handling 10x traffic spikes seamlessly.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Kubernetes", "Stripe", "AWS"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Projects That
            <span className="text-gradient"> Deliver Results</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A selection of projects where we've helped businesses transform their 
            technology and achieve their goals.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-12 lg:space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative group rounded-2xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-accent-foreground" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="inline-block text-sm font-medium text-accent mb-3">
                  {project.category}
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">Challenge</h4>
                    <p className="text-sm text-muted-foreground">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">Solution</h4>
                    <p className="text-sm text-muted-foreground">{project.solution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button variant="outline" className="group">
                  View Case Study
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
