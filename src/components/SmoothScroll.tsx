"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Initialize Lenis with tuned settings for performance
        const lenis = new Lenis({
            duration: 1.0, // Reduced from 1.2 for snappier feel
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        lenisRef.current = lenis;

        // Synchronize Lenis with GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        // Add Lenis's raf method to GSAP's ticker to ensure they update in the same frame
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000); // GSAP gives time in seconds, Lenis needs ms
        });

        // Default lag smoothing is usually sufficient (500ms, 33ms)
        // Removing explicit 0 setting to allow GSAP to smooth out frame drops
        // gsap.ticker.lagSmoothing(0);

        // Handle anchor links
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a');
            if (!anchor) return;

            const href = anchor.getAttribute('href');
            if (href?.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const element = document.querySelector(href) as HTMLElement;
                if (element) {
                    lenis.scrollTo(element, {
                        offset: -70, // Matched to approx navbar height
                        duration: 1.2,
                        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    });
                    // Optional: Update URL without jumping
                    window.history.pushState(null, '', href);
                }
            }
        };

        // Use capture phase to ensure we handle the click before Next.js or other listeners
        document.addEventListener('click', handleClick, true);

        return () => {
            gsap.ticker.remove((time) => {
                lenis.raf(time * 1000);
            });
            document.removeEventListener('click', handleClick);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
