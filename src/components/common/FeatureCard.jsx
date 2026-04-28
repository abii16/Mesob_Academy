import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/sections/Features.css';

const FeatureCard = ({ icon: Icon, title, desc, hasBg = false }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`feature-card-new ${hasBg ? 'feature-card-has-bg' : ''}`}
  >
    <div className="feature-icon-wrapper">
      <Icon size={24} />
    </div>
    <h3 className="feature-card-title-new">{title}</h3>
    <p className="feature-card-desc-new">{desc}</p>
    <a href="#features" className="feature-link">Learn more →</a>
    {hasBg && <div className="feature-bg-effect"></div>}
  </motion.div>
);

export default FeatureCard;
