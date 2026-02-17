"use client";

import { useEffect } from "react";
import { Hero } from "@/components/hero";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { AboutPreview } from "@/components/home/about-preview";
//import { FeaturedWork } from "@/components/home/featured-work";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  return (
    <div className="bg-background text-foreground">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Featured Work Section */}
    

      {/* 3. About Preview Section */}
      <AboutPreview />

      {/* 4. CTA Section */}
      <CTASection />

      <ScrollToTop />
    </div>
  );
}
