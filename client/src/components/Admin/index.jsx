import './admin.css'
import {setState, useEffect, useState} from 'react'
import axios from 'axios'
import EventRequest from './EventRequest'
import { atom, useRecoilState } from 'recoil'
import { eventRequests as eventRequestAtom } from '../atoms'


function Admin() {
  const [events, setEvents] = useState([])
  const [eventRequests, setEvent] = useRecoilState(eventRequestAtom)
  let eve = []
  // const incomingRequests = [{
  //   name: "Dance",
  //   description: 'dance',
  //   date: '2021-11-04',
  //   start_time: '8 PM',
  //   end_time:   '10 PM',
  //   is_active:   'false',
  //   purpose:    'Personal',
  //   image: 'https://www.danceinforma.com/wp-content/uploads/2019/12/Alvin-Ailey-American-Dance-Theater.-Photo-by-Andrew-Eccles..jpg'
  // }]
  useEffect(() => {
    const url = `api/event_bookings/`
    console.log("url....", url)
  
    const params = {confirmation: 'false'}

    axios.get("api/event_bookings" , {params})
      .then(res => {     
        const data = res.data
        // console.log("data for admin", data)
        for (let item of data)
        {
          // console.log("item...", item)
          const event = {}
          event['event_id'] = item.event_id
          event['user_id'] = item.user_id
          axios.get(`/api/users/${event['user_id']}`)
            .then(res => {
              const data = res.data
              // console.log("user data", data)
              event['user_name'] = data['name']
                axios.get(`/api/events/${event['event_id']}`)
                .then(res => {
                  const data = res.data
                  console.log("event data", data)
                  event['start_date'] = data['start_date']
                  event['end_date'] = data['end_date']
                  event['start_time'] = data['start_time']
                  event['end_time'] = data['end_time']
                  event['description'] = data['description']
                  eve.push(event)
                  setEvents(prev => [...eve])
                  console.log("eve spred", [...eve])
            })
        })
          // events.push(event)
  
        }
        
  
    }) 
    
    }, [])

    events.map(e => console.log("Eeeeeeee",  e))
    console.log("events array", events)
    
  return (
    <div className="admin-container">
      <div className="container">
        <div className="admin-nav">
          <div className="admin-nav-left"><h5>You are logged in as ADMIN</h5></div>
          <div className="admin-nav-right text-danger">        <h3 className=" ms-3"style={{color: 'tomato'}}><i class="fas fa-envelope"></i></h3></div>
        </div>
      <div class="mt-3 border-top border-light">
      <h4 className="mt-5 mb-5 fst-italic fw-light">Here are some new reaquest</h4>
        {
          events.map(eventreq =>  <EventRequest key={eventreq.id} name={eventreq.name} desc={eventreq.description} date={eventreq.date} start_time={eventreq.start_time} end_time={eventreq.end_time}/>)
        }  
      </div>
  
      </div>
    </div>
   
  )

}

export default Admin