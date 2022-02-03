import React, { Component } from "react";
import Login from "./LoginComponent";
import Test from "./TestComponent";
import Signup from "./SignUpComponent";
// import ConfigComp from './ConfigComponent';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";

// import MyProfile from './MyProfile';

class Main extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Login/>}></Route>
                    <Route path="/signup" element={<Signup/>}></Route>
                    
                    <Route path="/test" element={<Test/>}></Route>
                </Routes>
            </div>
        );
    }
}

export default Main;