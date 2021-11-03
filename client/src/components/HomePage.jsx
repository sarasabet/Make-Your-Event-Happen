import './HomePage.css'
import React from "react";
import { Link} from "react-router-dom";


function HomePage() {
  return (


      <div className="parent-container d-flex">
        <div className="container-left">
          <div className="row">
            <div  className="col">
            <i className="fas fa-5x">
              <p>Any event</p>
              <p>Every </p>
                <p>audience</p>
              <p>One platform.</p></i>
            </div>
          </div>
        </div>

        <div className="container-right">
          <div className="row">
            <div className="col">
            
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit longer
            </div>
            <div className='container-right-linksd ' >

              <Link md  className='bookevent-btn md fluid' to="/calender">Book Event</Link>
              <Link md  className='learnMore-btn md' to="/aboutus">Learn More</Link>
            </div>
          </div>
        </div>
      </div>

  )
}

export default HomePage