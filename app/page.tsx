"use client";
import { useEffect } from "react";
import gsap from "gsap";
import "./styles.css";

export default function Home() {
  useEffect(() => {
    gsap.to("#spinning-svg", {
      rotation: 360,
      repeat: -1,
      duration: 5,
      ease: "linear",
    });
  }, []);

  return (
    <main className=" flex flex-col justify-between items-center min-h-screen p-10 md:pb-20">
      <div className="flex justify-between gap-20 flex-wrap md:flex-nowrap">
        <header className="text-8xl tracking-[-0.11em] mt-5 ">
          witespace studios
        </header>
        <svg
          id="spinning-svg"
          width="150"
          height="150"
          viewBox="0 0 510 510"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M255 0L262.669 164.478C264.76 209.341 300.659 245.24 345.522 247.331L510 255L345.522 262.669C300.659 264.76 264.761 300.659 262.669 345.522L255 510L247.331 345.522C245.24 300.659 209.341 264.761 164.478 262.669L0 255L164.478 247.331C209.341 245.24 245.24 209.341 247.331 164.478L255 0Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="flex gap-10 text-3xl font-extralight flex-wrap justify-around m-auto ">
        <a href="/info">[info]</a>
        <a href="/work">[work]</a>
        <a href="/inquiry">[inquiry]</a>
        <a href="/about">[about]</a>
      </div>
      <footer className="font-extralight mt-auto ">
        @ 2024 witespace studios
      </footer>
    </main>
  );
}
