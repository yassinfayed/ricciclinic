import React from "react";
import Navbaro from "./Navbar";
import Footer from "./footer";
import AOS from 'aos';
import { useEffect } from "react";


const Doctors = () =>{

    useEffect(() => {
        AOS.init();
      }, []);


    return (
        <div className="wrap">
            <Navbaro></Navbaro>
            <div className="position-relative" id="our-mission">
                <img src="https://cdn.discordapp.com/attachments/1125750837889736704/1130059587261829130/yassinyasser_a_photo_of_a_group_of_doctors_standing_together_in_cbac6abb-c5fa-4a04-bed4-ba8258bd0929.png" alt="" className="img-fluid darker" />
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
                <div className="position-absolute top-50 start-50 translate-middle text-center">
                    <p className="text-white display-2" data-aos="fade-left" data-aos-duration="3000">Our Mission</p>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row my-3">
                    <div className="col-lg-4 offset-lg-2">
                        <h1 data-aos="fade-down" data-aos-duration="3000" className="display-1">At RICCI,</h1>
                        <p>we believe in patient-centered care, unlike what you will find at most medical practices today. From start to finish, it will be a cherished experience, where you will want to return for all of your skincare needs</p>
                        <p>When you call our office, you will be greeted with a friendly voice on the other end rather than a recording, and if you have any questions or issues, you will receive a call back from a physician or nurse. We have a complete registered nursing staff, not only assisting our doctors, but also to assist all of your needs. We pride ourselves on a personalized touch.</p>
                        <p>When it comes to cosmetic treatments, you will leave our office truly excited about your procedure. Our artistic backgrounds combined with a plethora of cosmetic modalities will give you a refreshed and youthful appearance. We believe in treating every patient with a customized approach in order to avoid a “generic” outcome or completely changing your look. All of our providers are up to date on the cutting edge options for your beauty improvements and are happy to share their knowledge.</p>
                    </div>
                    <div className="col-lg-4 my-5">
                        <p>Our tremendous providers actually spend time with their patients, explaining detailed information pertaining to the visit, and building a trusting relationship. Rather than only spending a couple seconds with you, our providers will actually look closely at your skin and will make sure that you understand your diagnosis and the various treatment options that you have. You will also rest assured knowing that our providers are always on call, just a phone call away.</p>
                        <p>From cosmetic services to surgical procedures our team will work diligently to ensure that you receive the best results possible and leave knowing you have found a lifelong partner in skin health. This is who we are and what we stand for. Make an appointment to experience our services yourself!</p>
                    </div>
                </div>
            </div>
            <hr className="line" id="staff" />
            <div className="container-fluid text-center" >
                <h2 className="display-3">Meet Our Experts</h2>
            </div>
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-lg-2 offset-lg-2 offset-md-1">
                        <img src="https://nashskin.com/wp-content/uploads/2018/01/Dr.Pennington6.jpg" alt="" className="img-fluid" data-aos="fade-left" data-aos-duration="3000"/>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <h1 className="my-5" data-aos="fade-left" data-aos-duration="3000">Dr.Amr Lotfy Monib</h1>
                        <p data-aos="fade-left" data-aos-duration="3000">Dr. Smith, MD, PhD, is a renowned medical researcher and innovator. With a Master's degree in Biomedical Engineering and a Ph.D. in Molecular Medicine, he combines his clinical expertise with a deep understanding of advanced medical technologies. His groundbreaking work has led to significant advancements in the diagnosis and treatment of complex medical conditions.</p>
                    </div>
                </div>            
            </div>
            <div className="container-fluid my-5">
            <div className="row">
                    <div className="col-lg-5 offset-lg-2">
                    <h1 className="my-5" data-aos="fade-right" data-aos-duration="3000">Dr.Yassin Fayed</h1>
                        <p data-aos="fade-right" data-aos-duration="3000">Dr. Smith, MD, PhD, is a renowned medical researcher and innovator. With a Master's degree in Biomedical Engineering and a Ph.D. in Molecular Medicine, he combines his clinical expertise with a deep understanding of advanced medical technologies. His groundbreaking work has led to significant advancements in the diagnosis and treatment of complex medical conditions.</p>
                    </div>
                    <div className="col-lg-2 offset-lg-1 offset-md-1">
                         <img src="https://nashskin.com/wp-content/uploads/2019/03/dr-allan-e1621523038943.jpg" alt="" className="img-fluid" data-aos="fade-left" data-aos-duration="3000"/>    
                    </div>
                </div>     
            </div>
            <div className="conatiner-fluid my-5">
                <div className="row">
                    <div className="col-lg-2 offset-lg-2 offset-md-1">
                        <img src="https://nashskin.com/wp-content/uploads/2018/12/rachel-redenius-e1621523205397.jpg" alt="" className="img-fluid" data-aos="fade-left" data-aos-duration="3000"/>
                    </div>
                    <div className="col-lg-5 offset-lg-1 ">
                        <h1 className="my-5" data-aos="fade-left" data-aos-duration="3000">Dr.Salsabil Lotfy</h1>
                        <p data-aos="fade-left" data-aos-duration="3000">Dr. Smith, MD, PhD, is a renowned medical researcher and innovator. With a Master's degree in Biomedical Engineering and a Ph.D. in Molecular Medicine, he combines his clinical expertise with a deep understanding of advanced medical technologies. His groundbreaking work has led to significant advancements in the diagnosis and treatment of complex medical conditions.</p>
                    </div>
                </div>            
            </div>
            <hr className="line" />
            <div className="container-fluid" id="vip-system">
                <div className="row">
                <div className="col-lg-7 offset-lg-1">
                    <img src="https://img.freepik.com/free-photo/portrait-confident-beautiful-brunette-woman-turning-face-camera-with-dreamy-look-white-backgro_1258-118376.jpg?w=1380&t=st=1691672632~exp=1691673232~hmac=dbb4bb2ba9ea8a5515ea0542e180bde27af172f2bb5449028e8acbe67b757288y" alt="" className=" zoo"/>
                </div>
                <div className="col-lg-3">
                    <div className="h3 display-3 my-5" data-aos="fade-left" data-aos-duration="3000">
                            Explore Our VIP System & Become One Now!
                    </div>
                </div>
                </div>
                <div className="row my-3">
          <div className="col-md-3 col-sm-6 offset-lg-1 " data-aos="fade-left" data-aos-duration="3000">
            <div className="pricingTable">
              <div className="pricing_heading">
                <h3 className="title">100 points</h3>
                <span className="value">
                  BRONZE
                </span>
              </div>
              <div className="content">
                <ul>
                  <li>5% Discount on all services</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mx-5" data-aos="fade-up" data-aos-duration="3000">
            <div className="pricingTable">
              <div className="pricing_heading">
                <h3 className="title">200 points</h3>
                <span className="value">
                  SILVER
                </span>
              </div>
              <div className="content">
                <ul>
                  <li>10% Discount on all services</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6" data-aos="fade-right" data-aos-duration="3000">
            <div className="pricingTable">
              <div className="pricing_heading">
                <h3 className="title">300 points</h3>
                <span className="value">
                  GOLD
                </span>
              </div>
              <div className="content">
                <ul>
                  <li>20% Discount on all services</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-md-3 col-sm-6 offset-lg-2" data-aos="fade-left" data-aos-duration="3000">
            <div className="pricingTable">
              <div className="pricing_heading">
                <h3 className="title">400 points</h3>
                <span className="value">
                  PLATINUM
                </span>
              </div>
              <div className="content">
                <ul>
                  <li>30% Discount on all services</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 offset-lg-1" data-aos="fade-right" data-aos-duration="3000">
            <div className="pricingTable">
              <div className="pricing_heading">
                <h3 className="title">500 points</h3>
                <span className="value">
                  ELITE
                </span>
              </div>
              <div className="content">
                <ul>
                  <li>50% Discount on all services</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
            </div>
            <hr className="line" />
            <div className="container-fluid my-5"  id="contact-us">
                <div className="row">
                    <div className="col-lg-3 offset-lg-2">
                        <h1 className="display-1 ">Contact Us</h1>
                        <h1 className="display-4" data-aos="fade-up" data-aos-duration="3000">TODAY!</h1>
                        <h1 className="my-5">
                        +201204144442
                        </h1>
                        <p className="lead">66 Horreya road (Fouad Street ٦٦ طريق الحرية (شارع فؤاد, Mahta Al Raml Sq., Alexandria Governorate 21563</p>
                        <p className="lead">66 Horreya road (Fouad Street ٦٦ طريق الحرية (شارع فؤاد, Mahta Al Raml Sq., Alexandria Governorate 21563</p>
                    </div>
                    <div className="col-lg-3 offset-lg-2">
                        <img src="https://img.freepik.com/free-photo/woman-working-as-doctor_23-2148827841.jpg?w=740&t=st=1691677670~exp=1691678270~hmac=30b2675f023b307eb98adfe78ac70fcae037f6f7c4ac7ab612f816975d275ee2" alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
            <div className="container-fluid my-3"></div>
            <Footer></Footer>
        </div>
    )
}
export default Doctors;