import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { getMovie } from "./api/GetMovies";
import { MovieDetails } from "./pages/MovieDetails";
import { getMovieDetails } from "./api/getMovieDetails";
import { Contact } from "./pages/Contact";
import { Cart } from "./pages/Cart";
import { SignIn } from "./pages/Signin";
import { SignUp } from "./pages/SignUp";
import "./index.css";
import "./App.css";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        // {
        //   path: "/signin",
        //   element: <SignIn />,
        // },
        // {
        //   path: "/signup",
        //   element: <SignUp />,
        // },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: getMovie,
        },
        {
          path: "/movie/:movieID",
          element: <MovieDetails />,
          loader: getMovieDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
