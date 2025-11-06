
// Case Studies Data
export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies?: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "enterprise-resource-planning",
    title: "Enterprise Resource Planning",
    industry: "Manufacturing",
    icon: "Building2",
    shortDescription: "Developed a custom ERP system to streamline operations, inventory management, and real-time reporting for a mid-sized manufacturing company.",
    fullDescription: "A mid-sized manufacturing company was struggling with disconnected systems, manual data entry, and lack of real-time visibility into their operations. They needed a unified solution that could handle everything from inventory management to production planning and financial reporting.",
    challenge: "The client was using multiple disconnected systems including spreadsheets, legacy software, and manual processes. This led to data inconsistencies, delayed reporting, and inefficient operations. They needed a comprehensive ERP solution that could integrate all aspects of their business.",
    solution: "We developed a custom ERP system built with modern web technologies that integrated inventory management, production planning, sales, purchasing, and financial reporting into a single platform. The system features real-time dashboards, automated workflows, and mobile accessibility for on-the-go management.",
    results: [
      "40% reduction in operational costs",
      "60% faster inventory processing",
      "Real-time analytics dashboard",
      "Eliminated manual data entry errors",
      "Improved decision-making with instant insights"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "REST APIs"],
    testimonial: {
      quote: "The ERP system transformed how we operate. We now have complete visibility into our operations and can make data-driven decisions instantly.",
      author: "John Smith",
      role: "Operations Director",
      company: "Manufacturing Co."
    }
  },
  {
    slug: "e-commerce-automation",
    title: "E-Commerce Automation",
    industry: "Retail",
    icon: "ShoppingCart",
    shortDescription: "Built an AI-powered automation system that handles order processing, customer service, and inventory synchronization across multiple sales channels.",
    fullDescription: "A growing e-commerce retailer was overwhelmed by manual order processing, customer inquiries, and inventory management across multiple platforms including their website, Amazon, eBay, and Shopify. They needed intelligent automation to scale their operations.",
    challenge: "The business was spending 8+ hours daily on repetitive tasks like order processing, inventory updates, and customer service responses. As they grew, this became unsustainable and was limiting their ability to scale.",
    solution: "We created an AI-powered automation platform that integrates with all their sales channels. The system automatically processes orders, syncs inventory in real-time, handles customer inquiries with AI chatbots, and provides predictive analytics for inventory management.",
    results: [
      "80% reduction in manual tasks",
      "24/7 automated customer support",
      "Seamless multi-platform integration",
      "50% faster order fulfillment",
      "Reduced inventory discrepancies by 95%"
    ],
    technologies: ["Python", "AI/ML", "API Integrations", "Cloud Infrastructure"],
    testimonial: {
      quote: "This automation system freed up our team to focus on growth and strategy. We've scaled 3x without adding staff.",
      author: "Sarah Johnson",
      role: "Founder & CEO",
      company: "Retail Brand"
    }
  },
  {
    slug: "healthcare-workflow-system",
    title: "Healthcare Workflow System",
    industry: "Healthcare",
    icon: "Stethoscope",
    shortDescription: "Created a HIPAA-compliant patient management system with AI-assisted scheduling, billing automation, and secure data management.",
    fullDescription: "A healthcare practice needed to modernize their patient management while maintaining strict HIPAA compliance. They required a system that could handle patient scheduling, medical records, billing, and secure communication while improving efficiency.",
    challenge: "The practice was using outdated software that didn't integrate well, leading to double data entry, scheduling conflicts, and compliance concerns. They needed a modern, secure solution that could streamline operations while meeting strict healthcare regulations.",
    solution: "We developed a HIPAA-compliant patient management system with AI-powered scheduling optimization, automated billing workflows, secure patient portals, and comprehensive audit trails. The system includes role-based access controls and end-to-end encryption.",
    results: [
      "50% faster patient onboarding",
      "Automated compliance tracking",
      "Improved data security",
      "Reduced scheduling conflicts by 70%",
      "Faster claim processing and reimbursement"
    ],
    technologies: ["React", "HIPAA Compliance", "Encryption", "Cloud Security"],
    testimonial: {
      quote: "The system has revolutionized our practice. We're more efficient, compliant, and our patients love the modern experience.",
      author: "Dr. Michael Chen",
      role: "Medical Director",
      company: "Healthcare Practice"
    }
  }
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudies.find(study => study.slug === slug);
};

