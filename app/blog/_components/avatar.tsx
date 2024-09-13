import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { LinkedinIcon } from "lucide-react";

type Props = {
  name: string;
  picture: string;
  role: string;
  link: string;
};

const Avatar = ({ name, picture, role, link }: Props) => {
  return (
    <div className="flex items-center mt-10">
      <Link href={link} passHref>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Image
                src={picture}
                className="rounded-full mr-4 object-fill cursor-pointer"
                alt={name}
                width={48}
                height={48}
              />
            </TooltipTrigger>
            <TooltipContent>
              <span>
                <LinkedinIcon />
              </span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>

      <div className="flex flex-col">
        <div className="font-base text-md">{name}</div>
        <div className="font-light text-[--muted-text]">{role}</div>
      </div>
    </div>
  );
};

export default Avatar;
