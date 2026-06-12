import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import '../../styles/sections/Reviews.css';

const StarIcon = ({ fill, stroke, strokeWidth = "1.5" }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" style={{ display: 'block' }}>
    <path
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const decimal = rating - fullStars;
  const uniqueId = React.useId().replace(/:/g, ''); // Sanitized React ID

  return (
    <div className="testimonial-stars" style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
      {Array.from({ length: 5 }).map((_, index) => {
        if (index < fullStars) {
          return (
            <StarIcon key={index} fill="#abc9ed" stroke="#abc9ed" />
          );
        } else if (index === fullStars && decimal > 0) {
          const gradId = `star-grad-${uniqueId}-${index}`;
          return (
            <span key={index} style={{ display: 'inline-flex', position: 'relative', width: 16, height: 16 }}>
              <span style={{ position: 'absolute', top: 0, left: 0 }}>
                <StarIcon fill="rgba(255, 255, 255, 0.05)" stroke="rgba(171, 201, 237, 0.3)" />
              </span>
              <svg width="16" height="16" viewBox="0 0 24 24" style={{ position: 'absolute', top: 0, left: 0 }}>
                <defs>
                  <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
                    <stop offset={`${decimal * 100}%`} stopColor="#abc9ed" />
                    <stop offset={`${decimal * 100}%`} stopColor="transparent" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  fill={`url(#${gradId})`}
                  stroke="#abc9ed"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          );
        } else {
          return (
            <StarIcon key={index} fill="rgba(255, 255, 255, 0.05)" stroke="rgba(171, 201, 237, 0.3)" />
          );
        }
      })}
    </div>
  );
};

const TestimonialCard = ({ stars, text, name, role, avatar }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="testimonial-card"
  >
    <RatingStars rating={stars} />
    <p className="testimonial-text">"{text}"</p>
    <div className="testimonial-user">
      <div className="testimonial-avatar">
        {avatar ? (typeof avatar === 'string' ? <img src={avatar} alt={name} /> : avatar) : <Users size={20} />}
      </div>
      <div className="testimonial-info">
        <h4 className="testimonial-name">{name}</h4>
        <span className="testimonial-role">{role}</span>
      </div>
    </div>
  </motion.div>
);

export default TestimonialCard;
