"use client"

import { useEffect } from "react"

// Removes the v0 watermark/badge script-injected into the page.
function scrubV0Artifacts() {
  const selectors = [
    "[data-v0]",
    "[data-v0-watermark]",
    "[data-v0-widget]",
    "#v0",
    "#__v0",
    'a[href*="v0.dev"]',
    'a[href*="v0.app"]',
    'iframe[src*="v0.dev"]',
  ]

  selectors.forEach((selector) => {
    document.querySelectorAll<HTMLElement>(selector).forEach((node) => {
      node.remove()
    })
  })
}

export default function RemoveV0Watermark() {
  useEffect(() => {
    scrubV0Artifacts()

    const observer = new MutationObserver(() => scrubV0Artifacts())
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    })

    return () => observer.disconnect()
  }, [])

  return null
}
