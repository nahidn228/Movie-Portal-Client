import { useContext } from "react";
import { NavLink } from "react-router-dom";
import navImg from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  console.log(user);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("sign out success");
      })
      .catch(() => {
        // An error happened.
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className="hover:text-accent font-semibold transition duration-300"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-movies"
          className="hover:text-accent font-semibold transition duration-300"
        >
          All Movies
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-movie"
          className="hover:text-accent font-semibold transition duration-300"
        >
          Add Movie
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/favorites"
          className="hover:text-accent font-semibold transition duration-300"
        >
          My Favorites
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/top-rated"
          className="hover:text-accent font-semibold transition duration-300"
        >
          Top Rated
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-white lg:hidden"
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white text-black rounded-box mt-3 w-52 p-2 shadow-lg"
          >
            {navLinks}
          </ul>
        </div>
        <NavLink
          to="/"
          className="btn btn-ghost normal-case text-2xl font-extrabold text-white hover:text-yellow-300"
        >
          MOVIE PORTAL
        </NavLink>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{navLinks}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end space-x-3">
        {!user ? (
          <>
            <NavLink
              to="/login"
              className="btn btn-sm bg-yellow-400 text-black hover:bg-yellow-500 hover:text-white transition duration-300"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="btn btn-sm bg-green-400 text-black hover:bg-green-500 hover:text-white transition duration-300"
            >
              Register
            </NavLink>
          </>
        ) : (
          <div className="flex gap-4">
            {user && user?.photoURL ? (
              <div className="relative inline-block group">
                {/* User img */}
                {/* <p>{user?.email}</p> */}
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src={user?.photoURL}
                  alt=""
                />
                {/* hover user name */}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  {user.displayName}
                </span>
              </div>
            ) : (
              <div className="relative inline-block group">
                {/* default image */}
                <img className="rounded-full" src={navImg} alt="" />
                {/* hover user name */}
              </div>
            )}

            <button
              onClick={handleSignOut}
              className="btn btn-sm bg-red-500 text-white hover:bg-red-600 transition duration-300"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
