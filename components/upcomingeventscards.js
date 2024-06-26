import Image from 'next/image';
import Link from 'next/link';

/* const OptionalHeader2024 = () => {
  <FullWidthContainer className="font-dm-serif text-mpo-bg-dark mt-16">
    <span className="rounded mb-8 p-2">
      Get tickets for our next performances in:{' '}
      <Link
        href="https://www.eventbrite.ca/e/muskoka-philharmonic-orchestra-in-concert-strawberry-moon-gravenhurst-tickets-858498089897?aff=ebdssbdestsearch"
        className="cursor-pointer underline"
      >
        Gravenhurst
      </Link>{' '}
      or{' '}
      <Link
        href="https://www.eventbrite.ca/e/muskoka-philharmonic-orchestra-in-concert-strawberry-moon-huntsville-tickets-858520356497?aff=ebdssbdestsearch"
        className="cursor-pointer underline"
      >
        Huntsville
      </Link>
    </span>
  </FullWidthContainer>;
}; */

export const UpcomingEventsCards = () => {
  const events = [Event2024ReadingSessions];

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

// Push old cards down the file as they age, and copy from them as needed

// Reading sessions, July/August 2024
const Event2024ReadingSessions = () => {
  {
    /* Summer upcoming events section: */
  }
  return (
    <>
      <h2>Reading sessions</h2>
      <p>
        Interested in playing with the orchestra? Come to one of our summer
        music reading sessions!
      </p>
      <Image
        src="/events/2024/reading-sessions.jpg"
        alt=""
        width={612}
        height={408}
        className="w-full my-4"
      />
      <p className="mt-4">
        <Link
          className="underline"
          href="https://maps.app.goo.gl/V2ciPzT9nErkvWAUA"
        >
          Utterson Community Hall on Google Maps
        </Link>
      </p>
      <p className="mt-4">
        <Link className="underline" href="mailto:info@muskokaphilharmonic.ca">
          Email info@muskokaphilharmonic.ca
        </Link>
      </p>
    </>
  );
};

// Strawberry Moon Huntsville, June 2024
// const Event20240623 = () => {
//   return (
//     <>
//       <Image
//         src="/events/2024-06-23/strawberry_moon.jpg"
//         alt=""
//         width={612}
//         height={408}
//         className="w-full"
//       />
//       <p className="text-4xl mt-2">Strawberry Moon</p>
//       <p className="mt-2 text-xl font-bold">Huntsville</p>
//       <p className="mt-2">
//         <span className="text-xl font-bold">Sunday June 23rd 4-6pm</span>
//         <br />
//         Trinity United Church, 33 Main St. E
//       </p>
//       <p className="mt-2">
//         Tickets $20 adults, $10 students, free under 4.
//         <br />
//         Advance tickets qualify for a draw prize.
//         <br />
//         Cash only tickets also available at the door.
//       </p>
//       <p className="mt-4 text-xl font-bold">
//         <Link
//           className="underline"
//           href="https://www.eventbrite.ca/e/muskoka-philharmonic-orchestra-in-concert-strawberry-moon-huntsville-tickets-858520356497?aff=ebdssbdestsearch"
//         >
//           Click here for advance tickets
//         </Link>
//       </p>
//       <p className="mt-4 text-xl font-bold">
//         <Link
//           className="underline"
//           href="/events/2024-06-23/strawberry_moon_poster.pdf"
//         >
//           Download poster
//         </Link>
//       </p>
//     </>
//   );
// };

// Strawberry Moon Gravenhurst, June 2024
// const Event20240622 = () => {
//   return (
//     <>
//       <Image
//         src="/events/2024-06-23/strawberry_moon.jpg"
//         alt=""
//         width={612}
//         height={408}
//         className="w-full"
//       />
//       <p className="text-4xl mt-2">Strawberry Moon</p>
//       <p className="mt-2 text-xl font-bold">Gravenhurst</p>
//       <p className="mt-2">
//         <span className="text-xl font-bold">Saturday June 22nd 2-4pm</span>
//         <br />
//         Trinity United Church, 290 Muskoka Road North
//       </p>
//       <p className="mt-2">
//         Tickets $20 adults, $10 students, free under 4.
//         <br />
//         Advance tickets qualify for a draw prize.
//         <br />
//         Cash only tickets also available at the door.
//       </p>
//       <p className="mt-4 text-xl font-bold">
//         <Link
//           className="underline"
//           href="https://www.eventbrite.ca/e/muskoka-philharmonic-orchestra-in-concert-strawberry-moon-gravenhurst-tickets-858498089897?aff=ebdssbdestsearch"
//         >
//           Click here for advance tickets
//         </Link>
//       </p>
//       <p className="mt-4 text-xl font-bold">
//         <Link
//           className="underline"
//           href="/events/2024-06-23/strawberry_moon_poster.pdf"
//         >
//           Download poster
//         </Link>
//       </p>
//     </>
//   );
// };

// Whimsical Musings Huntsville, March 2024
// const Event20240310 = () => {
//   return (
//     <>
//       <Image
//         src="/events/2024-03-10/whimsical-musings-logo.png"
//         alt=""
//         width={800}
//         height={655}
//         className="w-full"
//       />
//       <p className="text-4xl uppercase mt-2">Whimsical Musings</p>
//       <p className="mt-2">
//         <span className="text-xl">
//           <strong>Sunday March 10th 4-6pm</strong>
//         </span>
//         <br />
//         Trinity United Church, 33 Main St. E Huntsville
//       </p>
//       <p className="mt-2">
//         Tickets $20 adults, $10 students, free under 4.
//         <br />
//         Buy tickets in advance to be entered into a raffle.
//         <br />
//         Cash only tickets also available at the door.
//       </p>
//       <p className="mt-4 text-xl font-bold">
//         <Link
//           className="underline"
//           href="https://www.eventbrite.com/e/muskoka-philharmonic-orchestra-in-concert-whimsical-musings-tickets-822544311177?aff=oddtdtcreator"
//         >
//           Click here for tickets
//         </Link>
//       </p>
//     </>
//   );
// };

// Whimsical Musings Baysville, March 2024
// const Event20240309 = () => {
//   return (
//     <>
//       <Image
//         src="/events/2024-03-10/whimsical-musings-logo.png"
//         alt=""
//         width={800}
//         height={655}
//         className="w-full"
//       />
//       <p className="text-4xl uppercase mt-2">Whimsical Musings</p>
//       <p className="mt-2">
//         <span className="text-xl">
//           <strong>Saturday March 9th 5pm</strong><br />
//           Light meal & concert
//         </span>
//         <br />
//         Bethune United Church, 2 Dickie St., Baysville
//       </p>
//       <p className="mt-2">
//         Tickets $30 adults, $15 students, free under 4.
//         <br />
//         Tickets limited - buy in person from Nancy Gibson<br />
//         or by phone (Diane) 705-767-3657
//       </p>
//     </>
//   );
// };

// Save the date for Strawberry Moon, June 2024
// const Event20240622Placeholder = () => {
//   return (
//     <>
//       <Image
//         src="/events/2024-06-22/strawberry_moon.jpg"
//         alt=""
//         width={612}
//         height={408}
//         className="w-full"
//       />
//       <p className="text-4xl mt-8">Save the date!</p>

//       <p className="mt-4">
//         <span className="text-2xl">
//           <strong>Gravenhurst</strong>
//         </span>
//       </p>
//       <p className="mt-2">
//         <span className="text-xl">
//           <strong>Saturday June 22, 2:00PM</strong>
//         </span>
//       </p>

//       <p className="mt-4">
//         <span className="text-2xl">
//           <strong>Huntsville</strong>
//         </span>
//       </p>
//       <p className="mt-2">
//         <span className="text-xl">
//           <strong>Sunday June 23, 4:00PM</strong>
//         </span>
//       </p>
//     </>
//   );
// };
