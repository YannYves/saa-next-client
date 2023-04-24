import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

type CoverImageProps = {
  title: string;
  url: string;
  slug?: string;
  isLink: boolean;
};
const CoverImage = (props: CoverImageProps) => {
  const { title, url, slug, isLink } = props;

  if (slug !== null && url !== null) {
    const image = (
      <Image
        src={url}
        alt={title}
        width={500}
        height={500}
        className={cn("lazyload shadow-small w-full", {
          "hover:shadow-medium transition-shadow duration-200": slug,
        })}
      />
    );
    return (
      <div className='sm:mx-0'>
        {isLink ? (
          <Link href={`/posts/${slug}`} aria-label={title}>
            {image}
          </Link>
        ) : (
          <>{image}</>
        )}
      </div>
    );
  }
};
export default CoverImage;
