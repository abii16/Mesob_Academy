import React from 'react';
import { motion } from 'framer-motion';
import { Users, Download, Zap, Clock, Calendar, BarChart2 } from 'lucide-react';
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
      quizArenaTitle: "Exam Simulator",
      quizArenaDesc: "Practice in a quiet study environment with timed past paper booklets designed for optimal Ethiopian national exam pacing.",
      pomodoroTitle: "Pomodoro Timer",
      pomodoroDesc: "Train your brain for peak focus. Optimize study intervals using custom work-and-break checkpoints.",
      studyPlannerTitle: "Study Planner",
      studyPlannerDesc: "Build high-performance academic roadmaps tracking complete subject modules deterministically.",
      leaderboardTitle: "Score Analytics",
      leaderboardDesc: "View automated domain-by-domain passing scorecards and private speed pacing metrics upon booklet completion."
    },
    am: {
      subtitle: "ልዩ ባህሪያት",
      title: "ለአካዳሚክ ስኬት የተገነባ",
      communityTitle: "የማህበረሰብ ውይይት",
      communityDesc: "በመላው ኢትዮጵያ ካሉ በሺዎች የሚቆጠሩ ተማሪዎች ጋር ይገናኙ። ማስታወሻዎችን ያካፍሉ፣ ስለ ጥያቄዎች ይወያዩ እና አብረው ያድጉ።",
      offlineVaultTitle: "ከመስመር ውጭ ማስቀመጫ",
      offlineVaultDesc: "አይ ላንክስ? ምንም ችግር የለም። የትም ቦታ ሆነው ለመማር ሙሉ ትምህርቶችን እና የቪዲዮ ትምህርቶችን ያውርዱ።",
      quizArenaTitle: "የፈተና ሲሙሌተር",
      quizArenaDesc: "ለኢትዮጵያ ብሔራዊ ፈተና በተዘጋጁ ያለፉ የፈተና ቡክሌቶች ፀጥ ባለ የጥናት ቦታ ይለማመዱ።",
      pomodoroTitle: "የጥናት ጊዜ ቆጣሪ",
      pomodoroDesc: "ለከፍተኛ ትኩረት አእምሮዎን ያሰልጥኑ። ልዩ የጥናት እና የእረፍት ጊዜያትን በመጠቀም የጥናት ጊዜዎን ያመቻቹ።",
      studyPlannerTitle: "የጥናት እቅድ አውጪ",
      studyPlannerDesc: "ሙሉ የትምህርት ሞጁሎችን በመከታተል ከፍተኛ ጥራት ያላቸውን የጥናት እቅዶችን ይገንቡ።",
      leaderboardTitle: "የአካዳሚክ ትንታኔ",
      leaderboardDesc: "ቡክሌቱን ሲያጠናቅቁ በራስ-ሰር የተሰሩ የየክፍለ-ትምህርቶችን ማለፊያ ውጤቶች እና የግል የፍጥነት ትንታኔዎችን ይመልከቱ።"
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
              <BarChart2 size={24} />
            </div>
            <h3 className="feature-card-title-new">{currentT.leaderboardTitle}</h3>
            <p className="feature-card-desc-new">{currentT.leaderboardDesc}</p>

            <div className="leaderboard-snippet">
              <div className="leaderboard-row">
                <span>Chemistry </span>
                <span>88% Pass</span>
              </div>
              <div className="leaderboard-row">
                <span>Physics</span>
                <span>90% Pass</span>
              </div>
              <div className="leaderboard-row">
                <span>History</span>
                <span>85% Pass</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
