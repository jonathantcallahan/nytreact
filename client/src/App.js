import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/header/Header'
import Search from './components/search/Search'
import './App.css';

class App extends Component {

  constructor(){
    super()
    
    this.state = {
      topic: '',
      start: '',
      end: ''
    }
  }

  setSearch = (search) => {
    this.setState({...search})
  }

  renderArticles = () => {

  }

  render() {
    return (
      <div>
        <Header />
        <Search update={this.setSearch} search={this.setSearch}/>
      </div>
    );
  }
}

export default App;
