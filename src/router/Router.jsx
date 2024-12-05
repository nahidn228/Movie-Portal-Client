import { createBrowserRouter } from "react-router-dom";
import FeaturedMovies from "../components/FeaturedMovies";
import UpcomingMovie from "../components/UpcomingMovie";
import MainLayout from "../layout/MainLayout";
import AddMovies from "../pages/AddMovies";
import AllMovies from "../pages/AllMovies";
import CardDetails from "../pages/CardDetails";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyFavorite from "../pages/MyFavorite";
import Register from "../pages/Register";

import PrivateRoute from "./PrivateRoute/PrivateRoute";
import NotFound from "../pages/NotFound";
import Blog from "../pages/Blog";

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
        loader: () => fetch("http://localhost:5000/movies"),
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
        path: "/favorites",
        element: (
          <PrivateRoute>
            <MyFavorite></MyFavorite>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/favorite-movies"),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
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
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
      {
        path: "/all-movies/:id",
        element: (
          <PrivateRoute>
            <CardDetails></CardDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/movies"),
      },
    ],
  },
]);

export default router;
