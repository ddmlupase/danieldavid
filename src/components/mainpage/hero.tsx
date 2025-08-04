import Image from 'next/image';
import TypeName from '@/components/mainpage/TypeName';
import me from '@/assets/me.png';

export default function Hero() {
  return (
    <main className="min-h-[600px] sm:min-h-[700px] lg:min-h-[700px] flex items-center justify-center py-8 sm:py-12" id="home">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full gap-8 lg:gap-12">
        
        {/* Hero Text Content */}
        <div className="w-full lg:w-[60%] text-center lg:text-left opacity-0 translate-y-8 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
          <h1 className="text-lg sm:text-xl font-light font-reddit-sans mt-2 sm:mt-4 lg:mt-20 text-[#222222] opacity-0 translate-y-4 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards]">
            Hi there, I am
          </h1>

          <div className="opacity-0 translate-y-4 animate-[fadeInUp_0.6s_ease-out_0.6s_forwards]">
            <TypeName />
          </div>

          <h1 className="text-xl sm:text-2xl lg:text-2xl font-semibold font-reddit-sans text-[#222222] leading-tight mt-2 opacity-0 translate-y-4 animate-[fadeInUp_0.6s_ease-out_0.8s_forwards]">
            JUNIOR DATABASE DEVELOPER
          </h1>

          <p className="max-w-none lg:max-w-xl text-sm sm:text-base font-light font-reddit-sans text-[#222222] leading-relaxed mt-3 sm:mt-4 lg:mt-7 opacity-0 translate-y-4 animate-[fadeInUp_0.6s_ease-out_1s_forwards]">
            Daniel David is a dedicated database-focused student passionate about organizing, 
            managing, and securing data. With a growing foundation in SQL, database design, and 
            data-driven development, he aims to build efficient, scalable systems.
          </p>

          <div className="opacity-0 translate-y-4 animate-[fadeInUp_0.6s_ease-out_1.2s_forwards]">
            <a href="/danieldavid.resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-4 sm:mt-6 lg:mt-8 bg-white text-[#222222] hover:bg-[#222222] hover:text-white border border-[#222222] px-4 sm:px-6 py-2 sm:py-3 rounded-md cursor-pointer transition-colors duration-300 text-sm sm:text-base transform hover:scale-105 transition-transform">
                Download Resume
              </button>
            </a>
          </div>

          {/* Hero Profile Image - Only visible on mobile, positioned after button */}
          <div className="lg:hidden flex justify-center items-center cursor-pointer opacity-0 translate-y-4 animate-[fadeInUp_0.8s_ease-out_1.4s_forwards] mt-8">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 group">
              <Image
                src={me}
                alt="me"
                quality={100}
                fill
                className="object-cover rounded-full transition-transform duration-500 group-hover:scale-105 group-hover:shadow-lg"
                sizes="(max-width: 640px) 192px, 256px"
              />
            </div>
          </div>
        </div>

        {/* Hero Profile Image - Only visible on desktop */}
        <div className="hidden lg:flex w-full lg:w-[40%] justify-center items-center cursor-pointer opacity-0 translate-x-8 animate-[fadeInRight_0.8s_ease-out_0.4s_forwards]">
          <div className="relative w-80 h-80 xl:w-96 xl:h-96 group">
            <Image
              src={me}
              alt="me"
              quality={100}
              fill
              className="object-cover rounded-full transition-transform duration-500 group-hover:scale-105 group-hover:shadow-lg"
              sizes="(max-width: 1280px) 320px, 384px"
            />
          </div>
        </div>
      </div>
    </main>
  );
}