import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import ForPrintShops from "@/components/landing/ForPrintShops";


function FinalCTA() {
  return (
    <section className="border-t border-[#1F1F27]">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="text-sm font-medium text-[#A5ADFF]">Ready to print?</p>

        <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-medium tracking-tight text-[#F4F4F6]">
          Skip the queue. Send your print order online.
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-[#9CA0AE]">
          Upload your documents, choose your settings, and send them to your
          selected print shop.
        </p>

        <button className="mt-7 rounded-lg bg-[#6366F1] px-5 py-2.5 text-sm font-medium text-[#0A0A0F]">
          Start printing
        </button>
      </div>
    </section>
  );
}

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
