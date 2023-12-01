import Image from 'next/image';

const SiteNavbar = () => {
  const data = [
    {
      text: 'About the orchestra',
      href: '/about',
    },
    {
      text: 'Contact',
      href: 'mailto:huntsvillemusicians@gmail.com',
    },
  ];
  return (
    <nav className="bg-white border-gray-200">
      <div className="flex flex-wrap items-center justify-between p-4">
        <a href="https://muskokaphilharmonic.ca/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Muskoka Philharmonic Orchestra logo"
            width="412"
            height="260"
          />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-mpo-semidark rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-bold flex flex-col p-4 md:p-0 mt-4 border text-mpo-semidark border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-16 md:mt-0 md:border-0 md:bg-white">
            {data.map((menuItem, index) => (
              <li key={index}>
                <a
                  href={menuItem.href}
                  className="md:hover:text-mpo-accent text-2xl"
                >
                  {menuItem.text}
                </a>
              </li>
            ))}{' '}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SiteNavbar;
