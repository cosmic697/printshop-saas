export default function ForPrintShops() {
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
