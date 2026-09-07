import Link from "next/link";

function Navbar() {
  return (
    <nav className="border-b border-[#1F1F27]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h2 className="text-[15px] font-medium text-[#F4F4F6]">PrintShop</h2>

        <div className="flex items-center gap-5">
          <span className="text-sm text-[#9CA0AE]">How it works</span>

          <span className="text-sm text-[#9CA0AE]">Features</span>

          <span className="text-sm text-[#9CA0AE]">For print shops</span>

          <Link
            href="/login"
            className="text-sm text-[#F4F4F6] hover:text-white"
          >
            Sign in
          </Link>
          <Link
            href="/print"
            className="rounded-lg bg-[#6366F1] px-4 py-2 text-sm font-medium text-[#0A0A0F]"
          >
            Start printing
          </Link>
        </div>
      </div>
    </nav>
  );
}

function PrinterIllustration() {
  return (
    <div>
      <svg
        viewBox="0 0 280 280"
        width="100%"
        height="280"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Orbit */}
        <circle
          cx="140"
          cy="150"
          r="95"
          fill="none"
          stroke="#1F1F27"
          strokeWidth="1"
          strokeDasharray="4 6"
        />

        {/* Decorative dots */}
        <circle cx="10" cy="20" r="1.8" fill="#4F46E5" />
        <circle cx="40" cy="10" r="1.8" fill="#4F46E5" />
        <circle cx="70" cy="30" r="1.8" fill="#4F46E5" />

        <circle cx="230" cy="15" r="1.8" fill="#4F46E5" />
        <circle cx="260" cy="45" r="1.8" fill="#4F46E5" />

        <circle cx="20" cy="250" r="1.8" fill="#4F46E5" />
        <circle cx="255" cy="240" r="1.8" fill="#4F46E5" />
        <circle cx="270" cy="200" r="1.8" fill="#4F46E5" />

        {/* Upload floating circle */}
        <circle
          cx="65"
          cy="90"
          r="20"
          fill="#1C1B2E"
          stroke="#3A38C8"
          strokeWidth="1"
        />

        {/* Upload icon */}
        <path
          d="M65 96V84M60 89L65 84L70 89"
          fill="none"
          stroke="#A5ADFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Settings floating circle */}
        <circle
          cx="215"
          cy="90"
          r="20"
          fill="#1C2A26"
          stroke="#1E7A5F"
          strokeWidth="1"
        />

        {/* Settings icon */}
        <circle
          cx="215"
          cy="90"
          r="6"
          fill="none"
          stroke="#6EE7B7"
          strokeWidth="2"
        />

        <circle cx="215" cy="90" r="2" fill="#6EE7B7" />

        {/* Printer body */}
        <rect
          x="95"
          y="150"
          width="90"
          height="55"
          rx="10"
          fill="#16161D"
          stroke="#2A2A35"
          strokeWidth="1"
        />

        {/* Paper */}
        <rect x="115" y="120" width="50" height="40" rx="4" fill="#EDEDF2" />

        {/* QR code */}
        <rect x="123" y="128" width="6" height="6" fill="#0A0A0F" />
        <rect x="133" y="128" width="6" height="6" fill="#0A0A0F" />
        <rect x="143" y="128" width="6" height="6" fill="#0A0A0F" />

        <rect x="123" y="138" width="6" height="6" fill="#0A0A0F" />

        <rect x="143" y="146" width="6" height="6" fill="#0A0A0F" />
        <rect x="133" y="146" width="6" height="6" fill="#0A0A0F" />

        {/* Printer status light */}
        <circle cx="175" cy="177" r="4" fill="#34D399" />

        {/* Completed floating circle */}
        <circle
          cx="140"
          cy="235"
          r="20"
          fill="#241B2E"
          stroke="#7C3AA0"
          strokeWidth="1"
        />

        {/* Check icon */}
        <path
          d="M132 235L138 241L149 229"
          fill="none"
          stroke="#D8B4FE"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

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
