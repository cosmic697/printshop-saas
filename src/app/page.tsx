import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import ForPrintShops from "@/components/landing/ForPrintShops";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <ForPrintShops />
      <FinalCTA />
      <Footer />
    </main>
  );
}
