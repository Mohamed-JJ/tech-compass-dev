import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { CaseStudySlider } from "@/components/CaseStudySlider";
import { Testimonials } from "@/components/Testimonials";
import { TechStack } from "@/components/TechStack";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="snap-container">
      <Navbar />
      <div className="snap-section">
        <Hero />
      </div>
      <div className="snap-section">
        <Services />
      </div>
      <div className="snap-section">
        <Process />
      </div>
      <div className="snap-section">
        <Projects />
      </div>
      <div className="snap-section">
        <CaseStudySlider />
      </div>
      <div className="snap-section">
        <Testimonials />
      </div>
      <div className="snap-section">
        <TechStack />
      </div>
      <div className="snap-section">
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
