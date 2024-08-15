export default function Home() {
  return (
    <main className=" flex flex-col justify-between items-center min-h-screen ">
      <div className="flex justify-between gap-20 flex-wrap md:flex-nowrap">
        <header className="text-8xl tracking-[-0.11em] ">
          witespace studios
        </header>
        <svg
          width="150"
          height="150"
          viewBox="0 0 216 238"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M169.582 235.029C165.05 238.968 158.199 237.509 154.737 232.603C152.148 228.934 149.35 225.361 146.341 221.9C116.395 187.451 72.6079 172.103 30.2711 176.879C15.5777 178.536 0.830296 168.13 0.830301 153.343L0.830299 37.9245C0.830299 31.217 3.91368 24.7973 9.55906 21.175C64.5858 -14.1321 138.628 -4.6741 182.791 46.13C231.306 101.941 225.393 186.514 169.582 235.029Z"
            fill="#EBEBEB"
          />
        </svg>
      </div>
      <div className="flex gap-10 text-3xl font-extralight flex-wrap justify-around m-auto">
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
