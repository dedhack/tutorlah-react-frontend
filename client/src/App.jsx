import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
// Components & Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RequireAuth from "./components/RequireAuth";
import Profile from "./pages/Profile";

// Context
import useAuth from "./hooks/useAuth";
import NavigationBar from "./components/NavigationBar";

function App() {
  const { auth } = useAuth();

  return (
    <>
      <NavigationBar />
      <Routes>
        {/* Unprotected Routes */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          {/* Logged in Routes */}
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/error" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
