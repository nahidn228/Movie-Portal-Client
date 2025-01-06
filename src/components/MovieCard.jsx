/* eslint-disable react/prop-types */
import { BsPlayCircle } from "react-icons/bs";
import { GoStarFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { BsBadge3D } from "react-icons/bs";

const MovieCard = ({ movie }) => {
  const { _id, poster, title, genre, duration, releaseYear, rating } = movie;

  return (
    // <div className=" bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 relative ">
    //   {/* Label for the tag */}
    //   <div className="absolute top-2 left-2 bg-red-600 text-xs font-semibold uppercase text-white px-2 py-1 rounded">
    //     Dual Audio (WEB-DL)
    //   </div>

    //   {/* Movie Poster */}
    //   <img src={poster} alt={title} className="w-full h-64 object-cover" />

    //   <div className="p-4 flex flex-col">
    //     <div className="flex-grow">
    //       {/* Movie Title */}
    //       <h2 className="text-2xl font-bold mb-2 text-yellow-400">{title}</h2>

    //       {/* Genre */}
    //       <p className="text-sm text-gray-300">
    //         <span className="font-semibold">Genre:</span>{" "}
    //         {Array.isArray(genre) ? genre.join(", ") : genre}
    //       </p>

    //       {/* Duration */}
    //       <p className="text-sm text-gray-300">
    //         <span className="font-semibold">Duration:</span> {duration} mins
    //       </p>

    //       {/* Release Year */}
    //       <p className="text-sm text-gray-300">
    //         <span className="font-semibold">Release Year:</span> {releaseYear}
    //       </p>

    //       {/* Rating */}
    //       <p className="text-sm text-gray-300">
    //         <span className="font-semibold">Rating:</span> ⭐ {rating}/10
    //       </p>
    //     </div>

    //     <div>
    //       {/* Button */}
    //       <Link to={`/all-movies/${_id}`}>
    //         <button className="mt-4 w-full py-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-gray-900 font-semibold rounded-lg hover:from-orange-600 hover:to-yellow-500 transition-all">
    //           See Details
    //         </button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <>
      <Link to={`/all-movies/${_id}`}>
        <div className=" group  ">
          {/* Featured Label */}
          {/* <div className="absolute top-2 left-2 bg-red-600 text-xs font-medium uppercase text-white px-2 py-1 rounded">
                Featured Movie
              </div> */}

          <div className="rounded-lg transform transition-all duration-300 hover:scale-105 relative overflow-hidden group">
            {/* Movie Poster */}
            <img
              src={poster}
              alt={title}
              className="w-full h-64 object-cover rounded-xl "
            />

            {/* "Hover" Text */}
            <div className="absolute inset-0 flex justify-center items-center text-white text-6xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black  bg-opacity-75 ">
              <div className="absolute bg-gray-800 backdrop-blur-xl bg-opacity-35  top-3 left-3   text-2xl font-medium uppercase  px-2 py-1 text-white rounded">
              <p className='flex items-center gap-1'> <BsBadge3D /></p>
              
              </div>
              <div className="absolute top-3 right-3 bg-gray-800 backdrop-blur-xl bg-opacity-35 text-sm font-medium uppercase text-white px-2 py-1 rounded flex gap-1 items-center">
                <span className="text-yellow-400 font-bold">
                  <GoStarFill />
                </span>{" "}
                {rating / 2}
              </div>
              <BsPlayCircle />
            </div>
          </div>

          {/* Movie Details */}
          <div className="p-4 flex flex-col space-y-4 ">
            <h2 className="text-2xl font-semibold text-white truncate group-hover:text-blue-500">
              {title}
            </h2>
            <div className="flex justify-between items-center text-sm text-gray-300">
              <p>{Array.isArray(genre) ? genre[0] : genre}</p>
              <p>{duration} min</p>
              <p>{releaseYear}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MovieCard;
