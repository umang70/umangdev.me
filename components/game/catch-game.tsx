"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function CatchGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [score, setScore] = useState(0)
  const [running, setRunning] = useState(true)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = (canvas.width = canvas.clientWidth)
    let height = (canvas.height = 320)
    const onResize = () => {
      width = canvas.clientWidth
      canvas.width = width
      canvas.height = 320
      height = 320
    }
    window.addEventListener("resize", onResize)

    type Drop = { x: number; y: number; vy: number; sym: string }
    const symbols = ["{", "}", "(", ")", "<", ">", ";", "=", "/", "*", "+", "-"]
    const drops: Drop[] = []
    const paddle = { x: width / 2, y: height - 18, w: 90, h: 10 }
    let raf = 0
    let last = performance.now()

    const spawn = () => {
      const x = Math.random() * (width - 20) + 10
      drops.push({
        x,
        y: -10,
        vy: 40 + Math.random() * 40,
        sym: symbols[Math.floor(Math.random() * symbols.length)],
      })
    }

    const step = (t: number) => {
      if (!running) return
      const dt = Math.min((t - last) / 1000, 0.033)
      last = t

      // Clear with subtle background using tokens
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--color-card").trim()
      ctx.fillRect(0, 0, width, height)

      // Parallax lines
      ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--color-border").trim()
      ctx.lineWidth = 1
      for (let i = 0; i < 6; i++) {
        const y = (i * height) / 6 + ((t / 20) % (height / 6))
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      // Spawn
      if (Math.random() < 0.04) spawn()

      // Update drops
      const primary = getComputedStyle(document.documentElement).getPropertyValue("--color-primary").trim()
      ctx.fillStyle = primary
      ctx.font = "16px monospace"
      for (let i = drops.length - 1; i >= 0; i--) {
        const d = drops[i]
        d.y += d.vy * dt
        ctx.fillText(d.sym, d.x, d.y)

        // Collision
        if (d.y >= paddle.y - 4 && d.x >= paddle.x - paddle.w / 2 && d.x <= paddle.x + paddle.w / 2) {
          drops.splice(i, 1)
          setScore((s) => s + 1)
        } else if (d.y > height + 20) {
          drops.splice(i, 1)
          setScore((s) => Math.max(0, s - 1))
        }
      }

      // Paddle
      const pf = getComputedStyle(document.documentElement).getPropertyValue("--color-primary-foreground").trim()
      ctx.fillStyle = primary
      ctx.fillRect(paddle.x - paddle.w / 2, paddle.y, paddle.w, paddle.h)
      ctx.fillStyle = pf
      ctx.fillRect(paddle.x - paddle.w / 2 + 2, paddle.y + 2, paddle.w - 4, paddle.h - 4)

      raf = requestAnimationFrame(step)
    }

    const onMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0
      if (e instanceof TouchEvent) {
        clientX = e.touches[0]?.clientX ?? 0
      } else {
        clientX = (e as MouseEvent).clientX
      }
      const rect = canvas.getBoundingClientRect()
      paddle.x = Math.max(paddle.w / 2, Math.min(width - paddle.w / 2, clientX - rect.left))
    }

    const onKey = (e: KeyboardEvent) => {
      const delta = 24
      if (e.key === "ArrowLeft") paddle.x = Math.max(paddle.w / 2, paddle.x - delta)
      if (e.key === "ArrowRight") paddle.x = Math.min(width - paddle.w / 2, paddle.x + delta)
    }

    canvas.addEventListener("mousemove", onMove)
    canvas.addEventListener("touchmove", onMove, { passive: true })
    window.addEventListener("keydown", onKey)

    raf = requestAnimationFrame(step)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
      canvas.removeEventListener("mousemove", onMove)
      canvas.removeEventListener("touchmove", onMove)
      window.removeEventListener("keydown", onKey)
    }
  }, [running])

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm text-muted-foreground">Score: {score}</p>
          <button
            className="text-sm underline"
            onClick={() => setRunning((r) => !r)}
            aria-label={running ? "Pause game" : "Resume game"}
          >
            {running ? "Pause" : "Resume"}
          </button>
        </div>
        <div className="w-full">
          <canvas ref={canvasRef} className="w-full rounded-md border border-border" height={320} />
        </div>
      </CardContent>
    </Card>
  )
}
