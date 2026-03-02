import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import projects from '../data/projects';
import './Projects.css';

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="projects-page">
      <div className="container">
        <button className="back-btn" onClick={() => navigate('/')}>← Back</button>

        <div className="projects-page-header">
          <h1 className="projects-page-title">
            All Projects<span className="heading-muted">.</span>
          </h1>
        </div>

        <div className="all-projects-grid">
          {projects.map((proj) => (
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
      </div>
    </div>
  );
};

export default Projects;