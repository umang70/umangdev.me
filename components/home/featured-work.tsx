// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight, ExternalLink } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const featuredWorks = [
//   {
//     id: 1,
//     category: "AI Platform",
//     title: "Chefadora",
//     subtitle: "AI-powered cooking assistant",
//     description:
//       "Built the Cooking Mode feature and AI agents that handle most of the platform's operations. Working across the full stack—React Native, Next.js, and Node.js.",
//     image: "/images/works/chefadora-hero.png",
//     href: "https://www.chefadora.com/cooking-ai",
//     tags: ["React Native", "Next.js", "Node.js"],
//   },
//   {
//     id: 2,
//     category: "Client Work",
//     title: "Korperheil",
//     subtitle: "Physiotherapy clinic website",
//     description:
//       "A clean, fast website for a physiotherapy clinic. Focused on performance and getting visitors to book appointments.",
//     image: "/images/projects/physio-hero.png",
//     href: "https://korperheil.com",
//     tags: ["Next.js", "Tailwind CSS"],
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.1,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 24 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// export function FeaturedWork() {
//   return (
//     <section className="section-padding">
//       <div className="mx-auto max-w-6xl px-4 md:px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.5 }}
//           className="flex items-end justify-between mb-12 md:mb-16">
//           <div>
//             <span className="eyebrow">Portfolio</span>
//             <h2 className="section-heading mt-3">Featured Work</h2>
//           </div>
//           <Button
//             asChild
//             variant="ghost"
//             className="hidden md:flex items-center gap-2 group">
//             <Link href="/works">
//               View All
//               <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//             </Link>
//           </Button>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//           className="grid gap-8 md:grid-cols-2">
//           {featuredWorks.map((work) => (
//             <motion.article
//               key={work.id}
//               variants={itemVariants}
//               className="group relative overflow-hidden rounded-2xl border bg-card transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
//               {/* Image Container */}
//               <div className="relative aspect-16/10 overflow-hidden bg-muted">
//                 <Image
//                   src={work.image}
//                   alt={work.title}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-105"
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                 />
//                 <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent" />

//                 {/* Floating tag */}
//                 <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-background/80 backdrop-blur-sm rounded-full border">
//                   {work.category}
//                 </span>
//               </div>

//               {/* Content */}
//               <div className="p-6 md:p-8">
//                 <h3 className="text-2xl md:text-3xl font-bold mb-1">
//                   {work.title}
//                 </h3>
//                 <p className="text-muted-foreground font-medium mb-3">
//                   {work.subtitle}
//                 </p>
//                 <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
//                   {work.description}
//                 </p>

//                 {/* Tags */}
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {work.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 {/* CTA */}
//                 <Link
//                   href={work.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4 group/link">
//                   View Project
//                   <ExternalLink className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
//                 </Link>
//               </div>
//             </motion.article>
//           ))}
//         </motion.div>

//         {/* Mobile View All Button */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3 }}
//           className="mt-8 text-center md:hidden">
//           <Button asChild variant="outline" className="rounded-full">
//             <Link href="/works">
//               View All Work
//               <ArrowRight className="ml-2 h-4 w-4" />
//             </Link>
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
