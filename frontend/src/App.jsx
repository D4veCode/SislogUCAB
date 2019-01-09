import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './Routes.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <div>
              <BaseRouter/>
            </div> 
        </Router>
      </div>
    );
  }
}

export default App;
