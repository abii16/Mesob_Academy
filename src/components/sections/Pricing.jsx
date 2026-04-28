import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Pricing = ({ triggerToast }) => {
  return (
    <section id="pricing" className="pricing-new">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle-new">FLEXIBLE PLANS</span>
          <h2 className="section-title-new">Transparent pricing for premium results.</h2>
        </div>
        
        <div className="pricing-grid-new">
          {/* Grade 9-10 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pricing-card-new"
          >
            <span className="pricing-tag">ESSENTIAL</span>
            <h3 className="pricing-title-new">Grades 9 & 10</h3>
            <p className="pricing-subtitle-new">Full Access Package</p>
            <div className="pricing-price-new">
              350 <span className="currency">ETB/Two Year</span>
            </div>
            <ul className="pricing-features-new">
              <li><CheckCircle2 size={16} /> All Grade 9 & 10 Subjects</li>
              <li><CheckCircle2 size={16} /> AI Academic Companion</li>
              <li><CheckCircle2 size={16} /> Practice Exam Drills</li>
            </ul>
            <button 
              className="btn btn-secondary pricing-btn-new" 
              onClick={() => {
                triggerToast('Please download our mobile app to subscribe.');
                const el = document.querySelector('.bottom-cta');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Choose Plan
            </button>
          </motion.div>

          {/* Full High School */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="pricing-card-new highlight-card"
          >
            <span className="pricing-tag premium-tag">RECOMMENDED</span>
            <h3 className="pricing-title-new">Full High School</h3>
            <p className="pricing-subtitle-new">Grades 9-12 (Natural or Social)</p>
            <div className="pricing-price-new">
              600 <span className="currency">ETB/Four Year</span>
            </div>
            <ul className="pricing-features-new">
              <li><CheckCircle2 size={16} /> Complete 4-Year Subject Vault</li>
              <li><CheckCircle2 size={16} /> AI Query Metrics</li>
              <li><CheckCircle2 size={16} /> Full National Prep Archive</li>
            </ul>
            <button 
              className="btn btn-primary pricing-btn-new" 
              onClick={() => {
                triggerToast('Please download our mobile app to subscribe.');
                const el = document.querySelector('.bottom-cta');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Go Premium
            </button>
          </motion.div>

          {/* Grade 11-12 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="pricing-card-new"
          >
            <span className="pricing-tag">FOCUSED</span>
            <h3 className="pricing-title-new">Grades 11 & 12</h3>
            <p className="pricing-subtitle-new">Natural or Social Stream</p>
            <div className="pricing-price-new">
              350 <span className="currency">ETB/Two Year</span>
            </div>
            <ul className="pricing-features-new">
              <li><CheckCircle2 size={16} /> All Grade 11 & 12 Subjects</li>
              <li><CheckCircle2 size={16} /> Exam Simulation</li>
              <li><CheckCircle2 size={16} /> Adaptive Practice Queries</li>
            </ul>
            <button 
              className="btn btn-secondary pricing-btn-new" 
              onClick={() => {
                triggerToast('Please download our mobile app to subscribe.');
                const el = document.querySelector('.bottom-cta');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Choose Plan
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
