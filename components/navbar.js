import Image from 'next/image';

const SiteNavbar = () => {
  const data = [
    {
      text: 'About the orchestra',
      href: '/about',
    },
    {
      text: 'Contact',
      href: 'mailto:info@muskokaphilharmonic.ca',
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
        <div className="w-full md:w-auto" id="navbar-default">
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
