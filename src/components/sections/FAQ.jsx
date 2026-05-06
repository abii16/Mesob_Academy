import React from 'react';
import FAQItem from '../common/FAQItem';
import '../../styles/sections/FAQ.css';

const FAQ = ({ language }) => {
  const t = {
    en: {
      subtitle: "FAQ",
      title: "Frequently Asked Questions",
      faqs: [
        { question: "Does the app work without internet?", answer: "Yes! With our Offline Vault, you can download video lessons, notes, and practice exams while connected, and access them anywhere without using mobile data." },
        { question: "Which subjects are covered?", answer: "We cover all core subjects for the Ethiopian National Curriculum (Grades 9-12), including Mathematics, Physics, Chemistry, Biology, English, and more." },
        { question: "How do I pay in Ethiopia?", answer: "We support secure local payment methods including Telebirr, CBE Birr, and direct bank transfers." },
        { question: "Is there a community for students?", answer: "Yes! Join our vibrant student community where you can discuss complex problems, share study tips, and collaborate with peers across the country." },
        { question: "Can I use my subscription on multiple devices?", answer: "Yes, your persistent academic state syncs effortlessly across your registered smartphone profiles securely." }
      ]
    },
    am: {
      subtitle: "ጥያቄዎች",
      title: "ተደጋግመው የሚጠየቁ ጥያቄዎች",
      faqs: [
        { question: "መተግበሪያው ያለ ኢንተርኔት ይሰራል?", answer: "አዎ! በእኛ ከመስመር ውጭ ማስቀመጫ አማካኝነት የቪዲዮ ትምህርቶችን፣ ማስታወሻዎችን እና የልምምድ ፈተናዎችን በማውረድ ያለ ሞባይል ዳታ መጠቀም ይችላሉ።" },
        { question: "የትኞቹ ትምህርቶች ተካተዋል?", answer: "ለኢትዮጵያ ብሔራዊ ሥርዓተ ትምህርት (ከ9-12ኛ ክፍል) ሁሉንም ዋና ዋና ትምህርቶች እናካትታለን፤ ይህም ሂሳብ፣ ፊዚክስ፣ ኬሚስትሪ፣ ባዮሎጂ፣ እንግሊዝኛ እና ሌሎችንም ያካትታል።" },
        { question: "በኢትዮጵያ እንዴት መክፈል እችላለሁ?", answer: "ቴሌብር፣ ሲቢኢ ብር እና ቀጥታ የባንክ ዝውውሮችን ጨምሮ አስተማማኝ የሀገር ውስጥ የመክፈያ ዘዴዎችን እንደግፋለን።" },
        { question: "ለተማሪዎች የሚሆን ማህበረሰብ አለ?", answer: "አዎ! ተማሪዎች ስለ ተወሳሰቡ ጥያቄዎች የሚወያዩበት፣ የጥናት ምክሮችን የሚያካፍሉበት እና በመላ ሀገሪቱ ካሉ ጓደኞቻቸው ጋር የሚተባበሩበት ንቁ የተማሪዎች ማህበረሰብ አለን።" },
        { question: "የገዛሁትን ጥቅል በበርካታ መሳሪያዎች መጠቀም እችላለሁ?", answer: "አዎ፣ አካውንትዎ በተመዘገቡት ስልኮችዎ ላይ ያለምንም እንከን ይመሳሰላል።" }
      ]
    }
  };

  const currentT = t[language] || t.en;

  return (
    <section id="faq" className="faq-new">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="section-header">
          <span className="section-subtitle-new">{currentT.subtitle}</span>
          <h2 className="section-title-new">{currentT.title}</h2>
        </div>
        
        <div className="faq-list">
          {currentT.faqs.map((faq, i) => (
            <FAQItem 
              key={i}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
