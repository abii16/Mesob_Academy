import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import "../../styles/layout/Navbar.css";

const Navbar = ({ setCurrentPage, language, setLanguage, theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
              href="/"
              style={{
                cursor: "pointer",
                color: "white",
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
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection("features");
            }}
          >
            {currentT.features}
          </a>
          <a
            href="#how-it-works"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection("how-it-works");
            }}
          >
            {currentT.howItWorks}
          </a>
          <a
            href="#pricing"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection("pricing");
            }}
          >
            {currentT.pricing}
          </a>
          <a
            href="#reviews"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection("reviews");
            }}
          >
            {currentT.reviews}
          </a>
          <a
            href="#faq"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection("faq");
            }}
          >
            {currentT.faq}
          </a>
          <a
            href="#contact"
            className="nav-link"
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

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu"
          >
            <div className="mobile-menu-content">
              <a
                href="#features"
                className="mobile-link"
                onClick={() => {
                  setIsOpen(false);
                  navigateToSection("features");
                }}
              >
                {currentT.features}
              </a>
              <a
                href="#how-it-works"
                className="mobile-link"
                onClick={() => {
                  setIsOpen(false);
                  navigateToSection("how-it-works");
                }}
              >
                {currentT.howItWorks}
              </a>
              <a
                href="#pricing"
                className="mobile-link"
                onClick={() => {
                  setIsOpen(false);
                  navigateToSection("pricing");
                }}
              >
                {currentT.pricing}
              </a>
              <a
                href="#reviews"
                className="mobile-link"
                onClick={() => {
                  setIsOpen(false);
                  navigateToSection("reviews");
                }}
              >
                {currentT.reviews}
              </a>
              <a
                href="#faq"
                className="mobile-link"
                onClick={() => {
                  setIsOpen(false);
                  navigateToSection("faq");
                }}
              >
                {currentT.faq}
              </a>
              <a
                href="#contact"
                className="mobile-link"
                onClick={() => {
                  setIsOpen(false);
                  navigateToSection("contact");
                }}
              >
                {currentT.contact}
              </a>
              <div
                className="mobile-actions"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  marginTop: "1rem",
                }}
              >
                <button
                  onClick={() => {
                    setLanguage(language === "en" ? "am" : "en");
                    setIsOpen(false);
                  }}
                  style={{
                    background: "none",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-primary)",
                    padding: "0.5rem 1rem",
                    borderRadius: "var(--radius-sm)",
                    cursor: "pointer",
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
                    border: "1px solid var(--border-color)",
                    color: "var(--text-primary)",
                    padding: "0.5rem 1rem",
                    borderRadius: "var(--radius-sm)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                  {theme === "dark" ? (language === "en" ? "Light Mode" : "የብርሃን ሁነታ") : (language === "en" ? "Dark Mode" : "የጨለማ ሁነታ")}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
