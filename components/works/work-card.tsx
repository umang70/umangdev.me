// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ExternalLink } from "lucide-react";
// import { cn } from "@/lib/utils";

// type WorkCardProps = {
//   category?: string;
//   title: string;
//   subtitle?: string;
//   description: string;
//   imageSrc: string;
//   ctaHref?: string;
//   className?: string;
//   eyebrow?: string;
//   imageAlt?: string;
//   ctaLabel?: string;
//   tags?: string[];
// };

// export function WorkCard({
//   category,
//   title,
//   subtitle,
//   description,
//   imageSrc,
//   ctaHref,
//   className,
//   eyebrow,
//   imageAlt,
//   ctaLabel,
//   tags,
// }: WorkCardProps) {
//   const displayCategory = category ?? eyebrow;
//   return (
//     <motion.article
//       initial={{ opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//       className={cn(
//         "group relative w-full overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-md transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1",
//         className
//       )}>
//       {/* Image Section */}
//       <div className="relative aspect-video overflow-hidden bg-muted">
//         <Image
//           src={imageSrc || "/placeholder.svg"}
//           alt={imageAlt ?? title}
//           fill
//           className="object-cover transition-transform duration-500 group-hover:scale-105"
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
//         />
//         {/* Gradient overlay */}
//         <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent opacity-60" />

//         {/* Category badge */}
//         {displayCategory && (
//           <span className="absolute top-4 left-4 px-3 py-1.5 text-xs font-medium bg-background/90 backdrop-blur-sm rounded-full border shadow-sm">
//             {displayCategory}
//           </span>
//         )}
//       </div>

//       {/* Content Section */}
//       <div className="p-6 md:p-8">
//         <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
//           {title}
//         </h3>
//         {subtitle && (
//           <p className="mt-1 text-base md:text-lg text-muted-foreground font-medium">
//             {subtitle}
//           </p>
//         )}
//         <p className="mt-4 text-muted-foreground leading-relaxed">
//           {description}
//         </p>

//         {/* Tags */}
//         {tags && tags.length > 0 && (
//           <div className="flex flex-wrap gap-2 mt-5">
//             {tags.map((tag) => (
//               <span
//                 key={tag}
//                 className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
//                 {tag}
//               </span>
//             ))}
//           </div>
//         )}

//         {/* CTA */}
//         {ctaHref && (
//           <div className="mt-6">
//             <Button
//               asChild
//               variant="outline"
//               className="rounded-full group/btn border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
//               <Link href={ctaHref} target="_blank" rel="noopener noreferrer">
//                 {ctaLabel ?? "View Project"}
//                 <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
//               </Link>
//             </Button>
//           </div>
//         )}
//       </div>
//     </motion.article>
//   );
// }
