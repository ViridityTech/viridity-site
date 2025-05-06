import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Terminal, Cpu, Infinity } from 'lucide-react';

const Hero = () => {
  const orbitRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbitRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = orbitRef.current.getBoundingClientRect();
      
      const x = (clientX - left - width / 2) / 25;
      const y = (clientY - top - height / 2) / 25;
      
      orbitRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const iconVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };
  
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-viridity-50/30 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="inline-block px-3 py-1 mb-4 bg-viridity-100 text-viridity-700 rounded-full text-sm font-medium">
                Modern Theme for Your Next Project
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                <span className="block">Welcome to</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-viridity-600 to-viridity-400">
                  Viridify Theme
                </span>
              </h1>
              
              <p className="text-lg md:text-xl mb-8 text-foreground/80 max-w-xl">
                This is a test update to verify that changes are working correctly. The Viridify theme combines modern design with powerful functionality for an exceptional web experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="bg-viridity-500 hover:bg-viridity-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a 
                  href="#features" 
                  className="border border-border hover:border-viridity-500 px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="flex-1 relative">
            <div className="absolute w-full h-full bg-gradient-to-r from-background via-transparent to-background z-10" />
            <motion.div 
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div ref={orbitRef} className="relative transition-transform duration-200 ease-out">
                {/* Central element */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-viridity-500 rounded-3xl flex items-center justify-center z-20 shadow-lg">
                  <Cpu className="text-white w-10 h-10" />
                </div>
                
                {/* Orbiting elements */}
                <motion.div 
                  className="absolute left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md glass"
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.7 }}
                >
                  <Code className="text-viridity-600 w-8 h-8" />
                </motion.div>
                
                <motion.div 
                  className="absolute right-1/4 top-1/3 translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md glass"
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.9 }}
                >
                  <Terminal className="text-viridity-600 w-7 h-7" />
                </motion.div>
                
                <motion.div 
                  className="absolute left-1/3 bottom-1/4 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md glass"
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 1.1 }}
                >
                  <Infinity className="text-viridity-600 w-6 h-6" />
                </motion.div>
                
                <motion.div 
                  className="w-[400px] h-[400px] rounded-full border border-dashed border-viridity-200 animate-[spin_20s_linear_infinite] opacity-70"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.7, scale: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
                
                <motion.div 
                  className="absolute inset-0 w-[300px] h-[300px] mx-auto my-auto rounded-full border border-dashed border-viridity-300 animate-[spin_15s_linear_infinite_reverse] opacity-70"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.7, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
