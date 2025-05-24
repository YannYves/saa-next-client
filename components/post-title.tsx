import { ReactNode } from "react";

type PostTitleProps = {
  children: ReactNode;
};

const PostTitle = (props: PostTitleProps) => {
  const { children } = props;
  return (
    <h1 className="text-2xl sm:text-3xl md:text-5xl tracking-tighter font-bold leading-tight md:leading-none mb-6 md:mb-12 text-left md:text-center ml-4 md:ml-0">
      {children}
    </h1>
  );
};
export default PostTitle;
