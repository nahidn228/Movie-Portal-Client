import { createBrowserRouter } from "react-router-dom";
import FeaturedMovies from "../components/FeaturedMovies";
import UpcomingMovie from "../components/UpcomingMovie";
import MainLayout from "../layout/MainLayout";
import AddMovies from "../pages/AddMovies";
import AllMovies from "../pages/AllMovies";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyFavorite from "../pages/MyFavorite";
import Register from "../pages/Register";
import TopRated from "../pages/TopRated";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/",
        element: <UpcomingMovie></UpcomingMovie>,
        
      },
      {
        path: "/",
        element: <FeaturedMovies></FeaturedMovies>,
        loader: () => fetch("http://localhost:5000/featuredMovies"),
      },
      {
        path: "/all-movies",
        element: <AllMovies></AllMovies>,
        loader: () => fetch("http://localhost:5000/movies"),
      },
      {
        path: "/add-movie",
        element: <AddMovies></AddMovies>,
      },
      {
        path: "/favorites",
        element: <MyFavorite></MyFavorite>,
      },
      {
        path: "/top-rated",
        element: <TopRated></TopRated>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword></ForgotPassword>,
      },
    ],
  },
]);

export default router;
