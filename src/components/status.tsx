"use client";

import { useRef } from "react";
import CountUp from "react-countup";
import { useInView, motion } from "framer-motion";

export default function Status() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        className="flex flex-col items-center justify-center my-12 sm:my-16 md:my-20 lg:my-24"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-reddit-sans text-[#222222] text-center mb-6 sm:mb-8 lg:mb-10">
          DANIEL DAVID SO FAR HAS
        </h1>

        {/* Desktop and Tablet Layout (4 columns) */}
        <ul className="hidden md:flex text-[#222222] font-reddit-sans gap-4 lg:gap-6 xl:gap-8 max-w-full justify-center flex-wrap">
          <li className="flex items-center text-center min-w-0 gap-2 lg:gap-3 xl:gap-4 max-w-fit">
            <h1 className="font-bold text-6xl lg:text-8xl xl:text-9xl transition-transform duration-300 transform hover:scale-110 flex-shrink-0">
              {isInView ? <CountUp start={0} end={1} duration={4} formattingFn={(value) => value.toString().padStart(2, '0')} /> : "00"}
            </h1>
            <p className="text-sm lg:text-base xl:text-lg whitespace-nowrap">Clients.</p>
          </li>

          <li className="flex items-center text-center min-w-0 gap-2 lg:gap-3 xl:gap-4 max-w-fit">
            <h1 className="font-bold text-6xl lg:text-8xl xl:text-9xl transition-transform duration-300 transform hover:scale-110 flex-shrink-0">
              {isInView ? <CountUp start={0} end={3} duration={2} formattingFn={(value) => value.toString().padStart(2, '0')} /> : "00"}
            </h1>
            <p className="text-sm lg:text-base xl:text-lg whitespace-nowrap">Years of Experience.</p>
          </li>

          <li className="flex items-center text-center min-w-0 gap-2 lg:gap-3 xl:gap-4 max-w-fit">
            <h1 className="font-bold text-6xl lg:text-8xl xl:text-9xl transition-transform duration-300 transform hover:scale-110 flex-shrink-0">
              {isInView ? <CountUp start={0} end={2} duration={2} formattingFn={(value) => value.toString().padStart(2, '0')} /> : "00"}
            </h1>
            <p className="text-sm lg:text-base xl:text-lg whitespace-nowrap">Obtained Certifications.</p>
          </li>

          <li className="flex items-center text-center min-w-0 gap-2 lg:gap-3 xl:gap-4 max-w-fit">
            <h1 className="font-bold text-6xl lg:text-8xl xl:text-9xl transition-transform duration-300 transform hover:scale-110 flex-shrink-0">
              {isInView ? <CountUp start={0} end={4} duration={2} formattingFn={(value) => value.toString().padStart(2, '0')} /> : "00"}
            </h1>
            <p className="text-sm lg:text-base xl:text-lg whitespace-nowrap">Projects Made.</p>
          </li>
          <li className="flex items-center text-center min-w-0 gap-2 lg:gap-3 xl:gap-4 max-w-fit">
            <h1 className="font-bold text-6xl lg:text-8xl xl:text-9xl transition-transform duration-300 transform hover:scale-110 flex-shrink-0">
              {isInView ? <CountUp start={0} end={1} duration={4} formattingFn={(value) => value.toString().padStart(2, '0')} /> : "00"}
            </h1>
            <p className="text-sm lg:text-base xl:text-lg whitespace-nowrap">Progamming Language Mastered.</p>
          </li>
        </ul>

        {/* Mobile Layout (2x2 grid) */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:hidden text-[#222222] font-reddit-sans w-full max-w-md">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <h1 className="font-bold text-5xl sm:text-6xl transition-transform duration-300 transform hover:scale-110">
              {isInView ? <CountUp start={0} end={1} duration={2} formattingFn={(value) => value.toString().padStart(2, '0')} /> : "00"}
            </h1>
            <p className="text-xs sm:text-sm">Clients.</p>
          </div>

          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <h1 className="font-bold text-5xl sm:text-6xl transition-transform duration-300 transform hover:scale-110">
              {isInView ? <CountUp start={0} end={3} duration={2} formattingFn={(value) => value.toString().padStart(2, '0')} /> : "00"}
            </h1>
            <p className="text-xs sm:text-sm">Years of Experience.</p>
          </div>

          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <h1 className="font-bold text-5xl sm:text-6xl transition-transform duration-300 transform hover:scale-110">
              {isInView ? <CountUp start={0} end={2} duration={2} formattingFn={(value) => value.toString().padStart(2, '0')} /> : "00"}
            </h1>
            <p className="text-xs sm:text-sm">Obtained Certifications.</p>
          </div>

          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <h1 className="font-bold text-5xl sm:text-6xl transition-transform duration-300 transform hover:scale-110">
              {isInView ? <CountUp start={0} end={4} duration={2} formattingFn={(value) => value.toString().padStart(2, '0')} /> : "00"}
            </h1>
            <p className="text-xs sm:text-sm">Projects Made.</p>
          </div>

          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <h1 className="font-bold text-5xl sm:text-6xl transition-transform duration-300 transform hover:scale-110">
              {isInView ? <CountUp start={0} end={1} duration={2} formattingFn={(value) => value.toString().padStart(2, '0')} /> : "00"}
            </h1>
            <p className="text-xs sm:text-sm">Progamming Language Mastered.</p>
          </div>
          
        </div>
      </motion.div>
    </div>
  );
}