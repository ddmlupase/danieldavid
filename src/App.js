import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './pages/Projects/Projects';
import Certifications from './pages/Certifications/Certifications';
import ProjectDetail from './pages/Projects/ProjectDetail';
import About from './pages/About/About';
import './App.css';
import { useRef } from 'react';
import projects from './data/projects';
import certifications from './data/certifications';
import javascript from './assets/PLicons/javascript.png';
import flutter from './assets/PLicons/fluttericon.png';
import mysql from './assets/PLicons/mysqlicon.png';
import react from './assets/PLicons/reacticon.png';
import css from './assets/PLicons/cssicon.png';
import packettracer from './assets/PLicons/packettracericon.png';
import dart from './assets/PLicons/darticon.png';
import supabase from './assets/PLicons/supabase.png';
import canva from './assets/PLicons/canva.png';
import davinci from './assets/PLicons/davinciresolve.png';
import vscode from './assets/PLicons/vscode.png';
import figma from './assets/PLicons/figma.png';
import github from './assets/PLicons/github.png';
import python from './assets/PLicons/python.png';
import html from './assets/PLicons/html.png';
import nodejs from './assets/PLicons/nodejs.png';
import danieldavid from './assets/danieldavid.png';

/* ─── MAIN HOME PAGE ─── */
const Home = () => {
  

  const gridRef = useRef(null);
  const techGridRef = useRef(null);
  const [selectedCert, setSelectedCert] = useState(null);

  /* ── Arrow scroll handlers ── */
  const scrollGrid = (dir) => {
    if (!gridRef.current) return;
    const card = gridRef.current.querySelector('.project-card');
    const distance = card ? card.offsetWidth + 20 : 400;
    gridRef.current.scrollBy({ left: dir * distance, behavior: 'smooth' });
  };
  const scrollTechGrid = (dir) => {
    if (!techGridRef.current) return;
    const card = techGridRef.current.querySelector('.tech-card');
    const distance = card ? card.offsetWidth + 14 : 400;
    techGridRef.current.scrollBy({ left: dir * distance, behavior: 'smooth' });
  };

  return (
    <>
      {/* ── HERO ── */}
      <section id="hero" className="hero">
        <div className="container hero-container">
          <div className="hero-left">
            <div className="hero-avatar">
              <img src={danieldavid} alt="Daniel David" />
            </div>
          </div>
          <div className="hero-right">
            <h1 className="hero-title">
              Hello, I'm Daniel David.<br />
              <span className="hero-title-muted">IT Student.</span>
            </h1>
            <p className="hero-desc">
              I build clean, performant web applications that live at the
              intersection of design and engineering. Based in the Philippines.
            </p>
            <div className="hero-cta">
              <a href="/resume.pdf" className="text-link">Download resume ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="about">
        <div className="container about-grid">
          <div className="about-left">
            <span className="section-label">ABOUT ME</span>
            <h2 className="about-heading">
              What about<br />me.
            </h2>
            <p>
              I am an Information Technology student with a strong passion for computers, networks, 
              and mobile technology. My interests are centered around networking, database management, 
              and mobile application development — areas I actively pursue both in my studies and through 
              personal projects.
            </p>
            <p>
              I enjoy the technical challenge that each of these fields brings, whether it's designing 
              structured databases, understanding how networks operate, or building mobile applications.
            </p>
            <p>
              My goal is to become a skilled IT professional specializing in networking or database administration, 
              while continuing to grow as a developer through continuous learning and hands-on experience.
            </p>
            <Link to="/about" className="text-link" style={{ marginTop: '8px' }}>More about me ↗</Link>
          </div>

          <div className="about-right">
            <span className="section-label">PAST EXPERIENCE</span>
            <div className="exp-list">
              {[
                { role: 'Social Media Manager', company: 'Freelance', from: 'Sept 2025', to: 'Dec 2025', current: false },
                { role: 'Graphic Designer', company: 'Freelance', from: 'Nov 2025', to: 'Dec 2025', current: false },
                { role: 'Data Entry', company: 'Freelance', from: 'Feb 2023', to: ' Dec 2023', current: false },
              ].map((job, i) => (
                <div className="exp-item" key={i}>
                  <p className="exp-role">
                    {job.role}
                    {job.current && <span className="exp-current-dot" />}
                  </p>
                  <div className="exp-detail">
                    <span className="exp-company">{job.company}</span>
                    <span className="exp-dot" />
                    <span className="exp-dates">{job.from} &mdash; {job.to}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section id="techstack" className="techstack">
        <div className="container">
          <div className="techstack-header">
            <div>
              <span className="section-label">TECH STACK</span>
              <h2 className="section-heading">
                Tools I build<br />
                <span className="heading-muted">with every day.</span>
              </h2>
            </div>
          </div>

          <div className="tech-grid" ref={techGridRef}>
            {[
              {
                cat: 'Frontend', colorClass: 'card-blue',
                items: [
                  { name: 'React', icon: react },
                  { name: 'Javascript', icon: javascript },
                  { name: 'HTML', icon: html },
                  { name: 'CSS', icon: css },
                  
                ],
              },
              {
                cat: 'Backend', colorClass: 'card-green',
                items: [
                  { name: 'Node.js', icon: nodejs },
                  { name: 'Python', icon: python },
                  { name: 'Flutter', icon: flutter },
                  { name: 'Dart', icon: dart },
                  
                  
                ],
              },
              {
                cat: 'Database', colorClass: 'card-orange',
                items: [
                  { name: 'MySQL', icon: mysql },
                  { name: 'Supabase', icon: supabase },
                ],
              },
              {
                cat: 'Tools', colorClass: 'card-purple',
                items: [
                  { name: 'Git', icon: github },
                  { name: 'Packet Tracer', icon: packettracer },
                  { name: 'Figma', icon: figma },
                  { name: 'Canva', icon: canva },
                  { name: 'DaVinci', icon: davinci },
                  { name: 'VS Code', icon: vscode },
                ],
              },
            ].map((card) => (
              <div className={`tech-card ${card.colorClass}`} key={card.cat}>
                <h3 className="tech-cat">{card.cat}</h3>
                <div className="tech-icon-grid">
                  {card.items.map((item) => (
                    <div className="tech-icon-square" key={item.name} data-tooltip={item.name}>
                      {item.icon && <img src={item.icon} alt={item.name} loading="lazy" decoding="async" />}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="tech-arrows">
            <button className="arrow-btn" onClick={() => scrollTechGrid(-1)} aria-label="Previous">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button className="arrow-btn" onClick={() => scrollTechGrid(1)} aria-label="Next">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── PROJECTS PREVIEW ── */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="projects-header">
            <div>
              <span className="section-label">FEATURED PROJECTS</span>
              <h2 className="section-heading">
                Projects that<br />define my craft. 
              </h2>
            </div>
            <a href="/projects" className="text-link view-all">View all ↗</a>
          </div>

          <div className="projects-grid" ref={gridRef}>
            {projects.filter(p => p.featured).map((proj) => (
              <Link to={`/projects/${proj.slug}`} className="project-card-link" key={proj.slug}>
                <div className="project-card">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="project-card-img"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="project-overlay">
                    <p className="project-tag">{proj.type.toUpperCase()}</p>
                    <h3 className="project-title">{proj.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="projects-arrows">
            <button className="arrow-btn" onClick={() => scrollGrid(-1)} aria-label="Previous">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button className="arrow-btn" onClick={() => scrollGrid(1)} aria-label="Next">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section id="certifications" className="certifications">
        <div className="container">
          <div className="certs-header">
            <div>
              <span className="section-label">CREDENTIALS</span>
              <h2 className="section-heading">
                Credentials &amp;<br />
                <span className="heading-muted">continuous learning.</span>
              </h2>
            </div>
            <Link to="/certifications" className="text-link view-all">Show more ↗</Link>
          </div>

          <div className="certs-grid">
            {certifications.filter(c => c.featured).slice(0, 3).map((cert, i) => (
              <div className="cert-card" key={i} onClick={() => setSelectedCert(cert)}>
                <div className="cert-image-wrap">
                  {cert.img ? (
                    <img src={cert.img} alt={cert.name} loading="lazy" decoding="async" />
                  ) : (
                    <div className="cert-image-placeholder"><span>Certificate</span></div>
                  )}
                </div>
                <div className="cert-body">
                  <p className="cert-name">{cert.name}</p>
                  <div className="cert-meta">
                    <span className="cert-issuer">{cert.issuer}</span>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERT MODAL ── */}
      {selectedCert && (
        <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>✕</button>
            <div className="cert-modal-image">
              {selectedCert.img ? (
                <img src={selectedCert.img} alt={selectedCert.name} />
              ) : (
                <div className="cert-image-placeholder"><span>Certificate Image</span></div>
              )}
            </div>
            <div className="cert-modal-body">
              <h3 className="cert-modal-title">{selectedCert.name}</h3>
              <p className="cert-modal-issuer">{selectedCert.issuer}</p>
              <p className="cert-modal-date">{selectedCert.date}</p>
              <p className="cert-modal-desc">{selectedCert.desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* ── CONTACT ── */}
      <section id="contact" className="contact">
        <div className="container contact-inner">
          <span className="section-label">CONTACT</span>
          <h2 className="section-heading">
            Let's build<br />
            <span className="heading-muted">something great.</span>
          </h2>
          <p className="contact-desc">
            I'm open to new projects, collaborations, and full-time opportunities.
            Drop me a message and I'll get back to you within 24 hours.
          </p>
          <div className="contact-links">
            <a href="mailto:daniel@example.com" className="contact-icon" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2-8 5-8-5h16zm0 12H4V9.158l8 5 8-5V18z"/></svg>
            </a>
            <a href="https://github.com/ddmlupase" target="_blank" rel="noreferrer" className="contact-icon" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/danieldavidlupase/" target="_blank" rel="noreferrer" className="contact-icon" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.554v-5.57c0-1.327-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.668H9.354V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.284zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.45zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://www.facebook.com/danieldavidlupase/" target="_blank" rel="noreferrer" className="contact-icon" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.885v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@ddlups" target="_blank" rel="noreferrer" className="contact-icon" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.48a8.16 8.16 0 004.77 1.52V7.64a4.85 4.85 0 01-1.01-.95z"/></svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

/* ─── APP WITH ROUTER ─── */
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/certifications" element={<Certifications />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;