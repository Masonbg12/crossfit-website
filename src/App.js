import React from "react";
import Router from "./Router.js";
import Navigation from "./components/Navigation.js";
import Footer from "./components/Footer.js";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navigation />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
