
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PhoneCall, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };
  
  const contactInfo = [
    {
      icon: <PhoneCall className="h-5 w-5" />,
      title: "Phone",
      details: "+1 (513) 381-5555",
      link: "tel:+15133815555"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      details: "contact@viridity.com",
      link: "mailto:contact@viridity.com"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Office",
      details: "708 Walnut St, Cincinnati, OH 45202",
      link: "https://maps.app.goo.gl/fNP88Nns2wo4fGx2A"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-3 py-1 mb-4 bg-viridity-100 text-viridity-700 rounded-full text-sm font-medium">
              Ready to Start
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Talk to the Founders Directly 
            </h2>
            <p className="text-lg text-muted-foreground">
              Have a vision or project in mind? You’re in the perfect place. We love bringing bold ideas to life and fueling business growth. Let’s make something amazing - starting today.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div 
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a 
                  key={index} 
                  href={item.link}
                  className="flex items-start p-4 rounded-xl glass transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div className="rounded-full w-10 h-10 flex items-center justify-center bg-viridity-100 text-viridity-600 mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-muted-foreground">{item.details}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-8">
  <h4 className="text-lg font-medium mb-4">Follow Us</h4>
  <div className="flex space-x-4">
    <a 
      href="https://linkedin.com"
      className="w-10 h-10 rounded-full bg-viridity-100 text-viridity-600 flex items-center justify-center transition-all duration-300 hover:bg-viridity-500 hover:text-white"
      aria-label="Follow us on linkedin"
    >
      <span className="sr-only">Follow us on linkedin</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    </a>
  </div>
</div>

            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-3 glass rounded-2xl p-8"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Start the Conversation</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-viridity-500 transition-all duration-200"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-viridity-500 transition-all duration-200"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-viridity-500 transition-all duration-200"
                  placeholder="How can we help?"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  We read and respond to every lead. 
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-viridity-500 transition-all duration-200"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-viridity-500 hover:bg-viridity-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Talk to the Founders
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
