import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Tours from "../pages/Tours";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchResultList from "../pages/SearchResultList";
import ToursDetails from "../pages/ToursDetails";
import ThankYou from "../pages/ThankYou";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Contact from "../componets/Contact/Contact";
import Service from "../componets/service/Service";
// import Home from "../pages/Home";
const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/services" element={<Service />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/tours/:id" element={<ToursDetails />} />
        <Route path="/tours/search" element={<SearchResultList />} />
      </Routes>
    </div>
  );
};

export default Routers;
