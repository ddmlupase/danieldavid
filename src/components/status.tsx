"use client";

import { useRef } from "react";
import CountUp from "react-countup";
import { useInView, motion } from "framer-motion"; // make sure motion is imported

export default function Status() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        ref={ref}
        className="flex flex-col items-center justify-center mt-50 mb-50"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-6xl font-bold font-reddit-sans text-[#222222]">
          DANIEL DAVID SO FAR HAS
        </h1>

        <ul className="flex text-[#222222] font-reddit-sans mt-5 gap-8 max-w-1xl">
          <li className="flex items-center">
            <h1 className="font-bold text-9xl transition-transform duration-300 transform hover:scale-110">
                0
              {isInView ? <CountUp start={0} end={1} duration={2} /> : "0"}
            </h1>
            <p className="text-lg">Clients.</p>
          </li>

          <li className="flex items-center">
            <h1 className="font-bold text-9xl transition-transform duration-300 transform hover:scale-110 mr-2">
                0
              {isInView ? <CountUp start={0} end={3} duration={2} /> : "0"}
            </h1>
            <p className="text-lg">Years of Experience.</p>
          </li>

          <li className="flex items-center">
            <h1 className="font-bold text-9xl transition-transform duration-300 transform hover:scale-110 mr-2">
                0
              {isInView ? <CountUp start={0} end={2} duration={2} /> : "0"}
            </h1>
            <p className="text-lg">Obtained Certifications.</p>
          </li>

          <li className="flex items-center">
            <h1 className="font-bold text-9xl transition-transform duration-300 transform hover:scale-110 mr-2">
                0
              {isInView ? <CountUp start={0} end={4} duration={2} /> : "0"}
            </h1>
            <p className="text-lg">Projects Made.</p>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
