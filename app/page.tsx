import Navbar from "@/components/navbar";
import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Certificates from "@/components/certificates"
import Portfolio from "@/components/portofolios"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="certificates">
        <Certificates />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </main>
  )
}
