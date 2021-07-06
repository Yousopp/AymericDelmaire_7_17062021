import logo from './icon-left-font-monochrome-white.png';
import React from 'react';
import Loading from './conponents/Loading';
import Navigation from './conponents/Navigation';
import Home from './conponents/Home';
import Signup from './conponents/Signup';
import Post from './conponents/Post';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Router>

        <Navigation />

        <Route path='/' exact component={Home}/>
        <Route path='/Loading' exact component={Loading}/>
        <Route path='/Signup' exact component={Signup}/>
        <Route path='/Post' exact component={Post}/>

      </Router>
    </div>
  );
}

export default App;
