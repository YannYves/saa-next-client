import { Box, Container, Typography } from "@mui/material";
import { Section } from "@/lib/sections";

type IntroProps = {
  section: Section;
};

const Intro = ({ section }: IntroProps) => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          position: "relative",
          top: -100,
          backgroundColor: "white",
          borderRadius: 2,
          p: 4,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          {section.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {section.description}
        </Typography>
      </Box>
    </Container>
  );
};

export default Intro;
