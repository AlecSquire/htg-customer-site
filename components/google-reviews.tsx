"use client"

import { motion } from "framer-motion"

export default function GoogleReviews() {
  const googleReviews = [
    {
      author: "Michael Thompson",
      rating: 5,
      text: "Excellent service! Very professional and punctual. Highly recommend HTG Man & Van.",
      date: "2 months ago",
    },
    {
      author: "Sarah Mitchell",
      rating: 5,
      text: "Great experience moving house. The team was friendly and careful with all our belongings.",
      date: "1 month ago",
    },
    {
      author: "David Chen",
      rating: 5,
      text: "Quick, efficient, and honest pricing. Will definitely use again for future moves.",
      date: "3 weeks ago",
    },
    {
      author: "Emma Watson",
      rating: 5,
      text: "Best man and van service in the area. Helped me move my office equipment seamlessly.",
      date: "1 week ago",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Google Reviews</h2>
            <p className="text-muted-foreground mt-2">Trusted by customers on Google</p>
          </div>
          <div className="ml-auto text-right">
            <div className="text-4xl font-bold text-black">5.0★</div>
            <p className="text-sm text-muted-foreground">Based on customer ratings</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {googleReviews.map((review, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-black font-bold">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="font-semibold mb-1">{review.author}</p>
              <p className="text-sm text-muted-foreground mb-3">{review.date}</p>
              <p className="text-foreground/80 text-sm">{review.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="https://www.google.com/search?sca_esv=18637f1ce6371d1f&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E61B0KrnfJRETlqMiYrOHtwUFMwfQTGA4rWz549XS7ZfYFRPaOxE9mxCa66LNdDS_MxQ0y54fAqm8-0WZDf9ll3fMs76OX2vu0_9grkqYUs76TswGQ%3D%3D&q=HTG+Man+%26+Van+Ltd+Reviews&sa=X&ved=2ahUKEwjSzYiIzIGRAxUeVEEAHYhSHOkQ0bkNegQIPBAD&biw=1920&bih=968&dpr=2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-black hover:underline font-semibold"
          >
            View all reviews on Google →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
