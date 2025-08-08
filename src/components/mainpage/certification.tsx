'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import sqlintermediate from '@/assets/sqlintermediate.jpg';
import introsql from '@/assets/introsql.jpg';

export default function Certifications() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="w-full bg-[#222222] py-16 sm:py-20 lg:py-24" 
      id="certifications"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 lg:gap-12">

        {/* Text Content */}
        <div className={`text-white w-full lg:w-[35%] text-center lg:text-left transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-sm sm:text-base">Check Out</h3>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-7 mt-1">
            MY CERTIFICATIONS
          </h1>
          <p className="text-sm sm:text-base leading-relaxed ">
            A collection of certifications I&apos;ve earned to support my learning and development in tech.
          </p>
          <Link href="/certifications">
            <button className="cursor-pointer mt-6 sm:mt-10 text-white text-xs sm:text-sm bg-transparent border border-white px-3 py-2 rounded-md hover:bg-white hover:text-black transition-all duration-200">
              More Certifications
            </button>
          </Link>
        </div>

        {/* Certifications Grid */}
        <div className={`text-white w-full lg:w-[65%] transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

            {/* Certification 1: Intermediate SQL */}
            <div className="flex flex-col items-center group">
              <div className="relative bg-white w-full max-w-[245px] h-32 sm:h-36 lg:h-40 overflow-hidden mb-3 rounded-lg hover:scale-105 transition-transform duration-75">
                <Image
                  src={sqlintermediate}
                  alt="Intermediate SQL Certificate"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 245px"
                />
              </div>
              <p className="text-center font-semibold text-sm sm:text-base">
                Intermediate SQL
              </p>
              <p className="text-center text-gray-400 text-xs sm:text-sm">
                Sololearn
              </p>
            </div>

            {/* Certification 2: Coming Soon */}
            <div className="flex flex-col items-center group">
              <div className="bg-gray-200 w-full max-w-[245px] h-32 sm:h-36 lg:h-40 text-gray-600 flex items-center justify-center mb-3 text-xs sm:text-sm rounded-lg hover:scale-105 transition-transform duration-75">
                <span className="font-medium">Coming Soon!</span>
              </div>
              <p className="text-center font-semibold text-sm sm:text-base">
                Introduction to Networks
              </p>
              <p className="text-center text-gray-400 text-xs sm:text-sm">
                Cisco
              </p>
            </div>

            {/* Certification 3: Introduction to SQL */}
            <div className="flex flex-col items-center sm:col-span-2 lg:col-span-1 group">
              <div className="relative bg-white w-full max-w-[245px] h-32 sm:h-36 lg:h-40 overflow-hidden mb-3 rounded-lg hover:scale-105 transition-transform duration-75">
                <Image
                  src={introsql}
                  alt="Introduction to SQL Certificate"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 245px"
                />
              </div>
              <p className="text-center font-semibold text-sm sm:text-base">
                Introduction to SQL
              </p>
              <p className="text-center text-gray-400 text-xs sm:text-sm">
                Sololearn
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}