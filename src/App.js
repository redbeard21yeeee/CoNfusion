import React, { Component } from "react";
 import { Navbar, NavbarBrand } from "reactstrap";
 import Menu from "./Components/MenuComponent";
 import { DISHES } from "./shared/dishes";
import { BrowserRouter } from 'react-router-dom';
import "./App.css";
import Main from './Components/maincomponents';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configurestore';

const store = ConfigureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
