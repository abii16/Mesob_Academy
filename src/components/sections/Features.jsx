import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Download, Zap, Clock, Calendar, Trophy } from 'lucide-react';
import FeatureCard from '../FeatureCard';

const Features = () => {
  return (
    <section id="features" className="features-new">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle-new">PREMIUM FEATURES</span>
          <h2 className="section-title-new">Built for Academic Success</h2>
        </div>
        
        <div className="features-grid-new">
          <FeatureCard 
            icon={Brain}
            title="AI Tutor"
            desc="24/7 personalized assistance for Physics, Chemistry, and Math. Get step-by-step explanations for complex problems instantly."
            hasBg={true}
          />
          <FeatureCard 
            icon={Download}
            title="Offline Vault"
            desc="No internet? No problem. Download entire subjects and video lessons to study anywhere, anytime securely."
          />
          <FeatureCard 
            icon={Zap}
            title="Quiz Arena"
            desc="Battle against time or peers in timed quizzes designed for optimal Ethiopian national exam pacing."
          />
          <FeatureCard 
            icon={Clock}
            title="Pomodoro Timer"
            desc="Train your brain for peak focus. Optimize study intervals using custom work-and-break checkpoints."
          />
          <FeatureCard 
            icon={Calendar}
            title="Study Planner"
            desc="Build high-performance academic roadmaps tracking complete subject modules deterministically."
          />
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="feature-card-new leaderboard-card"
          >
            <div className="feature-icon-wrapper">
              <Trophy size={24} />
            </div>
            <h3 className="feature-card-title-new">National Leaderboard</h3>
            <p className="feature-card-desc-new">Compete with the brightest minds across Ethiopia. Earn badges, prestige, and climb to the absolute top.</p>
            
            <div className="leaderboard-snippet">
              <div className="leaderboard-row header-row">
                <span>Linda C.</span>
                <span>2,420 XP</span>
              </div>
              <div className="leaderboard-row">
                <span>1. Dawit M.</span>
                <span>1,950 XP</span>
              </div>
              <div className="leaderboard-row">
                <span>2. Samuel T.</span>
                <span>1,880 XP</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
