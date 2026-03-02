import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import certifications from '../data/certifications';
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
            Certifications<span className="heading-muted">.</span>
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
            <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>✕</button>
            <div className="cert-modal-image">
              {selectedCert.img ? (
                <img src={selectedCert.img} alt={selectedCert.name} />
              ) : (
                <div className="cert-image-placeholder"><span>Certificate Image</span></div>
              )}
            </div>
            <div className="cert-modal-body">
              <h3 className="cert-modal-title">{selectedCert.name}</h3>
              <p className="cert-modal-issuer">{selectedCert.issuer}</p>
              <p className="cert-modal-date">{selectedCert.date}</p>
              <p className="cert-modal-desc">{selectedCert.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;
