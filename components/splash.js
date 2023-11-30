export const Splash = () => {
  return (
    <section className="bg-[url('/concert.jpg')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply ">
      <div className="relative py-8 px-4 mx-auto max-w-screen-lg text-white lg:py-16 z-1">
        <div className="mb-6 max-w-screen-lg lg:mb-0">
          <h1 className="mb-4 tracking-tight text-4xl md:text-5xl lg:text-5xl">
            Bringing the joy of live orchestral music to Muskoka!
          </h1>
          <p className="mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl">
            Save the date for our next concert on:
            <br />
            <span className="underline">Saturday, March 9, 2024</span> (evening)
            <br />
            or:
            <br />
            <span className="underline">Sunday, March 10, 2024</span>{' '}
            (afternoon)
          </p>
        </div>
      </div>
    </section>
  );
};
