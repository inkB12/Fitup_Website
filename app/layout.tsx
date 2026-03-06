import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FITUP - Lột xác vóc dáng, nâng tầm cuộc sống",
  description:
    "Ứng dụng fitness thông minh với huấn luyện viên AI và PT cá nhân 24/7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="dark" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} flex min-h-screen flex-col font-sans antialiased`}
      >
        <Header />

        <main className="flex w-full flex-1 flex-col">{children}</main>

        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
