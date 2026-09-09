"use client";

type PrintSettingsProps = {
  copies: number;
  onCopiesChange: (copies: number) => void;
  colorMode: "bw" | "color";
  onColorModeChange: (mode: "bw" | "color") => void;
  paperSize: "A4" | "A3";
  onPaperSizeChange: (size: "A4" | "A3") => void;
  instructions: string;
  onInstructionsChange: (instructions: string) => void;
};

export default function PrintSettings({
  copies,
  onCopiesChange,
  colorMode,
  onColorModeChange,
  paperSize,
  onPaperSizeChange,
  instructions,
  onInstructionsChange,
}: PrintSettingsProps) {
  return (
    <section className="rounded-2xl border border-[#1F1F27] bg-[#16161D] p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Print Settings</h2>

        <p className="mt-1 text-sm text-[#9CA0AE]">
          Choose how you want your document printed.
        </p>
      </div>

      {/* Copies */}
      <div>
        <label className="text-sm font-medium">Copies</label>

        <div className="mt-3 flex items-center gap-3">
          <button
            type="button"
            onClick={() =>
              onCopiesChange(Math.max(1, copies - 1))
            }
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#2A2A35] bg-[#0A0A0F] text-lg transition-colors hover:border-[#6366F1]"
          >
            −
          </button>

          <span className="w-10 text-center text-sm font-medium">
            {copies}
          </span>

          <button
            type="button"
            onClick={() => onCopiesChange(copies + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#2A2A35] bg-[#0A0A0F] text-lg transition-colors hover:border-[#6366F1]"
          >
            +
          </button>
        </div>
      </div>

      {/* Color Mode */}
      <div className="mt-6">
        <label className="text-sm font-medium">Color</label>

        <div className="mt-3 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => onColorModeChange("bw")}
            className={`rounded-xl border px-4 py-3 text-sm transition-colors ${
              colorMode === "bw"
                ? "border-[#6366F1] bg-[#1C1B2E]"
                : "border-[#2A2A35] bg-[#0A0A0F] hover:border-[#6366F1]"
            }`}
          >
            Black & White
          </button>

          <button
            type="button"
            onClick={() => onColorModeChange("color")}
            className={`rounded-xl border px-4 py-3 text-sm transition-colors ${
              colorMode === "color"
                ? "border-[#6366F1] bg-[#1C1B2E]"
                : "border-[#2A2A35] bg-[#0A0A0F] hover:border-[#6366F1]"
            }`}
          >
            Color
          </button>
        </div>
      </div>

      {/* Paper Size */}
      <div className="mt-6">
        <label className="text-sm font-medium">Paper Size</label>

        <div className="mt-3 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => onPaperSizeChange("A4")}
            className={`rounded-xl border px-4 py-3 text-sm transition-colors ${
              paperSize === "A4"
                ? "border-[#6366F1] bg-[#1C1B2E]"
                : "border-[#2A2A35] bg-[#0A0A0F] hover:border-[#6366F1]"
            }`}
          >
            A4
          </button>

          <button
            type="button"
            onClick={() => onPaperSizeChange("A3")}
            className={`rounded-xl border px-4 py-3 text-sm transition-colors ${
              paperSize === "A3"
                ? "border-[#6366F1] bg-[#1C1B2E]"
                : "border-[#2A2A35] bg-[#0A0A0F] hover:border-[#6366F1]"
            }`}
          >
            A3
          </button>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-6">
        <label
          htmlFor="instructions"
          className="text-sm font-medium"
        >
          Print Instructions
        </label>

        <textarea
          id="instructions"
          value={instructions}
          onChange={(event) =>
            onInstructionsChange(event.target.value)
          }
          placeholder="Example: Print pages 1-3 double-sided..."
          rows={4}
          className="mt-3 w-full resize-none rounded-xl border border-[#2A2A35] bg-[#0A0A0F] px-4 py-3 text-sm text-[#F4F4F6] outline-none transition-colors placeholder:text-[#6B6D78] focus:border-[#6366F1]"
        />
      </div>
    </section>
  );
}