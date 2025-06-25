
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Company",
      links: [
        { text: "About Us", url: "#about" },
        { text: "Our Team", url: "#" },
        { text: "Our Mission", url: "#" },
        { text: "Contact Us", url: "#contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { text: "Custom Applications", url: "#" },
        { text: "Workflow Automation", url: "#" },
        { text: "AI Development", url: "#" },
        { text: "API Integrations", url: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { text: "Insights", url: "/insights" },
        { text: "Portfolio", url: "#" },
        { text: "FAQs", url: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-viridity-50 dark:bg-gray-900 text-foreground">
      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-viridity-500 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold">V</span>
              </div>
              <span className="text-xl font-bold">Viridity</span>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md">
              Viridity Technologies specializes in creating cutting-edge digital solutions, including custom applications, workflow automation, and AI agents that drive business growth.
            </p>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://linkedin.com"
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 text-viridity-600 flex items-center justify-center transition-all duration-300 hover:bg-viridity-500 hover:text-white"
                aria-label="Follow us on linkedin"
              >
                <span className="sr-only">Follow us on linkedin</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {footerLinks.map((column, colIndex) => (
              <div key={colIndex}>
                <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.url} 
                        className="text-muted-foreground hover:text-viridity-500 transition-colors duration-200 flex items-center"
                      >
                        <ChevronRight className="h-4 w-4 mr-1" />
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <hr className="border-t border-viridity-100 dark:border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Viridity Technologies. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-viridity-500 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-viridity-500 transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-viridity-500 transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
