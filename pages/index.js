import Head from 'next/head';
import Layout from '@/components/layout/layout';
import { FullWidthContainer } from '@/components/layout/containers';
import Testimonials from '@/components/testimonials';
import { HomePageImageSlider } from '@/components/homepageimageslider';
import { UpcomingEventsCards } from '@/components/upcomingeventscards';
import Link from 'next/link';

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

      <FullWidthContainer className="text-mpo-bg-dark mt-16">
        <h2 className="text-4xl mb-8">Upcoming events</h2>
        <Link
          href="https://www.eventbrite.com/e/muskoka-philharmonic-orchestra-in-concert-whimsical-musings-tickets-822544311177?aff=oddtdtcreator"
          className="rounded text-2xl mb-8 p-2 cursor-pointer underline"
        >
          Get tickets for our next performance
        </Link>
        <UpcomingEventsCards />
      </FullWidthContainer>

      {/* <FullWidthContainer className="text-mpo-bg-dark">
        <HomeSplash />
      </FullWidthContainer> */}

      <FullWidthContainer className="text-mpo-bg-dark mt-16">
        <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-mpo-semidark">
          Community response
        </h2>
        <Testimonials />
      </FullWidthContainer>
    </Layout>
  );
}
