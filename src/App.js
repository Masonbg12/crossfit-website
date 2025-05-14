import React from "react";
import { useLocation } from "react-router-dom";
import Router from "./Router.js";
import Navigation from "./components/Navigation.js";
import Footer from "./components/Footer.js";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
