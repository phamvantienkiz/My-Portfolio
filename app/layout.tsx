import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import { StarsCanvas } from "./components/StarsBackground";

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pham Van Tien - AI Engineer & Co-founder of AIOS",
  description: "AI Engineer with hands-on experience in delivering production-ready Computer Vision, AIoT, and AI Agent products. Co-founder of AIOS.",
  keywords: [
    "Pham Van Tien",
    "AI Engineer",
    "AIOS",
    "Co-founder",
    "AI Fullstack",
    "Machine Learning Engineer",
    "Computer Vision",
    "AI Agents",
    "Deep Learning",
    "Portfolio",
  ],
  authors: [{ name: "Pham Van Tien" }],
  creator: "Pham Van Tien",
  publisher: "Pham Van Tien",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://phamvantien.dev",
    title: "Pham Van Tien - AI Engineer & Co-founder of AIOS",
    description: "AI Engineer with hands-on experience in delivering production-ready Computer Vision, AIoT, and AI Agent products. Co-founder of AIOS.",
    siteName: "Pham Van Tien Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pham Van Tien - AI Engineer & Co-founder of AIOS",
    description: "AI Engineer with hands-on experience in delivering production-ready Computer Vision, AIoT, and AI Agent products. Co-founder of AIOS.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://phamvantien.dev" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        <StarsCanvas />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
