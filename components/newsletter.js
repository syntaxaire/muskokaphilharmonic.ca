import Image from 'next/image';

export const Newsletter = () => {
  return (
    <section className="bg-white">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-12 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 xl:col-span-8">
          <h2>Sign up for our newsletter</h2>
          <p className="max-w-2xl mb-6 font-light text-mpo-semidark lg:mb-8 md:text-lg lg:text-xl">
            Get notified of upcoming MPO performances
          </p>
          <form action="#" className="">
            <div className="flex items-center mb-3">
              <div className="relative w-auto mr-3">
                <label
                  for="member_email"
                  className="hidden mb-2 text-sm font-medium text-mpo-semidark"
                >
                  Email address
                </label>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-mpo-semidark"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  className="block md:w-96 w-full p-3 pl-10 text-sm text-mpo-semidark border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your email"
                  type="email"
                  name="member[email]"
                  id="member_email"
                  required=""
                ></input>
              </div>
              <div>
                <input
                  type="submit"
                  value="Sign up"
                  className="px-5 py-3 text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
                  name="member_submit"
                  id="member_submit"
                ></input>
              </div>
            </div>
            <div className="text-sm text-left text-mpo-semidark">
              Your address will not be used for any other purpose.
            </div>
          </form>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 xl:col-span-4 lg:flex">
          <Image
            src="/concert_3.jpg"
            width="800"
            height="400"
            alt="Picture of MPO in concert"
          />
        </div>
      </div>
    </section>
  );
};
