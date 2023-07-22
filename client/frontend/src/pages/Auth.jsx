import React from "react";
import Signup from "./Signup";
import Login from "./Login";

const Auth = () => {
  return (
    <>
      <div className=" w-full h-min-full flex flex-col relative items-center">
        <div className="flex justify-center items-center mb-3">
          {" "}
          <img
            src="/recycle.svg"
            className="h-[78px] w-[78px]"
            alt="TEMP LOGO"
          />
          <span className="self-center font-semibold text-4xl whitespace-nowrap text-green-highlight">
            Bloomin
          </span>
        </div>
        <div
          style={{ backgroundImage: "url('/minimalist-leaf.jpg')" }}
          className="hidden md:block md:absolute w-[680px] h-[302px] bottom-0 right-0"
        ></div>
        <div className="flex flex-col  lg:flex-row gap-[3rem]">
          <Login />
          <div className="z-50 self-center w-3/4 lg:w-[1px] lg:self-auto border"></div>
          <Signup />
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Auth;
