import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
// Components & Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RequireAuth from "./components/RequireAuth";
import Profile from "./pages/Profile";
import Subjects from "./pages/Subjects";
import Subject from "./pages/Subject";
import IndivPost from "./pages/IndivPost";
import Logout from "./pages/Logout";

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
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/subjects/:subject" element={<Subject />} />
        <Route path="/logout" element={<Logout />} />

        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          {/* Logged in Routes */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/subjects/:subject/:postId" element={<IndivPost />} />
        </Route>
        <Route path="/error" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
