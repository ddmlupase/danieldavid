import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10);
          ticking = false;
        });
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <span className="nav-logo" onClick={() => handleNav('hero')}>danieldavid</span>
        <div className="nav-links">
          <button onClick={() => handleNav('about')}>About</button>
          <button onClick={() => handleNav('projects')}>Projects</button>
          <button onClick={() => handleNav('certifications')}>Certifications</button>
          <button onClick={() => handleNav('contact')}>Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;