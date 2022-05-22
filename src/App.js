import React from "react";
import "./App.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
          <Routes>
        <Route    path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
