import { useEffect, useState } from 'react'
import axios from 'axios'
import SelectHour from './SelectHour'

function SelectHourDay(props) {
  const [events, setEvents] = useState([])
  const [time, setTime] = useState([])
  const [booking, setBooking] = useState({})

  const minTime = 2
  
 useEffect(() => {

    const data = props.events
  
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