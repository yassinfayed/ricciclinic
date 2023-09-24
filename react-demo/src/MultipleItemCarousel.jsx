import React from "react";
import { Carousel } from "react-bootstrap";
import las from './laser.jpeg'
import derm from './derm.jpeg'
import den from './den.jpeg'

const MultiItemCarousel = () => {
  return (
    <div className="wrap my-3">
    <Carousel className="carousel-large">
      <Carousel.Item>
        <div className="row py-5">
          <div className="col-md-3 offset-md-1">
            <img
              className="d-block w-100 img-fluid circle shadow"
              src={las}
              alt="First slide"
            />
          </div>
          <div className="col-md-3">
            <img
              className="d-block w-100 img-fluid space circle shadow"
              src={derm}
              alt="Second slide"
            />
          </div>
          <div className="col-md-3 offset-md-1">
            <img
              className="d-block w-100 img-fluid circle shadow"
              src={den}
              alt="Third slide"
            />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="row py-5">
          <div className="col-md-3 offset-md-1">
            <img
              className="d-block w-100 img-fluid circle shadow"
              src={las}
              alt="First slide"
            />
          </div>
          <div className="col-md-3">
            <img
              className="d-block w-100 img-fluid space circle shadow"
              src={derm}
              alt="Second slide"
            />
          </div>
          <div className="col-md-3 offset-md-1">
            <img
              className="d-block w-100 img-fluid circle shadow"
              src={den}
              alt="Third slide"
            />
          </div>
        </div>
      </Carousel.Item>
      {/* Add more Carousel.Items for additional slides */}
    </Carousel>

    <Carousel className="carousel-small">
      {/* For small screens (less than "md" breakpoint) */}
      <Carousel.Item>
        <div className="row py-5">
          <div className="col-12 mb-4">
            <img
              className="d-block w-100 img-fluid circle shadow"
              src={las}
              alt="First slide"
            />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="row py-5">
          <div className="col-12 mb-4">
            <img
              className="d-block w-100 img-fluid circle shadow"
              src={derm}
              alt="Second slide"
            />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="row py-5">
          <div className="col-12 mb-4">
            <img
              className="d-block w-100 img-fluid circle shadow"
              src={den}
              alt="Third slide"
            />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default MultiItemCarousel;
