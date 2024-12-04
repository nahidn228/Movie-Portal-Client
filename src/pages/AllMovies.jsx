import "aos/dist/aos.css"; // Import AOS styles
import { useLoaderData } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const AllMovies = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <>
      <h1
        className="text-3xl font-bold text-center text-yellow-400 my-6"
        data-aos="fade-up"
      >
        Featured Movies
      </h1>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10"
        data-aos="fade-up"
      >
        {data.map((movie) => (
          <MovieCard key={movie._id} movie={movie}></MovieCard>
        ))}
      </div>
    </>
  );
};

export default AllMovies;
