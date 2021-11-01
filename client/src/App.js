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
import ShowOneEvent from './components/ShowOneEvent';
import AboutUs from './components/AboutUs'


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
        console.log("data", res.data)
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
        
        <Navigation />
        <Switch>

          <Route path="/eventinfo" exact component={EventInfo} />
          <Route path="/calender" exact component={SelectBooking} />
          <Route path="/signin" exact component={SignIn}/>
          <Route path="/signup" exact component={SignUp}/>
          <Route path="/showoneevent/:id" exact component={ShowOneEvent}/>
          <Route path="/aboutus" exact component={AboutUs}/>

           <Route path="/selectdays">
           <Calender event={event[0]} />
           </Route> 
           <Route path="/selecthours">
           <CalaenderH event={event[0]} />
           </Route> 
   
          <Route path="/">
            <HomePage />
            <UpcomingEvents events={event[0]}/>
          </Route>


          </Switch>

          <Footer />

      </Router>

    </div >
  );
}

export default App;