import React from "react";
import { motion } from "framer-motion";
import { 
  WifiOff, 
  Target, 
  Calendar, 
  Globe, 
  Users, 
  Sparkles, 
  CheckCircle2 
} from "lucide-react";
import "../../styles/sections/Comparison.css";

const featureIcons = [
  WifiOff,
  Target,
  Calendar,
  Globe,
  Users,
  Sparkles
];

const Comparison = ({ language }) => {
  const t = {
    en: {
      subtitle: "WHY MESOB APP",
      title: "Built Around Real Study Needs",
      desc: "Designed from the ground up for Ethiopian students — with clarity, consistency, and lasting value.",
      features: [
        {
          num: "01",
          name: "Offline Study Mode",
          detail: "Study your textbooks and video lessons without interruptions, even when you have no internet connection.",
          tag: "Offline Study",
          badge: "Zero Data Required"
        },
        {
          num: "02",
          name: "National Exam Practice",
          detail: "Practice with 10+ years of past national exams, complete step-by-step solutions, and timed practice tests.",
          tag: "National Exams",
          badge: "10+ Years of Past Exams"
        },
        {
          num: "03",
          name: "Study Timers & Daily Planning",
          detail: "Built-in study timers, chapter checklists, and reminders to help you finish every subject on schedule.",
          tag: "Daily Planning",
          badge: "Stay Consistent"
        },
        {
          num: "04",
          name: "4 Ethiopian Languages",
          detail: "Learn easily in the language you are most comfortable with: Amharic, English, Afaan Oromoo, or Tigrigna.",
          tag: "Languages",
          badge: "Amharic • English • Afaan Oromoo • Tigrigna"
        },
        {
          num: "05",
          name: "Student Study Community",
          detail: "Connect with high school students across Ethiopia to ask difficult questions, share notes, and learn together.",
          tag: "Community",
          badge: "Helpful Student Group"
        },
        {
          num: "06",
          name: "New Curriculum Aligned",
          detail: "Constantly updated with the latest Ethiopian textbooks and syllabus so you always study the right materials.",
          tag: "Curriculum",
          badge: "Always Up-to-Date"
        },
      ],
    },
    am: {
      subtitle: "ለምን Mesob APP",
      title: "ለእውነተኛ የጥናት ፍላጎት የተገነባ",
      desc: "ለኢትዮጵያ ተማሪዎች ከስረ-መሠረቱ የታሰበ — በግልጽነት፣ በቀጣይነት እና ዘላቂ ፋይዳ ባለው መልኩ የቀረበ።",
      features: [
        {
          num: "01",
          name: "ያለ ኢንተርኔት ማጥናት",
          detail: "የኢንተርኔት ግንኙነት ሲቋረጥ እንኳን ያለምንም መቆራረጥ ትምህርቶችዎን በቀላሉ ያጥኑ።",
          tag: "ከመስመር ውጭ",
          badge: "ያለ ሞባይል ዳታ"
        },
        {
          num: "02",
          name: "የብሔራዊ ፈተና ልምምድ",
          detail: "የ10+ ዓመታት ያለፉ የብሔራዊ ፈተና ጥያቄዎችን ከመልሶቻቸው ጋር በመለማመድ ለፈተና በደንብ ይዘጋጁ።",
          tag: "የፈተና ዝግጅት",
          badge: "የ10+ ዓመታት ያለፉ ፈተናዎች"
        },
        {
          num: "03",
          name: "የጥናት ሰዓትና የእቅድ ማውጫ",
          detail: "የትኩረት ጊዜ ቆጣሪ እና የምዕራፍ ማስታወሻዎች ተማሪዎች ትምህርታቸውን በየቀኑ በስርዓት እንዲያጠኑ ያግዛሉ።",
          tag: "የጥናት ስርዓት",
          badge: "ቀጣይነት ያለው ጥናት"
        },
        {
          num: "04",
          name: "በ4 አገርኛ ቋንቋዎች የቀረበ",
          detail: "ለተማሪዎች ምቹ በሆነ አማርኛ፣ እንግሊዝኛ፣ አፋን ኦሮሞ እና ትግርኛ ቋንቋዎች በቀላሉ ተረድተው ይማሩ።",
          tag: "ባለብዙ ቋንቋ",
          badge: "አማርኛ • እንግሊዝኛ • አፋን ኦሮሞ • ትግርኛ"
        },
        {
          num: "05",
          name: "የተማሪዎች የውይይት ማህበረሰብ",
          detail: "በመላው አገሪቱ ካሉ ተማሪዎች ጋር በመገናኘት አስቸጋሪ ጥያቄዎችን ይጠይቁ፣ ማስታወሻዎችን ይጋሩ እና አብረው ይማሩ።",
          tag: "ማህበረሰብ",
          badge: "የተማሪዎች ህብረት"
        },
        {
          num: "06",
          name: "በአዲሱ ስርዓተ ትምህርት የተዘጋጀ",
          detail: "በአዲሱ የኢትዮጵያ ስርዓተ ትምህርት መሰረት በየጊዜው የሚታደስ እና ትክክለኛውን የትምህርት ይዘት የያዘ።",
          tag: "ስርዓተ ትምህርት",
          badge: "ሁልጊዜ ወቅታዊ"
        },
      ],
    },
  };

  const currentT = t[language] || t.en;

  return (
    <section id="why-mesob" className="comparison-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle-new">{currentT.subtitle}</span>
          <h2 className="section-title-new">{currentT.title}</h2>
          <p className="comparison-desc">{currentT.desc}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="why-master-card glass"
        >
          <div className="why-master-grid">
            {currentT.features.map((feature, idx) => {
              const IconComponent = featureIcons[idx % featureIcons.length];
              return (
                <div key={idx} className="why-cell">
                  <div className="why-cell-top">
                    <div className="why-cell-icon">
                      <IconComponent size={20} />
                    </div>
                    <div className="why-cell-meta">
                      <span className="why-cell-num">{feature.num}</span>
                      <span className="why-cell-tag">{feature.tag}</span>
                    </div>
                  </div>

                  <h3 className="why-cell-title">{feature.name}</h3>
                  <p className="why-cell-desc">{feature.detail}</p>

                  <div className="why-cell-footer">
                    <span className="why-cell-badge">
                      <CheckCircle2 size={13} />
                      {feature.badge}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
