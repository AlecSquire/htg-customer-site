"use client"

import { motion } from "framer-motion"

export default function CheckatradeReviews() {
  const checkatradeReviews = [
    {
      author: "Maxine B",
      rating: 10,
      title: "Disposal of furniture",
      text: "Harry was on time helpful and pleasant job was done with care removing my king size bed and sofas taking care of looking after my home whilst doing it Thanks Harry a pleasure to meet you",
      date: "5 days ago",
      verified: true,
    },
    {
      author: "Outstanding Service",
      rating: 9.67,
      title: "Outstanding Service",
      text: "We booked Harry to do a fairly long distance collection for us, he was very professional, provided excellent quotes and kept us informed at all stages. He carried out the job to a great standard, picking up by the detailed time and delivering promptly, as per his plan. Absolutely sterling service provided and definately recommend his services and we will use again in the future. Thanks Harry",
      date: "23 October",
      verified: true,
    },
    {
      author: "Professional and Friendly",
      rating: 10,
      title: "A professional friendly removal company",
      text: "Harry and his team Adrian and Ben were totally professional friendly and helpful. No hard sell just sound advice with a great price. Harry and the boys took all the stress away from moving. In the first instance Harry came to evaluate the move and stuck to his quote no hidden charge or extras. A great partnership to do business with and a fantastic work ethic everything on day was just fantastic and I didn't feel pressure or stress, Harry was very open and will take any stress you might have away. I seldom give a...",
      date: "20 October",
      verified: true,
    },
    {
      author: "Reliable Service",
      rating: 10,
      title: "Reliable and Professional",
      text: "Excellent service from start to finish. Harry and his team were punctual, professional, and treated all our belongings with care. The communication was clear and the pricing was transparent. Highly recommended for any moving needs.",
      date: "15 October",
      verified: true,
    },
  ]

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Checkatrade Reviews</h2>
            <p className="text-muted-foreground mt-2">Verified customer feedback on Checkatrade</p>
          </div>
          <div className="ml-auto text-right">
            <div className="text-4xl font-bold text-black">9.9★</div>
            <p className="text-sm text-muted-foreground">Based on verified reviews</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {checkatradeReviews.map((review, index) => (
            <motion.div
              key={index}
              className="p-6 bg-background rounded-lg border border-border hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-black font-bold">{review.rating}★</div>
                {review.verified && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Verified</span>
                )}
              </div>
              <p className="font-semibold mb-1">{review.author}</p>
              {review.title && <p className="text-sm font-medium text-gray-700 mb-2">{review.title}</p>}
              <p className="text-sm text-muted-foreground mb-3">{review.date}</p>
              <p className="text-foreground/80 text-sm line-clamp-4">{review.text}</p>
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
            href="https://www.checkatrade.com/trades/htgmanvan/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-black hover:underline font-semibold"
          >
            View all reviews on Checkatrade →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
