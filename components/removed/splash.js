export const HomeSplash = () => {
  return (
    <section className="bg-[url('/events/2023-11-26/concert_photo.jpg')] bg-no-repeat bg-cover bg-center bg-gray-400 bg-blend-multiply">
      <div className="relative py-8 px-4 mx-auto max-w-screen-xl text-white lg:py-16 z-1">
        <div className="mb-6 lg:mb-0 text-right tracking-tight">
          <p className="[text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)] mt-[300px] mb-4 text-4xl md:text-5xl lg:text-5xl">
            Bringing the joy of <br />
            live orchestral music
            <br />
            to Muskoka!
          </p>
        </div>
      </div>
    </section>
  );
};

export const AboutSplash = () => {
  return (
    <section className="min-h-[600px] bg-[url('/about_splash.jpg')] bg-no-repeat bg-cover bg-center bg-gray-400 bg-blend-multiply">
      <div className="relative py-8 px-4 mx-auto max-w-screen-xl text-white lg:py-16 z-1">
        <div className="mb-6 lg:mb-0 text-right tracking-tight">
          <p className="[text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)] mt-[300px] mr-[50px] mb-4 text-4xl md:text-5xl lg:text-5xl">
            For the <br />
            love of
            <br />
            music!
          </p>
        </div>
      </div>
    </section>
  );
};
