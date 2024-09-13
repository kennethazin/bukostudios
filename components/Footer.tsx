import { ModeToggle } from "./modeToggle";

export default function Footer() {
  return (
    <footer className="font-extralight flex justify-between m-0 md:[m-12] pt-20 pl-5 pb-5">
      <div className="flex flex-col">
        <a href="mailto:witespacestudios@gmail.com">
        email:&nbsp;witespacestudios@gmail.com
        </a>
      <span>@ 2024 witespace studios</span>
      </div>
      <div className="mr-5">
        <ModeToggle />
        </div>
    </footer>
  );
}
