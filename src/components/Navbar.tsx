
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'Services', path: '#products' },
    { name: 'About', path: '#about' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass py-3" : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="flex items-center">
          <motion.div 
            className="text-2xl font-bold text-foreground flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-8 h-8 bg-viridity-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">V</span>
            </div>
            <span>Viridity</span>
          </motion.div>
        </Link>
        
        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden md:flex space-x-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {navLinks.map((link, index) => (
            <a 
              key={index}
              href={link.path}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
        </motion.nav>
        
        <motion.div 
          className="hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="#contact" 
            className="bg-viridity-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-viridity-600 transition-colors duration-300"
          >
            Talk to the Founders
          </a>
        </motion.div>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="block md:hidden text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-x-0 top-[60px] glass p-6 md:hidden shadow-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-5">
              {navLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.path}
                  className="text-lg font-medium text-foreground hover:text-viridity-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="bg-viridity-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-viridity-600 transition-colors duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
