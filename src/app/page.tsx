import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <main className="min-h-screen flex items-center justify-left">

        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
          
          <div className="md:w-1/2">
          <h1 className="text-1xl font-light font-reddit-sans">
          Hi there, I am
          </h1>

          <h1 className="text-7xl font-bold font-reddit-sans text-222222 mt-2">
          DANIEL DAVID
          </h1>

          <h1 className="text-1xl font-regular font-reddit-sans text-222222 mt-2">
            DATABASE DEVELOPER
          </h1>
          <p className="max-w-xl text-base font-light font-reddit-sans text-222222 leading-relaxed mt-10">
            Daniel David is a Dedicated database-focused student passionate about organizing, 
            managing, and securing data. With a growing foundation in SQL, database design, and 
            data-driven development, he aims to build efficient, scalable systems. 
          </p>

          <button className="mt-8 bg-white text-[#222222] hover:bg-[#222222] hover:text-white border border-[#222222] px-4 py-1 rounded-md">
          Download Resume
          </button>
          </div>

          <div className="md:w-1/2">
          </div>

        </div>

      </main>
    </div>
  );
}

