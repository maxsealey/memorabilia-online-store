import './App.scss';
import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import RouterURL from './components/RouterURL';
import NavBar from './components/layout/NavBar';

class App extends Component {
  render() { 
    return (
      <div className="app"> 
        <Router>
          <div>
            <NavBar />
            <RouterURL />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
