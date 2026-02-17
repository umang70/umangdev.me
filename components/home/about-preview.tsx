"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Server, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: Server,
    title: "Backend APIs",
    description: "Built for real traffic",
  },
  {
    icon: Code2,
    title: "Web Apps",
    description: "Next.js, TypeScript",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function AboutPreview() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding bg-muted/20 border-y border-border">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 md:order-1">
            <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
              <Image
                src="/images/profile/profile.png"
                alt="Prasan Bora - Software Engineer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
              {/* Name badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-lg font-semibold text-foreground">Umang Sharma</p>
                {/* <p className="text-sm text-muted-foreground">Software Engineer</p> */}
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Right: Content */}
          <div className="order-1 md:order-2">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="eyebrow">
              About Me
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="section-heading mt-3 mb-6">
              I like building things that work
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lead mb-8">
              I work across the entire stack—mobile, web, backend, AI. I&apos;ve shipped
              features used by real people, fixed bugs at 2am, and learned that
              good code is code that actually solves the problem.
            </motion.p>

            {/* Highlight Cards */}
            {/* <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors group">
                  <item.icon className="h-6 w-6 text-primary mb-2 transition-transform group-hover:scale-110" />
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div> */}
            <motion.div
  variants={containerVariants}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  className="grid grid-cols-2 gap-4 mb-8"
>
  {highlights.map((item) => {
    const Card = (
      <motion.div
        key={item.title}
        variants={itemVariants}
        className="p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors group cursor-pointer"
      >
        <item.icon className="h-6 w-6 text-primary mb-2 transition-transform group-hover:scale-110" />
        <p className="text-sm font-semibold">{item.title}</p>
        <p className="text-xs text-muted-foreground">{item.description}</p>
      </motion.div>
    );

    return item.link ? (
      <a
        key={item.title}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {Card}
      </a>
    ) : (
      Card
    );
  })}
</motion.div>


            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}>
              <Button asChild variant="outline" className="rounded-full group">
                <Link href="/about">
                  Learn More About Me
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
