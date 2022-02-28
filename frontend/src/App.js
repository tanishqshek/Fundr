import React from "react";
// import './App.css';
// import Container from './container/Container';
import { Component } from "react";
import Main from "./components/MainComponent";
import { BrowserRouter as Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Routes>
        <div className="App">
          <Main />
        </div>
      </Routes>
    );
  }
}

export default App;
