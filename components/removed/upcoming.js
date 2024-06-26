const Upcoming = () => {
  return (
    <div>
      <div className="pt-8 mx-auto max-w-screen-md text-center">
        <h2 className="my-4 text-4xl tracking-tight font-extrabold">
          Upcoming concerts
        </h2>
      </div>
      <div className="flex">
        <div className="mx-auto self-center mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">
          Save the date for our next seasonal concerts on:
          <br />
          <span className="underline text-mpo-accent">
            Saturday, March 9, 2024
          </span>{' '}
          (evening)
          <br />
          and:
          <br />
          <span className="underline text-mpo-accent">
            Sunday, March 10, 2024
          </span>{' '}
          (afternoon)
          <br />
          Locations and times to be updated!
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
