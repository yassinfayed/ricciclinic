import React from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";



const Confirmation = () => {

    const [isLoading, setIsLoading] = useState(true);

    const nav = useNavigate();


    useEffect(() => {
        axios
          .get("http://localhost:8800/check-login-status")
          .then((response) => {
            if (response.data.authenticated) {
                setIsLoading(false);
            } else {
              // User is not authenticated, navigate to login page
              setTimeout(() => {
                // Use your navigation method to redirect to the login page
                nav("/reservation");
              }, 1500);
            }
          })
          .catch((error) => {
            console.error("Error checking authentication status:", error);
          });
      }, []);



    const gotoHome = () => {
        nav("/");
    }
    return(
        <div className="wrap">
        {isLoading ?  (
            <div className="wrap">
            <div className="d-flex justify-content-center align-items-center min-vh-100">
             <div className="loader"></div>
           </div>
             </div>
        ) : (
        <div className="container lan">
        <div className="row text-center my-3">
            <div className="col-lg-4 offset-lg-4">
                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
                <h3 className="title">One of our staff members will contact you shortly.</h3>
                <button className="but col-lg-5 col-11 my-4" onClick={gotoHome}>Home</button>
            </div>
        </div>
        
        
    </div>
        )}
        </div>
    )
}
export default Confirmation;