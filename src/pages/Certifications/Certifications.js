import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import certifications from '../../data/certifications';
import './Certifications.css';

const Certifications = () => {
  const navigate = useNavigate();
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="certs-page">
      <div className="container">
        <button className="back-btn" onClick={() => navigate('/')}>← Back</button>

        <div className="certs-page-header">
          <h1 className="certs-page-title">
            Certifications
          </h1>
        </div>

        <div className="all-certs-grid">
          {certifications.map((cert, i) => (
            <div className="cert-card" key={i} onClick={() => setSelectedCert(cert)}>
              <div className="cert-image-wrap">
                {cert.img ? (
                  <img src={cert.img} alt={cert.name} loading="lazy" decoding="async" />
                ) : (
                  <div className="cert-image-placeholder"><span>Certificate</span></div>
                )}
              </div>
              <div className="cert-body">
                <p className="cert-name">{cert.name}</p>
                <div className="cert-meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CERT MODAL ── */}
      {selectedCert && (
        <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal" onClick={(e) => e.stopPropagation()}>

            <button className="cert-modal-close" onClick={() => setSelectedCert(null)} aria-label="Close">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            {/* Full certificate image */}
            <div className="cert-modal-img-wrap">
              {selectedCert.img
                ? <img src={selectedCert.img} alt={selectedCert.name} />
                : <span className="cert-modal-img-placeholder">No Image</span>
              }
            </div>

            {/* Details */}
            <div className="cert-modal-body">
              <p className="cert-modal-issuer">{selectedCert.issuer}</p>
              <h2 className="cert-modal-title">{selectedCert.name}</h2>
              <p className="cert-modal-date">Issued · {selectedCert.date}</p>

              {selectedCert.desc && (
                <p className="cert-modal-desc">{selectedCert.desc}</p>
              )}

              {selectedCert.skills?.length > 0 && (
                <div className="cert-modal-skills">
                  <p className="cert-modal-skills-label">Skills & Topics</p>
                  <div className="cert-modal-skills-list">
                    {selectedCert.skills.map((s) => (
                      <span key={s} className="cert-skill-pill">{s}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;

