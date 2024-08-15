import React from "react";
import Ellipse from "@/components/Ellipse";

export default function About() {
  return (
    <>
      <section className="space-y-32 min-h-screen">
        <h1 className="text-right">About us</h1>
        <h2>
          We specialise in impactful, creative solutions that bring your brand’s
          message to the digital world in 1+ pages.
        </h2>
        <div className="flex flex-col space-y-4 text-md md:text-lg lg:text-xl  font-extralight gap-20">
          <div className="flex">
            <div className="flex-1  md:text-xl lg:text-2xl font-light text-left">
              <div>Kenneth Ras</div>
              <div>Founder,</div>
              <div>Designer,</div>
              <div>Developer</div>
            </div>
            <div className="flex-1 space-y-1 ">
              <div>
                Kenneth is a self-taught designer with a mixed background of
                computer science and digital marketing
              </div>
            </div>
            <div className="flex-1 space-y-1 text-right">
              <div>Kenneth&apos;s boba tea order:</div>
              <div>Taro milk tea</div>
              <div>80% sugar</div>
              <div>50% ice</div>
            </div>
          </div>
          <div className="flex">
            <div className="flex-1  md:text-xl lg:text-2xl font-light text-left">
              <div>Stella Malone</div>
              <div>Creative Director,</div>
              <div>Brand Designer</div>
            </div>
            <div className="flex-1 space-y-1">
              <div>
                Stella is an interactive digital media graduate, and has a
                creative flare with an eye for detail
              </div>
            </div>
            <div className="flex-1 space-y-1 text-right">
              <div>Stella&apos;s boba tea order:</div>
              <div>Lychee iced tea</div>
              <div>50% sugar</div>
              <div>100% ice</div>
            </div>
          </div>
        </div>
      </section>
      <section className="space-y-32 min-h-full ">
        <h1 className=" font-light text-right mt-20">Connect with us</h1>
        <div className="flex md:justify-between flex-wrap justify-center gap-7">
          <Ellipse
            href="https://www.instagram.com/witespacestudios"
            text={"[instagram]"}
          />
          <Ellipse
            href="https://www.instagram.com/witespacestudios"
            text={"[linkedin]"}
          />
        </div>
      </section>
    </>
  );
}
