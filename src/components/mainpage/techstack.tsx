"use client";
import mysql from '@/assets/mysql.png';
import js from '@/assets/js.png';
import html from '@/assets/html.png';
import css from '@/assets/css.png';
import ts from '@/assets/ts.png';
import nextjs from '@/assets/nextjs.png';
import visualstudio from '@/assets/visualstudio.png';
import github from '@/assets/github.png';
import vscode from '@/assets/vscode.png';
import drawio from '@/assets/drawio.png';
import nodejs from '@/assets/nodejs.png';
import prisma from '@/assets/prisma.png';
import davinciresolve from '@/assets/davinciresolve.png'
import csharp from '@/assets/Csharp.png'
import python from '@/assets/python.png'
import react from '@/assets/react.png'

import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";

export default function TechStack() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Tech stack data with your actual imports
  const techStackRow1 = [
    { name: "MySQL", src: mysql, alt: "mysql" },
    { name: "JavaScript", src: js, alt: "js" },
    { name: "CSS", src: css, alt: "css" },
    { name: "HTML", src: html, alt: "html" },
    { name: "TypeScript", src: ts, alt: "ts" },
    { name: "VS Code", src: vscode, alt: "vscode" }
  ];

  const techStackRow2 = [
    { name: "Next.js", src: nextjs, alt: "nextjs" },
    { name: "Draw.io", src: drawio, alt: "drawio" },
    { name: "GitHub", src: github, alt: "github" },
    { name: "Visual Studio", src: visualstudio, alt: "visualstudio" },
    { name: "Node.js", src: nodejs, alt: "nodejs" },
    { name: "Prisma", src: prisma, alt: "prisma" }
  ];
  const techStackRow3 = [
    { name: "Davinci Resolve", src: davinciresolve, alt: "davinciresolve" },
    { name: "CSharp", src: csharp, alt: "csharp" },
    { name: "Python", src: python, alt: "python" },
    { name: "React", src: react, alt: "react" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      }
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

  interface TechItem {
    name: string;
    src: StaticImageData;
    alt: string;
  }

  const TechIcon = ({ tech, index, totalItems }: { tech: TechItem; index: number; totalItems: number }) => (
    <li
      className={`flex justify-center items-center transform ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-8 opacity-0 scale-95"
      } hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-2 group cursor-pointer transition-all duration-200 ease-out`}
      style={{
        animation: isVisible ? `bounce-in 0.6s ease-out ${index * 100}ms both` : "none",
      }}
    >
      <div className="relative p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-white/80 backdrop-blur-sm border border-white group-hover:bg-white group-hover:border-blue-300/50 transition-all duration-200">
        <Image
          src={tech.src}
          alt={tech.alt}
          width={112}
          height={112}
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 transition-all duration-200 group-hover:brightness-110 object-contain"
        />
        <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        
        {/* Tooltip */}
        <div className="absolute -top-10 sm:-top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-10">
          {tech.name}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>
    </li>
  );

  return (
    <>
      {/* Add custom keyframes */}
      <style jsx>{`
        @keyframes bounce-in {
          0% {
            transform: translateY(30px) scale(0.9);
            opacity: 0;
          }
          50% {
            transform: translateY(-10px) scale(1.05);
            opacity: 0.8;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-55 mb-100" ref={sectionRef}>
        <div className="flex flex-col items-center justify-center mt-20 sm:mt-28 md:mt-32 lg:mt-40 mb-8 sm:mb-10 md:mb-12 lg:mb-15">
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-reddit-sans text-[#222222] mb-2 sm:mb-3 text-center transition-all duration-800 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            MY TECH STACK
          </h1>
          <p
            className={`text-sm sm:text-base md:text-lg font-reddit-sans text-[#222222] text-center px-4 transition-all duration-800 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          >
            Here are the tools and technologies I use in my recent projects
          </p>
        </div>

        <div className="mb-20 sm:mb-32 md:mb-40 lg:mb-50">
          {/* First Row */}
          <ul className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 justify-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 flex-wrap">
            {techStackRow1.map((tech, index) => (
              <TechIcon
                key={tech.alt}
                tech={tech}
                index={index}
                totalItems={techStackRow1.length}
              />
            ))}
          </ul>

          {/* Second Row */}
          <ul className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 justify-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 flex-wrap">
            {techStackRow2.map((tech, index) => (
              <TechIcon
                key={tech.alt}
                tech={tech}
                index={index + techStackRow1.length}
                totalItems={techStackRow2.length}
              />
            ))}
          </ul>

          {/* Third Row */}
          <ul className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 justify-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 flex-wrap">
            {techStackRow3.map((tech, index) => (
              <TechIcon
                key={tech.alt}
                tech={tech}
                index={index + techStackRow1.length + techStackRow2.length}
                totalItems={techStackRow3.length}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}