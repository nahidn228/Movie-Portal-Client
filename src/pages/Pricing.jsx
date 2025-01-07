import { useEffect, useState } from "react";
import { BiSolidMoviePlay } from "react-icons/bi";
import {
  FaCcMastercard,
  FaCreditCard,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { HiMiniVideoCamera } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import MovieCard from "../components/MovieCard";
import PricingTable from "../components/PricingTable";

const Pricing = () => {
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
    <div className="px-2 space-y-8">
      {/* header */}
      <div className="text-white flex items-center justify-between py-8 mt-20">
        <h2 className="text-4xl">Pricing plans</h2>
        <Link to="/" className="flex font-medium items-center gap-1 text-white">
          Go to Home <FaLongArrowAltRight />{" "}
        </Link>
      </div>
      {/* Text container */}
      <section className="text-lg font-light text-white">
        <div className="bg-gray-900 text-white py-10 px-5">
          <div className="">
            {/* Heading */}
            <h1 className="text-xl font-bold mb-4">Choose Your Perfect Plan</h1>

            {/* Subheading */}
            <p className="text-xl mb-6">
              Discover unlimited entertainment tailored to your needs. Whether
              you are a casual viewer or a movie enthusiast, we have the perfect
              plan for you. Stream your favorite movies, TV shows, and more
              without interruptions.
            </p>

            {/* Introduction Text */}
            <p className="text-lg mb-8">
              Our subscription plans are designed to fit every lifestyle and
              budget. From basic access to premium features like ad-free
              streaming, live TV, and cloud DVR storage, we have got you covered.
              Enjoy high-quality content and seamless experiences across all
              your devices.
            </p>

            {/* Call-to-Action */}
            <p className="text-lg font-semibold mb-4">
              Compare our plans below and select the one that works best for
              you. Dive into a world of endless entertainment today!
            </p>

            {/* Footer Text */}
            <p className="text-sm text-gray-400">
              Have questions about our pricing plans?{" "}
              <a href="/contact" className="text-blue-500 hover:underline">
                Contact our support team
              </a>{" "}
              for assistance.
            </p>
          </div>
        </div>
      </section>
      <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card - 1 */}
        <div className="card bg-gray-900   shadow-xl text-white">
          <div className="card-body">
            <h2 className="card-title">
              <FaCcMastercard className="text-blue-500 text-2xl" /> Choose your
              Plan
            </h2>
            <p>
              It to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining
            </p>
          </div>
        </div>
        {/* Card - 2 */}
        <div className="card bg-gray-900 shadow-xl text-white">
          <div className="card-body">
            <h2 className="card-title">
              <FaCreditCard className="text-blue-600 text-2xl" /> Choose your
              Plan
            </h2>
            <p>
              It to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining
            </p>
          </div>
        </div>
        {/* Card - 3 */}
        <div className="card bg-gray-900  shadow-xl text-white">
          <div className="card-body">
            <h2 className="card-title">
              <BiSolidMoviePlay className="text-blue-600 text-2xl" /> Choose
              your Plan
            </h2>
            <p>
              It to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining
            </p>
          </div>
        </div>
        {/* Card - 4 */}
        <div className="card bg-gray-900 shadow-xl text-white">
          <div className="card-body">
            <h2 className="card-title">
              <HiMiniVideoCamera className="text-blue-600 text-2xl" /> Choose
              your Plan
            </h2>
            <p>
              It to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining
            </p>
          </div>
        </div>
      </div>
      <div>
        <PricingTable></PricingTable>
      </div>
      <section className="">
        <Slider {...settings} className="">
          {movies.map((movie) => (
            <div key={movie._id} className="gap-4">
              <MovieCard movie={movie}></MovieCard>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Pricing;
