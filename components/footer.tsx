import Container from "./container";

const Footer = () => {
  return (
    <footer className="w-full bg-accent-1 border-t border-accent-2 py-6 sm:py-8 fixed bottom-0 left-0 md:relative z-10">
      <Container>
        <div className="flex justify-center items-center text-center">
          <span className="text-xs sm:text-sm md:text-base text-gray-500 w-full px-2 sm:px-0">
            © {new Date().getFullYear()} Le syndicat apicole artésien. Tous
            droits réservés.
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
