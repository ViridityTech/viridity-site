import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="section-padding pt-32 min-h-[70vh] flex items-center">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Large 404 */}
              <div className="relative mb-8">
                <h1 className="text-[150px] md:text-[200px] font-bold text-viridity-100 dark:text-viridity-900/30 leading-none select-none">
                  404
                </h1>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-viridity-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Search className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Page Not Found
              </motion.h2>
              
              <motion.p 
                className="text-lg text-muted-foreground mb-8 max-w-md mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Oops! The page you're looking for doesn't exist or has been moved. 
                Let's get you back on track.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link 
                  to="/"
                  className="inline-flex items-center justify-center bg-viridity-500 hover:bg-viridity-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  <Home className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
                <button 
                  onClick={() => window.history.back()}
                  className="inline-flex items-center justify-center border border-border hover:border-viridity-500 px-6 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Go Back
                </button>
              </motion.div>
              
              {/* Helpful Links */}
              <motion.div 
                className="mt-12 pt-8 border-t border-border"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <p className="text-sm text-muted-foreground mb-4">
                  Here are some helpful links:
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link 
                    to="/services" 
                    className="text-viridity-600 dark:text-viridity-400 hover:underline"
                  >
                    Services
                  </Link>
                  <Link 
                    to="/case-studies" 
                    className="text-viridity-600 dark:text-viridity-400 hover:underline"
                  >
                    Case Studies
                  </Link>
                  <Link 
                    to="/insights" 
                    className="text-viridity-600 dark:text-viridity-400 hover:underline"
                  >
                    Insights
                  </Link>
                  <Link 
                    to="/contact" 
                    className="text-viridity-600 dark:text-viridity-400 hover:underline"
                  >
                    Contact
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
