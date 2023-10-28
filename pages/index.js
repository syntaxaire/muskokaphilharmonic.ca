import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Splash } from '@/components/splash';
import { Newsletter } from '@/components/newsletter';
import { About } from '@/components/about';
import Join from '@/components/join';
import Layout from '@/components/layout/layout';
import { FullWidthContainer } from '@/components/layout/containers';

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <FullWidthContainer>
        <Splash />
      </FullWidthContainer>
      <Footer />
    </Layout>
  );
}
