import React, { useState } from "react";
import useUserLocation from "../hooks/useUserLocation.jsx";
import useWeatherInfo from "../hooks/useWeatherInfo.jsx";
import useEnergyPrices from "../hooks/useEnergyPrices.jsx";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import HumidityIcon from "../../public/humiditysvg.svg"
const LoggedIn = true;

const Navbar = () => {
  const { city } = useUserLocation();
  const { temperature, humidity } = useWeatherInfo(city);
  const { price } = useEnergyPrices();
  const [collapse, setCollapse] = useState(true);
  const [isOpen, setOpen] = useState(false);
  function toggleCollapse() {
    setCollapse(!collapse);
  }

  return (
    <div>
      <nav class="bg-white border-gray-200 dark:bg-gray-900 font-poppins w-full relative">
        <div class=" flex flex-wrap items-center justify-between md:px-10 w-full  ">
          <NavLink href="/" className=" m-4 flex items-center">
            <img
              src="/recycle.svg"
              className="h-[88px] w-[88px]"
              alt="TEMP LOGO"
            />
            <span className="self-center text-4xl font-semibold whitespace-nowrap text-green-highlight">
              Bloomin
            </span>
          </NavLink>
          <div className="border-2 rounded-xl px-5 py-3 hidden md:block">
            {city} | {temperature}&#8457; | {humidity}% Humidity { } | {price}&cent;/kHw
          </div>
          <div className="mr-5 md:hidden ">
            <Hamburger
              color="#41D261"
              rounded
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>
          <div
            className={
              `${
                !isOpen ? "translate-x-full" : "-translate-x-0"
              } w-full mdlg:block md:w-auto  duration-300 sm:duration-0 fixed md:relative bg-white top-0 z-40  md:translate-x-0`
            }
            id="navbar-default "
          >
            <ul
              className="w-full flex flex-col p-4 md:p-0 border border-gray-100 rounded-lg bg-dull-green-background md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white text-lg font-semibold items-end
            "
            >
              <div className="md:hidden flex w-full items-center justify-between">
                <div className="mr-5 md:hidden  border-black">
                  <Hamburger
                    color="#41D261"
                    rounded
                    toggled={isOpen}
                    toggle={setOpen}
                  />
                </div>
                <NavLink href="/" className=" flex items-center">
                  <img
                    src="/recycle.svg"
                    className="h-[88px] w-[88px]"
                    alt="TEMP LOGO"
                  />
                  <span className="self-center text-4xl font-semibold whitespace-nowrap text-green-highlight">
                    Bloomin
                  </span>
                </NavLink>
              </div>

              <li className="flex justify-end w-full">
                <NavLink
                  to="/"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#41D261" : "",
                    };
                  }}
                  className="flex justify-end w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-slate-50 md:hover:bg-transparent md:border-0  md:p-0 "
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>

              <li className="flex justify-end w-full">
                <NavLink
                  to="/posts"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#41D261" : "",
                    };
                  }}
                  className=" flex justify-end w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-slate-50 md:hover:bg-transparent md:border-0  md:p-0 "
                >
                  Browse
                </NavLink>
              </li>
              <li className="flex justify-end w-full">
                <NavLink
                  to="/favorites"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#41D261" : "",
                    };
                  }}
                  className="flex justify-end w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-slate-50 md:hover:bg-transparent md:border-0  md:p-0 "
                >
                  Favorites
                </NavLink>
              </li>
              <li className="flex justify-end w-full">
                <NavLink
                  to="/askai"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#41D261" : "",
                    };
                  }}
                  className="flex justify-end w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-slate-50 md:hover:bg-transparent md:border-0  md:p-0 "
                >
                  AskAi
                </NavLink>
              </li>
              <li className="flex justify-end w-full">
                <NavLink
                  to="/incentives"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#41D261" : "",
                    };
                  }}
                  className="flex justify-end w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-slate-50 md:hover:bg-transparent md:border-0  md:p-0 "
                >
                  Incentives
                </NavLink>
              </li>
              <li className="flex justify-end w-full">
                <NavLink
                  to="/profile"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#41D261" : "",
                    };
                  }}
                  className="flex justify-end w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-slate-50 md:hover:bg-transparent md:border-0  md:p-0 "
                >
                  Profile
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
