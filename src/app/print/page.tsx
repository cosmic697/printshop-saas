"use client";

import { useState } from "react";
import UploadBox from "@/components/print/UploadBox";
import PrintSettings from "@/components/print/PrintSettings";
import OrderSummary from "@/components/print/OrderSummary";
import { PrintOrder } from "@/types/order";

export default function PrintPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [copies, setCopies] = useState(1);
  const [colorMode, setColorMode] = useState<"bw" | "color">("bw");
  const [paperSize, setPaperSize] = useState<"A4" | "A3">("A4");
  const [instructions, setInstructions] = useState("");

  const handleFile = (selectedFile: File) => {
    const allowedTypes = ["application/pdf", "image/png", "image/jpeg"];

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

    const order : PrintOrder= {
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
            Upload your file, choose your print settings, and create an order
            for your selected print shop.
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
        {/*Order summary */}
        <OrderSummary
          file={file}
          copies={copies}
          colorMode={colorMode}
          paperSize={paperSize}
          instructions={instructions}
          onCreateOrder={handleCreateOrder}
        />
      </div>
    </main>
  );
}
