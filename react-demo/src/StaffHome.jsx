import React from "react";
import Navbaro from "./Navbar";
import Box from "./Box";

const StaffHome = () => {
    return (
        <div className="wrap">
            <Navbaro></Navbaro>
            <div className="row my-5 d-flex align-items-center justify-content-center">
                <div className="col-lg-3 my-5">
                    <Box head="View Reservations" dest="/viewreservations"></Box>
                </div>
                <div className="col-lg-3 my-5 ">
                    <Box head="Modify Shifts" dest="/shifts"></Box>
                </div>
            </div>
        </div>
    )
}
export default StaffHome;