import Navbar from "@/components/navbar";
import Footer from '@/components/footer';
import Image from 'next/image';

// Import your certificate images
import introsql from '@/assets/introsql.jpg';
import sqlintermediate from '@/assets/sqlintermediate.jpg';

export default function Certifications() {
  return (
    <>
      {/* ===== NAVBAR ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
      </div>

      {/* ===== HERO SECTION ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <main className="min-h-[400px] sm:min-h-[500px] flex items-center justify-center">
          <div className="text-center w-full">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#222222] mb-6 sm:mb-8">
              MY CERTIFICATIONS
            </h1>
            <p className="max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-[#222222] leading-relaxed px-4">
              I&apos;m continuously pursuing various certifications to enhance my skills and stay current with 
              industry standards. Here&apos;s a collection of certifications I&apos;ve earned and am working towards.
            </p>
          </div>
        </main>
      </div>

      {/* ===== COMPLETED CERTIFICATIONS SECTION ===== */}
      <div className="w-full bg-[#222222] py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              COMPLETED
            </h2>
            <p className="text-sm sm:text-base text-white font-light max-w-2xl mx-auto">
              Certifications I have successfully completed and earned
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 font-reddit-sans">

            {/* Certification 1: Intermediate SQL */}
            <div className="transform transition-transform duration-300 hover:scale-105 flex flex-col items-center bg-white/5 p-6 rounded-lg">
              <div className="relative bg-white w-full max-w-[280px] h-40 sm:h-44 lg:h-48 overflow-hidden mb-4 rounded-md">
                <Image
                  src={sqlintermediate}
                  alt="Intermediate SQL Certificate"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                />
              </div>
              <h3 className="text-white text-lg sm:text-xl font-semibold text-center mb-2">
                Intermediate SQL
              </h3>
              <p className="text-white/80 text-sm sm:text-base font-light text-center mb-2">
                Sololearn
              </p>
              <p className="text-white/60 text-xs sm:text-sm text-center">
                Completed: 2024
              </p>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs">
                  SQL
                </span>
                <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs">
                  Database
                </span>
              </div>
            </div>

            {/* Certification 2: Introduction to SQL */}
            <div className="transform transition-transform duration-300 hover:scale-105 flex flex-col items-center bg-white/5 p-6 rounded-lg">
              <div className="relative bg-white w-full max-w-[280px] h-40 sm:h-44 lg:h-48 overflow-hidden mb-4 rounded-md">
                <Image
                  src={introsql}
                  alt="Introduction to SQL Certificate"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                />
              </div>
              <h3 className="text-white text-lg sm:text-xl font-semibold text-center mb-2">
                Introduction to SQL
              </h3>
              <p className="text-white/80 text-sm sm:text-base font-light text-center mb-2">
                Sololearn
              </p>
              <p className="text-white/60 text-xs sm:text-sm text-center">
                Completed: 2023
              </p>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs">
                  SQL
                </span>
                <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs">
                  Fundamentals
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ===== IN PROGRESS CERTIFICATIONS SECTION ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] mb-4">
            CERTIFICATIONS IN PROGRESS
          </h2>
          <p className="text-sm sm:text-base text-[#222222] font-light max-w-2xl mx-auto">
            Currently working towards these certifications to expand my expertise
          </p>
        </div>

        {/* In Progress Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 font-reddit-sans">

          {/* Certification 1: Introduction to Networks */}
          <div className="transform transition-transform duration-300 hover:scale-105 flex flex-col items-center border-2 border-[#222222] p-6 rounded-lg">
            <div className="bg-[#222222] w-full max-w-[280px] h-40 sm:h-44 lg:h-48 text-white flex items-center justify-center mb-4 rounded-md">
              <div className="text-center">
                <p className="text-sm">In Progress</p>
              </div>
            </div>
            <h3 className="text-[#222222] text-lg sm:text-xl font-semibold text-center mb-2">
              Introduction to Networks
            </h3>
            <p className="text-[#222222]/80 text-sm sm:text-base font-light text-center mb-2">
              Cisco Networking Academy
            </p>
            <p className="text-[#222222]/60 text-xs sm:text-sm text-center">
              Expected: 2025
            </p>
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              <span className="bg-[#222222]/20 text-[#222222] px-2 py-1 rounded-full text-xs">
                Networking
              </span>
              <span className="bg-[#222222]/20 text-[#222222] px-2 py-1 rounded-full text-xs">
                Cisco
              </span>
            </div>
          </div>

          {/* Certification 2: Advanced SQL (Future) */}
          <div className="transform transition-transform duration-300 hover:scale-105 flex flex-col items-center border-2 border-[#222222] p-6 rounded-lg">
            <div className="bg-[#222222] w-full max-w-[280px] h-40 sm:h-44 lg:h-48 text-white flex items-center justify-center mb-4 rounded-md">
              <div className="text-center">
                <p className="text-sm">Planning</p>
              </div>
            </div>
            <h3 className="text-[#222222] text-lg sm:text-xl font-semibold text-center mb-2">
              Advanced SQL
            </h3>
            <p className="text-[#222222]/80 text-sm sm:text-base font-light text-center mb-2">
              Sololearn
            </p>
            <p className="text-[#222222]/60 text-xs sm:text-sm text-center">
              Expected: 2025
            </p>
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              <span className="bg-[#222222]/20 text-[#222222] px-2 py-1 rounded-full text-xs">
                SQL
              </span>
              <span className="bg-[#222222]/20 text-[#222222] px-2 py-1 rounded-full text-xs">
                Advanced
              </span>
            </div>
          </div>

          {/* Certification 3: Database Administration */}
          <div className="transform transition-transform duration-300 hover:scale-105 flex flex-col items-center border-2 border-[#222222] p-6 rounded-lg">
            <div className="bg-[#222222] w-full max-w-[280px] h-40 sm:h-44 lg:h-48 text-white flex items-center justify-center mb-4 rounded-md">
              <div className="text-center">
                <p className="text-sm">Future Goal</p>
              </div>
            </div>
            <h3 className="text-[#222222] text-lg sm:text-xl font-semibold text-center mb-2">
              Database Administration
            </h3>
            <p className="text-[#222222]/80 text-sm sm:text-base font-light text-center mb-2">
              MySQL
            </p>
            <p className="text-[#222222]/60 text-xs sm:text-sm text-center">
              Expected: 2025
            </p>
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              <span className="bg-[#222222]/20 text-[#222222] px-2 py-1 rounded-full text-xs">
                MySQL
              </span>
              <span className="bg-[#222222]/20 text-[#222222] px-2 py-1 rounded-full text-xs">
                Admin
              </span>
            </div>
          </div>

        </div>
      </div>

      

      {/* ===== FOOTER ===== */}
      <Footer />
    </>
  );
}