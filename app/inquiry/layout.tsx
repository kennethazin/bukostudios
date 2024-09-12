import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Witespace Studios — Inquiry",
  description:
    "Looking to start a project? We boost your digital presence through strategy-led design and development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="mt-32 xl:mx-60 lg:mx-48 md:mx-28 sm:mx-16 mx-5 min-h-screen">
        {children}
      </div>
      <Footer />
    </>
  );
}
