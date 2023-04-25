import Footer from "./footer";
import { ReactNode } from "react";
import NavbarComponent from "./navbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className='min-h-screen'>
        <NavbarComponent />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
