import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, CreditCard, Download } from 'lucide-react';
import '../../styles/sections/Pricing.css';

const Pricing = ({ triggerToast, language }) => {
  const t = {
    en: {
      subtitle: "TRANSPARENT PRICING",
      title: "Affordable 2-Year Plans. No Monthly Fees.",
      tagline: "Every package provides 2 full years of access to lessons, offline vault, and exam prep.",
      essential: "ESSENTIAL",
      recommended: "BEST VALUE",
      focused: "NATIONAL EXAM PREP",
      currency: "ETB",
      billingBadge: "No Monthly Fees",
      twoYearPeriod: "2 Years Full Access",
      
      grade910Title: "Grades 9 & 10",
      grade910Subtitle: "General Curriculum Package (2 Years)",
      grade910Price: "400",
      grade910F1: "All Grade 9 & 10 Core Subjects",
      grade910F2: "100% Offline Vault (Zero Data Study)",
      grade910F3: "Chapter Summaries & Practice Drills",
      grade910F4: "Student Discussion & Peer Hub",
      grade910F5: "Valid for 2 Full Academic Years",

      fullTitle: "Full High School",
      fullSubtitle: "Complete Grades 9-12 Vault (2 Years)",
      fullPrice: "700",
      fullF1: "Complete Grades 9, 10, 11 & 12 Materials",
      fullF2: "Natural or Social Stream Included",
      fullF3: "10+ Years National Exam Prep Archive",
      fullF4: "100% Offline Vault (Zero Data Study)",
      fullF5: "2 Full Years of Access Across All 4 Grades",

      grade1112Title: "Grades 11 & 12",
      grade1112Subtitle: "Natural or Social Science Stream (2 Years)",
      grade1112Price: "400",
      grade1112F1: "All Stream Subjects (Natural or Social)",
      grade1112F2: "National Exam Simulations & Timed Drills",
      grade1112F3: "100% Offline Vault (Zero Data Study)",
      grade1112F4: "Interactive Community & Peer Study Rooms",
      grade1112F5: "Valid for 2 Full Academic Years",

      choosePlan: "Choose Plan",
      goPremium: "Get 2-Year Pass",
      toastMsg: "Please download our mobile app to subscribe.",

      guarantee1Title: "2 Full Years of Access",
      guarantee1Desc: "Every package gives you 2 full years (730 days) of access with zero recurring monthly charges.",
      guarantee2Title: "Ethiopian Local Payments",
      guarantee2Desc: "Instant transfer via Telebirr, CBE Birr, Awash Bank, or Abay Bank.",
      guarantee3Title: "Full Offline Learning",
      guarantee3Desc: "Download video lessons & notes once, study anytime without internet."
    },
    am: {
      subtitle: "ግልጽ እና ተመጣጣኝ ክፍያዎች",
      title: "ተመጣጣኝ የ2 ዓመት ክፍያዎች፤ ወርሃዊ ክፍያ የሌለው",
      tagline: "እያንዳንዱ ጥቅል ለ2 ዓመት ሙሉ የትምህርት ይዘቶችን፣ ከመስመር ውጭ ማውረድና የፈተና ዝግጅትን ያካትታል።",
      essential: "መሰረታዊ",
      recommended: "የሚመረጥ",
      focused: "የፈተና ዝግጅት",
      currency: "ብር",
      billingBadge: "ወርሃዊ ክፍያ የሌለው",
      twoYearPeriod: "ለ2 ዓመት ሙሉ ተጠቃሚነት",

      grade910Title: "ከ9 - 10ኛ ክፍል",
      grade910Subtitle: "የአጠቃላይ ሥርዓተ ትምህርት ጥቅል (ለ2 ዓመት)",
      grade910Price: "400",
      grade910F1: "ሁሉም የ9 እና 10ኛ ክፍል ዋና ዋና ትምህርቶች",
      grade910F2: "100% ከመስመር ውጭ (ያለ ሞባይል ዳታ) ማጥናት",
      grade910F3: "የምዕራፍ ማጠቃለያዎችና የሙከራ ፈተናዎች",
      grade910F4: "የተማሪዎች ማህበረሰብና የውይይት መድረክ",
      grade910F5: "ለ2 ሙሉ የትምህርት ዓመታት የሚያገለግል",

      fullTitle: "የሙሉ ሁለተኛ ደረጃ",
      fullSubtitle: "የ9-12ኛ ክፍል ሙሉ ማህደር (ለ2 ዓመት)",
      fullPrice: "700",
      fullF1: "የሁሉም የ9፣ 10፣ 11 እና 12ኛ ክፍል ትምህርቶች",
      fullF2: "የተፈጥሮ ወይም የማህበራዊ ሳይንስ ዘርፍን ያካተተ",
      fullF3: "የ10+ ዓመታት የብሔራዊ ፈተናዎች ማህደርና ልምምዶች",
      fullF4: "100% ከመስመር ውጭ (ያለ ሞባይል ዳታ) ማጥናት",
      fullF5: "ለሁሉም 4 የክፍል ደረጃዎች ለ2 ዓመት ሙሉ የሚያገለግል",

      grade1112Title: "ከ11 - 12ኛ ክፍል",
      grade1112Subtitle: "የተፈጥሮ ወይም የማህበራዊ ሳይንስ ዘርፍ (ለ2 ዓመት)",
      grade1112Price: "400",
      grade1112F1: "ሁሉም የ11 እና 12ኛ ክፍል የዘርፉ ትምህርቶች",
      grade1112F2: "የብሔራዊ ፈተና አስመስሎ መስራትና የጊዜ ልምምዶች",
      grade1112F3: "100% ከመስመር ውጭ (ያለ ሞባይል ዳታ) ማጥናት",
      grade1112F4: "የጋራ ጥናት ክፍሎችና የተማሪዎች ማህበረሰብ",
      grade1112F5: "ለ2 ሙሉ የትምህርት ዓመታት የሚያገለግል",

      choosePlan: "ጥቅል ይምረጡ",
      goPremium: "የ2 ዓመት ጥቅል ያግኙ",
      toastMsg: "እባክዎ ለመመዝገብ የሞባይል መተግበሪያችንን ያውርዱ።",

      guarantee1Title: "የ2 ዓመት ሙሉ ተጠቃሚነት",
      guarantee1Desc: "እያንዳንዱ ጥቅል ለ2 ዓመት (730 ቀናት) ሙሉ የሚያገለግል ሲሆን ተደጋጋሚ ወርሃዊ ክፍያ የለውም።",
      guarantee2Title: "ቀላል የሀገር ውስጥ ክፍያዎች",
      guarantee2Desc: "በቴሌብር፣ በኢትዮጵያ ንግድ ባንክ (CBE)፣ በአዋሽ ወይም በአባይ ባንክ ይክፈሉ።",
      guarantee3Title: "ሙሉ ከመስመር ውጭ (Offline)",
      guarantee3Desc: "ቪዲዮዎችንና ማስታወሻዎችን አንዴ በማውረድ ያለ ኢንተርኔት ያጥኑ።"
    }
  };

  const currentT = t[language] || t.en;

  return (
    <section id="pricing" className="pricing-new">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle-new">{currentT.subtitle}</span>
          <h2 className="section-title-new">{currentT.title}</h2>
          <p className="pricing-header-tagline">{currentT.tagline}</p>
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
            
            <div className="pricing-price-container">
              <div className="pricing-price-new">
                {currentT.grade910Price} <span className="currency">{currentT.currency}</span>
              </div>
              <div className="pricing-duration-row">
                <span className="duration-pill">{currentT.twoYearPeriod}</span>
                <span className="billing-pill">{currentT.billingBadge}</span>
              </div>
            </div>

            <ul className="pricing-features-new">
              <li><CheckCircle2 size={16} /> {currentT.grade910F1}</li>
              <li><CheckCircle2 size={16} /> {currentT.grade910F2}</li>
              <li><CheckCircle2 size={16} /> {currentT.grade910F3}</li>
              <li><CheckCircle2 size={16} /> {currentT.grade910F4}</li>
              <li><CheckCircle2 size={16} /> {currentT.grade910F5}</li>
            </ul>
            <button 
              className="btn btn-secondary pricing-btn-new" 
              onClick={() => {
                triggerToast(currentT.toastMsg);
                const el = document.getElementById('hero');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {currentT.choosePlan}
            </button>
          </motion.div>

          {/* Full High School (9-12) */}
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
            
            <div className="pricing-price-container">
              <div className="pricing-price-new">
                {currentT.fullPrice} <span className="currency">{currentT.currency}</span>
              </div>
              <div className="pricing-duration-row">
                <span className="duration-pill duration-pill-highlight">{currentT.twoYearPeriod}</span>
                <span className="billing-pill billing-pill-highlight">{currentT.billingBadge}</span>
              </div>
            </div>

            <ul className="pricing-features-new">
              <li><CheckCircle2 size={16} /> {currentT.fullF1}</li>
              <li><CheckCircle2 size={16} /> {currentT.fullF2}</li>
              <li><CheckCircle2 size={16} /> {currentT.fullF3}</li>
              <li><CheckCircle2 size={16} /> {currentT.fullF4}</li>
              <li><CheckCircle2 size={16} /> {currentT.fullF5}</li>
            </ul>
            <button 
              className="btn btn-primary pricing-btn-new" 
              onClick={() => {
                triggerToast(currentT.toastMsg);
                const el = document.getElementById('hero');
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
            
            <div className="pricing-price-container">
              <div className="pricing-price-new">
                {currentT.grade1112Price} <span className="currency">{currentT.currency}</span>
              </div>
              <div className="pricing-duration-row">
                <span className="duration-pill">{currentT.twoYearPeriod}</span>
                <span className="billing-pill">{currentT.billingBadge}</span>
              </div>
            </div>

            <ul className="pricing-features-new">
              <li><CheckCircle2 size={16} /> {currentT.grade1112F1}</li>
              <li><CheckCircle2 size={16} /> {currentT.grade1112F2}</li>
              <li><CheckCircle2 size={16} /> {currentT.grade1112F3}</li>
              <li><CheckCircle2 size={16} /> {currentT.grade1112F4}</li>
              <li><CheckCircle2 size={16} /> {currentT.grade1112F5}</li>
            </ul>
            <button 
              className="btn btn-secondary pricing-btn-new" 
              onClick={() => {
                triggerToast(currentT.toastMsg);
                const el = document.getElementById('hero');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {currentT.choosePlan}
            </button>
          </motion.div>
        </div>

        {/* Value & Trust Guarantees */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pricing-guarantees-grid"
        >
          <div className="pricing-guarantee-card">
            <div className="guarantee-icon"><ShieldCheck size={22} /></div>
            <div className="guarantee-content">
              <h4>{currentT.guarantee1Title}</h4>
              <p>{currentT.guarantee1Desc}</p>
            </div>
          </div>
          <div className="pricing-guarantee-card">
            <div className="guarantee-icon"><CreditCard size={22} /></div>
            <div className="guarantee-content">
              <h4>{currentT.guarantee2Title}</h4>
              <p>{currentT.guarantee2Desc}</p>
            </div>
          </div>
          <div className="pricing-guarantee-card">
            <div className="guarantee-icon"><Download size={22} /></div>
            <div className="guarantee-content">
              <h4>{currentT.guarantee3Title}</h4>
              <p>{currentT.guarantee3Desc}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
