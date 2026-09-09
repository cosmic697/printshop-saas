"use client";

function formatFileSize(bytes: number) {
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

type UploadBoxProps = {
  file: File | null;
  isDragging: boolean;
  onFileSelect: (file: File) => void;
  onRemoveFile: () => void;
  onDragStart: () => void;
  onDragEnd: () => void;
};

export default function UploadBox({
  file,
  isDragging,
  onFileSelect,
  onRemoveFile,
  onDragStart,
  onDragEnd,
}: UploadBoxProps) {
  return (
    <div
      className={`mt-10 rounded-2xl border border-dashed bg-[#16161D] px-6 py-14 text-center transition-colors ${
        isDragging
          ? "border-[#6366F1] bg-[#1C1B2E]"
          : "border-[#2A2A35] hover:border-[#3A38C8]"
      }`}
      onDragOver={(event) => {
        event.preventDefault();
        onDragStart();
      }}
      onDragLeave={onDragEnd}
      onDrop={(event) => {
        event.preventDefault();
        onDragEnd();

        const droppedFile = event.dataTransfer.files[0];

        if (!droppedFile) {
          return;
        }

        onFileSelect(droppedFile);
      }}
    >
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#1C1B2E]">
        <span className="text-xl text-[#A5ADFF]">↑</span>
      </div>

      <p className="mt-5 text-lg font-medium text-[#F4F4F6]">
        Upload your document
      </p>

      <p className="mt-2 text-sm text-[#9CA0AE]">
        Drag and drop your file here, or choose a file
      </p>

      <p className="mt-1 text-xs text-[#6B6F7E]">
        PDF, PNG, JPG · Maximum 20 MB
      </p>

      <label className="mt-6 inline-block cursor-pointer rounded-lg bg-[#6366F1] px-5 py-2.5 text-sm font-medium text-[#0A0A0F] transition-opacity hover:opacity-90">
        Choose file

        <input
          type="file"
          accept=".pdf,.png,.jpg,.jpeg"
          className="hidden"
          onChange={(event) => {
            const selectedFile = event.target.files?.[0];

            if (!selectedFile) {
              return;
            }

            onFileSelect(selectedFile);
          }}
        />
      </label>

      {file && (
        <div className="mx-auto mt-6 flex max-w-md items-center justify-between rounded-lg border border-[#1F1F27] bg-[#0A0A0F] px-4 py-3">
          <div className="min-w-0 text-left">
            <p className="truncate text-sm font-medium text-[#F4F4F6]">
              {file.name}
            </p>

            <p className="mt-1 text-xs text-[#6B6F7E]">
              {file.type === "application/pdf" ? "PDF" : "Image"} ·{" "}
              {formatFileSize(file.size)}
            </p>
          </div>

          <button
            type="button"
            onClick={onRemoveFile}
            className="ml-4 shrink-0 text-xs text-[#9CA0AE] hover:text-[#F4F4F6]"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
}