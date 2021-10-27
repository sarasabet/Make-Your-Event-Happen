import './HomePage.css'
import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function HomePage() {
  return (
    <Router>
    <div class='container-homepage'>
      <div>
        <p>Any event</p>
        <p>Every audience</p>
        <p>One platform.</p>
      </div>
      <div>
        <div>
        MYEH is the all-in-one event platform that powers continuous engagement to drive better results for virtual, in-person, and hybrid events.
        </div>
        <div></div>
      <Link class='bookevent-btn'to="/bookevent">Book Event</Link>
      </div>
      <div>
      <Link class='learnMore-btn'to="/aboutus">Learn More</Link>
      </div>
      </div>

    </Router>
  )
}

export default HomePage