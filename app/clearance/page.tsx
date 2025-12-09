import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Home, Building2, Recycle, CheckCircle2 } from "lucide-react"

export default function ClearancePage() {
  const included = [
    { icon: CheckCircle2, title: "Complete clearance", description: "We remove everything you need gone." },
    { icon: Recycle, title: "Responsible disposal", description: "Sell, donate or dispose of items responsibly." },
    { icon: Home, title: "Licensed waste carrier", description: "Fully licensed and insured for clearances." },
    { icon: Building2, title: "Additional helpers", description: "Extra hands available when needed." },
  ]

  const pricing = [
    {
      title: "Ford Transit Custom (or similar) size van",
      volume: "6 cubic metres",
      rows: [
        { label: "Half load", price: "£150" },
        { label: "Full load", price: "£220" },
      ],
    },
    {
      title: "Mercedes Sprinter LWB (or similar) size van",
      volume: "14 cubic metres",
      rows: [
        { label: "Half load", price: "£250" },
        { label: "Full load", price: "£440" },
      ],
    },
    {
      title: "Luton van",
      volume: "18 cubic metres",
      rows: [
        { label: "Half load", price: "£280" },
        { label: "Full load", price: "£500" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="px-6 py-16 md:px-12 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Clearance Services</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
            Professional and responsible clearances for homes, offices and warehouses across South Devon. We sell,
            donate or dispose of unwanted items the right way.
          </p>
        </div>
      </section>

      {/* What's Included (moved up, "What We Offer" layout) */}
      <section className="px-6 py-16 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What's Included</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {included.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="bg-white border border-border rounded-lg p-6 text-center h-full">
                  <Icon className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-16 md:px-12 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Domestic Clearance Pricing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricing.map((band, index) => (
              <div key={index} className="border border-border rounded-lg p-6 bg-gray-50 h-full flex flex-col">
                <div className="min-h-[110px]">
                  <h3 className="text-xl font-bold mb-2">{band.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{band.volume}</p>
                </div>
                <div className="space-y-3 mt-auto">
                  {band.rows.map((row, idx) => (
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
              <li>• Additional helper(s) available</li>
              <li>• Dismantling service available</li>
              <li>• Hazardous and/or heavy waste (e.g. rubble) will incur extra charge</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-12">
        <div className="max-w-4xl mx-auto text-center bg-gray-50 border border-border rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-4">Need help with a clearance?</h3>
          <p className="text-muted-foreground mb-6">
            Send us a WhatsApp with what you need clearing and we&apos;ll respond quickly with next steps.
          </p>
          <a
            href="https://wa.me/447765283257?text=Hi%2C%20I%27m%20looking%20for%20a%20clearance%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            WhatsApp us about clearance
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
