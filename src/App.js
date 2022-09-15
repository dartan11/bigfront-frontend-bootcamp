import React from "react";
import logo from "./logo.png";
import "./App.css";
import { Link, Outlet, Navigate } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Link to="sightings">Sightings</Link> */}
          <p>hii</p>
          <p>'Hello homepage!' </p>
        </header>
        <Outlet />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default App;
