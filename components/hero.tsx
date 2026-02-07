"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import LiquidEther from "@/components/effects/liquid-ether-client";
import { Typewriter } from "@/components/ui/typewriter";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden border-b border-border">
      <div className="relative w-full min-h-screen">
        <LiquidEther
          colors={["#6dbfb8", "#5fb0a8", "#7fd3cb"]}
          mouseForce={23}
          cursorSize={90}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          style={{ position: "absolute", inset: 0, zIndex: 0 }}
        />

        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none px-4">
          <div className="mx-auto max-w-4xl flex flex-col items-center text-center gap-8 md:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center gap-3 flex-wrap justify-center text-sm md:text-base text-muted-foreground">
              <span>Software Engineer</span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
              <span>Full Stack</span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
              <span>India</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}>
              <Typewriter
                text={"Hi, I'm Umang"}
                speed={200}
                showCursor={false}
              />
            </motion.h1>

            <motion.p
              className="max-w-2xl text-base md:text-lg leading-relaxed text-pretty text-muted-foreground"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              I build products people actually use. Web apps, mobile apps, backend systems,
              AI integrations—whatever the problem needs. Clean code, shipped fast.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 mt-2 pointer-events-auto">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5">
                <Link href="/about">
                  About
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-2 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:-translate-y-0.5">
                <Link href="/#footer">Let&apos;s Connect</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        <ScrollIndicator />
      </div>
    </section>
  );
}
