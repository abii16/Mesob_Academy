import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Download } from 'lucide-react';
import '../../styles/sections/Hero.css';

const Hero = ({ triggerToast, language }) => {
  const t = {
    en: {
      socialProof: "Based on New Curriculum",
      title: <>Master the Curriculum.<br />Ace Your Exams.</>,
      subtitle: "Ethiopia's #1 learning app for Grades 9-12. Practice with past national exams, download lessons to study offline, and get help from student study groups.",
      download: "Download App"
    },
    am: {
      socialProof: "በአዲሱ ስርዓተ ትምህርት ላይ የተመሰረተ",
      title: <>ስርዓተ ትምህርቱን ይቆጣጠሩ።<br />ፈተናዎን በብቃት ይለፉ።</>,
      subtitle: "በኢትዮጵያ ለ9-12ኛ ክፍል ተማሪዎች #1 የመማሪያ መተግበሪያ። ያለፉ የብሔራዊ ፈተናዎችን ይለማመዱ፣ ያለ ኢንተርኔት ለማጥናት ትምህርቶችን ያውርዱ፣ እና ከተማሪዎች ጋር አብረው ይማሩ።",
      download: "መተግበሪያውን ያውርዱ"
    }
  };

  const currentT = t[language] || t.en;
  const bgVideoRef = useRef(null);

  useEffect(() => {
    const video = bgVideoRef.current;
    if (!video) return;

    let isHeroVisible = true;
    let timeoutId = null;

    const startPauseTimeout = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (video) video.pause();
      }, 30000); // 30 seconds limit to preserve battery/CPU
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
        if (timeoutId) clearTimeout(timeoutId);
      } else if (isHeroVisible) {
        video.play().catch(() => {});
        startPauseTimeout();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isHeroVisible = entry.isIntersecting;
        if (entry.isIntersecting) {
          video.play().catch(() => {});
          startPauseTimeout();
        } else {
          video.pause();
          if (timeoutId) clearTimeout(timeoutId);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector(".hero-new");
    if (section) observer.observe(section);

    startPauseTimeout();

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (section) observer.unobserve(section);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="hero-new" id="hero">
      <video 
        ref={bgVideoRef}
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
          style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', alignItems: 'center' }}
        >
          <div className="store-badges" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <img 
              src="/google-play-badge.svg" 
              alt="Get it on Google Play" 
              style={{ height: '40px', cursor: 'pointer', transition: 'transform 0.2s' }} 
              className="store-badge-img"
              onClick={() => triggerToast(language === 'en' ? 'Android Version Coming Soon' : 'የAndroid ስሪት በቅርቡ ይመጣል')}
            />
          </div>
          <a 
            href="https://t.me/mesob2019/16"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary" 
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
          >
            <Download size={18} /> {currentT.download}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
