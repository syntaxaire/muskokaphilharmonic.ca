import Head from 'next/head';
import { HomeSplash } from '@/components/splash';
import Layout from '@/components/layout/layout';
import { FullWidthContainer } from '@/components/layout/containers';
import Testimonials from '@/components/testimonials';
import Upcoming from '@/components/upcoming';

export default function Home() {
  const title = 'Muskoka Philharmonic Orchestra';
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
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
