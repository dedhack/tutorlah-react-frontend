import React from "react";
import useAuth from "../hooks/useAuth";

const Profile = () => {
  const { auth, firstname, lastname, email } = useAuth();

  return (
    <>
      {/* Page Partials: User Profile: With Cards */}
      <div className="space-y-4 lg:space-y-8 dark:text-gray-100">
        {/* Banner */}
        <div className="bg-gradient-to-r from-teal-400 to-purple-500 rounded-lg text-center p-6">
          <div className="inline-block mb-5">
            <div className="rounded-full bg-white bg-opacity-50 p-2">
              <img
                src="https://cdn.tailkit.com/media/placeholders/avatar-c_GmwfHBDzk-160x160.jpg"
                alt="User Avatar"
                className="inline-block w-20 h-20 rounded-full"
              />
            </div>
          </div>
          <h3 className="text-xl font-bold text-white">
            {firstname} {lastname}
          </h3>
          <h4 className="text-sm font-medium text-white text-opacity-90">{}</h4>
        </div>
        {/* END Banner */}

        {/* Vital Info */}
        <div className="flex flex-col rounded-lg shadow-sm bg-white overflow-hidden dark:text-gray-100 dark:bg-gray-800">
          <div className="p-5 lg:p-8 grow md:flex">
            <div className="md:flex-none md:w-1/3 border-b md:border-0 mb-5 md:mb-0 dark:border-gray-700">
              <h3 className="flex items-center justify-start space-x-2 font-semibold mb-1">
                <svg
                  className="hi-mini hi-user-circle inline-block w-5 h-5 text-teal-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>User Profile</span>
              </h3>
              <p className="text-sm text-gray-500 mb-5 dark:text-gray-400">
                Your account’s vital info. Only your username and photo will be
                publicly visible.
              </p>
            </div>
            <div className="md:w-2/3 md:pl-24">
              <form className="space-y-6 xl:w-2/3">
                <div className="space-y-1">
                  <label className="font-medium">Photo</label>
                  <div className="sm:flex sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-300 dark:text-gray-500 dark:bg-gray-700">
                      <svg
                        className="hi-solid hi-user inline-block w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <label className="block">
                      <span className="sr-only">Choose profile photo</span>
                      <input
                        type="file"
                        id="photo"
                        name="photo"
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 dark:text-gray-400 dark:file:text-teal-800 dark:file:bg-teal-200 dark:hover:file:bg-teal-300"
                      />
                    </label>
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="username" className="font-medium">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="john.doe"
                    className="w-full block border placeholder-gray-500 px-3 py-2 leading-6 rounded-lg border-gray-200 focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-teal-500 dark:placeholder-gray-400"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="name" className="font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="w-full block border placeholder-gray-500 px-3 py-2 leading-6 rounded-lg border-gray-200 focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-teal-500 dark:placeholder-gray-400"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john.doe@example.com"
                    className="w-full block border placeholder-gray-500 px-3 py-2 leading-6 rounded-lg border-gray-200 focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-teal-500 dark:placeholder-gray-400"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="title" className="font-medium">
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Product Manager"
                    className="w-full block border placeholder-gray-500 px-3 py-2 leading-6 rounded-lg border-gray-200 focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-teal-500 dark:placeholder-gray-400"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="company" className="font-medium">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="@company"
                    className="w-full block border placeholder-gray-500 px-3 py-2 leading-6 rounded-lg border-gray-200 focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-teal-500 dark:placeholder-gray-400"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-teal-700 bg-teal-700 text-white hover:text-white hover:bg-teal-600 hover:border-teal-600 focus:ring focus:ring-teal-400 focus:ring-opacity-50 active:bg-teal-700 active:border-teal-700 dark:focus:ring-teal-400 dark:focus:ring-opacity-90"
                >
                  Update Profile
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* END Vital Info */}

        {/* Change Password */}
        <div className="flex flex-col rounded-lg shadow-sm bg-white overflow-hidden dark:text-gray-100 dark:bg-gray-800">
          <div className="p-5 lg:p-8 grow md:flex">
            <div className="md:flex-none md:w-1/3 border-b md:border-0 mb-5 md:mb-0 dark:border-gray-700">
              <h3 className="flex items-center justify-start space-x-2 font-semibold mb-1">
                <svg
                  className="hi-mini hi-lock-closed inline-block w-5 h-5 text-teal-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Change Password</span>
              </h3>
              <p className="text-sm text-gray-500 mb-5 dark:text-gray-400">
                Changing your sign in password is an easy way to keep your
                account secure.
              </p>
            </div>
            <div className="md:w-2/3 md:pl-24">
              <form className="space-y-6 xl:w-2/3">
                <div className="space-y-1">
                  <label htmlFor="password" className="font-medium">
                    Current Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full block border placeholder-gray-500 px-3 py-2 leading-6 rounded-lg border-gray-200 focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-teal-500 dark:placeholder-gray-400"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="password_new" className="font-medium">
                    New Password
                  </label>
                  <input
                    type="password"
                    id="password_new"
                    name="password_new"
                    className="w-full block border placeholder-gray-500 px-3 py-2 leading-6 rounded-lg border-gray-200 focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-teal-500 dark:placeholder-gray-400"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="password_new_confirm" className="font-medium">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="password_new_confirm"
                    name="password_new_confirm"
                    className="w-full block border placeholder-gray-500 px-3 py-2 leading-6 rounded-lg border-gray-200 focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-teal-500 dark:placeholder-gray-400"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-teal-700 bg-teal-700 text-white hover:text-white hover:bg-teal-600 hover:border-teal-600 focus:ring focus:ring-teal-400 focus:ring-opacity-50 active:bg-teal-700 active:border-teal-700 dark:focus:ring-teal-400 dark:focus:ring-opacity-90"
                >
                  Update Password
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* END Change Password */}
      </div>
      {/* END Page Partials: User Profile: With Cards */}
    </>
  );
};

export default Profile;
