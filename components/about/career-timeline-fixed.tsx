"use client"

import { motion } from "framer-motion"

export type TimelineItem = {
  title: string
  org?: string
  period?: string
  summary?: string
}

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.08 } }),
}

export function CareerTimelineFixed({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative">
      <div className="absolute left-3 md:left-4 top-0 bottom-0 w-px bg-border" aria-hidden="true" />
      <ul className="space-y-6 md:space-y-8">
        {items.map((it, idx) => (
          <motion.li
            key={idx}
            custom={idx}
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            className="relative pl-10 md:pl-12"
          >
            <span
              className="absolute left-1 md:left-2 top-2 size-4 rounded-full bg-primary ring-2 ring-background"
              aria-hidden="true"
            />
            <div className="text-sm text-muted-foreground">{it.period}</div>
            <h3 className="text-lg font-medium text-foreground">
              {it.title} {it.org ? <span className="text-muted-foreground">· {it.org}</span> : null}
            </h3>
            {it.summary ? <p className="mt-1 text-muted-foreground">{it.summary}</p> : null}
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
