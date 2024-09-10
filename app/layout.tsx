import type { Metadata } from "next";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "witespace studios - home",
  description: "Home page for Witespace Studios design agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" className="dark">
        <GoogleTagManager gtmId="G-W3JQJVQXRF" />
        <body>{children}</body>
      </html>
    </>
  );
}
