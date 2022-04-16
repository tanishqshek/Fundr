import React, { Component, useState } from "react";
import Login from "./Homepage";
import Dashboard from "./DashboardComponent";
import Signup from "./SignUpComponent";
import Signin from "./SignInComponent";
import BusinessIdea from "./BusinessIdea"
// import ConfigComp from './ConfigComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ScrollButton from "./ScrollButton";
import TagFilter from "./TagFilter";
import SettingsPage from "./Pages/Settings/SettingsPage";
import PrivacyPage from "./Pages/Settings/PrivacySettings";
import FounderDashboard from "./FounderDashboard";
import Process from "./process";
import ErrorPage from "./ErrorPage";
// import ProtectedRoute from './ProtectedRoute';

function Main() {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [tagSet, setTagSet] = useState(false);
    return (
      <div>
        <Navbar isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}/>
        <ScrollButton/>
        <Routes>
        
          <Route path="/" element={<Login />}></Route>
          
              <Route path="/businessidea" element={<BusinessIdea />}></Route>
              <Route path="/tagfilter" element={<TagFilter />}></Route>
              <Route path="/home" element={<Dashboard />}></Route>
              <Route path="/privacy" element={<PrivacyPage user={user}/>}></Route>
              <Route path="/founderdash" element={<FounderDashboard />}></Route>
              <Route path="/process" element={<Process />}></Route>
              <Route path="/settings" element={<SettingsPage/>}></Route>
            
          
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} setUser={setUser}/>}></Route>
          
          <Route path="/errorpage" element={<ErrorPage />}></Route>

        </Routes>
      </div>
    );
  }


export default Main;