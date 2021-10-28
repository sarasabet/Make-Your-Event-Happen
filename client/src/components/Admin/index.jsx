import './admin.css'
import {setState, useEffect, useState} from 'react'
import axios from 'axios'
import EventRequest from './EventRequest'

function Admin() {
  const [eventreqs, setEventreqs] = useState([])
  useEffect(() => {
    const data = [{
      id: 1,
      name: "Cooking Event",
      email: "abc@abc.com",
      description: "It is all about cooking ",
      no_of_people: 150,
      date: '31st Oct',
      start_time: '5pm',
      end_time: '8pm'
    },
    {
      id: 2,
      name: "Music Event",
      email: "example@abc.com",
      description: "It is all about Music ",
      no_of_people: 100,
      date: '31st Oct',
      start_time: '9pm',
      end_time: '12pm'
    }
  ]
    setEventreqs(data)
  }, [])
 
  return (
    <div className="admin-container">
      <div className="container">
        <div className="admin-nav">
          <div className="admin-nav-left"><h1>Make Your Event Happen</h1></div>
          <div className="admin-nav-right"><h4>Messages</h4></div>
        </div>
      <div class="mt-3 border-top border-light">
      <h4 className="mt-5 mb-5 fst-italic fw-light">Here are some new reaquest</h4>
        {
          eventreqs.map(eventreq =>  <EventRequest key={eventreq.id} name={eventreq.name} desc={eventreq.description} date={eventreq.date} start_time={eventreq.start_time} end_time={eventreq.end_time}/>)
        }  
      </div>
  
      </div>
    </div>
   
  )

}

export default Admin