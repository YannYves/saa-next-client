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
        <h1 className='absolute top-1/4 md:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-relaxed xl:leading-tight font-bold w-4/5 tracking-tighter sm:tracking-tight '>
          {SectionIntroText}
        </h1>

        <h3
          className='absolute w-4/5 left-1/2 top-1/2 mb-12 transform -translate-x-1/2 -translate-y-1/3 px-8 py-4 text-center font-medium tracking-tighter leading-tight md:pr-8 text-white max-w-4xl hidden md:block md:text-xl lg:text-2xl'
          dangerouslySetInnerHTML={markup}
        ></h3>
      </section>
    </Box>
  );
};

export default Intro;
