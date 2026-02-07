"use client";

import useSWR from "swr";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  tags: string[];
  demo?: string;
  repo?: string;
  image?: string;
  imageAlt?: string;
};

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function ProjectsGrid() {
  const { data = [], isLoading } = useSWR<Project[]>("/api/projects", fetcher);
  const [activeTag, setActiveTag] = useState<string | null>(null);


  const filtered = useMemo(() => {
    return data.filter((p) => (!activeTag ? true : p.tags.includes(activeTag)));
  }, [data, activeTag]);

  return (
    <div className="space-y-4">

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading ?
          Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="h-48 animate-pulse" aria-hidden />
          ))
        : filtered.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: (idx % 6) * 0.05 }}
              whileHover={{ y: -4 }}>
              <Card className="h-full flex flex-col overflow-hidden">
                {p.image ?
                  <div className="relative aspect-video w-full overflow-hidden">
                    <img
                      src={p.image || "/placeholder.svg"}
                      alt={p.imageAlt || p.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                : null}
                <CardHeader>
                  <CardTitle className="text-balance">{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-muted text-muted-foreground px-2 py-0.5 text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex items-center gap-2">
                  {p.demo ?
                    <Button asChild size="sm">
                      <a href={p.demo} target="_blank" rel="noreferrer">
                        Live Demo
                      </a>
                    </Button>
                  : null}
                  {p.repo ?
                    <Button asChild size="sm" variant="secondary">
                      <a href={p.repo} target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    </Button>
                  : null}
                </CardFooter>
              </Card>
            </motion.div>
          ))
        }
      </div>
    </div>
  );
}
