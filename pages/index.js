import Footer from '@/components/footer';
import { Splash } from '@/components/splash';
import { Newsletter } from '@/components/newsletter';
import { About } from '@/components/about';
import Join from '@/components/join';
import Layout from '@/components/layout/layout';
import { FullWidthContainer } from '@/components/layout/containers';
import Testimonials from '@/components/testimonials';
import Upcoming from '@/components/upcoming';

export default function Home() {
  return (
    <Layout>
      <FullWidthContainer className="bg-white text-black">
        <Splash />
        <Upcoming />
        <Testimonials />
        <Footer />
      </FullWidthContainer>
    </Layout>
  );
}
