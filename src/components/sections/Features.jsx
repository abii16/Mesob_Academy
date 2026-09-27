import React from 'react';
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
      offlineVaultTitle: "Offline Resources",
      offlineVaultDesc: "No internet? No problem. Download entire subjects and video lessons to study anywhere, anytime securely.",
      quizArenaTitle: "Exam Simulator",
      quizArenaDesc: "Practice in a quiet study environment with timed past paper booklets designed for optimal Ethiopian national exam pacing.",
      pomodoroTitle: "Pomodoro Timer",
      pomodoroDesc: "Train your brain for peak focus. Optimize study intervals using custom work-and-break checkpoints.",
      studyPlannerTitle: "Study Planner",
      studyPlannerDesc: "Build high-performance academic roadmaps tracking complete subject modules deterministically.",
      analyticsTitle: "Score Analytics",
      analyticsDesc: "View automated domain-by-domain passing scorecards and private speed pacing metrics upon booklet completion."
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
      analyticsTitle: "የአካዳሚክ ትንታኔ",
      analyticsDesc: "ቡክሌቱን ሲያጠናቅቁ በራስ-ሰር የተሰሩ የየክፍለ-ትምህርቶችን ማለፊያ ውጤቶች እና የግል የፍጥነት ትንታኔዎችን ይመልከቱ።"
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
          <FeatureCard
            icon={BarChart2}
            title={currentT.analyticsTitle}
            desc={currentT.analyticsDesc}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
