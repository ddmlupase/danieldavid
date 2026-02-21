import React from 'react';
import './Home.css';
import profileImg from '../assets/danieldavid.png';

const Home = () => {
  return (
    <div className="portfolio-container">
      {/* Hero */}
      <section className="hero-section">
        <img 
          src={profileImg} 
          alt="Daniel David" 
          className="profile-image" 
        />
        <div className="hero-content">
          <h1>Hello, I am Daniel David.<br />Information Technology Student</h1>
          <p className="hero-description">
            Lorem ipsum dolor sit amet, consectetur adipisci elit 
            dapibus porta lorem morbi hendrerit.
          </p>
          <a href="#contact" className="arrow-link">Contact me ↗</a>
        </div>
      </section>

      <hr className="divider" />

      {/* Main Content */}
      <div className="content-grid">
        {/* About Me */}
        <div className="about-section">
          <h2>About Me</h2>
          <div className="about-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              tempor, malesuada adipiscing congue diam. Quis orci amet
              porttitor blandit amet nullam sit. Elit, purus blandit non ut non
              quam curabitur.
            </p>
            <p>
              Quis orci amet porttitor blandit amet nullam sit. Elit, purus blandit
              non ut non quam curabitur. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Neque tempor, malesuada adipiscing
              congue diam. Lorem ipsum dolor sit amet, consectetuR.
            </p>
          </div>
          <a href="#more" className="arrow-link">More about me ↗</a>
        </div>

        {/* Experience */}
        <div className="experience-section">
          <h2>Past experience</h2>
          <div className="exp-item">
            <span className="exp-title">VP of Design</span>
            <span className="exp-company">Company, LLC.</span>
            <span className="exp-date">Jan 2022 — Present</span>
          </div>

          <div className="exp-item">
            <span className="exp-title">Senior Product Designer</span>
            <span className="exp-company">Agency, Inc.</span>
            <span className="exp-date">2018 — 2022</span>
          </div>

          <div className="exp-item">
            <span className="exp-title">UX Researcher</span>
            <span className="exp-company">Business, Inc.</span>
            <span className="exp-date">2015 — 2018</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;