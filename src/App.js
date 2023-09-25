import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Attendance from "./components/Attendance";
import Events from "./components/Events";
import Activities from "./components/Activities";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/events" element={<Events />} />
          <Route path="/activities" element={<Activities />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
