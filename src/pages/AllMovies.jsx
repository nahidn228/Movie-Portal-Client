import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const AllMovies = () => {
  const data = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(data);

  useEffect(() => {
    // Filter movies based on the search query
    const filtered = data.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [searchQuery, data]);

  return (
    <div className="w-11/12 mx-auto ">
      <h1
        className="text-3xl font-bold text-center text-yellow-400 my-6"
        data-aos="fade-up"
      >
        ALL Movies
      </h1>

      {/* Search Box */}
      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="px-4 py-2 w-full max-w-md border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Movies Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10"
        data-aos="fade-up"
      >
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard key={movie._id} movie={movie}></MovieCard>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-400">
            No movies found for {searchQuery}.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllMovies;
