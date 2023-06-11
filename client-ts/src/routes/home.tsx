import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      {/* Hero Section: Image Cover With Header Actions */}
      <div
        className="bg-cover bg-bottom"
        style={{
          backgroundImage:
            'url("https://cdn.tailkit.com/media/placeholders/photo-Nyvq2juw4_o-1280x400.jpg")',
        }}
      >
        <div className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm">
          {/* Hero Content */}
          <div className="text-center container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
              Tutorlah
            </h1>
            <h2 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
              Learn and grow together with your peers. Tutorlah is a platform
              that students with similar interests to connect and learn
              together.
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
              <a
                href="#"
                className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-800 hover:border-blue-800 focus:ring focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-50 hi-solid hi-paper-airplane inline-block w-5 h-5"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
                <span>Get Started</span>
              </a>
              <a
                href="#"
                className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-gray-700 bg-gray-700 text-white hover:text-white hover:bg-gray-800 hover:border-gray-800 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-700 active:border-gray-700"
              >
                <span>Learn more</span>
              </a>
            </div>
          </div>
          {/* END Hero Content */}
        </div>
      </div>
      {/* END Hero Section: Image Cover With Header Actions */}
    </>
  );
};

export default Home;
