import React from 'react';
import '../../styles/sections/Contact.css';

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
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        <div className="contact-header">
          <span className="section-subtitle-new">{currentT.subtitle}</span>
          <h2 className="section-title-new">{currentT.title}</h2>
          <p className="contact-desc">{currentT.desc}</p>
        </div>

        <form 
          className="glass contact-form" 
          onSubmit={(e) => {
            e.preventDefault();
            triggerToast(currentT.toastMsg);
            e.target.reset();
          }}
        >
          <div className="form-group">
            <label className="form-label">{currentT.nameLabel}</label>
            <input 
              type="text" 
              required 
              className="form-input" 
              placeholder={currentT.namePlaceholder}
            />
          </div>
          <div className="form-group">
            <label className="form-label">{currentT.emailLabel}</label>
            <input 
              type="email" 
              required 
              className="form-input" 
              placeholder={currentT.emailPlaceholder}
            />
          </div>
          <div className="form-group">
            <label className="form-label">{currentT.helpLabel}</label>
            <textarea 
              rows="4" 
              required 
              className="form-textarea" 
              placeholder={currentT.helpPlaceholder}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary contact-submit-btn">{currentT.send}</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
