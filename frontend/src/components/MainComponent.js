import React, { Component } from "react";
import Login from "./LoginComponent";
import Dashboard from "./DashboardComponent";
import Signup from "./SignUpComponent";
// import ConfigComp from './ConfigComponent';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";

// import MyProfile from './MyProfile';

class Main extends Component {
    render() {
        return (
            <div>
                
                <Routes>
                    <Route path="/" element={<Login/>}></Route>
                    <Route path="/signup" element={<Signup/>}></Route> 
                </Routes>
                <Navbar />
                <Routes>
                    <Route path="/home" element={<Dashboard/>}></Route>
                </Routes>
            </div>
        );
    }
}

export default Main;