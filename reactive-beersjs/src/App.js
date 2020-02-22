import React from 'react';
import './App.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import BeerList from './components/BeerList.js';
import NewBeer from "./components/NewBeer.js"
import BeerDetailsFocus from './components/BeerDetailsFocus.js';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/beers" component={BeerList}/>
          <Route exact path="/beers/:id" component={BeerDetailsFocus}/>
          <Route exact path="/random-beers" component={BeerDetailsFocus}/>
          <Route exact path="/new-beer" component={NewBeer}/>
        </Switch>
    </div>
  );
}

export default App;
