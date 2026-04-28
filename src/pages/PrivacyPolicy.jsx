import React from 'react';
import '../styles/PrivacyPolicy.css';

const PrivacyPolicy = () => (
  <div className="legal-page-container privacy-container">
    <div className="glass privacy-card">
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="privacy-desc">
        To protect student integrity and secure academic data, Ethio Unique Academy's full Privacy Policy parameters are hosted securely inside our central mobile interface. 
      </p>
      <p className="privacy-subtext">
        Please download the mobile application to review complete onboarding disclosures.
      </p>
      <button className="btn btn-primary" onClick={() => { window.location.href = '/'; }}>Go to Home</button>
    </div>
  </div>
);

export default PrivacyPolicy;
