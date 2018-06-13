import React, { Component } from 'react';
import router from './Router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {router}
      </div>
    );
  }
}

export default App;
