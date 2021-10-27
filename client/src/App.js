import Navigation from './components/Navigation';
import UpcomingEvents from './components/UpcomingEvents';
import SelectBooking from './components/SelectBooking';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './App.css';
import SelectHourDay from './components/SelectHourDay'
import HomePage from './components/HomePage';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Navigation />
        <HomePage/>
        <UpcomingEvents />
        <SelectBooking />
        <SignIn />
        <SignUp />

        <SelectHourDay />

      </Router>

    </div >
  );
}

export default App;
