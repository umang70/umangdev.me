"use client"

import { useEffect, useRef } from "react"

export function LiquidBackground() {
  const ref = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    let raf = 0
    const el = ref.current
    if (!el) return

    const blobs = Array.from(el.querySelectorAll("circle")) as SVGCircleElement[]
    const start = performance.now()

    const animate = (t: number) => {
      const dt = (t - start) / 1000
      blobs.forEach((c, i) => {
        const baseX = Number(c.dataset.baseX || 0)
        const baseY = Number(c.dataset.baseY || 0)
        const r = Number(c.getAttribute("r") || 80)
        const amp = 20 + (i % 3) * 10
        const speed = 0.5 + (i % 3) * 0.2
        const nx = baseX + Math.sin(dt * speed + i) * amp
        const ny = baseY + Math.cos(dt * (speed + 0.1) + i) * amp
        c.setAttribute("cx", String(nx))
        c.setAttribute("cy", String(ny))
        c.setAttribute("r", String(r + Math.sin(dt * (speed + 0.3) + i) * 3))
      })
      raf = requestAnimationFrame(animate)
    }

    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div aria-hidden className="absolute inset-0">
      <svg ref={ref} className="h-full w-full" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="40" />
          </filter>
        </defs>

        <g filter="url(#blur)" className="[&_*]:transition-colors">
          {/* Use theme tokens via CSS variables in inline style */}
          <circle
            cx="250"
            cy="300"
            r="120"
            data-base-x="250"
            data-base-y="300"
            style={{ fill: "var(--color-primary)" }}
          />
          <circle
            cx="500"
            cy="260"
            r="100"
            data-base-x="500"
            data-base-y="260"
            style={{ fill: "oklch(from var(--color-primary) 0.8 0.015 h)" }}
          />
          <circle
            cx="800"
            cy="320"
            r="140"
            data-base-x="800"
            data-base-y="320"
            style={{ fill: "var(--color-accent)" }}
          />
        </g>

        <rect x="0" y="0" width="1200" height="600" fill="transparent" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
    </div>
  )
}
