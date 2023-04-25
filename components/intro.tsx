import { Box, Typography } from "@mui/material";

type SectionIntroTextProps = {
  SectionIntroText: string;
  html: string;
};

const Intro = (props: SectionIntroTextProps) => {
  const { SectionIntroText, html } = props;
  const markup = { __html: html };

  return (
    <Box sx={{ position: "relative", bottom: { xs: 400, sm: 600 } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: { md: "spaceBetween" },
          mt: 16,
          mb: { xs: 16, md: 12 },
        }}
      >
        <Typography
          variant='h1'
          component='h1'
          align='center'
          sx={{
            fontSize: { xs: "1.875rem", sm: "3rem", md: "6rem" },
            fontWeight: 800,
            paddingRight: { md: 8 },
            color: "white",
            my: 8,
          }}
        >
          {SectionIntroText}
        </Typography>
      </Box>
      <div dangerouslySetInnerHTML={markup}></div>
    </Box>
  );
};

export default Intro;
