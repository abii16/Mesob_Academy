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
          name: "Offline-First Learning Access",
          detail: "Keep studying without interruptions even when internet connectivity is unstable or completely unavailable.",
          tag: "Offline Vault",
          badge: "Zero Data Required"
        },
        {
          num: "02",
          name: "Exam-Focused Practice Experience",
          detail: "Built around real Ethiopian national exam pacing, past paper archives, and targeted revision workflows.",
          tag: "National Exams",
          badge: "10+ Years Archive"
        },
        {
          num: "03",
          name: "Structured Study Support",
          detail: "Integrated planning, focus intervals, and subject tracking help students stay disciplined and consistent.",
          tag: "Study Discipline",
          badge: "Habit & Focus"
        },
        {
          num: "04",
          name: "Bilingual, Local-First Experience",
          detail: "Crafted specifically for Ethiopian learners with clear Amharic and English interfaces and explanations.",
          tag: "Localized",
          badge: "Amharic & English"
        },
        {
          num: "05",
          name: "Community-Powered Motivation",
          detail: "Study alongside thousands of peers nationwide to discuss tough problems, share notes, and stay accountable.",
          tag: "Student Network",
          badge: "Peer Study Hub"
        },
        {
          num: "06",
          name: "Modern Digital Learning Foundation",
          detail: "Engineered as an enduring, secure educational platform continuously maintained for long-term student success.",
          tag: "Platform",
          badge: "Built for the Future"
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
          name: "ከመስመር ውጭ የሚሰራ የመማሪያ ማህደር",
          detail: "የኢንተርኔት ግንኙነት ሲያንስ ወይም ሙሉ በሙሉ ሲቋረጥ እንኳን ያለምንም መቆራረጥ ጥናትዎን ይቀጥሉ።",
          tag: "ከመስመር ውጭ",
          badge: "ያለ ሞባይል ዳታ"
        },
        {
          num: "02",
          name: "በብሔራዊ ፈተና ላይ ያተኮረ ልምምድ",
          detail: "ለኢትዮጵያ ብሔራዊ ፈተናዎች በተዘጋጁ ያለፉ የፈተና ቡክሌቶች፣ የጊዜ ልምምዶች እና የክለሳ ዘዴዎች የታገዘ።",
          tag: "የፈተና ዝግጅት",
          badge: "የ10+ ዓመታት ማህደር"
        },
        {
          num: "03",
          name: "የተዋቀረ የጥናት ድጋፍና እቅድ",
          detail: "የተገነቡ የትኩረት ሰዓታትና የሞጁል ክትትል ተማሪዎች በዘፈቀደ ሳይሆን በስርዓት እንዲያጠኑ ያግዛሉ።",
          tag: "የጥናት ስርዓት",
          badge: "ትኩረት እና ስነ-ስርዓት"
        },
        {
          num: "04",
          name: "አገርኛና ሁለት ቋንቋዎችን ያማከለ",
          detail: "ለኢትዮጵያ ተማሪዎች ምቹ በሆነ አማርኛ እና እንግሊዝኛ የተዘጋጀ ግልጽ እና ቀላል የመማር ጉዞ።",
          tag: "አገርኛ ፕላትፎርም",
          badge: "አማርኛ እና እንግሊዝኛ"
        },
        {
          num: "05",
          name: "የተማሪዎች የጋራ መረዳዳት ማህበረሰብ",
          detail: "በመላው አገሪቱ ካሉ ተማሪዎች ጋር በመገናኘት አስቸጋሪ ጥያቄዎችን ይፍቱ፣ ማስታወሻዎችን ይጋሩ እና አብረው ያጥኑ።",
          tag: "የተማሪዎች ኔትወርክ",
          badge: "የጋራ ጥናት መድረክ"
        },
        {
          num: "06",
          name: "ዘመናዊና አስተማማኝ የትምህርት መሠረት",
          detail: "እንደ ጊዜያዊ ገጽ ሳይሆን ተማሪዎችን ለዓመታት የሚያገለግል ጠንካራና ዘመናዊ የዲጂታል ትምህርት ፕላትፎርም።",
          tag: "ዘላቂ ፕላትፎርም",
          badge: "ለረጅም ጊዜ የተገነባ"
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
