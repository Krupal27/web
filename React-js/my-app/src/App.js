// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Test from "./Component/Test";
import Home from "./Component/Home";
import About from "./Component/About";
import Product from "./Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./coman-component/Navbar";

function App() {
  return (
    <>
      {/* <h1>App React</h1> */}
      {/* <Test/> */}

      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<><Navbar/> <Home/></>} />
          <Route path="/about" element={<><Navbar/> <About/></>} />
          <Route path="/product" element={<><Navbar/><Product/></>} /> */}
          <Route path="/" element={<Navbar />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="product" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
