import type { Metadata } from "next";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Web Design in Dublin | Digital Design Agency | Witespace Studios",
  description:
    "We are a web design agency based in Dublin which bring brand experiences through branding & websites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <GoogleTagManager gtmId="G-W3JQJVQXRF" />
        <body className="bg-background">
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
