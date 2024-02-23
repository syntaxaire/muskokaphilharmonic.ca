import Image from 'next/image';
import Link from 'next/link';

const Event20240309 = () => {
  return (
    <>
      <Image
        src="/events/2024-03-10/whimsical-musings-logo.png"
        alt=""
        width={800}
        height={655}
        className="w-full"
      />
      <p className="text-4xl uppercase mt-2">Whimsical Musings</p>
      <p className="mt-2">
        <span className="text-xl">
          <strong>Saturday March 9th 5pm</strong><br />
          Light meal & concert
        </span>
        <br />
        Bethune United Church, 2 Dickie St., Baysville
      </p>
      <p className="mt-2">
        Tickets $30 adults, $15 students, free under 4.
        <br />
        Tickets limited - buy in person from Nancy Gibson<br />
        or by phone (Diane) 705-767-3657
      </p>
    </>
  );
};

const Event20240310 = () => {
  return (
    <>
      <Image
        src="/events/2024-03-10/whimsical-musings-logo.png"
        alt=""
        width={800}
        height={655}
        className="w-full"
      />
      <p className="text-4xl uppercase mt-2">Whimsical Musings</p>
      <p className="mt-2">
        <span className="text-xl">
          <strong>Sunday March 10th 4-6pm</strong>
        </span>
        <br />
        Trinity United Church, 33 Main St. E Huntsville
      </p>
      <p className="mt-2">
        Tickets $20 adults, $10 students, free under 4.
        <br />
        Buy tickets in advance to be entered into a raffle.
        <br />
        Cash only tickets also available at the door.
      </p>
      <p className="mt-4 text-xl font-bold">
        <Link
          className="underline"
          href="https://www.eventbrite.com/e/muskoka-philharmonic-orchestra-in-concert-whimsical-musings-tickets-822544311177?aff=oddtdtcreator"
        >
          Click here for tickets
        </Link>
      </p>
    </>
  );
};

const Event20240621 = () => {
  return (
    <>
      <Image
        src="/events/2024-06-21/strawberry_moon.jpg"
        alt=""
        width={612}
        height={408}
        className="w-full"
      />
      <p className="text-4xl mt-8">Save the date!</p>
      <p className="mt-2">
        <span className="text-xl">
          <strong>Friday June 21</strong>
        </span>
      </p>
    </>
  );
};

export const UpcomingEventsCards = () => {
  const events = [
    Event20240309,
    Event20240310,
    Event20240621,
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {events.map((Event, index) => (
        <div key={index} className="shadow-lg text-center border-2 m-4 p-8">
          <Event />
        </div>
      ))}
    </div>
  );
};
