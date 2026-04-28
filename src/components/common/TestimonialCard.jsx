import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users } from 'lucide-react';
import '../../styles/sections/Reviews.css';

const TestimonialCard = ({ stars, text, name, role, avatar }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="testimonial-card"
  >
    <div className="testimonial-stars">
      {Array.from({ length: stars }).map((_, i) => (
        <Star key={i} size={16} fill="#abc9ed" stroke="#abc9ed" />
      ))}
    </div>
    <p className="testimonial-text">"{text}"</p>
    <div className="testimonial-user">
      <div className="testimonial-avatar">
        {avatar ? <img src={avatar} alt={name} /> : <Users size={20} />}
      </div>
      <div className="testimonial-info">
        <h4 className="testimonial-name">{name}</h4>
        <span className="testimonial-role">{role}</span>
      </div>
    </div>
  </motion.div>
);

export default TestimonialCard;
