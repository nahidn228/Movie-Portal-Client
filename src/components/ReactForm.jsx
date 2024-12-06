import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaLock,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginWithGoogle, loginUser, setLoading, setEmail } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    setEmail(email);

    loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        reset(); // Clear the form

        navigate(location?.state?.from || "/");
        Swal.fire({
          title: "Successfully Logged-in",
          text: `${user?.displayName || "User"} successfully logged in!`,
          icon: "success",
        });
      })
      .catch((error) => {
        console.error(error.code);
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);

        navigate(location?.state?.from || "/");
        Swal.fire({
          title: "Successfully Logged-in",
          text: `${user?.displayName || "User"} successfully logged in!`,
          icon: "success",
        });
      })
      .catch((error) => {
        console.error(error.code);
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-gray-800 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-10 transform transition-all duration-1000 ease-in-out hover:scale-105">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Sign In to Movie Portal
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black"
            >
              Email Address
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg mt-2 p-3 bg-gray-50">
              <FaEnvelope className="text-gray-500 mr-3" />
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full focus:outline-none bg-transparent placeholder-gray-500"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email address",
                  },
                })}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-black"
            >
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg mt-2 p-3 bg-gray-50">
              <FaLock className="text-gray-500 mr-3" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className="w-full focus:outline-none bg-transparent placeholder-gray-500"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              <button
                type="button"
                onClick={handleTogglePassword}
                className="focus:outline-none text-gray-500 ml-3"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
            <button
              type="button"
              onClick={() => navigate("/forgotPassword")}
              className="text-sm text-yellow-400 mt-2 hover:underline focus:outline-none"
            >
              Forgot Password?
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold rounded-lg shadow-md hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
          >
            Sign In
          </button>
        </form>

        {/* Google Login */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full py-3 mt-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
        >
          Login with Google
          <FaGoogle className="m-0 p-0" />
        </button>

        <p className="text-center text-black mt-4">
          Do not have an account?{" "}
          <Link
            to="/register"
            className="text-yellow-400 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
