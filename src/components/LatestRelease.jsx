import { useEffect, useState } from "react";

const LatestRelease = () => {
  const [movies, setMovies] = useState([]);
  //   const FeaturedMovie = useLoaderData();
  //   console.log(FeaturedMovie);
  useEffect(() => {
    fetch("http://localhost:5000/latestRelease")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      });
  }, []);
  return (
    <div className="flex ">
      {movies.map((movie) => (
        <div
          key={movie._id}
          className="max-w-xs bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 relative m-4 flex gap-6"
        >
          {/* Label for the tag */}
          <div className="absolute top-2 left-2 bg-red-600 text-xs font-semibold uppercase text-white px-2 py-1 rounded">
            Latest Release
          </div>

          {/* Movie Poster */}
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-64 object-cover"
          />

          <div className="p-4">
            {/* Title and Rating */}
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold truncate">{movie.title}</h2>
              <div className="flex items-center">
                <span className="text-yellow-400 text-sm mr-1">⭐</span>
                <span className="text-sm text-gray-300">{movie.rating}</span>
              </div>
            </div>

            {/* Additional Info */}
            <p className="text-sm text-gray-400 mb-1">
              {Array.isArray(movie.genre)
                ? movie.genre.join(", ")
                : movie.genre}{" "}
              • {movie.duration} mins
            </p>
            <p className="text-sm text-gray-400">{movie.releaseYear}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestRelease;
