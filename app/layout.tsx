import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";

const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kinh Thánh Vượt Trên Nhân Đạo Xã Hội",
  description:
    "Báo cáo nghiên cứu thần học Công giáo về sự siêu việt của Kinh Thánh và sự nguy hiểm của trào lưu giản lược hóa thông điệp nhân đạo xã hội.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="bg-paper text-midnight">
        <div className="min-h-screen flex flex-col">
          <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="mx-auto max-w-6xl">{children}</div>
          </main>
          <footer className="border-t border-gold/40 bg-paperAlt/80">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 text-center text-xs sm:text-sm text-midnight/70 tracking-wide">
              2026 · Kinh Thánh Vượt Trên Nhân Đạo Xã Hội
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
