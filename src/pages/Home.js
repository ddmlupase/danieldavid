import React from 'react';
import profile from '../assets/danieldavid.png';
import './Home.css';


const experiences = [
  {
    role: 'Graphic Designer',
    company: 'Freelance',
    from: 'October 2025',
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
            alt="Daniel David, Product Designer"
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
            Contact me <span className="hero__link-arrow">↗</span>
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
    </div>
  );
}