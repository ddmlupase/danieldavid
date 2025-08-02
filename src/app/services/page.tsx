import Navbar from "@/components/navbar";
import Footer from '@/components/footer';
import Image from 'next/image';

// Import your service icons
import database from '@/assets/database.png';
import domain from '@/assets/domain.png';
import window from '@/assets/window.png';

export default function Services() {
  return (
    <div className="bg-white min-h-screen">
      {/* ===== NAVBAR ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
      </div>

      {/* ===== HERO SECTION ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <main className="min-h-[400px] sm:min-h-[500px] flex items-center justify-center">
          <div className="text-center w-full">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#222222] mb-6 sm:mb-8">
              MY SERVICES
            </h1>
            <p className="max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-[#222222] leading-relaxed px-4">
              I offer comprehensive database development and software solutions tailored to meet your business needs. 
              From database design to full-stack development, I&apos;m committed to delivering high-quality, scalable solutions.
            </p>
          </div>
        </main>
      </div>

      {/* ===== CORE SERVICES SECTION ===== */}
      <div className="w-full bg-[#222222] py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              CORE SERVICES
            </h2>
            <p className="text-sm sm:text-base text-white font-light max-w-2xl mx-auto">
              Professional services I offer to help bring your projects to life
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 font-reddit-sans">

            {/* Service 1: Database Design */}
            <div className="transform transition-transform duration-300 hover:scale-105 flex flex-col items-center text-center bg-white/5 p-8 rounded-lg">
              <div className="flex justify-center mb-6">
                <Image
                  src={database}
                  alt="Database Design Service"
                  width={60}
                  height={60}
                  className="sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                />
              </div>
              <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 leading-tight">
                RELATIONAL DATABASE DESIGN
              </h3>
              <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed mb-6">
                Professional database architecture and design services using industry best practices. 
                I create efficient, normalized database structures that scale with your business needs.
              </p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                    MySQL
                  </span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                    ER Diagrams
                  </span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                    WorkBench
                  </span>
                </div>
                
              </div>
            </div>

            {/* Service 2: Website Development */}
            <div className="transform transition-transform duration-300 hover:scale-105 flex flex-col items-center text-center bg-white/5 p-8 rounded-lg">
              <div className="flex justify-center mb-6">
                <Image
                  src={domain}
                  alt="Website Development Service"
                  width={60}
                  height={60}
                  className="sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                />
              </div>
              <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 leading-tight">
                WEBSITE DEVELOPMENT
              </h3>
              <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed mb-6">
                Full-stack web development services creating responsive, modern websites with both 
                frontend user interfaces and robust backend functionality integrated with databases.
              </p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                    React
                  </span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                    Next.js
                  </span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                    JavaScript
                  </span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                    HTML/CSS
                  </span>
                </div>
                
              </div>
            </div>

            {/* Service 3: Windows Software */}
            <div className="transform transition-transform duration-300 hover:scale-105 flex flex-col items-center text-center bg-white/5 p-8 rounded-lg">
              <div className="flex justify-center mb-6">
                <Image
                  src={window}
                  alt="Windows Software Development Service"
                  width={60}
                  height={60}
                  className="sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                />
              </div>
              <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 leading-tight">
                WINDOWS SOFTWARE DEVELOPMENT
              </h3>
              <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed mb-6">
                Custom Windows desktop applications built with C# and .NET framework. 
                Creating user-friendly software solutions with database integration and modern UI design.
              </p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                    C#
                  </span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                    .NET
                  </span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                    Visual Studio
                  </span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                    WinForms
                  </span>
                </div>
            
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ===== ADDITIONAL SERVICES SECTION ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] mb-4">
            ADDITIONAL SERVICES
          </h2>
          <p className="text-sm sm:text-base text-[#222222] font-light max-w-2xl mx-auto">
            Specialized services to support your development needs
          </p>
        </div>

        <div className="text-center text-black xl:text-5xl font-reddit-sans font-bold">
            COMING SOON...
        </div>

      </div>

      {/* ===== PROCESS SECTION ===== */}
      <div className="w-full bg-[#222222] py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              MY PROCESS
            </h2>
            <p className="text-sm sm:text-base text-white font-light max-w-2xl mx-auto">
              How I work with clients to deliver successful projects
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-reddit-sans">

            {/* Step 1 */}
            <div className="text-center text-white">
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Discovery</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Understanding your requirements, goals, and technical needs through detailed consultation.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center text-white">
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Planning</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Creating detailed project plans, database schemas, and technical specifications.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center text-white">
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Development</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Building your solution with regular updates and feedback sessions throughout the process.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center text-white">
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">04</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Delivery</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Testing, deployment, and ongoing support to ensure your project&apos;s continued success.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ===== CALL TO ACTION SECTION ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] mb-6">
            READY TO START YOUR PROJECT?
          </h2>
          <p className="text-sm sm:text-base text-[#222222]/80 font-light max-w-3xl mx-auto mb-8 leading-relaxed">
            Let&apos;s discuss how I can help bring your database and software development projects to life. 
            I&apos;m committed to delivering high-quality solutions that meet your specific needs and exceed your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/danieldavidresume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
            <button className="text-[#222222] border border-[#222222] hover:bg-[#222222] hover:text-white px-8 py-3 rounded-md cursor-pointer transition-colors duration-300 text-sm sm:text-base font-medium">
              Download Resume
            </button>
            </a>

          </div>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}