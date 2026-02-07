"use client";

import type React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Database,
  Rocket,
  Server,
  Layout,
  Cloud,
  GitBranch,
  Palette,
  Search,
  Container,
  TestTube,
  Bot,
  Box,
  Figma,
  Plug,
  Bug,
  Smartphone,
  Send,
  Github,
  BarChart,
} from "lucide-react";

type Item = { title: string; desc: string; icon: React.ReactNode };

const frontendSkills: Item[] = [
  {
    title: "JavaScript",
    desc: "Core web language",
    icon: <Code2 className="size-5" />,
  },
  {
    title: "TypeScript",
    desc: "Type-safe JavaScript",
    icon: <Code2 className="size-5" />,
  },
  {
    title: "React.js",
    desc: "Component-based UI library",
    icon: <Code2 className="size-5" />,
  },
  {
    title: "Next.js",
    desc: "React framework with SSR",
    icon: <Server className="size-5" />,
  },

 
  {
    title: "Tailwind CSS",
    desc: "Utility-first CSS framework",
    icon: <Palette className="size-5" />,
  },
];

const backendSkills: Item[] = [

  {
    title: "Node.js",
    desc: "JavaScript runtime for servers",
    icon: <Server className="size-5" />,
  },
  {
    title: "Express.js",
    desc: "Fast Node.js web framework",
    icon: <Rocket className="size-5" />,
  },
 
  {
    title: "Socket.io",
    desc: "Real-time communication",
    icon: <Plug className="size-5" />,
  },
 
 
];

const databaseSkills: Item[] = [
  {
    title: "MongoDB",
    desc: "NoSQL document database",
    icon: <Database className="size-5" />,
  },
  {
    title: "PostgreSQL",
    desc: "Advanced relational database",
    icon: <Database className="size-5" />,
  },

];

const coreSkills: Item[] = [
  {
    title: "DSA",
    desc: "Data Structures & Algorithms",
    icon: <Code2 className="size-5" />,
  },
  {
    title: "DBMS",
    desc: "Database Management Systems",
    icon: <Database className="size-5" />,
  },
  {
    title: "OS",
    desc: "Operating Systems",
    icon: <Cpu className="size-5" />,
  },
];

const toolsSkills: Item[] = [
  {
    title: "Git",
    desc: "Version control system",
    icon: <GitBranch className="size-5" />,
  },
  {
    title: "GitHub Actions",
    desc: "CI/CD automation",
    icon: <Github className="size-5" />,
  },
  {
    title: "Docker",
    desc: "Container platform",
    icon: <Box className="size-5" />,
  },
  // {
  //   title: "Jest",
  //   desc: "JavaScript testing",
  //   icon: <TestTube className="size-5" />,
  // },
  {
    title: "Postman",
    desc: "API development",
    icon: <Send className="size-5" />,
  },
  // {
  //   title: "Sentry",
  //   desc: "Error tracking",
  //   icon: <Bug className="size-5" />,
  // },
  // {
  //   title: "PostHog",
  //   desc: "Product analytics",
  //   icon: <BarChart className="size-5" />,
  // },
  // {
  //   title: "Android Studio",
  //   desc: "Android development IDE",
  //   icon: <Smartphone className="size-5" />,
  // },

  {
    title: "OpenAI API",
    desc: "AI integrations",
    icon: <Bot className="size-5" />,
  },

  // {
  //   title: "AWS",
  //   desc: "Cloud infrastructure",
  //   icon: <Cloud className="size-5" />,
  // },
  {
    title: "Vercel",
    desc: "Deployment platform",
    icon: <Cloud className="size-5" />,
  },
 
];

const services: Item[] = [
  {
    title: "Web Apps",
    desc: "Full websites or specific features.",
    icon: <Layout className="size-5" />,
  },

  {
    title: "Backend & APIs",
    desc: "The stuff that makes apps work.",
    icon: <Server className="size-5" />,
  },
  {
    title: "Performance Fixes",
    desc: "Making slow things fast.",
    icon: <Cpu className="size-5" />,
  },
  {
    title: "Technical Consulting",
    desc: "Advice on architecture decisions.",
    icon: <Rocket className="size-5" />,
  },
  {
    title: "Code Reviews",
    desc: "Second pair of eyes on your code.",
    icon: <Search className="size-5" />,
  },
];

function SectionGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => (
        <motion.div
          key={it.title}
          className="rounded-xl border bg-card p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/30 group"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.35, delay: i * 0.05 }}>
          <div className="mb-3 flex items-center gap-2 text-primary">
            <span className="transition-transform duration-300 group-hover:scale-110">
              {it.icon}
            </span>
            <h3 className="text-base font-semibold">{it.title}</h3>
          </div>
          <p className="text-sm text-muted-foreground">{it.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

export function SkillsAndServices() {
  return (
    <main className="container mx-auto max-w-5xl space-y-16 px-4 section-padding">
      <section className="space-y-4">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}>
          Tech Stack
        </motion.span>
        <motion.h1
          className="section-heading"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}>
          What I work with
        </motion.h1>
        <motion.p
          className="lead max-w-2xl"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}>
          I pick tools based on what the job needs, not what&apos;s trendy.
          Here&apos;s what I actually use day to day.
        </motion.p>
      </section>

      <section className="space-y-6">
        <motion.h2
          className="text-2xl font-bold"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15 }}>
          Frontend
        </motion.h2>
        <SectionGrid items={frontendSkills} />
      </section>

      <section className="space-y-6">
        <motion.h2
          className="text-2xl font-bold"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}>
          Backend
        </motion.h2>
        <SectionGrid items={backendSkills} />
      </section>

      <section className="space-y-6">
        <motion.h2
          className="text-2xl font-bold"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}>
          Databases
        </motion.h2>
        <SectionGrid items={databaseSkills} />
      </section>

      <section className="space-y-6">
        <motion.h2
          className="text-2xl font-bold"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}>
          Core Concepts
        </motion.h2>
        <SectionGrid items={coreSkills} />
      </section>

      <section className="space-y-6">
        <motion.h2
          className="text-2xl font-bold"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}>
          Tools & Infrastructure
        </motion.h2>
        <SectionGrid items={toolsSkills} />
      </section>

      <section className="space-y-4 pt-8 border-t border-border">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}>
          Freelance
        </motion.span>
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.05 }}>
          How I can help
        </motion.h2>
        <motion.p
          className="lead max-w-2xl"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}>
          If you need a developer who can own a project from start to finish,
          here&apos;s what I typically take on.
        </motion.p>
      </section>

      <SectionGrid items={services} />
    </main>
  );
}
