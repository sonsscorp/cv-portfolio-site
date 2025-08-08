import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Son Thanh Le - Testing Technician & International Trade Professional",
  description: "Experienced professional with 30+ years in international trade and manufacturing operations. Currently specializing in electronic circuit board testing with extensive background in import/export operations.",
  keywords: "testing technician, international trade, manufacturing, quality control, import export operations, electronic testing, supply chain management",
  authors: [{ name: "Son Thanh Le" }],
  creator: "Son Thanh Le",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sonthanhle.com",
    siteName: "Son Thanh Le - Professional Portfolio",
    title: "Son Thanh Le - Testing Technician & International Trade Professional",
    description: "Experienced professional with 30+ years in international trade and manufacturing operations. Currently specializing in electronic circuit board testing with extensive background in import/export operations.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Son Thanh Le - Testing Technician & International Trade Professional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Son Thanh Le - Testing Technician & International Trade Professional",
    description: "Experienced professional with 30+ years in international trade and manufacturing operations. Currently specializing in electronic circuit board testing with extensive background in import/export operations.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
