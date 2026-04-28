import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/sections/BottomCTA.css';

const BottomCTA = ({ triggerToast, language }) => {
  const t = {
    en: {
      title: "Ready to secure your future?",
      desc: "Join over 50,000+ students across Ethiopia using Ethio Unique Academy to secure their future.",
      iosMsg: "iOS Version Coming Soon",
      androidMsg: "Android Version Coming Soon"
    },
    am: {
      title: "ለወደፊትዎ ዝግጁ ነዎት?",
      desc: "የወደፊት ህይወታቸውን ለማረጋገጥ ኢትዮ ዩኒክ አካዳሚ የሚጠቀሙ ከመላው ኢትዮጵያ የተውጣጡ ከ50,000+ በላይ ተማሪዎችን ይቀላቀሉ።",
      iosMsg: "የiOS ሥሪት በቅርቡ ይመጣል",
      androidMsg: "የአንድሮይድ ሥሪት በቅርቡ ይመጣል"
    }
  };

  const currentT = t[language] || t.en;

  return (
    <section className="bottom-cta">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bottom-cta-card"
        >
          <h2 className="cta-title-new">{currentT.title}</h2>
          <p className="cta-desc-new">{currentT.desc}</p>
          <div className="cta-actions-new" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '2rem' }}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
              alt="Download on the App Store" 
              style={{ height: '44px', cursor: 'pointer', transition: 'transform 0.2s' }} 
              className="store-badge-img"
              onClick={() => triggerToast(currentT.iosMsg)}
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
              alt="Get it on Google Play" 
              style={{ height: '44px', cursor: 'pointer', transition: 'transform 0.2s' }} 
              className="store-badge-img"
              onClick={() => triggerToast(currentT.androidMsg)}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BottomCTA;
