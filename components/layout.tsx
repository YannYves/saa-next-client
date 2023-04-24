import Footer from "./footer";
import { ReactNode } from "react";
import NavbarComponent from "./navbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavbarComponent />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
