"use client";

import {
  Mail,
  FileText,
  Github,
  Linkedin,
  Code2,
} from "lucide-react";

export function SiteFooter() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/umang-sharma-dev",
      icon: Linkedin,
      label: "LinkedIn",
      hoverColor: "hover:text-[#0077b5]",
    },
    {
      href: "https://github.com/umang70",
      icon: Github,
      label: "GitHub",
      hoverColor: "hover:text-[#333] dark:hover:text-white",
    },
    {
      href: "https://leetcode.com/u/umang_79/",
      icon: Code2,
      label: "LeetCode",
      hoverColor: "hover:text-[#ffa116]",
    },
  ];

  return (
    <footer id="footer" className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-3 w-3 rounded-full bg-primary" aria-hidden />
              <span className="font-semibold text-lg">Umang Sharma</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Developer based in India. I like building things,
              learning new stuff, and good coffee.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-muted-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 ${social.hoverColor}`}
                    aria-label={social.label}>
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="/works"
                  className="text-muted-foreground hover:text-foreground transition-colors">
                  Works
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/tech-stack"
                  className="text-muted-foreground hover:text-foreground transition-colors">
                  Tech Stack
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  href="mailto:us1800439@gmail.com">
                  <Mail className="h-4 w-4" aria-hidden />
                  us1800439@gmail.com
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  href="https://drive.google.com/file/d/11eMo3MPcatukauM60S9eM6bt4whowd7V/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer">
                  <FileText className="h-4 w-4" aria-hidden />
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Umang Sharma. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
