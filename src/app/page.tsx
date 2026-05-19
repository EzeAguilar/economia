import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Problem from "@/components/Problem"
import HowItWorks from "@/components/HowItWorks"
import Services from "@/components/Services"
import Industries from "@/components/Industries"
import FAQ from "@/components/FAQ"
import ComingSoon from "@/components/ComingSoon"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Services />
        <Industries />
        <FAQ />
        <ComingSoon />
      </main>
      <Footer />
    </>
  )
}
