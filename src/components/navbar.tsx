export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6">
      {/* Logo / Name */}
      <h1 className="text-2xl font-extrabold font-reddit-sans text-222222">
        danieldavid
        </h1>


      {/* Nav Links */}
      <ul className="flex gap-8 text-222222 font-light text-sm sm:text-base font-reddit-sans">
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Certifications</a></li>
        <li><a href="#">Connect</a></li>
      </ul>
    </nav>
  );
}
