import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
const NavAndFooter = () => {
  return (
    <div>
          <Navbar />
          <main>
              <Outlet />
          </main>
          <div>This is the footer</div>
    </div>
  );
};

export default NavAndFooter;
