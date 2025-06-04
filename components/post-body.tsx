import { Box, Typography } from "@mui/material";

type Props = {
  content: string;
};

export default function PostBody({ content }: Props) {
  return (
    <Box
      sx={{
        maxWidth: "48rem",
        mx: "auto",
        fontSize: { md: "1.125rem", lg: "1.5rem" },
        px: { xs: 2, sm: 0 },
        py: { xs: 2, sm: 0 },
        borderRadius: 1,
        bgcolor: "background.paper",
      }}
    >
      <Typography
        component="div"
        dangerouslySetInnerHTML={{ __html: content }}
        sx={{
          "& img": {
            maxWidth: "100%",
            height: "auto",
          },
          "& a": {
            color: "primary.main",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          },
        }}
      />
    </Box>
  );
}
