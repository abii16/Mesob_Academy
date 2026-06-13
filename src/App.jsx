import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";

// Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFoundPage from "./pages/NotFoundPage";

// Sections
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import HowItWorks from "./components/sections/HowItWorks";
import Comparison from "./components/sections/Comparison";
import Pricing from "./components/sections/Pricing";
import Reviews from "./components/sections/Reviews";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [language, setLanguage] = useState("en");
  const [isBlurred, setIsBlurred] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const toastTimeoutRef = useRef(null);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    toastTimeoutRef.current = setTimeout(() => setShowToast(false), 3000);
  };

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      return next;
    });
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light-theme");
    } else {
      root.classList.remove("light-theme");
    }
  }, [theme]);

  useEffect(() => {
    const handleRoute = () => {
      const path = window.location.pathname.replace(/^\/+|\/+$/g, "");
      const hash = window.location.hash.replace("#/", "").replace("#", "");

      const activeRoute = path || hash;

      const metaDesc = document.querySelector('meta[name="description"]');

      if (
        !activeRoute ||
        [
          "features",
          "how-it-works",
          "pricing",
          "reviews",
          "faq",
          "contact",
        ].includes(activeRoute)
      ) {
        setCurrentPage("home");
        document.title = "Mesob Academy | Premium Educational Platform";
        if (metaDesc)
          metaDesc.setAttribute(
            "content",
            language === "en"
              ? "#1 EdTech in Ethiopia for Grades 9-12. Master the curriculum and ace your exams with community support, exam drills, and secure offline video resources."
              : "ለ9-12ኛ ክፍል በኢትዮጵያ #1 የትምህርት ቴክኖሎጂ። ፈተናዎችዎን በተማሪዎች ማህበረሰብ፣ በፈተና ልምምዶች እና ደህንነቱ በተጠበቀ ከመስመር ውጭ የቪዲዮ ግብአቶች ያጠናክሩ።",
          );
      } else if (activeRoute === "privacy") {
        setCurrentPage("privacy");
        document.title = "Privacy Policy | Mesob Academy";
        if (metaDesc)
          metaDesc.setAttribute(
            "content",
            language === "en"
              ? "Read our privacy policy to understand how we secure your academic data."
              : "የትምህርት መረጃዎን እንዴት እንደምንጠብቅ ለማወቅ የእኛን የግላዊነት ፖሊሲ ያንብቡ።",
          );
        window.scrollTo(0, 0);
      } else if (activeRoute === "terms") {
        setCurrentPage("terms");
        document.title = "Terms of Service | Mesob Academy";
        if (metaDesc)
          metaDesc.setAttribute(
            "content",
            language === "en"
              ? "Review our terms of service governing usage of the Mesob Academy platform."
              : "የኢትዮ ዩኒክ ፕላትፎርም አጠቃቀምን የሚገዙ የአገልግሎት ውሎቻችንን ይገምግሙ።",
          );
        window.scrollTo(0, 0);
      } else {
        setCurrentPage("404");
        document.title = "404 Not Found | Mesob Academy";
        if (metaDesc)
          metaDesc.setAttribute(
            "content",
            language === "en"
              ? "The requested page could not be found on Mesob Academy."
              : "የተጠየቀው ገጽ በኢትዮ ዩኒክ አካዳሚ ላይ አልተገኘም።",
          );
        window.scrollTo(0, 0);
      }
    };

    handleRoute();
    window.addEventListener("hashchange", handleRoute);
    window.addEventListener("popstate", handleRoute);

    return () => {
      window.removeEventListener("hashchange", handleRoute);
      window.removeEventListener("popstate", handleRoute);
    };
  }, [language]);

  useEffect(() => {
    const preventCopy = (e) => {
      e.preventDefault();
    };
    const preventRightClick = (e) => {
      e.preventDefault();
    };

    document.addEventListener("copy", preventCopy);
    document.addEventListener("cut", preventCopy);
    document.addEventListener("contextmenu", preventRightClick);

    return () => {
      document.removeEventListener("copy", preventCopy);
      document.removeEventListener("cut", preventCopy);
      document.removeEventListener("contextmenu", preventRightClick);
    };
  }, []);

  useEffect(() => {
    const handleBlur = () => setIsBlurred(true);
    const handleFocus = () => setIsBlurred(false);
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "PrintScreen" || e.keyCode === 44) {
        setIsBlurred(true);
        triggerToast(language === "en" ? "Screenshots are protected on this site." : "በዚህ ጣቢያ ላይ ስክሪንሾት ማድረግ አይፈቀድም።");
        setTimeout(() => setIsBlurred(false), 2000);
      }
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("keyup", handleKeyDown);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("keyup", handleKeyDown);
    };
  }, [language]);

  return (
    <div className={`app-container ${isBlurred ? "app-blurred" : ""}`}>
      <Navbar
        setCurrentPage={setCurrentPage}
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {currentPage === "home" && (
        <>
          <Hero triggerToast={triggerToast} language={language} />
          <Features language={language} />
          <HowItWorks language={language} />
          <Comparison language={language} />
          <Pricing triggerToast={triggerToast} language={language} />
          <Reviews language={language} />
          <FAQ language={language} />
          <Contact triggerToast={triggerToast} language={language} />
        </>
      )}

      {currentPage === "privacy" && <PrivacyPolicy language={language} />}
      {currentPage === "terms" && <TermsOfService language={language} />}
      {currentPage === "404" && <NotFoundPage />}

      <Footer
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        language={language}
      />

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="toast-notification"
            style={{ left: "50%", x: "-50%" }}
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
