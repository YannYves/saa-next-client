import Footer from "./footer";
import Meta from "./meta";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import { ReactNode } from "react";
import NavbarComponent from "./navbar";
import ScrollToTopButton from "./scroll-to-top-button";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <div className='min-h-screen'>
        <NavbarComponent />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
