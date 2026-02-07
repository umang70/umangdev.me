"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronsUp } from "lucide-react"

export default function ScrollToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener("scroll", onScroll)
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!show) return null

  return (
    <Button
      className="fixed bottom-6 right-6 rounded-full shadow-lg"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ChevronsUp className="h-5 w-5" />
    </Button>
  )
}
