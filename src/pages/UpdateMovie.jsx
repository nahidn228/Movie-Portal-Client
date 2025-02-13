import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation, useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
const UpdateMovie = () => {
  const location = useLocation();
  console.log(location);
  const { updateMovie } = useContext(AuthContext);
  const navigate = useNavigate();
  const genres = [
    "Action",
    "Comedy",
    "Drama",
    "Horror",
    "Romance",
    "Sci-Fi",
    "Thriller",
    "Crime",
  ];
  const year = [
    2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2017, 2016, 2015, 2014,
    2013, 2012, 2011, 2010,
  ];
  const [posterError, setPosterError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [rating, setRating] = useState(0);
  const [ratingError, setRatingError] = useState("");

  // Handle Rating Change
  const handleRatingChange = (newRating) => {
    setRating(newRating * 2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const poster = form.poster.value;
    const title = form.title.value.trim();
    const genre = form.genre.value;
    const duration = parseInt(form.duration.value);
    const releaseYear = parseInt(form.releaseYear.value);
    const summary = form.summary.value;

    // Validate Poster URL
    try {
      new URL(poster);
      setPosterError("");
    } catch {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid URL.!",
      });
      return;
    }

    // Validate Title
    if (!title || title.length < 2) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Movie Title must not be empty and should have at least 2 characters.",
      });
      return;
    } else {
      setTitleError("");
    }

    // Validate Rating
    if (rating === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a rating.",
      });
      return;
    } else {
      setRatingError("");
    }

    // Validate Title
    if (!summary || summary.length < 10) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Movie summary must not be empty and should have at least 10 characters.",
      });
      return;
    } else {
      setTitleError("");
    }

    const updateMovieData = {
      poster,
      title,
      genre,
      duration,
      releaseYear,
      rating,
      summary,
    };

    console.log(updateMovieData);

    fetch(`https://full-stack-go.vercel.app/movies/${updateMovie._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateMovieData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/all-movies");
        Swal.fire({
          icon: "success",
          title: "Movie Updated!",
          text: ` ${title} Updated successfully.`,
        });
      });
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-gray-800 flex items-center justify-center p-6">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${updateMovie?.title} - MOVIE PORTAL`}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="w-full max-w-4xl bg-[#151F30] rounded-3xl shadow-xl p-10">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-6">
          Update a Movie
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Movie Poster */}
          <div>
            <label className="block text-sm font-medium ">
              Movie Poster (URL)
            </label>
            <input
              type="url"
              id="poster"
              name="poster"
              defaultValue={updateMovie?.poster}
              placeholder="Enter movie poster URL"
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
            />
            {posterError && (
              <p className="text-red-500 text-sm mt-1">{posterError}</p>
            )}
          </div>

          {/* Movie Title */}
          <div>
            <label className="block text-sm font-medium ">
              Movie Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={updateMovie?.title}
              placeholder="Enter movie title"
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
            />
            {titleError && (
              <p className="text-red-500 text-sm mt-1">{titleError}</p>
            )}
          </div>

          {/* Genre */}
          <div>
            <label className="block text-sm font-medium ">
              Genre
            </label>
            <select
              id="genre"
              name="genre"
              defaultValue={updateMovie?.genre}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
            >
              <option value="" disabled>
                Select genre
              </option>
              {genres.map((genre, index) => (
                <option key={index} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm font-medium ">
              Duration (minutes)
            </label>
            <input
              type="number"
              id="duration"
              name="duration"
              defaultValue={updateMovie?.duration}
              placeholder="Enter duration"
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
            />
          </div>

          {/* Release Year */}
          <div>
            <label className="block text-sm font-medium ">
              Release Year
            </label>
            <select
              type="number"
              id="releaseYear"
              name="releaseYear"
              defaultValue={updateMovie?.releaseYear}
              placeholder="Enter release year"
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
            >
              {year.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium ">
              Rating (1-10)
            </label>
            <div>
              <Rating
                onClick={handleRatingChange}
                ratingValue={rating * 2}
                size={30}
                transition
                fillColor="gold"
                emptyColor="gray"
                className="flex flex-row"
              />
            </div>
            {ratingError && (
              <p className="text-red-500 text-sm mt-1">{ratingError}</p>
            )}
          </div>

          {/* Summary */}
          <div>
            <label className="block text-sm font-medium ">
              Summary
            </label>
            <textarea
              id="summary"
              name="summary"
              defaultValue={updateMovie?.summary}
              placeholder="Enter movie summary"
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
            ></textarea>
            {titleError && (
              <p className="text-red-500 text-sm mt-1">{titleError}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold rounded-lg shadow-md hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
          >
            Update Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateMovie;
