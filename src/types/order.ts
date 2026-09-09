export type ColorMode = "bw" | "color";

export type PaperSize = "A4" | "A3";

export type OrderStatus = "PENDING" | "PRINTING" | "COMPLETED" | "CANCELLED";

export type PrintOrder = {
  id: string;
  fileName: string;
  fileType: string;
  fileSize: number;
  copies: number;
  colorMode: ColorMode;
  paperSize: PaperSize;
  instructions: string;
  status: OrderStatus;
};