import React from "react";
import { NavLink } from "react-router-dom";

const CTA = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Tutorlah.
              <strong className="font-extrabold text-teal-700 sm:block">
                Peer-to-Peer Learning.
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Tutorlah is a peer-to-peer learning platform that connects
              students with fellow students who are willing to share their
              knowledge and expertise.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <NavLink
                className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
                href="/register"
              >
                Get Started
              </NavLink>

              <NavLink
                className="block w-full rounded px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-700 focus:outline-none focus:ring active:text-teal-500 sm:w-auto"
                href="/about"
              >
                Learn More
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
