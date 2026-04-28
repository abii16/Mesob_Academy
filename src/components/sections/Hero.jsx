import React from 'react';
import { motion } from 'framer-motion';
import { Star, Play } from 'lucide-react';
import '../../styles/Hero.css';

const Hero = ({ triggerToast, language }) => {
  const t = {
    en: {
      socialProof: "Trusted by 50,000+ Students & 10+ Dedicated Teachers Working With Us",
      title: <>Master the Curriculum.<br />Ace Your Exams.</>,
      subtitle: "#1 EdTech platform in Ethiopia for grades 9-12 and freshman. Practice with adaptive testing, secure offline resources, and 24/7 hyper-personalized AI tutoring."
    },
    am: {
      socialProof: "በ50,000+ ተማሪዎች እና 10+ መምህራን የታመነ",
      title: <>ስርዓተ ትምህርቱን ይቆጣጠሩ።<br />ፈተናዎን በብቃት ይለፉ።</>,
      subtitle: "በኢትዮጵያ ለ9-12ኛ ክፍል እና ለዩኒቨርሲቲ መግቢያ #1 የትምህርት ቴክኖሎጂ ፕላትፎርም ነው። በተለዋዋጭ የፈተና ጥያቄዎች፣ አስተማማኝ ከመስመር ውጭ የትምህርት ግብአቶች እና የ24/7 AI ድጋፍ ይለማመዱ።"
    }
  };

  const currentT = t[language] || t.en;

  return (
    <section className="hero-new">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="hero-video"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
      />
      <div className="hero-overlay"></div>
      <div className="container hero-container-new">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="social-proof-badge"
        >
          <Star size={14} fill="var(--color-primary)" stroke="var(--color-primary)" />
          <span>{currentT.socialProof}</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-title-new"
        >
          {currentT.title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-subtitle-new"
        >
          {currentT.subtitle}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-btns-new"
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}
        >
          <div className="store-badges" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
              alt="Download on the App Store" 
              style={{ height: '40px', cursor: 'pointer', transition: 'transform 0.2s' }} 
              className="store-badge-img"
              onClick={() => triggerToast('iOS Version Coming Soon')}
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
              alt="Get it on Google Play" 
              style={{ height: '40px', cursor: 'pointer', transition: 'transform 0.2s' }} 
              className="store-badge-img"
              onClick={() => triggerToast('Android Version Coming Soon')}
            />
          </div>
          <button className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Play size={16} fill="currentColor" /> Watch Overview
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
