import React from 'react';
import { motion } from 'framer-motion';
import { Users, Download, Zap, Clock, Calendar, Trophy } from 'lucide-react';
import FeatureCard from '../common/FeatureCard';
import '../../styles/sections/Features.css';

const Features = ({ language }) => {
  const t = {
    en: {
      subtitle: "PREMIUM FEATURES",
      title: "Built for Academic Success",
      communityTitle: "Community Chat",
      communityDesc: "Connect with thousands of students across Ethiopia. Share notes, discuss problems, and grow together.",
      offlineVaultTitle: "Offline Vault",
      offlineVaultDesc: "No internet? No problem. Download entire subjects and video lessons to study anywhere, anytime securely.",
      quizArenaTitle: "Quiz Arena",
      quizArenaDesc: "Battle against time or peers in timed quizzes designed for optimal Ethiopian national exam pacing.",
      pomodoroTitle: "Pomodoro Timer",
      pomodoroDesc: "Train your brain for peak focus. Optimize study intervals using custom work-and-break checkpoints.",
      studyPlannerTitle: "Study Planner",
      studyPlannerDesc: "Build high-performance academic roadmaps tracking complete subject modules deterministically.",
      leaderboardTitle: "National Leaderboard",
      leaderboardDesc: "Compete with the brightest minds across Ethiopia. Earn badges, prestige, and climb to the absolute top."
    },
    am: {
      subtitle: "ልዩ ባህሪያት",
      title: "ለአካዳሚክ ስኬት የተገነባ",
      communityTitle: "የማህበረሰብ ውይይት",
      communityDesc: "በመላው ኢትዮጵያ ካሉ በሺዎች የሚቆጠሩ ተማሪዎች ጋር ይገናኙ። ማስታወሻዎችን ያካፍሉ፣ ስለ ጥያቄዎች ይወያዩ እና አብረው ያድጉ።",
      offlineVaultTitle: "ከመስመር ውጭ ማስቀመጫ",
      offlineVaultDesc: "ኢንተርኔት የለም? ምንም ችግር የለም። የትም ቦታ ሆነው ለመማር ሙሉ ትምህርቶችን እና የቪዲዮ ትምህርቶችን ያውርዱ።",
      quizArenaTitle: "የፈተና ሜዳ",
      quizArenaDesc: "ለኢትዮጵያ ብሔራዊ ፈተና ፍጥነት በተዘጋጁ ፈተናዎች ከሰዓት ወይም ከጓደኞችዎ ጋር ይወዳደሩ።",
      pomodoroTitle: "የጥናት ጊዜ ቆጣሪ",
      pomodoroDesc: "ለከፍተኛ ትኩረት አእምሮዎን ያሰልጥኑ። ልዩ የጥናት እና የእረፍት ጊዜያትን በመጠቀም የጥናት ጊዜዎን ያመቻቹ።",
      studyPlannerTitle: "የጥናት እቅድ አውጪ",
      studyPlannerDesc: "ሙሉ የትምህርት ሞጁሎችን በመከታተል ከፍተኛ ጥራት ያላቸውን የጥናት እቅዶችን ይገንቡ።",
      leaderboardTitle: "ብሔራዊ የመሪዎች ሰሌዳ",
      leaderboardDesc: "በመላው ኢትዮጵያ ካሉ ጎበዝ ተማሪዎች ጋር ይወዳደሩ። ባጆችን፣ ክብርን ያግኙ እና ወደ ከፍተኛው ደረጃ ይውጡ።"
    }
  };

  const currentT = t[language] || t.en;

  return (
    <section id="features" className="features-new">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle-new">{currentT.subtitle}</span>
          <h2 className="section-title-new">{currentT.title}</h2>
        </div>
        
        <div className="features-grid-new">
          <FeatureCard 
            icon={Users}
            title={currentT.communityTitle}
            desc={currentT.communityDesc}
            hasBg={true}
          />
          <FeatureCard 
            icon={Download}
            title={currentT.offlineVaultTitle}
            desc={currentT.offlineVaultDesc}
          />
          <FeatureCard 
            icon={Zap}
            title={currentT.quizArenaTitle}
            desc={currentT.quizArenaDesc}
          />
          <FeatureCard 
            icon={Clock}
            title={currentT.pomodoroTitle}
            desc={currentT.pomodoroDesc}
          />
          <FeatureCard 
            icon={Calendar}
            title={currentT.studyPlannerTitle}
            desc={currentT.studyPlannerDesc}
          />
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="feature-card-new leaderboard-card"
          >
            <div className="feature-icon-wrapper">
              <Trophy size={24} />
            </div>
            <h3 className="feature-card-title-new">{currentT.leaderboardTitle}</h3>
            <p className="feature-card-desc-new">{currentT.leaderboardDesc}</p>
            
            <div className="leaderboard-snippet">
              <div className="leaderboard-row header-row">
                <span>Linda C.</span>
                <span>2,420 XP</span>
              </div>
              <div className="leaderboard-row">
                <span>1. Dawit M.</span>
                <span>1,950 XP</span>
              </div>
              <div className="leaderboard-row">
                <span>2. Samuel T.</span>
                <span>1,880 XP</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
