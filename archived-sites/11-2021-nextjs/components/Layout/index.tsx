import { ReactNode } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ScrollToTopButton from "../ScrollToTop";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
        <ScrollToTopButton />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
