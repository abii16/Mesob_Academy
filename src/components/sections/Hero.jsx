import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Play, X } from 'lucide-react';
import '../../styles/sections/Hero.css';

const Hero = ({ triggerToast, language }) => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const modalVideoRef = useRef(null);

  const t = {
    en: {
      socialProof: "Based on New Curriculum",
      title: <>Master the Curriculum.<br />Ace Your Exams.</>,
      subtitle: "#1 EdTech platform in Ethiopia for grades 9-12 and freshman. Practice with adaptive testing, secure offline resources, and active community support.",
      watchOverview: "Watch Overview"
    },
    am: {
      socialProof: "በ50,000+ ተማሪዎች የታመነ እና በአዲሱ ስርዓተ ትምህርት ላይ የተመሰረተ",
      title: <>ስርዓተ ትምህርቱን ይቆጣጠሩ።<br />ፈተናዎን በብቃት ይለፉ።</>,
      subtitle: "በኢትዮጵያ ለ9-12ኛ ክፍል እና ለዩኒቨርሲቲ መግቢያ #1 የትምህርት ቴክኖሎጂ ፕላትፎርም ነው። በተለዋዋጭ የፈተና ጥያቄዎች፣ አስተማማኝ ያለ ኢንተርኔት የሚሰራ የትምህርት ግብአቶች እና በማህበረሰብ ድጋፍ ይለማመዱ።",
      watchOverview: "ማብራሪያ ይመልከቱ"
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

  useEffect(() => {
    if (showVideoModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [showVideoModal]);

  const handleOpenModal = () => {
    setShowVideoModal(true);
  };

  const handleCloseModal = () => {
    setShowVideoModal(false);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
  };

  return (
    <>
      <section className="hero-new">
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
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}
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
            <button 
              className="btn btn-secondary" 
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              onClick={handleOpenModal}
            >
              <Play size={16} fill="currentColor" /> {currentT.watchOverview}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            className="video-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="video-modal-content"
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="video-modal-close" onClick={handleCloseModal} aria-label="Close video">
                <X size={20} />
              </button>
              <video
                ref={modalVideoRef}
                className="video-modal-player"
                src="/feel.mp4"
                controls
                autoPlay
                playsInline
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;
