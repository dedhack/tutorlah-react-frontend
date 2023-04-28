import React from "react";
import useAuth from "../hooks/useAuth";

import { deleteComment } from "../api/commentApi";

const AnswerCard = ({ comment, fetch }) => {
  const { auth, userId } = useAuth();

  const handleDelete = async () => {
    const [data, error] = await deleteComment(comment.id, auth);
    console.log("deleted comment: ", data);

    if (data) {
      fetch();
    }
  };

  return (
    <article className="rounded-xl border-2 border-gray-200 bg-gray-200">
      <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
        <img
          alt="Speaker"
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          className="h-14 w-14 rounded-lg object-cover"
        />

        <div>
          <p className="line-clamp-2 text-sm text-gray-700">
            {comment.content}
          </p>

          <div className="mt-2 sm:flex sm:items-center sm:gap-2">
            <div className="flex items-center gap-1 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>

              {/* <p className="text-xs">14 comments</p> */}
            </div>

            <span className="hidden sm:block" aria-hidden="true">
              &middot;
            </span>

            <p className="hidden sm:block sm:text-xs sm:text-gray-500">
              Posted on {comment.creationDateTime} by{" "}
              <span className="font-medium underline hover:text-gray-700">
                {/* TODO: change to user firstname */}
                {comment.firstname}
              </span>
            </p>
          </div>

          {/* END POST CONTENT */}

          <div className="flex space-x-3">
            {userId === comment.userId ? (
              <button
                className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-6 py-1 leading-5 text-sm
            border-teal-700 bg-teal-700 text-white hover:text-white hover:bg-teal-600 hover:border-teal-600 focus:ring focus:ring-teal-400 focus:ring-opacity-50 active:bg-teal-700 active:border-teal-700 dark:focus:ring-teal-400 dark:focus:ring-opacity-90"
                onClick={handleDelete}
              >
                Delete
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        {/* TODO: solved status of post */}
        {/* <strong className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>

        <span className="text-[10px] font-medium sm:text-xs">Solved!</span>
      </strong> */}
      </div>
    </article>
  );
};

export default AnswerCard;
