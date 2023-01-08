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
  server: string;
};

const HeroPost = (props: HeroPostProps) => {
  const { title, coverImage, createdAt, author, slug, server } = props;
  console.log(server, "ici");

  return (
    <section>
      <div className='mb-8 md:mb-16'>
        <CoverImage title={title} url={coverImage} slug={slug} />
      </div>
      <div className='md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28'>
        <div>
          <h3 className='mb-4 text-4xl lg:text-6xl leading-tight'>
            <Link href={`/posts/${slug}`} className='hover:underline'>
              {title}
            </Link>
          </h3>
          <div className='mb-4 md:mb-0 text-lg'>
            <Date dateString={createdAt} />
          </div>
        </div>
        <div>
          <Avatar
            name={author.data.attributes.name}
            picture={author.data.attributes.avatar.data.attributes.url}
            server={server}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
