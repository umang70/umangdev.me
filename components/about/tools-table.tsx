"use client"

import type React from "react"

import { motion } from "framer-motion"

type ToolItem = {
  name: string
  note: string
  icon?: React.ReactNode
}

export function ToolsTable({
  items,
}: {
  items: ToolItem[]
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="rounded-lg border border-border"
    >
      <div className="grid gap-0 md:grid-cols-2">
        {items.map((t, i) => (
          <div
            key={t.name}
            className="flex items-center gap-3 p-4 md:p-5 border-b border-border last:border-b-0 md:[&:nth-child(odd)]:border-r"
          >
            <div aria-hidden className="h-8 w-8 rounded-full bg-foreground/10 flex items-center justify-center text-sm">
              {t.icon ?? t.name[0]}
            </div>
            <div>
              <p className="font-medium">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.note}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
