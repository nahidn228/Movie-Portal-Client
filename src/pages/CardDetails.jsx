import { Rating } from "@smastrom/react-rating";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { IoMdTime } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

import "@smastrom/react-rating/style.css";
import Swal from "sweetalert2";
import Loader from "../components/Loader";
import { AuthContext } from "../provider/AuthProvider";

const CardDetails = () => {
  const location = useLocation();
  console.log(location);
  const { user, setUpdateMovie } = useContext(AuthContext);

  const { id } = useParams();
  const data = useLoaderData();
  const [movie, setMovie] = useState(null);
  // const [favorite, setFavorite] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const singleData = data.find((item) => item._id === id);
    setMovie(singleData);
    // if (favorite._id == id) {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "This movie is already listed as favorite",
    //   });
    // }
  }, [data, id]);

  // useEffect(() => {
  //   fetch("https://full-stack-go.vercel.app/favorite-movies")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setFavorite(data);
  //     });
  // }, []);

  // Check if the movie is loaded
  if (!movie) return <Loader></Loader>;

  const { poster, title, genre, duration, releaseYear, rating, summary } =
    movie;
  setUpdateMovie(movie);

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
        fetch(`https://full-stack-go.vercel.app/movies/${id}`, {
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

    // if (favorite.map((item) => item._id == id)) {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "This movie is already listed as a favorite!",
    //   });
    //   return;
    // }

    const userEmail = user.email;
    console.log(userEmail);
    const movieWithUserEmail = {
      poster,
      title,
      genre,
      duration,
      releaseYear,
      rating,
      summary,
      userEmail: userEmail,
    };

    fetch("https://full-stack-go.vercel.app/favorite-movies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(movieWithUserEmail),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire(
          "Added!",
          "Your Movie has been Added to Favorite list.",
          "success"
        );
        navigate("/all-movies");
      });
  };

  const handleUpdateMovie = (id) => {
    console.log(id);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-5 py-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title} - MOVIE PORTAL</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
          <Rating style={{ maxWidth: 100 }} value={rating / 2} />
        </div>

        {/* Buttons Section */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => handleDeleteMovie(movie._id)}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Delete Movie
          </button>
          <button
            onClick={() => handleAddToFavorites(movie._id)}
            className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition"
          >
            Add to Favorite
          </button>
          <Link to="/update-movie">
            <button
              onClick={() => handleUpdateMovie(movie._id)}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Update Movie
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
