const TestimonialBox = ({ text }) => {
  return (
    <div className="p-2 bg-gray-50 rounded text-sm">&ldquo;{text}&rdquo;
    </div>
  );
};
const TestimonialData = [
  'My ears are still reminding me of the enchanting music I heard Sunday afternoon.\nTo see and hear the audience’s enthusiasm was an absolute joy.',
  'Everyone was truly exceptional.',
  'Bravo to the Muskoka Philharmonic orchestra for a wonderful performance today.',
  'The excitement, the passion for beautiful music, and the sense of community came shining through for all to experience.',
  'My wife and three year old had a blast. As did I.',
  'It was soooo fabulous. Couldn’t be more proud of the performance, the turnout, and how everything came together so well.',
  'Congratulations on a great concert.',
];

const Testimonials = () => {
  return (
    <div className="py-8 px-4 mx-auto lg:py-16 lg:px-6">
      <div className="mx-auto text-center">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-mpo-semidark">
          Your response
        </h2>
        <p className="mb-8 font-light text-mpo-semidark lg:mb-16">
          from our first and second concerts
          <br />
          on <span className="text-mpo-accent">June 11</span> and{' '}
          <span className="text-mpo-accent">November 26</span>, 2023:
        </p>
      </div>

      <div className="px-4 mx-auto lg:px-6">
        <div className="mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TestimonialData.map((text) => (
            <TestimonialBox text={text} key={text} />
          ))}
        </div>
      </div>

      <p className="pt-8 mx-auto text-center my-4 text-4xl tracking-tight font-extrabold max-w-sm">
        A huge thank you to all our supporters!
      </p>
    </div>
  );
};

export default Testimonials;
