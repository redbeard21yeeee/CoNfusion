import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./Components/MenuComponent";
import { DISHES } from "./shared/dishes";
import { BrowserRouter } from 'react-router-dom';
import "./App.css";
import Main from './Components/maincomponents';

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
