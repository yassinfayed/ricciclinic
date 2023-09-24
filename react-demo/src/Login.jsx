import React, { useState } from "react";
import Navbaro from "./Navbar";
import 'font-awesome/css/font-awesome.min.css';
import logoreal from './realogo.png'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

  const [isSignUpMode, setSignUpMode] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [error, setError] = useState("");

  const handleSignInClick = () => {
    setSignUpMode(false);
  };

  const handleSignUpClick = () => {
    setSignUpMode(true);
  };

  const navigate = useNavigate();

  const gotoForget = () => {
    navigate("/forgetpassword");
  }


  const handleForm = () => {
    setFormSubmitted(false);
  }


  

  const handleSignup = (event) => {
    event.preventDefault();
    setError("");

    const phoneNumber = document.querySelector("#phone").value;
    const password = document.querySelector("#pass").value;
    const name = document.querySelector("#name").value
    const confirm  = document.querySelector("#confirm").value;
    const email = document.querySelector("#email").value;

    axios.post("http://localhost:8800/signup",{
      phoneNumber,
      password,
      name,
      confirm,
      email
    })
    .then((response) => {
      if (response.data.success) {
        
        setFormSubmitted(true);
        setError("");
      }
      else{
        setError(response.data.message);
      }
    })
    .catch((error) => {
      setError("An error occurred during login.");
    })
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(""); // Clear any previous error messages
  
    const phoneNumber = document.querySelector("#phonenumber").value;
    const password = document.querySelector("#password").value;
  
    axios
      .post("http://localhost:8800/login", {
        phoneNumber,
        password,
      })
      .then((response) => {
        if (response.data.success) {
          // Login successful, navigate to the home page
          navigate("/");
        } else {
          // Handle login failure with custom error message
          setError(response.data.message);
        }
      })
      .catch((error) => {
        // Handle other errors
        setError("An error occurred during login.");
      });
  };


  return (

    <div className="wrap">
        <Navbaro></Navbaro>
        {!formSubmitted &&( 
    <div className={`cont ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
          <img src={logoreal} alt="" className=" mb-5 img-fluid logotwo" />
            <h2 className="title">Sign in</h2>
            <div className="input-field">
            <i className="fas fa-phone"></i>
              <input id="phonenumber" type="tel" placeholder="Phone Number" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock" />
              <input id="password" type="password" placeholder="Password" />
              
            </div>
            <div className="row">
            <a className="forg" onClick={gotoForget}>Forgot your password?</a>
            </div>          
            <button onClick={handleLogin} className="bot col-lg-6 my-3">Submit</button>
            {error && <p className="error-message">{error}</p>}
          </form>
          <form action="#" className="sign-up-form">
            
          <img src={logoreal} alt="" className=" mb-5 img-fluid logotwo" />
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user" />
              <input id="name" type="text" placeholder="Name" />
            </div>
            <div className="input-field">
            <i className="fas fa-envelope"></i>
              <input id="email" type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-phone"></i>
              <input id="phone" type="tel" placeholder="Phone Number" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock" />
              <input id="pass" type="password" placeholder="Password" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock" />
              <input id="confirm" type="password" placeholder="Confirm Password" />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button onClick={handleSignup} className="bot col-lg-6">Submit</button>
            
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h1>New here ?</h1>
            <p className="words">
              Begin your journey and join our family now! 

            </p>
            <button className="bot2 transparent" id="sign-up-btn" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h1>One of Us ?</h1>
            <p className="words">
              Log in and pick up where you left off!
            </p>
            <button className="bot2 transparent" id="sign-in-btn" onClick={handleSignInClick}>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
       )}
       {formSubmitted && (
          <div className="container lan">
          <div className="row my-3">
              <div className="col-lg-4 offset-lg-4">
                  <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                  <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                  <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                  </svg>
              </div>
          </div>
          <div className="row">
              <div className="col-lg-6 offset-lg-3 text-center">
                  <h2 className="title">Your have successfully registered.</h2>
                  <button className="but col-lg-4 col-11 my-5" onClick={handleForm}>Log In</button>
              </div>
          </div>
      </div>
       )}
    </div>
  );
};

export default Login;
