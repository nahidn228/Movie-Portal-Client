import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddMovies from "../pages/AddMovies";
import AllMovies from "../pages/AllMovies";
import Home from "../pages/Home";
import MyFavorite from "../pages/MyFavorite";
import TopRated from "../pages/TopRated";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
        path: "all-movies",
        element: <AllMovies></AllMovies>,
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
    ],
  },
]);

export default router;
