import "aos/dist/aos.css"; // Import AOS styles
import { useLoaderData } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const AllMovies = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="w-11/12 mx-auto">
      <h1
        className="text-3xl font-bold text-center text-yellow-400 my-6"
        data-aos="fade-up"
      >
        ALL Movies
      </h1>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10"
        data-aos="fade-up"
      >
        {data.map((movie) => (
          <MovieCard key={movie._id} movie={movie}></MovieCard>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
