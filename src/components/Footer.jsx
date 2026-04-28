import React from 'react';
import '../styles/Footer.css';

const Footer = ({ currentPage, setCurrentPage, language }) => {
  const t = {
    en: {
      pitch: "The AI-first education platform empowering the next generation of Ethiopian students. Pure intelligence. Local context. Global success.",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      support: "Support",
      contact: "Contact Support",
      help: "Help Center",
      community: "Community",
      copyright: `© ${new Date().getFullYear()} ETHIO UNIQUE ACADEMY. BUILT WITH INTELLIGENCE IN ETHIOPIA.`,
      verified: "Verified Secure",
      privacyFirst: "Privacy First"
    },
    am: {
      pitch: "ቀጣዩን የኢትዮጵያ ተማሪዎች ትውልድ የሚያበረታታ የኢትዮጵያ የመጀመሪያው AI-powered ትምህርት ፕላትፎርም።",
      legal: "ሕጋዊ",
      privacy: "የግላዊነት ፖሊሲ",
      terms: "የአገልግሎት ውሎች",
      support: "ድጋፍ",
      contact: "ያግኙን",
      help: "የእርዳታ ማዕከል",
      community: "ማህበረሰብ",
      copyright: `© ${new Date().getFullYear()} ኢትዮ ዩኒክ አካዳሚ። በኢትዮጵያ ውስጥ በጥበብ የተገነባ።`,
      verified: "ደህንነቱ የተረጋገጠ",
      privacyFirst: "ለግላዊነት ቅድሚያ"
    }
  };

  const currentT = t[language] || t.en;

  return (
    <footer className="footer-new">
      <div className="container footer-grid-new">
        <div className="footer-brand-col">
          <p className="footer-brand-pitch">{currentT.pitch}</p>
        </div>

        <div className="footer-links-col">
          <h5 className="footer-col-title">{currentT.legal}</h5>
          <a href="#/privacy" className="footer-link-item">{currentT.privacy}</a>
          <a href="#/terms" className="footer-link-item">{currentT.terms}</a>
        </div>

        <div className="footer-links-col">
          <h5 className="footer-col-title">{currentT.support}</h5>
          <a href="#contact" className="footer-link-item" onClick={(e) => { e.preventDefault(); if (currentPage !== 'home') setCurrentPage('home'); setTimeout(() => { const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}>{currentT.contact}</a>
          <a href="#faq" className="footer-link-item" onClick={(e) => { e.preventDefault(); if (currentPage !== 'home') setCurrentPage('home'); setTimeout(() => { const el = document.getElementById('faq'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}>{currentT.help}</a>
        </div>

        <div className="footer-links-col">
          <h5 className="footer-col-title">{currentT.community}</h5>
          <a href="https://t.me/" target="_blank" rel="noreferrer" className="footer-link-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="12" fill="#229ED9" />
              <path d="M19.35 6.04L4.05 11.95c-.31.12-.3.3-.04.38l3.92 1.22 1.5 4.63c.14.39.07.54.38.54.24 0 .34-.11.48-.24l2.22-2.15 4.62 3.41c.85.47 1.46.23 1.67-.78L21.3 6.94c.3-.13.15-.37-.05-.42l-1.9-.48z" fill="white" />
            </svg>
            Telegram
          </a>
          <a href="https://www.youtube.com/@ETHIOUNIQUEACADEMY" target="_blank" rel="noreferrer" className="footer-link-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" fill="#FF0000" />
              <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="white" />
            </svg>
            YouTube
          </a>
        </div>
      </div>

      <div className="container footer-bottom-new">
        <p className="footer-copyright">{currentT.copyright}</p>
        <div className="footer-badges">
          <span>{currentT.verified}</span>
          <span>{currentT.privacyFirst}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
