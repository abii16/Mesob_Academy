import React from 'react';
import '../styles/pages/TermsOfService.css';

const TermsOfService = () => (
  <div className="legal-page-container terms-container">
    <div className="glass terms-card">
      <h1 className="terms-title">Terms of Service</h1>
      <p className="terms-desc">
        User access guidelines, subscription bounds, and strict anti-scraping conditions are enforced deterministically directly through local secure hardware profiles.
      </p>
      <p className="terms-subtext">
        Access the full Terms of Service directly within the localized profile screen inside the app.
      </p>
      <button className="btn btn-primary" onClick={() => { window.location.href = '/'; }}>Go to Home</button>
    </div>
  </div>
);

export default TermsOfService;
