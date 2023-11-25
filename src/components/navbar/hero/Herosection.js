"use client";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./hero.mosule.css";
import "animate.css";
function Herosection() {
  return (
    <div className={classes.hero} style={{ marginTop: "5rem"}}>
      <Carousel data-bs-theme="dark" interval={3000}>
        <Carousel.Item>
          <img className="d-block w-100" src="/image1.jpg" alt="First slide" />
          <Carousel.Caption>
            <h1
              className="animate__animated animate__backInLeft animate__slow"
              style={{
                color: "white",
                fontWeight: "bolder",
                fontSize: "2.5rem",
                fontFamily: "cursive",
              }}
            >
              premium
            </h1>
            <h1
              className="animate__animated animate__backInLeft animate__slow"
              style={{
                color: "white",
                fontWeight: "bolder",
                fontSize: "2rem",
                fontFamily: "cursive",
              }}
            >
              zip hoodies
            </h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="/image2.jpg" alt="Second slide" />
          <Carousel.Caption>
            <h1
              className="animate__animated animate__backInRight animate__slow"
              style={{
                color: "white",
                fontWeight: "bolder",
                fontSize: "2.5rem",
                fontFamily: "cursive",
              }}
            >
              premium tees
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/image3.jpg" alt="Third slide" />
          <Carousel.Caption>
            <h1
              className="animate__animated animate__backInRight animate__slow"
              style={{
                color: "white",
                fontWeight: "bolder",
                fontSize: "2.5rem",
                fontFamily: "cursive",
              }}
            >
              heritage tees
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/image4.jpg" alt="Fourth slide" />
          <Carousel.Caption>
            <h1
              className="animate__animated animate__backInUp animate__slow"
              style={{
                color: "white",
                fontWeight: "bolder",
                fontSize: "2.5rem",
                fontFamily: "cursive",
              }}
            >
              premium hoodies
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/image5.jpg" alt="Fifth slide" />
          <Carousel.Caption>
            <h1
              className="animate__animated animate__backInUp animate__slow"
              style={{
                color: "white",
                fontWeight: "bolder",
                fontSize: "2.5rem",
                fontFamily: "cursive",
              }}
            >
              hoodies
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Herosection;
