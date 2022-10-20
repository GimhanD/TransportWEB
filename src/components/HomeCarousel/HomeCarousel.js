import React from "react";
import Carousel from "react-bootstrap/Carousel";
import firstSlide from "../../assets/carousel/1.jpeg";
import SecondSlide from "../../assets/carousel/2.jpeg";
import ThirdSlide from "../../assets/carousel/3.jpeg";
import "./HomeCarousel.css";

function HomeCarousel() {
  return (
    <Carousel interval={null}>
      <Carousel.Item>
        <img className="d-block w-100" src={firstSlide} alt="First slide" />
        <Carousel.Caption>
          <div className="fContent">
            <h2 className="titleHeader">EMERGENCY TRANSPORT</h2>
            <p className="description">
              Air conditioned, movie stocked library, fine dinning experience
              and with friendly staff vour ride will be a joy. Air conditioned,
              movie stocked library, fine dinning experience and with friendly
              staff vour ride will be a joy.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={SecondSlide} alt="Second slide" />

        <Carousel.Caption>
          <div className="fContent">
            <h2 className="titleHeader">EMERGENCY TRANSPORT</h2>
            <p className="description">
              Air conditioned, movie stocked library, fine dinning experience
              and with friendly staff vour ride will be a joy. Air conditioned,
              movie stocked library, fine dinning experience and with friendly
              staff vour ride will be a joy.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={ThirdSlide} alt="Third slide" />

        <Carousel.Caption>
          <div className="fContent">
            <h2 className="titleHeader">EMERGENCY TRANSPORT</h2>
            <p className="description">
              Air conditioned, movie stocked library, fine dinning experience
              and with friendly staff vour ride will be a joy. Air conditioned,
              movie stocked library, fine dinning experience and with friendly
              staff vour ride will be a joy.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
