import React, { useState } from 'react';
import './Projects.css';
import comingSoon from '../assets/comingsoon.jpg';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');

  // Updated navigation categories as requested
  const categories = ['All', 'College', 'Personal'];

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
    </div>
  );
};

export default Projects;