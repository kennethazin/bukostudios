import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Witespace Studios — About Us",
  description: "Learn more about us. We are a web design studio based in Dublin, specializing in creating beautiful and functional websites for businesses of all sizes. Our team of experienced designers and developers is dedicated to delivering high-quality web solutions that meet your needs and exceed your expectations.",
  keywords: ["web design", "Dublin", "web development", "business websites", "Witespace Studios"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="mt-32 xl:mx-60 lg:mx-48 md:mx-28 sm:mx-16 mx-5 transition-all duration-200">
        {children}
      </div>
      <Footer />
    </>
  );
}
