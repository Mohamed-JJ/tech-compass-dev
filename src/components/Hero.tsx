"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const stats = [
    { label: "Satisfied Clients", value: "25+" },
    { label: "Projects Delivered", value: "45+" },
    { label: "Success Rate", value: "98%" },
];

export function Hero() {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });

        tl.fromTo(".hero-title", { autoAlpha: 0, y: 100 }, { autoAlpha: 1, y: 0, stagger: 0.2 })
            .fromTo(".hero-desc", { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0 }, "-=0.8")
            .fromTo(".btn-left", { autoAlpha: 0, x: -100 }, { autoAlpha: 1, x: 0 }, "-=1")
            .fromTo(".btn-right", { autoAlpha: 0, x: 100 }, { autoAlpha: 1, x: 0 }, "-=1.2")
            .fromTo(".hero-stats", { autoAlpha: 0, y: 60 }, { autoAlpha: 1, y: 0 }, "-=0.6");
    }, { scope: container });

    return (
        <section ref={container} className="relative pt-32 pb-20 overflow-hidden min-h-screen flex flex-col justify-center">
            {/* Background Orbs */}
            <div className="absolute top-0 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 relative">
                <div className="text-center max-w-4xl mx-auto">
                    <div>
                        <h1 className="invisible hero-title text-5xl md:text-7xl font-extrabold text-secondary mb-6 leading-[1.1]">
                            We Architect & Ship <br />
                            <span className="gradient-text">Scalable Software</span>
                        </h1>
                        <p className="invisible hero-desc text-lg md:text-xl text-foreground/70 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
                            We guide you through the process of building high-quality, scalable
                            products that your users will love.
                        </p>

                        <div className="hero-btns flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                            <a href="#contact" className="invisible btn-left bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-black transition-all hover:scale-105 shadow-xl shadow-secondary/10">
                                Book a Free Call
                            </a>
                            <a href="#projects" className="invisible btn-right bg-white border-2 border-secondary/10 text-secondary px-8 py-4 rounded-xl font-bold text-lg hover:border-secondary transition-all hover:scale-105">
                                View Our Work
                            </a>
                        </div>
                    </div>

                    <div className="invisible hero-stats grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 py-10 border-t border-gray-100">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl font-extrabold text-secondary mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-foreground/60 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
