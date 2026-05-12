import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { AnalyticsProvider } from "./components/Analytics";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  themeColor: "#0a1628",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
  title: "Agni Health | Metabolic Health for South Asians",
  description: "Physician-led metabolic health care designed for South Asian biology. Evidence-based protocols. Personalized to you.",
  metadataBase: new URL("https://agnihealth.co"),
  openGraph: {
    title: "Agni Health | Metabolic Health for South Asians",
    description: "Physician-led metabolic health care designed for South Asian biology. Evidence-based protocols. Personalized to you.",
    url: "https://agnihealth.co",
    siteName: "Agni Health",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agni Health – Metabolic Health for South Asians",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agni Health | Metabolic Health for South Asians",
    description: "Physician-led metabolic health care designed for South Asian biology. Evidence-based protocols. Personalized to you.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${plusJakarta.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AnalyticsProvider>
          {children}
        </AnalyticsProvider>
        <Analytics />
      </body>
    </html>
  );
}
