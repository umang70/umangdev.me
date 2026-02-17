"use client"

import { useEffect, useRef, useState } from "react"

type ScrollTypewriterProps = {
  text: string
  speed?: number
  showCursor?: boolean
  start?: boolean
  className?: string
}

export function ScrollTypewriter({
  text,
  speed = 40,
  showCursor = false,
  start = false,
  className,
}: ScrollTypewriterProps) {
  const [output, setOutput] = useState("")
  const iRef = useRef(0)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    if (!start) return
    setOutput("")
    iRef.current = 0

    const tick = () => {
      if (iRef.current >= text.length) {
        if (timerRef.current) window.clearTimeout(timerRef.current)
        return
      }
      setOutput((prev) => prev + text.charAt(iRef.current))
      iRef.current += 1
      timerRef.current = window.setTimeout(tick, speed)
    }

    timerRef.current = window.setTimeout(tick, speed)
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current)
    }
  }, [start, text, speed])

  return (
    <span className={className}>
      {output}
      {showCursor ? <span className="inline-block w-1 h-5 align-[-2px] bg-foreground ml-1 animate-pulse" /> : null}
    </span>
  )
}
