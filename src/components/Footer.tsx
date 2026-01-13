import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-secondary text-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <div className="w-12 h-12 flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                                <img src="/fondex_logo_clean.png" alt="Fondex" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-white font-bold text-xl tracking-tight">
                                Fondex IT Solutions
                            </span>
                        </Link>
                        <p className="text-white/60 leading-relaxed font-medium">
                            We engineer scalable software solutions for forward-thinking companies. Let's build the future together.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-white/60 font-medium">
                            <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="#process" className="hover:text-primary transition-colors">Process</Link></li>
                            <li><Link href="#projects" className="hover:text-primary transition-colors">Projects</Link></li>
                            <li><Link href="#testimonials" className="hover:text-primary transition-colors">Testimonials</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Services</h4>
                        <ul className="space-y-4 text-white/60 font-medium">
                            <li>Web Development</li>
                            <li>Mobile Solutions</li>
                            <li>UI/UX Design</li>
                            <li>Cloud Architecture</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Stay Connected</h4>
                        <ul className="space-y-4 text-white/60 font-medium">
                            <li>GitHub</li>
                            <li>LinkedIn</li>
                            <li>Twitter</li>
                            <li>Clutch</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm font-medium">
                    <p>© 2026 Fondex IT Solutions. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
