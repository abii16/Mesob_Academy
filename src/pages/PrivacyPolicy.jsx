import React from "react";
import "../styles/pages/PrivacyPolicy.css";

const PrivacyPolicy = ({ language = "en" }) => {
  const t = {
    en: {
      backHome: "← Back to Home",
      title: "Privacy Policy",
      lastUpdated: "Last updated: June 13, 2026",
      introDesc: "This Privacy Policy explains how Mesob Academy collects and protects your data. We do not sell your personal data. We are committed to providing a secure learning environment for students in Grades 9-12.",
      
      sec1Title: "1. Introduction & Agreement",
      sec1Text: "By using Mesob Academy, you agree to this Privacy Policy. We do not show ads, sell your data, or share personal info. We only collect details needed to customize your study journey and verify your premium access.",
      
      sec2Title: "2. Information We Collect",
      sec2Text: "We collect basic data to build your profile, track study progress, and verify payments:",
      
      sec2Sub1Title: "2.1 Account & Profile Information",
      sec2Sub1Text: "We collect your name, phone number, grade level (9-12), account role, and password. Passwords are securely hashed. Social sign-ins provide your name and auth token.",
      
      sec2Sub2Title: "2.2 Academic & Study Progress Data",
      sec2Sub2Text: "We log your quiz answers, scores, study duration, flashcard progress, Pomodoro intervals, Arena contest scores, and community board posts.",
      
      sec2Sub3Title: "2.3 Payment Verification Receipts",
      sec2Sub3Text: "When upgrading to a premium package, you upload a screenshot or photo of your bank deposit or transfer receipt (CBE, telebirr, Abay, Awash). Our admins review the receipt to unlock your package within 24 hours.",
      
      sec2Sub4Title: "2.4 Device & System Data",
      sec2Sub4Text: "We collect your device ID (UUID), OS version, app version, and sync logs to enforce active session limits.",
      
      sec3Title: "3. Mobile App Permissions Used",
      sec3Text: "Our mobile app requires these device permissions to work properly:",
      
      sec3Sub1Title: "3.1 Camera & Photo Library Access",
      sec3Sub1Text: "Used only to upload your transaction or deposit receipt screenshot. We do not access other photos.",
      
      sec3Sub2Title: "3.2 Files & Storage Permission",
      sec3Sub2Text: "Used to save video lectures and mock exam booklets on your phone for offline study.",
      
      sec3Sub3Title: "3.3 Push Notifications",
      sec3Sub3Text: "Used for study reminders, Pomodoro alerts, and payment verification updates.",
      
      sec3Sub4Title: "3.4 Biometric Authentication (Optional)",
      sec3Sub4Text: "Fingerprint or Face ID is processed locally by your device OS to lock your app. We never receive or store biometric data.",
      
      sec4Title: "4. Content Protection & Anti-Piracy",
      sec4Text: "To prevent unauthorized sharing of video lessons and study sheets, the app uses technical protections:",
      sec4Bullet1: "Screenshots and screen recording are blocked inside study areas.",
      sec4Bullet2: "App contents blur when the app loses focus or goes to the background.",
      sec4Bullet3: "Videos display a subtle watermark of your user info to prevent recording.",
      
      sec5Title: "5. Data Sharing & Cloud Infrastructure",
      sec5Text: "We do not sell or lease student data. Our secure, modern cloud hosting infrastructure consists of:",
      sec5Item1: "Cloud hosting and serverless API gateways to ensure platform security, uptime, speed, and standard operational logs.",
      sec5Item2: "Secure cloud database services to store student profile information, quiz performance history, and flashcard spacing intervals.",
      sec5Item3: "Secure cloud object storage services to store offline learning booklets, cached video files, and uploaded payment confirmation receipts.",
      
      sec6Title: "6. Security & Encryption",
      sec6Text: "All data traffic between the app and our servers is encrypted using Transport Layer Security (TLS). User accounts are secured using cryptographic hashing. You can further lock the app locally using biometric controls.",
      
      sec7Title: "7. Data Retention & Account Deletion",
      sec7Text: "We keep your study data while your profile is active. If you request account deletion, it is held for 30 days (grace period). After 30 days, your profile, flashcards, quiz history, and receipts are permanently purged.",
      
      sec8Title: "8. Your Rights & Support",
      sec8Text: "You can access, correct, or request deletion of your account and study data at any time through the application settings."
    },
    am: {
      backHome: "← ወደ መነሻ ገጽ",
      title: "የግላዊነት ፖሊሲ",
      lastUpdated: "የመጨረሻ መሻሻል፡ ሰኔ 6 ቀን 2018 ዓ.ም.",
      introDesc: "ይህ የግላዊነት ፖሊሲ ሜሶብ አካዳሚ መረጃዎን እንዴት እንደሚሰበስብ እና እንደሚጠብቅ ያብራራል። መረጃዎን ለማንም አንሸጥም። ለ9-12ኛ ክፍል ተማሪዎች ደህንነቱ የተጠበቀ የጥናት አካባቢ ለመፍጠር እንሰራለን።",
      
      sec1Title: "1. መግቢያ እና ስምምነት",
      sec1Text: "አገልግሎቱን ሲጠቀሙ በዚህ መመሪያ ተስማምተዋል። ማስታወቂያ አናሳይም፣ መረጃዎን አንሸጥም፣ ወይም ለሌላ አካል አናጋራም። መረጃ የምንሰበስበው የጥናት ሂደትዎን ለመከታተል እና ክፍያዎን ለማረጋገጥ ብቻ ነው።",
      
      sec2Title: "2. የምንሰበስበው መረጃ",
      sec2Text: "የጥናት ፕሮፋይል ለመፍጠር፣ እድገትዎን ለመከታተል እና ክፍያን ለማረጋገጥ እነዚህን መረጃዎች እንሰበስባለን፦",
      
      sec2Sub1Title: "2.1 የመለያ እና የፕሮፋይል መረጃ",
      sec2Sub1Text: "የተማሪውን ስም፣ ስልክ ቁጥር፣ የክፍል ደረጃ (9-12) እና የይለፍ ቃል እንሰበስባለን። የይለፍ ቃሎች በምስጠራ ኮድ (hash) ይቀመጣሉ። በማህበራዊ ሚዲያ ከገቡ ስም እና የመለያ ኮድ እናስቀምጣለን።",
      
      sec2Sub2Title: "2.2 የጥናት እና የውጤት ትንተና መረጃ",
      sec2Sub2Text: "የፈተና ጥያቄዎች ታሪክን (ውጤት፣ የፈጀበት ሰዓት)፣ የፍላሽ ካርድ እድገት፣ የፖሞዶሮ ጥናት ሰዓት፣ የአሬና ውድድር ውጤት እና በማህበረሰቡ ሰሌዳ ላይ የሚፃፉ ሀሳቦችን እናስቀምጣለን።",
      
      sec2Sub3Title: "2.3 የክፍያ ማረጋገጫ ደረሰኞች",
      sec2Sub3Text: "ለፕሪሚየም ጥቅሎች (ንግድ ባንክ፣ ቴሌብር፣ አባይ፣ አዋሽ) የከፈሉበትን የደረሰኝ ፎቶ ወይም ስክሪንሾት ሲያያዙ፣ አስተዳዳሪዎቻችን አይተው በ24 ሰዓት ውስጥ አካውንትዎን ይከፍታሉ።",
      
      sec2Sub4Title: "2.4 የመሣሪያ እና የስርዓት መረጃ",
      sec2Sub4Text: "የመሣሪያ መለያ ኮድ (UUID)፣ የስልክ ሲስተም፣ የመተግበሪያ ስሪት እና የኔትወርክ ሁኔታን በአንድ አካውንት ከአንድ በላይ ስልክ እንዳይገባ ለመቆጣጠር እንሰበስባለን።",
      
      sec3Title: "3. በመተግበሪያው የሚጠየቁ ፍቃዶች",
      sec3Text: "መተግበሪያው በትክክል እንዲሰራ የሚከተሉትን ፍቃዶች ይጠይቃል፦",
      
      sec3Sub1Title: "3.1 የካሜራ እና የጋለሪ ፍቃድ",
      sec3Sub1Text: "የከፈሉበትን የደረሰኝ ፎቶ ለማያያዝ ብቻ ያገለግላል። ሌላ ፎቶ አናይም።",
      
      sec3Sub2Title: "3.2 የፋይል ማስቀመጫ ፍቃድ",
      sec3Sub2Text: "ቪዲዮዎችን እና የጥናት ሉሆችን ያለ ኢንተርኔት ለማንበብ ስልክዎ ላይ ለማስቀመጥ ያገለግላል።",
      
      sec3Sub3Title: "3.3 የማሳወቂያ ፍቃድ (Notifications)",
      sec3Sub3Text: "የጥናት አስታዋሾችን፣ የፖሞዶሮ ጊዜ ማብቂያዎችን እና የክፍያ መልዕክቶችን ለመላክ ያገለግላል።",
      
      sec3Sub4Title: "3.4 የጣት አሻራ/የፊት ገፅ መለያ (ባዮሜትሪክስ)",
      sec3Sub4Text: "መተግበሪያውን በጣት አሻራ ለመቆለፍ ሲሆን መረጃው በስልክዎ ብቻ የሚያልቅና እኛ ጋር የማይመጣ ነው።",
      
      sec4Title: "4. የይዘት ጥበቃ እና ፀረ-ኮፒ መርሆዎች",
      sec4Text: "ቪዲዮዎችና መጽሐፍት ያለፈቃድ እንዳይሰራጩ መተግበሪያው እነዚህን መከላከያዎች ይጠቀማል፦",
      sec4Bullet1: "በጥናት ገጾች ላይ ስክሪንሾት ማንሳት ወይም ቪዲዮ መቅረጽ አይቻልም።",
      sec4Bullet2: "መተግበሪያው ወደ ጀርባ (background) ሲሸጋገር ገጹ ወዲያውኑ ይደበዝዛል።",
      sec4Bullet3: "የቪዲዮ ትምህርቶች ላይ ስልክ ቁጥርዎ በውሃ ምልክትነት (watermark) ይታያል።",
      
      sec5Title: "5. መረጃ ማጋራት እና የአገልጋይ ደመና",
      sec5Text: "የተማሪዎችን መረጃ አንሸጥም ወይም አናከራይም። መረጃዎችን የምናስቀምጥባቸው የደመና (cloud) አገልጋዮች፦",
      sec5Item1: "የአይፒ አድራሻ እና የስርዓት ጥያቄዎችን በጊዜያዊነት በመመዝገብ የመተግበሪያውን ጥያቄዎች (API requests) የሚያስተናግዱ እና የፕላትፎርሙን ደህንነት የሚጠብቁ የደመና አገልጋዮች።",
      sec5Item2: "የተማሪዎችን መለያ፣ የፈተና ውጤቶች፣ የጥናት ስታቲስቲክስ እና የክፍያ መዝገቦችን በደህንነት የሚያከማቹ አስተማማኝ የዳታቤዝ አገልግሎቶች።",
      sec5Item3: "ተማሪዎች የሚያወርዷቸውን ቡክሌቶች፣ የቪዲዮ ትምህርቶች እና በመተግበሪያው ውስጥ የሚላኩ የክፍያ ማረጋገጫ ደረሰኝ ፎቶዎችን በደህንነት የሚያከማቹ የፋይል ማከማቻ አገልግሎቶች።",
      
      sec6Title: "6. ደህንነት እና ምስጠራ",
      sec6Text: "መረጃዎች በTLS ኢንክሪፕሽን ተመስጥረው ይተላለፋሉ። የይለፍ ቃል በምስጠራ ኮድ (hash) የተጠበቀ ነው። መተግበሪያውን በጣት አሻራ መቆለፍ ይችላሉ።",
      
      sec7Title: "7. መረጃ ማቆያ እና አካውንት ማጥፋት",
      sec7Text: "አካውንትዎ እስካለ ድረስ የጥናት ታሪክዎን እናስቀምጣለን። አካውንት እንዲጠፋ ከጠየቁ ከ30 ቀናት በኋላ አካውንቱ፣ የጥናት ሪከርዶች እና ደረሰኞች በቋሚነት ሙሉ በሙሉ ይሰረዛሉ።",
      
      sec8Title: "8. መብቶችዎ እና ድጋፍ",
      sec8Text: "መረጃዎን የማግኘት፣ የማረም ወይም የማጥፋት መብት አለዎት። ይህንን በመተግበሪያው ቅንብሮች ውስጥ ማድረግ ይችላሉ።"
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

            <h3>{curr.sec2Sub1Title}</h3>
            <p>{curr.sec2Sub1Text}</p>

            <h3>{curr.sec2Sub2Title}</h3>
            <p>{curr.sec2Sub2Text}</p>

            <h3>{curr.sec2Sub3Title}</h3>
            <p>{curr.sec2Sub3Text}</p>

            <h3>{curr.sec2Sub4Title}</h3>
            <p>{curr.sec2Sub4Text}</p>
          </div>

          {/* Section 3 */}
          <div className="privacy-doc-section">
            <h2>{curr.sec3Title}</h2>
            <p>{curr.sec3Text}</p>

            <h3>{curr.sec3Sub1Title}</h3>
            <p>{curr.sec3Sub1Text}</p>

            <h3>{curr.sec3Sub2Title}</h3>
            <p>{curr.sec3Sub2Text}</p>

            <h3>{curr.sec3Sub3Title}</h3>
            <p>{curr.sec3Sub3Text}</p>

            <h3>{curr.sec3Sub4Title}</h3>
            <p>{curr.sec3Sub4Text}</p>
          </div>

          {/* Section 4 */}
          <div className="privacy-doc-section">
            <h2>{curr.sec4Title}</h2>
            <p>{curr.sec4Text}</p>
            <ul className="privacy-doc-list">
              <li>
                <strong>{language === 'am' ? "የስክሪን ቀረጻ መከልከል፦" : "Screenshot Protection:"}</strong> {curr.sec4Bullet1}
              </li>
              <li>
                <strong>{language === 'am' ? "የመተግበሪያ መደብዘዝ፦" : "App State Hiding:"}</strong> {curr.sec4Bullet2}
              </li>
              <li>
                <strong>{language === 'am' ? "የውሃ ምልክት ምልክት ማሳያ፦" : "Dynamic Watermarking:"}</strong> {curr.sec4Bullet3}
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="privacy-doc-section">
            <h2>{curr.sec5Title}</h2>
            <p>{curr.sec5Text}</p>
            <ul className="privacy-doc-list">
              <li>{curr.sec5Item1}</li>
              <li>{curr.sec5Item2}</li>
              <li>{curr.sec5Item3}</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="privacy-doc-section">
            <h2>{curr.sec6Title}</h2>
            <p>{curr.sec6Text}</p>
          </div>

          {/* Section 7 */}
          <div className="privacy-doc-section">
            <h2>{curr.sec7Title}</h2>
            <p>{curr.sec7Text}</p>
          </div>

          {/* Section 8 */}
          <div className="privacy-doc-section">
            <h2>{curr.sec8Title}</h2>
            <p>{curr.sec8Text}</p>
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
