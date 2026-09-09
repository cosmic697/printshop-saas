import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";

function ForPrintShops() {
  return (
    <section className="border-t border-[#1F1F27]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#A5ADFF]">For print shops</p>

          <h2 className="mt-3 text-3xl font-medium tracking-tight text-[#F4F4F6]">
            Manage print orders without the paperwork.
          </h2>

          <p className="mt-4 text-[15px] leading-7 text-[#9CA0AE]">
            Receive digital orders, view print instructions, and keep track of
            every job from one simple dashboard.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {/* Left side */}
          <div className="rounded-xl border border-[#1F1F27] bg-[#16161D] p-6">
            <p className="text-sm font-medium text-[#A5ADFF]">
              Simple order management
            </p>

            <h3 className="mt-3 text-xl font-medium text-[#F4F4F6]">
              Everything your shop needs to process an order.
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#9CA0AE]">
              See the uploaded document, print settings, customer instructions,
              and order status in one place.
            </p>
          </div>

          {/* Right side */}
          <div className="rounded-xl border border-[#1F1F27] bg-[#16161D] p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-[#F4F4F6]">
                Order workflow
              </p>

              <span className="rounded-full bg-[#1C2A26] px-2.5 py-1 text-xs text-[#6EE7B7]">
                Live
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#9CA0AE]">Order received</span>

                <span className="text-xs text-[#6EE7B7]">Done</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-[#9CA0AE]">Preparing print</span>

                <span className="text-xs text-[#A5ADFF]">Active</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-[#9CA0AE]">Ready for pickup</span>

                <span className="text-xs text-[#6B6F7E]">Pending</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
