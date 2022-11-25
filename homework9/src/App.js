import React from "react";

import Burger from "./components/Burger";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Burger />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
