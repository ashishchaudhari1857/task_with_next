"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from  './Semicircular.module.css'

function Semicircular() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

  };
  
  return (
    <div >
      <Slider {...settings}>
        <div className={classes.sliderContainer}>
        <div className={classes.sliderContent} style={{background:"black", borderRadius:" 80px 10px 10px 80px" ,color:"white"}}>
            <div>
              <img className={`d-block w-100 ${classes.sliderImage}`} src="/semiimage1.jpg" alt="First slide" />
            </div>
            <div className={classes.right}>
            <h2>Ashish</h2>

              <h3 >Ashish</h3>
            </div>
          </div>
        </div>
        
        <div className={classes.sliderContainer}>
        <div className={classes.sliderContent} style={{background:"black", borderRadius:" 80px 10px 10px 80px" ,color:"white"}}>
            <div>
              <img className={`d-block w-100 ${classes.sliderImage}`} src="/semiimage4.jpg" alt="First slide" />
            </div>
            <div className={classes.right}>
            <h2>Ashish</h2>

            <h3>Ashish</h3>
            </div>
          </div>
        </div>
        
        <div className={classes.sliderContainer}>
        <div className={classes.sliderContent} style={{background:"black", borderRadius:" 80px 10px 10px 80px" ,color:"white"}}>
            <div>
              <img className={`d-block w-100 ${classes.sliderImage}`} src="/semiimage5.jpg" alt="First slide" />
            </div>
            <div className={classes.right}>
             <h2>Ashish</h2>

            <h3>Ashish</h3>
            </div>
          </div>
        </div>
        
        <div className={classes.sliderContainer}>
        <div className={classes.sliderContent}  style={{background:"rgb(162, 82, 208)", borderRadius:" 80px 10px 10px 80px" ,color:"white"}}>
            <div>
              <img className={`d-block w-100 ${classes.sliderImage}`} src="/semiimage2.jpg" alt="First slide" />
            </div>
            <div className={classes.right}>
            <h2>Ashish</h2>

            <h3>Ashish</h3>
            </div>
          </div>
        </div>
        <div className={classes.sliderContainer}>
        <div className={classes.sliderContent} style={{background:"rgb(9, 31, 44);", borderRadius:" 80px 10px 10px 80px" ,color:"white"}}>
            <div>
              <img className={`d-block w-100 ${classes.sliderImage}`} src="/semiimage3.jpg" alt="First slide"  />
            </div>
            <div className={classes.right}>
            <h2>Ashish</h2>

            <h3>Ashish</h3>
            </div>
          </div>
        </div>
        
       
      </Slider>
    </div>
  );
}

export default Semicircular;
