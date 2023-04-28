import React, { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
const Logout = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setAuth(null);
      navigate("/home");
    }, 3000);
  }, []);

  return (
    <div>
      <div className="bg-gray-500 h-screen">
        <div className="flex justify-center text-center">
          <div className="w-96 my-32 p-5 border border-stone-500 rounded-lg bg-neutral text-white">
            Logging out..
            <div className="mt-5">
              <Spinner />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
