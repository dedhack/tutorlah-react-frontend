import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const MainBar = (props: Props) => {
  return (
    <>
      {/* Main Header Section: Simple With Actions Alternate */}
      <div className="bg-white overflow-hidden">
        {/* Header */}
        <header
          id="page-header"
          className="flex flex-none items-center bg-white py-10"
        >
          <div className="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 container xl:max-w-7xl mx-auto px-4 lg:px-10">
            {/* Logo */}
            <div>
              <a
                href="#"
                className="inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-blue-600 hover:text-blue-400"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-75 hi-outline hi-cube-transparent inline-block w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                  />
                </svg>
                <span>Company</span>
              </a>
            </div>
            {/* END Logo */}
            <div className="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 md:space-x-10">
              {/* Navigation */}
              <nav className="text-sm md:text-base space-x-4 md:space-x-6">
                <a
                  href="#"
                  className="font-semibold text-gray-900 hover:text-gray-500"
                >
                  <span>About Us</span>
                </a>
              </nav>
              {/* END Navigation */}

              {/* Actions */}
              <div className="flex items-center justify-center space-x-2">
                <a
                  href="#"
                  className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-800 hover:border-blue-800 focus:ring focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-50 hi-solid hi-login inline-block w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Sign In</span>
                </a>
                <a
                  href="#"
                  className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-800 hover:border-blue-800 focus:ring focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-50 hi-solid hi-plus inline-block w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>New Account</span>
                </a>
              </div>
              {/* END Actions */}
            </div>
          </div>
        </header>
        {/* END Header */}

        {/*

        ADD YOUR HERO CONTENT BELOW

        */}

        <Outlet />
      </div>
      {/* END Main Header Section: Simple With Actions Alternate */}
    </>
  );
};

export default MainBar;
