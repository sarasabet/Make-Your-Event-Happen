import Navigation from './components/Navigation';
import UpcomingEvents from './components/UpcomingEvents';
import SelectBooking from './components/SelectBooking';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './App.css';
import HomePage from './components/HomePage';
import axios from 'axios'
import CalaenderH from './components/CalaenderH'
import EventInfo from './components/EventInfo';
import Footer from './components/Footer';
import SelectHourDay from './components/SelectHourDay';


import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Calender from './components/Calaender'
import SelectHour from './components/SelectHour';


function App() {


  const [event, setEvent] = useState([]);
  const [show, setShow] = useState('')
  useEffect(() => {
    // for demo purposes, hardcoded URL
    axios.get("http://localhost:3001/api/events")
      .then(res => {

        setEvent(prev => [...prev, res.data])
        //setEvent(res.data)
      })
  }, [])

  const handleSelectBooking = (e) => {
    console.log("select booking", e.target.value)
    setShow(prev => prev = e.target.value)
  }

  console.log("Show set", show)
  return (
    <div className="App">
      <Router>
{/* 
        
        <Navigation />
        <HomePage />
        <UpcomingEvents />
        <SelectBooking onSelect={handleSelectBooking}/>
        { show === 'hour' ?   <CalaenderH event = {event[0]}/> :   <Calender event= {event[0]}/>}
        <SignIn />
        <SignUp />
        <Calender event={event[0]} />
        <CalaenderH event={event[0]} />
        <EventInfo /> */}
        <Navigation />
        <Switch>

          <Route path="/eventinfo" exact component={EventInfo} />
          <Route path="/eventinfo" exact component={EventInfo} />
          <Route path="/calender" exact component={SelectBooking} />
          <Route path="/selecthours" exact component={CalaenderH}/>
          <Route path="/selectdays" exact component={Calender}/>
   
          <Route path="/">
            <HomePage />
            <UpcomingEvents />
            <Footer />
          </Route>

        </Switch>



      </Router>

    </div >
  );
}

export default App;
