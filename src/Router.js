import React from "react";
import { Routes, Route } from "react-router";

// pages to import
import Home from "./components/pages/Home.js";
import Programs from "./components/Programs.js";
import WOD from "./components/pages/Wod.js";
import Schedule from "./components/pages/Schedule.js";
import Store from "./components/pages/Store.js";
import AboutUs from "./components/pages/AboutUs.js";
import ContactUs from "./components/pages/ContactUs.js";
import PostWod from "./components/pages/PostWod.js";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Programs" element={<Programs />} />
      <Route path="/WOD" element={<WOD />} />
      <Route path="/Schedule" element={<Schedule />} />
      <Route path="/Store" element={<Store />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/postWOD" element={<PostWod />} />
    </Routes>
  );
};

export default Router;
