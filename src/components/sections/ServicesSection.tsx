import { 
  Code, 
  Cloud, 
  Search, 
  Zap, 
  GitBranch, 
  Lightbulb,
  ArrowUpRight
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Web applications, backend systems, APIs, and scalable platforms built with modern technologies and best practices.",
    features: ["Web Apps", "APIs", "Backend Systems", "Platforms"],
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Design and implement robust cloud infrastructure on AWS, GCP, or Azure that scales with your business.",
    features: ["AWS", "GCP", "Azure", "Infrastructure Design"],
  },
  {
    icon: Search,
    title: "Cloud Audit",
    description: "Comprehensive analysis of your cloud infrastructure for security vulnerabilities, cost optimization, and performance.",
    features: ["Security Review", "Cost Analysis", "Performance Audit"],
  },
  {
    icon: Zap,
    title: "Application Optimization",
    description: "Improve performance, reliability, and scalability of your existing applications for better user experience.",
    features: ["Performance", "Reliability", "Scalability"],
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD",
    description: "Automate your development workflow with modern CI/CD pipelines and DevOps practices for faster delivery.",
    features: ["Automation", "Pipelines", "Deployment"],
  },
  {
    icon: Lightbulb,
    title: "Technical Consulting",
    description: "Strategic guidance on system design, architecture decisions, and technology choices for your projects.",
    features: ["System Design", "Architecture", "Tech Strategy"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            End-to-End Engineering
            <span className="text-gradient"> Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From initial concept to production deployment and beyond, we provide 
            comprehensive software engineering services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-accent-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                {service.title}
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
