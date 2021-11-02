import './UpcomingEvents.css'
import moment from 'moment'

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
      console.log("data events...", upcomin_events)
      for(let item in upcomin_events) {
        console.log("start date",upcomin_events[item].start_date, date )
        if(upcomin_events[item].start_date >= date) {
          items.push(upcomin_events[item])
        }
      }
      console.log("items..", items)
        setEvents(items)
    })

  }, [])
  
  const selectedImage = (e) => {
    console.log("Event id", e.target)
  }
  
  return(
    <div>
    {/* <div className='bg-container'> </div> */}
      <h1 className="mt-2 text-start ms-5">Upcoming Events</h1>
      <div className = "card-container">
        {        
           events.map(event => <EventCard key={event.id} event ={event}  onClick={selectedImage}/>)
        }
      </div>
    </div>
   
  
  )
}

export default UpcomingEvents