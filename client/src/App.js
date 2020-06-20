import React from 'react';
import './App.css';
import LandingPage from  './pages/LandingPage/LandingPage';
import SpiritualWritings from './pages/SpiritualWritings/SpiritualWritings';
import HistoricalWritings from './pages/HistoricalWritings/HistoricalWritings';
import Writing from './pages/Writing/Writing';
import {Route,Router} from 'react-router-dom'
import history from './history';

function App() {
  return (
    <div className = "App">
      <Router history = {history}>
        <Route path = "/" component = {LandingPage} exact/>
        <Route path = "/spiritualwritings" component = {SpiritualWritings} exact/>
        <Route path = "/historicalwritings" component = {HistoricalWritings} />
        <Route path = "/spiritualwritings/writing" component = {Writing} exact/>
        <Route path = "/historicalwritings/writing" component = {Writing} exact/>
      </Router>
    </div>
  );
}

export default App;
