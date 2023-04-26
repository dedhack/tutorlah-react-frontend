import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
// Components & Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import RequireAuth from "./components/RequireAuth";

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

        {/* Protected Routes */}
        <Route element={<RequireAuth />}>{/* Logged in Routes */}</Route>
      </Routes>
    </>
  );
}

export default App;
