// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Test from "./Test";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      {/* <h1>App React</h1> */}
      {/* <Test/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Navbar/> <Home/></>} />
          <Route path="/about" element={<About/>} />
          <Route path="/product" element={<Product/>} />
        </Routes>

      </BrowserRouter>
    </>

  );
}

export default App;
