import React, { useMemo, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import projects from '../../data/projects';
import './Projects.css';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'solo', label: 'Solo' },
  { id: 'group', label: 'Group' },
];

function getProjectTimestamp(p) {
  // Supports future fields if you later add richer dates.
  const raw =
    p?.date ??
    p?.createdAt ??
    p?.year;

  if (raw == null) return 0;

  // If it's a string year like "2025"
  if (typeof raw === 'string' && /^\d{4}$/.test(raw.trim())) {
    return new Date(Number(raw), 11, 31).getTime();
  }

  const t = new Date(raw).getTime();
  return Number.isFinite(t) ? t : 0;
}

function isSoloProject(p) {
  if (p?.workType === 'solo') return true;
  if (p?.workType === 'group') return false;

  const category = String(p?.category ?? '').toLowerCase();
  return category.includes('solo');
}

const Projects = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  const visibleProjects = useMemo(() => {
    const filtered = projects.filter((p) => {
      if (activeFilter === 'all') return true;
      if (activeFilter === 'solo') return isSoloProject(p);
      if (activeFilter === 'group') return !isSoloProject(p);
      return true;
    });

    return filtered
      .slice()
      .sort((a, b) => {
        const t = getProjectTimestamp(b) - getProjectTimestamp(a);
        if (t !== 0) return t;
        return String(a?.title ?? '').localeCompare(String(b?.title ?? ''));
      });
  }, [activeFilter]);

  return (
    <div className="projects-page">
      <div className="container">
        <button className="back-btn" onClick={() => navigate('/')}>← Back</button>

        <div className="projects-page-header">
          <h1 className="projects-page-title">
            Projects
          </h1>
        </div>

        <div className="projects-segmented" role="tablist" aria-label="Project filters">
          {FILTERS.map((f) => {
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                className={`projects-segment${isActive ? ' is-active' : ''}`}
                onClick={() => setActiveFilter(f.id)}
                role="tab"
                aria-selected={isActive}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <div className="all-projects-grid">
          {visibleProjects.map((proj) => (
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

