import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import MovieCard from "./MovieCard";

const ReactSlick = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://full-stack-go.vercel.app/featuredMovies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,

    slidesToShow: 5, // Adjust the number of slides to show based on screen size
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // For screens smaller than 480px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="my-10">
      <div className="">
        <Slider {...settings} className="">
          {movies.map((movie) => (
            <div key={movie._id} className="">
            
              <MovieCard movie={movie}></MovieCard>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReactSlick;
