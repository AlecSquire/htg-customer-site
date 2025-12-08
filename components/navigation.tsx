"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between px-6 py-4 md:px-12 border-b border-border bg-white sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold hover:opacity-80 transition-opacity">
        HTG MAN & VAN LTD
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8">
        <Link href="/" className="text-foreground hover:text-primary transition">
          Home
        </Link>
        <Link href="/removals" className="text-foreground hover:text-primary transition">
          Removals
        </Link>
        <Link href="/man-and-van" className="text-foreground hover:text-primary transition">
          Man & Van
        </Link>
        <Link href="/clearance" className="text-foreground hover:text-primary transition">
          Clearance
        </Link>
        <Link href="/why-choose-us" className="text-foreground hover:text-primary transition">
          Why Choose Us
        </Link>
        <Link href="/about" className="text-foreground hover:text-primary transition">
          About
        </Link>
        <Link href="/#contact" prefetch={false} className="text-foreground hover:text-primary transition">
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-border md:hidden">
          <div className="flex flex-col px-6 py-4 gap-4">
            <Link href="/" className="text-foreground hover:text-primary transition" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link
              href="/removals"
              className="text-foreground hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Removals
            </Link>
            <Link
              href="/man-and-van"
              className="text-foreground hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Man & Van
            </Link>
            <Link
              href="/clearance"
              className="text-foreground hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Clearance
            </Link>
            <Link
              href="/why-choose-us"
              className="text-foreground hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Why Choose Us
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#contact"
              prefetch={false}
              className="text-foreground hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
