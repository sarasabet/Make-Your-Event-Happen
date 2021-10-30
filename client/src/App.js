import Navigation from './components/Navigation';
import UpcomingEvents from './components/UpcomingEvents';
import SelectBooking from './components/SelectBooking';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './App.css';
import HomePage from './components/HomePage';
import axios from 'axios'

import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Calender from './components/Calaender'


function App() {

  const [event, setEvent] = useState([]);
  useEffect(() => {
    // for demo purposes, hardcoded URL
    axios.get("http://localhost:3001/api/events/2021-10-30")
      .then(res => {
        setEvent(prev => [...prev, res.data])
        //setEvent(res.data)
      })
  }, [])
  console.log("events'", event)


  return (
    <div className="App">
      <Router>

        <Navigation />
        <HomePage />
        <UpcomingEvents />
        <SelectBooking />
        <SignIn />
        <SignUp />
        <Calender event={event[0]}/>

      </Router>

    </div >
  );
}

export default App;
