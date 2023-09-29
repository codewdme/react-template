import React from "react";
import Footer from "./components/Footer";
import Headroom from "react-headroom";
import Navbar from "./components/Navigation/Navbar";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <div className="dark:bg-black dark:text-white">
      <Headroom>
        <Navbar />
      </Headroom>
      <Routes>
        <Route path="/" element={<Homepage />} />{" "}
      </Routes>
    </div>
  );
};

export default App;
