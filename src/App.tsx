
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";

// Existing pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// ✅ NEW: import Insights page
import Insights from "./pages/Insights";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import CaseStudiesPage from "./pages/CaseStudies";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LazyMotion features={domAnimation}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* Section routes - all render Index page but scroll to section */}
            <Route path="/services" element={<Index />} />
            <Route path="/about" element={<Index />} />
            <Route path="/contact" element={<Index />} />
            {/* ✅ NEW: Insights route */}
            <Route path="/insights" element={<Insights />} />
            {/* ✅ NEW: Case Studies page route */}
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            {/* ✅ NEW: Case Study detail route */}
            <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
            {/* Catch-all route for 404s */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LazyMotion>
  </QueryClientProvider>
);

export default App;
