"use client"

import { motion } from "framer-motion"

export default function CustomerTestimonials() {
  const testimonials = [
    {
      name: "Peter",
      location: "Kingsteignton",
      text: "Harry was personable, prompt and careful in handling our goods. The delivery was not easy, being to a first floor flat, but was undertaken speedily and with great care",
    },
    {
      name: "Jan",
      location: "Cheriton Bishop",
      text: "Brilliant job! We needed a sofa moving. They arrived promptly, were very careful and thoughtful getting it down from the 2nd floor with no trouble. Delivered to our house quickly. They also took our old sofa away at no extra charge. Really pleased and would recommend wholeheartedly for any Man and Van jobs.",
    },
    {
      name: "Jaya",
      location: "Bouygues UK",
      text: "The HTG team were a great help, very reliable and professional with good rates in comparison to other quotes I had received. They were fast and trustworthy. We had a big commercial request for them and they were able to fulfil our RAMs and procurement requirements.",
    },
    {
      name: "Susan",
      location: "Kingsteignton",
      text: "HTG Man & Van was excellent. Polite, considerate, good communication . I would truly recommend him",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          WHAT OUR CUSTOMERS SAY...
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 bg-background rounded-lg border border-border hover:shadow-md transition-shadow"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="font-semibold mb-2">
                {testimonial.name} - {testimonial.location}
              </p>
              <p className="text-foreground/80 italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
