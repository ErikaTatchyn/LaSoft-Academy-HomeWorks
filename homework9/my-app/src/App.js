import React from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

import "./App.css";
import Courses from "./pages/Courses";
import Teachers from "./pages/Teachers";
import About from "./pages/About";
import Course from "./pages/Course";

function App() {
  return (
    <div>
      <Header />
      <Course />
      <Footer />
    </div>
  );
}

export default App;
