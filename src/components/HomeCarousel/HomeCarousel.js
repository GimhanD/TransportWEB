import React from "react";
import Carousel from "react-bootstrap/Carousel";
import firstSlide from "../../assets/carousel/1.jpeg";
import SecondSlide from "../../assets/carousel/2.jpeg";
import ThirdSlide from "../../assets/carousel/3.jpeg";
import { GoPackage } from "react-icons/go";
import { TbTruckDelivery } from "react-icons/tb";
import { FaTruckLoading } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import Button from "react-bootstrap/Button";

import "./HomeCarousel.css";

function HomeCarousel() {
  return (
    <Carousel interval={null}>
      <Carousel.Item>
        <img className="d-block w-100" src={firstSlide} alt="First slide" />
        <Carousel.Caption>
            <div className="button">
              <Button variant="warning">Inquiry</Button>
            </div>
            <div className="fContent">
              <h2 className="titleHeader">
                We Are On The Move To Fulfil All Your Delivery Requirements.
              </h2>
              <div className="list">
                <text className="description">• Quick</text>
                <text className="description">• Safe</text>
                <text className="description">• Reliable</text>
                <text className="description">• Affordable &</text>
                <text className="description">
                  • Hassle - free deliveries guaranteed by Sen Transport,
                  covering all aspects of delivery regardless of the weight/
                  size or distance.
                </text>
              </div>

              <h2 className="titleHeaderBottom">
                Be it a document, food item or a critical surgical item; we got
                you covered.
              </h2>
            </div>


          <div className="services">
            <div className="service">
              <text className="serviceTitle">Sen Courier</text>
              <div>
                <GoPackage size={"60"} />
              </div>
            </div>
            <div className="service">
              <text className="serviceTitle">
                Sen Sydney Local Distribution
              </text>
              <div>
                <TbTruckDelivery size={"60"} />
              </div>
            </div>
            <div className="service">
              <text className="serviceTitle">Sydney Linehaul Operation</text>
              <div>
                <FaTruckLoading size={"60"} />
              </div>
            </div>
            <div className="service">
              <text className="serviceTitle">Sen Consolidated Hub</text>
              <div>
                <BsGlobe size={"60"} />
              </div>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={SecondSlide} alt="Second slide" />

        <Carousel.Caption>
          <div className="fContent">
            <h2 className="titleHeader">HASSLE-FREE TRANSPORT</h2>
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
            <h2 className="titleHeader">HASSLE-FREE TRANSPORT</h2>
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
