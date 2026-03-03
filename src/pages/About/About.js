import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <div className="container">
        <button className="back-btn" onClick={() => navigate('/')}>← Back</button>
        <div className="coming-soon">
          <h1 className="coming-soon-title">Coming Soon</h1>
          <p className="coming-soon-desc">This page is under construction.</p>
        </div>
      </div>
    </div>
  );
};

export default About;

