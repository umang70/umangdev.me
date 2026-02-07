"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setMounted(true)
    const root = document.documentElement
    const stored = localStorage.getItem("theme") || ""
    const enableDark = stored ? stored === "dark" : true
    root.classList.toggle("dark", enableDark)
    setIsDark(enableDark)
  }, [])

  if (!mounted) return null

  const toggle = () => {
    const root = document.documentElement
    const next = !isDark
    root.classList.toggle("dark", next)
    setIsDark(next)
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  return (
    <Button variant="secondary" size="icon" onClick={toggle} aria-label="Toggle theme">
      {isDark ? <Moon className="h-4 w-4" aria-hidden /> : <Sun className="h-4 w-4" aria-hidden />}
    </Button>
  )
}
