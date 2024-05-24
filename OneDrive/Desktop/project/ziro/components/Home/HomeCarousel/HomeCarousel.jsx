"use client";
import React, { useState, useEffect } from "react";
import styles from "./style.module.css"
import Image from "next/image";
import img1 from "../../../public/Home/HomeCarousel/client-logo-5.png"
import img2 from "../../../public/Home/HomeCarousel/client-logo-5.png"
import img3 from "../../../public/Home/HomeCarousel/client-logo-5.png"
import img4 from "../../../public/Home/HomeCarousel/client-logo-5.png"
import img5 from "../../../public/Home/HomeCarousel/client-logo-5.png"
import img6 from "../../../public/Home/HomeCarousel/client-logo-4.png"




const HomeCarousel = () => {
  const clientLogos = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6
    
   
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % clientLogos.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [clientLogos.length]);

  const visibleSlides = 5;

  return (
    <div className="container  mx-20 py-20 lg:py-24 overflow-hidden">
      <div className="relative flex justify-center mx-auto w-full mx-34 overflow-hidden">
        <div
          className="flex transition-transform duration-1000 w-full h-full items-center  justify-center"
          style={{
            transform: `translateX(-${
              (currentSlide % (clientLogos.length - visibleSlides + 1)) *
              (100 / visibleSlides)
            }%)`,
            width: `${clientLogos.length * 20}%`,
          }}
        >
          {clientLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-1/5 px-2 justify-center">
              <Image
                src={logo.src}
                alt={`Client logo ${index + 1}`}
                width={156}
                height={45}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
