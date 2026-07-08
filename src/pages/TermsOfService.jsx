import React from "react";
import "../styles/pages/TermsOfService.css";

const TermsOfService = ({ language = "en" }) => {
  const t = {
    en: {
      title: "Terms of Service",
      lastUpdated: "Last updated: June 25, 2026",
      introDesc: "Please read these Terms of Service carefully. By using our mobile application, you agree to these rules.",
      
      sec1Title: "1. Eligibility & User Accounts",
      sec1Text: "Mesob App is for students in Grades 9-12. If you are under 18, you need parent or guardian consent. You are responsible for keeping your password secret.",
      
      sec2Title: "2. Subscriptions, Payments & Access Limits",
      sec2Text: "Premium packages require payment via local bank transfers or telebirr:",
      sec2Bullet1: "Verification: Admins verify your bank receipt and unlock access within 24 hours.",
      sec2Bullet2: "Device Lock: Your account is bound to one device to prevent sharing.",
      sec2Bullet3: "Refunds: All package payments are final and non-refundable.",
      
      sec3Title: "3. Intellectual Property, Copyright & Idea Protection",
      sec3Text: "All study booklets, videos, questions, layout designs, and code are owned by Mesob Academy. In accordance with Article 40(2) of the FDRE Constitution, these intangible products of creativity are protected by law:",
      sec3Bullet1: "No Cloning: You cannot copy our layout, workflows, or question selection tools to build a competing app.",
      sec3Bullet2: "Personal Use Only: You cannot download, sell, or distribute our study sheets or videos to Telegram, YouTube, or other channels.",
      sec3Bullet3: "Legal Action: Violations will result in immediate bans and legal prosecution under Ethiopian copyright laws.",
      
      sec4Title: "4. Prohibited User Conduct",
      sec4Text: "You agree not to perform the following actions:",
      sec4Bullet1: "Scraping: Extracting questions or video links using automated bots.",
      sec4Bullet2: "Sharing: Renting or sharing your login with other students.",
      sec4Bullet3: "Reverse Engineering: Trying to decompile the mobile app code.",
      
      sec5Title: "5. Technical Anti-Piracy Measures",
      sec5Text: "We use technical measures (like blocking screenshots, screen recording, background blurs, and user watermarks) to prevent unauthorized sharing. Violations will result in immediate bans and account termination without refund.",
      
      sec6Title: "6. Governing Law",
      sec6Text: "These terms are governed by and construed in accordance with the laws of the Federal Democratic Republic of Ethiopia."
    },
    am: {
      title: "የአገልግሎት ውሎች",
      lastUpdated: "የመጨረሻ መሻሻል፡ ሰኔ 18 ቀን 2018 ዓ.ም.",
      introDesc: "እባክዎን እነዚህን የአገልግሎት ውሎች በጥንቃቄ ያንብቡ። አገልግሎታችንን ወይም መተግበሪያችንን ሲጠቀሙ በእነዚህ ውሎች ለመገዛት ተስማምተዋል።",
      
      sec1Title: "1. ብቁነት እና የተጠቃሚ አካውንት",
      sec1Text: "የአካዳሚው አገልግሎት ከ9-12ኛ ክፍል ላሉ ተማሪዎች ነው። ዕድሜዎ ከ18 በታች ከሆነ የወላጅ ፈቃድ ያስፈልግዎታል። ለአካውንትዎ ደህንነት ራስዎ ተጠያቂ ነዎት።",
      
      sec2Title: "2. የፕሪሚየም ጥቅሎች፣ ክፍያዎች እና የአጠቃቀም ገደቦች",
      sec2Text: "ፕሪሚየም አገልግሎቶችን ለማግኘት በባንክ ወይም በቴሌብር መክፈል ያስፈልጋል፦",
      sec2Bullet1: "ማረጋገጥ፦ የክፍያ ደረሰኝ ስክሪንሾት ሲልኩ በ24 ሰዓት ውስጥ አካውንትዎ ይከፈታል።",
      sec2Bullet2: "የመሣሪያ ትስስር፦ አካውንት እንዳይጋራ እያንዳንዱ መለያ በአንድ ስልክ ላይ ብቻ እንዲሰራ ይደረጋል።",
      sec2Bullet3: "የክፍያ ተመላሽ፦ ማንኛውም ክፍያ ከተፈጸመ በኋላ መልሶ መመለስ አይቻልም።",
      
      sec3Title: "3. የአዕምሯዊ ንብረት፣ የቅጂ መብት እና የሀሳብ ስርቆት መከላከል",
      sec3Text: "በመድረኩ ላይ ያሉ መጽሐፍት፣ ቪዲዮዎች፣ ጥያቄዎች እና የገጽ ዲዛይኖች በቅጂ መብት ህግ የተጠበቁ የሜሶብ አካዳሚ ንብረቶች ናቸው። በኢ.ፌ.ዲ.ሪ. ሕገ-መንግሥት አንቀጽ 40(2) መሠረት፣ እነዚህ በፈጠራና በሥራ የተገኙ ረቂቅ ንብረቶች (intangible products) በሕግ የተጠበቁ ናቸው፦",
      sec3Bullet1: "የሀሳብ ስርቆት መከልከል፦ የእኛን የጥናት ዲዛይንና የጥያቄ አመራረጥ ዘዴ በመኮረጅ ተፎካካሪ መተግበሪያዎችን መስራት የተከለከለ ነው።",
      sec3Bullet2: "ለግል አጠቃቀም ብቻ፦ ትምህርቶቹን ማውረድ ወይም በቴሌግራም ቻናልና በሌሎች ቦታዎች ማጋራት በጥብቅ የተከለከለ ነው።",
      sec3Bullet3: "ህጋዊ እርምጃ፦ የቅጂ መብት የጣሱ ተጠቃሚዎች አካውንታቸው በቋሚነት የሚዘጋ ሲሆን በህግ እንከሳቸዋለን።",
      
      sec4Title: "4. የተከለከሉ የተጠቃሚ ተግባራት",
      sec4Text: "እነዚህን ተግባራት ላለማድረግ ተስማምተዋል፦",
      sec4Bullet1: "መረጃ መዝረፍ፦ ጥያቄዎችን ወይም የቪዲዮ ሊንኮችን በቦቶች መውሰድ።",
      sec4Bullet2: "አካውንት ማጋራት፦ አካውንትዎን ለሌሎች ተማሪዎች ማከራየት ወይም መሸጥ።",
      sec4Bullet3: "ሪቨርስ-ኢንጂነሪንግ፦ የመተግበሪያውን ኮድ ለመበተን መሞከር።",
      
      sec5Title: "5. የቴክኒክ ፀረ-ኮፒ መከላከያዎች",
      sec5Text: "ያለፈቃድ ቪዲዮ መቅረጽን ለመከላከል ስክሪንሾት መከልከልን፣ የጀርባ መደብዘዝን እና የውሃ ምልክት ማሳየትን እንጠቀማለን። ህግ የጣሱ አካውንቶችን ያለ ምንም ክፍያ ተመላሽ የማገድ መብታችን የተጠበቀ ነው።",
      
      sec6Title: "6. የሚገዛበት ሕግ",
      sec6Text: "እነዚህ ውሎች በኢትዮጵያ ፌዴራላዊ ዲሞክራሲያዊ ሪፐብሊክ ሕጎች መሠረት የሚገዙ እና የሚተረጎሙ ናቸው።"
    }
  };

  const curr = t[language] || t.en;

  return (
    <div className="privacy-document-layout">
      <div className="container privacy-document-inner">

        {/* Date & Title */}
        <div className="privacy-document-title-block">
          <div className="privacy-date-label">{curr.lastUpdated}</div>
          <h1 className="privacy-document-title">{curr.title}</h1>
          <p className="privacy-document-intro">
            {curr.introDesc}
          </p>
        </div>

        {/* Single Column Content */}
        <div className="privacy-document-body">
          {/* Section 1 */}
          <div className="privacy-doc-section">
            <h2>{curr.sec1Title}</h2>
            <p>{curr.sec1Text}</p>
          </div>

          {/* Section 2 */}
          <div className="privacy-doc-section">
            <h2>{curr.sec2Title}</h2>
            <p>{curr.sec2Text}</p>
            <ul className="privacy-doc-list">
              <li>
                <strong>{language === 'am' ? "ማረጋገጥ፦" : "Verification:"}</strong> {curr.sec2Bullet1}
              </li>
              <li>
                <strong>{language === 'am' ? "የመሣሪያ ትስስር፦" : "Device Lock:"}</strong> {curr.sec2Bullet2}
              </li>
              <li>
                <strong>{language === 'am' ? "የክፍያ ተመላሽ፦" : "Refunds:"}</strong> {curr.sec2Bullet3}
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="privacy-doc-section">
            <h2>{curr.sec3Title}</h2>
            <p>{curr.sec3Text}</p>
            <ul className="privacy-doc-list">
              <li>
                <strong>{language === 'am' ? "የሀሳብ ስርቆት መከልከል፦" : "No Cloning:"}</strong> {curr.sec3Bullet1}
              </li>
              <li>
                <strong>{language === 'am' ? "ለግል አጠቃቀም ብቻ፦" : "Personal Use Only:"}</strong> {curr.sec3Bullet2}
              </li>
              <li>
                <strong>{language === 'am' ? "ህጋዊ እርምጃ፦" : "Legal Action:"}</strong> {curr.sec3Bullet3}
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="privacy-doc-section">
            <h2>{curr.sec4Title}</h2>
            <p>{curr.sec4Text}</p>
            <ul className="privacy-doc-list">
              <li>
                <strong>{language === 'am' ? "መረጃ መዝረፍ፦" : "Scraping:"}</strong> {curr.sec4Bullet1}
              </li>
              <li>
                <strong>{language === 'am' ? "አካውንት ማጋራት፦" : "Sharing:"}</strong> {curr.sec4Bullet2}
              </li>
              <li>
                <strong>{language === 'am' ? "ሪቨርስ-ኢንጂነሪንግ፦" : "Reverse Engineering:"}</strong> {curr.sec4Bullet3}
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="privacy-doc-section">
            <h2>{curr.sec5Title}</h2>
            <p>{curr.sec5Text}</p>
          </div>

          {/* Section 6 */}
          <div className="privacy-doc-section">
            <h2>{curr.sec6Title}</h2>
            <p>{curr.sec6Text}</p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default TermsOfService;
