import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//components
import Home from "./pages/Home";
import Form from "./pages/Form";
import Login from "./pages/Login";
import Posts from "./pages/Posts";

//template
import NavAndFooter from "./templates/NavAndFooter";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavAndFooter />,
      children: [
        {
          path: "/",
          element: <Home />,
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
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
