"use client";

import { useState } from "react";
import UploadBox from "@/components/print/UploadBox";
import PrintSettings from "@/components/print/PrintSettings";

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

  const handleCreateOrder = () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const order = {
      id: crypto.randomUUID(),
      fileName: file.name,
      fileType: file.type,
      fileSize: file.size,
      copies,
      colorMode,
      paperSize,
      instructions,
      status: "PENDING",
    };

    console.log("Order created:", order);

    alert("Order created successfully!");
  };

  return (
    <main className="min-h-screen bg-[#0A0A0F] px-6 py-16 text-[#F4F4F6]">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-10">
          <p className="mb-3 text-sm font-medium text-[#A5ADFF]">
            New print order
          </p>

          <h1 className="text-4xl font-semibold tracking-tight">
            Print your documents
          </h1>

          <p className="mt-3 max-w-2xl text-[#9CA0AE]">
            Upload your file, choose your print settings, and create
            an order for your selected print shop.
          </p>
        </div>

        {/* Upload */}
        <UploadBox
          file={file}
          isDragging={isDragging}
          onFileSelect={handleFile}
          onRemoveFile={() => setFile(null)}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        />

        {/* Print Settings */}
        <div className="mt-8">
          <PrintSettings
            copies={copies}
            onCopiesChange={setCopies}
            colorMode={colorMode}
            onColorModeChange={setColorMode}
            paperSize={paperSize}
            onPaperSizeChange={setPaperSize}
            instructions={instructions}
            onInstructionsChange={setInstructions}
          />
        </div>

        {/* Order Summary */}
        <div className="mt-8 rounded-2xl border border-[#1F1F27] bg-[#16161D] p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold">
              Order Summary
            </h2>

            <p className="mt-1 text-sm text-[#9CA0AE]">
              Review your print order before creating it.
            </p>
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-[#9CA0AE]">File</span>

              <span className="max-w-[60%] truncate text-right">
                {file ? file.name : "No file selected"}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#9CA0AE]">Copies</span>

              <span>{copies}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#9CA0AE]">Color</span>

              <span>
                {colorMode === "bw"
                  ? "Black & White"
                  : "Color"}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#9CA0AE]">Paper</span>

              <span>{paperSize}</span>
            </div>

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
            onClick={handleCreateOrder}
            className="mt-8 w-full rounded-xl bg-[#6366F1] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#5558E8]"
          >
            Create Order
          </button>
        </div>
      </div>
    </main>
  );
}