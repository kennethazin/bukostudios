type Props = {
  name: string;
  picture: string;
  role: string;
};

const Avatar = ({ name, picture, role }: Props) => {
  return (
    <div className="flex items-center">
      <img
        src={picture}
        className="w-14 h-14 rounded-full mr-4 object-cover"
        alt={name}
      />
      <div className="flex flex-col">
        <div className="font- font-light text-md">{name}</div>
        <div className="font- font-light text-neutral-400">{role}</div>
      </div>
    </div>
  );
};

export default Avatar;
