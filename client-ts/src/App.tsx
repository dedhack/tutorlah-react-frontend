import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "./routes/Home";
import MainBar from "./routes/MainBar";
import AuthLayout from "./routes/Auth/AuthLayout";
import Login from "./routes/Login";
import Subjects from "./routes/Auth/Subjects";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainBar />}>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />

      <Route element={<AuthLayout />}>
        <Route path="subjects" element={<Subjects />} />
        {/* <Route path="logout" /> */}
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
