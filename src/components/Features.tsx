
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  AppWindow, 
  Workflow, 
  Bot, 
  Boxes, 
  LayoutGrid, 
  Layers,
  Palette,
  Maximize,
  Smartphone
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  return (
    <motion.div
      ref={ref}
      className="bg-white dark:bg-card rounded-2xl p-6 card-hover glass"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <div className="w-12 h-12 rounded-xl bg-viridity-100 dark:bg-viridity-900/30 flex items-center justify-center text-viridity-600 dark:text-viridity-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  const features = [
    {
      icon: <AppWindow size={24} />,
      title: "Custom Applications",
      description: "Bespoke web applications tailored to your specific business needs and workflows."
    },
    {
      icon: <Workflow size={24} />,
      title: "Workflow Automation",
      description: "Streamline processes with intelligent automation that saves time and reduces errors."
    },
    {
      icon: <Bot size={24} />,
      title: "AI Agents",
      description: "Intelligent virtual assistants that handle tasks, answer questions, and provide support."
    },
    {
      icon: <Boxes size={24} />,
      title: "Integration Platform",
      description: "Connect your tools and systems seamlessly for unified data and processes."
    },
    {
      icon: <LayoutGrid size={24} />,
      title: "Intuitive Interfaces",
      description: "User-friendly designs that prioritize usability and accessibility."
    },
    {
      icon: <Layers size={24} />,
      title: "Scalable Architecture",
      description: "Future-proof solutions that grow with your business needs and challenges."
    },
    {
      icon: <Palette size={24} />,
      title: "Custom Design",
      description: "Unique visual identity that aligns with your brand and enhances user experience."
    },
    {
      icon: <Maximize size={24} />,
      title: "Performance Focused",
      description: "Optimized for speed, reliability and seamless user interactions."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Responsive Design",
      description: "Perfect experience across all devices from desktops to mobile phones."
    }
  ];

  return (
    <section id="features" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-3 py-1 mb-4 bg-viridity-100 text-viridity-700 rounded-full text-sm font-medium">
              Our Features
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cutting-Edge Solutions for Modern Businesses
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our comprehensive suite of services designed to transform your digital presence and streamline your operations.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
