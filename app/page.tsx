import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Features from "@/components/features"
import CustomerTestimonials from "@/components/customer-testimonials"
import GoogleReviews from "@/components/google-reviews"
import CheckatradeReviews from "@/components/checkatrade-reviews"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <Features />
      <CustomerTestimonials />
      <GoogleReviews />
      <CheckatradeReviews />
      <ContactForm />
      <Footer />
    </div>
  )
}
