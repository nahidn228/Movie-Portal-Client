import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { FaVk } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#131720] text-white py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pl-4">
        {/* Column 1: About Section */}
        <div data-aos="fade-up" data-aos-duration="1000">
          <h1
            className="text-white text-xl md:text-4xl font-extrabold tracking-widest transform transition duration-1000 ease-in-out"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Movie Portal
          </h1>
          <p className="text-gray-400 py-6">
            Discover, explore, and manage your favorite movies effortlessly.
            Your one-stop portal for all things movies!
          </p>

          <a href="/contact" className="text-blue-500 hover:underline">
                Contact our support team
              </a>
        </div>

        {/* Column 2: Navigation Links */}
        <div data-aos="fade-up" data-aos-duration="1200">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="hover:text-yellow-500 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/all-movies"
                className="hover:text-yellow-500 transition duration-300"
              >
                All Movies
              </a>
            </li>
            <li>
              <a
                href="/popular-movies"
                className="hover:text-yellow-500 transition duration-300"
              >
                Popular
              </a>
            </li>
            <li>
              <a
                href="/pricing"
                className="hover:text-yellow-500 transition duration-300"
              >
                Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Media Links */}
        <div data-aos="fade-up" data-aos-duration="1400">
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:text-blue-600 bg-blue-400 border-none btn btn-sm rounded-full transition duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="hover:text-blue-400 bg-blue-400 border-none btn btn-sm rounded-full transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              className="hover:text-pink-600 btn btn-sm bg-blue-400 border-none rounded-full transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://vk.com/"
              target="_blank"
              className="hover:text-pink-600 btn btn-sm bg-blue-400 border-none rounded-full transition duration-300"
            >
              <FaVk />
            </a>
            <a
              href="https://www.tiktok.com/en/"
              target="_blank"
              className="hover:text-pink-600 transition duration-300 btn btn-sm bg-blue-400 border-none rounded-full"
            >
              <FaTiktok />
            </a>
          </div>
          <div className="my-6">
            <div className="join">
              <input
                className="input bg-[#1F2937] input-bordered join-item"
                placeholder="Email"
              />
              <button className="btn join-item bg-[#151F30] rounded-r-full border-0 text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="divider divider-neutral my-10 "></div>

      {/* Footer Bottom */}
      <div className=" text-center text-white text-sm flex justify-between">
        <div>
          {" "}
          <p>© {new Date().getFullYear()} Movie Portal. All Rights Reserved.</p>
        </div>
        <div className="flex gap-4">
          <Link>Privacy policy</Link>
          <Link> Terms and conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
