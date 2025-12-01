import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import { insights } from '../data/insights';

const Insights = () => (
  <Layout>
    <section id="insights" className="section-padding bg-viridity-50/30 dark:bg-viridity-950/10">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Insights & <span className="text-viridity-600">Ideas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Stay ahead with articles and commentary from our team on the future of AI, technology, and strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {insights.map((post, index) => (
            <motion.div
              key={index}
              className="group p-6 bg-white dark:bg-card shadow-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Category Badge */}
              <div className="mb-3">
                <span className="inline-block px-2 py-1 bg-viridity-100 dark:bg-viridity-900/30 text-viridity-700 dark:text-viridity-400 rounded text-xs font-medium">
                  {post.category}
                </span>
              </div>
              
              <Link to={`/insights/${post.slug}`}>
                <h3 className="text-2xl font-semibold text-viridity-700 dark:text-viridity-400 mb-2 group-hover:text-viridity-600 dark:group-hover:text-viridity-300 transition-colors">
                  {post.title}
                </h3>
              </Link>
              
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>
                
                <Link 
                  to={`/insights/${post.slug}`}
                  className="inline-flex items-center gap-1 text-viridity-600 dark:text-viridity-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Read more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Insights;

