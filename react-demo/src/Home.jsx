import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleCarousel from "./Carousel";
import MultiItemCarousel from "./MultipleItemCarousel";
import React from "react";
import Footer from "./footer";
import AOS from 'aos';
import { useEffect } from "react";
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";

const Home = () => {


    const nav = useNavigate();

    const gotoSection = (sectionId) => {
        nav("/about");
        setTimeout (()=> {
          const sectionElement = document.getElementById(sectionId);
          if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
          }
        },100);
       
      };


    const gotoBook = () => {
        nav("/reservation");
    }


    const gotoDerma = () =>{
        nav("/derma");
        setTimeout (()=> {
          const sectionElement = document.getElementById("top");
          if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
          }
        },100);
        
      };

      const gotoNut = () =>{
        nav("/nutrition");
        setTimeout (()=> {
          const sectionElement = document.getElementById("top");
          if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
          }
        },100);
        
      };


      const gotoDent = () =>{
        nav("/dentistry");
        setTimeout (()=> {
          const sectionElement = document.getElementById("top");
          if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
          }
        },100);
        
      };



    useEffect(() => {
        AOS.init();
      }, []);

    return(
        <div className="wrap">
            <Navbar></Navbar>
            <SimpleCarousel></SimpleCarousel>
            <p>

            </p>
            <div className="container-fluid padding align-items-center">
                <div className="row text-center padding my-5" >
                    <div className="col-lg-4 offset-lg-2 my-5 display-3 title2" data-aos="fade-right" data-aos-duration="3000">
                        Schedule Your Visit Now
                    </div>
                    <div className="col-lg-4 align-items-center my-5 d-flex justify-content-center" data-aos="fade-right" data-aos-duration="3000">
                        <button className="but col-9 col-lg-7 col-md-7" onClick={gotoBook}>Make Appointment</button>
                    </div>
                </div>

            </div>
            <div className="container-fluid my-5 py-2 pink">
            <div>
                <h3 className="why display-4 text-center" data-aos="fade-right" data-aos-duration="3000">Get to Know Our Offers</h3>
            </div>
            <MultiItemCarousel></MultiItemCarousel>
            </div>
            <br />
            <div className="container-fluid padding align-items-center color">
                <div className="row padding my-5" >
                    <div className="col-lg-4 offset-lg-1 my-5 display-5 why">
                        <div className="display-5 why my-5" data-aos="fade-up" data-aos-duration="3000">
                            Why Choose Us?
                        </div>
                        <div className="desc my-5" data-aos="fade-up" data-aos-duration="3000">
                        Our reputation for outstanding clinical care and friendly atmosphere, together with a continuous investment in technology and facilities ensures we attract leading consultants and specialists to work with us. We work with some of the most experienced consultants and healthcare specialists in multiple fields.
                        </div>
                        <button className="box2" onClick={() => gotoSection('our-mission')} data-aos="fade-up" data-aos-duration="3000">
                            Learn More
                        </button>
                    </div>
                    <div className="col-lg-5 offset-lg-1 align-items-center my-5 d-flex justify-content-center">
                        <img src="//cdn.shopify.com/s/files/1/0523/6683/5909/files/About-Facile-2021.png?v=1627497677" alt=""  data-aos="fade-up" data-aos-duration="3000" className="img-fluid" />
                    </div>
                </div>

            </div>
            <div className="container-fluid padding align-items-center">
                <div className="row text-center" >
                    <div className="col-lg-3 col-md-6 col-6" >
                        <button className="box col-12 col-lg-12" data-aos="fade-right" data-aos-duration="1500" onClick={gotoDent}>Dentistry</button>
                        <img src="https://cdn.discordapp.com/attachments/1125750837889736704/1125767926167904396/yassinyasser_close_up_smiling_mouth_of_beautiful_woman_woman_sm_d91830fb-3750-4d7d-a96b-ca84a002b69b.png" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6" >
                        <button className="box col-12 col-lg-12" data-aos="fade-right" data-aos-duration="1500" onClick={gotoDerma}>Dermatology</button>
                        <img src="https://cdn.shopify.com/s/files/1/0523/6683/5909/files/Rectangle_2636_2x_ed645a02-a35a-4ece-a871-a3841073dac7.png?v=1628161883" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6 mt-lg-0 mt-md-0 mt-4" >
                        <button className="box col-12 col-lg-12" data-aos="fade-right" data-aos-duration="1500">Laser</button>
                        <img src="https://cdn.discordapp.com/attachments/1125750837889736704/1126806349032992850/yassinyasser_close_up_face_of_a_beautiful_woman_having_a_laser__61694faf-85b9-4ff4-b675-310b22e0ebe0.png" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6 mt-lg-0 mt-md-0 mt-4" >
                        <button className="box col-12 col-lg-12" data-aos="fade-right" data-aos-duration="2000" onClick={gotoNut}>Nutrition</button>
                        <img src="https://cdn.discordapp.com/attachments/1125750837889736704/1126194470447230976/yassinyasser_Close-up_photo_of_white_background_that_has_realis_37cbaebc-ede4-4680-983b-78fcdeb24c59.png" alt="" className="img-fluid"/>
                    </div>
                </div>

            </div>
            <div className="my-5"> </div>
            <Footer></Footer>
        </div>
    )
}
export default Home;