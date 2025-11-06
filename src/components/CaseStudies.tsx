
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Building2, ShoppingCart, Stethoscope, Bot } from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';

interface CaseStudyCardProps {
  slug: string;
  icon: React.ReactNode;
  title: string;
  industry: string;
  description: string;
  results: string[];
  delay: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ 
  slug,
  icon, 
  title, 
  industry, 
  description, 
  results, 
  delay 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  return (
    <motion.div
      ref={ref}
      className="bg-white dark:bg-card rounded-2xl p-6 card-hover glass h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 rounded-xl bg-viridity-100 dark:bg-viridity-900/30 flex items-center justify-center text-viridity-600 dark:text-viridity-400 flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <p className="text-sm text-viridity-600 dark:text-viridity-400">{industry}</p>
        </div>
      </div>
      
      <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
      
      <div className="space-y-2 mb-4">
        <h4 className="font-medium text-sm">Key Results:</h4>
        <ul className="space-y-1">
          {results.map((result, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-start">
              <span className="text-viridity-500 mr-2">•</span>
              {result}
            </li>
          ))}
        </ul>
      </div>
      
      <Link 
        to={`/case-studies/${slug}`}
        className="mt-auto inline-flex items-center text-viridity-600 dark:text-viridity-400 font-medium hover:translate-x-1 transition-transform duration-300 group"
      >
        Learn More
        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
};

const CaseStudies = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const location = useLocation();
  const isOnCaseStudiesPage = location.pathname === '/case-studies';
  
  const iconMap: Record<string, React.ReactNode> = {
    Building2: <Building2 size={28} />,
    ShoppingCart: <ShoppingCart size={28} />,
    Stethoscope: <Stethoscope size={28} />,
    Bot: <Bot size={28} />
  };

  return (
    <section id="case-studies" className={isOnCaseStudiesPage ? "section-padding pt-32" : "section-padding"}>
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-3 py-1 mb-4 bg-viridity-100 text-viridity-700 rounded-full text-sm font-medium">
              Case Studies
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real Results for Real Businesses
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover how we've helped businesses transform their operations with custom technology solutions.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={study.slug}
              slug={study.slug}
              icon={iconMap[study.icon]}
              title={study.title}
              industry={study.industry}
              description={study.shortDescription}
              results={study.results}
              delay={0.1 * index}
            />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-6">
            Want to see how we can help your business?
          </p>
          <Link 
            to="/#contact"
            className="inline-flex items-center justify-center bg-viridity-500 hover:bg-viridity-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
          >
            Start Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;

