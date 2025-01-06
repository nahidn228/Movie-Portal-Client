const Footer = () => {
  return (
    <footer className="bg-[#131720] text-white py-10">
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
                href="/add-movie"
                className="hover:text-yellow-500 transition duration-300"
              >
                Add Movie
              </a>
            </li>
            <li>
              <a
                href="/favorites"
                className="hover:text-yellow-500 transition duration-300"
              >
                My Favorites
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
              className="hover:text-blue-600 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 2a2 2 0 00-2 2v2H9V4a2 2 0 00-2-2H5a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-2z"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-blue-400 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 19c7.5 0 11-6.75 11-12.75 0-.2 0-.4-.025-.6A7.836 7.836 0 0020 4.527a7.648 7.648 0 01-2.22.607 3.74 3.74 0 001.646-2.067 7.73 7.73 0 01-2.414.916A3.71 3.71 0 0014 3.133c-2.118 0-3.83 1.706-3.83 3.81 0 .3.038.6.115.876A10.55 10.55 0 013 6.184a3.734 3.734 0 001.146 4.96 3.746 3.746 0 01-1.735-.48v.047a3.704 3.704 0 003.019 3.637A3.703 3.703 0 013 16.34c-.7 0-1.36-.087-2-.258 1.37.87 3.011 1.3 4.635 1.3z"
                />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              className="hover:text-pink-600 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7.5 2A5.5 5.5 0 002 7.5v9A5.5 5.5 0 007.5 22h9A5.5 5.5 0 0022 16.5v-9A5.5 5.5 0 0016.5 2h-9zM12 16.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm0-7a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm4-2.5a1 1 0 111-1 1 1 0 010 2 1 1 0 01-1-1z"
                />
              </svg>
            </a>
          </div>
          <div className="my-6">
            <div className="join">
              <input
                className="input bg-[#1F2937] input-bordered join-item"
                placeholder="Email"
              />
              <button className="btn join-item bg-[#2563EB] rounded-r-full border-0 text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Movie Portal. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
