import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm w-full hover:overflow-hidden hover:opacity-65", {
        " transition-shadow duration-200 hover:overflow-hidden hover:opacity-65": slug,
      })}
      width={1300}
      height={630}
    />
  );
  return (
    <div className="sm:mx-0 hover:overflow-hidden hover:opacity-65">
      {slug ? (
        <Link href={`/blog/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
