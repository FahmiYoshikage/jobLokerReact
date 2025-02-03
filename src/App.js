import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Notification, Body, Navbar, Footer, AdminPanel} from "./components";
import "./App.css"; 
import "bootstrap/dist/css/bootstrap.min.css";

const App = ({ searchQuery, setSearchQuery }) => {
  return (
    <Router>
      <Navbar></Navbar>
      <Notification></Notification>
      <div>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
      <Footer></Footer>
      {/* <JobItem/> */}
      {/* <JobList></JobList> */}
    </Router>
  );
};

export default App;
