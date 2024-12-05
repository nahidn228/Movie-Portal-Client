import { useLoaderData } from "react-router-dom";

const MyFavorite = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1
        className=" text-xl md:text-4xl font-extrabold text-center text-gray-900 my-6"
        data-aos="fade-up"
      >
        Favorite Movies: {data.length}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
        {data.map((movie) => (
          <div
            key={movie._id}
            className=" bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 relative "
          >
            {/* Label for the tag */}
            <div className="absolute top-2 left-2 bg-red-600 text-xs font-semibold uppercase text-white px-2 py-1 rounded">
            Favorite Movies
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

                <button className="mt-4 w-full py-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-gray-900 font-semibold rounded-lg hover:from-orange-600 hover:to-yellow-500 transition-all">
                  Delete favorite
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFavorite;
