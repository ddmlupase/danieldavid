import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allProjects } from '../Projects';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="container">
          <button className="back-btn" onClick={() => navigate('/projects')}>
            ← Back to Projects
          </button>
          <h1 className="pd-title">Project not found.</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <div className="container">
        <button className="back-btn" onClick={() => navigate('/projects')}>
          ← Back to Projects
        </button>

        {/* Hero banner */}
        <div className="pd-hero" style={{ background: project.bg }}>
          <div className="pd-hero-content">
            <p className="pd-tag">{project.tag}</p>
            <h1 className="pd-title">{project.title}</h1>
          </div>
        </div>

        {/* Details */}
        <div className="pd-content">
          <div className="pd-main">
            <section className="pd-section">
              <h2 className="pd-section-title">Overview</h2>
              <p className="pd-desc">{project.desc}</p>
            </section>

            <section className="pd-section">
              <h2 className="pd-section-title">Key Features</h2>
              <ul className="pd-features">
                <li>Responsive design optimized for all screen sizes</li>
                <li>Clean, maintainable codebase with modern best practices</li>
                <li>Performance-first architecture with lazy loading</li>
                <li>Comprehensive error handling and edge case coverage</li>
              </ul>
            </section>
          </div>

          <aside className="pd-sidebar">
            <div className="pd-info-card">
              <div className="pd-info-row">
                <span className="pd-info-label">Tech Stack</span>
                <div className="pd-tags">
                  {project.tags.map((t) => (
                    <span className="pd-tag-pill" key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="pd-info-row">
                <span className="pd-info-label">Category</span>
                <span className="pd-info-value">{project.tag.split('·')[0].trim()}</span>
              </div>
              <div className="pd-info-row">
                <span className="pd-info-label">Year</span>
                <span className="pd-info-value">{project.tag.split('·')[1]?.trim() || '—'}</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
