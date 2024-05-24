"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import image1 from "../../../public/Home/HomeStart/background.png";
import icon1 from "../../../public/Home/HomeStart/figure-1.svg";
import icon2 from "../../../public/Home/HomeStart/figure-2.svg";
import icon3 from "../../../public/Home/HomeStart/figure-3.svg";
import styles from "./style.module.css"

const HomeStart = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const AccordionItem = ({ number, title, content, isOpen, onToggle }) => {
    return (
      <div className="border-b">
        <button
          className={`${styles.acc_item} w-full bg-white rounded-2xl  flex justify-between items-center py-4`}
          onClick={onToggle}
          aria-expanded={isOpen}
        >
          <div className="relative flex items-center w-full">
            <div
              className={`accordion-number ms-6 font-semibold text-xl  text-purple-500 bg-sky-100 py-6 px-8 rounded-3xl`}
            >
              {number}
            </div>
            <div className="ml-4 flex-1">
              <h2 className="text-2xl font-bold">{title}</h2>
            </div>
          </div>
          <div className="accordion-arrow">
            <span
              className={`w-5 h-5 bg-black transition-transform ${
                isOpen ? "transform rotate-180" : ""
              }`}
            >
              1
            </span>
          </div>
        </button>
        <div
          className={`overflow-hidden flex flex-col text-base text-gray-500  py-4 pe-10 w-full transition-max-height duration-300 ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="p-4">{content}</div>
        </div>
      </div>
    );
  };
  return (
    <div
      className={`container mx-auto  py-14 overflow-hidden xl:overflow-visible
    `}
    >
      <div className="mx-auto  flex flex-row gap-12 justify-between">
        <div className={`w-1/2`}>
          <div className={`grid gap-4 `}>
            <div className={`text-base font-medium text-purple-500`}>How it works</div>
            <h2 className={`text-dark font-medium text-5xl`}>
              Start find a job you love with us easily
            </h2>
          </div>

          <div className="mt-10" id="accordion-how-it-works">
            <AccordionItem
              number="1"
              title="Complete Profile"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              isOpen={openIndex === 0}
              onToggle={() => toggleIndex(0)}
            />
            <AccordionItem
              number="2"
              title="Search Vacancies"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              isOpen={openIndex === 1}
              onToggle={() => toggleIndex(1)}
            />
            <AccordionItem
              number="3"
              title="Apply Jobs"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              isOpen={openIndex === 2}
              onToggle={() => toggleIndex(2)}
            />
          </div>
        </div>
        <div className={`w-1/2 flex items-end `}>
          <div className={`relative`}>
            <img className={`${styles.main_img} rounded-3xl`} src={image1.src} alt="" />
            <img className={`${styles.icon1}`} src={icon1.src} alt="" />
            <img className={`${styles.icon2}`} src={icon2.src} alt="" />
            <img className={`${styles.icon3}`} src={icon3.src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeStart;
