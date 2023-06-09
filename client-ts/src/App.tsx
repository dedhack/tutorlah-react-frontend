import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./routes/home";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Home />}>
    
  </Route>)
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
