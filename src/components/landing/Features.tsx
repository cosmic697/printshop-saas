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

export default function Features() {
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