import React from "react";
import TestimonialCard from "../common/TestimonialCard";
import "../../styles/sections/Reviews.css";

// Styled SVG Student Avatars for Premium UI/UX
const MaleAvatar1 = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '50%' }}>
    <circle cx="20" cy="20" r="20" fill="url(#gradMale1)" />
    <mask id="maskMale1" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
      <circle cx="20" cy="20" r="20" fill="white" />
    </mask>
    <g mask="url(#maskMale1)">
      {/* Head */}
      <circle cx="20" cy="17" r="5.5" fill="#fbd38d" />
      {/* Hair */}
      <path d="M14 16C14 12 17 11 20 11C23 11 26 12 26 16C26 17 25 17 25 16C24 15 22 14 20 14C18 14 16 15 15 16C15 17 14 17 14 16Z" fill="#1a202c" />
      {/* Shoulders / Shirt */}
      <path d="M8 32C8 26 13 25 20 25C27 25 32 26 32 32V40H8V32Z" fill="#2b6cb0" />
      {/* Collar */}
      <path d="M17 25L20 28L23 25" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
    </g>
    <defs>
      <linearGradient id="gradMale1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#63b3ed" />
        <stop offset="1" stopColor="#3182ce" />
      </linearGradient>
    </defs>
  </svg>
);

const MaleAvatar2 = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '50%' }}>
    <circle cx="20" cy="20" r="20" fill="url(#gradMale2)" />
    <mask id="maskMale2" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
      <circle cx="20" cy="20" r="20" fill="white" />
    </mask>
    <g mask="url(#maskMale2)">
      {/* Head */}
      <circle cx="20" cy="17" r="5.5" fill="#fbc280" />
      {/* Hair / Cap */}
      <path d="M13 14C13 10 16 9 20 9C24 9 27 10 27 14C27 14.5 25 13 20 13C15 13 13 14.5 13 14Z" fill="#2d3748" />
      {/* Shoulders */}
      <path d="M8 32C8 26 13 25 20 25C27 25 32 26 32 32V40H8V32Z" fill="#276749" />
      <path d="M17 25L20 28L23 25" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
    </g>
    <defs>
      <linearGradient id="gradMale2" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#48bb78" />
        <stop offset="1" stopColor="#2f855a" />
      </linearGradient>
    </defs>
  </svg>
);

const FemaleAvatar = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '50%' }}>
    <circle cx="20" cy="20" r="20" fill="url(#gradFemale)" />
    <mask id="maskFemale" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
      <circle cx="20" cy="20" r="20" fill="white" />
    </mask>
    <g mask="url(#maskFemale)">
      {/* Hair back */}
      <path d="M12 16C12 11 15 10 20 10C25 10 28 11 28 16V25C28 25 25 24 20 24C15 24 12 25 12 25V16Z" fill="#1a202c" />
      {/* Head */}
      <circle cx="20" cy="17" r="5.5" fill="#fbd38d" />
      {/* Hair front/bangs */}
      <path d="M14 15C15 13 17 12 20 12C23 12 25 13 26 15" stroke="#1a202c" strokeWidth="1.5" />
      {/* Shoulders */}
      <path d="M8 32C8 26 13 25 20 25C27 25 32 26 32 32V40H8V32Z" fill="#9b2c2c" />
      <path d="M17 25L20 28L23 25" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
    </g>
    <defs>
      <linearGradient id="gradFemale" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#f687b3" />
        <stop offset="1" stopColor="#d53f8c" />
      </linearGradient>
    </defs>
  </svg>
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
      r3: "The leaderboard keeps me motivated. I love seeing my name rise as I solve more problems daily.",
      r3Role: "Grade 11 Student",
    },
    am: {
      subtitle: "የተማሪዎች ምስክርነት",
      title: "የተማሪዎች ስኬት ታሪኮች",
      r1: "ኢትዮ ዩኒክ አካዳሚ ከብሔራዊ የመግቢያ ፈተናዬ ውጤት ከ 280 ወደ 540 እንድወጣ ረድቶኛል። ዝርዝር ማስታወሻዎቹ እና የማህበረሰቡ ውይይት ፊዚክስን በሚገባ ያብራራሉ።",
      r1Role: "የ12ኛ ክፍል ተማሪ",
      r2: "የከመስመር ውጭ (Offline) ማከማቻው በከተማዬ ውስጥ የኔትወርክ ዳታ ሲዳከም ትልቅ እፎይታ ነው። ያለ ምንም መቆራረጥ ማጥናት እችላለሁ።",
      r2Role: "የ10ኛ ክፍል ተማሪ",
      r3: "የደረጃ ሰንጠረዡ (Leaderboard) ሁል ጊዜ ተነሳሽነት ይሰጠኛል። በየቀኑ ብዙ ጥያቄዎችን በምፈታበት ጊዜ ስሜ ወደ ላይ ሲወጣ ማየት ደስ ይለኛል።",
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
            stars={4.8}
            text={currentT.r1}
            name="Bekeleam G."
            role={currentT.r1Role}
            avatar={<MaleAvatar1 />}
          />
          <TestimonialCard
            stars={4.8}
            text={currentT.r2}
            name="Yared M."
            role={currentT.r2Role}
            avatar={<MaleAvatar2 />}
          />
          <TestimonialCard
            stars={4.8}
            text={currentT.r3}
            name="Rahiel H."
            role={currentT.r3Role}
            avatar={<FemaleAvatar />}
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
