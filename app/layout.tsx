import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "witespace studios - home",
  description: "Website for witespice studios web design agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" className="dark">
        <body className="font-sans">{children}</body>
      </html>
    </>
  );
}
