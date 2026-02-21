import React, { useState } from 'react';
import './Projects.css';
import comingSoon from '../assets/comingsoon.jpg';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');

  // Updated navigation categories as requested
  const categories = ['All', 'College', 'Personal', 'Insights'];

  return (
    <div className="projects-container">
      <header className="projects-header">
        <h1>My Projects</h1>
        
        <nav className="category-nav">
          {categories.map(cat => (
            <button 
              key={cat}
              className={`category-btn ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>
      </header>

      <main className="project-list">
        {/* Project Item 1 */}
        <div className="project-card">
          <div className="project-image-wrapper">
            <img src={comingSoon} alt="Design Sprints" />
          </div>
          <div className="project-info">
            <div className="meta-row">
              <span>Design</span>
              <span style={{ color: '#ccc' }}>—</span>
              <span>Jan 21, 2022</span>
            </div>
            <h2>What did I learn from doing 50+ design sprints?</h2>
            <div className="read-time">4 min read</div>
          </div>
        </div>

        {/* Project Item 2 */}
        <div className="project-card">
          <div className="project-image-wrapper">
            <img src={comingSoon} alt="Figma vs Sketch" />
          </div>
          <div className="project-info">
            <div className="meta-row">
              <span>Design</span>
              <span style={{ color: '#ccc' }}>—</span>
              <span>Jan 21, 2022</span>
            </div>
            <h2>Figma vs Sketch - What design tool to choose in 2022?</h2>
            <div className="read-time">6 min read</div>
          </div>
        </div>

        {/* Project Item 3 */}
        <div className="project-card">
          <div className="project-image-wrapper">
            <img src={comingSoon} alt="Design Systems" />
          </div>
          <div className="project-info">
            <div className="meta-row">
              <span>College</span>
              <span style={{ color: '#ccc' }}>—</span>
              <span>Mar 15, 2022</span>
            </div>
            <h2>How to build a scalable design system from scratch</h2>
            <div className="read-time">8 min read</div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Projects;