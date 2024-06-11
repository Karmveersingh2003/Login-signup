import React from 'react'
import "./signup.css"
import { FaUser ,FaLock} from "react-icons/fa";
import {useState} from 'react'; 
function Login() {
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");
    // const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    // if (regEx.test(email)) {
    //   setMessage("Email is Valid");
    // } else if (!regEx.test(email) && email !== "") {
    //   setMessage("Email is Not Valid");
    // } else {
    //   setMessage("");
    // }const handleOnChange = (e) => {
    //     setEmail(e.target.value);
    //   };
  return (
<>



<div id='login-sing'>
            <div className='wrapperr'>
                <form action="">
                    <h1>Sign-up</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Enter your Name' required />
                        
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder='Enter your Username' required />
                        <FaUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder='Email'   />
                        {/* <button onClick={emailValidation}>Check</button> */}
                       

                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' required />
                        <FaLock className="icon" />

                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Confirm Password' required />
                       

                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>
                    <button type="submit">Login</button>
                    <div className="register-link">
                        <p>Have an account? <a href="/">Login</a></p>
                    </div>
                </form>
            </div>
            </div>

</> 
 )
}

export default Login