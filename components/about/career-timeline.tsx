"use client"

import { motion } from "framer-motion"

export type TimelineItem = {
  title: string
  org?: string
  period: string
  summary?: string
}

export function CareerTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative">
      <div aria-hidden className="absolute left-[14px] top-0 bottom-0 w-px bg-border" />
      <ul className="space-y-6">
        {items.map((it, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: idx * 0.03 }}
            className="relative pl-10"
          >
            <div aria-hidden className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-foreground" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{it.period}</span>
              {it.org ? <span aria-hidden>•</span> : null}
              {it.org ? <span>{it.org}</span> : null}
            </div>
            <h3 className="font-medium text-foreground">{it.title}</h3>
            {it.summary ? <p className="text-sm leading-relaxed text-muted-foreground mt-1">{it.summary}</p> : null}
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
