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
          answer: "Yes! All video lessons, chapter notes, and practice exams are fully based on the new Ethiopian National Curriculum." 
        },
        { 
          question: "Does the app work without internet?", 
          answer: "Yes! You can download video lessons, summaries, and practice exams to your phone and study them anytime without using mobile data." 
        },
        { 
          question: "What pricing packages are available?", 
          answer: "We offer 3 straightforward 2-year packages with no monthly fees:\n• Grades 9 & 10 Package (450 ETB): 2 full years of access to all Grade 9 & 10 subjects.\n• Grades 11 & 12 Package (450 ETB): 2 full years of access to your chosen stream (Natural or Social Science) plus 10+ years of past national exams.\n• Full High School 9-12 Package (700 ETB): 2 full years of access covering all grades 9 through 12, all streams, and past national exams.\nEvery package provides 2 full years of access and offline study downloads." 
        },
        { 
          question: "How do I subscribe and pay in Ethiopia?", 
          answer: "Subscribing is fast and simple!\n1. Download the Mesob Academy app and choose your grade package.\n2. Transfer the fee using any of our official accounts:\n• Telebirr: 0905865441\n• Commercial Bank of Ethiopia (CBE): 1000714423669\n• Awash Bank: 013201468713200\n• Abay Bank: A401011070050017\n3. Take a screenshot of the transfer and upload it directly inside the app.\nOur verification team approves and activates your full access within 24 hours." 
        },
        { 
          question: "Does the app track my study scores?", 
          answer: "Yes! After every practice test, you will see your total score, chapter-by-chapter results, and how fast you answered each question." 
        }
      ]
    },
    am: {
      subtitle: "ጥያቄዎች",
      title: "ተደጋግመው የሚጠየቁ ጥያቄዎች",
      faqs: [
        { 
          question: "መተግበሪያው በአዲሱ ሥርዓተ ትምህርት ላይ የተመሰረተ ነው?", 
          answer: "አዎ! ሁሉም የቪዲዮ ትምህርቶች፣ ማስታወሻዎች እና የሙከራ ፈተናዎች በአዲሱ የኢትዮጵያ ብሔራዊ ሥርዓተ ትምህርት መሰረት የተዘጋጁ ናቸው።" 
        },
        { 
          question: "መተግበሪያው ያለ ኢንተርኔት ይሰራል?", 
          answer: "አዎ! የቪዲዮ ትምህርቶችን፣ ማጠቃለያዎችን እና የልምምድ ፈተናዎችን አስቀድመው ወደ ስልክዎ በማውረድ ያለ ምንም ሞባይል ዳታ የትም ቦታ ሆነው ማጥናት ይችላሉ።" 
        },
        { 
          question: "ምን ዓይነት የክፍያ ጥቅሎች አሉ?", 
          answer: "ምንም ዓይነት ወርሃዊ ክፍያ የሌላቸውን 3 የ2 ዓመት ጥቅሎችን እናቀርባለን፦\n• የ9-10ኛ ክፍል ጥቅል (450 ብር)፦ ለ2 ዓመት ሙሉ፣ ሁሉም የ9 እና 10ኛ ክፍል ዋና ዋና ትምህርቶች።\n• የ11-12ኛ ክፍል ጥቅል (450 ብር)፦ ለ2 ዓመት ሙሉ፣ የተፈጥሮ ወይም ማህበራዊ ሳይንስ ዘርፍ ከ10+ ዓመታት የብሔራዊ ፈተና ጥያቄዎች ጋር።\n• የሙሉ ሁለተኛ ደረጃ ከ9-12ኛ ክፍል ጥቅል (700 ብር)፦ ለ2 ዓመት ሙሉ፣ ከ9 እስከ 12ኛ ክፍል ያሉትን ሁሉንም የትምህርት ደረጃዎች፣ ዘርፎችና ያለፉ ፈተናዎችን ያካተተ።\nሁሉም ጥቅሎች ለ2 ዓመት ሙሉ የሚያገለግሉ ሲሆን ያለ ኢንተርኔት የማጥናት ዕድልን ያካትታሉ።" 
        },
        { 
          question: "በኢትዮጵያ እንዴት መክፈል እና መመዝገብ እችላለሁ?", 
          answer: "ክፍያ መፈጸም በጣም ቀላል ነው፦\n1. የሜሶብ አካዳሚ የሞባይል መተግበሪያን ያውርዱና የክፍል ጥቅልዎን ይምረጡ።\n2. ክፍያውን ከሚከተሉት ህጋዊ የክፍያ አማራጮች በአንዱ ይላኩ፦\n• ቴሌብር (Telebirr)፦ 0905865441\n• የኢትዮጵያ ንግድ ባንክ (CBE)፦ 1000714423669\n• አዋሽ ባንክ (Awash Bank)፦ 013201468713200\n• አባይ ባንክ (Abay Bank)፦ A401011070050017\n3. የከፈሉበትን ደረሰኝ ስክሪንሾት በመተግበሪያው ውስጥ በቀጥታ ይጫኑ።\nየማረጋገጫ ቡድናችን ደረሰኙን በማረጋገጥ በ24 ሰዓት ውስጥ ሙሉ የፕሪሚየም አገልግሎትዎን ይከፍታል።" 
        },
        { 
          question: "መተግበሪያው የጥናት ውጤቴን ይከታተላል?", 
          answer: "አዎ! የሙከራ ፈተናዎችን ሲጨርሱ ያገኙትን ውጤት፣ በየትኞቹ ምዕራፎች ላይ መሻሻል እንዳለብዎት እና የፈተና ፍጥነትዎን በቀላሉ ያሳይዎታል።" 
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
