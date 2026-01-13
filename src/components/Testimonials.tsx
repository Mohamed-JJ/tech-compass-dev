"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        name: "John Smith",
        role: "CEO at TechCorp",
        content: "Hexa Devs transformed our legacy system into a modern, scalable platform. Their engineering expertise is unparalleled.",
        rating: 5,
    },
    {
        name: "Sarah Johnson",
        role: "Product Manager at HealthScale",
        content: "The mobile app they delivered has seen incredible user adoption. They're not just developers; they're true partners.",
        rating: 5,
    },
    {
        name: "Michael Chen",
        role: "Founder of ShopFlow",
        content: "Working with them was a breeze. They delivered on time, within budget, and the quality was top-notch.",
        rating: 5,
    },
];

// Duplicate for marquee effect
const marqueeTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

export function Testimonials() {
    const container = useRef(null);
    const marqueeRef = useRef(null);

    useGSAP(() => {
        gsap.from(".testimonials-header > *", {
            opacity: 0,
            y: -80,
            stagger: 0.1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".testimonials-header",
                start: "top 90%",
            },
        });

        // Marquee Animation
        gsap.to(marqueeRef.current, {
            xPercent: -50,
            repeat: -1,
            duration: 20,
            ease: "none",
        });
    }, { scope: container });

    return (
        <section ref={container} id="testimonials" className="flex-1 flex flex-col justify-center py-24 bg-secondary text-white overflow-hidden">
            <div className="w-full">
                <div className="testimonials-header text-center mb-20 max-w-7xl mx-auto px-6">
                    <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">
                        TESTIMONIALS
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Trusted by Today's <br />
                        <span className="text-primary font-medium">Market Leaders</span>
                    </h2>
                </div>

                <div className="relative w-full overflow-hidden">
                    <div ref={marqueeRef} className="flex gap-8 w-max px-4">
                        {marqueeTestimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="testimonial-card w-[350px] md:w-[450px] flex-shrink-0 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all group"
                            >
                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={18} className="fill-primary text-primary" />
                                    ))}
                                </div>
                                <p className="text-lg text-white/80 mb-8 leading-relaxed italic font-medium">
                                    "{testimonial.content}"
                                </p>
                                <div>
                                    <h4 className="font-bold text-xl">{testimonial.name}</h4>
                                    <p className="text-white/60 font-medium">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
