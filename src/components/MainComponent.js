import React, { Component } from 'react';
import Home from './HomeComponent';
import Set from './SetComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SETS } from '../shared/sets';
import { CARDS } from '../shared/cards';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sets: SETS,
      cards: CARDS
    };
  }

  render() {
    
    const HomePage = () => {
      return(
          <Home 
              feature1={this.state.sets.filter((set) => set.featured)[0]}
              feature2={this.state.sets.filter((set) => set.featured)[1]}
              feature3={this.state.sets.filter((set) => set.featured)[2]}
          />
      );
    }
    
    
    
    return (
      <div>
        <Header />
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route path='/sets' component={() => <Set cards={this.state.cards} />} />
              <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
