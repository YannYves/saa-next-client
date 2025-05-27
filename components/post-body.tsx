import { Typography } from "@mui/material";

type PostBodyProps = {
  content: string;
};

const PostBody = (props: PostBodyProps) => {
  const { content } = props;

  return (
    <div className="max-w-3xl mx-auto md:text-lg lg:text-2xl px-4 py-4 sm:px-0 sm:py-0 rounded-lg bg-white">
      <Typography
        variant="body1"
        component="div"
        sx={{ whiteSpace: "pre-wrap" }}
      >
        {content}
      </Typography>
    </div>
  );
};

export default PostBody;
