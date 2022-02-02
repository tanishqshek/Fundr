import React, { Component } from "react";
import Login from "./LoginComponent";
import Test from "./TestComponent";
import Signup from "./SignUpComponent";
// import ConfigComp from './ConfigComponent';
import { Routes, Route, Navigate } from "react-router-dom";

// import MyProfile from './MyProfile';

class Main extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Login/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/signup" element={<Signup/>}></Route>
                </Routes>
            </div>
        );
    }
}

export default Main;