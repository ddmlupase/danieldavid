import React from 'react';
import profile from '../assets/danieldavid.png';
import comingSoon from '../assets/comingsoon.jpg';
import pokemonfanmadegame from '../assets/pokemonfanmadegame.png';
import './Home.css';

const featuredProjects = [
  {
    name: 'Pokemon Fan-Made Game',
    type: 'Website Development',
    image: pokemonfanmadegame,
    link: 'https://pokemonfanmadegame.netlify.app/',
  },
  {
    name: 'AdDU Univents',
    type: 'Android Development',
    image: comingSoon,
    link: '#',
  },
  {
    name: 'PrintSari Corner System',
    type: 'Windows Application',
    image: null,
    link: '#',
  },
  {
    name: 'Coming Soon',
    type: 'Full Stack Development',
    image: null,
    link: '#',
  },
];

const experiences = [
  {
    role: 'Graphic Designer',
    company: 'Samillano Minimart',
    from: 'October 2025',
    to: 'December 2025',
  },
  {
    role: 'Social Media Manager',
    company: 'CJ EasyDrive - Car Rental',
    from: 'September 2025',
    to: 'December 2025',
  },
  {
    role: 'Data Entry Specialist',
    company: 'Freelance',
    from: 'February 2022',
    to: 'December 2022',
  },
];

export default function Home() {
  return (
    <div className="home">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__avatar">
          <img
            src={profile}
            alt="Daniel David, IT Student"
          />
        </div>

        <div className="hero__content">
          <h1 className="hero__heading">
            Hello, I am Daniel.<br />
            IT Student.
          </h1>
          <p className="hero__subtitle">
            A dedicated IT Student based in the Philippines,
            with a passion for technology and innovation.
          </p>
          <a href="mailto:peter@example.com" className="hero__link">
            Resume<span className="hero__link-arrow">↗</span>
          </a>
        </div>
      </section>

      <hr className="home__divider" />

      {/* ── ABOUT + EXPERIENCE ── */}
      <section className="about">

        <div className="about__left">
          <h2 className="about__heading">About Me</h2>
          <div className="about__body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              tempor, malesuada adipiscing congue diam. Quis orci amet
              porttitor blandit amet nullam sit. Elit, purus blandit non ut non
              quam curabitur.
            </p>
            <p>
              Quis orci amet porttitor blandit amet nullam sit. Elit, purus
              blandit non ut non quam curabitur. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Neque tempor, malesuada adipiscing
              congue diam. Lorem ipsum dolor sit amet, consectetuR.
            </p>
          </div>
          <a href="/about" className="about__link">
            More about me <span>↗</span>
          </a>
        </div>

        <div className="experience">
          <h3 className="experience__heading">Past experience</h3>
          <ul className="experience__list">
            {experiences.map((exp, i) => (
              <li key={i} className="experience__item">
                <p className="experience__role">{exp.role}</p>
                <p className="experience__company">{exp.company}</p>
                <div className="experience__dates">
                  <span>{exp.from}</span>
                  <span>{exp.to}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="featured">
        <h2 className="featured__heading">Projects</h2>
        <p className="featured__description">A collection of projects I've built, 
          ranging from web development to mobile and desktop applications.</p>
        

        <ul className="featured__list">
          {featuredProjects.map((proj, i) => (
            <li key={i} className="featured__card">
              <div className="featured__image-wrapper">
                <img
                  src={proj.image || comingSoon}
                  alt={proj.name}
                  className="featured__image"
                />
              </div>
              <div className="featured__details">
                <h3 className="featured__name">{proj.name}</h3>
                <p className="featured__type">{proj.type}</p>
              </div>
              <a href={proj.link} className="featured__link">
                View Project ↗
              </a>
            </li>
          ))}
        </ul>

        <a href="/projects" className="featured__more">
          All projects <span>↗</span>
        </a>

        
      </section>
    </div>
  );
}