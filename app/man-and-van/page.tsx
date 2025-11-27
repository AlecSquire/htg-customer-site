import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Clock, MapPin, Box, SlidersHorizontal } from "lucide-react"

export default function ManAndVanPage() {
  const offerings = [
    {
      icon: Clock,
      title: "Flexible Booking",
      description: "Book by the hour, half-day or full-day to suit your job.",
    },
    {
      icon: MapPin,
      title: "Local & Regional",
      description: "South Devon and surrounding areas with longer trips on request.",
    },
    {
      icon: Box,
      title: "Loading Assistance",
      description: "Professional help with loading and unloading included.",
    },
    {
      icon: SlidersHorizontal,
      title: "Bespoke Offerings",
      description: "Select the van size and number of helpers to best suit your needs.",
    },
  ]

  const pricingGroups = [
    {
      title: "1-man with medium van",
      rows: [
        { label: "1 hour", price: "£50" },
        { label: "1-2 hours", price: "£95" },
        { label: "Half day", price: "£180" },
        { label: "4-6 hours", price: "£265" },
        { label: "Full day", price: "£350" },
      ],
    },
    {
      title: "1-man with Luton van",
      rows: [
        { label: "Half day", price: "£275" },
        { label: "Full day", price: "£500" },
      ],
    },
    {
      title: "2 men with Luton van",
      rows: [
        { label: "Half day", price: "£400" },
        { label: "Full day", price: "£700" },
      ],
    },
    {
      title: "1-man with LWB van",
      rows: [
        { label: "Half day", price: "£250" },
        { label: "Full day", price: "£400" },
      ],
    },
    {
      title: "2 men with LWB van",
      rows: [
        { label: "Half day", price: "£350" },
        { label: "Full day", price: "£600" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="px-6 py-16 md:px-12 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Man & Van Services</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
            Flexible, affordable man and van hire for all your transportation needs. From small vans carrying single
            items to full Lutons, we've got you covered.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="px-6 py-16 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((offering, index) => {
              const Icon = offering.icon
              return (
                <div key={index} className="text-center bg-white border border-border rounded-lg p-6 h-full">
                  <Icon className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{offering.title}</h3>
                  <p className="text-sm text-muted-foreground">{offering.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-16 md:px-12 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Man & Van Pricing</h2>
          <div className="space-y-6">
            {pricingGroups.map((group, index) => (
              <div key={index} className="border border-border rounded-lg p-6 bg-gray-50">
                <h3 className="text-xl font-bold mb-4">{group.title}</h3>
                <div className="space-y-2">
                  {group.rows.map((row, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-white border border-border rounded px-4 py-3">
                      <span className="text-sm font-semibold">{row.label}</span>
                      <span className="text-lg font-bold">{row.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8">
            *Prices are estimates. Final quote provided after assessment. Contact us for a free quote.
          </p>
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2">Additional Information</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Minimum booking: 1 hour</li>
              <li>• 1-hour bookings only available within a 10 mile radius of Totnes</li>
              <li>• Prices include a mileage allowance of up to 25 miles</li>
              <li>• Extra mileage: 40p/mile for Lutons and 30p/mile for other vans</li>
              <li>• Congestion charge, parking fees and tolls will be added to final invoice</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
