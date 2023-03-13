import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import { AuthorType } from "interfaces";

type PostPreviewProps = {
  title: string;
  coverImage: any;
  date: string;
  author: AuthorType;
  slug: string;
};

const PostPreview = (props: PostPreviewProps) => {
  const { title, coverImage, date, author, slug } = props;

  return (
    <div>
      <div className='mb-5'>
        <CoverImage slug={slug} title={title} url={coverImage} />
      </div>
      <h3 className='text-3xl mb-3 leading-snug'>
        <Link
          href={`${process.env.FRONT_DOMAIN}/posts/${slug}`}
          className='hover:underline'
        >
          {title}
        </Link>
      </h3>
      <div className='text-lg mb-4'>
        <Date dateString={date} />
      </div>
      <Avatar name={author.name} picture={author.profile_image} />
    </div>
  );
};

export default PostPreview;
