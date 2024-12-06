import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const NotFound = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-900 via-purple-800 to-gray-900 text-white px-6 py-10 md:py-0">
        <Helmet>
        <meta charSet="utf-8" />
        <title>Not Found - MOVIE PORTAL</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section: Animated Image */}
        <div
          className="flex justify-center md:justify-end"
          data-aos="fade-right"
        >
          <img
            src="https://seocom.agency/wp-content/uploads/2024/05/Errores-Web-404-403-503-502-401.-Significado-y-soluciones-1.jpg"
            alt="404 Illustration"
            className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section: Text and Button */}
        <div className="text-center md:text-left" data-aos="fade-left">
          <h1 className="text-6xl font-extrabold text-yellow-400 animate__animated animate__fadeInDown tracking-wide">
            MOVIE PORTAL <span className="text-lg text-white">says</span>
          </h1>
          <h2 className="text-3xl font-bold mt-4">Oops! Page Not Found 😢</h2>
          <p className="mt-4 text-gray-300 text-lg">
            Sorry, the page you are looking for doesn’t exist or has been moved.
            Let’s get you back on track!
          </p>

          {/* HomePage button */}
          <Link
            to="/"
            className="inline-flex items-center justify-center mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <FaHome className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
