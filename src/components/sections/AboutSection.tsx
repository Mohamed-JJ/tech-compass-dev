import { Code2, Sparkles, Shield, Users } from "lucide-react";

const values = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description: "We write code that's maintainable, scalable, and built to last. No shortcuts.",
  },
  {
    icon: Sparkles,
    title: "Quality First",
    description: "Every line of code is crafted with care, tested thoroughly, and optimized for performance.",
  },
  {
    icon: Shield,
    title: "Ownership Mindset",
    description: "We treat your project as our own, taking full responsibility for delivery and outcomes.",
  },
  {
    icon: Users,
    title: "Long-term Thinking",
    description: "We build for the future, ensuring your software evolves with your business needs.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Experienced Engineers Who
              <span className="text-gradient"> Love to Build</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We're a team of passionate software engineers dedicated to architecting, 
              coding, and shipping solutions that make a real difference. From complex 
              backend systems to intuitive user interfaces, we bring technical excellence 
              to every project.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is simple: deliver real business value through solid engineering. 
              We believe in transparent communication, clean code, and building lasting 
              partnerships with our clients around the globe.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
