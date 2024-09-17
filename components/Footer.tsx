import { ModeToggle } from "./modeToggle";
import { Instagram, Linkedin } from 'lucide-react';


export default function Footer() {
  return (
    <footer className="font-extralight flex  m-0 md:[m-12] pt-20 pl-5 pb-5 w-full hover:text[--muted-text]">
      <div className="flex flex-col">
        <a href="mailto:witespacestudios@gmail.com">
        email:&nbsp;<span className="underline hover:text[--muted-text]">witespacestudios@gmail.com</span>
        </a>
      <span>@ 2024 witespace studios</span>
      <div className="flex flex-row gap-4 mt-5"> 
        <div className="flex ">
        <ModeToggle />
        </div>
        <div className="flex flex-row gap-4 ">
        <a href="https://www.linkedin.com/company/witespace-studios" target="_blank">
        <Linkedin className="stroke-1 h-5 w-5 mt-2 hover:stroke-muted-foreground"/>
        </a>
        <a href="https://instagram.com/witespacestudios" target="_blank">
        <Instagram className="stroke-1 h-5 w-5 mt-2 hover:stroke-muted-foreground"/>
        </a>
        </div>
        </div>

      </div>


    </footer>
  );
}
