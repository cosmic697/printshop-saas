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

export default function HowItWorks() {
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
