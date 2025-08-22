// ===== IMPORTS =====
// Components
import Navbar from "@/components/navbar";
import Footer from '@/components/footer';

// Next.js
import Link from "next/link";

// Custom Icon Components
const PhoneIcon = ({ className: classes }: { className: string }) => (
  <svg 
    className={classes} 
    fill="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const MessageIcon = ({ className: classes }: { className: string }) => (
  <svg 
    className={classes} 
    fill="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
  </svg>
);

const FormIcon = ({ className: classes }: { className: string }) => (
  <svg 
    className={classes} 
    fill="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
  </svg>
);


export default function Connect() {
  return (
    <div className="bg-white min-h-screen">
      {/* ===== NAVIGATION ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
      </div>

      {/* ===== HERO SECTION ===== */}
      <div className="w-full bg-[#222222] py-24 sm:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold font-reddit-sans mb-6 transform transition-all duration-700 hover:scale-105">
            LET&apos;S GET IN TOUCH
          </h1>
          <p className="text-white text-lg sm:text-xl lg:text-2xl font-light font-reddit-sans max-w-3xl mx-auto leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-500">
            Want to get in touch? I&apos;d love to hear from you. Here&apos;s how you can reach me...
          </p>
        </div>
      </div>

      {/* ===== CONTACT OPTIONS SECTION ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        
        {/* Google Forms Tile */}
        <div className="mb-8 lg:mb-12">
          <div className="bg-white border border-gray-200 rounded-lg p-8 sm:p-10 lg:p-12 text-center shadow-sm hover:shadow-xl hover:border-[#222222] transition-all duration-500 transform hover:-translate-y-2 group">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#222222] rounded-full flex items-center justify-center group-hover:bg-gray-700 group-hover:scale-110 transition-all duration-300">
                <FormIcon className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            
            <h2 className="text-[#222222] text-2xl sm:text-3xl font-bold font-reddit-sans mb-4 group-hover:text-gray-700 transition-colors duration-300">
              Fill Out A Form
            </h2>
            
            <p className="text-[#222222] text-base sm:text-lg font-light font-reddit-sans leading-relaxed mb-8 group-hover:text-gray-600 transition-colors duration-300">
              Fill out the form with your contact details and message, 
              and I&apos;ll get back to you shortly
            </p>

            <div className="mt-8">
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSceeFWRsHtLXbP9OhkWKw7fQh692vgS0d3tkr0e0W6kPEU64A/viewform?usp=header" target="_blank">
                <button className="bg-white text-[#222222] hover:bg-[#222222] hover:text-white border-2 border-[#222222] px-8 py-3 rounded-md cursor-pointer transition-all duration-300 text-sm sm:text-base font-reddit-sans transform hover:scale-105 hover:shadow-lg">
                  Open Form
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Talk to Me */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 sm:p-10 lg:p-12 text-center shadow-sm hover:shadow-xl hover:border-[#222222] transition-all duration-500 transform hover:-translate-y-2 group">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#222222] rounded-full flex items-center justify-center group-hover:bg-gray-700 group-hover:scale-110 transition-all duration-300">
                <PhoneIcon className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            
            <h2 className="text-[#222222] text-2xl sm:text-3xl font-bold font-reddit-sans mb-4 group-hover:text-gray-700 transition-colors duration-300">
              Text or Call
            </h2>
            
            <p className="text-[#222222] text-base sm:text-lg font-light font-reddit-sans leading-relaxed mb-8 group-hover:text-gray-600 transition-colors duration-300">
              Just pick up the phone to chat with me directly
            </p>

            <a 
              href="tel:+1234567890" 
              className="inline-block text-[#222222] text-lg sm:text-xl font-medium font-reddit-sans hover:text-gray-600 transition-all duration-300 mb-6 hover:scale-105 transform"
            >
              +639-60602-5920
            </a>

            <div className="mt-8">
              <Link href="tel:+1234567890">
                <button className="bg-white text-[#222222] hover:bg-[#222222] hover:text-white border-2 border-[#222222] px-8 py-3 rounded-md cursor-pointer transition-all duration-300 text-sm sm:text-base font-reddit-sans transform hover:scale-105 hover:shadow-lg">
                  Call Now
                </button>
              </Link>
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 sm:p-10 lg:p-12 text-center shadow-sm hover:shadow-xl hover:border-[#222222] transition-all duration-500 transform hover:-translate-y-2 group">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#222222] rounded-full flex items-center justify-center group-hover:bg-gray-700 group-hover:scale-110 transition-all duration-300">
                <MessageIcon className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            
            <h2 className="text-[#222222] text-2xl sm:text-3xl font-bold font-reddit-sans mb-4 group-hover:text-gray-700 transition-colors duration-300">
              Email Me
            </h2>
            
            <p className="text-[#222222] text-base sm:text-lg font-light font-reddit-sans leading-relaxed mb-8 group-hover:text-gray-600 transition-colors duration-300">
              You can also reach me directly at lupasedanieldavid@gmail.com
            </p>

            <div className="mt-8">
              <Link href="mailto:daniel@example.com">
                <button className="bg-white text-[#222222] hover:bg-[#222222] hover:text-white border-2 border-[#222222] px-8 py-3 rounded-md cursor-pointer transition-all duration-300 text-sm sm:text-base font-reddit-sans transform hover:scale-105 hover:shadow-lg">
                  Send Email
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>


      {/* ===== FOOTER COMPONENT ===== */}
      <Footer />
    </div>
  );
}