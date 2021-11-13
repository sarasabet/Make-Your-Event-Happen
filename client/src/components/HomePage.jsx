import './HomePage.css'
import React from "react";
import { Link} from "react-router-dom";


function HomePage() {
  return (


      <div class="parent-container d-flex">
        <div class="container-left">
          <div class="row">
            <div  class="col">
              <h1>Any event</h1>
              <h1>Every audience</h1>
              <h1>One platform.</h1>
            </div>
          </div>
        </div>

        <div class="container-right">
          <div class="row">
          <i class="fas fa-text-size"></i>
            <div class="col">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit longer
            </div>
            <div class='container-right-linksd' >

              <Link md  className='bookevent-btn md fluid' to="/calender">Book Event</Link>
              <Link md  className='learnMore-btn md' to="/aboutus">Learn More</Link>
            </div>
          </div>
        </div>
      </div>

  )
}

export default HomePage