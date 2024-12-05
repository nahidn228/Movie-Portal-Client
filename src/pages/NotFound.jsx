import "animate.css"; // Animate.css styles
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import { useEffect } from "react";
import Marquee from "react-fast-marquee"; // Updated to react-fast-marquee
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="text-center" data-aos="fade-up">
        {/* Marquee text */}
        <Marquee gradient={false} speed={20}>
          <div className="text-2xl font-bold">Oops! Page Not Found. 😱</div>
        </Marquee>

        {/* Animated 404 Message */}
        <h1 className="text-6xl font-extrabold text-red-600 animate__animated animate__bounceIn animate__delay-1s">
          404
        </h1>
        <p className="text-lg mt-4 animate__animated animate__fadeIn animate__delay-2s">
          The page you are looking for does not exist. But do not worry, you can go
          back to the home page.
        </p>

        {/* Home Button */}
        <a
          href="/"
          className="mt-6 inline-flex items-center justify-center px-6 py-3 text-white bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg hover:scale-105 transform transition-all duration-300"
        >
          <FaHome className="mr-2" />
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
