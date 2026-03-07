import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pure Grid",
  description: "Pure Grid Website",
  icons: {
    icon: "/image/logo.png",
    shortcut: "/image/logo.png",
    apple: "/image/logo.png",
  },
  themeColor: '#0a2b1c'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap" rel="stylesheet"></link>
      </head>
      <body
        cz-shortcut-listen="true"
        data-new-gr-c-s-check-loaded="14.1275.0"
        data-gr-ext-installed=""
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html >
  );
}
