import Navbar from "@/components/navbar";
import Footer from '@/components/footer';
import Image from 'next/image';

// Import your project images (add these to your assets folder)
// import project1 from '@/assets/project1.jpg';
// import project2 from '@/assets/project2.jpg';

export default function Projects() {
  return (
    <>
      {/* ===== NAVBAR ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
      </div>

      {/* ===== HERO SECTION ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <main className="min-h-[400px] sm:min-h-[500px] flex items-center justify-center">
          <div className="text-center w-full">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#222222] mb-6 sm:mb-8">
              MY PROJECTS
            </h1>
            <p className="max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-[#222222] leading-relaxed px-4">
              Explore my portfolio of database development, web applications, and software projects. 
              Each project demonstrates my skills in creating efficient, scalable solutions using modern technologies.
            </p>
          </div>
        </main>
      </div>

      {/* ===== FEATURED PROJECTS SECTION ===== */}
      <div className="w-full bg-[#222222] py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              FEATURED PROJECTS
            </h2>
            <p className="text-sm sm:text-base text-white font-light max-w-2xl mx-auto">
              Highlighting my most significant and impactful database and software development projects
            </p>
          </div>

          {/* Featured Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 font-reddit-sans">

            {/* Featured Project 1 */}
            <div className="transform transition-transform duration-300 hover:scale-105 bg-white/5 rounded-lg overflow-hidden">
              <div className="bg-[#333333] h-64 sm:h-72 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl mb-4">🗄️</div>
                  <p className="text-lg">Student Information System</p>
                  <p className="text-sm opacity-80">Database Project</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-yellow-500 w-3 h-3 rounded-full"></span>
                  <span className="text-white text-sm">In Progress</span>
                </div>
                <h3 className="text-white text-xl sm:text-2xl font-semibold mb-4">
                  Student Information Management System
                </h3>
                <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed mb-6">
                  Complete database solution for managing student records, course enrollment, and academic tracking. 
                  Features comprehensive ER diagram design and normalized database structure.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs sm:text-sm">MySQL</span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs sm:text-sm">WorkBench</span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs sm:text-sm">ER Diagram</span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs sm:text-sm">Normalization</span>
                </div>
                <div className="flex gap-3">
                  <button className="bg-white text-[#222222] hover:bg-white/90 px-4 py-2 rounded-md transition-colors duration-300 text-sm font-medium">
                    View Details
                  </button>
                  <button className="text-white border border-white hover:bg-white hover:text-[#222222] px-4 py-2 rounded-md transition-colors duration-300 text-sm font-medium">
                    Live Demo
                  </button>
                </div>
              </div>
            </div>

            {/* Featured Project 2 */}
            <div className="transform transition-transform duration-300 hover:scale-105 bg-white/5 rounded-lg overflow-hidden">
              <div className="bg-[#333333] h-64 sm:h-72 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl mb-4">💻</div>
                  <p className="text-lg">Portfolio Website</p>
                  <p className="text-sm opacity-80">Web Development</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-green-500 w-3 h-3 rounded-full"></span>
                  <span className="text-white text-sm">Completed</span>
                </div>
                <h3 className="text-white text-xl sm:text-2xl font-semibold mb-4">
                  Responsive Portfolio Website
                </h3>
                <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed mb-6">
                  Modern, responsive portfolio website built with Next.js and Tailwind CSS. 
                  Features dynamic content, smooth animations, and optimized performance.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs sm:text-sm">Next.js</span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs sm:text-sm">React</span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs sm:text-sm">Tailwind CSS</span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs sm:text-sm">Responsive</span>
                </div>
                <div className="flex gap-3">
                  <button className="bg-white text-[#222222] hover:bg-white/90 px-4 py-2 rounded-md transition-colors duration-300 text-sm font-medium">
                    View Details
                  </button>
                  <button className="text-white border border-white hover:bg-white hover:text-[#222222] px-4 py-2 rounded-md transition-colors duration-300 text-sm font-medium">
                    Live Site
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ===== ALL PROJECTS SECTION ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] mb-4">
            ALL PROJECTS
          </h2>
          <p className="text-sm sm:text-base text-[#222222] font-light max-w-2xl mx-auto">
            Complete collection of my database, web development, and software projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button className="bg-[#222222] text-white px-4 py-2 rounded-md text-sm font-medium">
            All Projects
          </button>
          <button className="bg-gray-200 text-[#222222] hover:bg-[#222222] hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300">
            Database Design
          </button>
          <button className="bg-gray-200 text-[#222222] hover:bg-[#222222] hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300">
            Web Development
          </button>
          <button className="bg-gray-200 text-[#222222] hover:bg-[#222222] hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300">
            Windows Apps
          </button>
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 font-reddit-sans">

          {/* Project 1: Student Information System */}
          <div className="transform transition-transform duration-300 hover:scale-105 border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-[#222222] h-48 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-3xl mb-2">🗄️</div>
                <p className="text-sm">Database Project</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-yellow-500 w-2 h-2 rounded-full"></span>
                <span className="text-xs text-gray-600">In Progress</span>
              </div>
              <h3 className="text-[#222222] text-lg font-semibold mb-2">
                E-commerce Product & Order DB
              </h3>
              <p className="text-[#222222]/80 text-sm font-light mb-4 leading-relaxed">
                ER diagram and database design for comprehensive student management system.
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="bg-gray-100 text-[#222222] px-2 py-1 rounded text-xs">MySQL</span>
                <span className="bg-gray-100 text-[#222222] px-2 py-1 rounded text-xs">WorkBench</span>
              </div>
              <button className="w-full bg-[#222222] text-white hover:bg-[#222222]/90 py-2 rounded-md text-sm transition-colors duration-300">
                View Project
              </button>
            </div>
          </div>

          {/* Project 2: Library Management */}
          <div className="transform transition-transform duration-300 hover:scale-105 border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-[#222222] h-48 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-3xl mb-2">📚</div>
                <p className="text-sm">Web Application</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-yellow-500 w-2 h-2 rounded-full"></span>
                <span className="text-xs text-gray-600">In Progress</span>
              </div>
              <h3 className="text-[#222222] text-lg font-semibold mb-2">
                Library Management System
              </h3>
              <p className="text-[#222222]/80 text-sm font-light mb-4 leading-relaxed">
                Date calculations, user roles.
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="bg-gray-100 text-[#222222] px-2 py-1 rounded text-xs">MySQL</span>
                <span className="bg-gray-100 text-[#222222] px-2 py-1 rounded text-xs">WorkBench</span>
              </div>
              <button className="w-full bg-[#222222] text-white hover:bg-[#222222]/90 py-2 rounded-md text-sm transition-colors duration-300">
                View Project
              </button>
            </div>
          </div>

          {/* Project 3: Inventory System */}
          <div className="transform transition-transform duration-300 hover:scale-105 border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-[#222222] h-48 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-3xl mb-2">📦</div>
                <p className="text-sm">Windows Application</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-yellow-500 w-2 h-2 rounded-full"></span>
                <span className="text-xs text-gray-600">In Progress</span>
              </div>
              <h3 className="text-[#222222] text-lg font-semibold mb-2">
                Task Management Web App (Connected to SQL DB)
              </h3>
              <p className="text-[#222222]/80 text-sm font-light mb-4 leading-relaxed">
                SQL integration with frontend, real-time updates, transactions.
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="bg-gray-100 text-[#222222] px-2 py-1 rounded text-xs">C#</span>
                <span className="bg-gray-100 text-[#222222] px-2 py-1 rounded text-xs">MySQL</span>
                <span className="bg-gray-100 text-[#222222] px-2 py-1 rounded text-xs">WinForms</span>
              </div>
              <button className="w-full bg-[#222222] text-white hover:bg-[#222222]/90 py-2 rounded-md text-sm transition-colors duration-300">
                View Project
              </button>
            </div>
          </div>

          {/* Project 4: E-commerce Database */}
          <div className="transform transition-transform duration-300 hover:scale-105 border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-[#222222] h-48 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-3xl mb-2">🛒</div>
                <p className="text-sm">Database Design</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-500 w-2 h-2 rounded-full"></span>
                <span className="text-xs text-gray-600">Planning</span>
              </div>
              <h3 className="text-[#222222] text-lg font-semibold mb-2">
                Inventory Management System
              </h3>
              <p className="text-[#222222]/80 text-sm font-light mb-4 leading-relaxed">
                ERD design, normalization, foreign key relationships, CRUD operations.
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="bg-gray-100 text-[#222222] px-2 py-1 rounded text-xs">MySQL</span>
                <span className="bg-gray-100 text-[#222222] px-2 py-1 rounded text-xs">ERD Modeling</span>
              </div>
              <button className="w-full bg-gray-300 text-[#222222] py-2 rounded-md text-sm cursor-not-allowed">
                Coming Soon
              </button>
            </div>
          </div>

          

        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <Footer />
    </>
  );
}