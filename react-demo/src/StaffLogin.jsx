import React from "react";
import { useNavigate } from "react-router-dom";


const StaffLogin = () => {

    const nav = useNavigate();



    return (
        <div className="container-fluid">
            <div className="login-box">
        <h2 className="display-5">Login</h2>
          <div className="user-box">
            <input type="text" name required />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name required />
            <label>Password</label>
          </div>
          <div className="row text-center">
          <button className="bot">Submit</button>
          </div>
      </div>
        </div>
    )
}

export default StaffLogin;