import React, { Component } from 'react';
import './App.css';
import SideBar from './Components/SideBar';
import Main from './Components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar/>
        <Main/>
      </div>
    );
  }
}
export default App;
