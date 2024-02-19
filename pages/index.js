import Head from 'next/head';
import { HomeSplash } from '@/components/splash';
import Layout from '@/components/layout/layout';
import { FullWidthContainer } from '@/components/layout/containers';
import Testimonials from '@/components/testimonials';
// import Upcoming from '@/components/removed/upcoming';
import CurrentPromo from '@/components/removed/currentpromo';
import { HomePageImageSlider } from '@/components/homepageimageslider';

export default function Home() {
  const title = 'Muskoka Philharmonic Orchestra';
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>

      <FullWidthContainer className="text-mpo-bg-dark">
        <HomePageImageSlider />
      </FullWidthContainer>

      <FullWidthContainer className="text-mpo-bg-dark">
        <CurrentPromo />
      </FullWidthContainer>

      <FullWidthContainer className="text-mpo-bg-dark">
        <HomeSplash />
      </FullWidthContainer>

      <FullWidthContainer className="text-mpo-bg-dark">
        <Testimonials />
      </FullWidthContainer>
    </Layout>
  );
}
