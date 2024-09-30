import Image from "next/image";

export default function Work() {
  return (
    <section className="min-h-screen justify-center items-center w-full">
      <div className="flex flex-col gap-3 mb-5">
        <h1 className="uppercase tracking-tighter font-bold">East City</h1>
        <div className="border border-black w-fit border- py-1 px-3 rounded-3xl font-light text-base">
          Web design & development
        </div>
      </div>
      <div className="flex flex-col gap-y-5">
        <a href="https://eastcity.framer.website">
          <Image
            src="/assets/eastcity/ipad.webp"
            width={2000}
            height={4000}
            alt="East City iPad Mockup"
            className=" hover:opacity-80"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-lg">East City iPad Mockup</span>
          </div>
        </a>
        <a href="https://eastcity.framer.website">
          <Image
            src="/assets/eastcity/iphone.webp"
            width={5184}
            height={3456}
            alt="East City iPad Mockup"
            className="hover:opacity-80"
          />
        </a>
        <a href="https://eastcity.framer.website">
          <Image
            src="/assets/eastcity/desktop.webp"
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
