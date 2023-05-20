import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
const NavAndFooter = () => {
  return (
    <div class="h-full">
          <Navbar />
          <main className="flex justify-center h-full">
              <Outlet />
          </main>
          {/* <div>This is the footer</div> */}
    </div>
  );
};

export default NavAndFooter;
