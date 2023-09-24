import React from "react";
import Navbaro from "./Navbar";
import Footer from "./footer";
import MultiItemCarousel from "./MultipleItemCarousel";
import AOS from 'aos';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dentistry = () => {



    useEffect(() => {
        AOS.init();
      }, []);

    return(
        <div className="wrap derma">
            <Navbaro></Navbaro>
            <div className="position-relative max" id="top">
                <img src="https://cdn.discordapp.com/attachments/1125750837889736704/1129796234354360400/yassinyasser_realistic_and_beautiful_photo_of_a_woman_whole_fac_89df26b1-9010-483f-ada7-947a2df637a4.png" alt="" className="img-fluid darker" />
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
                <div className="position-absolute top-50 start-50 translate-middle text-center">
                    <p className="text-white display-2" data-aos="fade-left" data-aos-duration="3000">Dentistry</p>
                </div>
            </div>
            <div className="container-fluid my-5" data-aos="fade-left" data-aos-duration="3000">
                <div className="row">
                    <div className="col-lg-4 offset-lg-1">
                        <img src="https://img.freepik.com/free-photo/close-up-photo-young-woman-having-examination-while-sitting-dentist-s-chair-with-opened-mouth_613910-17754.jpg?w=1380&t=st=1689435425~exp=1689436025~hmac=ab62a232ed9725fcb0ee3a3dd005c07798ba6295086245370a22cf288950aa48" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <p className="display-4">Bridge</p>
                        <p className="my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, harum aliquam quo enim consequuntur inventore. Perferendis, sapiente. Neque consequatur deleniti alias vel animi! Ab neque earum exercitationem quisquam maiores? Impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illo, magnam quaerat voluptas commodi nam quidem recusandae odit aliquid expedita quisquam deserunt nostrum nobis itaque qui quam aperiam quos illum!</p>
                        <button className="but my-5 col-lg-4">Book Now</button>
                    </div>
                </div>
            </div>
            <hr className="line"/>
            <div className="container-fluid my-5" data-aos="fade-right" data-aos-duration="3000">
                <div className="row">
                <div className="col-lg-5 offset-lg-1">
                        <p className="display-4">Teeth Whitening</p>
                        <p className="my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, harum aliquam quo enim consequuntur inventore. Perferendis, sapiente. Neque consequatur deleniti alias vel animi! Ab neque earum exercitationem quisquam maiores? Impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illo, magnam quaerat voluptas commodi nam quidem recusandae odit aliquid expedita quisquam deserunt nostrum nobis itaque qui quam aperiam quos illum!</p>
                        <button className="but my-5 col-lg-4">Book Now</button>
                    </div>
                    <div className="col-lg-4 offset-lg-1">
                        <img src="https://img.freepik.com/free-photo/woman-patient-visiting-dentist_1303-24407.jpg?w=1380&t=st=1689435350~exp=1689435950~hmac=49f7035c8e949666d0920eb56cb38dc13e461484961fa590c0ce110e9b1b5393" alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
            <hr className="line"/> 
            <div className="container-fluid my-5" data-aos="fade-left" data-aos-duration="3000">
                <div className="row">
                    <div className="col-lg-4 offset-lg-1">
                        <img src="https://img.freepik.com/free-photo/portrait-smiling-child-with-braces-dentist-s-office_329181-17714.jpg?w=1380&t=st=1689435003~exp=1689435603~hmac=7d85e08d17421ad7a03e79ff086e4a59e7064d66038415eb66facbdaeaa23188" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <p className="display-4">Braces</p>
                        <p className="my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, harum aliquam quo enim consequuntur inventore. Perferendis, sapiente. Neque consequatur deleniti alias vel animi! Ab neque earum exercitationem quisquam maiores? Impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illo, magnam quaerat voluptas commodi nam quidem recusandae odit aliquid expedita quisquam deserunt nostrum nobis itaque qui quam aperiam quos illum!</p>
                        <button className="but my-5 col-lg-4">Book Now</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
            
        </div>
    )
}

export default Dentistry;