import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Login from './views/Login';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default hot(module)(App);