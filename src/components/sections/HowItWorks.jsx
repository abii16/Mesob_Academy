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
          icon: Smartphone,
          title: "1. Download the App",
          desc: "Available on Android. Create your student account in seconds.",
        },
        {
          icon: Star,
          title: "2. Select Your Grade",
          desc: "Choose Grade 9-10 or 11-12 to access your textbooks, notes, and exam questions.",
        },
        {
          icon: Rocket,
          title: "3. Study & Excel",
          desc: "Practice past exams daily, ask questions in the community, and improve your grades.",
        },
      ],
    },
    am: {
      subtitle: "እንዴት እንደሚሰራ",
      title: "ለመጀመር 1-2-3 ያህል ቀላል ነው",
      steps: [
        {
          icon: Smartphone,
          title: "1. መተግበሪያውን ያውርዱ",
          desc: "በአንድሮይድ ላይ ይገኛል። በጥቂት ሰከንዶች ውስጥ አካውንትዎን ይክፈቱ።",
        },
        {
          icon: Star,
          title: "2. ክፍልዎን ይምረጡ",
          desc: "የክፍልዎን የመማሪያ መጽሐፍት፣ ማጠቃለያዎችና የፈተና ጥያቄዎች ለማግኘት ክፍልዎን ይምረጡ።",
        },
        {
          icon: Rocket,
          title: "3. ውጤትዎን ያሳድጉ",
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
