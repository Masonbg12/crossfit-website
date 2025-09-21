import React from "react";
import { useLocation } from "react-router-dom";
import Router from "./Router.js";
import Navigation from "./components/Navigation.js";
import Footer from "./components/Footer.js";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ChatBot from "./components/ChatBot.js";

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = React.useState(false);
  
  return (
    <div style={{ backgroundColor: "var(--bg-light1)", minHeight: "100vh" }}>
      <Navigation />
      <Router setIsLoading={setIsLoading} />
      {location.pathname !== "/postWOD" && !isLoading && <Footer />}
      <ChatBot />
    </div>
  );
}

export default App;
