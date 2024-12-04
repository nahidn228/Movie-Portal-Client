import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Banner = () => {
  return (
    <div className="swiper-container py-10 ">
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        speed={2000}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/P1P9j11/bollywood-posters-995224-1280.jpg"
            alt="Movie 1"
            className="rounded-lg shadow-xl h-[500px] w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/qC7dzhf/movie-2270554-1280.png"
            alt="Movie 2"
            className="rounded-lg shadow-xl h-[500px] w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/10gPWZZ/wall-2568673-1280.jpg"
            alt="Movie 3"
            className="rounded-lg shadow-xl h-[500px] w-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
