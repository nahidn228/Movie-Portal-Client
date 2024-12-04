import { useLoaderData } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const AllMovies = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
      {data.map((movie) => (
        <MovieCard key={movie._id} movie={movie}></MovieCard>
      ))}
    </div>
  );
};

export default AllMovies;
