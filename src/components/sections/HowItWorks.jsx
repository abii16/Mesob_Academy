import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Star, Rocket, ArrowRight, ArrowDown } from "lucide-react";
import "../../styles/sections/HowItWorks.css";

const HowItWorks = ({ language }) => {
  const t = {
    en: {
      subtitle: "HOW IT WORKS",
      title: "Getting started is as easy as 1-2-3",
      steps: [
        {
          step: "STEP 01",
          icon: Smartphone,
          title: "Download the App",
          desc: "Available on Android. Create your student account in seconds.",
        },
        {
          step: "STEP 02",
          icon: Star,
          title: "Select Your Grade",
          desc: "Choose Grade 9-10 or 11-12 to access your textbooks, notes, and exam questions.",
        },
        {
          step: "STEP 03",
          icon: Rocket,
          title: "Study & Excel",
          desc: "Practice past exams daily, ask questions in the community, and improve your grades.",
        },
      ],
    },
    am: {
      subtitle: "እንዴት እንደሚሰራ",
      title: "ለመጀመር 1-2-3 ያህል ቀላል ነው",
      steps: [
        {
          step: "ደረጃ 01",
          icon: Smartphone,
          title: "መተግበሪያውን ያውርዱ",
          desc: "በአንድሮይድ ላይ ይገኛል። በጥቂት ሰከንዶች ውስጥ አካውንትዎን ይክፈቱ።",
        },
        {
          step: "ደረጃ 02",
          icon: Star,
          title: "ክፍልዎን ይምረጡ",
          desc: "የክፍልዎን የመማሪያ መጽሐፍት፣ ማጠቃለያዎችና የፈተና ጥያቄዎች ለማግኘት ክፍልዎን ይምረጡ።",
        },
        {
          step: "ደረጃ 03",
          icon: Rocket,
          title: "ውጤትዎን ያሳድጉ",
          desc: "የቀደሙ የፈተና ጥያቄዎችን በየቀኑ ይለማመዱ፣ ጥያቄዎችን በማህበረሰቡ ይጠይቁ እና ውጤትዎን ያሳድጉ።",
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
                className="step-card"
              >
                <div className="step-card-badge-row">
                  <span className="step-badge">{step.step}</span>
                </div>
                <div className="step-icon-wrapper">
                  <step.icon size={26} />
                </div>
                <h3 className="step-title-new">{step.title}</h3>
                <p className="step-desc-new">{step.desc}</p>
              </motion.div>
              
              {i < currentT.steps.length - 1 && (
                <div className="step-arrow-container">
                  <div className="step-arrow-bubble">
                    <ArrowRight className="step-arrow-desktop" size={20} />
                    <ArrowDown className="step-arrow-mobile" size={20} />
                  </div>
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
