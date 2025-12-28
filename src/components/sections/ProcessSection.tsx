import { MessageSquare, Compass, Code, Rocket, RefreshCw } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery & Analysis",
    description: "We dive deep into your requirements, understanding your business goals, technical constraints, and user needs.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Architecture & Design",
    description: "Our engineers design a robust, scalable architecture that serves as the foundation for your project.",
  },
  {
    number: "03",
    icon: Code,
    title: "Development & Testing",
    description: "We build your solution iteratively, with continuous testing and regular demos to ensure alignment.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deployment & Monitoring",
    description: "We deploy to production with zero downtime and set up comprehensive monitoring for reliability.",
  },
  {
    number: "05",
    icon: RefreshCw,
    title: "Continuous Improvement",
    description: "Post-launch, we provide ongoing support, optimizations, and feature enhancements as your needs evolve.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            A Proven Process for
            <span className="text-gradient"> Successful Delivery</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our structured approach ensures transparency, quality, and on-time delivery 
            for every project we undertake.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex gap-6 lg:gap-10 pb-12 last:pb-0"
            >
              {/* Connector Line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-6 lg:left-8 top-16 w-px h-[calc(100%-4rem)] bg-border" />
              )}

              {/* Icon */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-lg shadow-accent/20">
                  <step.icon className="w-6 h-6 lg:w-7 lg:h-7 text-accent-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-bold text-accent">{step.number}</span>
                  <h3 className="text-xl lg:text-2xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-xl">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
