import Image from 'next/image';

const Join = ({ id }) => {
  return (
    <section className="bg-white" id={id}>
      <div className="py-8 px-4 mx-auto max-w-screen-lg lg:py-16 lg:px-6">
        <div className="max-w-screen-lg sm:text-lg">
          <h2 className="mb-4">Join</h2>
          <p className="mb-4 font-light">
            We are looking for orchestral musicians, intermediate and up.
          </p>
          <p className="mb-4 font-light">
            Do you love music and have an instrument in your closet?
          </p>
          <a
            href="#contact"
            className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
          >
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              Contact us
            </button>
          </a>

          <Image
            src="/concert_4.jpg"
            alt="phone illustration"
            width="200"
            height="150"
          />
        </div>
      </div>
    </section>
  );
};

export default Join;
