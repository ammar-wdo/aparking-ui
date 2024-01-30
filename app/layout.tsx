import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import ModalProvider from "@/components/providers/modal-provider";
import CrispProvider from "@/components/providers/crisp-provier";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });
// const figtree = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Compare Airport Parking Services - Book Secure Parking | Aparking",
  description:
    "Compare and book the best airport parking services at Aparking. Find secure and affordable parking options at various airports. Save time and money by reserving your parking spot in advance.",
  openGraph: {
    title: "Compare Airport Parking Services - Book Secure Parking | Aparking",
    description:
      "Compare and book the best airport parking services at Aparking. Find secure and affordable parking options at various airports. Save time and money by reserving your parking spot in advance.",
    images: ["/opengraph-site.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <CrispProvider />

      <body className={inter.className}>
        {children}
        <ModalProvider />
        <Toaster richColors position="top-right" />
      </body>
      <GoogleTagManager gtmId="GTM-XYZ" />
    </html>
  );
}
