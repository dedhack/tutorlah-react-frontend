import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import { createPost } from "../api/subjectApi";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object()
  .shape({
    title: yup.string().min(5).max(30).required("Title is required"),
    content: yup.string().min(8).required("Content detail is required"),
  })
  .required();

const CreateEntry = ({ btnText, fetch, setPosts }) => {
  const { auth, userId } = useAuth();
  const { subject } = useParams();

  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //   Submit function
  const onSubmit = async (formData) => {
    // console.log("formData: ", formData);
    let newFormData = { ...formData, subject };
    console.log("newFormData: ", newFormData);
    const [data, error] = await createPost(newFormData, userId, auth);
    if (data) {
      console.log("data: ", data);
      fetch();
    }
  };

  return (
    <>
      {/* Placeholder */}
      <div className="">
        {/* Modal Toggle Button */}
        <button
          type="button"
          onClick={openModal}
          className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
        >
          {btnText}
        </button>
        {/* END Modal Toggle Button */}
      </div>
      {/* END Placeholder */}

      {/* Modal Container */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-90" onClose={closeModal}>
          {/* Modal Backdrop */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900 bg-opacity-75" />
          </Transition.Child>
          {/* END Modal Backdrop */}

          {/* Modal Dialog */}
          <div className="fixed inset-0 overflow-y-auto p-4 lg:p-8">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-125"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-125"
            >
              <Dialog.Panel className="flex flex-col rounded shadow-sm bg-white overflow-hidden w-full max-w-md mx-auto">
                <div className="py-4 px-5 lg:px-6 w-full bg-gray-50 flex justify-between items-center">
                  <Dialog.Title
                    as="h3"
                    className="font-medium flex items-center space-x-2"
                  >
                    {/* TODO: Insert Icon */}
                    <span>{btnText}</span>
                  </Dialog.Title>

                  <div className="-my-4">
                    <button
                      type="button"
                      className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600"
                      onClick={closeModal}
                    >
                      <svg
                        className="hi-solid hi-x inline-block w-4 h-4 -mx-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Form starts here */}
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6 text-teal-700"
                >
                  <div className="p-5 lg:p-6 grow w-full">
                    <p className="text-gray-600 mb-5">
                      Ask away! Let's find others who can help you.
                    </p>
                    {/* FORM STARTS */}

                    {/* Text Input (small) */}
                    <div className="space-y-1">
                      <label htmlFor="title" className="font-medium">
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter post title"
                        className="w-full block border placeholder-gray-500 px-3 py-2 leading-5 text-sm rounded-lg border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 "
                        {...register("title")}
                      />
                    </div>
                    {/* END Text Input (small) */}

                    <textarea
                      className="mt-4"
                      rows="5"
                      cols="40"
                      placeholder="Enter post content"
                      {...register("content")}
                    />

                    {/* FORM ENDS */}
                  </div>
                  <div className="py-4 px-5 lg:px-6 w-full bg-gray-50 text-right space-x-2">
                    <div
                      className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-transparent text-teal-600 hover:text-teal-400 focus:ring focus:ring-teal-500 focus:ring-opacity-50 active:text-teal-600"
                      onClick={closeModal}
                    >
                      Cancel
                    </div>
                    <button className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-teal-700 bg-teal-700 text-white hover:text-white hover:bg-teal-800 hover:border-teal-800 focus:ring focus:ring-teal-500 focus:ring-opacity-50 active:bg-teal-700 active:border-teal-700">
                      Submit
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
          {/* END Modal Dialog */}
        </Dialog>
      </Transition>
      {/* END Modal Container */}
    </>
  );
};

export default CreateEntry;
