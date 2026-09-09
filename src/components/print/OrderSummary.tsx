"use client";

type OrderSummaryProps = {
  file: File | null;
  copies: number;
  colorMode: "bw" | "color";
  paperSize: "A4" | "A3";
  instructions: string;
  onCreateOrder: () => void;
};

export default function OrderSummary({
  file,
  copies,
  colorMode,
  paperSize,
  instructions,
  onCreateOrder,
}: OrderSummaryProps) {
  return (
    <section className="mt-8 rounded-2xl border border-[#1F1F27] bg-[#16161D] p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">
          Order Summary
        </h2>

        <p className="mt-1 text-sm text-[#9CA0AE]">
          Review your print order before creating it.
        </p>
      </div>

      <div className="space-y-4 text-sm">
        {/* File */}
        <div className="flex items-center justify-between">
          <span className="text-[#9CA0AE]">File</span>

          <span className="max-w-[60%] truncate text-right">
            {file ? file.name : "No file selected"}
          </span>
        </div>

        {/* Copies */}
        <div className="flex items-center justify-between">
          <span className="text-[#9CA0AE]">Copies</span>

          <span>{copies}</span>
        </div>

        {/* Color */}
        <div className="flex items-center justify-between">
          <span className="text-[#9CA0AE]">Color</span>

          <span>
            {colorMode === "bw"
              ? "Black & White"
              : "Color"}
          </span>
        </div>

        {/* Paper */}
        <div className="flex items-center justify-between">
          <span className="text-[#9CA0AE]">Paper</span>

          <span>{paperSize}</span>
        </div>

        {/* Instructions */}
        <div className="flex items-start justify-between gap-6">
          <span className="text-[#9CA0AE]">
            Instructions
          </span>

          <span className="max-w-[60%] text-right">
            {instructions.trim()
              ? instructions
              : "No special instructions"}
          </span>
        </div>
      </div>

      {/* Create Order */}
      <button
        type="button"
        onClick={onCreateOrder}
        className="mt-8 w-full rounded-xl bg-[#6366F1] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#5558E8]"
      >
        Create Order
      </button>
    </section>
  );
}
