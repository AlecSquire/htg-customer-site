"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Truck, Package, Trash2 } from "lucide-react"

export default function Hero() {
  return (
    <>
      <section className="py-20 md:py-32 px-6 md:px-12 bg-white text-black overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 mb-4">
                Serving South Devon & the South West
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
                Professional removals, man & van and clearances in South Devon
              </h1>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                With over 10 years of experience, HTG Man & Van Ltd provides reliable, efficient and trustworthy removal
                services across the South Hams, South Devon and the wider South West.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From single items to full house moves, we treat every job with the same care and professionalism. Fully
                insured, locally trusted, and always on time.
              </p>

              <motion.a
                href="https://forms.gle/Dt4KmX9jkVonhaet5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Your Free Removals Quote
              </motion.a>

              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  <span>10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  <span>Fully Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  <span>5-Star Rated</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/images/hero-van.webp"
                alt="HTG Man & Van"
                width={600}
                height={600}
                className="w-full max-w-lg h-auto object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-12 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link
                href="/removals"
                className="block bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-black transition-all group h-full"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gray-100 rounded-full group-hover:bg-black transition-colors">
                    <Truck className="w-8 h-8 text-black group-hover:text-white transition-colors" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Removals</h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  Full flat, house and office removals with packing and other services as required. A bespoke approach
                  to best suit your needs.
                </p>
                <div className="text-center">
                  <span className="text-black font-semibold group-hover:underline">View Pricing →</span>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/man-and-van"
                className="block bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-black transition-all group h-full"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gray-100 rounded-full group-hover:bg-black transition-colors">
                    <Package className="w-8 h-8 text-black group-hover:text-white transition-colors" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Man & Van</h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  Flexible van hire with driver right through from small vans for single items up to Lutons, Flatbeds
                  and Tippers for bigger projects.
                </p>
                <div className="text-center">
                  <span className="text-black font-semibold group-hover:underline">View Pricing →</span>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/clearance"
                className="block bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-black transition-all group h-full"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gray-100 rounded-full group-hover:bg-black transition-colors">
                    <Trash2 className="w-8 h-8 text-black group-hover:text-white transition-colors" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Clearance</h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  House, Office and Warehouse clearance services. We remove unwanted items and sell, donate or dispose
                  of them responsibly.
                </p>
                <div className="text-center">
                  <span className="text-black font-semibold group-hover:underline">View Pricing →</span>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
