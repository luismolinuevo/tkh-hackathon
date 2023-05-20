import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//template
import NavAndFooter from "./templates/NavAndFooter";

//loaders
import { getPosts } from "./loaders";

//components
import Home from "./pages/Home";
import Form from "./pages/Form";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import AiPage from "./pages/AiPage"
import Incentives from "./pages/Incentives";
import Faves from "./pages/Favs"


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavAndFooter />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: getPosts
        },
        {
          path: "/form",
          element: <Form />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/posts",
          element: <Posts />,
        },
        {
          path: "/askai",
          element: <AiPage/>
        },
        {
          path: "/favs",
          element: <Faves/>
        }
      ],
    },
    {
      path: "/incentives",
      element: <Incentives />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
