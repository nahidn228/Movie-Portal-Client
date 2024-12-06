import { useContext } from "react";
import { FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet";
const ForgotPassword = () => {
  const { email, resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    resetPassword(email)
      .then((result) => {
        console.log(result);
        navigate("/login");

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Password reset link sent to your email",
          showConfirmButton: false,
          timer: 1500,
        });

        //clear form
        e.target.reset();
      })

      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${errorCode}`,
        });
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-gray-800 flex items-center justify-center p-6">
        <Helmet>
        <meta charSet="utf-8" />
        <title>Reset Password - MOVIE PORTAL</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      
      
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10 transform transition-all duration-1000 ease-in-out hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Forgot Password
        </h2>
        <form onSubmit={handleForgotPassword} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg mt-2 p-3 bg-gray-50">
              <FaEnvelope className="text-gray-500 mr-3" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                defaultValue={email}
                required
                className="w-full focus:outline-none bg-transparent placeholder-gray-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold rounded-lg shadow-md hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
          >
            Send Reset Email
          </button>
        </form>

        <button
          onClick={() => navigate("/login")}
          className="mt-4 w-full text-sm text-gray-500 hover:text-yellow-400 hover:underline focus:outline-none"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
