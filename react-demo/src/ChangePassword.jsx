import React, { useState } from "react";
import Navbaro from "./Navbar"
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const ChangePassword = () => {

    const nav = useNavigate();

    const [error, setError] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();
        

        const old = document.querySelector("#old").value;
        const newpass = document.querySelector("#new").value;
        const confirmnew = document.querySelector("#confirmnew").value;

        axios.post ("http://localhost:8800/changepassword", {old,newpass,confirmnew},  { withCredentials: true } )
          .then((response) =>{
            if (response.data.success){
              setError("");
              setFormSubmitted(true);
            }
            else{
              setError(response.data.message);
            }
          })
          .catch((error) =>{
              setError("An error occurred during the process.");
          })


    }


  useEffect(() => {
    axios
      .get("http://localhost:8800/check-login-status")
      .then((response) => {
        if (!response.data.authenticated) {
          nav("/login");
        }
      })
      .catch((error) => {
        console.error("Error checking authentication status:", error);
      });
  }, [nav]);




  return (
    <div className="wrap">
      <Navbaro />
      <div className="container">
        {!formSubmitted && ( // Render the form if formSubmitted is false
          <form action="#" className="change-form my-5">
            <h2 className="title my-4">Change Password</h2>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input id="old" type="password" placeholder="Old Password" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input id="new" type="password" placeholder="New Password" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input id="confirmnew" type="password" placeholder="Confirm Password" />
            </div>
            <button className="bot col-lg-4 col-11 my-3" onClick={handleSubmit}>
              Submit
            </button>
            {error && <p className="error-message">{error}</p>}
          </form>
        )}
        {formSubmitted && ( // Render the SVG if formSubmitted is true
          <div className="container lan">
          <div className="row">
              <div className="col-lg-4 offset-lg-4">
                  <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                  <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                  <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                  </svg>
              </div>
          </div>
          <div className="row">
              <div className="col-lg-6 offset-lg-3 text-center">
                  <h2 className="title">Your have successfully changed your password.</h2>
              </div>
          </div>
      </div>
        )}
      </div>
    </div>
  );
};
export default ChangePassword;