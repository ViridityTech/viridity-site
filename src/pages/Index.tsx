
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Contact from '@/components/Contact';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Map route paths to section IDs
    const routeToSection: Record<string, string> = {
      '/services': 'features',
      '/about': 'about',
      '/contact': 'contact',
    };

    const sectionId = routeToSection[location.pathname];
    
    if (sectionId) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80; // Account for fixed navbar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else if (location.pathname === '/') {
      // If on home route, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <Layout>
      <Hero />
      <Features />
      <About />
      <Contact />
    </Layout>
  );
};

export default Index;
