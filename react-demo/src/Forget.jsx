import React from "react";
import Navbaro from "./Navbar";
import Footer from "./footer";
import axios from "axios";
import { useState } from "react";

const Forget = () => {

    const [error, setError] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);


    const handleForget = (event) => {
        event.preventDefault();
        setError("");

        const email = document.querySelector("#email").value;

        axios.post ('http://localhost:8800/forget' ,{email
            })
            .then(response => {
              if(response.data.success){
                setError("");
                setFormSubmitted(true);
              }
              else{
                setError(response.data.message);
              }
            })
            .catch((error) => {
              setError("An error occurred during sending.");
            })
    };


    return (
     <div className="wrap">
        <Navbaro></Navbaro>
      {!formSubmitted && (
        <div className="container">
        <form action="#" className="forget-form my-5">
          <h2 className="title my-4">Forget Password</h2>
          <div className="input-field">
          <i className="fas fa-envelope"></i>
            <input id="email" type="email" placeholder="Email" />
          </div>
          <button className="bot col-lg-4 col-11 my-3" onClick={handleForget}>Submit</button>
          {error && <p className="error-message">{error}</p>}
        </form>
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
                <h2 className="title">You have successfully received a link to reset your password.</h2>
            </div>
        </div>
    </div>
      )}
    </div>
    )
}
export default Forget;