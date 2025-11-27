import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import { Award, Users, Clock, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="px-6 py-16 md:px-12 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">About HTG Man & Van</h1>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              We’re a family-run business serving South Devon and surrounding areas with professional and reliable
              moving, clearance and man and van services. With years of experience, we pride ourselves on delivering
              exceptional customer service at an affordable price.
            </p>
            <p className="text-lg text-muted-foreground text-pretty">
              Our mission is simple:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-base mb-6">
              <li>To make your move as stress-free as possible</li>
              <li>To provide honest, affordable prices</li>
              <li>To contribute to a thriving local economy</li>
              <li>To champion and strengthen local community and business networks</li>
            </ul>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image src="/images/hero-van.webp" alt="HTG Man & Van" fill className="object-contain" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-16 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Professional Service</h3>
              <p className="text-sm text-muted-foreground">Trained, experienced team members</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Local Business</h3>
              <p className="text-sm text-muted-foreground">Family-run, community-focused</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Reliable & Punctual</h3>
              <p className="text-sm text-muted-foreground">Always on time, every time</p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Customer Care</h3>
              <p className="text-sm text-muted-foreground">Your satisfaction is our priority</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 py-16 md:px-12 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              HTG Man & Van was founded with a simple goal: to provide honest, reliable moving services to our local
              community. What started as a single van operation has grown into a trusted name across South Devon.
            </p>
            <p>
              We understand that moving can be stressful, which is why we go above and beyond to ensure every job is
              completed to the highest standard. Our team treats every item as if it were their own, and we take pride
              in our reputation for care and professionalism.
            </p>
            <p>
              As a local business, we're invested in our community. We believe in fair pricing, transparent service, and
              building long-term relationships with our customers. Many of our clients come back to us time and time
              again, and recommend us to their friends and family.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
