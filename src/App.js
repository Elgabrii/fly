import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Landing from './views/Landing';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Landing />
      </div>
    );
  }
}

export default hot(module)(App);