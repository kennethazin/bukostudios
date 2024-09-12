import type { Metadata } from "next";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Web Design | Digital Design Agency | Witespace Studios",
  description:
    "We build creative brand experiences through branding & websites",
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
