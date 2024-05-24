import React from "react";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import styles from "./style.module.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const HomeJobs = () => {
  const jobs = [
    {
      id: 1,
      title: "Database Programmer",
      company: "Maximoz Team",
      salary: "$14,000 - $25,000",
      location: "London, England",
      imgSrc: "https://peterdraw.studio/ziro-html/assets/job-logo/job-logo-1.png",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Colo Colo Studios",
      salary: "$14,000 - $25,000",
      location: "London, England",
      imgSrc: "https://peterdraw.studio/ziro-html/assets/job-logo/job-logo-1.png",
    },
    {
      id: 3,
      title: "Content Writer",
      company: "Faster WOY Crew",
      salary: "$14,000 - $25,000",
      location: "London, England",
      imgSrc: "https://peterdraw.studio/ziro-html/assets/job-logo/job-logo-1.png",
    },
    {
      id: 4,
      title: "Database Programmer",
      company: "Snailination Studios",
      salary: "$14,000 - $25,000",
      location: "London, England",
      imgSrc: "https://peterdraw.studio/ziro-html/assets/job-logo/job-logo-1.png",
    },
  ];

  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-gray-700">Featured Jobs</h2>
        <p className="text-gray-700 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>

      <div className="flex flex-wrap -mx-4">
        {jobs.map((job) => (
          <div key={job.id} className="w-1/3 sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <button className="absolute top-4 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
              <div className={`flex items-center flex-col mb-16`}>
                <div className="text-center mb-4">
                  <img
                    className="w-16 h-16 mx-auto mb-10 rounded-full"
                    src={job.imgSrc}
                    alt={job.title}
                  />
                </div>
                <h5 className="text-xl font-bold text-gray-800 text-center">
                  <a>{job.title}</a>
                </h5>
                <div className="text-center text-gray-500">{job.company}</div>
              </div>
              <ul className="mt-4 space-y-2 list-none p-0">
                <li className="flex justify-between items-center">
                  <div className={`text-gray-300 w-24 h-24`}>
                    <AttachMoneyIcon />
                  </div>
                  <div className={`mx-4`}>{job.salary}</div>
                  <div className={`text-right`}>/monthly</div>
                </li>
                <li className="flex justify-between items-center">
                  <div className={`text-gray-300 w-24 h-24`}>
                    <AttachMoneyIcon />
                  </div>
                  <div className={`mx-4`}>{job.location}</div>
                  <a className={`text-right text-gray-300 `} href="#">
                    View Maps
                  </a>
                </li>
              </ul>
              <div className="mt-6 flex bg-white shadow-md justify-between items-center">
                <button className="btn btn-rounded bg-red-500 text-gray-700 py-2 px-4 rounded-full">
                <FavoriteBorderIcon />
                </button>

                <a className="bg-blue-500 text-white text-center font-semibold py-2 px-6 rounded-2xl">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link href="/ziro-html/joblist.html">
          <a className="bg-blue-500 text-white font-semibold py-3 px-8 rounded-full">
            View more
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HomeJobs;
