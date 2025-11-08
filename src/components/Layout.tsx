import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  showFooter?: boolean;
  showNavbar?: boolean;
}

const Layout = ({
  children,
  showFooter = true,
  showNavbar = true,
}: LayoutProps) => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#14120B' }}>
      {showNavbar && <Navbar />}
      <main>{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
