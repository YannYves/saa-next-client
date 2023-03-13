import markdownStyles from "./markdown-styles.module.css";

type PostBodyProps = {
  html: string;
};

const PostBody = (props: PostBodyProps) => {
  const { html } = props;

  return (
    <div className='max-w-2xl mx-auto'>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default PostBody;
