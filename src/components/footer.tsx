import Image from 'next/image';
import facebook from '@/assets/facebook.png';
import linkedin from '@/assets/linkedin.png';
import githublight from '@/assets/githublight.png';
import youtube from '@/assets/youtube.png'; // Assuming you have a YouTube icon

export default function Footer() {
  return (
    <nav>
      <div className="w-full bg-[#222222] py-20">

        <div className="max-w-6xl mx-auto flex gap-55">
            
          <div className="md:w-[60%]">
            <h1 className="text-white text-2xl font-black">danieldavid</h1>
            <p className="text-white mb-10 mt-7">
              Looking to collaborate or hire me for a project? Connect with me through the links below.
            </p>

            <ul className="flex gap-3 mb-10">
              <li>
                <a
                  href="https://github.com/ddmlupase"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Image src={githublight} alt="GitHub" width={30} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/daniel-david-lupase-ab019236a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Image src={linkedin} alt="LinkedIn" width={30} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/danieldavidlupase"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Image src={facebook} alt="Facebook" width={30} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@danieldavid09"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <Image src={youtube} alt="YouTube" width={30} />
                </a>
              </li>
              
            </ul>

            <h1 className="text-white mt-20">© Daniel David Lupase 2025</h1>
          </div>
          

          <div className="bg-white md:w-[0.1%]" />

          <div className="md:w-[39%]">
            <h1 className="text-white mb-5 font-bold">Contact</h1>
            <h1 className="text-white mb-5">Davao City, Davao Del Sur, Philippines</h1>
            <h1 className="text-white mb-5">lupasedanieldavid@gmail.com</h1>
            <h1 className="text-white mb-5">+639-6060-25920</h1>
          </div>
          
        </div>
      </div>
    </nav>
  );
}
