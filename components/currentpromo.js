import Image from 'next/image';
import Link from 'next/link';

const CurrentPromo = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Image
          src="/events/2024-03-10/Final March 2024 Trinity Poster.png"
          alt="Poster for Muskoka Philharmonic Orchestra concert on March 10, 2024, at Trinity United Church in Huntsville, at 4 PM. Tickets $20 for adults, $10 for students, or free for under 4. Cash only tickets available at the door."
          width={864}
          height={1152}
        />
      </div>
      <div className="mx-auto text-center">
        <h2 className="my-16 text-4xl tracking-tight font-extrabold text-mpo-stem-green">
          Tickets can be purchased online{' '}
          <Link
            className="underline"
            href="https://www.eventbrite.com/e/muskoka-philharmonic-orchestra-in-concert-whimsical-musings-tickets-822544311177?aff=oddtdtcreator"
          >
            here
          </Link>
          !
        </h2>
      </div>
    </>
  );
};

export default CurrentPromo;
