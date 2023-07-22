import React, { useState } from "react";
import useUserLocation from "../hooks/useUserLocation.jsx";
import useWeatherInfo from "../hooks/useWeatherInfo.jsx";
import useEnergyPrices from "../hooks/useEnergyPrices.jsx";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import HumidityIcon from "../../public/humiditysvg.svg";
const LoggedIn = true;

const Navbar = () => {
  const { city } = useUserLocation();
  const { temperature, humidity } = useWeatherInfo(city);
  const { price } = useEnergyPrices();
  const [collapse, setCollapse] = useState(true);
  const [isOpen, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function toggleCollapse() {
    setCollapse(!collapse);
  }

  return (
    <div>
      <nav class="bg-white border-gray-200 dark:bg-gray-900 font-poppins text-lg w-full relative">
        <div class="  flex flex-wrap  items-center justify-between lg:px-10 w-full  ">
          <NavLink href="/" className=" m-4 flex items-center">
            <img
              src="/recycle.svg"
              className="h-[88px] w-[88px]"
              alt="TEMP LOGO"
            />
            <span className="self-center font-bold text-4xl whitespace-nowrap text-green-highlight">
              Bloomin
            </span>
          </NavLink>
          <div className=" border-2 rounded-xl px-5 py-3 hidden xxl:block">
            {city} | {temperature}&#8457; | {humidity}% Humidity {} | {price}
            &cent;/kHw
          </div>
          <div className="mr-5 lg:hidden ">
            <Hamburger
              color="#41D261"
              rounded
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>

          <div
            className={`${
              !isOpen ? "translate-x-full" : "-translate-x-0"
            }  w-full lg:block lg:w-auto  duration-300 sm:duration-0 fixed lg:relative bg-white top-0 z-40  lg:translate-x-0`}
            id="navbar-default "
          >
            <ul
              className="w-full flex flex-col p-4 lg:p-0 border border-gray-100 rounded-lg bg-dull-green-background  lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white   text-lg font-[600] items-center
            "
            >
              <div className=" lg:hidden flex w-full items-center justify-between">
                <div className="mr-5 lg:hidden  border-black">
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
                  to="/home"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#41D261" : "",
                    };
                  }}
                  className="flex justify-end w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-slate-50 lg:hover:bg-transparent lg:border-0  lg:p-0 "
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
                  className=" flex justify-end w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-slate-50 lg:hover:bg-transparent lg:border-0  lg:p-0 "
                >
                  Browse
                </NavLink>
              </li>
              {isLoggedIn && (
                <li className="flex justify-end w-full">
                  <NavLink
                    to="/favorites"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#41D261" : "",
                      };
                    }}
                    className="flex justify-end w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-slate-50 lg:hover:bg-transparent lg:border-0  lg:p-0 "
                  >
                    Saved
                  </NavLink>
                </li>
              )}
              {isLoggedIn && (
                <li className="flex justify-end w-full">
                  <NavLink
                    to="/askai"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#41D261" : "",
                      };
                    }}
                    className="flex justify-end w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-slate-50 lg:hover:bg-transparent lg:border-0  lg:p-0 "
                  >
                    AskAi
                  </NavLink>
                </li>
              )}
              <li className="flex justify-end w-full">
                <NavLink
                  to="/incentives"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#41D261" : "",
                    };
                  }}
                  className="flex justify-end w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-slate-50 lg:hover:bg-transparent lg:border-0  lg:p-0 "
                >
                  Programs
                </NavLink>
              </li>
              <li className="flex justify-end w-full ">
                {isLoggedIn ? (
                  <NavLink
                    to="/profile"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#41D261" : "",
                      };
                    }}
                    className="flex justify-end w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-slate-50 lg:hover:bg-transparent lg:border-0     lg:p-0 "
                  >
                    Profile
                  </NavLink>
                ) : (
                  <NavLink
                    to="/signup"
                    style={({ isActive }) => {
                      return {
                        // color: isActive ? "#41D261" : "",
                      };
                    }}
                      className="  flex justify-center mt-2 lg:mt-0  items-center w-[110px] h-[40px]  rounded text-black   duration-200  shadow-md hover:shadow-hover  border lg:p-0 hover:-translate-y-[2px] 
                    
                      
                        "
                  >
                    Sign Up
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className=" border-2   rounded-xl text-center w-[420px] md:w-[460px] ms-auto me-auto  text-md md:text-lg px-2 md:px-5 py-3 mb-5 xxl:hidden">
          {city} | {temperature}&#8457; | {humidity}% Humidity {} | {price}
          &cent;/kHw
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
