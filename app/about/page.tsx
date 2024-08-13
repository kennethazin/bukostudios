import React from "react";
import Navbar from "@/components/Navbar";
import { Box } from "lucide-react";
export default function About() {
  return (
    <>
      <div className="space-y-32 min-h-screen">
        <h1 className="  text-6xl font-light text-right">About us</h1>

        <h2 className=" text-3xl font-extralight ">
          We specialise in impactful, creative solutions that bring your brand’s
          message to the digital world in 1+ pages.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left text-xl font-extralight">
          <div className="col-span-1 flex justify-start">
            <p className="text-3xl">
              Kenneth John Ras
              <br />
              Founder,
              <br />
              Designer,
              <br />
              Developer
            </p>
          </div>
          <div className="col-span-1 hidden md:block justify-center">
            Kenneth is a self-taught designer with a mixed background of
            computer science and digital marketing.
          </div>
          <div className="col-span-1 hidden md:flex justify-end">
            Kenneth's boba tea order: <br />
            Taro Milk Tea
            <br />
            70% sugar
            <br />
            Less ice
          </div>
        </div>
      </div>
    </>
  );
}
