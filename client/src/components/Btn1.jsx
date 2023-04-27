import React from "react";

const Btn1 = ({ btnText }) => {
  return (
    <>
      <button
        type=""
        className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
      >
        {btnText}
      </button>
    </>
  );
};

export default Btn1;
