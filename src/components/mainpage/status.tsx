"use client";

import { useRef } from "react";
import CountUp from "react-countup";
import { useInView, motion } from "framer-motion";

export default function Status() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-55 mb-55">
      <motion.div
        ref={ref}
        className="flex flex-col items-center justify-center my-12 sm:my-16 md:my-20 lg:my-24"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-reddit-sans text-[#222222] text-center mb-6 sm:mb-8 lg:mb-10">
          DANIEL DAVID SO FAR HAS
        </h1>

        {/* Desktop and Tablet Layout (4 columns) */}
        <ul className="hidden md:flex text-[#222222] font-reddit-sans gap-4 lg:gap-6 xl:gap-8 max-w-full justify-center flex-nowrap">
          <li className="flex items-center text-center min-w-0 gap-2 lg:gap-3 xl:gap-4 max-w-fit">
            <h1 className="font-extrabold text-6xl lg:text-8xl xl:text-9xl transition-transform duration-300 transform hover:scale-110 flex-shrink-0">
              {isInView ? <CountUp start={0} end={1} duration={4} formattingFn={(value) => value.toString().padStart(2, '0')} /> : "00"}
            </h1>
            <p className="text-sm lg:text-base xl:text-lg whitespace-nowrap">Clients.</p>
          </li>

          <li className="flex items-center text-center min-w-0 gap-2 lg:gap-3 xl:gap-4 max-w-fit">
            <h1 className="font-extrabold text-6xl lg:text-8xl xl:text-9xl transition-transform duration-300 transform hover:scale-110 flex-shrink-0">
              {isInView ? <CountUp start={0} end={3} duration={4} formattingFn={(value) => value.toString().padStart(2, '0')} /> : "00"}
            </h1>
            <p className="text-sm lg:text-base xl:text-lg whitespace-nowrap">Years of <br/> Experience.</p>
          </li>

          <li className="flex items-center text-center min-w-0 gap-2 lg:gap-3 xl:gap-4 max-w-fit">
            <h1 className="font-extrabold text-6xl lg:text-8xl xl:text-9xl transition-transform duration-300 transform hover:scale-110 flex-shrink-0">
              {isInView ? <CountUp start={0} end={3} duration={4} formattingFn={(value) => value.toString().padStart(2, '0')} /> : "00"}
            </h1>
            <p className="text-sm lg:text-base xl:text-lg whitespace-nowrap">Obtained <br/> Certifications.</p>
          </li>

          <li className="flex items-center text-center min-w-0 gap-2 lg:gap-3 xl:gap-4 max-w-fit">
            <h1 className="font-extrabold text-6xl lg:text-8xl xl:text-9xl transition-transform duration-300 transform hover:scale-110 flex-shrink-0">
              {isInView ? <CountUp start={0} end={4} duration={4} formattingFn={(value) => value.toString().padStart(2, '0')} /> : "00"}
            </h1>
            <p className="text-sm lg:text-base xl:text-lg whitespace-nowrap">Projects Made.</p>
          </li>
          
        </ul>

        {/* Mobile Layout (2x2 grid) */}
<div className="grid grid-cols-2 gap-6 sm:gap-8 md:hidden text-[#222222] font-reddit-sans w-full max-w-lg">
  <div className="flex flex-col items-center justify-center gap-2 sm:gap-3">
    <h1 className="font-bold text-4xl sm:text-5xl transition-transform duration-300 transform hover:scale-110">
      {isInView ? <CountUp start={0} end={1} duration={2} formattingFn={(value) => value.toString().padStart(2, '0')} /> : "00"}
    </h1>
    <p className="text-xs sm:text-sm text-center">Clients.</p>
  </div>

  <div className="flex flex-col items-center justify-center gap-2 sm:gap-3">
    <h1 className="font-bold text-4xl sm:text-5xl transition-transform duration-300 transform hover:scale-110">
      {isInView ? <CountUp start={0} end={3} duration={2} formattingFn={(value) => value.toString().padStart(2, '0')} /> : "00"}
    </h1>
    <p className="text-xs sm:text-sm text-center">Years of Experience.</p>
  </div>

  <div className="flex flex-col items-center justify-center gap-2 sm:gap-3">
    <h1 className="font-bold text-4xl sm:text-5xl transition-transform duration-300 transform hover:scale-110">
      {isInView ? <CountUp start={0} end={3} duration={2} formattingFn={(value) => value.toString().padStart(2, '0')} /> : "00"}
    </h1>
    <p className="text-xs sm:text-sm text-center">Obtained Certifications.</p>
  </div>

  <div className="flex flex-col items-center justify-center gap-2 sm:gap-3">
    <h1 className="font-bold text-4xl sm:text-5xl transition-transform duration-300 transform hover:scale-110">
      {isInView ? <CountUp start={0} end={4} duration={2} formattingFn={(value) => value.toString().padStart(2, '0')} /> : "00"}
    </h1>
    <p className="text-xs sm:text-sm text-center">Projects Made.</p>
  </div>
</div>
      </motion.div>
    </div>
  );
}