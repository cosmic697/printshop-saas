"use client";

import { useState } from "react";
import UploadBox from "@/components/print/UploadBox";

export default function PrintPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [copies, setCopies] = useState(1);
  const [colorMode, setColorMode] = useState<"bw" | "color">("bw");
  const [paperSize, setPaperSize] = useState<"A4" | "A3">("A4");
  const [instructions, setInstructions] = useState("");

  const handleFile = (selectedFile: File) => {
    const allowedTypes = [
      "application/pdf",
      "image/png",
      "image/jpeg",
    ];

    if (!allowedTypes.includes(selectedFile.type)) {
      alert("Please select a PDF, PNG, or JPG file.");
      return;
    }

    const maxSize = 20 * 1024 * 1024;

    if (selectedFile.size > maxSize) {
      alert("File size must be less than 20 MB.");
      return;
    }

    setFile(selectedFile);
  };

  return (
    <main className="min-h-screen bg-[#0A0A0F] text-[#F4F4F6]">
      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Header */}
        <p className="text-sm font-medium text-[#A5ADFF]">
          PrintShop
        </p>

        <h1 className="mt-3 text-3xl font-medium tracking-tight">
          Create a print order
        </h1>

        <p className="mt-3 text-[15px] leading-7 text-[#9CA0AE]">
          Upload your document and configure how you want it printed.
        </p>

        {/* Upload area */}
        <UploadBox
          file={file}
          isDragging={isDragging}
          onFileSelect={handleFile}
          onRemoveFile={() => setFile(null)}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        />

        {/* Print settings */}
        <div className="mt-6 rounded-2xl border border-[#1F1F27] bg-[#16161D] p-6">
          <p className="text-sm font-medium text-[#A5ADFF]">
            Print settings
          </p>

          <h2 className="mt-2 text-lg font-medium text-[#F4F4F6]">
            How many copies?
          </h2>

          {/* Copies selection button */}
          <div className="mt-4 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setCopies(Math.max(1, copies - 1))}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#2A2A35] text-[#F4F4F6] hover:border-[#3A38C8]"
            >
              −
            </button>

            <span className="flex h-9 min-w-12 items-center justify-center rounded-lg border border-[#2A2A35] bg-[#0A0A0F] text-sm">
              {copies}
            </span>

            <button
              type="button"
              onClick={() => setCopies(copies + 1)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#2A2A35] text-[#F4F4F6] hover:border-[#3A38C8]"
            >
              +
            </button>
          </div>

          {/* Colour selection */}
          <div className="mt-8">
            <h3 className="text-sm font-medium text-[#F4F4F6]">
              Color
            </h3>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setColorMode("bw")}
                className={`rounded-lg border p-4 text-left transition-colors ${
                  colorMode === "bw"
                    ? "border-[#6366F1] bg-[#1C1B2E]"
                    : "border-[#2A2A35] hover:border-[#3A38C8]"
                }`}
              >
                <p className="text-sm font-medium text-[#F4F4F6]">
                  Black & White
                </p>

                <p className="mt-1 text-xs text-[#9CA0AE]">
                  Standard monochrome printing
                </p>
              </button>

              <button
                type="button"
                onClick={() => setColorMode("color")}
                className={`rounded-lg border p-4 text-left transition-colors ${
                  colorMode === "color"
                    ? "border-[#6366F1] bg-[#1C1B2E]"
                    : "border-[#2A2A35] hover:border-[#3A38C8]"
                }`}
              >
                <p className="text-sm font-medium text-[#F4F4F6]">
                  Color
                </p>

                <p className="mt-1 text-xs text-[#9CA0AE]">
                  Full-color printing
                </p>
              </button>
            </div>
          </div>

          {/* Paper size */}
          <div className="mt-8">
            <h3 className="text-sm font-medium text-[#F4F4F6]">
              Paper size
            </h3>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setPaperSize("A4")}
                className={`rounded-lg border p-4 text-left transition-colors ${
                  paperSize === "A4"
                    ? "border-[#6366F1] bg-[#1C1B2E]"
                    : "border-[#2A2A35] hover:border-[#3A38C8]"
                }`}
              >
                <p className="text-sm font-medium text-[#F4F4F6]">
                  A4
                </p>

                <p className="mt-1 text-xs text-[#9CA0AE]">
                  Standard document size
                </p>
              </button>

              <button
                type="button"
                onClick={() => setPaperSize("A3")}
                className={`rounded-lg border p-4 text-left transition-colors ${
                  paperSize === "A3"
                    ? "border-[#6366F1] bg-[#1C1B2E]"
                    : "border-[#2A2A35] hover:border-[#3A38C8]"
                }`}
              >
                <p className="text-sm font-medium text-[#F4F4F6]">
                  A3
                </p>

                <p className="mt-1 text-xs text-[#9CA0AE]">
                  Larger paper format
                </p>
              </button>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8">
            <label
              htmlFor="instructions"
              className="text-sm font-medium text-[#F4F4F6]"
            >
              Print instructions
            </label>

            <p className="mt-1 text-xs text-[#6B6F7E]">
              Add any special instructions for the print shop.
            </p>

            <textarea
              id="instructions"
              value={instructions}
              onChange={(event) =>
                setInstructions(event.target.value)
              }
              placeholder="e.g. Print pages 1–5, double-sided..."
              rows={4}
              className="mt-3 w-full resize-none rounded-lg border border-[#2A2A35] bg-[#0A0A0F] px-4 py-3 text-sm text-[#F4F4F6] outline-none placeholder:text-[#6B6F7E] focus:border-[#6366F1]"
            />
          </div>
        </div>

        {/* Order summary */}
        <div className="mt-6 rounded-2xl border border-[#1F1F27] bg-[#16161D] p-6">
          <p className="text-sm font-medium text-[#A5ADFF]">
            Order summary
          </p>

          <h2 className="mt-2 text-lg font-medium text-[#F4F4F6]">
            Review your print order
          </h2>

          <div className="mt-6 space-y-4">
            {/* Document */}
            <div className="flex items-start justify-between gap-4">
              <span className="text-sm text-[#9CA0AE]">
                Document
              </span>

              <span className="max-w-xs truncate text-right text-sm text-[#F4F4F6]">
                {file ? file.name : "No file selected"}
              </span>
            </div>

            {/* Copies */}
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm text-[#9CA0AE]">
                Copies
              </span>

              <span className="text-sm text-[#F4F4F6]">
                {copies}
              </span>
            </div>

            {/* Color */}
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm text-[#9CA0AE]">
                Color
              </span>

              <span className="text-sm text-[#F4F4F6]">
                {colorMode === "bw" ? "Black & White" : "Color"}
              </span>
            </div>

            {/* Paper size */}
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm text-[#9CA0AE]">
                Paper size
              </span>

              <span className="text-sm text-[#F4F4F6]">
                {paperSize}
              </span>
            </div>

            {/* Instructions */}
            <div className="border-t border-[#1F1F27] pt-4">
              <p className="text-sm text-[#9CA0AE]">
                Instructions
              </p>

              <p className="mt-2 text-sm leading-6 text-[#F4F4F6]">
                {instructions.trim()
                  ? instructions
                  : "No special instructions"}
              </p>
            </div>
          </div>
        </div>

        {/* Create order */}
        <button
          type="button"
          onClick={() => {
            if (!file) {
              return;
            }

            const orderId = crypto.randomUUID();

            const order = {
              id: orderId,
              fileName: file.name,
              fileType: file.type,
              fileSize: file.size,
              copies,
              colorMode,
              paperSize,
              instructions: instructions.trim(),
              status: "PENDING",
            };

            console.log("New print order:", order);

            alert("Order ready to be created.");
          }}
          className="mt-6 w-full rounded-lg bg-[#6366F1] px-5 py-3 text-sm font-medium text-[#0A0A0F] transition-opacity hover:opacity-90"
        >
          Create order
        </button>
      </div>
    </main>
  );
}

