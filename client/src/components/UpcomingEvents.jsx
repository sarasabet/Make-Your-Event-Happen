import './UpcomingEvents.css'
import moment from 'moment'

import EventCard from './EventCard'
import { useEffect, useState } from 'react'
import axios from 'axios'

function UpcomingEvents(props) {
  const [events, setEvents] = useState([])
  useEffect(() => {
  
    // const data = [
    //   {id: 1, name: 'Waffle', img: 'https://media.istockphoto.com/photos/table-setting-for-an-event-party-or-wedding-reception-picture-id479977238?s=612x612'},
    //   {id: 2,name: 'Doug', img: 'https://images.unsplash.com/photo-1556125574-d7f27ec36a06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'},
    //   {id: 3,name: 'Luna', img: 'https://images.unsplash.com/photo-1549451371-64aa98a6f660?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'},
    //   {id: 4,name: 'MoonMoon', img: 'https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'},
    //   {id: 5,name: 'Rosy', img: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'},
    // ]  
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
    <div className='bg-container'> </div>
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