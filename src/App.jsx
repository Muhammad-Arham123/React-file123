import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom/dist";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
export default  function App(){
    return(
        <>
        <Navbar />
<Routes>
    <Route path="/" element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path="/contactUs" element={<ContactUs />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path='/services' element={<Services />} />
</Routes>
        </>
    )
 }