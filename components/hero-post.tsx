import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import { AuthorType } from "interfaces";

type HeroPostProps = {
  title: string;
  coverImage: string;
  createdAt: string;
  author: AuthorType;
  slug: string;
};

const HeroPost = (props: HeroPostProps) => {
  const { title, coverImage, createdAt, author, slug } = props;

  return (
    <section>
      <div className='mb-8 md:mb-16'>
        <CoverImage title={title} url={coverImage} slug={slug} isLink={true} />
      </div>
      <div className='md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28'>
        <div>
          <h3 className='mb-4 text-3xl lg:text-4xl leading-tight'>
            <Link href={`/posts/${slug}`} className='hover:underline'>
              {title}
            </Link>
          </h3>
          <div className='mb-4 md:mb-0 text-lg'>
            <Date dateString={createdAt} />
          </div>
        </div>
        <div>
          <Avatar name={author.name} picture={author.profile_image} />
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
