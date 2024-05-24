import React from 'react'
import Image from "next/image"
import styles from "./style.module.css"
import Link from 'next/link'
import banner from "../../../public/Home/HomeBanner/banner.png"

 const HomeBanner = () => {
  <style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>
  return (
    <div className=" px-10 bg-gray-100  ">
    <div className="flex flex-wrap mx-auto">
      <div className="w-full lg:w-1/2 xl:w-5/12 flex items-center my-8 lg:my-14 xl:my-28 order-2 lg:order-1">
        <div className={`${styles.text} mx-auto list-none`}>
          <div className={`${styles.text_wrapper} w-full h-full flex z-10`}>
            <div className="swiper-slide active">
              <h1 className="text-5xl font-bold mb-4">
                Find out <span className="text-purple-500">talented freelancer</span> with better review faster
              </h1>
              <p className="text-base mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          
          </div>
          <div className="flex flex-wrap items-center mt-14 gap-5">
            <Link href="/ziro-html/joblist.html">
              <span className="btn bg-purple-500 text-white btn-primary font-semibold py-3 px-8 rounded-full">
                Discover Now
              </span>
            </Link>
            <Link href="https://www.youtube.com/embed/pj5LRL3nwBg">
              <span className="flex items-center text-dark no-underline">
                <div className="btn btn-rounded bg-white  btn-white rounded-full text-purple-500 border border-gray-200 flex items-center justify-center w-12 h-12">
                  <svg xmlns="http://www.w3.org/2000/svg" className='text-purple-500' width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 0C4.47719 0 0 4.47719 0 10C0 15.5228 4.47719 20 10 20C15.5232 20 20 15.5228 20 10C20 4.47719 15.5232 0 10 0ZM10 18C5.58879 18 2 14.4112 2 10C2 5.58879 5.58879 2 10 2C14.4112 2 18 5.58879 18 10C18 14.4112 14.4112 18 10 18Z"
                      fill="#464646"
                    />
                    <path
                      d="M13.6372 9.29992L8.78758 6.49992C8.12078 6.11512 7.5752 6.42992 7.5752 7.19992V12.7999C7.5752 13.5699 8.12078 13.8851 8.78758 13.4999L13.6372 10.6999C14.304 10.3151 14.304 9.68472 13.6372 9.29992Z"
                      fill="#464646"
                    />
                  </svg>
                </div>
                <span className="ml-5">Watch video</span>
              </span>
            </Link>
          </div>
          <div className="pagination-slider mt-14">
            <span className="swiper-pagination-bullet swiper-pagination-bullet-active" role="button" aria-label="Go to slide 1"></span>
            <span className="swiper-pagination-bullet" role="button" aria-label="Go to slide 2"></span>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 xl:w-7/12 order-1 lg:order-2">
        <div className="relative h-full">
          <Image src={banner} alt="Banner" layout="responsive" width={500} height={300} className="w-full h-full object-cover"/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HomeBanner;
