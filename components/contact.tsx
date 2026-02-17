"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export function Contact() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" }) // website is honeypot

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        toast({ title: "Message sent!", description: "Thanks for reaching out." })
        setForm({ name: "", email: "", message: "", website: "" })
      } else {
        toast({ title: "Something went wrong", description: "Please try again later." })
      }
    } catch {
      toast({ title: "Network error", description: "Please try again." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <CardContent className="p-4">
        <form onSubmit={onSubmit} className="grid gap-3">
          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <label htmlFor="name" className="block text-sm mb-1">
                Name
              </label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-1">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                required
              />
            </div>
          </div>

          {/* Honeypot */}
          <div className="hidden">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              autoComplete="off"
              tabIndex={-1}
              value={form.website}
              onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm mb-1">
              Message
            </label>
            <Textarea
              id="message"
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              required
              rows={4}
            />
          </div>

          <div className="flex items-center gap-2">
            <Button disabled={loading} type="submit">
              {loading ? "Sending…" : "Send"}
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() => setForm({ name: "", email: "", message: "", website: "" })}
            >
              Reset
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
