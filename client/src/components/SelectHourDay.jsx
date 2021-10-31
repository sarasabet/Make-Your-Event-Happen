import { useEffect, useState } from 'react'
import axios from 'axios'
import SelectHour from './SelectHour'

function SelectHourDay(props) {
  const [events, setEvents] = useState([])
  const [time, setTime] = useState([])
  const [booking, setBooking] = useState({})

  const minTime = 2
  
 useEffect(() => {
    // for demo purposes, hardcoded URL
   
    // const data = [
    //   {id: 1, name: 'Dance',start_time: '14:00:00', end_time: '18:0:0', img: 'https://media.istockphoto.com/photos/table-setting-for-an-event-party-or-wedding-reception-picture-id479977238?s=612x612'},
    //   {id: 5,name: 'Painting',start_time: '21:00:00', end_time: '24:0:0', img: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'},
    // ]  
    const data = props.events
     console.log("Select Hour.... ", data)
    // setEvents(data)
    // console.log("Select Hour ", events)
    let prev_time = '09'

    for (let time of data) {
       console.log("inside..", Number(time.start_time.substr(0,2)) )
      if ((Number(time.start_time.substr(0,2)) - Number(prev_time) > minTime) ) {    
        console.log("full", time.fullday)
        setTime((t) => {
          t.push(time.id)
          return t;
        })
       prev_time = time.end_time.substr(0,2)
      }
    }
    }, [])

  console.log("TIme..... ", time)
 
 
  // function onSlectTime(start_time, end_time, id) {
  //   setBooking(prev => {
  //     prev[id]= {start_time, end_time}
  //     return {... prev}
  //   })
  // }
  // console.log("booking", booking);

  return (
    <div >
      <h1>Book Your Event</h1>
      <div className="container">
      {
          // events.map((event, index) => <SelectHour  start_time={event.start_time} end_time={event.end_time} time={time} prev_time={events[index-1]}  minTime={minTime} onClick={onSlectTime}/> )
          props.events.map((event, index) => <SelectHour key={events.id} id={events.id} start_time={event.start_time} end_time={event.end_time} time={time} prev_time={events[index-1]}  minTime={minTime} /> )
      }
      </div>
    </div>
  )

}

export default SelectHourDay