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
  server: string;
};

const PostPreview = (props: PostPreviewProps) => {
  const { title, coverImage, date, author, slug, server } = props;

  return (
    <div>
      <div className='mb-5'>
        <CoverImage slug={slug} title={title} url={coverImage} />
      </div>
      <h3 className='text-3xl mb-3 leading-snug'>
        <Link href={`/posts/${slug}`} className='hover:underline'>
          {title}
        </Link>
      </h3>
      <div className='text-lg mb-4'>
        <Date dateString={date} />
      </div>
      <Avatar
        name={author.data.attributes.name}
        picture={author.data.attributes.avatar.data.attributes.url}
        server={server}
      />
    </div>
  );
};

export default PostPreview;
