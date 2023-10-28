export const Splash = () => {
  return (
    <section className="bg-[url('/concert.jpg')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply ">
      <div className='relative py-8 px-4 mx-auto max-w-screen-lg text-white lg:py-16 z-1'>
        <div className='mb-6 max-w-screen-lg lg:mb-0'>
          <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl'>
            Bringing live orchestral music to Muskoka
          </h1>
          <p className='mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl'>
            Join us November 26 for our Winter season concert
          </p>
          <a
            href='#tickets'
            className='block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
          >
            <button
              type='button'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
            >
              Get tickets
            </button>
          </a>
        </div>
        <div className='grid gap-8 pt-8 lg:pt-12 mt-8 lg:mt-12 border-t border-gray-600 sm:grid-cols-2 lg:grid-cols-4'>
          <div>
            <h2 className='mb-1 text-lg font-bold'>First concert</h2>
            <p className='mb-1 text-sm text-gray-400'>
              We held our first concert
            </p>
            <a
              href='#'
              className='inline-flex items-center text-sm font-semibold text-primary-500 hover:underline'
            >
              See photos
              <svg
                className='ml-1 w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </a>
          </div>
          <div>
            <h2 className='mb-1 text-lg font-bold'>We are cool</h2>
            <p className='mb-1 text-sm text-gray-400'>
              But not too cool for school
            </p>
            <a
              href='#'
              className='inline-flex items-center text-sm font-semibold text-primary-500 hover:underline'
            >
              Read more
              <svg
                className='ml-1 w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </a>
          </div>
          <div>
            <h2 className='mb-1 text-lg font-bold'>Winds</h2>
            <p className='mb-1 text-sm text-gray-400'>Toot</p>
            <a
              href='#'
              className='inline-flex items-center text-sm font-semibold text-primary-500 hover:underline'
            >
              Read more
              <svg
                className='ml-1 w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </a>
          </div>
          <div>
            <h2 className='mb-1 text-lg font-bold'>Strings</h2>
            <p className='mb-1 text-sm text-gray-400'>
              The other kind of instrument
            </p>
            <a
              href='#'
              className='inline-flex items-center text-sm font-semibold text-primary-500 hover:underline'
            >
              Read more
              <svg
                className='ml-1 w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
