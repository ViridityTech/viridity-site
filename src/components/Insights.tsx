import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  {
    title: "Welcome to Insights",
    excerpt: "Explore our latest thinking on AI, automation, and digital innovation.",
    date: "June 2025",
    author: "Viridity Team",
  },
  {
    title: "The Future of Process Automation",
    excerpt: "How businesses are using AI to drive efficiency across operations.",
    date: "May 2025",
    author: "Viridity Team",
  },
];

const Insights = () => {
  return (
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
          {posts.map((post, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white dark:bg-card shadow-lg rounded-xl transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-viridity-700 dark:text-viridity-400 mb-2">
                {post.title}
              </h3>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {post.date} • {post.author}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;