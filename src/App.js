import React from "react";
import Router from "./Router.js";
import Header from "./components/Header.js";
import Navigation from "./components/Navigation.js";
import Footer from "./components/Footer.js";
import "./styles/App.css";

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
