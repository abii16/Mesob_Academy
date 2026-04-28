import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import NotFoundPage from './pages/NotFoundPage';

// Sections
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import HowItWorks from './components/sections/HowItWorks';
import Pricing from './components/sections/Pricing';
import Reviews from './components/sections/Reviews';
import FAQ from './components/sections/FAQ';
import BottomCTA from './components/sections/BottomCTA';
import Contact from './components/sections/Contact';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const toastTimeoutRef = useRef(null);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    toastTimeoutRef.current = setTimeout(() => setShowToast(false), 3000);
  };

  useEffect(() => {
    const handleRoute = () => {
      const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      
      const activeRoute = path || hash;

      const metaDesc = document.querySelector('meta[name="description"]');

      if (!activeRoute || ['features', 'how-it-works', 'pricing', 'reviews', 'faq', 'contact'].includes(activeRoute)) {
        setCurrentPage('home');
        document.title = "Ethio Unique Academy | AI-Powered Educational SaaS";
        if (metaDesc) metaDesc.setAttribute('content', '#1 EdTech in Ethiopia for Grades 9-12. Master the curriculum and ace your exams with AI tutoring, exam drills, and secure offline video resources.');
      } else if (activeRoute === 'privacy') {
        setCurrentPage('privacy');
        document.title = "Privacy Policy | Ethio Unique Academy";
        if (metaDesc) metaDesc.setAttribute('content', 'Read our privacy policy to understand how we secure your academic data.');
        window.scrollTo(0, 0);
      } else if (activeRoute === 'terms') {
        setCurrentPage('terms');
        document.title = "Terms of Service | Ethio Unique Academy";
        if (metaDesc) metaDesc.setAttribute('content', 'Review our terms of service governing usage of the Ethio Unique platform.');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('404');
        document.title = "404 Not Found | Ethio Unique Academy";
        if (metaDesc) metaDesc.setAttribute('content', 'The requested page could not be found on Ethio Unique Academy.');
        window.scrollTo(0, 0);
      }
    };

    handleRoute();
    window.addEventListener('hashchange', handleRoute);
    window.addEventListener('popstate', handleRoute);
    
    return () => {
      window.removeEventListener('hashchange', handleRoute);
      window.removeEventListener('popstate', handleRoute);
    };
  }, []);

  return (
    <div className="app-container">
      <Navbar setCurrentPage={setCurrentPage} />
      
      {currentPage === 'home' && (
        <>
          <Hero triggerToast={triggerToast} />
          <Features />
          <HowItWorks />
          <Pricing triggerToast={triggerToast} />
          <Reviews />
          <FAQ />
          <BottomCTA triggerToast={triggerToast} />
          <Contact triggerToast={triggerToast} />
        </>
      )}

      {currentPage === 'privacy' && <PrivacyPolicy />}
      {currentPage === 'terms' && <TermsOfService />}
      {currentPage === '404' && <NotFoundPage />}

      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="toast-notification"
            style={{ left: '50%', x: '-50%' }}
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
