import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  X, 
  Send, 
  RotateCcw, 
  ChevronDown, 
  CreditCard, 
  Download, 
  HelpCircle,
  ExternalLink,
  Bot
} from 'lucide-react';
import '../../styles/layout/AIChatWidget.css';

// Pre-programmed Knowledge Base for Mesob AI
const getAIResponse = (userText, language) => {
  const q = userText.toLowerCase().trim();
  const isAm = language === 'am' || /[\u1200-\u137F]/.test(userText);

  // 1. Pricing / Cost / Plans
  if (
    q.includes('price') || q.includes('cost') || q.includes('how much') || q.includes('plan') || 
    q.includes('fee') || q.includes('package') || q.includes('etb') || q.includes('birr') ||
    q.includes('ዋጋ') || q.includes('ስንት') || q.includes('ክፍያ') || q.includes('ጥቅል') || q.includes('ብር')
  ) {
    if (isAm) {
      return {
        text: `የሜሶብ አካዳሚ የ2 ዓመት የክፍያ ጥቅሎች ግልጽ እና ተመጣጣኝ ናቸው (ምንም ዓይነት ወርሃዊ ክፍያ የለም)፦\n\n` +
          `• 📘 **ከ9 - 10ኛ ክፍል ጥቅል**፦ 400 ብር (ለሁለት ሙሉ ዓመታት፣ ሁሉም የ9 እና 10ኛ ክፍል ትምህርቶች)\n` +
          `• 🔬 **ከ11 - 12ኛ ክፍል ጥቅል**፦ 400 ብር (ለሁለት ሙሉ ዓመታት፣ የተፈጥሮ ወይም ማህበራዊ ሳይንስ ከብሔራዊ ፈተና ዝግጅት ጋር)\n` +
          `• 🎓 **የሙሉ ሁለተኛ ደረጃ (ከ9-12ኛ ክፍል) ጥቅል**፦ 700 ብር (ለሁለት ዓመት ሙሉ፣ ከ9 እስከ 12ኛ ክፍል ያሉትን ሁሉንም ትምህርቶች የሚያካትት)\n\n` +
          `ሁሉም ጥቅሎች 100% ከመስመር ውጭ (ያለ ሞባይል ዳታ) ማጥናትን ያካትታሉ!`,
        action: 'pricing'
      };
    }
    return {
      text: `Here is our transparent 2-year pricing structure with **zero monthly fees**:\n\n` +
        `• 📘 **Grades 9 & 10 Package**: **400 ETB** for 2 full academic years (All core subjects)\n` +
        `• 🔬 **Grades 11 & 12 Package**: **400 ETB** for 2 full academic years (Natural or Social Science stream + National Exam prep)\n` +
        `• 🎓 **Full High School (9-12) Package**: **700 ETB** for 2 full academic years (Access across all 4 grades and streams)\n\n` +
        `Every package includes 100% offline vault access so you can study without mobile data!`,
      action: 'pricing'
    };
  }

  // 2. Payment Methods & Instructions
  if (
    q.includes('pay') || q.includes('telebirr') || q.includes('cbe') || q.includes('bank') || 
    q.includes('transfer') || q.includes('receipt') || q.includes('subscribe') ||
    q.includes('መክፈል') || q.includes('ቴሌብር') || q.includes('ባንክ') || q.includes('ደረሰኝ') || q.includes('ንግድ ባንክ')
  ) {
    if (isAm) {
      return {
        text: `ክፍያ በሀገር ውስጥ በቀላሉ መፈጸም ይችላሉ፦\n\n` +
          `📱 **ቴሌብር (Telebirr)**: \`0905865441\`\n` +
          `🏦 **የኢትዮጵያ ንግድ ባንክ (CBE)**: \`1000714423669\`\n` +
          `🏦 **አዋሽ ባንክ** እና **አባይ ባንክ**ም ይደገፋሉ።\n\n` +
          `**ቀጣይ ደረጃዎች:**\n` +
          `1. ክፍያውን ከላይ ባሉት ሂሳቦች ይላኩ።\n` +
          `2. የከፈሉበትን ደረሰኝ ስክሪንሾት ያንሱ።\n` +
          `3. በመተግበሪያው ውስጥ በቀጥታ ስክሪንሾቱን ይጫኑ።\n` +
          `የማረጋገጫ ቡድናችን በ24 ሰዓት ውስጥ ሙሉ የፕሪሚየም አገልግሎትዎን ይከፍታል!`,
        action: 'contact'
      };
    }
    return {
      text: `You can easily pay in Ethiopia via local bank transfer or Telebirr:\n\n` +
        `📱 **Telebirr**: \`0905865441\`\n` +
        `🏦 **CBE (Commercial Bank of Ethiopia)**: \`1000714423669\`\n` +
        `🏦 **Awash Bank** & **Abay Bank** are also supported.\n\n` +
        `**How to activate:**\n` +
        `1. Transfer the fee for your chosen package (400 ETB or 700 ETB).\n` +
        `2. Take a screenshot or photo of the payment receipt.\n` +
        `3. Upload the receipt inside the Mesob Academy mobile app.\n` +
        `Our team will verify and activate your 2-year access within 24 hours!`,
      action: 'contact'
    };
  }

  // 3. Offline Mode / Internet
  if (
    q.includes('offline') || q.includes('internet') || q.includes('data') || q.includes('wifi') || 
    q.includes('connection') || q.includes('ኢንተርኔት') || q.includes('ዳታ') || q.includes('ኦፍላይን') || q.includes('ኔትወርክ')
  ) {
    if (isAm) {
      return {
        text: `አዎ! መተግበሪያችን አስተማማኝ **ከመስመር ውጭ ማስቀመጫ (Offline Vault)** አለው።\n\n` +
          `የቪዲዮ ትምህርቶችን፣ ማጠቃለያዎችን እና የልምምድ ፈተናዎችን በዋይፋይ ወይም በዳታ አንዴ በማውረድ፣ በማንኛውም ቦታ ያለ ምንም የሞባይል ዳታ መጠቀም ይችላሉ!`,
        action: 'features'
      };
    }
    return {
      text: `Yes! Mesob Academy features a secure **Offline Vault**.\n\n` +
        `You can download video lessons, booklet summaries, and chapter quizzes while connected to the internet, and then study anytime, anywhere with **zero mobile data**!`,
      action: 'features'
    };
  }

  // 4. Grade 9 & 10 specifics
  if (q.includes('grade 9') || q.includes('grade 10') || q.includes('9th') || q.includes('10th') || q.includes('9') && q.includes('10') || q.includes('9ኛ') || q.includes('10ኛ')) {
    if (isAm) {
      return {
        text: `**የ9 እና 10ኛ ክፍል ጥቅል (400 ብር ለ2 ዓመት)**፦\n\n` +
          `• ሁሉንም የ9 እና 10ኛ ክፍል አጠቃላይ የትምህርት ዓይነቶች ያካትታል (ሒሳብ፣ ፊዚክስ፣ ኬሚስትሪ፣ ባዮሎጂ፣ እንግሊዝኛ ወዘተ)\n` +
          `• የምዕራፍ ማጠቃለያዎች እና በሺዎች የሚቆጠሩ የሙከራ ጥያቄዎች\n` +
          `• 100% ከመስመር ውጭ ማውረድና ማጥናት\n` +
          `• ለሁለት ሙሉ ዓመታት የሚያገለግል!`,
        action: 'pricing'
      };
    }
    return {
      text: `**Grades 9 & 10 Package (400 ETB for 2 Years)**:\n\n` +
        `• Complete coverage of all Grade 9 & 10 core subjects (Maths, Physics, Chemistry, Biology, English, etc.)\n` +
        `• Chapter summaries & interactive practice drills\n` +
        `• 100% offline vault downloads\n` +
        `• Valid for 2 full academic years!`,
      action: 'pricing'
    };
  }

  // 5. Grade 11 & 12 specifics & Streams
  if (
    q.includes('grade 11') || q.includes('grade 12') || q.includes('natural') || q.includes('social') || 
    q.includes('stream') || q.includes('matric') || q.includes('entrance') || q.includes('11ኛ') || 
    q.includes('12ኛ') || q.includes('ተፈጥሮ') || q.includes('ማህበራዊ') || q.includes('ፈተና')
  ) {
    if (isAm) {
      return {
        text: `**የ11 እና 12ኛ ክፍል ጥቅል (400 ብር ለ2 ዓመት)**፦\n\n` +
          `በመመዝገብ ወቅት የመረጡትን የትምህርት ዘርፍ ይወስዳሉ፦\n` +
          `🔬 **የተፈጥሮ ሳይንስ (Natural Science)**: ሒሳብ፣ ፊዚክስ፣ ኬሚስትሪ፣ ባዮሎጂ፣ እንግሊዝኛ ወዘተ\n` +
          `📖 **የማህበራዊ ሳይንስ (Social Science)**: ታሪክ፣ ጂኦግራፊ፣ ኢኮኖሚክስ፣ ሒሳብ፣ እንግሊዝኛ ወዘተ\n\n` +
          `በተጨማሪም የ10+ ዓመታት የብሔራዊ ፈተናዎች ማህደር እና አስመስሎ የተሰሩ የጊዜ ልምምዶችን ያካትታል!`,
        action: 'pricing'
      };
    }
    return {
      text: `**Grades 11 & 12 Package (400 ETB for 2 Years)**:\n\n` +
        `You select your stream upon subscription:\n` +
        `🔬 **Natural Science**: Mathematics, Physics, Chemistry, Biology, English, etc.\n` +
        `📖 **Social Science**: History, Geography, Economics, Mathematics, English, etc.\n\n` +
        `Both include 10+ years of national exam simulation drills, timed practice sessions, and full offline vault access!`,
      action: 'pricing'
    };
  }

  // 6. Full High School 9-12
  if (q.includes('9-12') || q.includes('9 to 12') || q.includes('full') || q.includes('ሁለተኛ ደረጃ')) {
    if (isAm) {
      return {
        text: `**የሙሉ ሁለተኛ ደረጃ ከ9-12ኛ ክፍል ጥቅል (700 ብር ለ2 ዓመት)**፦\n\n` +
          `የእኛ ምርጥ ጥቅል ነው! ከ9ኛ እስከ 12ኛ ክፍል ያሉትን ሁሉንም የትምህርት ይዘቶች፣ ሁለቱንም ዘርፎች (ተፈጥሮና ማህበራዊ) እንዲሁም የብሔራዊ ፈተና ማህደርን ለ2 ዓመት ሙሉ ያለምንም ገደብ ያስከፍታል።`,
        action: 'pricing'
      };
    }
    return {
      text: `**Full High School (Grades 9-12) Package (700 ETB for 2 Years)**:\n\n` +
        `Our best value package! Unlocks full access across all 4 grades (9, 10, 11, and 12), including both Natural and Social streams, all video lessons, and the complete 10+ years national examination archive for 2 full years.`,
      action: 'pricing'
    };
  }

  // 7. Duration / Expiration questions
  if (
    q.includes('how long') || q.includes('duration') || q.includes('expire') || q.includes('valid') || 
    q.includes('4 year') || q.includes('2 year') || q.includes('two year') || q.includes('ጊዜ') || q.includes('ዓመት')
  ) {
    if (isAm) {
      return {
        text: `ሁሉም የሜሶብ አካዳሚ ጥቅሎች ለ**2 ዓመት ሙሉ (730 ቀናት)** የሚያገለግሉ ናቸው።\n\n` +
          `ክፍያው አንዴ አስቀድሞ የሚፈጸም ሲሆን ምንም ዓይነት ወርሃዊ ተደጋጋሚ ክፍያ የለውም። የ2 ዓመት የጥናት ጊዜዎ ሲያልቅ እንደገና ማደስ ይችላሉ።`,
        action: 'pricing'
      };
    }
    return {
      text: `All Mesob Academy packages grant **2 full years (730 days)** of access from the date your payment is approved.\n\n` +
        `There are zero recurring monthly charges or auto-renewals. When your 2-year cycle concludes, you can renew for your next grade level!`,
      action: 'pricing'
    };
  }

  // 8. Recommendation / Which plan should I choose
  if (
    q.includes('recommend') || q.includes('which plan') || q.includes('choose') || q.includes('help me choose') || 
    q.includes('ምረጡልኝ') || q.includes('የትኛውን') || q.includes('የትኛው')
  ) {
    if (isAm) {
      return {
        text: `ለእርስዎ የሚመጥነውን ጥቅል ለመምረጥ፦\n\n` +
          `1. **የ9ኛ ወይም 10ኛ ክፍል ተማሪ ከሆኑ** ➜ **የ9-10ኛ ክፍል ጥቅል (400 ብር)** ይምረጡ።\n` +
          `2. **የ11ኛ ወይም 12ኛ ክፍል ተማሪ ከሆኑ** ➜ **የ11-12ኛ ክፍል ጥቅል (400 ብር)** በመምረጥ የትምህርት ዘርፍዎን (ተፈጥሮ ወይም ማህበራዊ) ይለዩ።\n` +
          `3. **ሁሉንም ከ9-12ኛ ክፍል ያለውን ይዘት ለክለሳ እና ለፈተና ዝግጅት በአንድ ላይ ከፈለጉ** ➜ **የሙሉ ሁለተኛ ደረጃ ጥቅል (700 ብር)** ይምረጡ።`,
        action: 'pricing'
      };
    }
    return {
      text: `Here is our quick recommendation guide:\n\n` +
        `1. **If you are in Grade 9 or 10** ➜ Choose the **Grades 9 & 10 Package (400 ETB)**.\n` +
        `2. **If you are in Grade 11 or 12** ➜ Choose the **Grades 11 & 12 Package (400 ETB)** and select your stream (Natural or Social Science).\n` +
        `3. **If you want all 4 years in one place for comprehensive national exam review** ➜ Choose the **Full High School Package (700 ETB)**!`,
      action: 'pricing'
    };
  }

  // 9. Download / App
  if (q.includes('download') || q.includes('app') || q.includes('apk') || q.includes('install') || q.includes('ማውረድ') || q.includes('መተግበሪያ')) {
    if (isAm) {
      return {
        text: `የሜሶብ አካዳሚ አንድሮይድ የሞባይል መተግበሪያን በGoogle Play Store ወይም በድረ-ገጻችን አናት ላይ የሚገኘውን 'Download' ቁልፍ በመጫን ማውረድ ይችላሉ!`,
        action: 'download'
      };
    }
    return {
      text: `You can download the Mesob Academy mobile app on Android via the Google Play Store or directly from the download button in the top navigation bar!`,
      action: 'download'
    };
  }

  // 10. Greetings & Friendly chat
  if (q.includes('hi') || q.includes('hello') || q.includes('hey') || q.includes('ሰላም') || q.includes('ጤና ይስጥልኝ')) {
    if (isAm) {
      return {
        text: `ሰላም! እኔ የሜሶብ አካዳሚ AI ረዳት ነኝ።\n\nስለ የትምህርት ጥቅሎቻችን ዋጋ፣ የክፍያ መንገዶች (ቴሌብር/CBE)፣ የ11-12ኛ ክፍል ዘርፎች ወይም ከመስመር ውጭ ስለማጥናት ምን ማወቅ ይፈልጋሉ?`,
        action: null
      };
    }
    return {
      text: `Hello! I am your Mesob Academy AI Assistant. ✨\n\nI can help you with questions about our 2-year packages, pricing, Telebirr/CBE payment steps, grade streams, or offline study! How can I assist you today?`,
      action: null
    };
  }

  if (q.includes('thank') || q.includes('አመሰግናለሁ') || q.includes('thanks')) {
    if (isAm) {
      return {
        text: `በደስታ ነው! ተጨማሪ ጥያቄ ካለዎት በማንኛውም ጊዜ መጠየቅ ይችላሉ። ለጥናትዎ መልካም እድል! 🎓`,
        action: null
      };
    }
    return {
      text: `You're very welcome! If you have any other questions about courses, prices, or study tips, feel free to ask anytime. Best of luck with your studies! 🎓`,
      action: null
    };
  }

  // Fallback
  if (isAm) {
    return {
      text: `ጥሩ ጥያቄ ነው! የሚከተሉትን ርዕሶች በመጠየቅ ፈጣን ምላሽ ማግኘት ይችላሉ፦\n\n` +
        `• 💰 "የጥቅሎቹ ዋጋ ስንት ነው?"\n` +
        `• 💳 "በቴሌብር ወይም በሲቢኢ እንዴት መክፈል እችላለሁ?"\n` +
        `• 🔬 "የ11 እና 12ኛ ክፍል የተፈጥሮ ወይም ማህበራዊ ሳይንስ ጥቅል"\n` +
        `• 📱 "ያለ ኢንተርኔት (Offline) ይሰራል?"\n` +
        `• 🎯 "ለእኔ የሚመጥነውን ጥቅል ምረጡልኝ"`,
      action: null
    };
  }
  return {
    text: `I'm happy to help! Here are popular questions you can ask me:\n\n` +
      `• 💰 "What are the prices for Grade 9-10 and 11-12?"\n` +
      `• 💳 "How do I pay with Telebirr or CBE?"\n` +
      `• 🔬 "Tell me about Grade 11-12 Natural vs Social stream"\n` +
      `• 📱 "Does the app work without internet?"\n` +
      `• 🎯 "Which package do you recommend for me?"`,
    action: null
  };
};

const AIChatWidget = ({ language = 'en', theme = 'dark', triggerToast }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'ai',
      text: language === 'am' 
        ? 'ሰላም! እኔ የሜሶብ AI ረዳት ነኝ። ስለ ጥቅሎች ዋጋ፣ የክፍያ መንገዶች (ቴሌብር/ሲቢኢ) ወይም ከመስመር ውጭ ስለማጥናት ማንኛውንም ጥያቄ ይጠይቁኝ!'
        : 'Hi there! I am your Mesob AI Assistant. ✨ Ask me anything about our 2-year packages, pricing, Telebirr/CBE payment, or offline learning!',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const starterChips = language === 'am' ? [
    { label: '💰 የጥቅሎቹ ዋጋ ስንት ነው?', query: 'የጥቅሎቹ ዋጋ ስንት ነው?' },
    { label: '💳 በቴሌብር/CBE መክፈል', query: 'በቴሌብር ወይም በሲቢኢ እንዴት መክፈል እችላለሁ?' },
    { label: '🔬 የ11-12ኛ ክፍል ዘርፎች', query: 'የ11 እና 12ኛ ክፍል የተፈጥሮ ወይም ማህበራዊ ሳይንስ ጥቅል' },
    { label: '📱 ያለ ኢንተርኔት ይሰራል?', query: 'መተግበሪያው ያለ ኢንተርኔት ይሰራል?' }
  ] : [
    { label: '💰 What are the prices?', query: 'What are the pricing packages?' },
    { label: '💳 Pay with Telebirr / CBE', query: 'How do I pay with Telebirr or CBE?' },
    { label: '🔬 Grade 11-12 Streams', query: 'Tell me about Grade 11-12 Natural and Social streams' },
    { label: '📱 Does it work offline?', query: 'Does the app work without internet?' }
  ];

  // Auto-scroll on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen]);

  // Send query & simulate real AI streaming
  const handleSend = (textToSend = null) => {
    const query = (textToSend || input).trim();
    if (!query || isTyping) return;

    const userMsgId = 'u_' + Date.now();
    const userMsg = {
      id: userMsgId,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Compute answer
    const responseData = getAIResponse(query, language);
    const fullText = responseData.text;
    const action = responseData.action;

    // Simulate AI "thinking" time, then stream text
    const thinkingDelay = 450 + Math.random() * 250;
    setTimeout(() => {
      const aiMsgId = 'ai_' + Date.now();
      const aiMsg = {
        id: aiMsgId,
        sender: 'ai',
        text: '',
        action: action,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, aiMsg]);

      // Stream words or characters
      let currentIndex = 0;
      const charsPerTick = 4;
      const streamInterval = setInterval(() => {
        currentIndex += charsPerTick;
        if (currentIndex >= fullText.length) {
          currentIndex = fullText.length;
          clearInterval(streamInterval);
          setIsTyping(false);
        }

        const partial = fullText.slice(0, currentIndex);
        setMessages((prev) => 
          prev.map((m) => m.id === aiMsgId ? { ...m, text: partial } : m)
        );
      }, 20);
    }, thinkingDelay);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 'welcome_' + Date.now(),
        sender: 'ai',
        text: language === 'am' 
          ? 'ሰላም! ውይይቱ እንደ አዲስ ተጀምሯል። ምን ማወቅ ይፈልጋሉ?'
          : 'Conversation restarted. ✨ How can I help you today?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  const handleActionClick = (action) => {
    if (action === 'pricing') {
      const el = document.getElementById('pricing');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    } else if (action === 'contact') {
      const el = document.getElementById('faq');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    } else if (action === 'features') {
      const el = document.getElementById('features');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    } else if (action === 'download') {
      const el = document.getElementById('hero');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div className={`ai-widget-container ${theme === 'light' ? 'light-widget' : ''}`}>
      {/* Floating Trigger Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className="ai-trigger-btn"
            onClick={() => setIsOpen(true)}
            aria-label="Ask Mesob AI"
          >
            <div className="ai-trigger-pulse" />
            <div className="ai-trigger-icon-box">
              <Sparkles size={22} className="ai-sparkle-icon" />
            </div>
            <div className="ai-trigger-label">
              <span className="ai-trigger-title">{language === 'am' ? 'ሜሶብ AI' : 'Mesob AI'}</span>
              <span className="ai-trigger-subtitle">{language === 'am' ? 'ይጠይቁን' : 'Ask Anything'}</span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="ai-chat-window"
          >
            {/* Header */}
            <div className="ai-chat-header">
              <div className="ai-header-left">
                <div className="ai-avatar-badge">
                  <Bot size={20} />
                  <span className="ai-online-indicator" />
                </div>
                <div>
                  <h3 className="ai-header-title">
                    {language === 'am' ? 'ሜሶብ AI ረዳት' : 'Mesob AI Assistant'}
                  </h3>
                  <p className="ai-header-status">
                    <span className="pulse-dot" /> {language === 'am' ? 'ኦንላይን • የጥናትና የዋጋ ረዳት' : 'Online • Instant Plan Advisor'}
                  </p>
                </div>
              </div>
              
              <div className="ai-header-actions">
                <button 
                  className="ai-icon-btn" 
                  onClick={handleClearChat} 
                  title={language === 'am' ? 'አዲስ ውይይት ጀምር' : 'Restart Chat'}
                >
                  <RotateCcw size={16} />
                </button>
                <button 
                  className="ai-icon-btn" 
                  onClick={() => setIsOpen(false)} 
                  title={language === 'am' ? 'ዝጋ' : 'Close'}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Quick Starter Chips */}
            <div className="ai-chips-scroll">
              {starterChips.map((chip, idx) => (
                <button
                  key={idx}
                  className="ai-starter-chip"
                  onClick={() => handleSend(chip.query)}
                >
                  {chip.label}
                </button>
              ))}
            </div>

            {/* Messages Body */}
            <div className="ai-messages-container">
              {messages.map((msg) => (
                <div key={msg.id} className={`ai-message-row ${msg.sender === 'user' ? 'user-row' : 'ai-row'}`}>
                  {msg.sender === 'ai' && (
                    <div className="ai-msg-avatar">
                      <Sparkles size={14} />
                    </div>
                  )}
                  <div className="ai-msg-bubble">
                    <div className="ai-msg-text">
                      {msg.text.split('\n').map((line, lIdx) => (
                        <p key={lIdx} className={line.startsWith('•') ? 'bullet-line' : ''}>
                          {line}
                        </p>
                      ))}
                    </div>
                    {msg.action && (
                      <button 
                        className="ai-action-btn"
                        onClick={() => handleActionClick(msg.action)}
                      >
                        {msg.action === 'pricing' && (language === 'am' ? 'ወደ ዋጋዎች ዝርዝር ሂድ' : 'View Pricing Plans')}
                        {msg.action === 'contact' && (language === 'am' ? 'ተደጋጋሚ ጥያቄዎችን እይ' : 'View Payment FAQ')}
                        {msg.action === 'features' && (language === 'am' ? 'የመተግበሪያውን ገጽታዎች እይ' : 'Explore Features')}
                        {msg.action === 'download' && (language === 'am' ? 'መተግበሪያውን አውርድ' : 'Download App')}
                        <ExternalLink size={13} />
                      </button>
                    )}
                    <span className="ai-msg-time">{msg.timestamp}</span>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="ai-message-row ai-row">
                  <div className="ai-msg-avatar">
                    <Sparkles size={14} />
                  </div>
                  <div className="ai-msg-bubble ai-typing-bubble">
                    <div className="typing-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <form 
              className="ai-chat-input-bar" 
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                  language === 'am'
                    ? 'ስለ ዋጋ፣ ክፍል፣ ትምህርቶች ወይም ክፍያ ይጠይቁ...'
                    : 'Ask about pricing, grades, subjects, or Telebirr...'
                }
                className="ai-input-field"
              />
              <button 
                type="submit" 
                className={`ai-send-btn ${input.trim() ? 'active' : ''}`}
                disabled={!input.trim() || isTyping}
                aria-label="Send Message"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIChatWidget;
