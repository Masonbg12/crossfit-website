import React from "react";
import { useLocation } from "react-router-dom";
import Router from "./Router.js";
import Navigation from "./components/Navigation.js";
import Footer from "./components/Footer.js";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// THINGS TO DO:
// Overall styling
// simple documentation
// Need pics from mom to update home page, meet the coaches, about us, and store
// Free Trial email setup ******DONE********
// Contact Us information card style update
// Store needs list of items and pictures
// actually create a post
// create instructions on how to best format posts
// test all of the functions of posting/updating/deleting
// remove all photos more than 2 years back for storage ******DONE********
// test removal functionality

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
