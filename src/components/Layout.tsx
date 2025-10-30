import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

const Layout = ({ children, showFooter = true }: LayoutProps) => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#14120B" }}>
      <Navbar />
      <main>{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;

