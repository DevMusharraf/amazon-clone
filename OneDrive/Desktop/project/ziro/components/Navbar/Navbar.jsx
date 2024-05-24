import React from "react";
import Image from "next/image";
import styles from "./style.module.css";
import logo from "../../public/Navbar/logo.jpg"

export default function Navbar() {
  const activeLink = "Home";
  return (
    <div>
      <nav className={`py-6 bg-gray-100 flex items-center `}>
        <div className="container flex ms-8 mx-auto md: justify-start">
          <Image
            src={logo} width={100} height={100}
            alt=""
          />
          <div
            className={`${styles.navbar_collapse} flex flex-grow items-center`}
          >
            <div
              className={`grid xl:flex xl:items-center pb-14 xl:pb-0 w-100 w-full gap-20 xl:gap-0`} >
              <ul className={`${styles.navbar_nav} row flex justify-between  mx-auto list-none`}>
                <li
                  className={`block p-6 relative text-base text-[#5F4BDB] font-medium`}
                >
                  Home{" "}
                </li>
                <li
                  className={`block p-6 relative text-base text-[#5F4BDB] font-medium`}
                >
                  Blog
                </li>
                <li
                 className={`block p-6 relative text-base text-[#5F4BDB] font-medium`}
                >
                  Pricing{" "}
                </li>
                <li
                 className={`block p-6 relative text-base text-[#5F4BDB] font-medium`}
                >
                  Become a member
                </li>
              </ul>
              <form action="#" method="get" role="search">
                <div className={`${styles.form_search} flex `}></div>
                <input
                  type="search"
                  placeholder="Search here.."
                  className={`${styles.form_control} bg-gray-200 rounded-full bg-no-repeat text-base font-normal text-[#363848] py-[13px] px-6 pr-[50px] border-0 rounded-full transition ease-in-out duration-250`}
                  style={{
                    backgroundImage:
                      "url(data:image/svg+xml,%3csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M15.7639 14.6305L13.505 12.3796C14.7296 10.8668 15.327 8.94171 15.174 7.0014C15.021 5.06109 14.1293 3.25347 12.6827 1.95126C11.2362 0.649061 9.34511 -0.0484305 7.39944 0.00261663C5.45378 0.0536637 3.60188 0.849357 2.22562 2.22562C0.849357 3.60188 0.0536637 5.45378 0.00261663 7.39944C-0.0484305 9.34511 0.649061 11.2362 1.95126 12.6827C3.25347 14.1293 5.06109 15.021 7.0014 15.174C8.94171 15.327 10.8668 14.7296 12.3796 13.505L14.6305 15.7639C14.7047 15.8387 14.793 15.8981 14.8902 15.9386C14.9875 15.9791 15.0918 16 15.1972 16C15.3026 16 15.4069 15.9791 15.5041 15.9386C15.6014 15.8981 15.6897 15.8387 15.7639 15.7639C15.8387 15.6897 15.8981 15.6014 15.9386 15.5041C15.9791 15.4069 16 15.3026 16 15.1972C16 15.0918 15.9791 14.9875 15.9386 14.8902C15.8981 14.793 15.8387 14.7047 15.7639 14.6305V14.6305ZM1.62801 7.61441C1.62801 6.43042 1.97911 5.27301 2.6369 4.28855C3.2947 3.30409 4.22965 2.5368 5.32352 2.0837C6.41739 1.63061 7.62105 1.51205 8.7823 1.74304C9.94355 1.97403 11.0102 2.54418 11.8474 3.38139C12.6846 4.2186 13.2548 5.28528 13.4858 6.44652C13.7168 7.60777 13.5982 8.81144 13.1451 9.90531C12.692 10.9992 11.9247 11.9341 10.9403 12.5919C9.95582 13.2497 8.79841 13.6008 7.61441 13.6008C6.02672 13.6008 4.50406 12.9701 3.38139 11.8474C2.25872 10.7248 1.62801 9.20211 1.62801 7.61441V7.61441Z' fill='%23646464'/%3e%3c/svg%3e)",
                    backgroundPosition: "left calc(100% - 25px) center",
                    backgroundSize: "18px",
                  }}
                />
              </form>
              <div className={` gap-4 flex`}>
                <button
                  className={`ml-3 py-3.5 px-10 rounded-full font-semibold  bg-[#F0EEFF] border-[#F0EEFF]`}
                >
                  Log in{" "}
                </button>
                <button
                  className={`ml-3 text-white rounded-full font-semibold py-3.5 px-10 bg-blue-600 border-blue-400`}
                >Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
