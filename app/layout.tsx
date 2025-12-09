import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import RemoveV0Watermark from "@/components/remove-v0-watermark"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HTG Man & Van Ltd - Reliable Removals & Man & Van Services South Devon",
  description:
    "Professional man and van removals service in South Devon. House moves, office relocations, courier services & more. Fully insured. Get a free quote today!",
  generator: "v0.app",
  icons: {
    icon: {
      url: "/icon.svg",
      type: "image/svg+xml",
    },
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <RemoveV0Watermark />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
