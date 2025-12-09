import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { MapPin, Shield, Star, Clock, Phone, Banknote, Truck } from "lucide-react"

export default function WhyChooseUsPage() {
  const usps = [
    {
      icon: MapPin,
      title: "Local Expertise",
      description:
        "We know the South Hams and wider area inside out. Our drivers are familiar with every area, ensuring a reliable service and timely arrivals.",
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description:
        "Complete peace of mind with comprehensive insurance coverage on all moves. Your belongings are protected.",
    },
    {
      icon: Star,
      title: "5-Star Rated",
      description: "Consistently excellent reviews on Google and Checkatrade. Our reputation speaks for itself.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Same-day service available. We work around your schedule, including evenings and weekends.",
    },
    {
      icon: Phone,
      title: "Responsive Communication",
      description: "Quick response times and clear communication throughout. We're always just a phone call away.",
    },
    {
      icon: Truck,
      title: "Reliable Fleet",
      description:
        "We use only modern, well-maintained vehicles and partner with local hire companies to give you the best, most reliable vans available.",
    },
    {
      icon: Banknote,
      title: "Transparent Pricing",
      description: "No hidden fees or surprise charges. What we quote is what you pay - simple and honest.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="px-6 py-16 md:px-12 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Why Choose HTG Man & Van?</h1>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty">
            We’re not just another man and van service, we have bespoke solutions to best suit your needs. Here’s what
            makes us different and why hundreds of customers trust us with their belongings.
          </p>
        </div>
      </section>

      {/* USPs Grid */}
      <section className="px-6 py-16 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {usps.map((usp, index) => {
              const Icon = usp.icon
              return (
                <div
                  key={index}
                  className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{usp.title}</h3>
                  <p className="text-muted-foreground text-sm">{usp.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How We Do It */}
      <section className="px-6 py-16 md:px-12 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How We Do It</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Initial Contact</h3>
                <p className="text-muted-foreground">
                  Get in touch via phone, email, or our online form. We'll discuss your requirements and provide an
                  instant quote with no obligation.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Booking Confirmation</h3>
                <p className="text-muted-foreground">
                  Once you're happy with the quote, we'll confirm your booking and send all the details. We'll also
                  provide a reminder call the day before.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">The Move</h3>
                <p className="text-muted-foreground">
                  Our team arrives on time, ready to work. We handle everything with care, from loading to transport to
                  unloading at your destination.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Payment & Follow-up</h3>
                <p className="text-muted-foreground">
                  Simple payment options available. We'll follow up to ensure you're completely satisfied with our
                  service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
