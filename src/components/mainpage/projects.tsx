import Link from 'next/link';

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col">

        {/* Projects Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full mt-20 sm:mt-32 lg:mt-40 gap-4 sm:gap-0 opacity-0 translate-y-8 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]" id="projects">
          <h2 className="text-[#222222] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center sm:text-left">
            MY FEATURED PROJECTS
          </h2>
          <Link href="/projects">
            <button className="bg-white text-[#222222] hover:bg-[#222222] hover:text-white border border-[#222222] px-4 py-2 rounded-md cursor-pointer transition-all duration-300 text-xs sm:text-sm transform hover:scale-105 hover:shadow-lg">
              More Projects
            </button>
          </Link>
        </div>
        
        <p className="text-sm sm:text-base mt-4 text-center sm:text-left text-[#222222] opacity-0 translate-y-4 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards]">
          These featured projects highlight my experience in web development, database design, and application building.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mt-10 sm:mt-14">

          {/* Project 1 */}
          <div className="transform transition-all duration-500 hover:scale-105 cursor-pointer group opacity-0 translate-y-8 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
            <div className="bg-[#222222] w-full h-48 sm:h-52 lg:h-56 flex justify-center items-center rounded-md overflow-hidden relative transition-all duration-300 group-hover:shadow-xl">
              <p className="text-white text-sm sm:text-base transition-all duration-300 group-hover:scale-110">Coming Soon...</p>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </div>

            <p className="text-[#222222] text-sm sm:text-base font-thin mt-3 font-reddit-sans transition-colors duration-300 group-hover:text-gray-600">
              Entity Relationship Diagram Design
            </p>
            <h1 className="text-[#222222] text-base sm:text-lg font-bold font-reddit-sans mt-1 transition-colors duration-300 group-hover:text-gray-800">
              Inventory Management System
            </h1>

            <div className="flex flex-wrap gap-2 mt-3">
              <span className="bg-[#D9D9D9] text-[#222222] px-2 py-1 rounded-full font-reddit-sans text-xs sm:text-sm transition-all duration-300 hover:bg-[#222222] hover:text-white hover:scale-105">
                MySQL
              </span>
              <span className="bg-[#D9D9D9] text-[#222222] px-2 py-1 rounded-full font-reddit-sans text-xs sm:text-sm transition-all duration-300 hover:bg-[#222222] hover:text-white hover:scale-105">
                WorkBench
              </span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="transform transition-all duration-500 hover:scale-105 cursor-pointer group opacity-0 translate-y-8 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards]">
            <div className="bg-[#222222] w-full h-48 sm:h-52 lg:h-56 flex justify-center items-center rounded-md overflow-hidden relative transition-all duration-300 group-hover:shadow-xl">
              <p className="text-white text-sm sm:text-base transition-all duration-300 group-hover:scale-110">Coming Soon...</p>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </div>

            <p className="text-[#222222] text-sm sm:text-base font-thin mt-3 font-reddit-sans transition-colors duration-300 group-hover:text-gray-600">
              SQL integration with frontend, real-time updates, transactions
            </p>
            <h1 className="text-[#222222] text-base sm:text-lg font-bold font-reddit-sans mt-1 transition-colors duration-300 group-hover:text-gray-800">
              Task Management Web App
            </h1>

            <div className="flex flex-wrap gap-2 mt-3">
              <span className="bg-[#D9D9D9] text-[#222222] px-2 py-1 rounded-full font-reddit-sans text-xs sm:text-sm transition-all duration-300 hover:bg-[#222222] hover:text-white hover:scale-105">
                MySQL
              </span>
              <span className="bg-[#D9D9D9] text-[#222222] px-2 py-1 rounded-full font-reddit-sans text-xs sm:text-sm transition-all duration-300 hover:bg-[#222222] hover:text-white hover:scale-105">
                JavaScript
              </span>
              <span className="bg-[#D9D9D9] text-[#222222] px-2 py-1 rounded-full font-reddit-sans text-xs sm:text-sm transition-all duration-300 hover:bg-[#222222] hover:text-white hover:scale-105">
                HTML
              </span>
              <span className="bg-[#D9D9D9] text-[#222222] px-2 py-1 rounded-full font-reddit-sans text-xs sm:text-sm transition-all duration-300 hover:bg-[#222222] hover:text-white hover:scale-105">
                CSS
              </span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="transform transition-all duration-500 hover:scale-105 cursor-pointer group md:col-span-2 xl:col-span-1 opacity-0 translate-y-8 animate-[fadeInUp_0.8s_ease-out_1s_forwards]">
            <div className="bg-[#222222] w-full h-48 sm:h-52 lg:h-56 flex justify-center items-center rounded-md overflow-hidden relative transition-all duration-300 group-hover:shadow-xl">
              <p className="text-white text-sm sm:text-base transition-all duration-300 group-hover:scale-110">Coming Soon...</p>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </div>
            
            <p className="text-[#222222] text-sm sm:text-base font-thin mt-3 font-reddit-sans transition-colors duration-300 group-hover:text-gray-600">
              Complex joins, reports, data integrity
            </p>
            <h1 className="text-[#222222] text-base sm:text-lg font-bold font-reddit-sans mt-1 transition-colors duration-300 group-hover:text-gray-800">
              Student Information System
            </h1>

            <div className="flex flex-wrap gap-2 mt-3">
              <span className="bg-[#D9D9D9] text-[#222222] px-2 py-1 rounded-full font-reddit-sans text-xs sm:text-sm transition-all duration-300 hover:bg-[#222222] hover:text-white hover:scale-105">
                MySQL
              </span>
            </div>
          </div>

          {/* Project 4 */}
          <div className="transform transition-all duration-500 hover:scale-105 cursor-pointer group opacity-0 translate-y-8 animate-[fadeInUp_0.8s_ease-out_1.2s_forwards]">
            <div className="bg-[#222222] w-full h-48 sm:h-52 lg:h-56 flex justify-center items-center rounded-md overflow-hidden relative transition-all duration-300 group-hover:shadow-xl">
              <p className="text-white text-sm sm:text-base transition-all duration-300 group-hover:scale-110">Coming Soon...</p>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </div>

            <p className="text-[#222222] text-sm sm:text-base font-thin mt-3 font-reddit-sans transition-colors duration-300 group-hover:text-gray-600">
              Entity Relationship Diagram Design
            </p>
            <h1 className="text-[#222222] text-base sm:text-lg font-bold font-reddit-sans mt-1 transition-colors duration-300 group-hover:text-gray-800">
              Library Management System
            </h1>
            
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="bg-[#D9D9D9] text-[#222222] px-2 py-1 rounded-full font-reddit-sans text-xs sm:text-sm transition-all duration-300 hover:bg-[#222222] hover:text-white hover:scale-105">
                MySQL
              </span>
              <span className="bg-[#D9D9D9] text-[#222222] px-2 py-1 rounded-full font-reddit-sans text-xs sm:text-sm transition-all duration-300 hover:bg-[#222222] hover:text-white hover:scale-105">
                WorkBench
              </span>
            </div>
          </div>

          {/* Project 5 */}
          <div className="transform transition-all duration-500 hover:scale-105 cursor-pointer group opacity-0 translate-y-8 animate-[fadeInUp_0.8s_ease-out_1.4s_forwards]">
            <div className="bg-[#222222] w-full h-48 sm:h-52 lg:h-56 flex justify-center items-center rounded-md overflow-hidden relative transition-all duration-300 group-hover:shadow-xl">
              <p className="text-white text-sm sm:text-base transition-all duration-300 group-hover:scale-110">Coming Soon...</p>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </div>

            <p className="text-[#222222] text-sm sm:text-base font-thin mt-3 font-reddit-sans transition-colors duration-300 group-hover:text-gray-600">
              Many-to-many relationships, stored procedures, indexing
            </p>
            <h1 className="text-[#222222] text-base sm:text-lg font-bold font-reddit-sans mt-1 transition-colors duration-300 group-hover:text-gray-800">
              E-commerce Product & Order DB
            </h1>

            <div className="flex flex-wrap gap-2 mt-3">
              <span className="bg-[#D9D9D9] text-[#222222] px-2 py-1 rounded-full font-reddit-sans text-xs sm:text-sm transition-all duration-300 hover:bg-[#222222] hover:text-white hover:scale-105">
                MySQL
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}