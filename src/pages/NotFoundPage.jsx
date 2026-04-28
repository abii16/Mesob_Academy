import React from 'react';

const NotFoundPage = () => (
  <div className="legal-page-container" style={{ padding: '8rem 2rem', textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div className="glass" style={{ padding: '3rem', maxWidth: '600px', margin: '0 auto', border: '1px solid var(--color-error)' }}>
      <h1 className="legal-title" style={{ fontFamily: 'var(--font-display)', fontSize: '5rem', marginBottom: '1rem', color: 'var(--color-error)' }}>404</h1>
      <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>
        Oops! The page you are looking doesn't exist.  
      </p>
      <button 
        className="btn btn-primary" 
        onClick={() => { window.location.href = '/'; }}
        style={{ marginTop: '1rem' }}
      >
        Back to Home
      </button>
    </div>
  </div>
);

export default NotFoundPage;
