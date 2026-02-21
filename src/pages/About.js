import React from 'react';
import './About.css';
import comingSoon from '../assets/comingsoon.jpg';

const About = () => {
  return (
    <div className="about-page">
      {/* Header Section */}
      <header className="about-header">
        <h1>About Me</h1>
        <div className="header-flex">
          <p className="header-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend eget
            in vel tristique. Aenean urna, nulla massa mauris. Blandit neque velit
            luctus accumsan. Sagittis lorem phasellus fermentum.
          </p>
          <a href="/contact" className="arrow-link">Contact me ↗</a>
        </div>
      </header>

      {/* Hero Image */}
      <div className="featured-image-container">
        <img 
          src={comingSoon} 
          alt="Workspace" 
          className="featured-image"
        />
      </div>

      {/* Content Grid */}
      <main className="story-grid">
        {/* Left: Story */}
        <section className="story-content">
          <h2>My Story</h2>
          <div className="story-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit neque tempor 
              malesuada adipiscing congue diam quis orci amet porttitor blandit 
              amet nullam sit elit purus blandit non ut non quam curabitur.
            </p>
            <p>
              Quis orci amet porttitor blandit amet nullam sit elit purus blandit non 
              ut non quam curabitur lorem ipsum dolor sit amet, consectetur 
              adipiscing elit neque tempor malesuada adipiscing congue diam 
              lorem ipsum dolor sit amet consectetur.
            </p>
            <p>
              Quis orci amet porttitor blandit amet nullam sit elit purus blandit non 
              ut non quam curabitur lorem ipsum dolor sit amet consectetur 
              adipiscing elit.
            </p>
          </div>
        </section>

        {/* Right: Education */}
        <aside className="education-section">
          <h2>Education</h2>
          
          <div className="edu-item">
            <span className="edu-degree">UX Research</span>
            <span className="edu-school">University of Oxford</span>
            <span className="edu-year">2014 — 2016</span>
          </div>

          <div className="edu-item">
            <span className="edu-degree">Advanced UI Design</span>
            <span className="edu-school">Caltech University</span>
            <span className="edu-year">2011 — 2013</span>
          </div>

          <div className="edu-item">
            <span className="edu-degree">Graphic Design</span>
            <span className="edu-school">Stanford University</span>
            <span className="edu-year">2006 — 2010</span>
          </div>
        </aside>
      </main>

      {/* Experience Section */}
      <section className="experience-section">
        <div className="experience-header">
          <h2>My Past Experience</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit neque tempor malesuada.
          </p>
        </div>

        {/* Experience Card 1 */}
        <div className="experience-card">
          <div className="card-top">
            <div className="company-info">
              Business, LLC.
            </div>
            <a href="#" className="arrow-link" style={{fontSize: '14px'}}>View website ↗</a>
          </div>

          <div className="card-content-grid">
            <div className="detail-column">
              <div className="detail-group">
                <label>Title</label>
                <p>VP of Design</p>
              </div>
              <div className="detail-group">
                <label>Period</label>
                <p>Jan 2022 — Present</p>
              </div>
            </div>

            <div className="description-column">
              <label>Description</label>
              <p>
                Quis orci amet porttitor blandit amet nullam sit elit purus blandit 
                non ut non quam curabitur lorem ipsum dolor sit amet consectetur 
                adipiscing elit neque tempor malesuada adipiscing congue diam.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Card 2 */}
        <div className="experience-card">
          <div className="card-top">
            <div className="company-info">
              Company, Inc.
            </div>
            <a href="#" className="arrow-link" style={{fontSize: '14px'}}>View website ↗</a>
          </div>

          <div className="card-content-grid">
            <div className="detail-column">
              <div className="detail-group">
                <label>Title</label>
                <p>Senior Product Designer</p>
              </div>
              <div className="detail-group">
                <label>Period</label>
                <p>2018 — 2022</p>
              </div>
            </div>

            <div className="description-column">
              <label>Description</label>
              <p>
                Quis orci amet porttitor blandit amet nullam sit elit purus blandit 
                non ut non quam curabitur lorem ipsum dolor sit amet consectetur 
                adipiscing elit neque tempor malesuada adipiscing congue diam.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;