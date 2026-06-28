import React from "react";
import "../styles/pages/PrivacyPolicy.css";

const PrivacyPolicy = ({ language = "en" }) => {
  const t = {
    en: {
      backHome: "← Back to Home",
      title: "Privacy Notice",
      lastUpdated: "Last updated: June 28, 2026",
      introText1: "This privacy notice for Mesob Academy (\"Company\", \"we\", \"us\", or \"our\"), describes how and why we might collect, store, use, and/or share (\"process\") your information when you use our services (\"Services\"), such as when you:",
      introBullet1: "Download and use our mobile application (Mesob Academy), or any other application of ours that links to this privacy notice",
      introBullet2: "Engage with us in other related ways, including any sales, marketing, or events",
      questionsConcerns: "Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at support@mesobacademy.com.",
      
      tocTitle: "TABLE OF CONTENTS",
      
      sec1Title: "1. WHAT INFORMATION DO WE COLLECT?",
      sec1Intro: "We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.",
      sec1Sub1: "Personal information you disclose to us",
      sec1Sub1Desc: "The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:",
      sec1Bullet1: "Account Profile Data: Names, phone numbers, email addresses, grade level, academic stream, and securely hashed passwords.",
      sec1Bullet2: "Payment Log Data: Uploaded screenshots of payment receipts or transaction references used to activate premium access.",
      sec1Bullet3: "Mobile Device Access: We may request access or permission to certain features from your mobile device, including your mobile device's camera, photo library, storage for offline downloads, and push notifications. You can change these permissions at any time in your device's settings.",
      sec1Bullet4: "Device and Usage Data: We automatically collect information such as device ID, model, operating system, system configuration, browser type, IP address, log and usage data (activity timestamps, viewed files, searches, and error reports/crash logs).",

      sec2Title: "2. HOW DO WE PROCESS YOUR INFORMATION?",
      sec2Intro: "We process your personal information for a variety of reasons, depending on how you interact with our Services, including:",
      sec2Bullet1: "To facilitate account creation and authentication: We process your information so you can create and log in to your account, as well as keep your account in working order.",
      sec2Bullet2: "To enforce active device limits: We process device data to ensure that user accounts comply with active login limits (e.g. one active device at a time).",
      sec2Bullet3: "To respond to user inquiries and offer support: We process your information to respond to your support queries and solve any potential issues you might have.",

      sec3Title: "3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?",
      sec3Intro: "We do not sell your personal data. We may share information in specific situations described below or with the following third parties:",
      sec3Bullet1: "Web and Mobile Analytics: We may share data with service providers to monitor and analyze the use of our Services, such as Google Analytics, Firebase Analytics, and Firebase Crashlytics.",
      sec3Bullet2: "Business Transfers: We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.",

      sec4Title: "4. HOW LONG DO WE KEEP YOUR INFORMATION?",
      sec4Intro: "We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law. No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an active account with us.",
      sec4Desc2: "When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.",

      sec5Title: "5. HOW DO WE KEEP YOUR INFORMATION SAFE?",
      sec5Intro: "We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.",

      sec6Title: "6. WHAT ARE YOUR PRIVACY RIGHTS?",
      sec6Intro: "You may review, change, or terminate your account at any time. If you have questions or comments about your privacy rights, you may email us at support@mesobacademy.com.",
      sec6Sub: "Account Information",
      sec6SubDesc: "If you would at any time like to review or change the information in your account or terminate your account, you can do so through the app settings or by contacting us. Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms, or comply with legal requirements.",

      sec7Title: "7. CONTROLS FOR DO-NOT-TRACK FEATURES",
      sec7Intro: "Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (\"DNT\") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.",

      sec8Title: "8. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?",
      sec8Intro: "Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information. Under California Civil Code Section 1798.83 (the \"Shine The Light\" law), California residents may request and obtain from us, once a year and free of charge, information about categories of personal information we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year.",

      sec9Title: "9. DO WE MAKE UPDATES TO THIS NOTICE?",
      sec9Intro: "Yes, we will update this notice as necessary to stay compliant with relevant laws. The updated version will be indicated by an updated \"Revised\" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.",

      sec10Title: "10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?",
      sec10Intro: "If you have questions or comments about this notice, you may email us at support@mesobacademy.com or by post to:",
      sec10Addr: "Mesob Academy, Bole, Addis Ababa, Ethiopia",

      sec11Title: "11. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?",
      sec11Intro: "Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please submit a request by contacting us at support@mesobacademy.com.",
      
      createdUsing: "This privacy policy was created with reference to standard privacy regulations."
    },
    am: {
      backHome: "← ወደ መነሻ ገጽ",
      title: "የግላዊነት ማሳወቂያ",
      lastUpdated: "የመጨረሻ መሻሻል፡ ሰኔ 22 ቀን 2018 ዓ.ም.",
      introText1: "ይህ የሜሶብ አካዳሚ (\"ኩባንያ\"፣ \"እኛ\"፣ \"እኛን\" ወይም \"የእኛ\") የግላዊነት ማሳወቂያ አገልግሎቶቻችንን (\"አገልግሎቶች\") ሲጠቀሙ መረጃዎን እንዴት እና ለምን እንደምንሰበስብ፣ እንደምናከማች፣ እንደምንጠቀም እና/ወይም እንደምናጋራ (\"ማስተናገድ\") ያብራራል፣ ለምሳሌ ያህል፦",
      introBullet1: "የእኛን የሞባይል መተግበሪያ (ሜሶብ አካዳሚ) ወይም ከዚህ የግላዊነት ማሳወቂያ ጋር የተያያዘ ማንኛውንም መተግበሪያችንን ሲያወርዱ እና ሲጠቀሙ",
      introBullet2: "በማንኛውም ሽያጭ፣ ግብይት ወይም ዝግጅቶች ጨምሮ በሌሎች ተዛማጅ መንገዶች ከእኛ ጋር መስተጋብር ሲያደርጉ",
      questionsConcerns: "ጥያቄዎች ወይም ስጋቶች አሉዎት? ይህንን የግላዊነት ማሳወቂያ ማንበብዎ የግላዊነት መብቶችዎን እና ምርጫዎችዎን ለመረዳት ይረዳዎታል። በፖሊሲዎቻችን እና አሰራሮቻችን ካልተስማሙ እባክዎ አገልግሎቶቻችንን አይጠቀሙ። አሁንም ማንኛውም ጥያቄ ወይም ስጋት ካለዎት እባክዎ በ support@mesobacademy.com ያግኙን።",
      
      tocTitle: "ማውጫ",
      
      sec1Title: "1. ምን ዓይነት መረጃ እንሰበስባለን?",
      sec1Intro: "በአገልግሎቶቹ ላይ ሲመዘገቡ፣ ስለእኛ ወይም ስለ ምርቶቻችን መረጃ ለማግኘት ፍላጎትዎን ሲገልጹ፣ በአገልግሎቶቹ ላይ በሚደረጉ እንቅስቃሴዎች ላይ ሲሳተፉ ወይም በሌላ መልኩ እኛን ሲያነጋግሩ በፈቃደኝነት የሚሰጡንን የግል መረጃዎችን እንሰበስባለን።",
      sec1Sub1: "እርስዎ ለእኛ የሚገልጹት የግል መረጃ",
      sec1Sub1Desc: "የምንሰበስበው የግል መረጃ ከእኛ እና ከአገልግሎቶቹ ጋር ባደረጉት ግንኙነት፣ በሚያደርጉት ምርጫዎች እና በሚጠቀሙባቸው ምርቶች እና ባህሪያት ላይ ይወሰናል። የምንሰበስበው የግል መረጃ የሚከተሉትን ሊያካትት ይችላል፦",
      sec1Bullet1: "የመለያ ፕሮፋይል መረጃ፦ ስሞች፣ የስልክ ቁጥሮች፣ የኢሜል አድራሻዎች፣ የክፍል ደረጃ፣ የትምህርት ዘርፍ እና ደህንነታቸው የተጠበቁ የይለፍ ቃላት።",
      sec1Bullet2: "የክፍያ ምዝግብ ማስታወሻዎች፦ የፕሪሚየም አገልግሎት ለማግበር የተጫኑ የክፍያ ደረሰኞች ፎቶዎች ወይም የግብይት ማጣቀሻዎች።",
      sec1Bullet3: "የሞባይል መሣሪያ መዳረሻ ፍቃድ፦ ከሞባይል መሣሪያዎ የተወሰኑ ባህሪያትን ለመጠቀም ፍቃድ ልንጠይቅ እንችላለን፤ እነዚህም ካሜራ፣ ፎቶ ጋለሪ፣ መጽሐፍትን ከመስመር ውጭ ለማውረድ የሚያስፈልግ ፋይል ማስቀመጫ እና ማሳወቂያዎችን (notifications) ያካትታሉ። እነዚህን ፈቃዶች በማንኛውም ጊዜ በመሣሪያዎ ቅንብሮች ውስጥ መለወጥ ይችላሉ።",
      sec1Bullet4: "የመሣሪያ እና የአጠቃቀም መረጃ፦ እንደ የመሣሪያ መለያ (Device ID)፣ ሞዴል፣ ኦፕሬቲንግ ሲስተም፣ የስርዓት ውቅር፣ የአይፒ (IP) አድራሻ፣ የአጠቃቀም ምዝግብ ማስታወሻዎች (የእንቅስቃሴ ጊዜያት፣ የታዩ ፋይሎች፣ ፍለጋዎች እና የስህተት ሪፖርቶች/ብልሽቶች) ያሉ መረጃዎችን በራስ-ሰር እንሰበስባለን።",

      sec2Title: "2. መረጃዎን እንዴት እንጠቀማለን?",
      sec2Intro: "ለተለያዩ ምክንያቶች የእርስዎን የግል መረጃ እናስተናግዳለን፣ ይህም ከአገልግሎቶቻችን ጋር በሚያደርጉት መስተጋብር ላይ ይወሰናል፦",
      sec2Bullet1: "መለያ መፍጠር እና ማረጋገጥን ለማመቻቸት፦ መለያዎን መፍጠር እና መግባት እንዲችሉ እንዲሁም መለያዎን በተገቢው ሁኔታ እንዲሰራ ለማድረግ መረጃዎን እንጠቀማለን።",
      sec2Bullet2: "የመሣሪያ ገደቦችን ተግባራዊ ለማድረግ፦ የተጠቃሚ መለያዎች ከተፈቀደው የአንድ ጊዜ መግቢያ ገደብ (ለምሳሌ በአንድ ጊዜ በአንድ ስልክ ብቻ መግባት) ጋር መጣጣማቸውን ለማረጋገጥ የመሣሪያ መረጃን እንጠቀማለን።",
      sec2Bullet3: "ለተጠቃሚዎች ጥያቄ ምላሽ ለመስጠት እና ድጋፍ ለመስጠት፦ የድጋፍ ጥያቄዎችዎን ለመመለስ እና ሊያጋጥሙዎት የሚችሉ ችግሮችን ለመፍታት መረጃዎን እንጠቀማለን።",

      sec3Title: "3. መረጃዎን መቼ እና ለማን እናጋራለን?",
      sec3Intro: "የእርስዎን የግል መረጃ ለማንም አንሸጥም። ከዚህ በታች በተገለጹት ልዩ ሁኔታዎች ወይም ከሚከተሉት ሶስተኛ ወገኖች ጋር መረጃን ልናጋራ እንችላለን፦",
      sec3Bullet1: "የድር እና የሞባይል ትንታኔዎች (Analytics)፦ የአገልግሎቶቻችንን አጠቃቀም ለመከታተል እና ለመተንተን ከሚረዱ አገልግሎት ሰጪዎች ጋር መረጃን ልናጋራ እንችላለን፤ ለምሳሌ Google Analytics፣ Firebase Analytics እና Firebase Crashlytics።",
      sec3Bullet2: "የንግድ ዝውውሮች (Business Transfers)፦ ከማንኛውም ውህደት፣ የኩባንያ ንብረቶች ሽያጭ፣ ፋይናንስ ወይም የንግዳችንን በሙሉ ወይም ከፊል በሌላ ኩባንያ መግዛት ጋር በተያያዘ መረጃዎን ልናጋራ ወይም ልናስተላልፍ እንችላለን።",

      sec4Title: "4. መረጃዎን ለምን ያህል ጊዜ እናስቀምጣለን?",
      sec4Intro: "የበለጠ ረጅም የማቆያ ጊዜ በሕግ ካልተጠየቀ ወይም ካልተፈቀደ በስተቀር በዚህ የግላዊነት ማሳወቂያ ውስጥ የተገለጹትን ዓላማዎች ለማሳካት አስፈላጊ ለሆነ ጊዜ ብቻ የግል መረጃዎን እናስቀምጣለን። ተጠቃሚዎች ንቁ መለያ ካላቸው ጊዜ በላይ የግል መረጃን ማቆየት አያስፈልገንም።",
      sec4Desc2: "የእርስዎን የግል መረጃ ለማስተናገድ ቀጣይነት ያለው ህጋዊ የንግድ ፍላጎት ከሌለን መረጃውን እንሰርዛለን ወይም ማንነቱ እንዳይታወቅ እናደርጋለን፤ ወይም ይህ የማይቻል ከሆነ (ለምሳሌ የግል መረጃዎ በምትኬ መዝገቦች ውስጥ ስለተከማቸ) መረጃው እስኪሰረዝ ድረስ ደህንነቱ በተጠበቀ ሁኔታ እናስቀምጠዋለን።",

      sec5Title: "5. መረጃዎን እንዴት ደህንነቱ የተጠበቀ እናደርጋለን?",
      sec5Intro: "የምናስተናግደውን ማንኛውንም የግል መረጃ ደህንነት ለመጠበቅ የተነደፉ ተገቢ እና ምክንያታዊ የሆኑ ቴክኒካዊ እና ድርጅታዊ የደህንነት እርምጃዎችን ተግባራዊ አድርገናል። ነገር ግን፣ መረጃዎን ለመጠበቅ የምናደርገውን ጥረት እና ጥንቃቄዎች ቢኖሩም፣ በበይነመረብ ላይ የሚደረግ ማንኛውም የኤሌክትሮኒክስ ስርጭት ወይም የመረጃ ማከማቻ ቴክኖሎጂ 100% ደህንነቱ የተጠበቀ ነው ተብሎ ዋስትና ሊሰጥ አይችልም። ስለሆነም ሃከሮች፣ የሳይበር ወንጀለኞች ወይም ሌሎች ያልተፈቀደላቸው ሶስተኛ ወገኖች የደህንነታችንን ስርዓት ጥሰው መረጃዎን በሌላ መንገድ ሊሰርቁ ወይም ሊያሻሽሉ አይችሉም ብለን ቃል መግባት ወይም ዋስትና መስጠት አንችልም። የግል መረጃን ወደ አገልግሎቶቻችን ማስተላለፍ በራስዎ ኃላፊነት ነው። አገልግሎቶቹን ደህንነቱ በተጠበቀ አካባቢ ውስጥ ብቻ ማግኘት አለብዎት።",

      sec6Title: "6. የግላዊነት መብቶችዎ ምንድናቸው?",
      sec6Intro: "በማንኛውም ጊዜ መለያዎን መገምገም፣ መለወጥ ወይም ማቋረጥ ይችላሉ። ስለ ግላዊነት መብቶችዎ ጥያቄዎች ወይም አስተያየቶች ካሉዎት በ support@mesobacademy.com ኢሜል ሊልኩልን ይችላሉ።",
      sec6Sub: "የመለያ መረጃ",
      sec6SubDesc: "በማንኛውም ጊዜ በመለያዎ ውስጥ ያለውን መረጃ ለመገምገም ወይም ለመለወጥ ወይም መለያዎን ለማቋረጥ ከፈለጉ፣ በመተግበሪያው ቅንብሮች ውስጥ ማድረግ ወይም እኛን ማግኘት ይችላሉ። መለያዎን ለማቋረጥ ለሚያቀርቡት ጥያቄ ምላሽ በመስጠት መለያዎን እና መረጃዎን ከንቁ የውሂብ ጎታዎቻችን እናጠፋለን። ነገር ግን ማጭበርበርን ለመከላከል፣ ችግሮችን ለመፍታት፣ ለማንኛውም ምርመራ ለመርዳት፣ የአገልግሎት ውሎቻችንን ተግባራዊ ለማድረግ ወይም የህግ መስፈርቶችን ለማክበር አንዳንድ መረጃዎችን በመዝገቦቻችን ውስጥ ልናቆይ እንችላለን።",

      sec7Title: "7. DO-NOT-TRACK (አትከተለኝ) ባህሪያት መቆጣጠሪያዎች",
      sec7Intro: "አብዛኛዎቹ የድር አሳሾች (browsers) እና አንዳንድ የሞባይል ኦፕሬቲንግ ሲስተሞች እና የሞባይል መተግበሪያዎች የእርስዎን የመስመር ላይ አሰሳ እንቅስቃሴዎች እንዳይከታተሉ ምርጫዎን ለማሳወቅ የሚያስችል Do-Not-Track (\"DNT\") ባህሪ ወይም ቅንብር ያካትታሉ። በዚህ ደረጃ፣ የDNT ምልክቶችን ለመለየት እና ተግባራዊ ለማድረግ የሚያስችል ወጥ የሆነ የቴክኖሎጂ መስፈርት አልተጠናቀቀም። ስለሆነም በአሁኑ ጊዜ ለDNT አሳሽ ምልክቶች ወይም መስመር ላይ እንዳይከታተሉ በራስ-ሰር ለሚያሳውቅ ለማንኛውም ሌላ ዘዴ ምላሽ አንሰጥም።",

      sec8Title: "8. የካሊፎርኒያ ነዋሪዎች ልዩ የግላዊነት መብቶች አሏቸው?",
      sec8Intro: "አዎ፣ የካሊፎርኒያ ነዋሪ ከሆኑ፣ የግል መረጃዎን ከመድረስ ጋር በተያያዘ የተወሰኑ መብቶች ተሰጥቶዎታል። በካሊፎርኒያ ሲቪል ኮድ ክፍል 1798.83 መሠረት፣ የካሊፎርኒያ ነዋሪዎች በዓመት አንድ ጊዜ እና ከክፍያ ነፃ ለቀጥታ ግብይት ዓላማዎች ለሶስተኛ ወገኖች የገለጥናቸውን የግል መረጃዎች ምድቦች እና መረጃዎቻቸውን ያጋራናቸውን የሶስተኛ ወገኖች ስም እና አድራሻ እንዲሰጣቸው መጠየቅ እና ማግኘት ይችላሉ።",

      sec9Title: "9. በዚህ ፖሊሲ ላይ ማሻሻያዎችን እናደርጋለን?",
      sec9Intro: "አዎ፣ ከሚመለከታቸው ህጎች ጋር ተጣጥሞ ለመኖር እንደ አስፈላጊነቱ ይህንን ማሳወቂያ እናሻሽላለን። የዘመነው ስሪት በተሻሻለው \"Revised\" ቀን የሚጠቆም ሲሆን የዘመነው ስሪት ተደራሽ በሆነበት ቅጽበት ተግባራዊ ይሆናል። መረጃዎን እንዴት እየጠበቅን እንደሆነ ለማወቅ ይህንን የግላዊነት ማሳወቂያ በተደጋጋሚ እንዲገመግሙ እናበረታታዎታለን።",

      sec10Title: "10. በዚህ ፖሊሲ ዙሪያ እንዴት ሊያገኙን ይችላሉ?",
      sec10Intro: "ስለዚህ ማሳወቂያ ጥያቄዎች ወይም አስተያየቶች ካሉዎት በ support@mesobacademy.com ኢሜል ሊልኩልን ወይም በፖስታ ወደሚከተለው አድራሻ መላክ ይችላሉ፦",
      sec10Addr: "ሜሶብ አካዳሚ፣ ቦሌ፣ አዲስ አበባ፣ ኢትዮጵያ",

      sec11Title: "11. የምንሰበስበውን መረጃ እንዴት መገምገም፣ ማሻሻል ወይም ማጥፋት ይችላሉ?",
      sec11Intro: "በሀገርዎ ህጎች ላይ በመመስረት ከእርስዎ የምንሰበስበውን የግል መረጃ የመድረስ፣ የመለወጥ ወይም የማጥፋት መብት ሊኖርዎት ይችላል። የግል መረጃዎን ለመገምገም፣ ለማሻሻል ወይም ለማጥፋት ጥያቄ ለማቅረብ እባክዎ በ support@mesobacademy.com በኩል ያግኙን።",
      
      createdUsing: "ይህ የግላዊነት ፖሊሲ የተዘጋጀው መደበኛ የግላዊነት ደንቦችን መሰረት በማድረግ ነው።"
    }
  };

  const curr = t[language] || t.en;

  // Sections config for TOC anchor navigation
  const sections = [
    { id: "infocollect", title: curr.sec1Title },
    { id: "infouse", title: curr.sec2Title },
    { id: "whoshare", title: curr.sec3Title },
    { id: "inforetain", title: curr.sec4Title },
    { id: "infosafe", title: curr.sec5Title },
    { id: "privacyrights", title: curr.sec6Title },
    { id: "DNT", title: curr.sec7Title },
    { id: "caresidents", title: curr.sec8Title },
    { id: "policyupdates", title: curr.sec9Title },
    { id: "contact", title: curr.sec10Title },
    { id: "request", title: curr.sec11Title }
  ];

  return (
    <div className="privacy-document-layout">
      <div className="container privacy-document-inner">

        {/* Date & Title */}
        <div className="privacy-document-title-block">
          <div className="privacy-date-label">{curr.lastUpdated}</div>
          <h1 className="privacy-document-title">{curr.title}</h1>
          <p className="privacy-document-intro">
            {curr.introText1}
          </p>
          <ul className="privacy-doc-list" style={{ marginTop: "1rem", marginBottom: "1.5rem" }}>
            <li>{curr.introBullet1}</li>
            <li>{curr.introBullet2}</li>
          </ul>
          <p className="privacy-document-intro" style={{ fontStyle: "italic", fontSize: "1.05rem" }}>
            {curr.questionsConcerns}
          </p>
        </div>

        {/* Table of Contents */}
        <div className="privacy-doc-section" style={{ marginBottom: "3rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border-color)" }}>
          <h3 style={{ marginTop: 0, fontSize: "1.25rem", color: "var(--color-primary)", letterSpacing: "0.05em" }}>{curr.tocTitle}</h3>
          <ul className="privacy-doc-list privacy-toc-list" style={{ gap: "0.6rem" }}>
            {sections.map((sec) => (
              <li key={sec.id} style={{ display: "block", paddingLeft: 0 }}>
                <a 
                  href={`#${sec.id}`} 
                  style={{ 
                    color: "var(--text-secondary)", 
                    textDecoration: "none", 
                    fontWeight: "500", 
                    transition: "color 0.2s ease" 
                  }}
                  onMouseOver={(e) => e.target.style.color = "var(--color-primary)"}
                  onMouseOut={(e) => e.target.style.color = "var(--text-secondary)"}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(sec.id);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {sec.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Document Body */}
        <div className="privacy-document-body">
          {/* Section 1 */}
          <div id="infocollect" className="privacy-doc-section">
            <h2>{curr.sec1Title}</h2>
            <p>{curr.sec1Intro}</p>
            <h3>{curr.sec1Sub1}</h3>
            <p>{curr.sec1Sub1Desc}</p>
            <ul className="privacy-doc-list">
              <li>{curr.sec1Bullet1}</li>
              <li>{curr.sec1Bullet2}</li>
              <li>{curr.sec1Bullet3}</li>
              <li>{curr.sec1Bullet4}</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div id="infouse" className="privacy-doc-section">
            <h2>{curr.sec2Title}</h2>
            <p>{curr.sec2Intro}</p>
            <ul className="privacy-doc-list">
              <li>{curr.sec2Bullet1}</li>
              <li>{curr.sec2Bullet2}</li>
              <li>{curr.sec2Bullet3}</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div id="whoshare" className="privacy-doc-section">
            <h2>{curr.sec3Title}</h2>
            <p>{curr.sec3Intro}</p>
            <ul className="privacy-doc-list">
              <li>{curr.sec3Bullet1}</li>
              <li>{curr.sec3Bullet2}</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div id="inforetain" className="privacy-doc-section">
            <h2>{curr.sec4Title}</h2>
            <p>{curr.sec4Intro}</p>
            <p>{curr.sec4Desc2}</p>
          </div>

          {/* Section 5 */}
          <div id="infosafe" className="privacy-doc-section">
            <h2>{curr.sec5Title}</h2>
            <p>{curr.sec5Intro}</p>
          </div>

          {/* Section 6 */}
          <div id="privacyrights" className="privacy-doc-section">
            <h2>{curr.sec6Title}</h2>
            <p>{curr.sec6Intro}</p>
            <h3>{curr.sec6Sub}</h3>
            <p>{curr.sec6SubDesc}</p>
          </div>

          {/* Section 7 */}
          <div id="DNT" className="privacy-doc-section">
            <h2>{curr.sec7Title}</h2>
            <p>{curr.sec7Intro}</p>
          </div>

          {/* Section 8 */}
          <div id="caresidents" className="privacy-doc-section">
            <h2>{curr.sec8Title}</h2>
            <p>{curr.sec8Intro}</p>
          </div>

          {/* Section 9 */}
          <div id="policyupdates" className="privacy-doc-section">
            <h2>{curr.sec9Title}</h2>
            <p>{curr.sec9Intro}</p>
          </div>

          {/* Section 10 */}
          <div id="contact" className="privacy-doc-section">
            <h2>{curr.sec10Title}</h2>
            <p>{curr.sec10Intro}</p>
            <p style={{ fontWeight: "700", color: "var(--text-primary)" }}>{curr.sec10Addr}</p>
          </div>

          {/* Section 11 */}
          <div id="request" className="privacy-doc-section">
            <h2>{curr.sec11Title}</h2>
            <p>{curr.sec11Intro}</p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default PrivacyPolicy;
