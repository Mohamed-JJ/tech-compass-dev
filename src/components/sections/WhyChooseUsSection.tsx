import { 
  Users, 
  Layers, 
  Shield, 
  MessageCircle, 
  Handshake, 
  Globe,
  CheckCircle2
} from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Experienced Engineers",
    description: "Senior developers with proven track records in building complex systems at scale.",
  },
  {
    icon: Layers,
    title: "Clean Architecture",
    description: "We follow industry best practices to ensure your codebase is maintainable and extensible.",
  },
  {
    icon: Shield,
    title: "Security-First Approach",
    description: "Security is built into every layer, not bolted on as an afterthought.",
  },
  {
    icon: MessageCircle,
    title: "Transparent Communication",
    description: "Regular updates, honest feedback, and no surprises throughout the project lifecycle.",
  },
  {
    icon: Handshake,
    title: "Partnership Mindset",
    description: "We're invested in your long-term success, not just completing a contract.",
  },
  {
    icon: Globe,
    title: "Global, Remote-First",
    description: "Work with distributed teams across time zones, ensuring round-the-clock productivity.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Engineering Excellence,
              <span className="block text-accent"> Delivered Globally</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              We combine technical expertise with a genuine commitment to your success. 
              When you partner with us, you get more than developers—you get a dedicated 
              team invested in building software that matters.
            </p>

            {/* Engagement Model */}
            <div className="p-6 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                Engagement Model
              </h3>
              <p className="text-primary-foreground/80 mb-4">
                <span className="font-semibold text-accent">Custom per project.</span> We tailor 
                our approach to fit your specific needs, timeline, and budget.
              </p>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Flexible engagement terms
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Tailored solutions for your requirements
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Close collaboration throughout
                </li>
              </ul>
            </div>
          </div>

          {/* Reasons Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
