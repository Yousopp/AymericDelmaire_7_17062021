import logo from './icon-left-font-monochrome-white.png';
import React from 'react';
import Login from './components/Login';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Signup from './components/Signup';
import Post from './components/Post';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Router>

        <Navigation />

        <Route path='/' exact component={Home}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/signup' exact component={Signup}/>
        <Route path='/post' exact component={Post}/>

      </Router>
    </div>
  );
}

export default App;
