import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//template
import NavAndFooter from "./templates/NavAndFooter";

//loaders
import { getIncentives, getPosts } from "./loaders";

//components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import AiPage from "./pages/AiPage";
import Incentives from "./pages/Incentives";
import Faves from "./pages/Favs";
import Profile from "./pages/Profile";
import LandingPage from "./pages/LandingPage";
import ErrorBoundary from "./components/ErrorBoundary";
import Signup from "./pages/Signup";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavAndFooter />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
          
        },
        {
          path: "/home",
          element: <Home />,
          loader: getPosts,
          errorElement: <ErrorBoundary />
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup/>
        },
        {
          path: "/posts",
          element: <Posts />,
          loader: getPosts,
          errorElement: <ErrorBoundary />
        },
        {
          path: "/askai",
          element: <AiPage />,
        },
        {
          path: "/favorites",
          element: <Faves />,
        },
        {
          path: "/profile",
          element: <Profile />,
          loader: getPosts,
          errorElement: <ErrorBoundary />
          
        },
        {
          path: "/incentives",
          element: <Incentives />,
          // loader: getIncentives
        },
      ],
    },

    // {
    //   path: "/profile",
    //   element: <Profile />,
    //   loader: getPosts,
    // },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
