import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Best Movies of 2024",
      excerpt: "Check out the top 10 movies of this year...",
      date: "December 2024",
      id: 1,
    },
    {
      title: "Why We Love Movie Soundtracks",
      excerpt: "Exploring the art of movie music and its impact...",
      date: "November 2024",
      id: 2,
    },
    {
      title: "Behind the Scenes of Movie Making",
      excerpt:
        "A deep dive into the creative process behind your favorite films...",
      date: "October 2024",
      id: 3,
    },
    // Add more posts as needed
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-out-back" }); // Initialize AOS
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 ">
      <div className="container w-11/12 mx-auto py-12">
        {/* Header Section */}
        <header className="text-center text-white">
          <h1
            className="text-5xl font-bold text-yellow-300 mb-4 animate__animated animate__fadeInUp"
            data-aos="fade-up"
          >
            Movie Portal Blog
          </h1>
          <p
            className="mt-4 text-xl animate__animated animate__fadeInUp"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Stay updated with the latest news, reviews, and stories from the
            world of movies.
          </p>
        </header>

        <div className="flex mt-12">
          {/* Main Content - Blog Posts */}
          <div className="w-3/4 mr-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white p-6 rounded-lg shadow-lg mb-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <h2
                  className="text-3xl font-semibold text-gray-800 hover:text-accent transition duration-300"
                  data-aos="zoom-in-up"
                >
                  <NavLink to={`/blog/${post.id}`}>{post.title}</NavLink>
                </h2>
                <p className="mt-4 text-gray-600">{post.excerpt}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <NavLink
                    to={`/blog/${post.id}`}
                    className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-all duration-300 transform hover:scale-105"
                    data-aos="fade-left"
                  >
                    Read More
                  </NavLink>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar Section */}
          <div className="w-1/4">
            <div
              className="bg-white p-6 rounded-lg shadow-lg"
              data-aos="fade-left"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Categories
              </h3>
              <ul className="text-gray-600">
                <li>
                  <NavLink
                    to="/category/2024"
                    className="block py-2 hover:text-accent"
                  >
                    2024 Movies
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/category/soundtracks"
                    className="block py-2 hover:text-accent"
                  >
                    Soundtracks
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/category/behind-the-scenes"
                    className="block py-2 hover:text-accent"
                  >
                    Behind the Scenes
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Popular Posts */}
            <div
              className="mt-8 bg-white p-6 rounded-lg shadow-lg"
              data-aos="fade-right"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Popular Posts
              </h3>
              <ul className="text-gray-600">
                {blogPosts.slice(0, 3).map((post) => (
                  <li key={post.id} className="mb-4">
                    <NavLink
                      to={`/blog/${post.id}`}
                      className="text-sm text-blue-600 hover:text-blue-800 transition-all duration-300 transform hover:scale-105"
                    >
                      {post.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
