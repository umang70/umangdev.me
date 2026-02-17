"use client"

import useSWR from "swr"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type AboutData = { skills: string[] }

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function Skills() {
  const { data, isLoading } = useSWR<AboutData>("/api/about", fetcher)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="h-6 w-24 animate-pulse rounded bg-muted" aria-hidden />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {(data?.skills || []).map((s) => (
              <span key={s} className="rounded-full bg-secondary text-secondary-foreground px-3 py-1 text-xs">
                {s}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
