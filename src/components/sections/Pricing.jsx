import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Sparkles, Layers, BookOpen } from 'lucide-react';
import '../../styles/sections/Pricing.css';

const Pricing = ({ triggerToast, language }) => {
  const [activeTab, setActiveTab] = useState('standard'); // 'standard' or 'calculator'

  // Calculator states
  const [gradeBand, setGradeBand] = useState('9-10'); // '9-10', '11-12', '9-12'
  const [stream, setStream] = useState('natural'); // 'natural', 'social'

  const t = {
    en: {
      subtitle: "FLEXIBLE PLANS",
      title: "Transparent pricing for premium results.",
      essential: "ESSENTIAL",
      recommended: "RECOMMENDED",
      focused: "FOCUSED",
      grade910Title: "Grades 9 & 10",
      grade910Subtitle: "Full Access Package",
      grade910Price: "450",
      grade910Currency: "ETB/Two Year",
      grade910F1: "All Grade 9 & 10 Subjects",
      grade910F2: "Interactive Community Hub",
      grade910F3: "Practice Exam Drills",
      fullTitle: "Full High School",
      fullSubtitle: "Grades 9-12 (Natural or Social)",
      fullPrice: "700",
      fullCurrency: "ETB/Two Year",
      fullF1: "Complete 4-Year Subject Vault",
      fullF2: "Community Discussion Access",
      fullF3: "Full National Prep Archive",
      grade1112Title: "Grades 11 & 12",
      grade1112Subtitle: "Natural or Social Stream",
      grade1112Price: "450",
      grade1112Currency: "ETB/Two Year",
      grade1112F1: "All Grade 11 & 12 Subjects",
      grade1112F2: "Exam Simulation",
      grade1112F3: "Peer-to-Peer Study Rooms",
      choosePlan: "Choose Plan",
      goPremium: "Go Premium",
      toastMsg: "Please download our mobile app to subscribe.",
      
      // Calculator translation tokens
      standardTab: "Preset Packages",
      calculatorTab: "Interactive Plan Explorer",
      calcTitle: "Explore Your Learning Experience",
      calcSubtitle: "Select options below to explore features and pricing for your grade level.",
      selectGrade: "1. Select Grade Level",
      selectStream: "2. Choose Academic Stream",
      grade910Opt: "Grades 9 & 10",
      grade1112Opt: "Grades 11 & 12",
      gradeFullOpt: "Full High School (9-12)",
      naturalStream: "Natural Science",
      socialStream: "Social Science",
      customSummary: "Your Plan Summary",
      customPriceLabel: "Total Investment",
      customPricePeriod: "ETB / 2 Years",
      customIncluded: "What's included:",
      claimPlan: "Get Access Now",
      streamLabel: "Stream: {stream}"
    },
    am: {
      subtitle: "ተለዋዋጭ ክፍያዎች",
      title: "ለታላቅ ውጤት ግልጽ ዋጋዎች",
      essential: "መሰረታዊ",
      recommended: "የሚመረጥ",
      focused: "ልዩ ትኩረት",
      grade910Title: "ከ9 - 10ኛ ክፍል",
      grade910Subtitle: "ሙሉ ጥቅል",
      grade910Price: "450",
      grade910Currency: "ብር / ለሁለት አመት",
      grade910F1: "ሁሉም የ9 እና 10ኛ ክፍል ትምህርቶች",
      grade910F2: "የተማሪዎች ማህበረሰብ",
      grade910F3: "የሙከራ ፈተናዎች",
      fullTitle: "የሙሉ ሁለተኛ ደረጃ",
      fullSubtitle: "ከ9-12ኛ ክፍል (ተፈጥሮ ወይም ማህበራዊ)",
      fullPrice: "700",
      fullCurrency: "ብር / ለሁለት አመት",
      fullF1: "የሙሉ 4 አመት ትምህርቶች",
      fullF2: "የማህበረሰብ ውይይት ተሳትፎ",
      fullF3: "የብሔራዊ ፈተናዎች ማህደር",
      grade1112Title: "ከ11 - 12ኛ ክፍል",
      grade1112Subtitle: "ተፈጥሮ ወይም ማህበራዊ ሳይንስ",
      grade1112Price: "450",
      grade1112Currency: "ብር / ለሁለት አመት",
      grade1112F1: "ሁሉም የ11 እና 12ኛ ክፍል ትምህርቶች",
      grade1112F2: "የብሔራዊ ፈተና አስመስሎ መስራት",
      grade1112F3: "የጋራ ጥናት ክፍሎች",
      choosePlan: "ጥቅል ይምረጡ",
      goPremium: "ፕሪሚየም ይሁኑ",
      toastMsg: "እባክዎ ለመመዝገብ የሞባይል መተግበሪያችንን ያውርዱ።",

      // Calculator translation tokens
      standardTab: "መደበኛ ጥቅሎች",
      calculatorTab: "ክፍያ አስላ",
      calcTitle: "የጥናት ፍላጎትዎን ያስሱ",
      calcSubtitle: "ለክፍልዎ የሚሆኑ ይዘቶችን እና ዋጋዎችን ለማሰስ ከታች ይምረጡ።",
      selectGrade: "1. የክፍል ደረጃ ይምረጡ",
      selectStream: "2. የትምህርት ዘርፍ ይምረጡ",
      grade910Opt: "ከ9 - 10ኛ ክፍል",
      grade1112Opt: "ከ11 - 12ኛ ክፍል",
      gradeFullOpt: "የሙሉ ሁለተኛ ደረጃ (9-12)",
      naturalStream: "የተፈጥሮ ሳይንስ",
      socialStream: "የማህበራዊ ሳይንስ",
      customSummary: "የጥቅሉ ማጠቃለያ",
      customPriceLabel: "አጠቃላይ ክፍያ",
      customPricePeriod: "ብር / ለ 2 ዓመት",
      customIncluded: "የሚከተሉትን ያካትታል፡",
      claimPlan: "አሁን ጀምር",
      streamLabel: "ዘርፍ፡ {stream}"
    }
  };

  const currentT = t[language] || t.en;

  // Pricing Logic
  const calculatedPrice = useMemo(() => {
    if (gradeBand === '9-10') return 450;
    if (gradeBand === '11-12') return 450;
    if (gradeBand === '9-12') return 700;
    return 0;
  }, [gradeBand]);

  // Dynamic Features List based on Selection
  const dynamicFeaturesList = useMemo(() => {
    const isEn = language === 'en';
    const streamName = stream === 'natural' 
      ? (isEn ? "Natural Science" : "የተፈጥሮ ሳይንስ")
      : (isEn ? "Social Science" : "የማህበራዊ ሳይንስ");

    if (gradeBand === '9-10') {
      return [
        currentT.grade910F1,
        currentT.grade910F2,
        currentT.grade910F3
      ];
    }
    if (gradeBand === '11-12') {
      return [
        isEn ? `All Grade 11 & 12 Subjects (${streamName})` : `ሁሉም የ11 እና 12ኛ ክፍል ትምህርቶች (${streamName})`,
        currentT.grade1112F2,
        currentT.grade1112F3
      ];
    }
    return [
      isEn ? `Complete 4-Year Subject Vault (${streamName})` : `የሙሉ 4 አመት ትምህርቶች (${streamName})`,
      currentT.fullF2,
      currentT.fullF3
    ];
  }, [gradeBand, stream, language, currentT]);

  return (
    <section id="pricing" className="pricing-new">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle-new">{currentT.subtitle}</span>
          <h2 className="section-title-new">{activeTab === 'standard' ? currentT.title : currentT.calcTitle}</h2>
          {activeTab === 'calculator' && (
            <p className="section-desc-new" style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
              {currentT.calcSubtitle}
            </p>
          )}
        </div>

        {/* Tab Switcher */}
        <div className="pricing-tabs">
          <button 
            className={`pricing-tab-btn ${activeTab === 'standard' ? 'active' : ''}`}
            onClick={() => setActiveTab('standard')}
          >
            {currentT.standardTab}
          </button>
          <button 
            className={`pricing-tab-btn ${activeTab === 'calculator' ? 'active' : ''}`}
            onClick={() => setActiveTab('calculator')}
          >
            {currentT.calculatorTab}
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'standard' ? (
            <motion.div 
              key="standard"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="pricing-grid-new"
            >
              {/* Grade 9-10 */}
              <div className="pricing-card-new">
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
              </div>

              {/* Full High School */}
              <div className="pricing-card-new highlight-card">
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
              </div>

              {/* Grade 11-12 */}
              <div className="pricing-card-new">
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
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="calculator"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="pricing-calculator"
            >
              {/* Controls Column */}
              <div className="calc-controls" style={{ alignSelf: 'center' }}>
                {/* 1. Grade Select */}
                <div style={{ marginBottom: '2rem' }}>
                  <h4 className="calc-section-title">{currentT.selectGrade}</h4>
                  <div className="calc-btn-group">
                    <button 
                      className={`calc-btn ${gradeBand === '9-10' ? 'active' : ''}`}
                      onClick={() => setGradeBand('9-10')}
                    >
                      {currentT.grade910Opt}
                    </button>
                    <button 
                      className={`calc-btn ${gradeBand === '11-12' ? 'active' : ''}`}
                      onClick={() => setGradeBand('11-12')}
                    >
                      {currentT.grade1112Opt}
                    </button>
                    <button 
                      className={`calc-btn ${gradeBand === '9-12' ? 'active' : ''}`}
                      onClick={() => setGradeBand('9-12')}
                    >
                      {currentT.gradeFullOpt}
                    </button>
                  </div>
                </div>

                {/* 2. Stream Select (Only for Grade 11-12 and Full High School) */}
                <AnimatePresence>
                  {gradeBand !== '9-10' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <h4 className="calc-section-title">{currentT.selectStream}</h4>
                      <div className="calc-btn-group streams-group">
                        <button 
                          className={`calc-btn ${stream === 'natural' ? 'active' : ''}`}
                          onClick={() => setStream('natural')}
                        >
                          {currentT.naturalStream}
                        </button>
                        <button 
                          className={`calc-btn ${stream === 'social' ? 'active' : ''}`}
                          onClick={() => setStream('social')}
                        >
                          {currentT.socialStream}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Summary Column */}
              <div className="calc-summary">
                <div className="calc-summary-card" style={{ top: '20px' }}>
                  <h3 className="summary-title">{currentT.customSummary}</h3>
                  
                  <div className="summary-price-box">
                    <span className="price-label">{currentT.customPriceLabel}</span>
                    <div className="calc-price">
                      {calculatedPrice}
                      <span className="period">{currentT.customPricePeriod}</span>
                    </div>
                  </div>

                  <div className="summary-details">
                    <div className="summary-row">
                      <span>{language === "am" ? "የክፍል ደረጃ" : "Grade Level"}</span>
                      <span className="summary-row-val">{currentT[`grade${gradeBand === '9-12' ? 'Full' : gradeBand.replace('-', '')}Opt`]}</span>
                    </div>
                    {gradeBand !== '9-10' && (
                      <div className="summary-row">
                        <span>{language === "am" ? "ዘርፍ" : "Stream"}</span>
                        <span className="summary-row-val">{stream === 'natural' ? currentT.naturalStream : currentT.socialStream}</span>
                      </div>
                    )}
                  </div>

                  <h4 className="calc-included-title">{currentT.customIncluded}</h4>
                  <ul className="calc-features-list">
                    {dynamicFeaturesList.map((feature, index) => (
                      <li key={index}>
                        <CheckCircle2 size={16} /> 
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button 
                    className="btn btn-primary pricing-btn-new"
                    onClick={() => {
                      triggerToast(currentT.toastMsg);
                      const el = document.querySelector('.bottom-cta');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {currentT.claimPlan}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Pricing;
