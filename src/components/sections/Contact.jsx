import React from 'react';

const Contact = ({ triggerToast, language }) => {
  const t = {
    en: {
      subtitle: "GET IN TOUCH",
      title: "Contact Support",
      desc: "Have questions? Our team is standing by to help you succeed.",
      nameLabel: "Full Name",
      namePlaceholder: "Enter your name",
      emailLabel: "Email Address",
      emailPlaceholder: "Enter your email",
      helpLabel: "How can we help?",
      helpPlaceholder: "Describe your issue or question...",
      send: "Send",
      toastMsg: "Support Inquiry Sent Successfully!"
    },
    am: {
      subtitle: "ያግኙን",
      title: "ድጋፍ ያግኙ",
      desc: "ጥያቄዎች አሉዎት? የእኛ ቡድን እርስዎን ለመርዳት ዝግጁ ነው።",
      nameLabel: "ሙሉ ስም",
      namePlaceholder: "ስምዎን ያስገቡ",
      emailLabel: "የኢሜል አድራሻ",
      emailPlaceholder: "ኢሜልዎን ያስገቡ",
      helpLabel: "እንዴት ልንረዳዎ እንችላለን?",
      helpPlaceholder: "ጉዳይዎን ወይም ጥያቄዎን ያብራሩ...",
      send: "ላክ",
      toastMsg: "የድጋፍ ጥያቄዎ በተሳካ ሁኔታ ተልኳል!"
    }
  };

  const currentT = t[language] || t.en;

  return (
    <section id="contact" className="contact-section" style={{ padding: '6rem 1rem', background: 'var(--color-bg)' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-subtitle-new">{currentT.subtitle}</span>
          <h2 className="section-title-new">{currentT.title}</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '1rem' }}>{currentT.desc}</p>
        </div>

        <form 
          className="glass" 
          style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.1)' }}
          onSubmit={(e) => {
            e.preventDefault();
            triggerToast(currentT.toastMsg);
            e.target.reset();
          }}
        >
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem' }}>{currentT.nameLabel}</label>
            <input 
              type="text" 
              required 
              style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none' }} 
              placeholder={currentT.namePlaceholder}
            />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem' }}>{currentT.emailLabel}</label>
            <input 
              type="email" 
              required 
              style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none' }} 
              placeholder={currentT.emailPlaceholder}
            />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem' }}>{currentT.helpLabel}</label>
            <textarea 
              rows="4" 
              required 
              style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', resize: 'none' }} 
              placeholder={currentT.helpPlaceholder}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%',textAlign: 'center', alignItems: 'center', justifyContent: 'center', }}>{currentT.send}</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
