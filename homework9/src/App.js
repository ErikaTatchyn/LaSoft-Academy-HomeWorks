import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Courses from "./pages/Courses/Courses";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import Teachers from "./pages/Teachers/Teachers";
import About from "./pages/About/About";
import Root from "./Root";
import Apply from "./pages/Apply/Apply";

import "./App.css";
import Confirmation from "./pages/Confirmation/Confirmation";
import SubscribeModal from "./components/SubscribeModal/SubscribeModal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courses/:id",
        element: <CourseDetails />,
      },
      {
        path: "/teachers",
        element: <Teachers />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/apply",
        element: <Apply />,
      },
      {
        path: "/confirmation",
        element: <Confirmation />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
