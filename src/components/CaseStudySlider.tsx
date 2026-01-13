"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { GripVertical } from "lucide-react";

export function CaseStudySlider() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (even: MouseEvent | TouchEvent) => {
        if (!isDragging || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = "touches" in even ? even.touches[0].clientX : even.clientX;
        const position = ((x - rect.left) / rect.width) * 100;

        setSliderPosition(Math.min(Math.max(position, 0), 100));
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener("mousemove", handleMove);
            window.addEventListener("mouseup", handleMouseUp);
            window.addEventListener("touchmove", handleMove);
            window.addEventListener("touchend", handleMouseUp);
        }

        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("touchmove", handleMove);
            window.removeEventListener("touchend", handleMouseUp);
        };
    }, [isDragging]);

    return (
        <section className="py-24 bg-secondary text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">
                        TRANSFORMATION
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Turn Your Ideas Into <span className="text-primary">Reality</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        We take your vision and requirements and craft them into world-class digital experiences.
                    </p>
                </div>

                <div
                    ref={containerRef}
                    className="relative w-full aspect-video max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10 select-none cursor-ew-resize group"
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleMouseDown}
                >
                    {/* After Image (Full Width) */}
                    <div className="absolute inset-0">
                        <Image
                            src="/case-study-new.png"
                            alt="Modern Interface"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border border-white/10">
                            Final Product
                        </div>
                    </div>

                    {/* Before Image (Clipped) */}
                    <div
                        className="absolute inset-0 overflow-hidden"
                        style={{ width: `${sliderPosition}%` }}
                    >
                        <div className="absolute inset-0 w-full h-full"> {/* Inner wrapper to prevent squishing */}
                            <Image
                                src="/case-study-idea.png"
                                alt="Project Vision PDF"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border border-white/10">
                            Your Vision
                        </div>
                    </div>

                    {/* Slider Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center group-hover:bg-primary transition-colors"
                        style={{ left: `${sliderPosition}%` }}
                    >
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl transform -translate-x-1/2 text-secondary group-hover:scale-110 transition-transform">
                            <GripVertical size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
