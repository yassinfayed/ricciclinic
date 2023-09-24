import React from "react";
import Navbaro from "./Navbar";
import Footer from "./footer";
import MultiItemCarousel from "./MultipleItemCarousel";
import AOS from 'aos';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dermatology = () => {


    useEffect(() => {
        AOS.init();
      }, []);

    return(
        <div className="wrap derma" >
            <Navbaro></Navbaro>
            <div className="position-relative" id="top">
                <img src="https://cdn.discordapp.com/attachments/1125750837889736704/1129191222393712650/yassinyasser_close_up_face_of_a_beautiful_woman_having_a_laser__ba4d4c9c-f11d-40cf-a81b-80d060784129.png" alt="" className="img-fluid darker" />
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
                <div className="position-absolute top-50 start-50 translate-middle text-center">
                    <p className="text-white display-2" data-aos="fade-left" data-aos-duration="3000">Dermatology</p>
                </div>
            </div>
            <div className="container-fluid my-5" data-aos="fade-up" data-aos-duration="3000">
                <div className="row">
                    <div className="col-lg-4 offset-lg-1">
                        <img src="https://img.freepik.com/free-photo/nice-young-smiling-woman-with-long-wavy-silky-hair-natural-make-up-with-hand-near-chin-isolated-pink-wall_155003-36622.jpg?w=1380&t=st=1689333288~exp=1689333888~hmac=8489376b927e07a6aa397ebf512f0159f4a6a77e9618873abaf924c08acf91f2" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <p className="display-4">Filler</p>
                        <p className="my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, harum aliquam quo enim consequuntur inventore. Perferendis, sapiente. Neque consequatur deleniti alias vel animi! Ab neque earum exercitationem quisquam maiores? Impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illo, magnam quaerat voluptas commodi nam quidem recusandae odit aliquid expedita quisquam deserunt nostrum nobis itaque qui quam aperiam quos illum!</p>
                        <button className="but my-5 col-lg-4">Book Now</button>
                    </div>
                </div>
            </div>
            <hr className="line"/>
            <div className="container-fluid my-5" data-aos="fade-up" data-aos-duration="3000">
                <div className="row">
                <div className="col-lg-5 offset-lg-1">
                        <p className="display-4">Botox</p>
                        <p className="my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, harum aliquam quo enim consequuntur inventore. Perferendis, sapiente. Neque consequatur deleniti alias vel animi! Ab neque earum exercitationem quisquam maiores? Impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illo, magnam quaerat voluptas commodi nam quidem recusandae odit aliquid expedita quisquam deserunt nostrum nobis itaque qui quam aperiam quos illum!</p>
                        <button className="but my-5 col-lg-4">Book Now</button>
                    </div>
                    <div className="col-lg-4 offset-lg-1">
                        <img src="https://img.freepik.com/free-photo/cosmetologist-making-injections-face-woman-beauty-salon_1303-16745.jpg?w=1380&t=st=1689356062~exp=1689356662~hmac=ae5df5eb666522848b3f99de66eb21df68addaf4b077ea3e62637845e519706e" alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
            <hr className="line"/>
            <div className="container-fluid my-5" data-aos="fade-up" data-aos-duration="3000">
                <div className="row">
                    <div className="col-lg-4 offset-lg-1">
                        <img src="https://img.freepik.com/free-photo/beautiful-portrait-woman-pink_23-2149488268.jpg?w=1380&t=st=1689356161~exp=1689356761~hmac=4b923416ac8a3d95a8545a9687be9dee3e15fb096c8e6ff90a4cefe1222f268d" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <p className="display-4">Hypho</p>
                        <p className="my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, harum aliquam quo enim consequuntur inventore. Perferendis, sapiente. Neque consequatur deleniti alias vel animi! Ab neque earum exercitationem quisquam maiores? Impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illo, magnam quaerat voluptas commodi nam quidem recusandae odit aliquid expedita quisquam deserunt nostrum nobis itaque qui quam aperiam quos illum!</p>
                        <button className="but my-5 col-lg-4">Book Now</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
            
        </div>
    )
}

export default Dermatology;