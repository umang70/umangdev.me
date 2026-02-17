"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const EMAIL = "us1800439@gmail.com";

export function CTASection() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    const subject = encodeURIComponent("Hey Umang – Let's Connect");
    const body = encodeURIComponent("Hi Umang,\n\nI came across your portfolio and wanted to reach out about...\n\n");
    window.open(`https://mail.google.com/mail/?view=cm&to=${EMAIL}&su=${subject}&body=${body}`, "_blank");
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section-padding bg-muted/30 border-y border-border">
      <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          <span className="eyebrow">Say Hello</span>
          <h2 className="section-heading mt-4 mb-6">
            Got something interesting?
          </h2>
          <p className="lead max-w-2xl mx-auto mb-6">
            I&apos;m always up for a good conversation—whether it&apos;s about a role,
            a project idea, or just tech stuff. No formal pitch needed.
          </p>

          {/* Email display with copy button */}
          <div className="flex items-center justify-center gap-2 mb-10">
            <span className="text-lg font-medium text-foreground">{EMAIL}</span>
            <button
              onClick={handleCopy}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Copy email">
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 text-muted-foreground" />
              )}
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleEmailClick}
              className="inline-flex items-center justify-center h-14 rounded-full px-10 text-base font-semibold bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300">
              <Mail className="mr-2 h-5 w-5" />
              Open email client
            </button>
            {/* <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-2">
              <Link href="/about">
                About
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
