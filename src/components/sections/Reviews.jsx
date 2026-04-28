import React from 'react';
import TestimonialCard from '../TestimonialCard';

const Reviews = () => {
  return (
    <section id="reviews" className="testimonials-new">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle-new">TESTIMONIALS</span>
          <h2 className="section-title-new">Student Success Stories</h2>
        </div>
        
        <div className="testimonials-grid">
          <TestimonialCard 
            stars={5}
            text="Ethio Unique Academy helped me jump from a 320 to a 540 on my final exams. The AI tutor explained Physics like no one else."
            name="Bekeleam G."
            role="Grade 12 Student"
          />
          <TestimonialCard 
            stars={5}
            text="The Offline storage is a lifesaver in my hometown where data is weak. I can study without any interruptions."
            name="Yared M."
            role="Grade 10 Student"
          />
          <TestimonialCard 
            stars={5}
            text="The leaderboard keeps me motivated. I love seeing my name rise as I solve more problems daily."
            name="Rahiel H."
            role="Grade 11 Student"
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
