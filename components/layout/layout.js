import SiteNavbar from '@/components/navbar';
import { FullWidthContainer } from '@/components/layout/containers';

const Layout = ({ children }) => {
  return (
    <main className={`min-w-max min-h-screen`}>
      <FullWidthContainer className="bg-white">
        <SiteNavbar />
      </FullWidthContainer>
      {children}
    </main>
  );
};

export default Layout;
