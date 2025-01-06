import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Loader from "./Loader";

const Banner = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://full-stack-go.vercel.app/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  if (!movies) {
    return <Loader></Loader>;
  }

  return (
    <div className="swiper-container py-10 bg-[#131720]">
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        speed={1000}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          // Small devices (e.g., mobile)
          640: {
            slidesPerView: 1,
          },
          // Medium devices (e.g., tablets)
          768: {
            slidesPerView: 2,
          },
          // Large devices (e.g., desktops)
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index} className="relative group">
            {/* Movie Image */}
            <img
              src={movie.poster}
              alt={movie.title}
              className="rounded-lg shadow-xl h-[300px] w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Movie Details */}
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-black bg-opacity-80 rounded-lg text-white transition-all duration-300">
              <h2 className="text-lg md:text-xl font-bold mb-2">
                {movie.title}
              </h2>
              <div className="flex items-center justify-between text-sm md:text-base">
                <div>
                  <p className="text-gray-400">{movie.releaseYear}</p>
                </div>
                <div>
                  <p className="px-2 py-1 bg-red-600 text-xs md:text-sm font-bold rounded">
                    Movie
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
