import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Star, Rocket, ArrowRight, ArrowDown } from "lucide-react";
import "../../styles/sections/HowItWorks.css";

const HowItWorks = ({ language }) => {
  const t = {
    en: {
      subtitle: "THE MESOB ACADEMY WAY",
      title: "Getting started is as easy as 1-2-3",
      steps: [
        {
          icon: Smartphone,
          title: "1. Download App",
          desc: "Available on Android. Set up your profile in seconds.",
        },
        {
          icon: Star,
          title: "2. Select Your Grade and Stream",
          desc: "Choose Grade 9-10 or 11-12 or 9-12 to unlock specialized curriculum content.",
        },
        {
          icon: Rocket,
          title: "3. Start Dominating",
          desc: "Practice daily, participate in the community, and watch your scores skyrocket.",
        },
      ],
    },
    am: {
      subtitle: "የኢትዮ ዩኒክ መንገድ",
      title: "ለመጀመር 1-2-3 ያህል ቀላል ነው",
      steps: [
        {
          icon: Smartphone,
          title: "1. መተግበሪያውን ያውርዱ",
          desc: "በአንድሮይድ ላይ ይገኛል። በጥቂት ሰከንዶች ውስጥ መገለጫዎን ያዋቅሩ።",
        },
        {
          icon: Star,
          title: "2. ክፍልዎን እና ዘርፍዎን ይምረጡ",
          desc: "የተለየ የትምህርት ይዘትን ለመክፈት ከ9-10፣ 11-12 ወይም 9-12 ይምረጡ።",
        },
        {
          icon: Rocket,
          title: "3. ውጤትዎን ያሳድጉ",
          desc: "በየቀኑ ይለማመዱ፣ በማህበረሰቡ ውስጥ ይሳተፉ እና ውጤትዎ ሲጨምር ይመልከቱ።",
        },
      ],
    },
  };

  const currentT = t[language] || t.en;

  return (
    <section id="how-it-works" className="how-it-works-new">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle-new">{currentT.subtitle}</span>
          <h2 className="section-title-new">{currentT.title}</h2>
        </div>

        <div className="steps-grid">
          {currentT.steps.map((step, i) => (
            <React.Fragment key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="step-item"
              >
                <div className="step-icon-wrapper">
                  <step.icon size={24} />
                </div>
                <h3 className="step-title-new">{step.title}</h3>
                <p className="step-desc-new">{step.desc}</p>
              </motion.div>
              
              {i < currentT.steps.length - 1 && (
                <div className="step-arrow-container">
                  <ArrowRight className="step-arrow-desktop" size={24} />
                  <ArrowDown className="step-arrow-mobile" size={24} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
