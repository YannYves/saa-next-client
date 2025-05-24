import markdownStyles from "./markdown-styles.module.css";

type PostBodyProps = {
  html: string;
};

const PostBody = (props: PostBodyProps) => {
  const { html } = props;

  return (
    <div
      className={`max-w-3xl mx-auto md:text-lg lg:text-2xl ${markdownStyles.markdown} px-3 py-4 sm:px-0 sm:py-0 rounded-lg bg-white`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default PostBody;
