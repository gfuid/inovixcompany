import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Hero from "./components/Hero.jsx"; // optional extra route

const App = () => {
  return (
    <Router>
 

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/hero" element={<Hero />} />
  </Routes>
  
</Router>

  );
};

export default App;
