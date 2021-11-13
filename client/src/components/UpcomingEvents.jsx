import './UpcomingEvents.css'
import moment from 'moment'
import {Card, Row , Col} from 'react-bootstrap'
import EventCard from './EventCard'
import { useEffect, useState } from 'react'
import axios from 'axios'

function UpcomingEvents(props) {
  const [events, setEvents] = useState([])
  useEffect(() => {
  
    axios.get("http://localhost:3001/api/events")
    .then(res => {
      
      // setEvent(prev => [...prev, res.data])
      //setEvent(res.data)
      const items = []
      const date_s = new Date()
      const date = moment(date_s).format().slice(0,10)
      const upcomin_events = res.data
      for(let item in upcomin_events) {
        if(upcomin_events[item].start_date >= date) {
          items.push(upcomin_events[item])
        }
      }

        setEvents(items)
    })

  }, [])
  
  const selectedImage = (e) => {
    console.log("Event id", e.target)
  }
  
  return(
    <div className='bg-container'>
      <h1 className="mt-2 text-start ms-5 container">
      <i className="fas fa-1x ">
        Upcoming Events
      </i>
      </h1>
<div className="container" style={{columnCount: "3"}}>
<div>

          
        {        
           events.map(event => <EventCard key={event.id} event ={event}  onClick={selectedImage}/>)
        }
  
</div>
    </div>
  </div>


  
  )
}

export default UpcomingEvents