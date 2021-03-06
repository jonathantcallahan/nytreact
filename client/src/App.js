import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Header from './components/header/Header'
import axios from 'axios'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Route exact path='/' component={Home} />
          <Route exact path='/favorites' component={Favorites}/>
        </div>
      </Router>
      );
  }
}

export default App;
