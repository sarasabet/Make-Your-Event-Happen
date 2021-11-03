import './AboutUs.css'
import React from "react";
import { Link} from "react-router-dom";


function Aboutus() {
  return (
    <div className="parent-container"> 
    <div className='div-container'>
      <div className='col-6' >
      <i className="fas fa-3x ">
            Add you viewing ten equally believe put. Separate families my on drawings do oh offended strictly elegance. 
      </i>
      </div>
      <div className='col-6 pt-5' >
        <Link md  className='bookevent-btn md fluid' to="/calender">Book Event</Link>
      </div>
    </div>
  
    </div>

  )
}

export default Aboutus