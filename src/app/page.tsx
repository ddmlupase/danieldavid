// ===== IMPORTS =====
// Components
import Navbar from "@/components/navbar";
import Footer from '@/components/footer';
import Status from "@/components/status";
import TypeName from "@/components/TypeName";
import TechStack from "@/components/techstack";

// Next.js
import Image from 'next/image';

// Profile & Project Images
import me from '@/assets/me.png';
import introsql from '@/assets/introsql.jpg';
import sqlintermediate from '@/assets/sqlintermediate.jpg';

// Service Icons
import database from '@/assets/database.png';
import domain from '@/assets/domain.png';
import window from '@/assets/window.png';

//link
import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        
        <main className="min-h-[600px] sm:min-h-[700px] flex items-center justify-center" id="home">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-12">
            
            {/* Hero Text Content */}
            <div className="w-full lg:w-[60%] text-center lg:text-left">
              <h1 className="text-lg sm:text-xl font-light font-reddit-sans mt-10 sm:mt-20 text-[#222222]">
                Hi there, I am
              </h1>

              <TypeName />

              <h1 className="text-xl sm:text-2xl lg:text-2xl font-semibold font-reddit-sans text-[#222222] leading-tight mt-2">
                JUNIOR DATABASE DEVELOPER
              </h1>

              <p className="max-w-none lg:max-w-xl text-sm sm:text-base font-light font-reddit-sans text-[#222222] leading-relaxed mt-4 sm:mt-7 px-4 lg:px-0">
                Daniel David is a dedicated database-focused student passionate about organizing, 
                managing, and securing data. With a growing foundation in SQL, database design, and 
                data-driven development, he aims to build efficient, scalable systems. 
              </p>

              <a href="/danieldavidresume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-6 sm:mt-8 bg-white text-[#222222] hover:bg-[#222222] hover:text-white border border-[#222222] px-4 sm:px-6 py-2 sm:py-3 rounded-md cursor-pointer transition-colors duration-300 text-sm sm:text-base">
                  Download Resume
                </button>
              </a>
            </div>

            {/* Hero Profile Image */}
            <div className="w-full lg:w-[40%] flex justify-center items-center cursor-pointer">
              <div className="relative w-64 sm:w-80 lg:w-96 aspect-square group">
                <Image
                  src={me}
                  alt="me"
                  quality={100}
                  fill
                  className="object-cover rounded-full transition-transform duration-500 group-hover:scale-105 group-hover:shadow-lg"
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* ===== SERVICES SECTION ===== */}
      <div className="w-full bg-[#222222] py-16 sm:py-20 lg:py-24" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Services Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 sm:gap-0">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center sm:text-left">
              MY SERVICES
            </h2>
            <Link
            href="/services">
            <button className="text-white text-xs sm:text-sm bg-transparent border border-white px-3 py-2 rounded-md hover:bg-white hover:text-black cursor-pointer transition-colors duration-300">
              More Services
            </button>
            </Link>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 mt-12 sm:mt-16 font-reddit-sans">

            {/* Service 1: Database Design */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start">
                <Image
                  src={database}
                  alt="database"
                  width={40}
                  height={40}
                  className="sm:w-12 sm:h-12"
                />
              </div>
              <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-medium mt-6 sm:mt-8 leading-tight">
                RELATIONAL DATABASE DESIGN SERVICE
              </h3>
              <p className="text-white text-sm sm:text-base font-thin mt-4 sm:mt-6 lg:mt-9 leading-relaxed">
                Designing ER diagrams and building structured database schemas using MySQL Workbench.
              </p>
            </div>

            {/* Service 2: Website Development */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start">
                <Image
                  src={domain}
                  alt="domain"
                  width={40}
                  height={40}
                  className="sm:w-12 sm:h-12"
                />
              </div>
              <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-medium mt-6 sm:mt-8 leading-tight">
                WEBSITE DEVELOPMENT
              </h3>
              <p className="text-white text-sm sm:text-base font-thin mt-4 sm:mt-6 lg:mt-17 leading-relaxed">
                Developing responsive websites with both frontend and backend functionality.
              </p>
            </div>

            {/* Service 3: Windows Software */}
            <div className="text-center md:text-left md:col-span-2 xl:col-span-1">
              <div className="flex justify-center md:justify-start">
                <Image
                  src={window}
                  alt="window"
                  width={40}
                  height={40}
                  className="sm:w-12 sm:h-12"
                />
              </div>
              <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-medium mt-6 sm:mt-8 leading-tight">
                WINDOWS SOFTWARE DEVELOPMENT
              </h3>
              <p className="text-white text-sm sm:text-base font-thin mt-4 sm:mt-6 lg:mt-8 leading-relaxed">
                Creating custom Windows applications using C# and Visual Studio.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ===== PROJECTS SECTION ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col">

          {/* Projects Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center w-full mt-20 sm:mt-32 lg:mt-40 gap-4 sm:gap-0" id="projects">
            <h2 className="text-[#222222] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center sm:text-left">
              MY FEATURED PROJECTS
            </h2>
            <Link
            href="/projects">
            <button className="bg-white text-[#222222] hover:bg-[#222222] hover:text-white border border-[#222222] px-4 py-2 rounded-md cursor-pointer transition-colors duration-300 text-xs sm:text-sm">
              More Projects
            </button>
            </Link>
          </div>
          
          <p className="text-sm sm:text-base mt-4 text-center sm:text-left text-[#222222]">
            These featured projects highlight my experience in web development, database design, and application building.
          </p>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mt-10 sm:mt-14">

            {/* Project 1 */}
            <div className="transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="bg-[#222222] w-full h-48 sm:h-52 lg:h-56 flex justify-center items-center rounded-md">
                <p className="text-white text-sm sm:text-base">Coming Soon...</p>
              </div>

              <p className="text-[#222222] text-sm sm:text-base font-thin mt-3 font-reddit-sans">
                Entity Relationship Diagram Design
              </p>
              <h1 className="text-[#222222] text-base sm:text-lg font-bold font-reddit-sans mt-1">
                Inventory Management System
              </h1>

              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-[#D9D9D9] text-[#222222] px-2 py-1 rounded-full font-reddit-sans text-xs sm:text-sm">
                  MySQL
                </span>
                <span className="bg-[#D9D9D9] text-[#222222] px-2 py-1 rounded-full font-reddit-sans text-xs sm:text-sm">
                  WorkBench
                </span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="bg-[#222222] w-full h-48 sm:h-52 lg:h-56 flex justify-center items-center rounded-md">
                <p className="text-white text-sm sm:text-base">Coming Soon...</p>
              </div>

              <p className="text-[#222222] text-sm sm:text-base font-thin mt-3 font-reddit-sans">
                SQL integration with frontend, real-time updates, transactions
              </p>
              <h1 className="text-[#222222] text-base sm:text-lg font-bold font-reddit-sans mt-1">
                Task Management Web App
              </h1>

              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-[#D9D9D9] text-[#222222] px-2 py-1 rounded-full font-reddit-sans text-xs sm:text-sm">
                  MySQL
                </span>
                <span className="bg-[#D9D9D9] text-[#222222] px-2 py-1 rounded-full font-reddit-sans text-xs sm:text-sm">
                  JavaScript
                </span>
                <span className="bg-[#D9D9D9] text-[#222222] px-2 py-1 rounded-full font-reddit-sans text-xs sm:text-sm">
                  HTML
                </span>
                <span className="bg-[#D9D9D9] text-[#222222] px-2 py-1 rounded-full font-reddit-sans text-xs sm:text-sm">
                  CSS
                </span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="transform transition-transform duration-300 hover:scale-105 cursor-pointer md:col-span-2 xl:col-span-1">
              <div className="bg-[#222222] w-full h-48 sm:h-52 lg:h-56 flex justify-center items-center rounded-md">
                <p className="text-white text-sm sm:text-base">Coming Soon...</p>
              </div>
              
              <p className="text-[#222222] text-sm sm:text-base font-thin mt-3 font-reddit-sans">
                Complex joins, reports, data integrity
              </p>
              <h1 className="text-[#222222] text-base sm:text-lg font-bold font-reddit-sans mt-1">
                Student Information System
              </h1>

              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-[#D9D9D9] text-[#222222] px-2 py-1 rounded-full font-reddit-sans text-xs sm:text-sm">
                  MySQL
                </span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="bg-[#222222] w-full h-48 sm:h-52 lg:h-56 flex justify-center items-center rounded-md">
                <p className="text-white text-sm sm:text-base">Coming Soon...</p>
              </div>

              <p className="text-[#222222] text-sm sm:text-base font-thin mt-3 font-reddit-sans">
                Entity Relationship Diagram Design
              </p>
              <h1 className="text-[#222222] text-base sm:text-lg font-bold font-reddit-sans mt-1">
                Library Management System
              </h1>
              
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-[#D9D9D9] text-[#222222] px-2 py-1 rounded-full font-reddit-sans text-xs sm:text-sm">
                  MySQL
                </span>
                <span className="bg-[#D9D9D9] text-[#222222] px-2 py-1 rounded-full font-reddit-sans text-xs sm:text-sm">
                  WorkBench
                </span>
              </div>
            </div>

            {/* Project 5 */}
            <div className="transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="bg-[#222222] w-full h-48 sm:h-52 lg:h-56 flex justify-center items-center rounded-md">
                <p className="text-white text-sm sm:text-base">Coming Soon...</p>
              </div>

              <p className="text-[#222222] text-sm sm:text-base font-thin mt-3 font-reddit-sans">
                Many-to-many relationships, stored procedures, indexing
              </p>
              <h1 className="text-[#222222] text-base sm:text-lg font-bold font-reddit-sans mt-1">
                E-commerce Product & Order DB
              </h1>

              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-[#D9D9D9] text-[#222222] px-2 py-1 rounded-full font-reddit-sans text-xs sm:text-sm">
                  MySQL
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ===== STATUS COMPONENT ===== */}
      <Status />

      {/* ===== CERTIFICATIONS SECTION ===== */}
      <div className="w-full bg-[#222222] py-16 sm:py-20 lg:py-24" id="certifications">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Certifications Text Content */}
          <div className="text-white w-full lg:w-[35%] text-center lg:text-left">
            <h3 className="text-sm sm:text-base">Check Out</h3>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-7 mt-1">
              MY CERTIFICATIONS
            </h1>
            <p className="text-sm sm:text-base leading-relaxed">
              A collection of certifications I&apos;ve earned to support my learning and development in tech.
            </p>
            <Link href="/certifications">
            <button className="mt-6 sm:mt-10 text-white text-xs sm:text-sm bg-transparent border border-white px-3 py-2 rounded-md hover:bg-white hover:text-black cursor-pointer transition-colors duration-300">
              More Certifications
            </button>
            </Link>
          </div>

          {/* Certifications Grid */}
          <div className="text-white w-full lg:w-[65%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 font-reddit-sans">

              {/* Certification 1: Intermediate SQL */}
              <div className="transform transition-transform duration-300 hover:scale-110 flex flex-col items-center">
                <div className="relative bg-white w-full max-w-[245px] h-32 sm:h-36 lg:h-40 overflow-hidden mb-3">
                  <Image
                    src={sqlintermediate}
                    alt="Intermediate SQL Certificate"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 245px"
                  />
                </div>
                <p className="text-center font-semibold text-sm sm:text-base">Intermediate SQL</p>
                <p className="text-center font-thin text-xs sm:text-sm">Sololearn</p>
              </div>

              {/* Certification 2: Introduction to Networks (Coming Soon) */}
              <div className="transform transition-transform duration-300 hover:scale-110 flex flex-col items-center">
                <div className="bg-white w-full max-w-[245px] h-32 sm:h-36 lg:h-40 text-black flex items-center justify-center mb-3 text-xs sm:text-sm">
                  Coming Soon!
                </div>
                <p className="text-center font-semibold text-sm sm:text-base">Introduction to Networks</p>
                <p className="text-center font-thin text-xs sm:text-sm">Cisco</p>
              </div>

              {/* Certification 3: Introduction to SQL */}
              <div className="transform transition-transform duration-300 hover:scale-110 flex flex-col items-center sm:col-span-2 lg:col-span-1">
                <div className="relative bg-white w-full max-w-[245px] h-32 sm:h-36 lg:h-40 overflow-hidden mb-3">
                  <Image
                    src={introsql}
                    alt="Introduction to SQL Certificate"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 245px"
                  />
                </div>
                <p className="text-center font-semibold text-sm sm:text-base">Introduction to SQL</p>
                <p className="text-center font-thin text-xs sm:text-sm">Sololearn</p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ===== TECH STACK COMPONENT ===== */}
      <TechStack />

      {/* ===== FOOTER COMPONENT ===== */}
      <Footer />
    </div>
  );
}