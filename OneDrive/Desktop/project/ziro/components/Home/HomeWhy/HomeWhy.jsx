"use client";
import React from 'react'
import styles from "./style.module.css"
import ExploreIcon from '@mui/icons-material/Explore';


const HomeWhy = () => {
  return (
    <div className="container mx-auto py-16">
    <div className="grid w-full md:w-1/2 xl:w-1/3 mb-16 mx-auto gap-3">
      <h2 className="text-3xl font-semibold text-center text-gray-900 mb-0">
        Why Choose Us
      </h2>
      <div className="text-lg text-center text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua
      </div>
    </div>
    <div className="flex flex-wrap justify-center w-full xl:w-10/12 mx-auto">
    <div className="w-full md:w-1/2 lg:w-1/3 p-3">
        <div className={` ${styles.card} bg-white shadow-md rounded-lg p-5 text-center`}>
          <div className={` ${styles.card_icon} bg-orange-500 text-white  rounded-2xl py-2 px-4 inline-flex items-center justify-center mb-5 `}>
          <ExploreIcon className={`w-10 h-10`} />
          </div>
          <h5 className="text-3xl text-justify text-gray-700 font-semibold mb-2">Trusted</h5>
          <p className="text-gray-700 text-justify  mt-4 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-3">
        <div className={` ${styles.card} bg-white shadow-md rounded-lg p-5 text-center`}>
          <div className= {` ${styles.card_icon} bg-blue-500 text-white  rounded-2xl py-2 px-4 inline-flex items-center justify-center mb-5 `}>
          <ExploreIcon className={`w-10 h-10`} />
          </div>
          <h5 className="text-3xl text-justify text-gray-700 font-semibold mb-2">Easy to Use</h5>
          <p className="text-gray-700 text-justify  mt-4 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-3">
        <div className={` ${styles.card} bg-white shadow-md rounded-lg p-5 text-center`}>
          <div className={` ${styles.card_icon} bg-violet-500 text-white  rounded-2xl py-2 px-4 inline-flex items-center justify-center mb-5 `}>
          <ExploreIcon className={`w-10 h-10`} />
          </div>
          <h5 className="text-3xl text-justify text-gray-700 font-semibold mb-2">Faster</h5>
          <p className="text-gray-700 text-justify  mt-4 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HomeWhy