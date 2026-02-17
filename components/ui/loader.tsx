"use client"

export function Loader() {
  return (
    <div className="fixed inset-0 grid place-items-center bg-background/80 backdrop-blur-sm z-[60]">
      <div className="flex flex-col items-center gap-3">
        <div className="size-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        <p className="text-sm text-muted-foreground">Loading…</p>
      </div>
    </div>
  )
}
