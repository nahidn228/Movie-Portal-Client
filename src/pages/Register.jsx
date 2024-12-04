import { useContext, useState } from "react";
import {
  FaCamera,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaLock,
  FaUser,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, loginWithGoogle, updateUser, setUser, setLoading } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    //Password Validation

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;

    if (!passwordRegex.test(password)) {
      alert(
        "Your password should contain, Uppercase Lowercase and Length must be at least 6 character "
      );
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        const user = userCredential.user;
        const createdAt = user?.metadata?.creationTime;
        console.log(user, createdAt);

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });

            Swal.fire({
              title: `${user?.displayName} Your account created successfully`,
              showClass: {
                popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `,
              },
              hideClass: {
                popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `,
              },
            });
            navigate("/");
            //clear form
            e.target.reset();
          })
          .catch((err) => {
            console.log(err);
          });

        //clear form
        e.target.reset();

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        setLoading(false);
      });
  };

  const handleGoogleRegister = () => {
    loginWithGoogle()
      .then((result) => {
        setUser(result.user);
        const user = result.user;
        console.log(user);
        navigate(location?.state ? location.state : "/");

        Swal.fire({
          title: `${user?.displayName} Your account created successfully`,
          showClass: {
            popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
          },
          hideClass: {
            popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
          },
        });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode);
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-gray-800 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-10 transform transition-all duration-1000 ease-in-out hover:scale-105">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Register to Movie Portal
        </h2>
        <form onSubmit={handleRegister} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg mt-2 p-3 bg-gray-50">
              <FaUser className="text-gray-500 mr-3" />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your full name"
                required
                className="w-full focus:outline-none bg-transparent placeholder-gray-500"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg mt-2 p-3 bg-gray-50">
              <FaEnvelope className="text-gray-500 mr-3" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
                className="w-full focus:outline-none bg-transparent placeholder-gray-500"
              />
            </div>
          </div>

          {/* Photo URL Field */}
          <div>
            <label
              htmlFor="photoURL"
              className="block text-sm font-medium text-gray-700"
            >
              Photo URL
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg mt-2 p-3 bg-gray-50">
              <FaCamera className="text-gray-500 mr-3" />
              <input
                type="text"
                name="photo"
                id="photo"
                placeholder="Enter your photo URL"
                required
                className="w-full focus:outline-none bg-transparent placeholder-gray-500"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg mt-2 p-3 bg-gray-50">
              <FaLock className="text-gray-500 mr-3" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                className="w-full focus:outline-none bg-transparent placeholder-gray-500"
              />
              <button
                type="button"
                onClick={handleTogglePassword}
                className="focus:outline-none text-gray-500 ml-3"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold rounded-lg shadow-md hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
          >
            Register
          </button>
        </form>
        {/* Google Sign Up Button */}
        <button
          type="button"
          onClick={handleGoogleRegister}
          className="w-full py-3 mt-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
        >
          Register with Google
          <FaGoogle className="m-0 p-0" />
        </button>

        <p className="text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-yellow-400 font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
