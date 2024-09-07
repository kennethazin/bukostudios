import type { Metadata } from "next";
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
      <html lang="en" className="dark ">
        <body>{children}</body>
      </html>
    </>
  );
}
