const TestimonialBox = ({ text }) => {
  return (
    <div className="p-4 shadow-md border rounded text-sm">
      &ldquo;{text}&rdquo;
    </div>
  );
};
const TestimonialData = [
  'An absolutely wonderful concert, an exquisite experience! Gorgeous music, played and conducted by such skilled musicians…and so enjoyed the focus on young talent! MPO, a gem indeed! Thank you!',
  'Bravo! Muskoka Philharmonic A rare and special concert! Huntsville we are blessed by such brilliant musicians!',
  'My ears are still reminding me of the enchanting music I heard Sunday afternoon.\nTo see and hear the audience’s enthusiasm was an absolute joy.',
  'Everyone was truly exceptional.',
  'Bravo to the Muskoka Philharmonic orchestra for a wonderful performance today.',
  'The excitement, the passion for beautiful music, and the sense of community came shining through for all to experience.',
  'My wife and three year old had a blast. As did I.',
  'It was soooo fabulous. Couldn’t be more proud of the performance, the turnout, and how everything came together so well.',
];

const Testimonials = () => {
  return (
    <div className="py-8 px-4 mx-auto">
      <div className="px-4 mx-auto lg:px-6">
        <div className="mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TestimonialData.map((text) => (
            <TestimonialBox text={text} key={text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
