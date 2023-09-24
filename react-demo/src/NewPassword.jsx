import React from "react";


const NewPassword = () => {
    return(
        <div className="wrap">
        <Navbaro></Navbaro>
        <div className="container">
        <form action="#" className="new-form my-5">
          <h2 className="title my-4">Change Password</h2>
          <div className="input-field">
          <i className="fas fa-lock"></i>
            <input id="password" type="password" placeholder="Password" />
          </div>
          <div className="input-field">
          <i className="fas fa-lock"></i>
            <input id="password" type="password" placeholder="Confirm Password" />
          </div>
          <button className="bot col-lg-4 col-11 my-3">Submit</button>
        </form>
        </div>
    </div>
    )
}
export default NewPassword;