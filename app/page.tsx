import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import Founder from "@/components/Founder";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Philosophy />
      <Services />
      <Founder />
      <Testimonials />
      <Footer />
    </main>
  );
}