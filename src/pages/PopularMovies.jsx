import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
import { BsPlayCircle } from "react-icons/bs";
import { GoStarFill } from "react-icons/go";
import { Link } from "react-router-dom";
import Loader from "./../components/Loader";

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://full-stack-go.vercel.app/featuredMovies")
      .then((res) => res.json())
      .then((data) => {setMovies(data)
        setIsLoading(false)
      });
  }, []);

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <h1
        className="text-4xl font-semibold text-white py-10 text-center"
        data-aos="fade-up"
      >
        Popular Movies
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {movies.map((movie) => (
          <Link to={`/all-movies/${movie._id}`} key={movie._id}>
            <div className=" group">
              {/* Featured Label */}
              {/* <div className="absolute top-2 left-2 bg-red-600 text-xs font-medium uppercase text-white px-2 py-1 rounded">
                Featured Movie
              </div> */}

              <div className=" rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                {/* Movie Poster */}
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-64 object-cover rounded-t-lg "
                />

                {/* "Hover" Text */}
                <div className="absolute inset-0 flex justify-center items-center text-white text-6xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black  bg-opacity-75">
                  <div className="absolute top-3 left-3 bg-white backdrop-blur-xl bg-opacity-35 text-xs font-medium uppercase text-white px-2 py-1 rounded">
                    Popular
                  </div>
                  <div className="absolute top-3 right-3 bg-white backdrop-blur-xl bg-opacity-35 text-sm font-medium uppercase text-white px-2 py-1 rounded flex gap-1 items-center">
                    <span className="text-yellow-400 font-bold">
                      <GoStarFill />
                    </span>{" "}
                    {movie.rating / 2}
                  </div>
                  <BsPlayCircle />
                </div>
              </div>

              {/* Movie Details */}
              <div className="p-4 flex flex-col space-y-4">
                <h2 className="text-2xl font-semibold text-white truncate group-hover:text-blue-500">
                  {movie.title}
                </h2>
                <div className="flex justify-between items-center text-sm text-gray-300">
                  <p>
                    {Array.isArray(movie.genre) ? movie.genre[0] : movie.genre}
                  </p>
                  <p>{movie.duration} min</p>
                  <p>{movie.releaseYear}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Rating
                    style={{ maxWidth: 80 }}
                    value={movie.rating / 2}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
        {movies.map((movie) => (
          <Link to={`/all-movies/${movie._id}`} key={movie._id}>
            <div className=" group  ">
              {/* Featured Label */}
              {/* <div className="absolute top-2 left-2 bg-red-600 text-xs font-medium uppercase text-white px-2 py-1 rounded">
                Featured Movie
              </div> */}

              <div className="rounded-lg transform transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                {/* Movie Poster */}
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-64 object-cover rounded-xl "
                />

                {/* "Hover" Text */}
                <div className="absolute inset-0 flex justify-center items-center text-white text-6xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black  bg-opacity-75">
                  <div className="absolute top-3 left-3 bg-white backdrop-blur-xl bg-opacity-35 text-xs font-medium uppercase text-white px-2 py-1 rounded">
                    Popular
                  </div>
                  <div className="absolute top-3 right-3 bg-white backdrop-blur-xl bg-opacity-35 text-sm font-medium uppercase text-white px-2 py-1 rounded flex gap-1 items-center">
                    <span className="text-yellow-400 font-bold">
                      <GoStarFill />
                    </span>{" "}
                    {movie.rating / 2}
                  </div>
                  <BsPlayCircle />
                </div>
              </div>

              {/* Movie Details */}
              <div className="p-4 flex flex-col space-y-4 ">
                <h2 className="text-2xl font-semibold text-white truncate group-hover:text-blue-500">
                  {movie.title}
                </h2>
                <div className="flex justify-between items-center text-sm text-gray-300">
                  <p>
                    {Array.isArray(movie.genre) ? movie.genre[0] : movie.genre}
                  </p>
                  <p>{movie.duration} min</p>
                  <p>{movie.releaseYear}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-center my-10">
        <Link
          to="/all-movies"
          className="btn btn-md lg:btn-lg bg-[#162339] border-none text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 px-10 py-2 rounded-2xl"
        >
          See all movies
        </Link>
      </div>
    </>
  );
};

export default PopularMovies;
