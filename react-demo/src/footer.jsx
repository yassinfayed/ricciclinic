import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { useNavigate } from 'react-router-dom';

const Footer = () => {


  const nav = useNavigate();

  const gotoHome = () => {
    nav("/");
  }

    const gotoderma = () => {
      nav("/derma");
  }

  const gotodent = () => {
      nav("/dentistry");
  }


  const gotonut = () => {
      nav("/nutrition");
  }

  const gotoAbout = () =>{
    nav("/about");
  }


  const gotoBook = () =>  {
    nav("/reservation")
  }


  return (
    <section id="footer">
      <div className="container my-5">
        <div className="row text-center text-xs-center text-sm-left text-md-left">
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Quick links</h5>
            <ul className="list-unstyled quick-links">
              <li><a onClick={gotoHome} rel="noreferrer"><i className="fa fa-angle-double-right"></i>Home</a></li>
              <li><a onClick={gotoAbout} rel="noreferrer"><i className="fa fa-angle-double-right"></i>About</a></li>
              <li><a onClick={gotoBook} rel="noreferrer"><i className="fa fa-angle-double-right"></i>Make Appointment</a></li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Contact and Locations</h5>
            <ul className="list-unstyled quick-links">
              <li><h6 className='hotline'>Hotline: +201204144442</h6></li>
              <li><a href="https://www.google.com/maps/place/Ricci+Clinics+-+Fouad+street+%D8%B9%D9%8A%D8%A7%D8%AF%D8%A7%D8%AA+%D8%B1%D9%8A%D8%AA%D8%B4%D9%8A+-+%D8%B4%D8%A7%D8%B1%D8%B9+%D9%81%D8%A4%D8%A7%D8%AF%E2%80%AD/@31.1986817,29.9057085,17z/data=!3m1!4b1!4m6!3m5!1s0x14f5c3b41cc2ff07:0xb6bc585d8f219bd5!8m2!3d31.1986771!4d29.9082888!16s%2Fg%2F11tsqxf2pz?entry=ttu" rel="noreferrer"><i className="fa fa-angle-double-right"></i>Fouad Street</a></li>
              <li><a href="https://www.google.com/maps/place/Ricci+Clinics+-+Fouad+street+%D8%B9%D9%8A%D8%A7%D8%AF%D8%A7%D8%AA+%D8%B1%D9%8A%D8%AA%D8%B4%D9%8A+-+%D8%B4%D8%A7%D8%B1%D8%B9+%D9%81%D8%A4%D8%A7%D8%AF%E2%80%AD/@31.1986817,29.9057085,17z/data=!3m1!4b1!4m6!3m5!1s0x14f5c3b41cc2ff07:0xb6bc585d8f219bd5!8m2!3d31.1986771!4d29.9082888!16s%2Fg%2F11tsqxf2pz?entry=ttu" rel="noreferrer"><i className="fa fa-angle-double-right"></i>Smouha</a></li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Services</h5>
            <ul className="list-unstyled quick-links">
              <li><a onClick={gotoderma} rel="noreferrer"><i className="fa fa-angle-double-right"></i>Dermatology</a></li>
              <li><a onClick={gotodent} rel="noreferrer"><i className="fa fa-angle-double-right"></i>Dentistry</a></li>
              <li><a onClick={gotonut} rel="noreferrer"><i className="fa fa-angle-double-right"></i>Nutrition</a></li>
              <li><a href="https://www.fiverr.com/share/qb8D02" rel="noreferrer"><i className="fa fa-angle-double-right"></i>Pediatrics</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul className="list-unstyled list-inline social text-center">
              <li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02" rel="noreferrer"><i className="fa fa-facebook"></i></a></li>
              <li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02" rel="noreferrer"><i className="fa fa-instagram"></i></a></li>
            </ul>
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p>Ricci Aesthetic Clinic is a Registered Clinic in Alexandria, Egypt</p>
            <p className="h6">©Ricci Clinics All rights Reserved.</p>
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default Footer;
