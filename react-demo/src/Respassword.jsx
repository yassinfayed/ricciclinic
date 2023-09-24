import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbaro from "./Navbar";

const ResPassword = () => {
  const [tokenValid, setTokenValid] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);


  // Extract the token from the URL (assuming you're using React Router)
  const token = new URLSearchParams(window.location.search).get("token");

  useEffect(() => {
    axios
      .get(`http://localhost:8800/reset-password?token=${token}`)
      .then((response) => {
        if (response.data.success) {
          // Token is valid, you can proceed to display the password reset form
          setTokenValid(true);
        } else {
          // Token is invalid or expired, display an error message
          setMessage(response.data.message);
        }
      })
      .catch((error) => {
        setMessage("An error occurred while checking the token.");
      });
  }, [token]);


  const handleSubmit = (event) => {
    event.preventDefault();

    const newpass = document.querySelector("#new").value;
    const confirmnew = document.querySelector("#confirmnew").value;

    axios.post ("http://localhost:8800/reset", {newpass, confirmnew})
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

  
  
    return (

        <div className="wrap">
            {tokenValid ? (
                <>
                    <Navbaro></Navbaro>
                    {!formSubmitted && (
                    <div className="container">
                    <form action="#" className="change-form my-5">
                    <h2 className="title my-4">Change Password</h2>
                    <div className="input-field">
                    <i className="fas fa-lock"></i>
                        <input id="new" type="password" placeholder="New Password" />
                    </div>
                    <div className="input-field">
                    <i className="fas fa-lock"></i>
                        <input id="confirmnew" type="password" placeholder="Confirm Password" />
                    </div>
                    <button className="bot col-lg-4 col-11 my-3" onClick={handleSubmit}>Submit</button>
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
                              <h2 className="title">Your have successfully changed your password.</h2>
                          </div>
                      </div>
                  </div>
                    )}
                </>
            ): (
                <p>{message}</p>
            )


            }
                
            </div>
    
    );
}

export default ResPassword;
