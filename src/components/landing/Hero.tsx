import PrinterIllustration from "@/components/landing/PrinterIllustration";

export default function Hero() {
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
