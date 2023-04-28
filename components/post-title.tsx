import { ReactNode } from "react";

type PostTitleProps = {
  children: ReactNode;
};

const PostTitle = (props: PostTitleProps) => {
  const { children } = props;
  return (
    <h1 className='text-3xl sm:text-4xl md:text-5xl tracking-tighter font-bold leading-tight md:leading-none mb-12 text-center'>
      {children}
    </h1>
  );
};
export default PostTitle;
