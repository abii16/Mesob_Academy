import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Send, 
  RotateCcw, 
  ExternalLink 
} from 'lucide-react';
import '../../styles/layout/AIChatWidget.css';

// Knowledge Base for Mesob Support Assistant
const getSupportResponse = (userText, language) => {
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
        text: `የሜሶብ አካዳሚ የ2 ዓመት የክፍያ ጥቅሎች ዝርዝር የሚከተሉት ናቸው (ተደጋጋሚ ወርሃዊ ክፍያ የለውም)፦\n\n` +
          `• **ከ9 - 10ኛ ክፍል ጥቅል**፦ 400 ብር ለ2 ሙሉ የትምህርት ዓመታት (ሁሉም የ9 እና 10ኛ ክፍል ትምህርቶች)\n` +
          `• **ከ11 - 12ኛ ክፍል ጥቅል**፦ 400 ብር ለ2 ሙሉ የትምህርት ዓመታት (የተፈጥሮ ወይም ማህበራዊ ሳይንስ ከብሔራዊ ፈተና ዝግጅት ጋር)\n` +
          `• **የሙሉ ሁለተኛ ደረጃ (ከ9-12ኛ ክፍል) ጥቅል**፦ 700 ብር ለ2 ሙሉ ዓመታት (ሁሉንም 4 የክፍል ደረጃዎች ያካተተ)\n\n` +
          `ሁሉም ጥቅሎች ሙሉ ከመስመር ውጭ (ያለ ሞባይል ዳታ) ማጥናትን ያካትታሉ።`,
        action: 'pricing'
      };
    }
    return {
      text: `Here is our 2-year pricing overview (no recurring monthly fees):\n\n` +
        `• **Grades 9 & 10 Package**: 400 ETB for 2 full academic years (All core subjects)\n` +
        `• **Grades 11 & 12 Package**: 400 ETB for 2 full academic years (Natural or Social Science stream + National Exam prep)\n` +
        `• **Full High School (9-12) Package**: 700 ETB for 2 full academic years (Complete access across all 4 grades)\n\n` +
        `Every package includes full offline vault access so you can study without using mobile data.`,
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
        text: `ክፍያ ለመፈጸም የሚከተሉትን የባንክ ወይም የቴሌብር ሂሳቦች መጠቀም ይችላሉ፦\n\n` +
          `• **ቴሌብር (Telebirr)**: \`0905865441\`\n` +
          `• **የኢትዮጵያ ንግድ ባንክ (CBE)**: \`1000714423669\`\n` +
          `• **አዋሽ ባንክ**: \`013201468713200\`\n` +
          `• **አባይ ባንክ**: \`A401011070050017\`\n\n` +
          `ክፍያውን ከፈጸሙ በኋላ ደረሰኙን ስክሪንሾት በማንሳት በሜሶብ መተግበሪያ ውስጥ ይጫኑ። መለያዎ በ24 ሰዓት ውስጥ ይከፈታል።`,
        action: 'contact'
      };
    }
    return {
      text: `You can make a direct payment through any of these local accounts:\n\n` +
        `• **Telebirr**: \`0905865441\`\n` +
        `• **Commercial Bank of Ethiopia (CBE)**: \`1000714423669\`\n` +
        `• **Awash Bank**: \`013201468713200\`\n` +
        `• **Abay Bank**: \`A401011070050017\`\n\n` +
        `After completing the transfer, take a screenshot of your receipt and upload it in the Mesob Academy app. Your account will be activated within 24 hours.`,
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
        text: `አዎ! መተግበሪያው ያለ ኢንተርኔት ይሰራል。\n\nበመተግበሪያው ውስጥ ያሉ የቪዲዮ ትምህርቶችን፣ ማጠቃለያዎችን እና የልምምድ ፈተናዎችን አንዴ ካወረዱ በኋላ በማንኛውም ሰዓት ያለ ሞባይል ዳታ መጠቀም ይችላሉ።`,
        action: 'features'
      };
    }
    return {
      text: `Yes, the app works completely offline.\n\nOnce you download your video lessons, booklet summaries, and practice quizzes, you can access and study them anytime without using any mobile data.`,
      action: 'features'
    };
  }

  // 4. Grade 9 & 10 specifics
  if (q.includes('grade 9') || q.includes('grade 10') || q.includes('9th') || q.includes('10th') || (q.includes('9') && q.includes('10')) || q.includes('9ኛ') || q.includes('10ኛ')) {
    if (isAm) {
      return {
        text: `**የ9 እና 10ኛ ክፍል ጥቅል (400 ብር)**፦\n\n` +
          `• ሁሉንም የ9ኛ እና 10ኛ ክፍል አጠቃላይ የትምህርት ዓይነቶች ያካትታል (ሒሳብ፣ ፊዚክስ፣ ኬሚስትሪ፣ ባዮሎጂ፣ እንግሊዝኛ ወዘተ)\n` +
          `• የምዕራፍ ማጠቃለያዎች እና የልምምድ ፈተናዎች\n` +
          `• 100% ከመስመር ውጭ የማውረድ ዕድል\n` +
          `• ለ2 ሙሉ የትምህርት ዓመታት የሚያገለግል`,
        action: 'pricing'
      };
    }
    return {
      text: `**Grades 9 & 10 Package (400 ETB)**:\n\n` +
        `• Covers all Grade 9 & 10 subjects (Mathematics, Physics, Chemistry, Biology, English, etc.)\n` +
        `• Chapter summaries & interactive practice drills\n` +
        `• Full offline downloads\n` +
        `• Active for 2 full academic years`,
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
        text: `**የ11 እና 12ኛ ክፍል ጥቅል (400 ብር)**፦\n\n` +
          `በምዝገባ ወቅት የተፈጥሮ ወይም የማህበራዊ ሳይንስ ዘርፍዎን ይመርጣሉ፦\n` +
          `• **የተፈጥሮ ሳይንስ (Natural Science)**: ሒሳብ፣ ፊዚክስ፣ ኬሚስትሪ፣ ባዮሎጂ፣ እንግሊዝኛ ወዘተ\n` +
          `• **የማህበራዊ ሳይንስ (Social Science)**: ታሪክ፣ ጂኦግራፊ፣ ኢኮኖሚክስ፣ ሒሳብ፣ እንግሊዝኛ ወዘተ\n\n` +
          `ሁለቱም ዘርፎች የ10+ ዓመታት የብሔራዊ ፈተና ማህደርን እና የጊዜ ልምምዶችን ያካትታሉ። ጥቅሉ ለ2 ዓመት ሙሉ ያገለግላል።`,
        action: 'pricing'
      };
    }
    return {
      text: `**Grades 11 & 12 Package (400 ETB)**:\n\n` +
        `You select your stream when registering:\n` +
        `• **Natural Science**: Mathematics, Physics, Chemistry, Biology, English, etc.\n` +
        `• **Social Science**: History, Geography, Economics, Mathematics, English, etc.\n\n` +
        `Both streams include a 10+ year national exam prep archive, timed practice exams, and full offline vault access for 2 full academic years.`,
      action: 'pricing'
    };
  }

  // 6. Full High School 9-12
  if (q.includes('9-12') || q.includes('9 to 12') || q.includes('full') || q.includes('ሁለተኛ ደረጃ')) {
    if (isAm) {
      return {
        text: `**የሙሉ ሁለተኛ ደረጃ ከ9-12ኛ ክፍል ጥቅል (700 ብር)**፦\n\n` +
          `ከ9ኛ እስከ 12ኛ ክፍል ያሉትን ሁሉንም የትምህርት ይዘቶች፣ ሁለቱንም ዘርፎች (ተፈጥሮና ማህበራዊ) እንዲሁም የብሔራዊ ፈተና ማህደርን ለ2 ዓመት ሙሉ ያለምንም ገደብ ያስከፍታል።`,
        action: 'pricing'
      };
    }
    return {
      text: `**Full High School (Grades 9-12) Package (700 ETB)**:\n\n` +
        `Unlocks full access across all 4 grades (9, 10, 11, and 12), including both Natural and Social streams, all video lessons, and the complete 10+ years national examination archive for 2 full years.`,
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
        text: `ሁሉም የሜሶብ አካዳሚ ጥቅሎች ለ2 ዓመት ሙሉ (730 ቀናት) የሚያገለግሉ ናቸው። ምንም ዓይነት ወርሃዊ ክፍያ የለም። የ2 ዓመት ጊዜዎ ሲያልቅ እንደገና ማደስ ይችላሉ።`,
        action: 'pricing'
      };
    }
    return {
      text: `All Mesob Academy packages are active for 2 full years (730 days) from payment approval. There are zero monthly charges. When your 2-year period ends, you can renew for your next cycle.`,
      action: 'pricing'
    };
  }

  // 8. Recommendation
  if (
    q.includes('recommend') || q.includes('which plan') || q.includes('choose') || q.includes('help me choose') || 
    q.includes('ምረጡልኝ') || q.includes('የትኛውን') || q.includes('የትኛው')
  ) {
    if (isAm) {
      return {
        text: `ለእርስዎ የሚመጥነውን ጥቅል ለመምረጥ፦\n\n` +
          `1. **የ9ኛ ወይም 10ኛ ክፍል ተማሪ ከሆኑ** ➜ የ9-10ኛ ክፍል ጥቅል (400 ብር)\n` +
          `2. **የ11ኛ ወይም 12ኛ ክፍል ተማሪ ከሆኑ** ➜ የ11-12ኛ ክፍል ጥቅል (400 ብር)\n` +
          `3. **ሁሉንም ከ9-12ኛ ክፍል ያለውን ይዘት በአንድ ላይ ለክለሳ ከፈለጉ** ➜ የሙሉ ሁለተኛ ደረጃ ጥቅል (700 ብር)`,
        action: 'pricing'
      };
    }
    return {
      text: `Here is a quick guide to help you choose:\n\n` +
        `1. **If you are in Grade 9 or 10** ➜ Choose the Grades 9 & 10 Package (400 ETB).\n` +
        `2. **If you are in Grade 11 or 12** ➜ Choose the Grades 11 & 12 Package (400 ETB) with your stream.\n` +
        `3. **If you need all 4 years in one place for national exam review** ➜ Choose the Full High School Package (700 ETB).`,
      action: 'pricing'
    };
  }

  // 9. Download / App
  if (q.includes('download') || q.includes('app') || q.includes('apk') || q.includes('install') || q.includes('ማውረድ') || q.includes('መተግበሪያ')) {
    if (isAm) {
      return {
        text: `የሜሶብ አካዳሚ የሞባይል መተግበሪያን በGoogle Play Store ወይም በገጻችን አናት ላይ የሚገኘውን 'Download' ቁልፍ በመጫን ማውረድ ይችላሉ።`,
        action: 'download'
      };
    }
    return {
      text: `You can download the Mesob Academy app on Android via Google Play Store or by clicking the Download button in the top navigation bar.`,
      action: 'download'
    };
  }

  // 10. Greetings & Friendly chat
  if (q.includes('hi') || q.includes('hello') || q.includes('hey') || q.includes('ሰላም') || q.includes('ጤና ይስጥልኝ')) {
    if (isAm) {
      return {
        text: `ሰላም! ወደ ሜሶብ አካዳሚ እንኳን በደህና መጡ። በምን ልንረዳዎ እንችላለን? ስለ ጥቅሎች ዋጋ፣ የክፍያ መንገዶች ወይም ከመስመር ውጭ ስለማጥናት መጠየቅ ይችላሉ።`,
        action: null
      };
    }
    return {
      text: `Hello! Welcome to Mesob Academy. How can we help you today? Feel free to ask about our packages, pricing, Telebirr/CBE payment, or offline learning.`,
      action: null
    };
  }

  if (q.includes('thank') || q.includes('አመሰግናለሁ') || q.includes('thanks')) {
    if (isAm) {
      return {
        text: `በደስታ ነው! ተጨማሪ ጥያቄ ካለዎት በማንኛውም ጊዜ ይጠይቁን። ለጥናትዎ መልካም ውጤት እንመኛለን!`,
        action: null
      };
    }
    return {
      text: `You're very welcome! If you have any further questions, feel free to ask anytime. Wishing you success in your studies!`,
      action: null
    };
  }

  // Fallback
  if (isAm) {
    return {
      text: `ጥያቄዎን በተሻለ ለመመለስ የሚከተሉትን ርዕሶች መምረጥ ይችላሉ፦\n\n` +
        `• የጥቅሎች ዋጋ (ከ9-10 እና ከ11-12)\n` +
        `• የክፍያ መንገዶች (ቴሌብር እና CBE)\n` +
        `• የተፈጥሮ እና ማህበራዊ ሳይንስ ዘርፎች\n` +
        `• ከመስመር ውጭ (Offline) አጠቃቀም`,
      action: null
    };
  }
  return {
    text: `How can we help? Here are common topics you can ask about:\n\n` +
      `• Pricing for Grade 9-10 and Grade 11-12\n` +
      `• Payment options via Telebirr or CBE\n` +
      `• Natural vs. Social Science streams\n` +
      `• Offline learning features`,
    action: null
  };
};

// Formatter for streaming markdown (bold **text**, inline `code`, bullets, etc.)
// Prevents '**' or '*' from leaking during real-time typing animation
const parseStreamingMarkdown = (text) => {
  if (!text) return [];

  let cleaned = text;

  // Handle trailing asterisk(s) when stream is typing '**' or '*'
  if (cleaned.endsWith('**')) {
    const pairs = (cleaned.match(/\*\*/g) || []).length;
    if (pairs % 2 === 1) cleaned = cleaned.slice(0, -2);
  } else if (cleaned.endsWith('*') && !cleaned.endsWith('**')) {
    cleaned = cleaned.slice(0, -1);
  }

  // Handle trailing backtick if stream is typing '`'
  if (cleaned.endsWith('`')) {
    const backticks = (cleaned.match(/`/g) || []).length;
    if (backticks % 2 === 1) cleaned = cleaned.slice(0, -1);
  }

  const nodes = [];
  const boldParts = cleaned.split('**');

  for (let i = 0; i < boldParts.length; i++) {
    let seg = boldParts[i];
    if (!seg) continue;

    const isBold = (i % 2 === 1);
    // Strip any rogue remaining asterisks
    seg = seg.replace(/\*\*/g, '');

    // Check for inline code backticks within the segment
    if (seg.includes('`')) {
      const codeParts = seg.split('`');
      for (let j = 0; j < codeParts.length; j++) {
        let codeSeg = codeParts[j];
        if (!codeSeg) continue;
        const isCode = (j % 2 === 1);
        nodes.push({ isBold, isCode, text: codeSeg });
      }
    } else {
      nodes.push({ isBold, isCode: false, text: seg });
    }
  }

  return nodes;
};

const FormatSupportText = ({ text }) => {
  if (!text) return null;
  const lines = text.split('\n');

  return (
    <>
      {lines.map((line, lIdx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={lIdx} className="support-line-break" />;
        }

        const isBullet = trimmed.startsWith('•') || trimmed.startsWith('-');
        const isNumbered = /^\d+\.\s/.test(trimmed);
        const formattedNodes = parseStreamingMarkdown(line);

        return (
          <p 
            key={lIdx} 
            className={`support-text-line ${isBullet ? 'bullet-line' : ''} ${isNumbered ? 'numbered-line' : ''}`}
          >
            {formattedNodes.map((node, nIdx) => {
              if (node.isBold) {
                return (
                  <strong key={nIdx} className="support-bold-text">
                    {node.text}
                  </strong>
                );
              }
              if (node.isCode) {
                return (
                  <code key={nIdx} className="support-inline-code">
                    {node.text}
                  </code>
                );
              }
              return <React.Fragment key={nIdx}>{node.text}</React.Fragment>;
            })}
          </p>
        );
      })}
    </>
  );
};

const AIChatWidget = ({ language = 'en', theme = 'dark' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'support',
      text: language === 'am' 
        ? 'ሰላም! ወደ ሜሶብ አካዳሚ እንኳን በደህና መጡ። በምን ልንረዳዎ እንችላለን? ስለ ጥቅሎች ዋጋ፣ የክፍያ መንገዶች (ቴሌብር/ሲቢኢ) ወይም ከመስመር ውጭ ስለማጥናት መጠየቅ ይችላሉ።'
        : 'Hello! Welcome to Mesob Academy. How can we help you today? Ask us about our 2-year grade packages, Telebirr/CBE payment, or offline learning.',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const starterChips = language === 'am' ? [
    { label: 'የጥቅሎች ዋጋ', query: 'የጥቅሎቹ ዋጋ ስንት ነው?' },
    { label: 'በቴሌብር/CBE መክፈል', query: 'በቴሌብር ወይም በሲቢኢ እንዴት መክፈል እችላለሁ?' },
    { label: 'የ11-12ኛ ክፍል ዘርፎች', query: 'የ11 እና 12ኛ ክፍል የተፈጥሮ ወይም ማህበራዊ ሳይንስ ጥቅል' },
    { label: 'ያለ ኢንተርኔት ይሰራል?', query: 'መተግበሪያው ያለ ኢንተርኔት ይሰራል?' }
  ] : [
    { label: 'Pricing Plans', query: 'What are the pricing packages?' },
    { label: 'Pay with Telebirr / CBE', query: 'How do I pay with Telebirr or CBE?' },
    { label: 'Grade 11-12 Streams', query: 'Tell me about Grade 11-12 Natural and Social streams' },
    { label: 'Offline Access', query: 'Does the app work without internet?' }
  ];

  // Auto-scroll on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen]);

  // Send query & stream natural response
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

    const responseData = getSupportResponse(query, language);
    const fullText = responseData.text;
    const action = responseData.action;

    setTimeout(() => {
      const supportMsgId = 's_' + Date.now();
      const supportMsg = {
        id: supportMsgId,
        sender: 'support',
        text: '',
        action: action,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, supportMsg]);

      let currentIndex = 0;
      const charsPerTick = 5;
      const streamInterval = setInterval(() => {
        currentIndex += charsPerTick;
        if (currentIndex >= fullText.length) {
          currentIndex = fullText.length;
          clearInterval(streamInterval);
          setIsTyping(false);
        }

        const partial = fullText.slice(0, currentIndex);
        setMessages((prev) => 
          prev.map((m) => m.id === supportMsgId ? { ...m, text: partial } : m)
        );
      }, 18);
    }, 350);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 'welcome_' + Date.now(),
        sender: 'support',
        text: language === 'am' 
          ? 'ውይይቱ እንደ አዲስ ተጀምሯል። በምን ልንረዳዎ እንችላለን?'
          : 'Conversation restarted. How can we help you today?',
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
    <div className={`support-widget-container ${theme === 'light' ? 'light-widget' : ''}`}>
      {/* Floating Trigger Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="support-trigger-btn"
            onClick={() => setIsOpen(true)}
            aria-label="Open Support Chat"
          >
            <div className="support-trigger-icon">
              <MessageCircle size={22} />
            </div>
            <span className="support-trigger-text">
              {language === 'am' ? 'እርዳታ ይፈልጋሉ?' : 'Need Help?'}
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="support-chat-window"
          >
            {/* Header */}
            <div className="support-chat-header">
              <div className="support-header-left">
                <div className="support-avatar">
                  <img src="/applogo.png" alt="Mesob" className="support-avatar-img" />
                  <span className="support-online-dot" />
                </div>
                <div>
                  <h3 className="support-header-title">
                    {language === 'am' ? 'የሜሶብ ድጋፍ ሰጪ' : 'Mesob Support'}
                  </h3>
                  <p className="support-header-sub">
                    {language === 'am' ? 'በደቂቃዎች ውስጥ ይመልሳል' : 'Typically replies instantly'}
                  </p>
                </div>
              </div>
              
              <div className="support-header-actions">
                <button 
                  className="support-icon-btn" 
                  onClick={handleClearChat} 
                  title={language === 'am' ? 'አዲስ ውይይት' : 'Restart'}
                >
                  <RotateCcw size={15} />
                </button>
                <button 
                  className="support-icon-btn" 
                  onClick={() => setIsOpen(false)} 
                  title={language === 'am' ? 'ዝጋ' : 'Close'}
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            {/* Quick Starter Chips */}
            <div className="support-chips-bar">
              {starterChips.map((chip, idx) => (
                <button
                  key={idx}
                  className="support-chip"
                  onClick={() => handleSend(chip.query)}
                >
                  {chip.label}
                </button>
              ))}
            </div>

            {/* Messages Area */}
            <div className="support-messages-container">
              {messages.map((msg) => (
                <div key={msg.id} className={`support-msg-row ${msg.sender === 'user' ? 'user-row' : 'agent-row'}`}>
                  {msg.sender === 'support' && (
                    <div className="support-msg-avatar">
                      <img src="/applogo.png" alt="Mesob" />
                    </div>
                  )}
                  <div className="support-bubble">
                    <div className="support-bubble-text">
                      <FormatSupportText text={msg.text} />
                    </div>
                    {msg.action && (
                      <button 
                        className="support-action-link"
                        onClick={() => handleActionClick(msg.action)}
                      >
                        {msg.action === 'pricing' && (language === 'am' ? 'የዋጋ ዝርዝሮችን ይመልከቱ' : 'View Pricing Plans')}
                        {msg.action === 'contact' && (language === 'am' ? 'የክፍያ መመሪያዎችን ይመልከቱ' : 'View Payment FAQ')}
                        {msg.action === 'features' && (language === 'am' ? 'የመተግበሪያውን ገጽታዎች ይመልከቱ' : 'Explore Features')}
                        {msg.action === 'download' && (language === 'am' ? 'መተግበሪያውን ያውርዱ' : 'Download App')}
                        <ExternalLink size={12} />
                      </button>
                    )}
                    <span className="support-msg-time">{msg.timestamp}</span>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="support-msg-row agent-row">
                  <div className="support-msg-avatar">
                    <img src="/applogo.png" alt="Mesob" />
                  </div>
                  <div className="support-bubble typing-bubble">
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
              className="support-input-bar" 
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
                    ? 'ጥያቄዎን እዚህ ይጻፉ...'
                    : 'Type your question here...'
                }
                className="support-input-field"
              />
              <button 
                type="submit" 
                className={`support-send-btn ${input.trim() ? 'active' : ''}`}
                disabled={!input.trim() || isTyping}
                aria-label="Send"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIChatWidget;
