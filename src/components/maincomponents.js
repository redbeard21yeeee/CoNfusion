import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { COMMENTS } from './shared/comments';
import { PROMOTIONS } from './shared/promotions';
import { LEADERS } from './shared/leaders';
import Menu from './MenuComponent';
import Home from './HomeComponents';
import DishDetail from './DishDetailComponent';
import { DISHES } from './shared/dishes';
import Header from './headercomponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './AboutComponent';
import Contact from './ContactComponent';

class Main extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS
      };
    }

  render(){

    const HomePage = () => {
      return(
          <Home 
          />
      );
    }

  
    return (
      <div>
          <Header/>
        <Switch>
              <Route path='/home' render={HomePage} />
              <Route exact path='/menu' render={() => <Menu dishes={this.state.dishes} />} />
              <Route exact path='/contactus' render={Contact} />} />
              <Route exact path='/aboutus' render={() => <About leaders={this.state.leaders} />} />
              <Redirect to="/home" />
          </Switch>
          <Footer/>
      </div>
    );
  }
}


export default Main;