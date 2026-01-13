"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-3",
                isScrolled ? "glass-nav py-2" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-[52px] h-[52px] flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                        <img src="/fondex_logo_clean.png" alt="Fondex" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-secondary font-bold text-xl tracking-tight">
                        Fondex IT Solutions
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            scroll={false}
                            className="text-foreground/80 hover:text-primary font-medium transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        scroll={false}
                        className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-accent transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-95"
                    >
                        Hire Us
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-secondary p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <div
                className={cn(
                    "fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300 pt-24 px-6",
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-2xl font-semibold text-secondary"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="bg-primary text-white px-6 py-4 rounded-xl font-bold text-center text-xl mt-4"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Hire Us
                    </Link>
                </div>
            </div>
        </nav>
    );
}
