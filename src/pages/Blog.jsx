import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
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
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-out-back" }); // Initialize AOS
  }, []);

  return (
    <div className="min-h-screen">
        <Helmet>
        <meta charSet="utf-8" />
        <title>Blogs - MOVIE PORTAL</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="text-center text-white mb-10">
          <h1
            className="text-4xl sm:text-5xl font-bold text-yellow-300 mb-4"
            data-aos="fade-up"
          >
            Movie Portal Blog
          </h1>
          <p
            className="mt-4 text-lg sm:text-xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Stay updated with the latest news, reviews, and stories from the
            world of movies.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Main Content - Blog Posts */}
          <div className="col-span-1 md:col-span-3">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white p-6 rounded-lg shadow-lg mb-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <h2
                  className="text-2xl sm:text-3xl font-semibold text-black hover:text-accent transition duration-300"
                  data-aos="zoom-in-up"
                >
                  <NavLink to={`/blog/${post.id}`}>{post.title}</NavLink>
                </h2>
                <p className="mt-4 text-gray-600 text-sm sm:text-base">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xs sm:text-sm text-gray-500">
                    {post.date}
                  </span>
                  <NavLink
                    to={`/blog/${post.id}`}
                    className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 transition-all duration-300 transform hover:scale-105"
                    data-aos="fade-left"
                  >
                    Read More
                  </NavLink>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar Section */}
          <div className="col-span-1">
            <div
              className="bg-white p-6 rounded-lg shadow-lg"
              data-aos="fade-left"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-4">
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
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-4">
                Popular Posts
              </h3>
              <ul className="text-gray-600">
                {blogPosts.map((post) => (
                  <li key={post.id} className="mb-4">
                    <NavLink
                      to={`/blog/${post.id}`}
                      className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 transition-all duration-300 transform hover:scale-105"
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
