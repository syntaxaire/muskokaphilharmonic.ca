import SiteNavbar from '@/components/navbar';
import Footer from '@/components/footer';
import { FullWidthContainer } from '@/components/layout/containers';

const Layout = ({ children }) => {
  return (
    <main className={`min-w-max min-h-screen`}>
      <FullWidthContainer className="bg-white">
        <SiteNavbar />
      </FullWidthContainer>
      {children}

      <Footer />
    </main>
  );
};

export default Layout;
