const TestimonialBox = ({ text }) => {
  return (
    <p className="my-4 p-2 bg-gray-50 rounded text-sm">&ldquo;{text}&rdquo;</p>
  );
};

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
      <div className="mx-auto grid gap-8 lg:grid-cols-3">
        <div className="space-y-6">
          <TestimonialBox text="My ears are still reminding me of the enchanting music I heard Sunday afternoon. To see and hear the audience’s enthusiasm was an absolute joy.&rdquo;" />
          <TestimonialBox text="Everyone was truly exceptional." />
          <TestimonialBox text="Bravo to the Muskoka Philharmonic orchestra for a wonderful performance today.&rdquo;" />
        </div>
        <div className="space-y-6">
          <TestimonialBox text="The excitement, the passion for beautiful music, and the sense of community came shining through for all to experience.&rdquo;" />
          <TestimonialBox text="My wife and three year old had a blast. As did I." />
        </div>
        <div className="space-y-6">
          <TestimonialBox
            text="It was soooo fabulous. Couldn’t be more proud of the
                  performance, the turnout, and how everything came together so
                  well."
          />
          <TestimonialBox text="Congratulations on a great concert." />
        </div>
      </div>
      <div className="pt-8 mx-auto text-center">
        <h2 className="my-4 text-4xl tracking-tight font-extrabold">
          A huge thank you to all supporters in our community so far!
        </h2>
      </div>
    </div>
  );
};

export default Testimonials;
