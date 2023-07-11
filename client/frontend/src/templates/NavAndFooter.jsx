import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
const NavAndFooter = () => {
  return (
    <div class="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex justify-center grow ">
              <Outlet />
          </main>
          {/* <div>This is the footer</div> */}
    </div>
  );
};

export default NavAndFooter;
