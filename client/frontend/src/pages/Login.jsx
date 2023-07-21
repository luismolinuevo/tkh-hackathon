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
    <div>
      <div className='bg-[#E5EBE1]'>
        <h1>Welcome Back</h1>
        <form action="">
          <input type="text" onChange={e => setUsername(e.target.value)}/>
          <input type="text"onChange={e => setPassword(e.target.value)}/>
          <button onClick={handleLogin}>Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login