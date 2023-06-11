import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthLayout = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is logged in.
  // TODO: Replace this with actual authentication logic.
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location]);

  if (isLoggedIn) {
    return (
      <div>
        {/*Protected Routes here*/}
        <Outlet />
      </div>
    );
  }

  // If user is not authenticated, redirect them to the login page
  return <Navigate to="/login" />;
};

export default AuthLayout;
