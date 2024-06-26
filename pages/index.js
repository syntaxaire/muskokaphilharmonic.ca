import { FullWidthContainer } from '@/components/layout/containers';
import Head from 'next/head';
import { HomePageImageSlider } from '@/components/homepageimageslider';
import Layout from '@/components/layout/layout';
import Link from 'next/link';
import Testimonials from '@/components/testimonials';
import { UpcomingEventsCards } from '@/components/upcomingeventscards';

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

      <FullWidthContainer className="font-dm-serif text-mpo-bg-dark mt-16">
        <h1 className="mb-8">Upcoming events</h1>
        <UpcomingEventsCards />
      </FullWidthContainer>

      <FullWidthContainer className="text-mpo-bg-dark mt-16">
        <h1 className="mb-8">News</h1>
        <h3 className="font-bold">March 11, 2024</h3>
        <p>
          MuskokaTODAY.com has published{' '}
          <Link
            className="mpo-link"
            href="https://muskokatoday.com/2024/03/muskoka-philharmonics-music-entertaining-accessible-in-two-weekend-concerts-that-included-coldplay/"
          >
            a review
          </Link>{' '}
          of our Whimsical Musings concert on March 10!
        </p>
        <br />
        <h3 className="font-bold">February 2, 2024</h3>
        <p>
          The Muskoka Philharmonic Orchestra's Artistic Director, Alana
          Nuedling, appeared on Hunter's Bay Radio on{' '}
          <Link
            className="mpo-link"
            href="https://muskokaradio.com/show/artsrus"
          >
            ARTS R US
          </Link>
          .
        </p>
        <br />
        <p>
          Hear Alana's interview with hosts Karen Cassian and Noreen Mitchell:
        </p>
        <iframe
          className="mt-4"
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
            rel="noopener noreferrer"
            style={{ color: '#cccccc', textDecoration: 'none' }}
          >
            Hunters Bay Radio
          </a>{' '}
          ·{' '}
          <a
            href="https://soundcloud.com/hunters-bay-radio/arts-r-us-alana-nuedling-educator-music-teacher-and-director-feb-25-2024"
            title="ARTS R US Alana Nuedling Educator Music Teacher And Director FEB 25 2024"
            target="_blank"
            rel="noopener noreferrer"
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
        <h2 className="text-4xl mb-8">Community response</h2>
        <Testimonials />
      </FullWidthContainer>
    </Layout>
  );
}
