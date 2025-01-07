import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BsBadge3D, BsPlayCircle } from "react-icons/bs";
import { GoStarFill } from "react-icons/go";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../components/Loader";
import { AuthContext } from "../provider/AuthProvider";

const MyFavorite = () => {
  const location = useLocation();
  console.log(location);
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Favorite - MOVIE PORTAL</title>
      </Helmet>

      <h1 className="text-xl md:text-4xl font-extrabold text-center text-gray-100 mb-6">
        Favorite Movies: {favorite?.length}
      </h1>

      {favorite.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 my-10">
          {favorite.map((movie, idx) => (
            <div key={idx} className=" group  ml-4">
              <div className="rounded-lg transform transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                {/* Movie Poster */}
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-64 object-cover rounded-xl "
                />

                {/* "Hover" Text */}
                <div className="absolute inset-0 flex justify-center items-center text-white text-6xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black  bg-opacity-75 ">
                  <div className="absolute bg-gray-800 backdrop-blur-xl bg-opacity-35  top-3 left-3   text-2xl font-medium uppercase  px-2 py-1 text-white rounded">
                    <p className="flex items-center gap-1">
                      {" "}
                      <BsBadge3D />
                    </p>
                  </div>
                  <div className="absolute top-3 right-3 bg-gray-800 backdrop-blur-xl bg-opacity-35 text-sm font-medium uppercase text-white px-2 py-1 rounded flex gap-1 items-center">
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
                <div>
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDeleteFavorite(movie._id)}
                    className="btn btn-sm btn-neutral"
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
