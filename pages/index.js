import { HomeSplash } from '@/components/splash';
import { Newsletter } from '@/components/newsletter';
import Join from '@/components/join';
import Layout from '@/components/layout/layout';
import { FullWidthContainer } from '@/components/layout/containers';
import Testimonials from '@/components/testimonials';
import Upcoming from '@/components/upcoming';

export default function Home() {
  return (
    <Layout>
      <FullWidthContainer className="text-mpo-bg-dark bg-white">
        <HomeSplash />
      </FullWidthContainer>

      <FullWidthContainer className="text-mpo-bg-dark bg-white">
        <Upcoming />
      </FullWidthContainer>

      <FullWidthContainer className="text-mpo-bg-dark bg-white">
        <Testimonials />
      </FullWidthContainer>
    </Layout>
  );
}
