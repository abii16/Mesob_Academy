import React from "react";
import TestimonialCard from "../common/TestimonialCard";
import "../../styles/sections/Reviews.css";

// Authentic Student Avatar Badges
const StudentAvatar = ({ initials, gradient }) => (
  <div 
    style={{
      width: '42px',
      height: '42px',
      borderRadius: '50%',
      background: gradient,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '700',
      fontSize: '14px',
      color: '#ffffff',
      letterSpacing: '0.04em',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
      flexShrink: 0
    }}
  >
    {initials}
  </div>
);

const Reviews = ({ language }) => {
  const t = {
    en: {
      subtitle: "TESTIMONIALS",
      title: "Student Success Stories",
      r1: "Mesob Academy helped me jump from a 280 to a 540 on my entrance national exam. The detailed notes and community chat explained Physics like no one else.",
      r1Role: "Grade 12 Student",
      r2: "The Offline storage is a lifesaver in my hometown where data is weak. I can study without any interruptions.",
      r2Role: "Grade 10 Student",
      r3: "The Exam Simulator and timed past papers gave me the confidence I needed. Practicing with real national exam questions made the actual test feel familiar.",
      r3Role: "Grade 11 Student",
    },
    am: {
      subtitle: "የተማሪዎች ምስክርነት",
      title: "የተማሪዎች ስኬት ታሪኮች",
      r1: "መሶብ አካዳሚ ከብሔራዊ የመግቢያ ፈተናዬ ውጤት ከ 280 ወደ 540 እንድወጣ ረድቶኛል። ዝርዝር ማስታወሻዎቹ እና የማህበረሰቡ ውይይት ፊዚክስን በሚገባ ያብራራሉ።",
      r1Role: "የ12ኛ ክፍል ተማሪ",
      r2: "የከመስመር ውጭ (Offline) ማከማቻው በከተማዬ ውስጥ የኔትወርክ ዳታ ሲዳከም ትልቅ እፎይታ ነው። ያለ ምንም መቆራረጥ ማጥናት እችላለሁ።",
      r2Role: "የ10ኛ ክፍል ተማሪ",
      r3: "የፈተና ሲሙሌተሩ እና የጊዜ ልምምዱ ከፍተኛ በራስ መተማመን ፈጥሮልኛል። ባለፉት የብሔራዊ ፈተና ጥያቄዎች ደጋግሜ መለማመዴ ፈተናውን ቀላል እንዲሆንልኝ አድርጎታል።",
      r3Role: "የ11ኛ ክፍል ተማሪ",
    },
  };

  const currentT = t[language] || t.en;

  return (
    <section id="reviews" className="testimonials-new">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle-new">{currentT.subtitle}</span>
          <h2 className="section-title-new">{currentT.title}</h2>
        </div>

        <div className="testimonials-grid">
          <TestimonialCard
            stars={5}
            text={currentT.r1}
            name="Bekeleam G."
            role={currentT.r1Role}
            avatar={<StudentAvatar initials="BG" gradient="linear-gradient(135deg, #10b981, #047857)" />}
          />
          <TestimonialCard
            stars={5}
            text={currentT.r2}
            name="Yared M."
            role={currentT.r2Role}
            avatar={<StudentAvatar initials="YM" gradient="linear-gradient(135deg, #3b82f6, #1d4ed8)" />}
          />
          <TestimonialCard
            stars={5}
            text={currentT.r3}
            name="Rahiel H."
            role={currentT.r3Role}
            avatar={<StudentAvatar initials="RH" gradient="linear-gradient(135deg, #f59e0b, #b45309)" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
