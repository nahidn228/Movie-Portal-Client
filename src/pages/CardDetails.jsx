import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const CardDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const singleData = data.find((item) => item._id === id);
    setMovie(singleData);
  }, [data, id]);

  // Check if the movie is loaded
  if (!movie) return <p>Loading...</p>;

  const { _id, poster, title, genre, duration, releaseYear, rating, summary } =
    movie;

  const handleDeleteMovie = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this Movie!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/movies/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Movie has been deleted.", "success");
              navigate("/all-movies");
            }
          });
      }
    });
  };

  const handleAddToFavorites = (id) => {
    console.log(`Adding movie with id: ${id} to favorites`);
    fetch("http://localhost:5000/favorite-movies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(movie),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-5 py-10">
      <div
        data-aos="fade-up"
        className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6 animate__animated animate__fadeIn"
      >
        <img
          src={poster}
          alt={title}
          className="rounded-lg w-full h-auto mb-6"
        />
        <h1 className="text-3xl font-bold text-center mb-4">{title}</h1>
        <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
          <span className="flex items-center gap-1">
            {" "}
            <IoMdTime /> Duration: {duration} mins
          </span>
          <span className="flex items-center gap-1">
            {" "}
            <MdOutlineDateRange />
            Release Year: {releaseYear}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {Array.isArray(genre) ? (
            genre.map((g, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-purple-600 rounded-full text-xs"
              >
                {g}
              </span>
            ))
          ) : (
            <span className="px-3 py-1 bg-purple-600 rounded-full text-xs">
              {genre}
            </span>
          )}
        </div>
        <p className="text-lg mb-4">{summary}</p>
        <div className="flex items-center gap-2 mb-6">
          <FaStar className="text-yellow-500 text-xl" />
          <span className="text-xl font-semibold">{rating}</span>
        </div>

        {/* Buttons Section */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => handleDeleteMovie(_id)}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Delete Movie
          </button>
          <button
            onClick={() => handleAddToFavorites(_id)}
            className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition"
          >
            Add to Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
