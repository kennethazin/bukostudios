import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "witespace studios - inquiry",
  description: "Website for witespice studios web design agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <body>
        <Navbar />
        <div className="mt-32 xl:mx-60 lg:mx-48 md:mx-28 sm:mx-16 mx-5 font-sans min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </>
  );
}
