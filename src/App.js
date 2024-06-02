import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Calculus from "./topics/Calculus";
import Physics from "./topics/Physics";
import Electronics from "./topics/Electronics";
import Leetcode from "./topics/Leetcode";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculus" element={<Calculus />} />
        <Route path="/physics" element={<Physics />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/leetcode" element={<Leetcode />} />
      </Routes>
    </Router>
  );
}

export default App;
