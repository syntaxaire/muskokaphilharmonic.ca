import Image from 'next/image';

export const Splash = () => {
  return (
    <section className="bg-[url('/concert.jpg')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply ">
      <div className='relative py-8 px-4 mx-auto max-w-screen-lg text-white lg:py-16 z-1'>
        <div className='mb-6 max-w-screen-lg lg:mb-0'>
          <h1 className='mb-4 tracking-tight text-4xl md:text-5xl lg:text-6xl'>
            Bringing the joy of live orchestral music to Muskoka!
          </h1>
          <p className='mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl'>
            Join us <span className='underline'>Sunday, November 26, 2023</span>{' '}
            for our Winter season concert
          </p>
          <a
            href='https://www.eventbrite.com/e/muskoka-philharmonic-orchestra-in-concert-winters-awakening-tickets-742979560867?aff=oddtdtcreator'
            className='block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
            target='_blank'
          >
            <button
              type='button'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
            >
              Get tickets
            </button>
          </a>
        </div>
        <Image
          className='mt-8'
          src='/events/2023-11-26/winters_awakening.jpg'
          alt="Winter's Awakening concert poster for November 26, 2023"
          width='940'
          height='470'
        />
      </div>
    </section>
  );
};
