import { Typography } from "@mui/material";

type Props = {
  title: string;
};

export default function PostTitle({ title }: Props) {
  return (
    <Typography
      variant="h1"
      sx={{
        fontSize: { xs: "1.5rem", sm: "1.875rem", md: "3rem" },
        letterSpacing: "-0.025em",
        fontWeight: "bold",
        lineHeight: { xs: 1.25, md: 1 },
        mb: { xs: 3, md: 6 },
        textAlign: { xs: "left", md: "center" },
        ml: { xs: 2, md: 0 },
      }}
    >
      {title}
    </Typography>
  );
}
