import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Star, Rocket } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works-new">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle-new">THE ETHIOUNIQUE WAY</span>
          <h2 className="section-title-new">Getting started is as easy as 1-2-3</h2>
        </div>
        
        <div className="steps-grid">
          {[
            { icon: Smartphone, title: '1. Download App', desc: 'Available on Android. Set up your profile in seconds.' },
            { icon: Star, title: '2. Select Your Grade and Stream', desc: 'Choose Grade 9-10 or 11-12 or 9-12  to unlock specialized curriculum content.' },
            { icon: Rocket, title: '3. Start Dominating', desc: 'Practice daily, ask AI for help, and watch your scores skyrocket.' }
          ].map((step, i) => (
            <motion.div 
              key={i}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
