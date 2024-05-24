"use client";
import React from "react";
import styles from "./style.module.css";
import img1 from "../../../public/Home/HomeProfile/avatar-1.jpg";
import { useState, useEffect } from "react";
import Slider from "react-slick";


const HomeProfile = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "20px", 
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <div className={`container py-30`}>
      <div className={`flex-row items-center `}>
        <div className={`w-3/5`}>
          <h4 className={`text-gray-700 `}>Featured profile this week</h4>
        </div>
        <div className={`w-2/5 text-end`}>
          <span className={`ms-auto`}>
            {" "}
            <a className="text-primary text-purple-500 font-semibold text-decoration-none">
              View More
            </a>
          </span>
        </div>
      </div>
      <div className={`relative mt-10`}>
        <div className="list-none mx-auto relative p-0 ">
          <div className={styles.services}>
            <div className={styles.services__all}>
              <Slider className={styles.slider}>
                <div className={styles.service}>
                  <div className={styles.service__content}>
                    <img src={img1.src} alt="" />
                    <h3>
                      <div>Hello</div>
                      <div>Developer</div>
                    </h3>
                    <p>zdcsdcsdf</p>
                   
                  </div>
                </div>
              </Slider>
           
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProfile;
