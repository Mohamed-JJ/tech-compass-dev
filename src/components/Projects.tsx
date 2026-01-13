"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "Fintech Dashboard",
        category: "Web Application",
        description: "A comprehensive trading platform with real-time data visualization and portfolio management.",
        image: "/trading_app_mockup_1767293297695.png",
        tags: ["Next.js", "TypeScript", "D3.js", "Tailwind"],
    },
    {
        title: "MediConnect App",
        category: "Mobile Application",
        description: "Successfully delivered a healthcare platform that simplifies doctor appointments and patient records.",
        image: "/healthcare_app_mockup_1767293311475.png",
        tags: ["React Native", "Firebase", "Node.js"],
    },
    {
        title: "LuxFashion E-commerce",
        category: "E-commerce",
        description: "An elegant, high-performance online store for a luxury fashion brand with focus on speed and UX.",
        image: "/ecommerce_app_mockup_1767293326439.png",
        tags: ["Next.js", "Shopify", "Tailwind CSS"],
    },
];

export function Projects() {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from(".projects-header > *", {
            opacity: 0,
            y: -100,
            stagger: 0.1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".projects-header",
                start: "top 90%",
            },
        });

        projects.forEach((_, index) => {
            gsap.from(`.project-item-${index} .project-image`, {
                opacity: 0,
                x: index % 2 === 0 ? -150 : 150,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: `.project-item-${index}`,
                    start: "top 75%",
                },
            });

            gsap.from(`.project-item-${index} .project-content`, {
                opacity: 0,
                x: index % 2 === 0 ? 150 : -150,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: `.project-item-${index}`,
                    start: "top 75%",
                },
            });
        });
    }, { scope: container });

    return (
        <section ref={container} id="projects" className="flex-1 flex flex-col justify-center py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="projects-header text-center mb-20">
                    <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">
                        OUR WORK
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary">
                        Projects That <br />
                        <span className="text-primary font-medium">Deliver Results</span>
                    </h2>
                </div>

                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`project-item-${index} flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                } gap-12 items-center`}
                        >
                            <div className="project-image w-full md:w-1/2">
                                <div className="relative group overflow-hidden rounded-3xl border border-gray-100 shadow-2xl transition-all hover:scale-[1.02]">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={800}
                                        height={600}
                                        className="w-full h-auto object-cover"
                                    />
                                    <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>

                            <div className="project-content w-full md:w-1/2">
                                <div className="inline-block px-4 py-1 rounded-full bg-gray-100 text-foreground/60 text-sm font-bold mb-6">
                                    {project.category}
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                                    {project.title}
                                </h3>
                                <p className="text-xl text-foreground/60 mb-8 leading-relaxed font-medium">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-3 mb-10">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-4 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-secondary font-medium text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
