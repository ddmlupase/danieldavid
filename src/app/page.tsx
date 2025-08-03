// ===== IMPORTS =====
// Components
import Navbar from "@/components/navbar";
import Footer from '@/components/footer';
import Status from "@/components/mainpage/status";
import TechStack from "@/components/mainpage/techstack";
import Services from "@/components/mainpage/services";
import Hero from "@/components/mainpage/hero";
import Projects from "@/components/mainpage/projects";
import Certifications from "@/components/mainpage/certification";


export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        
        {/* ===== HERO SECTION ===== */}
        <Hero />
      </div>

      {/* ===== SERVICES SECTION ===== */}
      <Services />

      {/* ===== PROJECTS SECTION ===== */}
      <Projects />

      {/* ===== STATUS COMPONENT ===== */}
      <Status />

      {/* ===== CERTIFICATIONS SECTION ===== */}
      <Certifications />

      {/* ===== TECH STACK COMPONENT ===== */}
      <TechStack />

      {/* ===== FOOTER COMPONENT ===== */}
      <Footer />
    </div>
  );
}