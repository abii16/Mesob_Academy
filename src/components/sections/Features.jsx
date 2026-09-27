import React from 'react';
import { Users, Download, Zap, Clock, Calendar, BarChart2 } from 'lucide-react';
import FeatureCard from '../common/FeatureCard';
import '../../styles/sections/Features.css';

const Features = ({ language }) => {
  const t = {
    en: {
      subtitle: "FEATURES",
      title: "Built for Your Academic Success",
      communityTitle: "Student Community",
      communityDesc: "Connect with students across Ethiopia. Share notes, discuss questions, and learn together.",
      offlineVaultTitle: "Offline Study",
      offlineVaultDesc: "No internet? No problem. Download subjects and video lessons to study anytime without mobile data.",
      quizArenaTitle: "Exam Simulator",
      quizArenaDesc: "Practice with timed past papers and full answers to build your speed and exam confidence.",
      pomodoroTitle: "Focus Timer",
      pomodoroDesc: "Stay focused while studying. Use simple study and break intervals to study longer without feeling tired.",
      studyPlannerTitle: "Study Planner",
      studyPlannerDesc: "Create a study schedule, track chapters you completed, and stay ready for exams.",
      analyticsTitle: "Progress Tracking",
      analyticsDesc: "Check your test scores, see chapters you need to review, and track your answering speed."
    },
    am: {
      subtitle: "ዋና ዋና ባህሪያት",
      title: "ለትምህርት ስኬትዎ የተዘጋጀ",
      communityTitle: "የተማሪዎች ማህበረሰብ",
      communityDesc: "በመላው ኢትዮጵያ ካሉ ተማሪዎች ጋር ይገናኙ። ማስታወሻዎችን ያካፍሉ፣ ስለ ጥያቄዎች ይወያዩ እና አብረው ይማሩ።",
      offlineVaultTitle: "ያለ ኢንተርኔት ማጥናት",
      offlineVaultDesc: "ኢንተርኔት የለም? ምንም ችግር የለም። ያለ ሞባይል ዳታ ለማጥናት ትምህርቶችንና ቪዲዮዎችን አስቀድመው ያውርዱ።",
      quizArenaTitle: "የፈተና ልምምድ",
      quizArenaDesc: "የቀደሙ የብሔራዊ ፈተና ጥያቄዎችን በጊዜ ገደብ በመስራት የፈተና ፍጥነትዎን እና ውጤትዎን ያሻሽሉ።",
      pomodoroTitle: "የጥናት ጊዜ ቆጣሪ",
      pomodoroDesc: "በጥናት ወቅት ትኩረትዎ እንዳይበተን የጥናት እና የእረፍት ሰዓትን በመጠቀም በቀላሉ ይማሩ።",
      studyPlannerTitle: "የጥናት እቅድ ማውጫ",
      studyPlannerDesc: "የትምህርት እቅድዎን በቀላሉ ያዘጋጁ፤ ያጠናቀቋቸውን ምዕራፎች ይከታተሉ፤ ለፈተና በደንብ ይዘጋጁ።",
      analyticsTitle: "የውጤት ክትትል",
      analyticsDesc: "የሙከራ ፈተናዎችን ሲጨርሱ ውጤትዎን፣ ደካማ ጎኖችዎን እና የፈተና ፍጥነትዎን በቀላሉ ይከታተሉ።"
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
