import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Witespace Studios — Work",
  description: "Look at our latest projects and see the quality and creativity we bring to every project we undertake. Our portfolio showcases a diverse range of work that highlights our expertise and commitment to excellence.",
  keywords: ["Witespace Studios", "Projects", "Portfolio", "Creative Work", "Quality"],
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
