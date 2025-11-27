"use client"

import { motion } from "framer-motion"

export default function ContactForm() {
  return (
    <section id="contact" className="py-16 md:py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Ready to get moving? We've made it easy to get a quote. Simply click the button below to fill out our detailed
          quote form, and we'll get back to you with a price as soon as possible.
        </motion.p>

        <div className="flex flex-col items-center gap-6">
          <motion.a
            href="https://forms.gle/Dt4KmX9jkVonhaet5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white text-lg px-10 py-4 rounded font-bold hover:bg-gray-800 transition shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            Get a Free Quote
          </motion.a>

          <motion.p
            className="text-gray-600 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Have a general enquiry? Email us at{" "}
            <a href="mailto:htgmanandvan@gmail.com" className="text-black font-semibold hover:underline">
              htgmanandvan@gmail.com
            </a>
          </motion.p>
        </div>
      </div>
    </section>
  )
}
