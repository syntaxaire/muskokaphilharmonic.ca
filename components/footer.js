import Link from 'next/link';
import { FacebookIcon, InstagramIcon } from './icons/social';

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2023 Muskoka Philharmonic Orchestra. All Rights Reserved.
        </span>
        <span className="flex">
          <Link href="https://facebook.com/">
            <FacebookIcon />
          </Link>
          <Link href="https://instagram.com/">
            <InstagramIcon />
          </Link>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          <li>
            <a
              href="mailto:huntsvillemusicians@gmail.com"
              className="hover:underline"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
