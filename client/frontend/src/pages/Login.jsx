import { useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isAuthed = useSelector((state) => state.auth.isLoggedIn)

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(username, password));
    if(isAuthed) {
      navigate("/")
    }
  };

  return (
    // <div>
    //   <div className='bg-[#E5EBE1]'>
    //     <h1>Welcome Back</h1>
    //     <form action="">
    //       <input type="text" onChange={e => setUsername(e.target.value)}/>
    //       <input type="text"onChange={e => setPassword(e.target.value)}/>
    //       <button onClick={handleLogin}>Log In</button>
    //     </form>
    //   </div>
    // </div>
    <div className="z-50 items-center flex flex-col bg-light-green-background md:p-[5rem] md:h-[550px] p-[2rem] xl:m-5 rounded-[.75rem]   xl:w-[520px] xl:h-[680px] w-[440px] h-[500px]">
          <h1 className="text-4xl font-semibold">Welcome Back</h1>
          <form className=" xl:mt-[4rem] mt-[2rem]  flex flex-col items-center gap-[22px] w-full">
            <input
              className="outline-none indent-3 border w-full tracking-wide text-lg font-medium h-[3rem] p-2 placeholder-black rounded-[8px]"
              type="text"
              placeholder="Username"
              onChange={e => setUsername(e.target.value)}
            />
            <input
              className="outline-none indent-3 border w-full tracking-wide text-lg font-medium h-[3rem] p-2 placeholder-black rounded-[8px]"
              type="text"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex flex-col justify-center items-center gap-3">
              <button
                className="flex justify-center items-center mt-[24px] h-[2.75rem] text-xl text-white font-semibold bg-green-background rounded-[2.5rem] w-[180px]"
                onClick={handleLogin}
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
        
  )
}

export default Login