import Navbar from "@/components/landing/Navbar";
import PrinterIllustration from "@/components/landing/PrinterIllustration";

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        {/* Left side */}
        <div>
          {/* Badge */}
          <div className="mb-4 inline-block rounded-full bg-[#1C1B2E] px-3 py-1 text-xs font-medium text-[#A5ADFF]">
            For students and print shops
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-5xl font-medium leading-tight tracking-tight text-[#F4F4F6]">
            Print documents without standing in line.
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#9CA0AE]">
            Upload your documents, choose your print settings, and send your
            order directly to your selected print shop.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex gap-3">
            <button className="rounded-lg bg-[#6366F1] px-5 py-2.5 text-sm font-medium text-[#0A0A0F]">
              Start printing
            </button>

            <button className="rounded-lg border border-[#2A2A35] px-5 py-2.5 text-sm font-medium text-[#F4F4F6]">
              See how it works
            </button>
          </div>
          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:gap-8">
            <div>
              <p className="text-sm font-medium text-[#F4F4F6]">PDF & Images</p>
              <p className="mt-1 text-xs text-[#9CA0AE]">
                Upload what you need to print
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-[#F4F4F6]">QR Orders</p>
              <p className="mt-1 text-xs text-[#9CA0AE]">
                Easy order identification
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-[#F4F4F6]">
                Secure Workflow
              </p>
              <p className="mt-1 text-xs text-[#9CA0AE]">
                Built with privacy in mind
              </p>
            </div>
          </div>
        </div>

        {/* Right side - temporary */}
        <div>
          <PrinterIllustration />
        </div>
      </div>
    </section>
  );
}

function HowItWorksCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-[#1F1F27] bg-[#16161D] p-6 transition-colors duration-200 hover:border-[#3A38C8]">
      <p className="text-sm font-medium text-[#A5ADFF]">{number}</p>

      <h3 className="mt-4 text-lg font-medium text-[#F4F4F6]">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-[#9CA0AE]">{description}</p>
    </div>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-[#1F1F27] bg-[#16161D] p-6">
      <h3 className="text-lg font-medium text-[#F4F4F6]">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-[#9CA0AE]">{description}</p>
    </div>
  );
}

function Features() {
  return (
    <section className="border-t border-[#1F1F27]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Section heading */}
        <div>
          <p className="text-sm font-medium text-[#A5ADFF]">Features</p>

          <h2 className="mt-3 text-3xl font-medium tracking-tight text-[#F4F4F6]">
            Everything you need for a smoother print workflow.
          </h2>

          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#9CA0AE]">
            PrintShop connects students and print shops through a simple digital
            workflow.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <FeatureCard
            title="Upload & Configure"
            description="Upload your documents, choose print settings, and add instructions before sending your order."
          />

          <FeatureCard
            title="QR-based Orders"
            description="Each order gets a unique identifier that helps the print shop quickly find and process it."
          />

          <FeatureCard
            title="Privacy-first Printing"
            description="Documents are handled with privacy in mind, with automatic deletion planned for completed orders."
          />
        </div>
      </div>
    </section>
  );
}

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

function HowItWorks() {
  return (
    <section className="border-t border-[#1F1F27]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Section heading */}
        <div>
          <p className="text-sm font-medium text-[#A5ADFF]">How it works</p>

          <h2 className="mt-3 text-3xl font-medium tracking-tight text-[#F4F4F6]">
            From document to print in three steps.
          </h2>

          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#9CA0AE]">
            A simple workflow designed to save students time and make print-shop
            orders easier to manage.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <HowItWorksCard
            number="01"
            title="Upload"
            description="Upload your PDF or images and get your documents ready to print."
          />

          <HowItWorksCard
            number="02"
            title="Configure"
            description="Choose copies, color, paper size, and add any special instructions."
          />

          <HowItWorksCard
            number="03"
            title="Print"
            description="Send your order to the selected print shop and track its progress."
          />
        </div>
      </div>
    </section>
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
