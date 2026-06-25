import React from "react";
import "../styles/pages/PrivacyPolicy.css";

const PrivacyPolicy = ({ language = "en" }) => {
  const t = {
    en: {
      backHome: "← Back to Home",
      title: "Privacy Policy",
      lastUpdated: "Last updated: June 25, 2026",
      introDesc: "This Privacy Policy explains how Mesob Academy collects and protects your data. We do not sell your personal data. We are committed to providing a secure learning environment for students in Grades 9-12.",
      
      sec1Title: "1. Introduction & Agreement",
      sec1Text: "By using Mesob Academy, you agree to this policy. We do not show ads, sell your data, or share personal information. We only collect details needed to customize your study journey and verify your premium access.",
      
      sec2Title: "2. Information We Collect",
      sec2Text: "We collect basic data to build your profile, track study progress, and verify payments:",
      sec2Bullet1: "Account Profile: Your name, phone number, grade level (9-12), academic stream, and securely hashed password.",
      sec2Bullet2: "Study Progress: Quiz results, scores, flashcard progress, and Pomodoro focus intervals.",
      sec2Bullet3: "Payment Verification: Uploaded screenshots of bank deposits or mobile money receipts to verify premium activation.",
      sec2Bullet4: "Device Data: Device ID and OS version to enforce active account limits (1 active device at a time).",
      
      sec3Title: "3. Mobile App Permissions",
      sec3Text: "To work properly, our app requires the following device permissions:",
      sec3Bullet1: "Camera/Photo Library: Only used to upload transaction or deposit receipt screenshots.",
      sec3Bullet2: "Files & Storage: To download textbooks and videos for offline study.",
      sec3Bullet3: "Push Notifications: For study reminders and payment activation alerts.",
      sec3Bullet4: "Biometrics (Optional): Fingerprint or Face ID processed locally by your OS to secure your app.",
      
      sec4Title: "4. Content Protection & Anti-Piracy",
      sec4Text: "To protect educational materials, our app enforces technical controls including screenshot blocking, screen recording prevention, background screen blurs, and dynamic watermarking of your phone number on video lectures.",
      
      sec5Title: "5. Data Security & Storage",
      sec5Text: "All network traffic is encrypted via TLS. Your study records and receipt uploads are securely hosted on cloud servers. If you request account deletion, your profile and associated data will be permanently purged after a 30-day grace period.",
      
      sec6Title: "6. Your Rights & Support",
      sec6Text: "You can access, correct, or request deletion of your account and study data at any time through the app settings."
    },
    am: {
      backHome: "← ወደ መነሻ ገጽ",
      title: "የግላዊነት ፖሊሲ",
      lastUpdated: "የመጨረሻ መሻሻል፡ ሰኔ 18 ቀን 2018 ዓ.ም.",
      introDesc: "ይህ የግላዊነት ፖሊሲ ሜሶብ አካዳሚ መረጃዎን እንዴት እንደሚሰበስብ እና እንደሚጠብቅ ያብራራል። መረጃዎን ለማንም አንሸጥም። ለ9-12ኛ ክፍል ተማሪዎች ደህንነቱ የተጠበቀ የጥናት አካባቢ ለመፍጠር እንሰራለን።",
      
      sec1Title: "1. መግቢያ እና ስምምነት",
      sec1Text: "አገልግሎቱን ሲጠቀሙ በዚህ መመሪያ ተስማምተዋል። ማስታወቂያ አናሳይም፣ መረጃዎን አንሸጥም፣ ወይም ለሌላ አካል አናጋራም። መረጃ የምንሰበስበው የጥናት ሂደትዎን ለመከታተል እና ክፍያዎን ለማረጋገጥ ብቻ ነው።",
      
      sec2Title: "2. የምንሰበስበው መረጃ",
      sec2Text: "የጥናት ፕሮፋይል ለመፍጠር፣ እድገትዎን ለመከታተል እና ክፍያን ለማረጋገጥ እነዚህን መረጃዎች እንሰበስባለን፦",
      sec2Bullet1: "የመለያ መረጃ፦ የተማሪው ስም፣ ስልክ ቁጥር፣ የክፍል ደረጃ (9-12)፣ የጥናት ዘርፍ እና የይለፍ ቃል (የተመሰጠረ)።",
      sec2Bullet2: "የጥናት ሂደት፦ የጥያቄዎች ውጤቶች፣ የፍላሽ ካርድ እድገት እና የፖሞዶሮ የጥናት ጊዜ።",
      sec2Bullet3: "የክፍያ ማረጋገጫ፦ የክፍያ ደረሰኝ ፎቶ ወይም ስክሪንሾት (ፕሪሚየም ለማግበር)።",
      sec2Bullet4: "የመሣሪያ መረጃ፦ መለያ በአንድ ስልክ ላይ ብቻ እንዲሰራ ለመቆጣጠር የመሣሪያ ኮድ እና የስልክ ሲስተም።",
      
      sec3Title: "3. በመተግበሪያው የሚጠየቁ ፍቃዶች",
      sec3Text: "መተግበሪያው በትክክል እንዲሰራ የሚከተሉትን ፍቃዶች ይጠይቃል፦",
      sec3Bullet1: "የካሜራ/ጋለሪ ፍቃድ፦ የደረሰኝ ፎቶ ለማያያዝ ብቻ።",
      sec3Bullet2: "የፋይል ማስቀመጫ ፍቃድ፦ ቪዲዮዎችን እና መጽሐፍትን ያለ ኢንተርኔት ለማንበብ።",
      sec3Bullet3: "የማሳወቂያ ፍቃድ፦ የጥናት አስታዋሾችን እና የክፍያ መልዕክቶችን ለመላክ።",
      sec3Bullet4: "ባዮሜትሪክስ (አማራጭ)፦ መተግበሪያውን በጣት አሻራ ወይም በፊት ገፅ ለመቆለፍ።",
      
      sec4Title: "4. የይዘት ጥበቃ እና ፀረ-ኮፒ መርሆዎች",
      sec4Text: "ቪዲዮዎችና መጽሐፍት ያለፈቃድ እንዳይሰራጩ መተግበሪያው ስክሪንሾት መቅረጽን ይከለክላል፣ ወደ ጀርባ ሲሸጋገር ገጹን ይደብዝዛል፣ እንዲሁም ቪዲዮዎች ላይ የስልክ ቁጥር የውሃ ምልክት ያሳያል።",
      
      sec5Title: "5. የደህንነት ጥበቃ እና መረጃ ማቆያ",
      sec5Text: "ሁሉም መረጃዎች በTLS ኢንክሪፕሽን ተመስጥረው በአስተማማኝ የደመና (cloud) አገልጋዮች ላይ ይቀመጣሉ። አካውንት እንዲጠፋ ከጠየቁ ከ30 ቀናት በኋላ ሁሉም መረጃዎች በቋሚነት ሙሉ በሙሉ ይሰረዛሉ።",
      
      sec6Title: "6. መብቶችዎ እና ድጋፍ",
      sec6Text: "መረጃዎን የማግኘት፣ የማረም ወይም የማጥፋት መብት አለዎት። ይህንን በመተግበሪያው ቅንብሮች ውስጥ ማድረግ ይችላሉ።"
    }
  };

  const curr = t[language] || t.en;

  return (
    <div className="privacy-document-layout">
      <div className="container privacy-document-inner">
        {/* Back Link */}
        <div className="privacy-document-header">
          <a href="/#" className="privacy-back-link">
            {curr.backHome}
          </a>
        </div>

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
              <li>{curr.sec2Bullet1}</li>
              <li>{curr.sec2Bullet2}</li>
              <li>{curr.sec2Bullet3}</li>
              <li>{curr.sec2Bullet4}</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="privacy-doc-section">
            <h2>{curr.sec3Title}</h2>
            <p>{curr.sec3Text}</p>
            <ul className="privacy-doc-list">
              <li>{curr.sec3Bullet1}</li>
              <li>{curr.sec3Bullet2}</li>
              <li>{curr.sec3Bullet3}</li>
              <li>{curr.sec3Bullet4}</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="privacy-doc-section">
            <h2>{curr.sec4Title}</h2>
            <p>{curr.sec4Text}</p>
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

        {/* Back Link Footer */}
        <div className="privacy-document-footer">
          <a href="/#" className="privacy-back-link">
            {curr.backHome}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
