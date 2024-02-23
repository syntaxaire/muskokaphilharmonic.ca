import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export const HomePageImageSlider = () => {
  const images = [
    {
      src: '/images/2023-11-26-concert-1.jpg',
      alt: 'Muskoka Philharmonic Orchestra in concert',
      width: 1920,
      height: 1080,
    },
    {
      src: '/images/2023-11-26-strings.jpg',
      alt: 'String section in concert',
      width: 1920,
      height: 1080,
    },
    {
      src: '/images/about_splash.jpg',
      alt: 'Violin player in rehearsal',
      width: 2064,
      height: 1376,
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper cursor-pointer"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
