"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Code2, Smartphone, Layout, Cloud, Shield, Database } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "Web Development",
        description: "Building scalable, high-performance web applications using modern frameworks and best practices.",
        icon: Code2,
    },
    {
        title: "Mobile Solutions",
        description: "Developing cross-platform mobile apps that provide a seamless user experience.",
        icon: Smartphone,
    },
    {
        title: "UI/UX Design",
        description: "Creating intuitive and visually stunning interfaces that drive user engagement.",
        icon: Layout,
    },
    {
        title: "Cloud Infrastructure",
        description: "Designing robust cloud architectures to support your growing business needs.",
        icon: Cloud,
    },
    {
        title: "Cyber Security",
        description: "Implementing advanced security measures to protect your data and applications.",
        icon: Shield,
    },
    {
        title: "Database Design",
        description: "Optimizing data storage and retrieval for maximum efficiency and speed.",
        icon: Database,
    },
];

export function Services() {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from(".services-header > *", {
            opacity: 0,
            y: -100,
            stagger: 0.1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".services-header",
                start: "top 90%",
            },
        });

        const cards = gsap.utils.toArray(".service-card") as HTMLElement[];
        cards.forEach((card, i) => {
            gsap.from(card, {
                opacity: 0,
                x: i % 2 === 0 ? -100 : 100,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                },
            });
        });
    }, { scope: container });

    return (
        <section ref={container} id="services" className="flex-1 flex flex-col justify-center py-20 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="services-header text-center mb-16">
                    <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">
                        OUR SERVICES
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary">
                        Experienced Engineers Who <br />
                        <span className="text-primary font-medium">Love to Build</span>
                    </h2>
                    <p className="mt-6 text-foreground/60 max-w-2xl mx-auto text-lg font-medium">
                        We offer a wide range of engineering services tailored to meet the unique challenges of your business.
                    </p>
                </div>

                <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card bg-white p-8 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all group flex flex-col items-center text-center md:items-start md:text-left"
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                <service.icon size={28} className="text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-4">{service.title}</h3>
                            <p className="text-foreground/60 leading-relaxed font-medium">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
