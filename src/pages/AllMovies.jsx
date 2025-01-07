import "aos/dist/aos.css";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { AuthContext } from "../provider/AuthProvider";
import Loader from "./../components/Loader";
const AllMovies = () => {
  const data = useLoaderData();
  const {  setAllMovies } = useContext(AuthContext);
  setAllMovies(data);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(data);
  const [isLoading, setIsLoading] = useState(true);

 

  useEffect(() => {
    // Filter movies based on the search query
    const filtered = data.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMovies(filtered);

      // Simulate a 3-second loading time
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
       // Cleanup timer
    return () => clearTimeout(timer);


  }, [searchQuery, data]);

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>All Movies - MOVIE PORTAL</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1
        className="text-4xl font-semibold text-white py-10 text-center"
        data-aos="fade-up"
      >
        All Movies
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
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 my-10"
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
