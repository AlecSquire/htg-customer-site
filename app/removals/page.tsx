import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Package, Truck, Shield, Clock } from "lucide-react"

export default function RemovalsPage() {
  const pricingTiers = [
    {
      name: "Small Removal",
      description: "Perfect for studio apartments or single rooms",
      price: "From £95",
      features: ["Medium van + driver", "Extra helper(s) available if required"],
    },
    {
      name: "Medium Removal",
      description: "Ideal for 1-2 bedroom properties",
      price: "From £350",
      features: ["Large/Luton van(s) + driver(s)", "Extra helper(s) available if required"],
    },
    {
      name: "Large Removal",
      description: "For 2+ bedroom houses",
      price: "From £500",
      features: ["Large/Luton van(s) + driver(s)", "Extra helper(s) available if required"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="px-6 py-16 md:px-12 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Professional Removal Services</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
            Stress-free flat, house and office removals across South Devon and surrounding areas. We handle your
            belongings with care and professionalism.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Package className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Careful Handling</h3>
              <p className="text-sm text-muted-foreground">Every item treated with care</p>
            </div>
            <div className="text-center">
              <Truck className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Modern Fleet</h3>
              <p className="text-sm text-muted-foreground">Well-maintained vehicles</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Fully Insured</h3>
              <p className="text-sm text-muted-foreground">Complete peace of mind</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Punctual Service</h3>
              <p className="text-sm text-muted-foreground">Always on time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-16 md:px-12 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Removal Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className="border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-muted-foreground mb-4">{tier.description}</p>
                <div className="text-3xl font-bold mb-6">{tier.price}</div>
                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8">
            *Prices are estimates. Final quote provided after assessment. Contact us for a free quote.
          </p>
          <div className="mt-12 p-6 bg-gray-50 border border-border rounded-lg">
            <h3 className="text-xl font-bold mb-4">Extra services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Furniture dismantling/assembling</li>
              <li>• Packing/unpacking boxes</li>
              <li>• Packing materials</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
