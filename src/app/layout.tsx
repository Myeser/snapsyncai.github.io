import type { Metadata } from "next";
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
  title: "SnapSync — AI-Powered Video Editing Made Simple",
  description: "Automatically detect clapperboards, rename footage, and sync audio with SnapSync. Streamline your post-production workflow and focus on storytelling.",
  keywords: [
    "SnapSync",
    "video editing",
    "AI editing",
    "clapperboard detection",
    "audio sync",
    "post-production",
    "film editing",
    "media organization",
    "NLE integration",
  ],
  authors: [{ name: "SnapSync Ltd" }],
  openGraph: {
    title: "SnapSync — AI-Powered Video Editing Made Simple",
    description: "Automatically detect clapperboards, rename footage, and sync audio with SnapSync. Streamline your post-production workflow.",
    url: "https://snapsync.ai", // replace with your live domain
    siteName: "SnapSync",
    images: [
      {
        url: "https://snapsync.ai/og-image.png", // replace with a proper OG image
        width: 1200,
        height: 630,
        alt: "SnapSync — AI-Powered Video Editing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SnapSync — AI-Powered Video Editing Made Simple",
    description: "Automatically detect clapperboards, rename footage, and sync audio with SnapSync.",
    images: ["https://snapsync.ai/og-image.png"], // replace with your OG image
    site: "@SnapSync", // your Twitter handle
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
