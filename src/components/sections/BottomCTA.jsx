import React from "react";
import { motion } from "framer-motion";
import "../../styles/sections/BottomCTA.css";

const BottomCTA = ({ triggerToast, language }) => {
  const t = {
    en: {
      subtitle: "STUDY ANYWHERE",
      title: "Take Mesob Academy in your pocket.",
      desc: "Download our mobile application to get instant access to simulated exams, offline video lectures, flashcards, and student discussion rooms.",
      scanTitle: "Scan to Download",
      scanDesc: "Open your phone camera to scan and install instantly.",
      iosMsg: "iOS version coming soon!",
      androidMsg: "Android version coming soon!",
      mockTitle: "Quiz Flow Preview",
      mockCardTitle: "Active Transport",
      mockCardSub: "Biology • Chapter 3",
      mockStat: "Daily Streak",
      mockStatVal: "12 Days",
    },
    am: {
      subtitle: "በማንኛውም ቦታ ያጥኑ",
      title: "የኢትዮ ዩኒክ አካዳሚ መተግበሪያን ያውርዱ።",
      desc: "የብሔራዊ ፈተናዎችን፣ ከመስመር ውጭ የቪዲዮ ትምህርቶችን፣ ፍላሽካርዶችን እና የጋራ የውይይት መድረኮችን ለማግኘት መተግበሪያችንን ያውርዱ።",
      scanTitle: "ካሜራዎን በመጠቀም ያውርዱ",
      scanDesc: "የስልክዎን ካሜራ በመክፈት ኮዱን ስካን ያድርጉ እና ይጫኑት።",
      iosMsg: "የiOS ሥሪት በቅርቡ ይመጣል!",
      androidMsg: "የአንድሮይድ ሥሪት በቅርቡ ይመጣል!",
      mockTitle: "የፈተና ልምምድ",
      mockCardTitle: "አክቲቭ ትራንስፖርት",
      mockCardSub: "ባዮሎጂ • ምዕራፍ 3",
      mockStat: "የእለት ተእለት ጥናት",
      mockStatVal: "12 ቀናት",
    },
  };

  const currentT = t[language] || t.en;

  return (
    <section id="download-app" className="bottom-cta">
      <div className="container">
        <div className="cta-grid">
          {/* Left Side: Info & QR Code */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="cta-info"
          >
            <span className="section-subtitle-new">{currentT.subtitle}</span>
            <h2 className="cta-title">{currentT.title}</h2>
            <p className="cta-desc">{currentT.desc}</p>
            
            {/* App Store Buttons */}
            <div className="store-buttons">
              <img
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                className="store-badge"
                onClick={() => triggerToast(currentT.iosMsg)}
              />
              <img
                src="/google-play-badge.svg"
                alt="Get it on Google Play"
                className="store-badge"
                onClick={() => triggerToast(currentT.androidMsg)}
              />
            </div>

            {/* QR Code Block */}
            <div className="qr-container">
              <div className="qr-code">
                {/* Custom Stylized QR Code SVG */}
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0H30V10H10V30H0V0ZM70 0H100V30H90V10H70V0ZM0 70H10V90H30V100H0V70ZM90 90V70H100V100H70V90H90Z" fill="var(--color-primary)" />
                  <rect x="15" y="15" width="20" height="20" fill="currentColor" />
                  <rect x="20" y="20" width="10" height="10" fill="var(--color-surface-container)" />
                  <rect x="65" y="15" width="20" height="20" fill="currentColor" />
                  <rect x="70" y="20" width="10" height="10" fill="var(--color-surface-container)" />
                  <rect x="15" y="65" width="20" height="20" fill="currentColor" />
                  <rect x="20" y="70" width="10" height="10" fill="var(--color-surface-container)" />
                  <rect x="45" y="45" width="10" height="10" fill="var(--color-primary)" />
                  <rect x="40" y="20" width="5" height="15" fill="currentColor" />
                  <rect x="55" y="20" width="5" height="5" fill="currentColor" />
                  <rect x="40" y="40" width="10" height="5" fill="currentColor" />
                  <rect x="40" y="55" width="15" height="5" fill="currentColor" />
                  <rect x="20" y="40" width="10" height="5" fill="currentColor" />
                  <rect x="75" y="40" width="5" height="15" fill="currentColor" />
                  <rect x="65" y="45" width="5" height="5" fill="currentColor" />
                  <rect x="65" y="55" width="10" height="5" fill="currentColor" />
                  <rect x="55" y="70" width="15" height="5" fill="currentColor" />
                  <rect x="45" y="75" width="5" height="15" fill="currentColor" />
                  <rect x="55" y="80" width="10" height="10" fill="currentColor" />
                  <rect x="75" y="75" width="10" height="5" fill="currentColor" />
                  {/* Central Tiny Logo Accent */}
                  <rect x="43" y="43" width="14" height="14" rx="3" fill="var(--color-primary)" />
                  <path d="M47 50L50 47L53 50M50 48V53" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="qr-info">
                <h4 className="qr-title">{currentT.scanTitle}</h4>
                <p className="qr-desc">{currentT.scanDesc}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: CSS Mockup Phone */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="cta-mockup"
          >
            <div className="phone-wrapper">
              <div className="phone-bezel">
                <div className="phone-speaker"></div>
                <div className="phone-screen">
                  {/* Mock App Content */}
                  <div className="mock-app-header">
                    <span className="mock-app-logo">M</span>
                    <div className="mock-user-badge">
                      <div className="mock-avatar"></div>
                    </div>
                  </div>

                  <div className="mock-app-body">
                    {/* Mock Progress Bar Card */}
                    <div className="mock-card progress-card">
                      <span className="mock-card-label">{currentT.mockTitle}</span>
                      <div className="mock-progress-track">
                        <div className="mock-progress-fill" style={{ width: "70%" }}></div>
                      </div>
                      <div className="mock-progress-info">
                        <span>Grade 12 Physics</span>
                        <span>70%</span>
                      </div>
                    </div>

                    {/* Mock Flashcard */}
                    <div className="mock-card flashcard-mock">
                      <div className="mock-flashcard-header">
                        <BookOpen size={14} />
                        <span>Flashcard</span>
                      </div>
                      <h4 className="mock-flashcard-title">{currentT.mockCardTitle}</h4>
                      <p className="mock-flashcard-sub">{currentT.mockCardSub}</p>
                      <div className="mock-flashcard-btn">Flip Card</div>
                    </div>

                    {/* Mock Stats */}
                    <div className="mock-stats-row">
                      <div className="mock-stat-box">
                        <Sparkles size={14} />
                        <span className="mock-stat-num">{currentT.mockStatVal}</span>
                        <span className="mock-stat-lbl">{currentT.mockStat}</span>
                      </div>
                      <div className="mock-stat-box">
                        <Layers size={14} />
                        <span className="mock-stat-num">240</span>
                        <span className="mock-stat-lbl">Cards Studied</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Floating Screen Badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="floating-badge badge-top"
              >
                <div className="badge-icon-box">🎉</div>
                <div className="badge-text">
                  <span className="badge-title">Rank #3</span>
                  <span className="badge-sub">Arena Leaderboard</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="floating-badge badge-bottom"
              >
                <div className="badge-icon-box">⬇️</div>
                <div className="badge-text">
                  <span className="badge-title">Offline Vault</span>
                  <span className="badge-sub">12 Videos Ready</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BottomCTA;
