import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-10">
      {/* Logo / Name */}
      <h1 className="text-3xl font-extrabold font-reddit-sans text-222222">
        danieldavid
      </h1>

      {/* Nav Links */}
      <ul className="flex gap-12 text-222222 font-thin text-sm sm:text-base font-reddit-sans">

        <li>
          <Link
            href="/"
            className="relative group transition text-222222 hover:text-black"
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        
        <li>
          <Link
            href="/services"
            className="relative group transition text-222222 hover:text-black"
          >
            Services
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>

        <li>
          <Link
            href="/projects"
            className="relative group transition text-222222 hover:text-black"
          >
            Projects
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>

        <li>
          <Link
            href="/certifications"
            className="relative group transition text-222222 hover:text-black"
          >
            Certifications
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>

        <li>
          <Link
            href="#connect"
            className="relative group transition text-222222 hover:text-black"
          >
            Connect
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>

        
      </ul>
    </nav>
  );
}
