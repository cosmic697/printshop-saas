import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import ForPrintShops from "@/components/landing/ForPrintShops";
import FinalCTA from "@/components/landing/FinalCTA";

function Footer() {
  return (
    <footer className="border-t border-[#1F1F27]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[#6B6F7E]">
          © 2026 PrintShop. Built for students and print shops.
        </p>

        <div className="flex gap-5">
          <span className="text-sm text-[#6B6F7E]">Privacy</span>

          <span className="text-sm text-[#6B6F7E]">Terms</span>

          <span className="text-sm text-[#6B6F7E]">Contact</span>
        </div>
      </div>
    </footer>
  );
}


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
