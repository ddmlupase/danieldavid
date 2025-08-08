"use client";

import Link from 'next/link';
import Image from "next/image";
import { useEffect } from 'react';
// Service Icons
import database from '@/assets/database.png';
import domain from '@/assets/domain.png';
import window from '@/assets/window.png';

export default function Services() {
  useEffect(() => {
    // Intersection Observer for Services Section
    const servicesObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('services-visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesObserver.observe(servicesSection);
    }

    // Cleanup function
    return () => {
      if (servicesSection) {
        servicesObserver.unobserve(servicesSection);
      }
    };
  }, []);

  return (
    <div>
      {/* ===== SERVICES SECTION ===== */}
      <div className="w-full bg-[#222222] py-16 sm:py-20 lg:py-24 mt-45" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Services Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 sm:gap-0 opacity-0 -translate-y-6 transition-all duration-800 ease-out [.services-visible_&]:opacity-100 [.services-visible_&]:translate-y-0">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center sm:text-left">
              MY SERVICES
            </h2>
            <Link href="/services">
              <button className="text-white text-xs sm:text-sm bg-transparent border border-white px-3 py-2 rounded-md hover:bg-white hover:text-black cursor-pointer transition-colors duration-300 transform hover:scale-105">
                More Services
              </button>
            </Link>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 mt-12 sm:mt-16 font-reddit-sans">

            {/* Service 1: Database Design */}
            <div className="text-center md:text-left opacity-0 translate-y-10 transition-all duration-800 ease-out delay-300 [.services-visible_&]:opacity-100 [.services-visible_&]:translate-y-0">
              <div className="flex justify-center md:justify-start transform transition-transform duration-300 hover:scale-110">
                <Image
                  src={database}
                  alt="database"
                  width={40}
                  height={40}
                  className="sm:w-12 sm:h-12"
                />
              </div>
              <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-medium mt-6 sm:mt-8 leading-tight">
                RELATIONAL DATABASE <br /> DESIGN SERVICE
              </h3>
              <p className="text-white text-sm sm:text-base font-thin mt-4 sm:mt-6 lg:mt-9 leading-relaxed">
                Designing ER diagrams and building <br />structured database schemas using <br />MySQL Workbench.
              </p>
            </div>

            {/* Service 2: Website Development */}
            <div className="text-center md:text-left opacity-0 translate-y-10 transition-all duration-800 ease-out delay-500 [.services-visible_&]:opacity-100 [.services-visible_&]:translate-y-0">
              <div className="flex justify-center md:justify-start transform transition-transform duration-300 hover:scale-110">
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
                Developing responsive websites with <br />both frontend and backend functionality.
              </p>
            </div>

            {/* Service 3: Windows Software */}
            <div className="text-center md:text-left md:col-span-2 xl:col-span-1 opacity-0 translate-y-10 transition-all duration-800 ease-out delay-700 [.services-visible_&]:opacity-100 [.services-visible_&]:translate-y-0">
              <div className="flex justify-center md:justify-start transform transition-transform duration-300 hover:scale-110">
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
                Creating custom Windows applications <br />using C# and Visual Studio.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}