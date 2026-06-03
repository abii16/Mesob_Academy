import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import "../../styles/sections/Comparison.css";

const Comparison = ({ language }) => {
  const t = {
    en: {
      subtitle: "THE ULTIMATE CHOICE",
      title: "How We Stack Up",
      desc: "Compare Mesob Academy's advanced offline learning and exam simulation platform with other popular student apps in Ethiopia.",
      featureCol: "Key Features",
      mesobCol: "Mesob Academy",
      qelemeCol: "Qeleme App",
      temariCol: "Temari App",
      branaCol: "Brana App",
      features: [
        {
          name: "New Curriculum Resources",
          mesob: true,
          qeleme: true,
          temari: true,
          brana: true,
        },
        {
          name: "Offline PDF Notes & Booklets",
          mesob: true,
          qeleme: false,
          temari: true,
          brana: true,
        },
        {
          name: "Interactive Mock Testing",
          mesob: true,
          qeleme: true,
          temari: false,
          brana: false,
        },
        {
          name: "Vibrant Peer Discussion Rooms",
          mesob: true,
          qeleme: true,
          temari: false,
          brana: false,
        },
        {
          name: "Study Planner & Pomodoro Timer",
          mesob: true,
          qeleme: false,
          temari: false,
          brana: false,
        },
        {
          name: "Speed-Pacing Exam Analytics",
          mesob: true,
          qeleme: false,
          temari: false,
          brana: false,
        },
        {
          name: "One-Time Payment (No Monthly Fees)",
          mesob: true,
          qeleme: false,
          temari: false,
          brana: false,
        },
      ],
    },
    am: {
      subtitle: "ትክክለኛው ምርጫ",
      title: "ከሌሎች ፕላትፎርሞች ጋር ሲነጻጸር",
      desc: "የMesob Academyን የላቀ ከመስመር ውጭ (offline) መማሪያ እና የፈተና ማስመስያ ፕላትፎርም በኢትዮጵያ ካሉ ሌሎች ታዋቂ መተግበሪያዎች ጋር ያወዳድሩ።",
      featureCol: "ዋና ዋና ባህሪያት",
      mesobCol: "Mesob Academy",
      qelemeCol: "Qeleme App",
      temariCol: "Temari App",
      branaCol: "Brana App",
      features: [
        {
          name: "ከአዲሱ ሥርዓተ ትምህርት ጋር የተጣጣሙ ግብዓቶች",
          mesob: true,
          qeleme: true,
          temari: true,
          brana: true,
        },
        {
          name: "የጥናት ማስታወሻዎች ከመስመር ውጭ (offline)",
          mesob: true,
          qeleme: false,
          temari: true,
          brana: true,
        },
        {
          name: "አሳታፊ የልምምድ/የሙከራ ፈተናዎች",
          mesob: true,
          qeleme: true,
          temari: false,
          brana: false,
        },
        {
          name: "የተማሪዎች የጋራ የውይይት መድረክ",
          mesob: true,
          qeleme: true,
          temari: false,
          brana: false,
        },
        {
          name: "የጥናት እቅድ አውጪ እና የትኩረት ሰዓት (Pomodoro)",
          mesob: true,
          qeleme: false,
          temari: false,
          brana: false,
        },
        {
          name: "የፍጥነት እና የጊዜ አጠቃቀም ትንታኔ",
          mesob: true,
          qeleme: false,
          temari: false,
          brana: false,
        },
        {
          name: "የአንድ ጊዜ ክፍያ (ወርሃዊ ክፍያ የሌለው)",
          mesob: true,
          qeleme: false,
          temari: false,
          brana: false,
        },
      ],
    },
  };

  const currentT = t[language] || t.en;

  return (
    <section className="comparison-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle-new">{currentT.subtitle}</span>
          <h2 className="section-title-new">{currentT.title}</h2>
          <p className="comparison-desc">{currentT.desc}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="comparison-table-wrapper glass"
        >
          <table className="comparison-table">
            <thead>
              <tr>
                <th>{currentT.featureCol}</th>
                <th className="highlight-column">{currentT.mesobCol}</th>
                <th>{currentT.qelemeCol}</th>
                <th>{currentT.temariCol}</th>
                <th>{currentT.branaCol}</th>
              </tr>
            </thead>
            <tbody>
              {currentT.features.map((feature, idx) => (
                <tr key={idx}>
                  <td className="feature-name">{feature.name}</td>
                  <td className="highlight-column cell-center">
                    {feature.mesob ? (
                      <Check className="icon-check" size={20} />
                    ) : (
                      <X className="icon-x" size={20} />
                    )}
                  </td>
                  <td className="cell-center">
                    {feature.qeleme ? (
                      <Check className="icon-check" size={20} />
                    ) : (
                      <X className="icon-x" size={20} />
                    )}
                  </td>
                  <td className="cell-center">
                    {feature.temari ? (
                      <Check className="icon-check" size={20} />
                    ) : (
                      <X className="icon-x" size={20} />
                    )}
                  </td>
                  <td className="cell-center">
                    {feature.brana ? (
                      <Check className="icon-check" size={20} />
                    ) : (
                      <X className="icon-x" size={20} />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
