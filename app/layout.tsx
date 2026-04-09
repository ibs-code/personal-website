import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ibrahim Urooj Saeed",
  description: "Product lead in fintech infrastructure. Photographer. New Yorker.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Ibrahim Urooj Saeed",
    description: "Product lead in fintech infrastructure. Photographer. New Yorker.",
    url: "https://ibrahimusaeed.com",
    siteName: "Ibrahim Urooj Saeed",
    images: [
      {
        url: "https://ibrahimusaeed.com/og-image.jpg",
        width: 800,
        height: 800,
        alt: "Ibrahim Urooj Saeed",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ibrahim Urooj Saeed",
    description: "Product lead in fintech infrastructure. Photographer. New Yorker.",
    images: ["https://ibrahimusaeed.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-stone-950 text-stone-100`}
      >
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="md:ml-60 flex-1 px-6 md:px-10 pt-20 md:pt-12 pb-12">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
