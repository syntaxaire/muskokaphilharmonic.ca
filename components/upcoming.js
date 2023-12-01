const Upcoming = () => {
  return (
    <>
      <div class="mx-auto max-w-screen-md text-center">
        <h2 class="my-4 text-4xl tracking-tight font-extrabold text-gray-900">
          Upcoming concerts
        </h2>
      </div>
      <p className="ml-4 mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">
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
      </p>
    </>
  );
};

export default Upcoming;
