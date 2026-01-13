"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const stack = [
    { category: "Frontend", tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", tools: ["Node.js", "Go", "Python", "GraphQL"] },
    { category: "Cloud & DevOps", tools: ["AWS", "Terraform", "Docker", "Kubernetes"] },
    { category: "Database", tools: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"] },
];

export function TechStack() {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from(".tech-header", {
            opacity: 0,
            x: -100,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".tech-header",
                start: "top 90%",
            },
        });

        gsap.from(".tech-item", {
            opacity: 0,
            y: 50,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".tech-grid",
                start: "top 85%",
            },
        });
    }, { scope: container });

    return (
        <section ref={container} className="flex-1 flex flex-col justify-center py-24 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="tech-header text-center mb-20">
                    <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">
                        OUR TECH STACK
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary">
                        Modern Stack for <br />
                        <span className="text-primary font-medium">Modern Solutions</span>
                    </h2>
                </div>

                <div className="tech-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stack.map((item, index) => (
                        <div key={index} className="tech-item bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-6 px-3 py-1 bg-primary/5 inline-block rounded-md">
                                {item.category}
                            </h4>
                            <ul className="space-y-4">
                                {item.tools.map((tool) => (
                                    <li key={tool} className="flex items-center gap-3 text-secondary font-semibold border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                                        <div className="w-2 h-2 rounded-full bg-primary/40" />
                                        {tool}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
