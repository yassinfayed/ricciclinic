import React from "react";
import Navbaro from "./Navbar";
import Footer from "./footer";
import MultiItemCarousel from "./MultipleItemCarousel";
import AOS from 'aos';
import { useEffect } from "react";

const Nutrition = () => {
    useEffect(() => {
        AOS.init();
      }, []);

    return(
        <div className="wrap derma">
            <Navbaro></Navbaro>
            <div className="position-relative" id="top">
                <img src="https://cdn.discordapp.com/attachments/1125750837889736704/1129191222393712650/yassinyasser_close_up_face_of_a_beautiful_woman_having_a_laser__ba4d4c9c-f11d-40cf-a81b-80d060784129.png" alt="" className="img-fluid darker" />
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
                <div className="position-absolute top-50 start-50 translate-middle text-center">
                    <p className="text-white display-2" data-aos="fade-left" data-aos-duration="3000">Nutrition</p>
                </div>
            </div>
            <div className="container-fluid my-5" data-aos="fade-left" data-aos-duration="3000">
                <div className="row">
                    <div className="col-lg-4 offset-lg-1">
                        <img src="https://img.freepik.com/free-photo/smiling-woman-pink-outfit-holding-fresh-apple_197531-15036.jpg?w=1380&t=st=1689418436~exp=1689419036~hmac=728e74c4f3f3b8add417b027d8a842ad44466c3e02cd1519737fd587e8eda9c0" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <p className="display-4">Diet</p>
                        <p className="my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, harum aliquam quo enim consequuntur inventore. Perferendis, sapiente. Neque consequatur deleniti alias vel animi! Ab neque earum exercitationem quisquam maiores? Impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illo, magnam quaerat voluptas commodi nam quidem recusandae odit aliquid expedita quisquam deserunt nostrum nobis itaque qui quam aperiam quos illum!</p>
                        <button className="but my-5 col-lg-4">Book Now</button>
                    </div>
                </div>
            </div>
            <hr className="line"/>
            <div className="container-fluid my-5" data-aos="fade-right" data-aos-duration="3000">
                <div className="row">
                <div className="col-lg-5 offset-lg-1">
                        <p className="display-4">Body Contouring</p>
                        <p className="my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, harum aliquam quo enim consequuntur inventore. Perferendis, sapiente. Neque consequatur deleniti alias vel animi! Ab neque earum exercitationem quisquam maiores? Impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illo, magnam quaerat voluptas commodi nam quidem recusandae odit aliquid expedita quisquam deserunt nostrum nobis itaque qui quam aperiam quos illum!</p>
                        <button className="but my-5 col-lg-4">Book Now</button>
                    </div>
                    <div className="col-lg-4 offset-lg-1">
                        <img src="https://img.freepik.com/free-photo/front-view-beautiful-woman-portrait_23-2149479366.jpg?w=1380&t=st=1689434008~exp=1689434608~hmac=7c67f5880f881739a94065dac5bc7d358754929df6fccf313218f3257502f68d" alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
            <Footer></Footer>
            
        </div>
    )
}
export default Nutrition;