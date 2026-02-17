import { NextResponse } from "next/server"

export async function GET() {
  const data = {
    bio: "Software Engineer focused on building impactful web and mobile products. I work across the stack—from backend APIs with Node.js/Strapi to polished UIs in Next.js and React Native. I enjoy solving complex problems, designing for scale, and shipping features that improve real user experiences.",
    experience: [
      {
        title: "Software Developer",
        org: "Chefadora",
        period: "Nov 2024 — Present",
        description:
          "Contributing to the web platform and mobile app: backend APIs, integrations, and frontend features. Built automation tools, scalable APIs, and led the end‑to‑end 'Cooking Mode' feature to improve performance and UX.",
      },
      {
        title: "Software Developer",
        org: "Zarle Infotech",
        period: "Nov 2024 — Present",
        description:
          "Developed and optimized web/mobile apps for an Australian food‑tech startup. Built an author data scraper (80%+ manual effort reduction), integrated GA/Search Console/Clarity, and shipped SEO‑friendly, high‑performance Next.js + Strapi apps.",
      },
      {
        title: "Web Developer (Intern)",
        org: "CantiLever.in",
        period: "Aug 2024 — Aug 2024",
        description:
          "Collaborated on full‑stack MERN applications, turning requirements into working product features.",
      },
      {
        title: "Head of Public Relations",
        org: "MAIT Alumni Cell",
        period: "May 2023 — Jun 2024",
        description: "Led PR team: oversaw communications, social content, and community engagement across platforms.",
      },
    ],
    education: [
      {
        title: "B.Tech, Maharaja Agrasen Institute of Technology",
        org: "New Delhi, India",
        period: "2020 — 2024",
        description: "CGPA: 8.6. Coursework: DSA, OOPS, OS, DBMS.",
      },
      {
        title: "AISSCE/CBSE (Class XII)",
        org: "Govt. Boys Sr. Sec. School No.3, Najafgarh",
        period: "2019",
        description: "Percentage: 92%",
      },
    ],
    skills: [
      // Languages
      "C",
      "C++",
      "JavaScript",
      "HTML",
      "CSS",
      // Frameworks & Libraries
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Express.js",
      "Node.js",
      // Databases
      "MongoDB",
      "MySQL",
      // Tools
      "Git",
      "APIs",
      "SQL",
      "Testing",
      // Soft skills
      "Problem Solving",
      "Analytical Thinking",
      "Adaptability",
      "Leadership",
      "Team Management",
    ],
  }
  return NextResponse.json(data)
}
