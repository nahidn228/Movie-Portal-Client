import { createBrowserRouter } from "react-router-dom";
import FeaturedMovies from "../components/FeaturedMovies";
import ReactForm from "../components/ReactForm";
import UpcomingMovie from "../components/UpcomingMovie";
import MainLayout from "../layout/MainLayout";
import AddMovies from "../pages/AddMovies";
import AllMovies from "../pages/AllMovies";
import CardDetails from "../pages/CardDetails";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import MyFavorite from "../pages/MyFavorite";
import Register from "../pages/Register";

import Blog from "../pages/Blog";
import NotFound from "../pages/NotFound";
import PopularMovies from "../pages/PopularMovies";
import UpdateMovie from "../pages/UpdateMovie";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Pricing from "../pages/Pricing";

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
      },
      {
        path: "/all-movies",
        element: <AllMovies></AllMovies>,
        loader: () => fetch("https://full-stack-go.vercel.app/movies"),
      },
      {
        path: "/add-movie",
        element: (
          <PrivateRoute>
            <AddMovies></AddMovies>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-movie",
        element: (
          <PrivateRoute>
            <UpdateMovie></UpdateMovie>
          </PrivateRoute>
        ),
      },
      {
        path: "/favorites",
        element: (
          <PrivateRoute>
            <MyFavorite></MyFavorite>
          </PrivateRoute>
        ),
        loader: () => fetch("https://full-stack-go.vercel.app/favorite-movies"),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <ReactForm></ReactForm>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword></ForgotPassword>,
      },
      {
        path: "/featured-movies",
        element: <FeaturedMovies></FeaturedMovies>,
      },
      {
        path: "/popular-movies",
        element: <PopularMovies></PopularMovies>,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },

      {
        path: "/all-movies/:id",
        element: <CardDetails></CardDetails>,
        loader: () => fetch("https://full-stack-go.vercel.app/movies"),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;
