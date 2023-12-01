const { FullWidthContainer } = require('./layout/containers');

const TestimonialBox = ({ text }) => {
  return (
    <blockquote class="p-2 bg-gray-50 rounded text-sm">
      <p class="my-4">{text}</p>
    </blockquote>
  );
};

const Testimonials = () => {
  return (
    <FullWidthContainer>
      <section class="bg-white">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-md text-center">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Your response
            </h2>
            <p class="mb-8 font-light text-gray-500 lg:mb-16">
              from our first and second concerts
              <br />
              on <span className="text-mpo-accent">June 11</span> and{' '}
              <span className="text-mpo-accent">November 26</span>, 2023:
            </p>
          </div>
          <div class="grid gap-8 lg:grid-cols-3">
            <div class="space-y-6">
              <TestimonialBox text="&ldquo;My ears are still reminding me of the enchanting music I heard Sunday afternoon. To see and hear the audience’s enthusiasm was an absolute joy.&rdquo;" />
              <TestimonialBox text="&ldquo;Everyone was truly exceptional.&rdquo;" />
              <TestimonialBox text="&ldquo;Bravo to the Muskoka Philharmonic orchestra for a wonderful performance today.&rdquo;" />
            </div>
            <div class="space-y-6">
              <TestimonialBox text="&ldquo;The excitement, the passion for beautiful music, and the sense of community came shining through for all to experience.&rdquo;" />
              <TestimonialBox text="&ldquo;My wife and three year old had a blast. As did I.&rdquo;" />
              <TestimonialBox text="&ldquo;Was this a song-a-long? No, it was orchestra but they had everyone sing the finale!&rdquo;" />
            </div>
            <div class="space-y-6">
              <TestimonialBox
                text="&ldquo;It was soooo fabulous. Couldn’t be more proud of the
                  performance, the turnout, and how everything came together so
                  well.&rdquo;"
              />
              <TestimonialBox text="&ldquo;Congratulations on a great concert.&rdquo;" />
            </div>
          </div>

          <div class="mx-auto max-w-screen-md text-center">
            <h2 class="my-4 text-4xl tracking-tight font-extrabold text-gray-900">
              A huge thank you to all supporters in our community so far!
            </h2>
          </div>
        </div>
      </section>
    </FullWidthContainer>
  );
};

export default Testimonials;
