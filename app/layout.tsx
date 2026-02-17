import type React from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Suspense } from "react";
import { PageTransition } from "@/components/ui/page-transition";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Umang Sharma - Portfolio",
  description:
    "Software Engineer • Problem Solver • Web & Mobile App Developer",
  generator: "Umang.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${geistSans.variable} ${geistMono.variable}`}>
        <Suspense fallback={null}>
          <SiteHeader />
          <main className="min-h-dvh bg-background text-foreground">
            <PageTransition>{children}</PageTransition>
          </main>
          <SiteFooter />
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
