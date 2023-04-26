import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer aria-label="Site Footer" className="bg-gray-100">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex justify-center text-teal-600">{/* Logo */}</div>

          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
            Find out more about our services and how we can help you.
          </p>

          <nav aria-label="Footer Nav" className="mt-12">
            <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
              {/*  */}
              <li>
                <NavLink
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="/"
                >
                  About
                </NavLink>
              </li>
              {/*  */}
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
