import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    const routeMap: Record<string, string> = {
      'features': '/services',
      'about': '/about',
      'contact': '/contact'
    };
    const route = routeMap[section];
    
    if (location.pathname !== '/' && route) {
      // If not on homepage, navigate to the route
      navigate(route);
    } else {
      // If on homepage, scroll to section
      const element = document.getElementById(section);
      if (element) {
        const offset = 80; // Account for fixed navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services', section: 'features' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Insights', path: '/insights' },
    { name: 'About', path: '/about', section: 'about' },
    { name: 'Contact', path: '/contact', section: 'contact' },
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
          className="hidden md:flex items-center space-x-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {navLinks.map((link, index) => (
            link.section ? (
              <a 
                key={index}
                href={link.path}
                onClick={(e) => handleSectionClick(e, link.section!)}
                className="nav-link"
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={index}
                to={link.path}
                className="nav-link"
              >
                {link.name}
              </Link>
            )
          ))}
        </motion.nav>
        
        <motion.div 
          className="hidden md:flex items-center gap-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 rounded-lg flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-viridity-100 dark:hover:bg-viridity-900/30 transition-all duration-300"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          
          <Link 
            to="/contact"
            className="bg-viridity-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-viridity-600 transition-colors duration-300"
          >
            Talk to the Founders
          </Link>
        </motion.div>
        
        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 rounded-lg flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button 
            className="text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
                link.section ? (
                  <a 
                    key={index}
                    href={link.path}
                    onClick={(e) => {
                      handleSectionClick(e, link.section!);
                      setIsMenuOpen(false);
                    }}
                    className="text-lg font-medium text-foreground hover:text-viridity-500 transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    key={index}
                    to={link.path}
                    className="text-lg font-medium text-foreground hover:text-viridity-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <Link 
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-viridity-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-viridity-600 transition-colors duration-300 text-center"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
