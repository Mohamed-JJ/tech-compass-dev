"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        title: "Discovery & Planning",
        description: "We deep dive into your requirements to create a robust product roadmap.",
    },
    {
        title: "Design & Prototyping",
        description: "Our designers craft intuitive user flows and high-fidelity mockups.",
    },
    {
        title: "Iterative Development",
        description: "We build your product in agile sprints, ensuring continuous feedback.",
    },
    {
        title: "Quality Assurance",
        description: "Rigorous testing to ensure your application is bug-free and performant.",
    },
    {
        title: "Launch & Support",
        description: "Smooth deployment and ongoing maintenance for your peace of mind.",
    },
];

export function Process() {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from(".process-header > *", {
            opacity: 0,
            y: 100,
            stagger: 0.1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".process-header",
                start: "top 90%",
            },
        });

        gsap.from(".process-step", {
            opacity: 0,
            x: -100,
            stagger: 0.1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".process-steps-container",
                start: "top 80%",
            },
        });

        gsap.from(".process-visual", {
            opacity: 0,
            x: 100,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".process-visual",
                start: "top 80%",
            },
        });
    }, { scope: container });

    return (
        <section ref={container} id="process" className="flex-1 flex flex-col justify-center py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="process-header">
                        <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">
                            OUR PROCESS
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-8">
                            A Proven Recipe For <br />
                            <span className="text-primary font-medium">Successful Delivery</span>
                        </h2>
                        <p className="text-lg text-foreground/60 mb-12 leading-relaxed font-medium">
                            We follow a streamlined engineering process that ensures reliability,
                            scalability, and speed to market.
                        </p>

                        <div className="process-steps-container space-y-6">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className="process-step flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                                >
                                    <div className="mt-1 w-6 h-6 flex-shrink-0">
                                        <CheckCircle2 className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-secondary mb-1 group-hover:text-primary transition-colors">
                                            {step.title}
                                        </h4>
                                        <p className="text-foreground/60 font-medium">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="process-visual relative h-[600px] w-full bg-secondary rounded-3xl overflow-hidden shadow-2xl">
                        {/* Abstract decorative element for process visualization */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-secondary via-secondary to-primary/20" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%]">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[120px] rounded-full" />
                            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 blur-[120px] rounded-full" />
                        </div>
                        <div className="relative h-full flex items-center justify-center p-12">
                            <div className="text-center">
                                <div className="text-7xl font-bold text-white mb-4">98%</div>
                                <p className="text-white/60 text-lg uppercase tracking-widest">Customer Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
