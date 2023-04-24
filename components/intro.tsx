import { Box } from "@mui/material";

type SectionIntroTextProps = {
  SectionIntroText: string;
  html: string;
};

const Intro = (props: SectionIntroTextProps) => {
  const { SectionIntroText, html } = props;
  const markup = { __html: html };

  return (
    <Box sx={{ position: "relative", bottom: { xs: 400, sm: 600 } }}>
      <section className='flex-col flex items-center md:justify-between mt-16 mb-16 md:mb-12'>
        <h1 className=' text-center text-3xl sm:text-5xl md:text-8xl font-extrabold tracking-tighter leading-tight md:pr-8 text-white my-8'>
          {SectionIntroText}
        </h1>

        <div
          className='px-8 py-4 text-center text-2xl sm:text-4xl font-normal md:text-3xl tracking-tighter leading-tight md:pr-8 text-white '
          dangerouslySetInnerHTML={markup}
        ></div>
      </section>
    </Box>
  );
};

export default Intro;
