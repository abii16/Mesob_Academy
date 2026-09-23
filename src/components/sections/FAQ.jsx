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
          answer: "We offer 3 distinct 2-year packages with zero recurring monthly charges:\n• Grades 9 & 10 Package (400 ETB): 2 full years of access to all Grade 9 & 10 core subjects.\n• Grades 11 & 12 Package (400 ETB): 2 full years of access to your chosen stream (Natural or Social Science) plus National Exam prep archive.\n• Full High School 9-12 Package (700 ETB): 2 full years of access covering all grades 9 through 12, all streams, and national exams.\nEvery package provides 2 full years (730 days) of access and includes offline vault downloads." 
        },
        { 
          question: "How do I subscribe and pay in Ethiopia?", 
          answer: "Subscribing is fast and simple!\n1. Download the Mesob Academy app and choose your grade package.\n2. Transfer the fee via Telebirr (0905865441), Commercial Bank of Ethiopia - CBE (1000714423669), Awash Bank, or Abay Bank.\n3. Take a screenshot of the transfer and upload it directly inside the app.\nOur verification team approves and activates your full access within 24 hours." 
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
          answer: "ምንም ዓይነት ወርሃዊ ክፍያ የሌላቸውን 3 የ2 ዓመት ጥቅሎችን እናቀርባለን፦\n• የ9-10ኛ ክፍል ጥቅል (400 ብር)፦ ለ2 ዓመት ሙሉ፣ ሁሉም የ9 እና 10ኛ ክፍል ዋና ዋና ትምህርቶች።\n• የ11-12ኛ ክፍል ጥቅል (400 ብር)፦ ለ2 ዓመት ሙሉ፣ የተፈጥሮ ወይም ማህበራዊ ሳይንስ ዘርፍ ከብሔራዊ ፈተና ዝግጅት ጋር።\n• የሙሉ ሁለተኛ ደረጃ ከ9-12ኛ ክፍል ጥቅል (700 ብር)፦ ለ2 ዓመት ሙሉ፣ ከ9 እስከ 12ኛ ክፍል ያሉትን ሁሉንም የትምህርት ደረጃዎች፣ ዘርፎችና የፈተና ማህደሮች የሚያካትት።\nሁሉም ጥቅሎች ለ2 ዓመት ሙሉ የሚያገለግሉ ሲሆን ከመስመር ውጭ የማውረድ አገልግሎትን ያካትታሉ።" 
        },
        { 
          question: "በኢትዮጵያ እንዴት መክፈል እና መመዝገብ እችላለሁ?", 
          answer: "ክፍያ መፈጸም በጣም ቀላል ነው፦\n1. የሜሶብ አካዳሚ የሞባይል መተግበሪያን ያውርዱና የክፍል ጥቅልዎን ይምረጡ።\n2. ክፍያውን በቴሌብር (0905865441)፣ በኢትዮጵያ ንግድ ባንክ (1000714423669)፣ በአዋሽ ወይም በአባይ ባንክ ይላኩ።\n3. የከፈሉበትን ደረሰኝ ስክሪንሾት በመተግበሪያው ውስጥ በቀጥታ ይጫኑ።\nየማረጋገጫ ቡድናችን ደረሰኙን በማረጋገጥ በ24 ሰዓት ውስጥ ሙሉ የፕሪሚየም አገልግሎትዎን ይከፍታል።" 
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
