import SiteNavbar from '@/components/navbar';
import Footer from '@/components/footer';
import { FullWidthContainer } from '@/components/layout/containers';

const Layout = ({ children }) => {
  return (
    <main className={`min-h-screen bg-white`}>
      <FullWidthContainer>
        <SiteNavbar />
      </FullWidthContainer>
      {children}

      <Footer />
    </main>
  );
};

export default Layout;
