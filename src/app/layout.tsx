import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import localFont from 'next/font/local'

const redditSans = localFont({
  src: [
    { path: '../../public/fonts/RedditSans-ExtraLight.ttf', weight: '200' },      // ExtraLight
    { path: '../../public/fonts/RedditSans-Light.ttf', weight: '300' },          // Light  
    { path: '../../public/fonts/RedditSans-Regular.ttf', weight: '400' },        // Regular
    { path: '../../public/fonts/RedditSans-Medium.ttf', weight: '500' },         // Medium
    { path: '../../public/fonts/RedditSans-SemiBold.ttf', weight: '600' },       // SemiBold
    { path: '../../public/fonts/RedditSans-Bold.ttf', weight: '700' },           // Bold
    { path: '../../public/fonts/RedditSans-ExtraBold.ttf', weight: '800' },      // ExtraBold
    { path: '../../public/fonts/RedditSans-Black.ttf', weight: '900' },          // Black
  ],
  variable: '--font-reddit-sans',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel David",
  description: "My personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${redditSans.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-reddit-sans antialiased">
        {children}
      </body>
    </html>
  );
}

