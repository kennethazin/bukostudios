import Image from "next/image";
import eastcityiphone from "@/public/assets/eastcity/iphone.webp";
import eastcityipad from "@/public/assets/eastcity/ipad.webp";
import eastcitydesktop from "@/public/assets/eastcity/desktop.webp";
import { Badge } from "@/components/ui/badge";

export default function Work() {
  return (
    <section className="min-h-screen justify-center items-center w-full">
      <div className="flex flex-col gap-3 mb-5">
        <h1 className="uppercase tracking-tighter font-bold">East City</h1>
        <div className="space-x-3">
          <Badge>Web design</Badge>
          <Badge>Development</Badge>
        </div>
        <div>
          <p>&apos;Asian Street Food, at the Heart of the City&apos;</p>
          <br />
          <p>
            We brought this brand message to life by crafting a modern and urban
            website design infused with elements of East Asian culture. The result is a
            vibrant, contemporary aesthetic that resonates with the hustle and
            flavors of the streets while staying rooted in tradition.


          </p>
        </div>
      </div>
      <div className="flex flex-col gap-y-5">
        <a href="https://eastcity.framer.website">
          <Image
            src={eastcityipad}
            width={2000}
            height={4000}
            alt="East City iPad Mockup"
            className=" hover:opacity-80"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-black text-lg">East City iPad Mockup</span>
          </div>
        </a>
        <a href="https://eastcity.framer.website">
          <Image
            src={eastcityiphone}
            width={5184}
            height={3456}
            alt="East City iPad Mockup"
            className="hover:opacity-80"
          />
        </a>
        <a href="https://eastcity.framer.website">
          <Image
            src={eastcitydesktop}
            width={5184}
            height={3456}
            alt="East City iPad Mockup"
            className="hover:opacity-80"
          />
        </a>
      </div>
    </section>
  );
}
