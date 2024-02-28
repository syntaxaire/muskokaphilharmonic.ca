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

      <FullWidthContainer className="text-mpo-bg-dark mt-16">
        <h2 className="text-4xl mb-8">News</h2>
        <p>The Muskoka Philharmonic Orchestra's Artistic Director, Alana Neudling,
        recently appeared on Hunter's Bay Radio on ARTS R US.</p>
        <p>Hear Alana's interview with hosts Karen Cassian and Noreen Mitchell:</p>
        <iframe
          className='mt-4'
          title="Soundcloud"
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1758326925&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
        <div
          style={{
            fontSize: '10px',
            color: '#cccccc',
            lineBreak: 'anywhere',
            wordBreak: 'normal',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            fontFamily:
              'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
            fontWeight: 100,
          }}
        >
          <a
            href="https://soundcloud.com/hunters-bay-radio"
            title="Hunters Bay Radio"
            target="_blank"
            style={{ color: '#cccccc', textDecoration: 'none' }}
          >
            Hunters Bay Radio
          </a>{' '}
          ·{' '}
          <a
            href="https://soundcloud.com/hunters-bay-radio/arts-r-us-alana-nuedling-educator-music-teacher-and-director-feb-25-2024"
            title="ARTS R US Alana Nuedling Educator Music Teacher And Director FEB 25 2024"
            target="_blank"
            style={{ color: '#cccccc', textDecoration: 'none' }}
          >
            ARTS R US Alana Nuedling Educator Music Teacher And Director FEB 25
            2024
          </a>
        </div>
      </FullWidthContainer>

      {/* <FullWidthContainer className="text-mpo-bg-dark">
        <HomeSplash />
      </FullWidthContainer> */}

      <FullWidthContainer className="text-mpo-bg-dark mt-16">
        <h2 className="text-4xl mb-8">
          Community response
        </h2>
        <Testimonials />
      </FullWidthContainer>
    </Layout>
  );
}
