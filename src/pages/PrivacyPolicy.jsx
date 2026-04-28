import React from 'react';

const PrivacyPolicy = () => (
  <div className="legal-page-container" style={{ padding: '8rem 2rem', textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div className="glass" style={{ padding: '3rem', maxWidth: '600px', margin: '0 auto', border: '1px solid var(--color-primary)' }}>
      <h1 className="legal-title" style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Privacy Policy</h1>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>
        To protect student integrity and secure academic data, Ethio Unique Academy's full Privacy Policy parameters are hosted securely inside our central mobile interface. 
      </p>
      <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>
        Please download the mobile application to review complete onboarding disclosures.
      </p>
      <button className="btn btn-primary" onClick={() => { window.location.href = '/'; }}>Go to Home</button>
    </div>
  </div>
);

export default PrivacyPolicy;
