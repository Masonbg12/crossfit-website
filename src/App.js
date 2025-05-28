import React from "react";
import { useLocation } from "react-router-dom";
import Router from "./Router.js";
import Navigation from "./components/Navigation.js";
import Footer from "./components/Footer.js";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// THINGS TO DO:
// Free Trial email setup ******DONE********
// actually create a post ******DONE********
// create instructions on how to best format posts ******DONE********
// remove all photos more than 2 years back for storage ******DONE********

// test removal functionality
// test all of the functions of posting/updating/deleting
// Store needs list of items and pictures
// Contact Us information card style update
// Overall styling
// simple documentation
// Need pics from mom to update home page, meet the coaches, about us, and store

function App() {
  const location = useLocation();
  return (
    <div>
      <Navigation />
      <Router />
      {location.pathname !== "/postWOD" && <Footer />}
    </div>
  );
}

export default App;
