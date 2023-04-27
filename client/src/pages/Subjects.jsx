import React from "react";
import { NavLink } from "react-router-dom";

const Subjects = () => {
  return (
    <div className="container mx-auto py-10">
      {/* Cards in Grid: Courses */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8">
        {/* Course Card */}
        <NavLink
          to={"/subjects/english"}
          className="relative group flex flex-col rounded-lg shadow-sm text-white bg-purple-800 overflow-hidden transition hover:ring-4 hover:ring-purple-400 active:opacity-90"
        >
          <div className="flex flex-col grow">
            <div className="p-5">
              <div className="font-semibold inline-flex px-2 py-1 leading-4 bg-opacity-25 text-sm rounded text-black-700 bg-black-200 text-white bg-black">
                English
              </div>
            </div>

            <div className="p-5 space-y-1 grow">
              <h3 className="text-lg font-semibold">English Comprehension</h3>
            </div>
            <div className="p-5 uppercase tracking-wide text-sm font-medium opacity-75">
              {/* TODO: Add Number of unanswered questions */}
            </div>
          </div>
        </NavLink>
        {/* END Course Card */}
        {/* Course Card */}
        <NavLink
          to={"/subjects/math"}
          className="relative group flex flex-col rounded-lg shadow-sm text-white bg-amber-800 overflow-hidden transition hover:ring-4 hover:ring-purple-400 active:opacity-90"
        >
          <div className="flex flex-col grow">
            <div className="p-5">
              <div className="font-semibold inline-flex px-2 py-1 leading-4 bg-opacity-25 text-sm rounded text-black-700 bg-black-200 text-white bg-black">
                Math
              </div>
            </div>

            <div className="p-5 space-y-1 grow">
              <h3 className="text-lg font-semibold">Math Problem Sums</h3>
            </div>
            <div className="p-5 uppercase tracking-wide text-sm font-medium opacity-75">
              {/* TODO: Add Number of unanswered questions */}
            </div>
          </div>
        </NavLink>
        {/* END Course Card */}
        <NavLink
          to={"/subjects/science"}
          className="relative group flex flex-col rounded-lg shadow-sm text-white bg-pink-800 overflow-hidden transition hover:ring-4 hover:ring-purple-400 active:opacity-90"
        >
          <div className="flex flex-col grow">
            <div className="p-5">
              <div className="font-semibold inline-flex px-2 py-1 leading-4 bg-opacity-25 text-sm rounded text-black-700 bg-black-200 text-white bg-black">
                Science
              </div>
            </div>

            <div className="p-5 space-y-1 grow">
              <h3 className="text-lg font-semibold">Math Problem Sums</h3>
            </div>
            <div className="p-5 uppercase tracking-wide text-sm font-medium opacity-75">
              {/* TODO: Add Number of unanswered questions */}
            </div>
          </div>
        </NavLink>
        {/* END Course Card */}

        {/* Course Card */}
      </div>
      {/* END Cards in Grid: Courses */}
    </div>
  );
};

export default Subjects;
