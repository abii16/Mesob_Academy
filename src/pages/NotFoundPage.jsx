import React from 'react';
import '../styles/pages/NotFoundPage.css';

const NotFoundPage = () => (
  <div className="legal-page-container not-found-container">
    <div className="glass not-found-card">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-desc">
        Oops! The page you are looking doesn't exist.  
      </p>
      <button 
        className="btn btn-primary not-found-btn" 
        onClick={() => { window.location.href = '/'; }}
      >
        Back to Home
      </button>
    </div>
  </div>
);

export default NotFoundPage;
