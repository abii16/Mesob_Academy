import React from 'react';

const TermsOfService = () => (
  <div className="legal-page-container" style={{ padding: '8rem 2rem', textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div className="glass" style={{ padding: '3rem', maxWidth: '600px', margin: '0 auto', border: '1px solid var(--color-primary)' }}>
      <h1 className="legal-title" style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Terms of Service</h1>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>
        User access guidelines, subscription bounds, and strict anti-scraping conditions are enforced deterministically directly through local secure hardware profiles.
      </p>
      <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>
        Access the full Terms of Service directly within the localized profile screen inside the app.
      </p>
      <button className="btn btn-primary" onClick={() => { window.location.href = '/'; }}>Go to Home</button>
    </div>
  </div>
);

export default TermsOfService;
