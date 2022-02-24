import React, { Component } from "react";
import Login from "./Homepage";
import Dashboard from "./DashboardComponent";
import Signup from "./SignUpComponent";
import Signin from "./SignInComponent";
// import ConfigComp from './ConfigComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

// import MyProfile from './MyProfile';

class Main extends Component {
  render() {
    return (
      <div>
                <Navbar />
        <Routes>
        <Route path="/home" element={<Dashboard />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
        </Routes>
      </div>
    );
  }
}

export default Main;
