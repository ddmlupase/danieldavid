import Navbar from "@/components/navbar";
import Image from 'next/image';
import me from '@/assets/profile.jpg';
import introsql from '@/assets/introsql.jpg';
import sqlintermediate from '@/assets/sqlintermediate.jpg';

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
            See More
            </button>
            </div>

          <div className="flex font-reddit-sans justify-between gap-55 mt-15">
            <div>
              <h3 className="text-white text-2xl font-medium mt-10">DATABASE DESIGN & MODELING</h3>
              <p className="text-white text-base font-light mt-10">
                Crafting efficient and scalable database architectures tailored to application needs.
                This is a sentence.
              </p>
            </div>
            <div>
              <h3 className="text-white text-2xl font-medium mt-10">DATABASE DEVELOPMENT</h3>
              <p className="text-white text-base font-light mt-10">
                Crafting efficient and scalable database architectures tailored to application needs.
                This is a sentence.
              </p>
            </div>
            <div>
              <h3 className="text-white text-2xl font-medium mt-10">DBA SUPPORT</h3>
              <p className="text-white text-base font-light mt-18">
                Crafting efficient and scalable database architectures tailored to application needs.
                This is a sentence.
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
            See More
            </button>
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

          
          <div className="flex flex-col md:flex-row gap-5 mt-20">

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
                <p className="text-white">Project 3 Image</p>
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
                <p className="text-white">Project 4 Image</p>
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
                <p className="text-white">Project 5 Image</p>
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
        
        <ul className="flex text-[#222222] font-reddit-sans mt-5 gap-10 max-w-1xl">
          <li className="flex items-center">
            <h1 className="font-bold text-6xl mr-2 font-reddit-sans">01</h1>
            <p>Clients.</p>
          </li>

        <li className="flex items-center">
        <h1 className="font-bold text-6xl mr-2">03</h1>
        <p>Years of Experience.</p>
        </li>

        <li className="flex items-center">
        <h1 className="font-bold text-6xl mr-2">02</h1>
        <p>Obtained Certifications.</p>
        </li>

        <li className="flex items-center">
        <h1 className="font-bold text-6xl mr-2">04</h1>
        <p>Projects Made.</p>
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
              <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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

        {/* ✅ Footer Section */}
        <div className="max-w-6xl mx-auto">

          <div className="flex flex-col items-center justify-center mt-40 mb-40">

            <h1 className="text-6xl font-bold font-reddit-sans text-[#222222]">
              MY TECH STACK
            </h1>
            <p className="text-lg font-reddit-sans text-[#222222]">Technologies I have been working with recently</p>

          </div>

        </div>
    </>
    
  );
}
