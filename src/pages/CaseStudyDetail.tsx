
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Building2, ShoppingCart, Stethoscope } from 'lucide-react';
import Layout from '@/components/Layout';
import { getCaseStudyBySlug } from '@/data/caseStudies';

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 size={32} />,
  ShoppingCart: <ShoppingCart size={32} />,
  Stethoscope: <Stethoscope size={32} />
};

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = slug ? getCaseStudyBySlug(slug) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!caseStudy) {
    return (
      <Layout>
        <section className="section-padding">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The case study you're looking for doesn't exist.
            </p>
            <Link 
              to="/#case-studies"
              className="inline-flex items-center text-viridity-600 hover:text-viridity-700 font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-padding pt-32">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/#case-studies"
              className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-viridity-100 dark:bg-viridity-900/30 flex items-center justify-center text-viridity-600 dark:text-viridity-400 flex-shrink-0">
                {iconMap[caseStudy.icon]}
              </div>
              <div>
                <div className="inline-block px-3 py-1 mb-3 bg-viridity-100 text-viridity-700 rounded-full text-sm font-medium">
                  {caseStudy.industry}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {caseStudy.title}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {caseStudy.shortDescription}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Full Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none mb-12"
          >
            <p className="text-lg leading-relaxed text-foreground">
              {caseStudy.fullDescription}
            </p>
          </motion.div>

          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-viridity-50/50 dark:bg-viridity-950/20 rounded-2xl p-6"
            >
              <h2 className="text-2xl font-semibold mb-4 text-viridity-600 dark:text-viridity-400">
                The Challenge
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {caseStudy.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-card rounded-2xl p-6 glass"
            >
              <h2 className="text-2xl font-semibold mb-4 text-viridity-600 dark:text-viridity-400">
                Our Solution
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {caseStudy.solution}
              </p>
            </motion.div>
          </div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Key Results</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {caseStudy.results.map((result, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-white dark:bg-card rounded-xl glass"
                >
                  <CheckCircle2 className="h-5 w-5 text-viridity-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-foreground">{result}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technologies */}
          {caseStudy.technologies && caseStudy.technologies.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-viridity-100 dark:bg-viridity-900/30 text-viridity-700 dark:text-viridity-400 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Testimonial */}
          {caseStudy.testimonial && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-gradient-to-br from-viridity-50 to-viridity-100/50 dark:from-viridity-950/30 dark:to-viridity-900/20 rounded-2xl p-8 mb-12"
            >
              <blockquote className="text-xl italic text-foreground mb-4">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-foreground">
                    {caseStudy.testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {caseStudy.testimonial.role}, {caseStudy.testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center bg-white dark:bg-card rounded-2xl p-8 glass"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can help you achieve similar results.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center bg-viridity-500 hover:bg-viridity-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudyDetail;

