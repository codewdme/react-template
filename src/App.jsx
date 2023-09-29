import React from "react";
import Footer from "./components/Footer";
import Headroom from "react-headroom";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage";

const App = () => {
  return (
    <div className="dark:bg-black">
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
