import React from 'react';

const Contact = ({ triggerToast }) => {
  return (
    <section id="contact" className="contact-section" style={{ padding: '6rem 1rem', background: 'var(--color-bg)' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-subtitle-new">GET IN TOUCH</span>
          <h2 className="section-title-new">Contact Support</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '1rem' }}>Have questions? Our team is standing by to help you succeed.</p>
        </div>

        <form 
          className="glass" 
          style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.1)' }}
          onSubmit={(e) => {
            e.preventDefault();
            triggerToast('Support Inquiry Sent Successfully!');
            e.target.reset();
          }}
        >
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem' }}>Full Name</label>
            <input 
              type="text" 
              required 
              style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none' }} 
              placeholder="Enter your name"
            />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem' }}>Email Address</label>
            <input 
              type="email" 
              required 
              style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none' }} 
              placeholder="Enter your email"
            />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem' }}>How can we help?</label>
            <textarea 
              rows="4" 
              required 
              style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', resize: 'none' }} 
              placeholder="Describe your issue or question..."
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%',textAlign: 'center', alignItems: 'center', justifyContent: 'center', }}>Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
