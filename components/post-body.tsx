import markdownStyles from "./markdown-styles.module.css";

type PostBodyProps = {
  html: string;
};

const PostBody = (props: PostBodyProps) => {
  const { html } = props;

  return (
    <div
      className={`max-w-3xl mx-auto md:text-lg lg:text-2xl ${markdownStyles.markdown}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default PostBody;
