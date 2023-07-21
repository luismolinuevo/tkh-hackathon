import React, {useState} from 'react'
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
    <div>
        <div>
            <h1>Sign Up</h1>
            <form>
                <input type="text" placeholder='Email' onChange={e => setEmail(e.target.value)}/>
                <input type="text" placeholder='Username' onChange={e => setUsername(e.target.value)}/>
                <input type="text" placeholder='password' onChange={e => setPassword(e.target.value)}/>
                <button onClick={handleSignup}>Sign Up</button>
            </form>
        </div>
    </div>
  )
}
