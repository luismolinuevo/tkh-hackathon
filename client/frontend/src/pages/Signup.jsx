import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "../redux/auth";

export default function Signup() {
  //Handle signup Credentials
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(signupUser(email, username, password));
  };

  return (
    <div className=" w-full h-min-full flex flex-col relative items-center">
      <div className="flex justify-center items-center mb-3">
        {" "}
        <img src="/recycle.svg" className="h-[78px] w-[78px]" alt="TEMP LOGO" />
        <span className="self-center font-semibold text-4xl whitespace-nowrap text-green-highlight">
          Bloomin
        </span>
      </div>
      <div
        style={{ backgroundImage: "url('/minimalist-leaf.jpg')" }}
        className="hidden md:block md:absolute w-[680px] h-[302px] bottom-0 right-0"
      ></div>
      <div className="flex flex-col  lg:flex-row gap-[3rem]">
        <div className="z-50 items-center flex flex-col bg-light-green-background md:p-[5rem] md:h-[550px] p-[2rem] xl:m-5 rounded-[.75rem]   xl:w-[520px] xl:h-[680px] w-[440px] h-[500px]">
          <h1 className="text-4xl font-semibold">Welcome Back</h1>
          <form className=" xl:mt-[4rem] mt-[2rem]  flex flex-col items-center gap-[22px] w-full">
            <input
              className="outline-none indent-3 border w-full tracking-wide text-lg font-medium h-[3rem] p-2 placeholder-black rounded-[8px]"
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="outline-none indent-3 border w-full tracking-wide text-lg font-medium h-[3rem] p-2 placeholder-black rounded-[8px]"
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="flex flex-col justify-center items-center gap-3">
              <button
                className="flex justify-center items-center mt-[24px] h-[2.75rem] text-xl text-white font-semibold bg-green-background rounded-[2.5rem] w-[180px]"
                onClick={handleSignup}
              >
                Log In
              </button>
              <div className="font-medium cursor-pointer">
                Forgot Your Username?
              </div>
              <div className="font-medium cursor-pointer">
                Forgot Your Password?
              </div>
            </div>
          </form>
        </div>
        <div className="z-50 self-center w-3/4 lg:w-[1px] lg:self-auto border"></div>
        <div className="z-50 items-center flex flex-col bg-light-green-background md:p-[5rem] md:h-[550px] p-[2rem] xl:m-5 rounded-[.75rem]   xl:w-[520px] xl:h-[680px] w-[440px] h-[500px]">
          <h1 className="text-4xl font-semibold">Sign Up</h1>
          <form className=" xl:mt-[4rem] mt-[2rem]  flex flex-col items-center gap-[22px] w-full">
            <input
              className="outline-none indent-3 border w-full tracking-wide text-lg font-medium h-[3rem] p-2 placeholder-black rounded-[8px]"
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="outline-none indent-3 border w-full tracking-wide text-lg font-medium h-[3rem] p-2 placeholder-black rounded-[8px]"
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="outline-none indent-3 border w-full tracking-wide text-lg font-medium h-[3rem] p-2 placeholder-black rounded-[8px]"
              type="text"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="outline-none indent-3 border w-full tracking-wide text-lg font-medium h-[3rem] p-2 placeholder-black rounded-[8px]"
              type="text"
              placeholder="Confirm Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="flex justify-center items-center mt-[24px] h-[2.75rem] text-xl text-white font-semibold bg-green-background rounded-[2.5rem] w-[180px]"
              onClick={handleSignup}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
