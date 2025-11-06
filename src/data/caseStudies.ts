
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
    slug: "ai-powered-lead-forecasting",
    title: "AI-Powered Lead Forecasting Platform",
    industry: "Marketing Analytics",
    icon: "Bot",
    shortDescription: "Built a comprehensive machine learning platform that predicts lead generation across 20+ locations by integrating Salesforce, Google Ads, and spend data with automated model selection.",
    fullDescription: "A multi-location business needed accurate lead forecasting to optimize marketing budget allocation across markets. They struggled with manual forecasting processes, disconnected data sources, and lacked visibility into what drives lead generation in different locations.",
    challenge: "The business was manually aggregating data from Salesforce, Google Ads, and spreadsheets, spending 10-15 hours weekly on forecasting. They had no unified view of lead performance, inaccurate predictions leading to poor budget decisions, and no way to identify which factors drive leads in different markets.",
    solution: "We developed an AI-powered forecasting platform that automatically integrates data from Salesforce, Google Ads, and Google Sheets. The system uses advanced feature engineering (30+ predictive features) and automatically selects the best-performing machine learning model (Random Forest or Gradient Boosting) for each location. A Streamlit dashboard provides interactive forecasting, feature importance analysis, and real-time visualization.",
    results: [
      "10-15 hours saved weekly on manual data aggregation",
      "Automated model selection ensures optimal accuracy per location",
      "RMSE accuracy ranging from 0.22 to 9.88 leads per location",
      "Data-driven budget allocation with ROI visibility",
      "Scalable to 20+ locations with automated processes"
    ],
    technologies: ["Python", "Machine Learning", "Scikit-learn", "Streamlit", "Salesforce API", "Google Ads API"],
    testimonial: {
      quote: "The platform transformed our forecasting process. We now have accurate, data-driven predictions that guide our marketing spend allocation across all locations.",
      author: "Marketing Director",
      role: "Marketing Director",
      company: "Multi-Location Business"
    }
  },
  {
    slug: "coming-soon-1",
    title: "Coming Soon",
    industry: "Case Study",
    icon: "Building2",
    shortDescription: "We're working on exciting new case studies. Check back soon to see more examples of how we've helped businesses transform their operations.",
    fullDescription: "We're continuously working on innovative solutions for our clients. New case studies will be added here soon showcasing our latest projects and successes.",
    challenge: "Stay tuned for detailed case studies of our recent work.",
    solution: "We're preparing comprehensive case studies that demonstrate our capabilities across various industries and use cases.",
    results: [
      "More case studies coming soon",
      "Stay tuned for updates"
    ],
    technologies: []
  },
  {
    slug: "coming-soon-2",
    title: "Coming Soon",
    industry: "Case Study",
    icon: "ShoppingCart",
    shortDescription: "We're working on exciting new case studies. Check back soon to see more examples of how we've helped businesses transform their operations.",
    fullDescription: "We're continuously working on innovative solutions for our clients. New case studies will be added here soon showcasing our latest projects and successes.",
    challenge: "Stay tuned for detailed case studies of our recent work.",
    solution: "We're preparing comprehensive case studies that demonstrate our capabilities across various industries and use cases.",
    results: [
      "More case studies coming soon",
      "Stay tuned for updates"
    ],
    technologies: []
  }
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudies.find(study => study.slug === slug);
};

