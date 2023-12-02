import { FullWidthContainer } from '@/components/layout/containers';
import { AboutSplash } from '@/components/splash';

const { default: Layout } = require('@/components/layout/layout');

const About = () => {
  return (
    <Layout>
      <FullWidthContainer className="bg-white text-mpo-bg-dark">
        <AboutSplash />
        <section className="bg-white">
          <div className="py-8 px-4 mx-auto max-w-screen-lg lg:py-16 lg:px-6">
            <div className="max-w-screen-lg sm:text-lg">
              <p className="mb-4 font-light">
                The Muskoka Philharmonic Orchestra is based in <span className="text-mpo-accent">Muskoka, Ontario</span>.
              </p>
              <p className="mb-4 text-normal">
                We perform a wide variety of music, and we are looking for new
                members. We rehearse in Huntsville, and perform each year in
                various locations around Muskoka.
              </p>
              <br />
              <h1 className="text-xl font-bold mb-2">Board of Directors</h1>
              Co-Chair: Nancy Gibson
              <br />
              Co-Chair: Michael Gibson
              <br />
              Artistic Director: Alana Neudling
              <br />
              Event Planner/Manager: Jennifer Brockett
              <br />
              Secretary: Vaughn Adamson
              <br />
              Treasurer: Gerri Mar
              <br />
              <br />
              <br />
              <h1 className="text-xl font-bold mb-2">Artistic Director</h1>
              <p className="mb-4 text-normal">
                Artistic Director Alana Nuedling grew up in the Muskoka area
                and has been active in the music and arts community from an
                early age. She has a Performance Diploma (Cambrian College), an
                Honours BA in Music Education (Wilfrid Laurier University), and
                a Bachelor of Education (Nipissing University).
              </p>
              <p className="mb-4 text-normal">
                Alana has been a member of the Orillia Silver Band, Muskoka
                Concert Band, Sudbury Symphony Orchestra, Spirit of the Lakes
                Drum and Bugle Corps, and many Salvation Army brass bands
                throughout the years.
              </p>
              <p className="mb-4 text-normal">
                As a Music Director, Alana has led choirs, bands, pit
                orchestras, and now is the Artistic Director/Co-Founder of the
                newly formed Muskoka Philharmonic Orchestra.
              </p>
              <p className="mb-4 text-normal">
                Alana is thrilled to be working with a passionate group of
                musicians who share the same love of collaboration, growth, and
                performance through collective effervescence.
              </p>
            </div>
          </div>
        </section>
      </FullWidthContainer>
    </Layout>
  );
};

export default About;
