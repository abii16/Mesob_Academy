import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = ({ setCurrentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (sectionId) => {
    setCurrentPage('home');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="nav-brand" onClick={() => setCurrentPage('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src="/favicon.png" alt="Ethio Unique Academy Logo" style={{ height: '40px', width: '40px', objectFit: 'contain' }} />
          <span className="brand-name"><a href="/"  style={{ cursor: 'pointer' , color: 'white', textDecoration: 'none' }}>Ethio Unique Academy</a></span>
        </div>

        <div className="nav-desktop-links">
          <a href="#features" className="nav-link" onClick={(e) => { e.preventDefault(); navigateToSection('features'); }}>Features</a>
          <a href="#how-it-works" className="nav-link" onClick={(e) => { e.preventDefault(); navigateToSection('how-it-works'); }}>How it Works</a>
          <a href="#pricing" className="nav-link" onClick={(e) => { e.preventDefault(); navigateToSection('pricing'); }}>Pricing</a>
          <a href="#reviews" className="nav-link" onClick={(e) => { e.preventDefault(); navigateToSection('reviews'); }}>Reviews</a>
          <a href="#faq" className="nav-link" onClick={(e) => { e.preventDefault(); navigateToSection('faq'); }}>FAQ</a>
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
              <a href="#features" className="mobile-link" onClick={() => setIsOpen(false)}>Features</a>
              <a href="#how-it-works" className="mobile-link" onClick={() => setIsOpen(false)}>How it Works</a>
              <a href="#pricing" className="mobile-link" onClick={() => setIsOpen(false)}>Pricing</a>
              <a href="#reviews" className="mobile-link" onClick={() => setIsOpen(false)}>Reviews</a>
              <a href="#faq" className="mobile-link" onClick={() => setIsOpen(false)}>FAQ</a>
              <div className="mobile-actions" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                <button className="nav-login-btn" style={{ textAlign: 'left', padding: '0.5rem 0' }}>LOGIN</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
