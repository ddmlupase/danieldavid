import Image from 'next/image';
import facebook from '@/assets/facebook.png';
import linkedin from '@/assets/linkedin.png';
import githublight from '@/assets/githublight.png';
import youtube from '@/assets/youtube.png';

export default function Footer() {
  return (
    <footer className="bg-[#222222] text-white" id="connect">
      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-12">
          
          {/* Left Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold font-reddit-sans mb-4">danieldavid</h2>
              <p className="text-gray-300 leading-relaxed max-w-md font-reddit-sans">
                Looking to collaborate or hire me for a project? Let's connect and build something amazing together.
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 font-reddit-sans">
                Follow Me
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/ddmlupase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Image src={githublight} alt="GitHub" width={24} height={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/daniel-david-lupase-ab019236a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Image src={linkedin} alt="LinkedIn" width={24} height={24} />
                </a>
                <a
                  href="https://www.facebook.com/danieldavidlupase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Image src={facebook} alt="Facebook" width={24} height={24} />
                </a>
                <a
                  href="https://www.youtube.com/@danieldavid09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <Image src={youtube} alt="YouTube" width={24} height={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Contact */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 font-reddit-sans">
                Contact
              </h3>
              <div className="space-y-3 font-reddit-sans">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                    <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Davao City, Davao Del Sur, Philippines</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 flex-shrink-0">
                    <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <a 
                    href="mailto:lupasedanieldavid@gmail.com" 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    lupasedanieldavid@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 flex-shrink-0">
                    <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <a 
                    href="tel:+639606025920" 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    +639 606 025 920
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-reddit-sans">
            <p className="text-gray-400 text-sm">
              © 2025 Daniel David Lupase. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
        
      </div>
    </footer>
  );
}