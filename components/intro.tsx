import { Box, Typography } from "@mui/material";
import { Section } from "@/lib/sections";

type IntroProps = {
  section: Section;
};

const Intro = ({ section }: IntroProps) => {
  return (
    <Box>
      <Typography
        variant="h3"
        component="h1"
        fontWeight={700}
        sx={{ mb: 1, letterSpacing: "-0.02em", lineHeight: 1.1 }}
      >
        {section.name}
      </Typography>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        sx={{ fontSize: { xs: "1rem", md: "1.15rem" }, fontWeight: 400 }}
      >
        {section.description}
      </Typography>
    </Box>
  );
};

export default Intro;
