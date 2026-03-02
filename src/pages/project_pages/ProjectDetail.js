import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projects from '../../data/projects';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

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
            <p className="pd-tag">{project.type.toUpperCase()}</p>
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
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
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
                <span className="pd-info-value">{project.category}</span>
              </div>
              <div className="pd-info-row">
                <span className="pd-info-label">Year</span>
                <span className="pd-info-value">{project.year || '—'}</span>
              </div>
            </div>

            <div className="pd-cta">
              <a
                href={project.liveUrl || '#'}
                target={project.liveUrl ? '_blank' : undefined}
                rel="noreferrer"
                className={`pd-btn pd-btn-primary${!project.liveUrl ? ' pd-btn-disabled' : ''}`}
              >
                View Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
              </a>
              <a
                href={project.sourceUrl || '#'}
                target={project.sourceUrl ? '_blank' : undefined}
                rel="noreferrer"
                className={`pd-btn pd-btn-secondary${!project.sourceUrl ? ' pd-btn-disabled' : ''}`}
              >
                Source Code
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
