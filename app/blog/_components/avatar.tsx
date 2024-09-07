import Image from "next/image";

type Props = {
  name: string;
  picture: string;
  role: string;
};

const Avatar = ({ name, picture, role }: Props) => {
  return (
    <div className="flex items-center mt-10">
      <Image
        src={picture}
        className="rounded-full mr-4 object-cover"
        alt={name}
        width={48}
        height={48}
      />
      <div className="flex flex-col">
        <div className="font- font-base text-md">{name}</div>
        <div className="font- font-light text-neutral-400">{role}</div>
      </div>
    </div>
  );
};

export default Avatar;
