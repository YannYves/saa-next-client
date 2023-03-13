import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

type CoverImageProps = {
  title;
  url;
  slug;
};
const CoverImage = (props: CoverImageProps) => {
  const { title, url, slug } = props;

  if (slug !== null && url !== null) {
    const image = (
      <Image
        src={url}
        alt='Picture of the author'
        width={500}
        height={500}
        className={cn("lazyload shadow-small w-full", {
          "hover:shadow-medium transition-shadow duration-200": slug,
        })}
      />
    );
    return (
      <div className='sm:mx-0'>
        <Link
          href={`${process.env.FRONT_DOMAIN}/posts/${slug}`}
          aria-label={title}
        >
          {image}
        </Link>
      </div>
    );
  }
};
export default CoverImage;
