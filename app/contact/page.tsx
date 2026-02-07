"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ContactRedirect() {
  const router = useRouter()
  useEffect(() => {
    // Navigate to homepage and scroll to #footer
    router.push("/#footer")
  }, [router])
  return null
}
