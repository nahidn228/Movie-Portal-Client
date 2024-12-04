/* eslint-disable react/prop-types */
const UpcomingMovie = ({ upcomingMovie }) => {
  //   const data = useLoaderData();
  //   console.log(data);

  const { poster, title, genre, duration, releaseYear, rating } = upcomingMovie;

  return (
    <>
      <div className="max-w-xs bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 relative m-4">
        {/* Label for the tag */}
        <div className="absolute top-2 left-2 bg-red-600 text-xs font-semibold uppercase text-white px-2 py-1 rounded">
          Up-Coming (WEB-DL)
        </div>

        {/* Movie Poster */}
        <img src={poster} alt={title} className="w-full h-64 object-cover" />

        <div className="p-4">
          {/* Title and Rating */}
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold truncate">{title}</h2>
            <div className="flex items-center">
              <span className="text-yellow-400 text-sm mr-1">⭐</span>
              <span className="text-sm text-gray-300">{rating}</span>
            </div>
          </div>

          {/* Additional Info */}
          <p className="text-sm text-gray-400 mb-1">
            {Array.isArray(genre) ? genre.join(", ") : genre} • {duration} mins
          </p>
          <p className="text-sm text-gray-400">{releaseYear}</p>
        </div>
      </div>
    </>
  );
};

export default UpcomingMovie;
