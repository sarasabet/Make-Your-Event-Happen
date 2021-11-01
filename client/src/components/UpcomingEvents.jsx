import './UpcomingEvents.css'

import EventCard from './EventCard'
import { useEffect, useState } from 'react'
import axios from 'axios'

function UpcomingEvents(props) {
  const [events, setEvents] = useState([])
  useEffect(() => {
    // for demo purposes, hardcoded URL
    const data = [
      {id: 1, name: 'Waffle', img: 'https://media.istockphoto.com/photos/table-setting-for-an-event-party-or-wedding-reception-picture-id479977238?s=612x612'},
      {id: 2,name: 'Doug', img: 'https://images.unsplash.com/photo-1556125574-d7f27ec36a06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'},
      {id: 3,name: 'Luna', img: 'https://images.unsplash.com/photo-1549451371-64aa98a6f660?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'},
      {id: 4,name: 'MoonMoon', img: 'https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'},
      {id: 5,name: 'Rosy', img: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'},
    ]  
      setEvents(data)
  }, [])

  return(
    <div>
    <div className='bg-container'> </div>
      <h1 className="mt-2 text-start ms-5">Upcoming Events</h1>
      <div className = "card-container">
        {        
           events.map(event => <EventCard key={event.id} name={event.name} image={event.img}/>)
        }
      </div>
    </div>
   
  
  )
}

export default UpcomingEvents