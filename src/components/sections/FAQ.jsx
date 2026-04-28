import React from 'react';
import FAQItem from '../FAQItem';

const FAQ = () => {
  return (
    <section id="faq" className="faq-new">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="section-header">
          <span className="section-subtitle-new">FAQ</span>
          <h2 className="section-title-new">Frequently Asked Questions</h2>
        </div>
        
        <div className="faq-list">
          <FAQItem 
            question="Does the app work without internet?"
            answer="Yes! With our Offline Vault, you can download video lessons, notes, and practice exams while connected, and access them anywhere without using mobile data."
          />
          <FAQItem 
            question="Which subjects are covered?"
            answer="We cover all core subjects for the Ethiopian National Curriculum (Grades 9-12), including Mathematics, Physics, Chemistry, Biology, English, and more."
          />
          <FAQItem 
            question="How do I pay in Ethiopia?"
            answer="We support secure local payment methods including Telebirr, CBE Birr, and direct bank transfers."
          />
          <FAQItem 
            question="Is the AI tutor available 24/7?"
            answer="Absolutely. The interactive AI Academic Companion responds immediately around the clock to support peak late-night exam preparations safely."
          />
          <FAQItem 
            question="Can I use my subscription on multiple devices?"
            answer="Yes, your persistent academic state syncs effortlessly across your registered smartphone profiles securely."
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
