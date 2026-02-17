"use client";

import { motion } from "framer-motion";
import { ProjectsGrid } from "@/components/projects/projects-grid";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 md:mb-16">
        <span className="eyebrow">Side Projects</span>
        <h1 className="section-heading mt-3">Stuff I built to learn</h1>
        <p className="lead mt-4 max-w-2xl">
          Not everything needs a business case. These are projects I built
          because I wanted to understand how something works.
        </p>
      </motion.div>
      <ProjectsGrid />
    </div>
  );
}
