import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import PlasticDetection from "./components/PlasticDetection/PlasticDetection";

import { auth } from "./firebase";

import "./App.css";

function App() {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      {/* <Router>
      <Navbar name={userName}/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home userId={userId}/>} />
          <Route path="/PlasticDetection" element={<PlasticDetection/>}/>
        </Routes>
      </Router> */}
      <PlasticDetection />
    </div>
  );
}

export default App;
