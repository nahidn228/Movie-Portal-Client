import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedMovies = () => {
  const [movies, setMovies] = useState([]);
  //   const FeaturedMovie = useLoaderData();
  //   console.log(FeaturedMovie);
  useEffect(() => {
    fetch("http://localhost:5000/featuredMovies")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      });
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" >
        {movies.map((movie) => (
          <div
            key={movie._id}
            className=" bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 relative "
          >
            {/* Label for the tag */}
            <div className="absolute top-2 left-2 bg-red-600 text-xs font-semibold uppercase text-white px-2 py-1 rounded">
            Featured Movie
            </div>

            {/* Movie Poster */}
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-4 flex flex-col">
              <div className="flex-grow">
                {/* Movie Title */}
                <h2 className="text-2xl font-bold mb-2 text-yellow-400">
                  {movie.title}
                </h2>

                {/* Genre */}
                <p className="text-sm text-gray-300">
                  <span className="font-semibold">Genre:</span>{" "}
                  {Array.isArray(movie.genre)
                    ? movie.genre.join(", ")
                    : movie.genre}
                </p>

                {/* Duration */}
                <p className="text-sm text-gray-300">
                  <span className="font-semibold">Duration:</span>{" "}
                  {movie.duration} mins
                </p>

                {/* Release Year */}
                <p className="text-sm text-gray-300">
                  <span className="font-semibold">Release Year:</span>{" "}
                  {movie.releaseYear}
                </p>

                {/* Rating */}
                <p className="text-sm text-gray-300">
                  <span className="font-semibold">Rating:</span> ⭐{" "}
                  {movie.rating}
                  /10
                </p>
              </div>

              <div>
                {/* Button */}
                <Link to={`/all-movies/${movie._id}`}>
                <button className="mt-4 w-full py-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-gray-900 font-semibold rounded-lg hover:from-orange-600 hover:to-yellow-500 transition-all">
                  See Details
                </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link
        to="/all-movies"
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 flex justify-self-end mt-10"
      >
        See all movies
      </Link>
    </>
  );
};

export default FeaturedMovies;
