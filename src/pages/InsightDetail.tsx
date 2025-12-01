import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import Layout from '@/components/Layout';
import { getInsightBySlug } from '@/data/insights';

const InsightDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const insight = slug ? getInsightBySlug(slug) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!insight) {
    return (
      <Layout>
        <section className="section-padding pt-32">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The article you're looking for doesn't exist.
            </p>
            <Link 
              to="/insights"
              className="inline-flex items-center text-viridity-600 hover:text-viridity-700 font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Insights
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  // Function to render content with markdown-style bold text
  const renderContent = (text: string) => {
    // Split by ** for bold text
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, index) => {
      // Odd indices are bold text
      if (index % 2 === 1) {
        return <strong key={index} className="font-semibold text-foreground">{part}</strong>;
      }
      // Handle bullet points
      if (part.includes('• ')) {
        const lines = part.split('\n');
        return (
          <span key={index}>
            {lines.map((line, lineIndex) => {
              if (line.startsWith('• ')) {
                return (
                  <span key={lineIndex} className="block ml-4 my-1">
                    {line}
                  </span>
                );
              }
              return line + (lineIndex < lines.length - 1 ? '\n' : '');
            })}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <Layout>
      <article className="section-padding pt-32">
        <div className="container mx-auto max-w-3xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/insights"
              className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Insights
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-viridity-100 dark:bg-viridity-900/30 text-viridity-700 dark:text-viridity-400 rounded-full text-sm font-medium">
                {insight.category}
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {insight.title}
            </h1>
            
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-b border-border pb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{insight.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{insight.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{insight.readTime}</span>
              </div>
            </div>
          </motion.header>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            {/* Introduction */}
            <p className="text-xl leading-relaxed text-muted-foreground mb-8">
              {insight.content.introduction}
            </p>

            {/* Main Sections */}
            {insight.content.sections.map((section, index) => (
              <motion.section
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="mb-10"
              >
                <h2 className="text-2xl font-bold mb-4 text-viridity-600 dark:text-viridity-400">
                  {section.title}
                </h2>
                <div className="text-foreground/90 leading-relaxed whitespace-pre-line">
                  {renderContent(section.content)}
                </div>
              </motion.section>
            ))}

            {/* Conclusion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + insight.content.sections.length * 0.1 }}
              className="mt-12 p-8 bg-gradient-to-br from-viridity-50 to-viridity-100/50 dark:from-viridity-950/30 dark:to-viridity-900/20 rounded-2xl"
            >
              <p className="text-lg leading-relaxed text-foreground whitespace-pre-line">
                {insight.content.conclusion}
              </p>
            </motion.div>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-border"
          >
            <div className="flex items-center gap-3 flex-wrap">
              <Tag className="h-4 w-4 text-muted-foreground" />
              {insight.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Author Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-12 p-6 bg-white dark:bg-card rounded-2xl glass"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-viridity-100 dark:bg-viridity-900/30 flex items-center justify-center text-viridity-600 dark:text-viridity-400 text-xl font-bold">
                V
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{insight.author}</h3>
                <p className="text-sm text-muted-foreground">
                  Sharing insights on AI, automation, and digital transformation.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 text-center bg-white dark:bg-card rounded-2xl p-8 glass"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground mb-6">
              Let's discuss how AI and automation can help you achieve your goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-viridity-500 hover:bg-viridity-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </article>
    </Layout>
  );
};

export default InsightDetail;

