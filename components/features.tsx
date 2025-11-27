"use client"

import { motion } from "framer-motion"

export default function Features() {
  const features = [
    {
      icon: "🛻",
      title: "Fully equipped van with blankets and straps",
    },
    {
      icon: "👷",
      title: "Friendly, helpful service – solo or with additional helpers if needed",
    },
    {
      icon: "🔒",
      title: "Goods in Transit and Public Liability insurance",
    },
    {
      icon: "♻️",
      title: "Licensed Waste Carrier",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className="text-3xl">{feature.icon}</span>
            <p className="text-lg">{feature.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
