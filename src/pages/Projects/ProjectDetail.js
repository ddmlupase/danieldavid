import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projects from '../../data/projects';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const screenshots = project?.screenshots || [];
  const lightboxOpen = lightboxIndex !== null;

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = useCallback(() => {
    setLightboxIndex((i) => (i - 1 + screenshots.length) % screenshots.length);
  }, [screenshots.length]);

  const nextImage = useCallback(() => {
    setLightboxIndex((i) => (i + 1) % screenshots.length);
  }, [screenshots.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen, prevImage, nextImage]);

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxOpen]);

  const workLabel =
    project?.workType === 'solo'
      ? 'Solo project'
      : project?.workType === 'group'
        ? 'Group project'
        : null;

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
    <>
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
                {workLabel && (
                  <div className="pd-info-row">
                    <span className="pd-info-label">Work</span>
                    <span className="pd-info-value">{workLabel}</span>
                  </div>
                )}
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

          {/* Screenshots */}
          {screenshots.length > 0 && (
            <section className="pd-screenshots-section">
              <h2 className="pd-section-title">Images</h2>
              <div className="pd-screenshots-grid">
                {screenshots.map((src, i) => (
                  <button
                    key={i}
                    className="pd-screenshot-card"
                    onClick={() => openLightbox(i)}
                    aria-label={`View screenshot ${i + 1}`}
                  >
                    <img
                      src={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="pd-screenshot-img"
                    />
                    <div className="pd-screenshot-overlay">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                        <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="pd-lightbox-overlay" onClick={closeLightbox}>
          {/* Close */}
          <button className="pd-lightbox-close" onClick={closeLightbox} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          {/* Prev */}
          {screenshots.length > 1 && (
            <button
              className="pd-lightbox-nav pd-lightbox-prev"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              aria-label="Previous"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
          )}

          {/* Image */}
          <div className="pd-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={screenshots[lightboxIndex]}
              alt={`${project.title} screenshot ${lightboxIndex + 1}`}
              className="pd-lightbox-img"
            />
          </div>

          {/* Next */}
          {screenshots.length > 1 && (
            <button
              className="pd-lightbox-nav pd-lightbox-next"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              aria-label="Next"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          )}

          {/* Counter */}
          {screenshots.length > 1 && (
            <div className="pd-lightbox-counter">
              {lightboxIndex + 1} / {screenshots.length}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProjectDetail;
