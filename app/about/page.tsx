"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CareerTimelineFixed } from "@/components/about/career-timeline-fixed";
import { ExternalLink, FileText } from "lucide-react";


export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 section-padding md:px-6">
      <motion.header
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-16">
        <span className="eyebrow">About</span>
        <h1 className="section-heading mt-3">
          A bit about me
        </h1>
        <div className="mt-6 text-pretty text-muted-foreground md:text-lg space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}>
          Hi, I’m a third-year Computer Science student and an aspiring full-stack developer with a strong interest in building real-world web applications and solving complex problems.
          <br />
           
I work primarily with the MERN stack (MongoDB, Express.js, React, Node.js) and enjoy creating scalable, responsive, and user-friendly applications. Alongside development, I actively practice Data Structures and Algorithms to strengthen my problem-solving and logical thinking skills.
<br />

I also have a growing interest in Generative AI and enjoy exploring how modern AI tools can be integrated into real-world applications. I am continuously learning, building projects, and improving my skills to become a strong software engineer.
          </motion.p>


          {/* <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}>
            Some things I&apos;ve shipped:
          </motion.p> */}
          <div>
            {/* <ul className="list-disc pl-5 leading-relaxed space-y-1">
              <motion.li
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}>
                Built AI agents that automated 80% of manual operations
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 }}>
                Shipped the Cooking Mode feature from zero to production
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}>
                Fixed performance issues that were making the mobile app slow
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.15 }}>
                Set up CI/CD so deployments stopped being painful
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}>
                Built scalable backend APIs and system architecture that kept up with rapid product growth
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.25 }}>
                Set up the staging environment so the team could test without breaking prod
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}>
                Integrated PostHog for data-driven decisions and product improvements
              </motion.li>
            </ul> */}
          </div>
          {/* <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}>
            Before this, I did an internship, ran PR for a college club, and built
            random projects to learn things. Still doing that last part.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}>
            I don&apos;t have a grand philosophy about code. I just try to build things
            that work, learn from mistakes, and ship often.
          </motion.p> */}
        </div>
      </motion.header>

      {/* Writing */}
      {/* <section className="mt-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}>
          <Card>
            <CardHeader>
              <CardTitle>Writing</CardTitle>
            </CardHeader>
            <CardContent>
              <Link
                href="https://dev.to/prasan_bora/upgrading-postgresql-13-to-17-on-aws-rds-with-minimal-downtime-29eo"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-4 -m-4 rounded-xl transition-colors hover:bg-muted/50">
                <div className="shrink-0 p-3 rounded-lg bg-primary/10 text-primary">
                  <FileText className="size-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    Upgrading PostgreSQL 13 to 17 on AWS RDS with Minimal Downtime
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    A practical guide on upgrading PostgreSQL on AWS RDS while keeping downtime to a minimum.
                  </p>
                  <span className="inline-flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                    dev.to
                    <ExternalLink className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </section> */}

      {/* Career Timeline */}
      <section className="mt-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}>
          <Card>
            <CardHeader>
              <CardTitle>🏆 Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <CareerTimelineFixed
                items={[
  {
    title: "LeetCode Rating 1500+",
    period: "Nov 2024 – Present",
    summary:
      "Solved a wide range of algorithmic problems covering graphs, dynamic programming, trees, greedy, recursion, and advanced Data Structures & Algorithms.",
    link: "https://leetcode.com/your-username"
  },
  {
    title: "2★ Coder on CodeChef",
    period: "Nov 2024 – Present",
    summary:
      "Demonstrated strong competitive programming skills with solid problem-solving ability in Data Structures & Algorithms through regular contest participation.",
    link: "https://www.codechef.com/users/your-username"
  },
  {
    title: "Finalist in NASA Space Apps Challenge, Ghaziabad",
    org: "",
    period: "Aug 2024",
    summary:
      "Developed a research-driven project during NASA Space Apps Challenge using MERN stack and Generative AI. Built a functional prototype within 24–36 hours in a team of 5, applying rapid prototyping, full-stack development, and AI integration to solve real-world problems.",
    link: "https://github.com/your-repo-or-project-link"
  },
  {
    title: "ICPC Asia West Amritapuri Preliminary Contest — Participant",
    period: "2025",
    summary:
      "Competed in an international team-based programming contest, solved 3 algorithmic problems under 5-hour contest constraints, and strengthened debugging, teamwork, and competitive programming skills.",
    link: "https://icpc.global" 
  },
  {
    title: "Innotech College Project Hackathon — Sukkon App",
    period: "2024",
    summary:
      "Developed 'Sukkon', a mental health-focused application aimed at providing support and wellness tracking. Gained hands-on experience in rapid prototyping, teamwork, and problem-solving during the hackathon.",
    link: "https://github.com/your-sukkon-project"
  },
  {
    title:"contributed to 10+ open source projects",
    period:"2025-2026",
    summary:
    "Contributed bug fixes, feature enhancements, and documentation improvements to several small open source projects, collaborating with maintainers to improve code quality and usability",
    link:""
  }


                  // {
                  //   title: "Campus Ambassador",
                  //   org: "Shaastra, IIT Madras",
                  //   period: "Dec 2021 – Feb 2022",
                  //   summary:
                  //     "Organized campus events and managed social media outreach to drive engagement.",
                  // },
                  // {
                  //   title: "Operations Intern",
                  //   org: "Jacq",
                  //   period: "Nov 2021 – Jan 2022",
                  //   summary:
                  //     "Hands‑on with e‑commerce ops, WordPress site management, and product onboarding.",
                  // },
                ]}
              />
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </main>
  );
}
