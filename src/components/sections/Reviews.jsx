import React from 'react';
import TestimonialCard from '../TestimonialCard';
import '../../styles/Reviews.css';

const Reviews = ({ language }) => {
  const t = {
    en: {
      subtitle: "TESTIMONIALS",
      title: "Student Success Stories",
      r1: "Ethio Unique Academy helped me jump from a 320 to a 540 on my final exams. The AI tutor explained Physics like no one else.",
      r1Role: "Grade 12 Student",
      r2: "The Offline storage is a lifesaver in my hometown where data is weak. I can study without any interruptions.",
      r2Role: "Grade 10 Student",
      r3: "The leaderboard keeps me motivated. I love seeing my name rise as I solve more problems daily.",
      r3Role: "Grade 11 Student"
    },
    am: {
      subtitle: "የተማሪዎች ምስክርነት",
      title: "የተማሪዎች ስኬት ታሪኮች",
      r1: "Ethio Unique Academy helped me jump from a 320 to a 540 on my final exams. The AI tutor explained Physics like no one else.",
      r1Role: "Grade 12 Student",
      r2: "The Offline storage is a lifesaver in my hometown where data is weak. I can study without any interruptions.",
      r2Role: "Grade 10 Student",
      r3: "The leaderboard keeps me motivated. I love seeing my name rise as I solve more problems daily.",
      r3Role: "Grade 11 Student"
    }
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
          />
          <TestimonialCard 
            stars={5}
            text={currentT.r2}
            name="Yared M."
            role={currentT.r2Role}
          />
          <TestimonialCard 
            stars={5}
            text={currentT.r3}
            name="Rahiel H."
            role={currentT.r3Role}
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
