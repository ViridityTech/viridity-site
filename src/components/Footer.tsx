
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
        { text: "Careers", url: "#" },
        { text: "Contact Us", url: "#contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { text: "Custom Applications", url: "#" },
        { text: "Workflow Automation", url: "#" },
        { text: "AI Development", url: "#" },
        { text: "WordPress Themes", url: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { text: "Blog", url: "#" },
        { text: "Documentation", url: "#" },
        { text: "Tutorials", url: "#" },
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
              {["twitter", "facebook", "instagram", "linkedin"].map((social, index) => (
                <a 
                  key={index}
                  href={`https://${social}.com`}
                  className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 text-viridity-600 flex items-center justify-center transition-all duration-300 hover:bg-viridity-500 hover:text-white"
                  aria-label={`Follow us on ${social}`}
                >
                  <span className="sr-only">Follow us on {social}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {social === "twitter" && <>
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </>}
                    {social === "facebook" && <>
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </>}
                    {social === "instagram" && <>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </>}
                    {social === "linkedin" && <>
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </>}
                  </svg>
                </a>
              ))}
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
