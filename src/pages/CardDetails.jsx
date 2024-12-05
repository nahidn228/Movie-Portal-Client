import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams(); // Extract the dynamic ID from URL
  const data = useLoaderData(); // Load the movie data passed via React Router
  const [movie, setMovie] = useState(null);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Find the movie details based on the ID
  useEffect(() => {
    const singleData = data.find((item) => item._id === id);
    setMovie(singleData);
  }, [data, id]);

  // Check if the movie is loaded
  if (!movie) return <p>Loading...</p>;

  const { poster, title, genre, duration, releaseYear, rating, summary } =
    movie;

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
          {genre.map((g, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-600 rounded-full text-xs"
            >
              {g}
            </span>
          ))}
        </div>
        <p className="text-lg mb-4">{summary}</p>
        <div className="flex items-center gap-2">
          <FaStar className="text-yellow-500 text-xl" />
          <span className="text-xl font-semibold">{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
