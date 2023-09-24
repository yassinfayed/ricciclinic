import React, { useState } from 'react';
import Navbaro from "./Navbar";
import Footer from "./footer";
import MultiItemCarousel from "./MultipleItemCarousel";
import 'react-step-progress-bar/styles.css';
import CircularProgressBarExample from './Circular';
import AOS from 'aos';
import { useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {


  const [isLoading, setIsLoading] = useState(true);


    const [userInfo, setUserInfo] = useState('');

    useEffect(() => {
        AOS.init();
      }, []);

    const percentage = 75;


    const nav = useNavigate();


    const gotoChangePassword = () => {
      nav("/profile/changepassword");
    };


    const gotoSection = (sectionId) => {
      nav("/about");
      setTimeout (()=> {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
      },100);
      
     
    };


    useEffect(() => {
      axios
        .get("http://localhost:8800/check-login-status")
        .then((response) => {
          if (response.data.authenticated) {
              const { name, id, phoneNumber } = response.data.user;
              setUserInfo({
                name: name,
                id: id,
                phoneNumber: phoneNumber,
              });
              setIsLoading(false);
          } else {
            // User is not authenticated, navigate to login page
            setTimeout(() => {
              // Use your navigation method to redirect to the login page
              nav("/login");
            }, 1500);
          }
        })
        .catch((error) => {
          console.error("Error checking authentication status:", error);
        });
    }, []);



    return(
        <div className="wrap">
          {isLoading  ? ( 
            <div className="wrap">
            <div className="d-flex justify-content-center align-items-center min-vh-100">
             <div className="loader"></div>
           </div>
             </div>
          ) : (
            <div className="wrap">
            <Navbaro></Navbaro>
            <div className="container-fluid pink py-5">
                <div className="row">
                    <div className="col-lg-4 offset-lg-3 mt-5">
                        <h2 className="display-3 wh">
                         {userInfo.name}
                        </h2>
                        <div className="row d-flex">
                            <div className="col-lg-1">
                                <h4 className="num">#496</h4>
                            </div>
                            <div className="col-lg-2 offset-lg-1">
                                <h4 className="gold">PLATINUM</h4>
                            </div>
                        </div>
                        <div className="row text-center">
                            <button className="box2 col-lg-6 col-9 my-3" onClick={gotoChangePassword}>Change Password</button>
                        </div>
                        <div className="row">
                        <button className="box2 col-lg-6 col-9">Our VIP System</button>
                        </div>
                    </div>
                    <div className="col-lg-2 my-4 col-9">
                    <CircularProgressBarExample percentage={percentage} />
                    </div>
                </div>
            </div>
            <div className="container-fluid my-5 py-2 pink">
            <div>
                <h3 className="why display-4 text-center" data-aos="fade-right" data-aos-duration="3000"  onClick={() => gotoSection('vip-system')}>Your Platinum-exclusive Offers</h3>
            </div>
                <MultiItemCarousel></MultiItemCarousel>
            </div>
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-lg-5 offset-lg-1">
                        <img src="https://img.freepik.com/free-photo/physical-therapist-looking-male-athlete-with-cervical-collar-filling-medical-form-reception-counter-hospital_662251-1713.jpg?w=1380&t=st=1691691776~exp=1691692376~hmac=11831d829ab9803bbb3b1b606074fba76f4f812d8cb5c46c53d953cad4915fb9" alt="" className='img-fluid' data-aos="fade-up" data-aos-duration="3000" />
                    </div>
                    <div className="col-lg-3 offset-lg-1 my-5">
                        <h3 className="display-2" data-aos="fade-up" data-aos-duration="3000"> Reserve Now & Boost Your Points</h3>
                        <button className="but my-5 col-lg-6">Reserve Now</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
            </div>
          )}
        </div>
    )
}

export default Profile;