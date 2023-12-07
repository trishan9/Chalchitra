"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const images = [
  {
    src: "https://variety.com/wp-content/uploads/2022/12/Animal-first-look.jpg",
    movie: "Animal",
  },
  {
    src: "https://bollywoodmascot.com/wp-content/uploads/maxresdefault-7.jpg",
    movie: "Rocky aur Rani ki Prem Kahani",
  },
  {
    src: "https://i.pinimg.com/originals/0f/c2/01/0fc201e82185c7499f2c30eb91286dd9.jpg",
    movie: "LEO",
  },
  {
    src: "https://e1.pxfuel.com/desktop-wallpaper/108/788/desktop-wallpaper-kgf-chapter-2-full-movie-facts-kgf-chapter-2-poster.jpg",
    movie: "KGF",
  },
  {
    src: "https://i.ytimg.com/vi/jlK-bW0t9dE/maxresdefault.jpg",
    movie: "Tiger 3",
  },
  {
    src: "https://assets.thehansindia.com/h-upload/feeds/2019/06/27/189933-kabir.jpg",
    movie: "Kabir Singh",
  },
  {
    src: "https://assets.thehansindia.com/h-upload/2023/03/15/1341876-pathan-movies12d.webp",
    movie: "Pathaan",
  },
  {
    src: "https://static.toiimg.com/photo/101561141.cms",
    movie: "Salaar",
  },
];

const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="border rounded-lg sm:mt-12 mySwiper border-dark-border"
    >
      {images.map((image) => (
        <SwiperSlide className="w-full h-64 sm:w-32" key={image.movie}>
          <Image
            width={800}
            height={800}
            src={image.src}
            alt={image.movie}
            className="w-full h-[680px] object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
