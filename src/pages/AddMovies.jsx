const AddMovies = () => {
  const genres = ["Action", "Comedy", "Drama", "Horror", "Romance", "Sci-Fi"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const poster = form.poster.value;
    const title = form.title.value;
    const genre = form.genre.value;
    const duration = form.duration.value;
    const releaseYear = form.releaseYear.value;
    const rating = form.rating.value;
    const summary = form.summary.value;

    const movieData = {
      poster,
      title,
      genre,
      duration,
      releaseYear,
      rating,
      summary,
    };

    console.log(movieData);

    fetch("http://localhost:5000/movies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(movieData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-gray-800 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-10">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-6">
          Add a Movie
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Movie Poster */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Movie Poster (URL)
            </label>
            <input
              type="url"
              id="poster"
              name="poster"
              placeholder="Enter movie poster URL"
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
            />
          </div>

          {/* Movie Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Movie Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter movie title"
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
            />
          </div>

          {/* Genre */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Genre
            </label>
            <select
              id="genre"
              name="genre"
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
            <label className="block text-sm font-medium text-gray-700">
              Duration (minutes)
            </label>
            <input
              type="number"
              id="duration"
              name="duration"
              placeholder="Enter duration"
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
            />
          </div>

          {/* Release Year */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Release Year
            </label>
            <input
              type="number"
              id="releaseYear"
              name="releaseYear"
              placeholder="Enter release year"
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Rating
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              placeholder="Enter rating (0-10)"
              required
              min="0"
              max="10"
              step="0.1"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
            />
          </div>

          {/* Summary */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Summary
            </label>
            <textarea
              id="summary"
              name="summary"
              placeholder="Enter movie summary"
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold rounded-lg shadow-md hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
          >
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMovies;
