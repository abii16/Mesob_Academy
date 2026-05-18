import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import '../../styles/sections/Pricing.css';

const Pricing = ({ triggerToast, language }) => {
  const t = {
    en: {
      subtitle: "FLEXIBLE PLANS",
      title: "Transparent pricing for premium results.",
      essential: "ESSENTIAL",
      recommended: "RECOMMENDED",
      focused: "FOCUSED",
      grade910Title: "Grades 9 & 10",
      grade910Subtitle: "Full Access Package",
      grade910Price: "400",
      grade910Currency: "ETB/Two Year",
      grade910F1: "All Grade 9 & 10 Subjects",
      grade910F2: "Interactive Community Hub",
      grade910F3: "Practice Exam Drills",
      fullTitle: "Full High School",
      fullSubtitle: "Grades 9-12 (Natural or Social)",
      fullPrice: "700",
      fullCurrency: "ETB/Four Year",
      fullF1: "Complete 4-Year Subject Vault",
      fullF2: "Community Discussion Access",
      fullF3: "Full National Prep Archive",
      grade1112Title: "Grades 11 & 12",
      grade1112Subtitle: "Natural or Social Stream",
      grade1112Price: "400",
      grade1112Currency: "ETB/Two Year",
      grade1112F1: "All Grade 11 & 12 Subjects",
      grade1112F2: "Exam Simulation",
      grade1112F3: "Peer-to-Peer Study Rooms",
      choosePlan: "Choose Plan",
      goPremium: "Go Premium",
      toastMsg: "Please download our mobile app to subscribe."
    },
    am: {
      subtitle: "ተለዋዋጭ ክፍያዎች",
      title: "ለታላቅ ውጤት ግልጽ ዋጋዎች",
      essential: "መሰረታዊ",
      recommended: "የሚመረጥ",
      focused: "ልዩ ትኩረት",
      grade910Title: "ከ9 - 10ኛ ክፍል",
      grade910Subtitle: "ሙሉ ጥቅል",
      grade910Price: "400",
      grade910Currency: "ብር / ለሁለት አመት",
      grade910F1: "ሁሉም የ9 እና 10ኛ ክፍል ትምህርቶች",
      grade910F2: "የተማሪዎች ማህበረሰብ",
      grade910F3: "የሙከራ ፈተናዎች",
      fullTitle: "ሙሉ ሁለተኛ ደረጃ",
      fullSubtitle: "ከ9-12ኛ ክፍል (ተፈጥሮ ወይም ማህበራዊ)",
      fullPrice: "700",
      fullCurrency: "ብር / ለአራት አመት",
      fullF1: "የሙሉ 4 አመት ትምህርቶች",
      fullF2: "የማህበረሰብ ውይይት ተሳትፎ",
      fullF3: "የብሔራዊ ፈተናዎች ማህደር",
      grade1112Title: "ከ11 - 12ኛ ክፍል",
      grade1112Subtitle: "ተፈጥሮ ወይም ማህበራዊ ሳይንስ",
      grade1112Price: "400",
      grade1112Currency: "ብር / ለሁለት አመት",
      grade1112F1: "ሁሉም የ11 እና 12ኛ ክፍል ትምህርቶች",
      grade1112F2: "የብሔራዊ ፈተና አስመስሎ መስራት",
      grade1112F3: "የጋራ ጥናት ክፍሎች",
      choosePlan: "ጥቅል ይምረጡ",
      goPremium: "ፕሪሚየም ይሁኑ",
      toastMsg: "እባክዎ ለመመዝገብ የሞባይል መተግበሪያችንን ያውርዱ።"
    }
  };

  const currentT = t[language] || t.en;

  return (
    <section id="pricing" className="pricing-new">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle-new">{currentT.subtitle}</span>
          <h2 className="section-title-new">{currentT.title}</h2>
        </div>
        
        <div className="pricing-grid-new">
          {/* Grade 9-10 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pricing-card-new"
          >
            <span className="pricing-tag">{currentT.essential}</span>
            <h3 className="pricing-title-new">{currentT.grade910Title}</h3>
            <p className="pricing-subtitle-new">{currentT.grade910Subtitle}</p>
            <div className="pricing-price-new">
              {currentT.grade910Price} <span className="currency">{currentT.grade910Currency}</span>
            </div>
            <ul className="pricing-features-new">
              <li><CheckCircle2 size={16} /> {currentT.grade910F1}</li>
              <li><CheckCircle2 size={16} /> {currentT.grade910F2}</li>
              <li><CheckCircle2 size={16} /> {currentT.grade910F3}</li>
            </ul>
            <button 
              className="btn btn-secondary pricing-btn-new" 
              onClick={() => {
                triggerToast(currentT.toastMsg);
                const el = document.querySelector('.bottom-cta');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {currentT.choosePlan}
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
            <span className="pricing-tag premium-tag">{currentT.recommended}</span>
            <h3 className="pricing-title-new">{currentT.fullTitle}</h3>
            <p className="pricing-subtitle-new">{currentT.fullSubtitle}</p>
            <div className="pricing-price-new">
              {currentT.fullPrice} <span className="currency">{currentT.fullCurrency}</span>
            </div>
            <ul className="pricing-features-new">
              <li><CheckCircle2 size={16} /> {currentT.fullF1}</li>
              <li><CheckCircle2 size={16} /> {currentT.fullF2}</li>
              <li><CheckCircle2 size={16} /> {currentT.fullF3}</li>
            </ul>
            <button 
              className="btn btn-primary pricing-btn-new" 
              onClick={() => {
                triggerToast(currentT.toastMsg);
                const el = document.querySelector('.bottom-cta');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {currentT.goPremium}
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
            <span className="pricing-tag">{currentT.focused}</span>
            <h3 className="pricing-title-new">{currentT.grade1112Title}</h3>
            <p className="pricing-subtitle-new">{currentT.grade1112Subtitle}</p>
            <div className="pricing-price-new">
              {currentT.grade1112Price} <span className="currency">{currentT.grade1112Currency}</span>
            </div>
            <ul className="pricing-features-new">
              <li><CheckCircle2 size={16} /> {currentT.grade1112F1}</li>
              <li><CheckCircle2 size={16} /> {currentT.grade1112F2}</li>
              <li><CheckCircle2 size={16} /> {currentT.grade1112F3}</li>
            </ul>
            <button 
              className="btn btn-secondary pricing-btn-new" 
              onClick={() => {
                triggerToast(currentT.toastMsg);
                const el = document.querySelector('.bottom-cta');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {currentT.choosePlan}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
