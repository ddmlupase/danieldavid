import Navbar from "@/components/navbar";
import Footer from '@/components/footer';
import Image from 'next/image';

// Import your service icons
import database from '@/assets/database.png';
import domain from '@/assets/domain.png';
import window from '@/assets/window.png';

import Link from "next/link";

export default function Services() {
  return (
    <div className="bg-white min-h-screen">
      {/* ===== NAVBAR ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
      </div>

      {/* ===== HERO SECTION ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <main className="min-h-[400px] sm:min-h-[330px] flex items-center justify-center">
          <div className="text-center w-full">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[85px] font-extrabold text-[#222222] mb-6 sm:mb-8">
              MY SERVICES
            </h1>
            <div className="w-120 h-0.5 bg-[#222222] mx-auto mb-6 sm:mb-8"></div>
            <p className="max-w-4xl mx-auto text-sm sm:text-base font-light text-[#222222] leading-relaxed px-4">
              I offer comprehensive database development and software solutions tailored to meet your business needs. 
              From database design to full-stack development, I&apos;m committed to delivering high-quality, scalable solutions.
            </p>
          </div>
        </main>
      </div>

      {/* ===== CORE SERVICES SECTION ===== */}
      <div className="w-full bg-white py-0 sm:py-2 lg:py-4 mb-40">
        <div className="max-w-7xl mx-auto px-0 sm:px-2 lg:px-4">
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 font-reddit-sans">

            {/* Service 1: Database Design */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 sm:p-10 lg:p-12 text-center shadow-sm hover:shadow-xl hover:border-white transition-all duration-500 transform hover:-translate-y-2 group">
              <div className="flex justify-center mb-2">
                <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 border-[#222222] flex items-center justify-center">
                  <Image
                    src={database}
                    alt="Database Design Service"
                    width={50}
                    height={50}
                    className="sm:w-16 sm:h-16 lg:w-20 lg:h-20 filter brightness-0"
                    />
                </div>
              </div>
              <h3 className="text-[#222222] text-lg sm:text-xl lg:text-2xl font-extrabold mb-8 leading-tight">
                RELATIONAL DATABASE<br />DESIGN SERVICE
              </h3>
              <p className="text-[#666666] text-sm sm:text-base font-medium leading-relaxed max-w-xs mx-auto text-center">
                Designing ER diagrams and building structured database schemas using MySQL Workbench.
              </p>
            </div>

            {/* Service 2: Website Development */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 sm:p-10 lg:p-12 text-center shadow-sm hover:shadow-xl hover:border-white transition-all duration-500 transform hover:-translate-y-2 group">
              <div className="flex justify-center mb-2">
                <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 border-[#222222] flex items-center justify-center">
                  <Image
                    src={domain}
                    alt="Database Design Service"
                    width={50}
                    height={50}
                    className="sm:w-16 sm:h-16 lg:w-20 lg:h-20 filter brightness-0"
                    />
                </div>
              </div>
              <h3 className="text-[#222222] text-lg sm:text-xl lg:text-2xl font-extrabold mb-8 leading-tight">
                WEBSITE<br />DEVELOPMENT
              </h3>
              <p className="text-[#666666] text-sm sm:text-base font-medium leading-relaxed max-w-xs mx-auto text-center">
                Developing responsive websites with both frontend and backend functionality.
              </p>
            </div>

            {/* Service 3: Windows Software */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 sm:p-10 lg:p-12 text-center shadow-sm hover:shadow-xl hover:border-white transition-all duration-500 transform hover:-translate-y-2 group">
              <div className="flex justify-center mb-2">
                <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 border-[#222222] flex items-center justify-center">
                  <Image
                    src={window}
                    alt="Database Design Service"
                    width={50}
                    height={50}
                    className="sm:w-16 sm:h-16 lg:w-20 lg:h-20 filter brightness-0"
                    />
                </div>
              </div>
              <h3 className="text-[#222222] text-lg sm:text-xl lg:text-2xl font-extrabold mb-8 leading-tight">
                WINDOWS SOFTWARE<br />DEVELOPMENT
              </h3>
              <p className="text-[#666666] text-sm sm:text-base font-medium leading-relaxed max-w-xs mx-auto text-center">
                Creating custom Windows applications using C# and Visual Studio.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ===== ADDITIONAL SERVICES SECTION ===== */}
      <div className="w-full bg-[#222222] py-16 sm:py-20 lg:py-24 mb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 flex-col">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-white mb-4">
              ADDITIONAL SERVICES
            </h2>
            <p className="text-sm sm:text-base text-white max-w-2xl mx-auto">
              Specialized services to support your development needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 font-reddit-sans">

          {/* Service 1*/}
            <div className="bg-[#222222] border border-gray-200 rounded-lg p-8 sm:p-10 lg:p-12 text-center">
              <div className="flex justify-center mb-2">
                <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 border-[#222222] flex items-center justify-center">
                 <h1 className="text-white font-extrabold text-lg sm:text-xl lg:text-9xl">...</h1>
                </div>
              </div>
              <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-extrabold mb-8 leading-tight">
                Coming Soon!
              </h3>
              <p className="text-white text-sm sm:text-base font-medium leading-relaxed max-w-xs mx-auto text-center">
                This service is still in progress and will launch soon.
              </p>
            </div>
            {/* Service 2 */}
            <div className="bg-[#222222] border border-gray-200 rounded-lg p-8 sm:p-10 lg:p-12 text-center">
              <div className="flex justify-center mb-2">
                <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 border-[#222222] flex items-center justify-center">
                  <h1 className="text-white font-extrabold text-lg sm:text-xl lg:text-9xl">...</h1>
                </div>
              </div>
              <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-extrabold mb-8 leading-tight">
                Coming Soon!
              </h3>
              <p className="text-white text-sm sm:text-base font-medium leading-relaxed max-w-xs mx-auto text-center">
                This service is still in progress and will launch soon.
              </p>
            </div>
            {/* Service 3 */}
            <div className="bg-[#222222] border border-gray-200 rounded-lg p-8 sm:p-10 lg:p-12 text-center">
              <div className="flex justify-center mb-2">
                <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 border-[#222222] flex items-center justify-center">
                  <h1 className="text-white font-extrabold text-lg sm:text-xl lg:text-9xl">...</h1>
                </div>
              </div>
              <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-extrabold mb-8 leading-tight">
                Coming Soon!
              </h3>
              <p className="text-white text-sm sm:text-base font-medium leading-relaxed max-w-xs mx-auto text-center">
                This service is still in progress and will launch soon.
              </p>
            </div>

            </div>

        </div>
      </div>

      {/* ===== PROCESS SECTION ===== */}
      <div className="w-full bg-white py-16 sm:py-20 lg:py-24 mb-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-[#222222] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-4">
              MY PROCESS
            </h2>
            <p className="text-sm sm:text-base text-[#222222] max-w-2xl mx-auto">
              How I work with clients to deliver successful projects
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-reddit-sans">

            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-[#222222] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">01</span>
              </div>
              <h3 className="text-xl font-bold text-[#222222] mb-4">Discovery</h3>
              <p className="text-[#222222] text-sm leading-relaxed">
                Understanding your requirements, goals, and technical needs through detailed consultation.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-[#222222] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">02</span>
              </div>
              <h3 className="text-xl font-bold text-[#222222] mb-4">Planning</h3>
              <p className="text-[#222222] text-sm leading-relaxed">
                Creating detailed project plans, database schemas, and technical specifications.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-[#222222] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">03</span>
              </div>
              <h3 className="text-xl font-bold text-[#222222] mb-4">Development</h3>
              <p className="text-[#222222] text-sm leading-relaxed">
                Building your solution with regular updates and feedback sessions throughout the process.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="bg-[#222222] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">04</span>
              </div>
              <h3 className="text-xl font-bold text-[#222222] mb-4">Delivery</h3>
              <p className="text-[#222222] text-sm leading-relaxed">
                Testing, deployment, and ongoing support to ensure your project&apos;s continued success.
              </p>
            </div>

          </div>
        </div>
      </div>

      

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}