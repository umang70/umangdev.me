"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/about", label: "About" },
  //{ href: "/works", label: "Works" },
  { href: "/projects", label: "Projects" },
  { href: "/tech-stack", label: "Skills — Tech Stacks" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-primary" aria-hidden />
          <span className="font-mono text-sm">Umang Sharma</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className="relative text-sm text-muted-foreground hover:text-foreground transition-colors py-1
                after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary
                after:transition-all after:duration-300 hover:after:w-full"
              href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button
                className="p-2 rounded-md text-foreground transition-transform hover:scale-110"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-border">
              <SheetHeader>
                <SheetTitle className="text-foreground">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 mt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base text-foreground px-4 py-3 rounded-lg transition-all hover:bg-muted hover:pl-6"
                    onClick={() => setOpen(false)}>
                    {link.label}
                  </Link>
                ))}
                <div className="flex items-center justify-between text-base text-foreground px-4 py-3 rounded-lg hover:bg-muted transition-colors mt-4 border-t pt-6">
                  <span>Theme</span>
                  <ThemeToggle />
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Desktop Theme Toggle */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
