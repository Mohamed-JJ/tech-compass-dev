"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Mail, MapPin, Phone, Send, Linkedin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from(".contact-info", {
            opacity: 0,
            x: -100,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".contact-info",
                start: "top 80%",
            },
        });

        gsap.from(".contact-form", {
            opacity: 0,
            x: 100,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".contact-form",
                start: "top 80%",
            },
        });
    }, { scope: container });

    return (
        <section ref={container} id="contact" className="flex-1 flex flex-col justify-center py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="grid md:grid-cols-2 gap-16">
                    <div className="contact-info">
                        <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">
                            GET IN TOUCH
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-8">
                            Ready to Build Something <br />
                            <span className="text-primary font-medium">Great?</span>
                        </h2>
                        <p className="text-lg text-foreground/60 mb-12 leading-relaxed font-medium">
                            We're currently accepting new projects and would love to hear about
                            yours. Let's discuss how we can help you achieve your goals.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-secondary uppercase tracking-wider">Email Us</div>
                                    <div className="text-lg text-foreground/60 font-medium">hello@fondex.com</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <Linkedin size={24} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-secondary uppercase tracking-wider">Follow Us</div>
                                    <a
                                        href="https://www.linkedin.com/company/fondex-it-solutions/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg text-foreground/60 font-medium hover:text-primary transition-colors"
                                    >
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-secondary uppercase tracking-wider">Our Office</div>
                                    <div className="text-lg text-foreground/60 font-medium">1337, Khouribga</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl">
                        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Thanks for your message! We'll get back to you soon."); }}>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-secondary">First Name <span className="text-red-500">*</span></label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="John"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-secondary">Last Name <span className="text-red-500">*</span></label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Doe"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-secondary">Email Address <span className="text-red-500">*</span></label>
                                <input
                                    required
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-secondary">Message <span className="text-red-500">*</span></label>
                                <textarea
                                    required
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-accent transition-all hover:scale-[1.02] shadow-lg shadow-primary/20"
                            >
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
