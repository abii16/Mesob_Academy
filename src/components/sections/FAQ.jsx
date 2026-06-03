import React from 'react';
import FAQItem from '../common/FAQItem';
import '../../styles/sections/FAQ.css';

const FAQ = ({ language }) => {
  const t = {
    en: {
      subtitle: "FAQ",
      title: "Frequently Asked Questions",
      faqs: [
        { 
          question: "Is the app based on the new curriculum?", 
          answer: "Yes! All video lessons, booklets, and simulated mock exams are fully aligned with the latest Ethiopian National Curriculum guidelines." 
        },
        { 
          question: "Does the app work without internet?", 
          answer: "Yes! With our secure Offline Vault, you can download video lessons, summaries, and practice exams while connected, and access them anytime anywhere without mobile data." 
        },
        { 
          question: "What pricing packages are available?", 
          answer: "We offer flexible plans: Grade 9-10 (400 ETB/Two Year), Grade 11-12 (400 ETB/Two Year), and the Full High School 9-12 Package (700 ETB/Two Year)." 
        },
        { 
          question: "How do I subscribe and pay in Ethiopia?", 
          answer: "We support easy local payment methods including Telebirr, CBE Birr, and direct bank transfers. You can subscribe directly through our mobile app." 
        },
        { 
          question: "Does the app track my study scores?", 
          answer: "Yes! The app features real-time Score Analytics, giving you automated domain-by-domain passing scorecards and private speed pacing metrics upon booklet completion." 
        }
      ]
    },
    am: {
      subtitle: "ጥያቄዎች",
      title: "ተደጋግመው የሚጠየቁ ጥያቄዎች",
      faqs: [
        { 
          question: "መተግበሪያው በአዲሱ ሥርዓተ ትምህርት ላይ የተመሰረተ ነው?", 
          answer: "አዎ! ሁሉም የቪዲዮ ትምህርቶች፣ ቡክሌቶች እና አስመስሎ የተሰሩ የሙከራ ፈተናዎች ከአዲሱ የኢትዮጵያ ብሔራዊ ሥርዓተ ትምህርት ጋር ሙሉ በሙሉ የተጣጣሙ ናቸው።" 
        },
        { 
          question: "መተግበሪያው ያለ ኢንተርኔት ይሰራል?", 
          answer: "አዎ! በእኛ አስተማማኝ ከመስመር ውጭ ማስቀመጫ አማካኝነት የቪዲዮ ትምህርቶችን፣ ማጠቃለያዎችን እና የልምምድ ፈተናዎችን በማውረድ ያለ ሞባይል ዳታ በማንኛውም ጊዜ መጠቀም ይችላሉ።" 
        },
        { 
          question: "ምን ዓይነት የክፍያ ጥቅሎች አሉ?", 
          answer: "ተለዋዋጭ ጥቅሎችን እናቀርባለን፡ ከ9-10ኛ ክፍል (400 ብር ለሁለት አመት)፣ ከ11-12ኛ ክፍል (400 ብር ለሁለት አመት)፣ ወይም የሙሉ ሁለተኛ ደረጃ ከ9-12ኛ ክፍል ጥቅል (700 ብር ለሁለት አመት)።" 
        },
        { 
          question: "በኢትዮጵያ እንዴት መክፈል እና መመዝገብ እችላለሁ?", 
          answer: "ቴሌብር፣ ሲቢኢ ብር እና ቀጥታ የባንክ ዝውውሮችን ጨምሮ የሀገር ውስጥ የመክፈያ ዘዴዎችን እንደግፋለን። በሞባይል መተግበሪያችን በቀጥታ መመዝገብ ይችላሉ።" 
        },
        { 
          question: "መተግበሪያው የጥናት ውጤቴን ይከታተላል?", 
          answer: "አዎ! መተግበሪያው የእርስዎን ውጤት የሚተነትን ሲሆን የልምምድ ፈተናዎችን ሲያጠናቅቁ በራስ-ሰር የተሰሩ የየክፍለ-ትምህርቶችን ማለፊያ ውጤቶች እና የፍጥነት ትንታኔዎችን ያሳይዎታል።" 
        }
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
