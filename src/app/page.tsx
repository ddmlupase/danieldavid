import Navbar from "@/components/navbar";
import Image from 'next/image';
import me from '@/assets/profile.jpg';

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

              <h1 className="text-1xl font-semibold font-reddit-sans text-222222 leading-tight">
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

        </div>

      </div>
    </>
  );
}
