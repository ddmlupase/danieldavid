import Navbar from "@/components/navbar";
import Image from 'next/image';
import me from '@/assets/profile.jpg';
import introsql from '@/assets/introsql.jpg';
import sqlintermediate from '@/assets/sqlintermediate.jpg';
import database from '@/assets/database.png';
import domain from '@/assets/domain.png';
import window from '@/assets/window.png';
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


export default function Home() {
  return (
    <>
      {/* Container that limits width */}
      <div className="max-w-6xl mx-auto">
        <Navbar />
        <main className="min-h-[700px] flex items-center justify-left">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
            
            <div className="md:w-[60%]">
              <h1 className="text-1xl font-light font-reddit-sans mt-20">
                Hi there, I am
              </h1>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[85px] font-bold font-reddit-sans text-222222 leading-tight">
                DANIEL DAVID
              </h1>

              <h1 className="text-2xl font-semibold font-reddit-sans text-222222 leading-tight">
                DATABASE DEVELOPER
              </h1>

              <p className="max-w-xl text-base font-light font-reddit-sans text-222222 leading-relaxed mt-7">
                Daniel David is a dedicated database-focused student passionate about organizing, 
                managing, and securing data. With a growing foundation in SQL, database design, and 
                data-driven development, he aims to build efficient, scalable systems. 
              </p>

              <button className="mt-8 bg-white text-[#222222] hover:bg-[#222222] hover:text-white border border-[#222222] px-4 py-1 rounded-md cursor-pointer">
                Download Resume
              </button>
            </div>

            <div className="md:w-[40%] flex justify-center items-center cursor-pointer">
              <Image
                src={me}
                alt="me"
                width={500}
              />
            </div>
          </div>
        </main>
      </div>

      {/* ✅ Full-width dark section */}
      <div className="w-full bg-[#222222] py-24">

        <div className="max-w-6xl mx-auto">
          
          <div className="flex justify-between items-center w-full">
            <h2 className="text-white text-5xl font-bold">MY SERVICES</h2>
            <button className="text-white text-sm bg-transparent border border-white px-3 py-2 rounded-md hover:bg-white hover:text-black cursor-pointer">
            More Services
            </button>
            </div>

          <div className="flex font-reddit-sans justify-between gap-50 mt-15 md:w-[100%]">

            <div className="md:w-[33%]">
              <Image
                src={database}
                alt="database"
                width={50}
              />
              <h3 className="text-white text-2xl font-medium mt-8">RELATIONAL DATABASE DESIGN SERVICE</h3>
              <p className="text-white text-base font-thin mt-9">
                Designing ER diagrams and building structured database schemas using MySQL Workbench.
              </p>
            </div>

            <div className="md:w-[33%]">
              <Image
                src={domain}
                alt="domain"
                width={50}
              />
              <h3 className="text-white text-2xl font-medium mt-8">WEBSITE DEVELOPMENT</h3>
              <p className="text-white text-base font-thin mt-17">
                Developing responsive websites with both frontend and backend functionality.
              </p>
            </div>

            <div className="md:w-[33%]">
              <Image
                src={window}
                alt="window"
                width={50}
              />
              <h3 className="text-white text-2xl font-medium mt-8">WINDOWS SOFTWARE DEVELOPMENT</h3>
              <p className="text-white text-base font-thin mt-8">
                Creating custom Windows applications using C# and Visual Studio.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* ✅ Projects section */}
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col">

          <div className="flex justify-between items-center w-full mt-40">
            <h2 className="text-[#222222] text-5xl font-bold">MY FEATURED PROJECTS</h2>
            <button className="mt-8 bg-white text-[#222222] hover:bg-[#222222] hover:text-white border border-[#222222] px-4 py-1 rounded-md cursor-pointer">
            More Projects
            </button>
          </div>
          <p>These featured projects highlight my experience in web development, database design, and application building.</p>

          
          <div className="flex flex-col md:flex-row gap-5 mt-14">

            <div className="md:w-[33%]">

              <div className="bg-[#222222] md:w-[100%] h-[200px] flex justify-center items-center rounded-md">
                <p className="text-white">Project 1 Image</p>
              </div>

              <p className="text-[#222222] text-1xl font-thin mt-2 font-reddit-sans">Entity Relationship Diagram</p>

              <h1 className="text-[#222222] text-lg font-bold font-reddit-sans mt-1">Student Information System</h1>

              <div className="flex gap-2 mt-2">
                <p className="bg-[#D9D9D9] text-[#222222] px-2 py-1 rounded-full font-reddit-sans text-sm text-align-center">
                  MySQL</p>
                <p className="bg-[#D9D9D9] text-[#222222] px-2 py-1 rounded-full font-reddit-sans text-sm text-align-center">
                  WorkBench</p>
              </div>

            </div>

            <div className="md:w-[33%]">

              <div className="bg-[#222222] md:w-[100%]  h-[200px] flex justify-center items-center rounded-md">
                <p className="text-white">Project 2 Image</p>
              </div>

              <p className="text-[#222222] text-1xl font-thin mt-2 font-reddit-sans">Entity Relationship Diagram</p>

              <h1 className="text-[#222222] text-lg font-bold font-reddit-sans mt-1">Student Information System</h1>

              <div className="flex gap-2 mt-2">
                <p className="bg-[#D9D9D9] text-[#222222] px-2 py-1 rounded-full font-reddit-sans text-sm text-align-center">
                  MySQL</p>
                <p className="bg-[#D9D9D9] text-[#222222] px-2 py-1 rounded-full font-reddit-sans text-sm text-align-center">
                  JavaScript</p>
                <p className="bg-[#D9D9D9] text-[#222222] px-2 py-1 rounded-full font-reddit-sans text-sm text-align-center">
                  HTML</p>
                <p className="bg-[#D9D9D9] text-[#222222] px-2 py-1 rounded-full font-reddit-sans text-sm text-align-center">
                  CSS
                </p>
              </div>

            </div>

            <div className="md:w-[33%]">

              <div className="bg-[#222222] md:w-[100%] h-[200px] flex justify-center items-center rounded-md">
                <p className="text-white">Coming Soon...</p>
              </div>
              
              <p className="text-[#222222] text-1xl font-thin mt-2 font-reddit-sans">Entity Relationship Diagram</p>

              <h1 className="text-[#222222] text-lg font-bold font-reddit-sans mt-1">Student Information System</h1>

              <div className="flex gap-2 mt-2">
                <p className="bg-[#D9D9D9] text-[#222222] px-2 py-1 rounded-full font-reddit-sans text-sm text-align-center">
                  MySQL</p>
                <p className="bg-[#D9D9D9] text-[#222222] px-2 py-1 rounded-full font-reddit-sans text-sm text-align-center">
                  JavaScript</p>
                <p className="bg-[#D9D9D9] text-[#222222] px-2 py-1 rounded-full font-reddit-sans text-sm text-align-center">
                  Next.js
                </p>
              </div>

            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5 mt-10">

            <div className="md:w-[33%]">

              <div className="bg-[#222222] md:w-[100%] h-[200px] flex justify-center items-center rounded-md">
                <p className="text-white">Coming Soon...</p>
              </div>

              <p className="text-[#222222] text-1xl font-thin mt-2 font-reddit-sans">Entity Relationship Diagram</p>

              <h1 className="text-[#222222] text-lg font-bold font-reddit-sans mt-1">Student Information System</h1>
              
              <div className="flex gap-2 mt-2">
                <p className="bg-[#D9D9D9] text-[#222222] px-2 py-1 rounded-full font-reddit-sans text-sm text-align-center">
                  MySQL</p>
                <p className="bg-[#D9D9D9] text-[#222222] px-2 py-1 rounded-full font-reddit-sans text-sm text-align-center">
                  Next.js
                </p>
              </div>

            </div>

            <div className="md:w-[33%]">

              <div className="bg-[#222222] md:w-[100%]  h-[200px] flex justify-center items-center rounded-md">
                <p className="text-white">Coming Soon...</p>
              </div>

              <p className="text-[#222222] text-1xl font-thin mt-2 font-reddit-sans ">Entity Relationship Diagram</p>

              <h1 className="text-[#222222] text-lg font-bold font-reddit-sans mt-1">Student Information System</h1>

              <div className="flex gap-2 mt-2">
                <p className="bg-[#D9D9D9] text-[#222222] px-2 py-1 rounded-full font-reddit-sans text-sm text-align-center">
                  MySQL</p>
              </div>

            </div>

            <div className="md:w-[33%]">
            </div>
            </div>


        </div>
      </div>
      {/* ✅ status */}
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col items-center justify-center mt-50 mb-50">
        <h1 className="text-6xl font-bold font-reddit-sans text-[#222222]">
          DANIEL DAVID SO FAR HAS
        </h1>
        
        <ul className="flex text-[#222222] font-reddit-sans mt-5 gap-8 max-w-1xl">
          <li className="flex items-center">
            <h1 className="font-bold text-8xl">01</h1>
            <p className="text-lg">Clients.</p>
          </li>

          <li className="flex items-center">
            <h1 className="font-bold text-8xl mr-2">03</h1>
            <p className="text-lg">Years of Experience.</p>
          </li>

          <li className="flex items-center">
            <h1 className="font-bold text-8xl mr-2">02</h1>
            <p className="text-lg">Obtained Certifications.</p>
          </li>

          <li className="flex items-center">
            <h1 className="font-bold text-8xl mr-2">04</h1>
            <p className="text-lg">Projects Made.</p>
          </li>
        </ul>

        </div>
        </div>

        {/** Certifications Section */}
        <div className="w-full bg-[#222222] py-24">


          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">

            <div className="text-white md:w-[32%]">
              <h3>Check Out</h3>
              <h1 className="text-4xl font-bold mb-7 mt-1">MY CERTIFICATIONS</h1>
              <p className="">A collection of certifications I’ve earned to support my learning and development in tech.</p>
              <button className="mt-10 text-white text-sm bg-transparent border border-white px-3 py-2 rounded-md hover:bg-white hover:text-black cursor-pointer">
              More Certifications
              </button>

            </div>

            <div className="text-white md:w-[66%]">

              <ul className="flex flex-col md:flex-row justify-between font-reddit-sans">

                <li>
                  <div className="relative bg-white md:w-[245px] h-[150px] overflow-hidden mb-2">
                    <Image
                      src={sqlintermediate}
                      alt="me"
                      fill
                      className="object-cover" // or use object-contain
                    />
                  </div>
  
                  <p className="text-center font-semibold">Intermediate SQL</p>
                  <p className="text-center font-thin">Sololearn</p>
                </li>

                <li>
                  <div className="bg-white md:w-[245px] h-[150px] text-black flex items-center justify-center mb-2">
                    Coming Soon!
                  </div>
                  <p className="text-center font-semibold">Introduction to Networks</p>
                  <p className="text-center font-thin">Cisco</p>
                </li>

                <li>
                  <div className="relative bg-white md:w-[245px] h-[150px] overflow-hidden mb-2">
                    <Image
                      src={introsql}
                      alt="me"
                      fill
                      className="object-cover" // or use object-contain
                    />
                  </div>
                  <p className="text-center font-semibold">Introduction to SQL</p>
                  <p className="text-center font-thin">Sololearn</p>
                </li>
              </ul>

            </div>
          </div>
        </div>

        {/* ✅ tech stack */}
        <div className="max-w-6xl mx-auto">

          <div className="flex flex-col items-center justify-center mt-40 mb-15">

            <h1 className="text-6xl font-bold font-reddit-sans text-[#222222] mb-3">
              MY TECH STACK
            </h1>
            <p className="text-lg font-reddit-sans text-[#222222]">Here are the tools and technologies I use in my recent projects</p>

          </div>

          <div className="mb-50">

            <ul className="flex gap-25 text-222222 font-thin text-sm sm:text-base font-reddit-sans justify-center mb-25">
            <li className="flex justify-center items-center"><Image
                src={mysql}
                alt="mysql"
                width={100}
              /></li>
            <li className="flex justify-center items-center"><Image
                src={js}
                alt="js"
                width={100}
              /></li>
            <li className="flex justify-center items-center"><Image
                src={css}
                alt="css"
                width={100}
              /></li>
            <li className="flex justify-center items-center"><Image
                src={html}
                alt="html"
                width={100}
              /></li>
            <li className="flex justify-center items-center"><Image
                src={ts}
                alt="ts"
                width={100}
              /></li>
              <li className="flex justify-center items-center"><Image
                src={vscode}
                alt="vscode"
                width={100}
              /></li>
            </ul>

            <ul className="flex gap-25 text-222222 font-thin text-sm sm:text-base font-reddit-sans justify-center mb-20">
            <li className="flex justify-center items-center"><Image
                src={nextjs}
                alt="nextjs"
                width={100}
              /></li>
            <li className="flex justify-center items-center"><Image
                src={drawio}
                alt="drawio"
                width={100}
              /></li>
            <li className="flex justify-center items-center"><Image
                src={github}
                alt="github"
                width={100}
              /></li>
            <li className="flex justify-center items-center"><Image
                src={visualstudio}
                alt="visualstudio"
                width={100}
              /></li>
            <li className="flex justify-center items-center"><Image
                src={nodejs}
                alt="nodejs"
                width={100}
              /></li>
              <li className="flex justify-center items-center"><Image
                src={prisma}
                alt="prisma"
                width={100}
              /></li>
            </ul>

          </div>

        </div>

        <div className="w-full bg-[#222222] py-5">

          <div className="flex flex-col items-center justify-center">
            <h1 className="text-white">hello</h1>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h1 className="text-white font-bold">© Daniel David Lupase 2025</h1>
          </div>

        </div>
    </>
    
  );
}
