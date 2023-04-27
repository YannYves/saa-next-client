import { Box } from "@mui/material";

type SectionIntroTextProps = {
  SectionIntroText: string;
  html: string;
};

const Intro = (props: SectionIntroTextProps) => {
  const { SectionIntroText, html } = props;
  const markup = { __html: html };

  return (
    <Box
      sx={{
        position: "relative",
        bottom: { xs: 350, sm: 450, lg: 500, xl: 550 },
      }}
    >
      <section className='flex-col flex items-center md:justify-between mt-16 mb-16 md:mb-12'>
        <h1 className=' text-center text-3xl md:text-7xl font-extrabold tracking-tight leading-tight md:pr-8 text-white my-8 max-w-6xl'>
          {SectionIntroText}
        </h1>

        <div
          className='px-8 py-4 text-center text-xl sm:text-4xl font-medium md:text-3xl tracking-tighter leading-tight md:pr-8 text-white max-w-3xl'
          dangerouslySetInnerHTML={markup}
        ></div>
      </section>
    </Box>
  );
};

export default Intro;
