import React from "react";
import DarkModeSwitch from "./DarkModeSwitch";

const Navbar = () => {
  return (
    <div className="dark:bg-black dark:text-white">
      <DarkModeSwitch />
    </div>
  );
};

export default Navbar;
