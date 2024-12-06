import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import Loader from "../components/Loader";
import { AuthContext } from "../provider/AuthProvider";

const MyFavorite = () => {
  const { user } = useContext(AuthContext);
  const [favorite, setFavorite] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch favorites on component mount
  useEffect(() => {
    fetch("https://full-stack-go.vercel.app/favorite-movies")
      .then((res) => res.json())
      .then((data) => {
        // Filter data by user email
        const userFavorites = data.filter(
          (movie) => movie.userEmail === user.email
        );
        setFavorite(userFavorites);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching favorite movies:", error);
        setLoading(false);
      });
  }, [user.email]);

  const handleDeleteFavorite = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this Movie from favorites!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://full-stack-go.vercel.app/favorite-movies/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Movie has been deleted from favorites.",
                "success"
              );
              const remaining = favorite.filter((item) => item._id !== id);
              setFavorite(remaining);
            }
          })
          .catch((error) => {
            console.error("Error deleting movie:", error);
          });
      }
    });
  };

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white px-5 py-10">
      <h1 className="text-xl md:text-4xl font-extrabold text-center text-gray-100 mb-6">
        Favorite Movies: {favorite?.length}
      </h1>

      {favorite.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
          {favorite.map((movie) => (
            <div
              key={movie._id}
              className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 relative"
            >
              {/* Favorite Tag */}
              <div className="absolute top-2 left-2 bg-red-600 text-xs font-semibold uppercase text-white px-2 py-1 rounded">
                Favorite Movie
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
                    {movie.rating}/10
                  </p>
                </div>

                <div>
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDeleteFavorite(movie._id)}
                    className="mt-4 w-full py-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-gray-900 font-semibold rounded-lg hover:from-orange-600 hover:to-yellow-500 transition-all"
                  >
                    Delete from Favorites
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400">
          You have not added any favorite movies yet.
        </p>
      )}
    </div>
  );
};

export default MyFavorite;
