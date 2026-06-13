import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import "../../styles/layout/Navbar.css";

const Navbar = ({ setCurrentPage, language, setLanguage, theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Reset if scrolled near the top (hero section)
      if (window.scrollY < 100) {
        setActiveSection("");
        return;
      }

      // Scroll Spy to highlight current section
      const sections = ["features", "how-it-works", "pricing", "reviews", "faq", "contact"];
      const scrollPosition = window.scrollY + 200;
      let matched = false;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            matched = true;
            break;
          }
        }
      }

      if (!matched) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateToSection = (sectionId) => {
    setCurrentPage("home");
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const t = {
    en: {
      features: "Features",
      howItWorks: "How it Works",
      pricing: "Pricing",
      reviews: "Reviews",
      faq: "FAQ",
      contact: "Contact",
      login: "LOGIN",
      brand: "Mesob Academy",
    },
    am: {
      features: "ባህሪያት",
      howItWorks: "እንዴት እንደሚሰራ",
      pricing: "ዋጋዎች",
      reviews: "አስተያየቶች",
      faq: "ጥያቄዎች",
      contact: "ያግኙን",
      login: "ይግቡ",
      brand: "Mesob Academy",
    },
  };

  const currentT = t[language] || t.en;

  const menuVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 25 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 26 } }
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container nav-container">
        <div
          className="nav-brand"
          onClick={() => setCurrentPage("home")}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <img
            src="/favicon.png"
            alt="Mesob Academy Logo"
            style={{ height: "40px", width: "40px", objectFit: "contain" }}
          />
          <span className="brand-name">
            <a
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage("home");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              style={{
                cursor: "pointer",
                color: "var(--text-primary)",
                textDecoration: "none",
              }}
            >
              {currentT.brand}
            </a>
          </span>
        </div>

        <div className="nav-desktop-links">
          <a
            href="#features"
            className={`nav-link ${activeSection === "features" ? "nav-link-active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              navigateToSection("features");
            }}
          >
            {currentT.features}
          </a>
          <a
            href="#how-it-works"
            className={`nav-link ${activeSection === "how-it-works" ? "nav-link-active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              navigateToSection("how-it-works");
            }}
          >
            {currentT.howItWorks}
          </a>
          <a
            href="#pricing"
            className={`nav-link ${activeSection === "pricing" ? "nav-link-active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              navigateToSection("pricing");
            }}
          >
            {currentT.pricing}
          </a>
          <a
            href="#reviews"
            className={`nav-link ${activeSection === "reviews" ? "nav-link-active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              navigateToSection("reviews");
            }}
          >
            {currentT.reviews}
          </a>
          <a
            href="#faq"
            className={`nav-link ${activeSection === "faq" ? "nav-link-active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              navigateToSection("faq");
            }}
          >
            {currentT.faq}
          </a>
          <a
            href="#contact"
            className={`nav-link ${activeSection === "contact" ? "nav-link-active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              navigateToSection("contact");
            }}
          >
            {currentT.contact}
          </a>

          <button
            onClick={() => setLanguage(language === "en" ? "am" : "en")}
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "var(--color-primary)",
              padding: "0.25rem 0.75rem",
              borderRadius: "var(--radius-sm)",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "12px",
            }}
          >
            {language === "en" ? "አማ" : "EN"}
          </button>

          <button
            onClick={toggleTheme}
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "var(--color-primary)",
              padding: "0.25rem 0.5rem",
              borderRadius: "var(--radius-sm)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>

        <button
          className={`mobile-menu-btn ${isOpen ? "is-open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="hamburger-box">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="mobile-menu-overlay"
            />
          )}
          {isOpen && (
            <motion.div
              key="menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
              className="mobile-menu"
            >
              <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="show"
                className="mobile-menu-content"
              >
                <motion.a
                  variants={itemVariants}
                  href="#features"
                  className={`mobile-link ${activeSection === "features" ? "mobile-link-active" : ""}`}
                  onClick={() => {
                    setIsOpen(false);
                    navigateToSection("features");
                  }}
                >
                  {currentT.features}
                </motion.a>
                <motion.a
                  variants={itemVariants}
                  href="#how-it-works"
                  className={`mobile-link ${activeSection === "how-it-works" ? "mobile-link-active" : ""}`}
                  onClick={() => {
                    setIsOpen(false);
                    navigateToSection("how-it-works");
                  }}
                >
                  {currentT.howItWorks}
                </motion.a>
                <motion.a
                  variants={itemVariants}
                  href="#pricing"
                  className={`mobile-link ${activeSection === "pricing" ? "mobile-link-active" : ""}`}
                  onClick={() => {
                    setIsOpen(false);
                    navigateToSection("pricing");
                  }}
                >
                  {currentT.pricing}
                </motion.a>
                <motion.a
                  variants={itemVariants}
                  href="#reviews"
                  className={`mobile-link ${activeSection === "reviews" ? "mobile-link-active" : ""}`}
                  onClick={() => {
                    setIsOpen(false);
                    navigateToSection("reviews");
                  }}
                >
                  {currentT.reviews}
                </motion.a>
                <motion.a
                  variants={itemVariants}
                  href="#faq"
                  className={`mobile-link ${activeSection === "faq" ? "mobile-link-active" : ""}`}
                  onClick={() => {
                    setIsOpen(false);
                    navigateToSection("faq");
                  }}
                >
                  {currentT.faq}
                </motion.a>
                <motion.a
                  variants={itemVariants}
                  href="#contact"
                  className={`mobile-link ${activeSection === "contact" ? "mobile-link-active" : ""}`}
                  onClick={() => {
                    setIsOpen(false);
                    navigateToSection("contact");
                  }}
                >
                  {currentT.contact}
                </motion.a>
                <motion.div
                  variants={itemVariants}
                  className="mobile-actions"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    marginTop: "1.25rem",
                    width: "100%",
                  }}
                >
                  <button
                    onClick={() => {
                      setLanguage(language === "en" ? "am" : "en");
                      setIsOpen(false);
                    }}
                    style={{
                      background: "none",
                      border: "1px solid var(--border-color, rgba(255,255,255,0.15))",
                      color: "var(--text-primary)",
                      padding: "0.6rem 1rem",
                      borderRadius: "var(--radius-sm)",
                      cursor: "pointer",
                      width: "100%",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    {language === "en" ? "አማርኛ" : "English"}
                  </button>
                  <button
                    onClick={() => {
                      toggleTheme();
                      setIsOpen(false);
                    }}
                    style={{
                      background: "none",
                      border: "1px solid var(--border-color, rgba(255,255,255,0.15))",
                      color: "var(--text-primary)",
                      padding: "0.6rem 1rem",
                      borderRadius: "var(--radius-sm)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      width: "100%",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                    {theme === "dark" ? (language === "en" ? "Light Mode" : "የብርሃን ሁነታ") : (language === "en" ? "Dark Mode" : "የጨለማ ሁነታ")}
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </nav>
  );
};

export default Navbar;
