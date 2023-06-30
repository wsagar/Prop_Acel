import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Contents from "./Components/Content";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="container box-border h-full">
        <div className="bg-white-200 h-full mx-32 border-2 border-black border-solid overflow-scroll no-scrollbar">
          <Header />
          <Contents />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
