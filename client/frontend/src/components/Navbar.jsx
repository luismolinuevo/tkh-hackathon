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

  console.log(price)
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
          {/* <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="mr-5 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={toggleCollapse}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button> */}
          <div
            className={
              // {`${collapse ? "block" : "hidden"} w-full mdlg:block md:w-auto `}
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
                {/* <button
                  data-collapse-toggle="navbar-default"
                  type="button"
                  className="mr-5 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                  onClick={toggleCollapse}
                >
                  <span class="sr-only">Open main menu</span>
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button> */}
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
