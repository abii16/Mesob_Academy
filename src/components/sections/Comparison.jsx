import React from "react";
import { motion } from "framer-motion";
import { 
  WifiOff, 
  Target, 
  Calendar, 
  Globe, 
  Users, 
  Sparkles, 
  ArrowRight, 
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
      desc: "Mesob APP is built to help students learn with clarity, consistency, and confidence.",
      featureCol: "What Students Get",
      detailCol: "Why It Matters",
      features: [
        {
          name: "Offline-first learning access",
          detail:
            "Students can keep studying even when internet access is limited or unstable.",
        },
        {
          name: "Exam-focused practice experience",
          detail:
            "Learning flows are designed to support revision, self-testing, and stronger exam readiness.",
        },
        {
          name: "Structured study support",
          detail:
            "Built-in planning and focus tools help students stay consistent instead of studying randomly.",
        },
        {
          name: "Bilingual, local-first experience",
          detail:
            "The platform is designed for Ethiopian students with a clearer, more familiar learning journey.",
        },
        {
          name: "Community-powered motivation",
          detail:
            "Students can feel more supported, connected, and accountable throughout their learning process.",
        },
        {
          name: "Modern digital learning foundation",
          detail:
            "Mesob APP is being shaped as a serious long-term product, not just a simple content page.",
        },
      ],
    },
    am: {
      subtitle: "ለምን Mesob APP",
      title: "ለእውነተኛ የጥናት ፍላጎት የተገነባ",
      desc: "Mesob APP ተማሪዎች በግልጽነት፣ በቀጣይነት እና በመተማመን እንዲማሩ እንዲያግዝ ተገንብቷል።",
      featureCol: "ተማሪዎች የሚያገኙት",
      detailCol: "ለምን አስፈላጊ ነው",
      features: [
        {
          name: "ከመስመር ውጭ የሚሰራ የመማር መዳረሻ",
          detail: "የኢንተርኔት ግንኙነት ሲያንስ ወይም ሲቋረጥ እንኳን ተማሪዎች መማራቸውን ሊቀጥሉ ይችላሉ።",
        },
        {
          name: "በፈተና ላይ ያተኮረ የልምምድ ልምድ",
          detail: "የመማር ሂደቶቹ ለክለሳ፣ ለራስ-ፈተና እና ለተሻለ የፈተና ዝግጅት የተዘጋጁ ናቸው።",
        },
        {
          name: "የተዋቀረ የጥናት ድጋፍ",
          detail:
            "የተገነቡ የእቅድ እና የትኩረት መሳሪያዎች ተማሪዎች በዘፈቀደ ሳይሆን በቀጣይነት እንዲያጠኑ ይረዳሉ።",
        },
        {
          name: "ሁለት ቋንቋ እና አካባቢን ያማከለ ልምድ",
          detail: "ፕላትፎርሙ ለኢትዮጵያ ተማሪዎች የበለጠ ግልጽ እና የተለመደ የመማር ጉዞ እንዲሰጥ ተዘጋጅቷል።",
        },
        {
          name: "በማህበረሰብ የሚነቃቃ መነሳሳት",
          detail:
            "ተማሪዎች በመማር ሂደታቸው ውስጥ የበለጠ ድጋፍ፣ ግንኙነት እና ተጠያቂነት እንዲሰማቸው ያግዛል።",
        },
        {
          name: "ዘመናዊ የዲጂታል ትምህርት መሠረት",
          detail:
            "Mesob APP እንደ ቀላል የይዘት ገጽ ሳይሆን እንደ ከባድ የረጅም ጊዜ ምርት እየተገነባ ነው።",
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

        <div className="comparison-merged-list">
          {currentT.features.map((feature, idx) => {
            const IconComponent = featureIcons[idx % featureIcons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="comparison-card"
              >
                <div className="comparison-side-get">
                  <div className="comparison-tag-get">
                    <CheckCircle2 size={13} />
                    <span>{currentT.featureCol}</span>
                  </div>
                  <div className="comparison-feature-header">
                    <div className="comparison-icon-container">
                      <IconComponent size={20} />
                    </div>
                    <h3 className="comparison-feature-title">{feature.name}</h3>
                  </div>
                </div>

                <div className="comparison-connector">
                  <ArrowRight size={16} />
                </div>

                <div className="comparison-side-matter">
                  <div className="comparison-tag-matter">
                    <Sparkles size={13} />
                    <span>{currentT.detailCol}</span>
                  </div>
                  <p className="comparison-detail-text">{feature.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Comparison;
