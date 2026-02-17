"use client"

import useSWR from "swr"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type TimelineItem = {
  title: string
  org: string
  period: string
  description: string
}

type AboutData = {
  bio: string
  experience: TimelineItem[]
  education: TimelineItem[]
  skills: string[]
}

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function About() {
  const { data, isLoading } = useSWR<AboutData>("/api/about", fetcher)

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Bio</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed text-muted-foreground">{isLoading ? "Loading…" : data?.bio}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Skills Snapshot</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {isLoading
              ? Array.from({ length: 8 }).map((_, i) => (
                  <span key={i} className="h-6 w-20 animate-pulse rounded bg-muted" aria-hidden />
                ))
              : data?.skills.map((s) => (
                  <span key={s} className="rounded-full bg-secondary text-secondary-foreground px-3 py-1 text-xs">
                    {s}
                  </span>
                ))}
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Career Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="relative pl-4">
            <div className="absolute left-1 top-0 bottom-0 w-px bg-border" aria-hidden />
            {(isLoading ? [] : data?.experience || []).map((item, idx) => (
              <motion.li
                key={`${item.title}-${idx}`}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="mb-5"
              >
                <div className="relative -left-2 mb-2 inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" aria-hidden />
                  <p className="text-sm font-medium">{item.title}</p>
                  <span className="text-xs text-muted-foreground">• {item.org}</span>
                  <span className="text-xs text-muted-foreground">({item.period})</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

