"use client"

import { motion } from "framer-motion"

export default function Services() {
  const services = [
    "Flat, house and office removals",
    "Bespoke packing and dismantling/assembling",
    "Flexible van hire – small vans to Lutons, flatbeds and tippers",
    "Store collections, deliveries and courier work",
    "Student moves and single-item jobs",
    "House, office and warehouse clearances",
    "Responsible disposal, donate or recycle where possible",
  ]

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>

        <ul className="grid md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <motion.li
              key={service}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="text-primary text-xl">✓</span>
              <span className="text-lg">{service}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
