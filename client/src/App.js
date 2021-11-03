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
import ShowOneEvent from './components/ShowOneEvent';
import AboutUs from './components/AboutUs'
import Payment from './components/Payment'
import EventSummary from './components/EventSummary';


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

  const handleInfo= (dateTime) => {
    console.log("select booking", dateTime)
    setShow(prev => ({...prev, dateTime}))
  }

  console.log("Show set", show)
  return (
    <div className="App container">
      <Router>

        <Navigation />

        <Switch>
        <Route path="/showoneevent/:id" render={(props) => <ShowOneEvent {...props} />} />
          <Route path="/eventinfo" exact component={EventInfo} />
          <Route path="/calender" exact component={SelectBooking} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/aboutus" exact component={AboutUs} />
          <Route path="/eventsummary" exact component={EventSummary}/>
          <Route path="/payment" exact component={Payment}/>
    
          <Route path="/selectdays">
            <Calender event={event[0]} />
          </Route>

          <Route path="/selecthours">
            <CalaenderH event={event[0]} getInfo={handleInfo}/>
          </Route>

          <Route path="/">
            <HomePage />
            <UpcomingEvents events={event[0]} />
            <SelectBooking />
          </Route>


        </Switch>

        <Footer />

      </Router>
 

    </div >
  );
}

export default App;