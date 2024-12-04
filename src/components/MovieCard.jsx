/* eslint-disable react/prop-types */
import React from "react";

const MovieCard = ({ movie }) => {
  const { poster, title, genre, duration, releaseYear, rating } = movie;

  return (
    <div className="max-w-xs bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 relative">
      {/* Label for the tag */}
      <div className="absolute top-2 left-2 bg-red-600 text-xs font-semibold uppercase text-white px-2 py-1 rounded">
        Dual Audio (WEB-DL)
      </div>

      {/* Movie Poster */}
      <img src={poster} alt={title} className="w-full h-64 object-cover" />

      <div className="p-4 flex flex-col">
        <div className="flex-1">
          {/* Movie Title */}
          <h2 className="text-2xl font-bold mb-2 text-yellow-400">{title}</h2>

          {/* Genre */}
          <p className="text-sm text-gray-300">
            <span className="font-semibold">Genre:</span>{" "}
            {genre || genre.join(", ")}
          </p>

          {/* Duration */}
          <p className="text-sm text-gray-300">
            <span className="font-semibold">Duration:</span> {duration} mins
          </p>

          {/* Release Year */}
          <p className="text-sm text-gray-300">
            <span className="font-semibold">Release Year:</span> {releaseYear}
          </p>

          {/* Rating */}
          <p className="text-sm text-gray-300">
            <span className="font-semibold">Rating:</span> ⭐ {rating}/10
          </p>
        </div>
        <div>
          {/* Button */}
          <button className="mt-4 w-full py-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-gray-900 font-semibold rounded-lg hover:from-orange-600 hover:to-yellow-500 transition-all">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
