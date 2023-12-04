import Head from 'next/head';
import { FullWidthContainer } from '@/components/layout/containers';
import { AboutSplash } from '@/components/splash';

const { default: Layout } = require('@/components/layout/layout');

const About = () => {
  const title = 'About the orchestra';
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <FullWidthContainer className="bg-white text-mpo-bg-dark">
        <AboutSplash />
        <section className="bg-white">
          <div className="py-8 px-4 mx-auto max-w-screen-lg lg:py-16 lg:px-6">
            <div className="max-w-screen-lg">
              <h1 className="text-xl font-bold mb-2">About the Orchestra</h1>
              <p className="mb-4 font-light">
                The{' '}
                <span className="font-semibold">
                  Muskoka Philharmonic Orchestra
                </span>{' '}
                was founded in 2022 by a group of local musicians. We are based
                in Muskoka, Ontario.
              </p>
              <p className="mb-4">
                We perform a wide variety of music from classical to modern. We
                rehearse in Huntsville and perform in various locations
                throughout Muskoka.
              </p>
              <p className="mb-4">
                We are a growing orchestra, and new members are welcome!
              </p>
            </div>

            <div className="max-w-screen-lg mt-8">
              <h1 className="text-xl font-bold mb-2">
                Artistic Director: Alana Nuedling
              </h1>
              <p className="mb-4 text-normal">
                Alana Nuedling grew up in the Muskoka area and has been active
                in the music and arts community from an early age. She has a
                Performance Diploma (Cambrian College), an Honours BA in Music
                Education (Wilfrid Laurier University), and a Bachelor of
                Education (Nipissing University).
              </p>
              <p className="mb-4 text-normal">
                Alana has been a member of the Orillia Silver Band, Muskoka
                Concert Band, Sudbury Symphony Orchestra, Spirit of the Lakes
                Drum and Bugle Corps, and many Salvation Army brass bands
                throughout the years.
              </p>
              <p className="mb-4 text-normal">
                Alana is part of the Board for the Huntsville Festival of the
                Arts, part of the Education Committee, and a founding member and
                co-organizer of the Huntsville Festival of Music.
              </p>
              <p className="mb-4 text-normal">
                As a Music Director, Alana has led choirs, bands, pit
                orchestras, and now is the Artistic Director/Co-Founder of the
                newly formed Muskoka Philharmonic Orchestra (2022).
              </p>
              <p className="mb-4 text-normal">
                Alana worked in mainstream education for 18 years before
                breaking ties and freelancing; teaching music in private
                education, providing individual and group music lessons,
                providing individual and group tutoring for Math and Reading,
                and running an Arts Based Summer Day Camp. She looks forward to
                providing more opportunities to local youths through programming
                which gives them opportunities for further success in the Arts.
              </p>
              <p className="mb-4 text-normal">
                Alana is thrilled to be working with a passionate group of
                musicians who share the same love of collaboration, growth, and
                performance through collective effervescence.
              </p>
            </div>

            <div className="max-w-screen-lg mt-8">
              <br />
              <h1 className="text-xl font-bold mb-2">Board of Directors</h1>
              <span className="font-semibold">
                Artistic Director: Alana Nuedling
              </span>
              <br />
              <br />
              <span className="font-semibold">Co-Chair: Nancy Gibson</span>
              <br />
              <blockquote className="italic ml-4">
                &ldquo;Being involved with music has been a lifelong passion. What
                better way to be involved now that I&apos;m retired from teaching
                than with an uplifting community venture! I am over-the-moon
                excited to be helping to shape this new and harmonious orchestra
                together with my older and newer friends. &lsquo;Music is life
                itself.&rsquo; (Louis Armstrong)&rdquo;
              </blockquote>
              <br />
              <span className="font-semibold">Co-Chair: Michael Gibson</span>
              <br />
              <blockquote className="italic ml-4">
                &ldquo;With a life long love of music, I have always welcomed
                opportunities to get involved. Since moving to Muskoka with my
                family in 2001, I have been delighted by the wealth of musical
                talent here. I am very excited to be part of this new chapter of
                music in Muskoka!&rdquo;
              </blockquote>
              <br />
              <span className="font-semibold">
                Event Planner/Manager: Jennifer Brockett
              </span>
              <br />
              <p className="ml-4">
                Jennifer has an appreciation for musical performance that dates
                back to her high school days, when she played bass clarinet
                in the high school concert band, orchestra, and a small quintet.
                Other than being part of a local choir she has not had the
                opportunity to perform since then. So what better way to make an
                impact than bringing her organizing and event planning skills to
                the Board. Jennifer has lived in Huntsville since 2008 and is
                honoured to be part of the Muskoka Philharmonic Orchestra Board.
              </p>
              <br />
              <span className="font-semibold">Secretary: Vaughn Adamson</span>
              <br />
              <p className="ml-4">
                Vaughn is a native of Huntsville. She is a retired health care
                executive and has enjoyed music as a hobby for many years.
                Vaughn has been a member of local concert bands and music groups
                and welcomes the addition of a Philharmonic Orchestra. She knows
                that there are so many talented musicians in Muskoka who will
                now have yet another venue through which to showcase their
                talents.
              </p>
              <br />
              <span className="font-semibold">Treasurer: Gerri Mar</span>
              <br />
              <blockquote className="italic ml-4">
                &ldquo;After attending the first concert of the Muskoka Philharmonic
                Orchestra last June, I knew I wanted to be involved with this
                very talented group of musicians in some capacity. As my musical
                skills are limited, I&apos;m happy to be part of this group as
                treasurer.&rdquo;
              </blockquote>
            </div>
          </div>
        </section>
      </FullWidthContainer>
    </Layout>
  );
};

export default About;
