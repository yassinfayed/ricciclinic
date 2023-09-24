import React from 'react';
import AOS from 'aos';
import { useEffect } from "react";


import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <Carousel fade>
      <Carousel.Item className="d-flex align-items-center justify-content-start w-100 it1">
        <div className="row">
          <div className="col-7 col-sm-6 col-md-4 offset-md-9 offset-3 col-lg-7 offset-lg-7">
          <h1 className="head" data-aos="fade-up" data-aos-duration="3000">RICCI AESTHETIC CLINICS</h1>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="d-flex align-items-center justify-content-start w-100 it3">
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
