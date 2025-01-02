import type { Metadata } from "next";
import { Noto_Sans_KR, Roboto_Mono } from "next/font/google";
import "./globals.css";
import "@/css/common.css";
import Header from "./header";

const notoSansKr = Noto_Sans_KR({ subsets: ["latin"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Basic Items Warehouse",
  description: "shopping for man",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className} ${notoSansKr.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
