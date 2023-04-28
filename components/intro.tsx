import { Box } from "@mui/material";

type SectionIntroTextProps = {
  SectionIntroText: string;
  html: string;
};

const Intro = (props: SectionIntroTextProps) => {
  const { SectionIntroText, html } = props;
  const markup = { __html: html };

  return (
    <Box>
      <section className='flex-col flex items-center md:justify-between mt-16 mb-16 md:mb-12'>
        <h1 className='absolute top-1/4 sm:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-relaxed sm:leading-relaxed xl:leading-normal font-bold w-4/5 tracking-tighter sm:tracking-tight '>
          {SectionIntroText}
        </h1>

        <h3
          className='px-8 py-4 text-center text-xl sm:text-4xl font-medium md:text-3xl tracking-tighter leading-tight md:pr-8 text-white max-w-3xl'
          dangerouslySetInnerHTML={markup}
        ></h3>
      </section>
    </Box>
  );
};

export default Intro;
