import Link from "next/link";
import Container from "./container";
import ScrollToTopButton from "./scroll-to-top-button";

const Footer = () => {
  return (
    <footer className='bg-accent-1 border-t border-accent-2 sm:mt-10 lg:mt-24 mb-16 md:mb-12'>
      <Container>
        <div className='py-28 flex flex-col lg:flex-row items-center'>
          <h3 className='text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2'>
            Le syndicat apicole artésien
          </h3>
          <div className='flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2'>
            <Link
              href={"/"}
              className='mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0'
            >
              Accueil
            </Link>
            <ScrollToTopButton />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
