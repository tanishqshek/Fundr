import React from 'react';
// import './App.css';
// import Container from './container/Container';
import { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;