
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px 0px" });
  
  const advantages = [
    "Cutting-edge WordPress design principles",
    "Optimized for speed and performance",
    "SEO-friendly architecture",
    "Seamless integration capabilities",
    "Responsive design for all devices",
    "Custom admin dashboard options"
  ];
  
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "200+", label: "Projects Completed" },
    { value: "50+", label: "Team Members" },
    { value: "99%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="section-padding bg-viridity-50/30 dark:bg-viridity-950/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block px-3 py-1 mb-4 bg-viridity-100 text-viridity-700 rounded-full text-sm font-medium">
              About Viridity
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transforming Ideas Into <span className="text-viridity-600">Digital Realities</span>
            </h2>
            <p className="text-lg mb-6 text-muted-foreground">
              Viridity Technologies specializes in creating custom applications, automating workflows, and developing AI agents that drive business growth. Our WordPress theme reflects our commitment to innovation, usability, and exceptional performance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-viridity-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>{advantage}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center bg-viridity-500 hover:bg-viridity-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              Work With Us
            </a>
          </motion.div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-viridity-500/20 to-purple-500/10 rounded-2xl blur-3xl opacity-30 dark:opacity-20" />
            <motion.div 
              className="relative bg-white dark:bg-card rounded-2xl overflow-hidden shadow-xl glass"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="h-6 bg-[#f0f0f0] dark:bg-gray-800 flex items-center px-4">
                <div className="w-3 h-3 rounded-full bg-red-400 mr-2" />
                <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="p-6">
                <div className="w-full aspect-video bg-gradient-to-br from-viridity-100 to-viridity-50 dark:from-viridity-900/30 dark:to-viridity-800/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-viridity-600 dark:text-viridity-400 w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4" />
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-full" />
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-5/6" />
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-4/6" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-viridity-600 mb-2">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
