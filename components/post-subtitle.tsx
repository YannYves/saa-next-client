import { ReactNode } from "react";

type PostTitleProps = {
  children: ReactNode;
};

const PostSubTitle = (props: PostTitleProps) => {
  const { children } = props;
  return (
    <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left'>
      {children}
    </h2>
  );
};
export default PostSubTitle;
