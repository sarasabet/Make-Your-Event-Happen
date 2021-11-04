import React, { useState, useEffect } from "react";
import useApplicationData from '../hooks/useApplicationData'
import Card from 'react-bootstrap/Card'
import { ListGroup, Button } from 'react-bootstrap'
import moment from 'moment'
import './EventSummary.css'
import { Link } from "react-router-dom";
import axios from 'axios'
import { atom , useRecoilValue } from 'recoil'
import { eventId as eventIdAtom } from './atoms'



function EventSummary(props) {
  const event_id = useRecoilValue(eventIdAtom)
  const [eventSummary, setEventSummary] = useState([])
  const timeDisplay = {0: '0', 9: '9 AM', 10: '10 AM' , 11: '11 AM', 12: '12 AM', 13: '1 PM', 14: '2 PM', 15: '3 PM', 16: '4 PM', 17: '5 PM', 18: '6 PM', 19: '7 PM', 20: '8 PM', 21: '9 PM', 22: '10 PM', 23: '11 PM', 24: '12 PM' }
  const { user } = useApplicationData()

  useEffect(() => {
    // for demo purposes, hardcded URL
    const temp = 6
    axios.get(`api/events/${temp}`)
      .then(res => {
        console.log("data", res.data)
        const data = res.data;
        console.log("data from summary", res.data)
        
        setEventSummary(prev =>(data))
        //setEvent(res.data)
      })
  }, [])

  
  const summary = eventSummary
  console.log("Summary", summary)
  console.log("eventSummary", summary)
  const start_date = moment(summary.start_date).format().slice(0, 10).split('-').join('')
  const end_date = moment(summary.end_date).format().slice(0, 10).split('-').join('')
  let start_time;
  let end_time
  if(summary.start_time) {
    start_time = Number(summary.start_time.substr(11,2))
    end_time = Number(summary.end_time.substr(11,2))
  } else {
    start_time = 0
    end_time = 0
  }

  // const total_hours = Number(summary.end_time.substr(11,2)) - Number(summary.start_time.substr(11,2));
   const total_hours = end_time - start_time
  const total_days = end_date - start_date;
  const price = 200

  const claculateTotalPrice = (total_hours, total_days) => {
    let total_price;
    if ((summary.start_time === '09:00:00') && (summary.end_time === '00:00:00')) {
      total_price = (total_days + 1) * price * 14
    }
    else {
      total_price = Number(total_hours * price);
    }
    return total_price
  }

  const total = claculateTotalPrice(total_hours, total_days)
  return (

    <div class='event-summary'>

      <Card style={{ width: '80rem' }}>
      <h4>
        Dear {user.name}, please review your event order:
      </h4><br /><br />
        <h3>Event Summary</h3>
        <ListGroup variant="flush"><br />
          <ListGroup.Item>Start date: {moment(summary.start_date).format("LL")}</ListGroup.Item>
          <ListGroup.Item>End date: {moment(summary.end_date).format("LL")}</ListGroup.Item>
          <ListGroup.Item>Start time :{timeDisplay[start_time]}</ListGroup.Item> 
          <ListGroup.Item>End time :{timeDisplay[end_time]}</ListGroup.Item> 
          <ListGroup.Item>{summary.description} in</ListGroup.Item>
          <h3 style={{color:"tomato"}}> Total : {total}</h3>
          <p className="text-muted">cost per hour * total hour(200 * {total_hours} )</p>

        </ListGroup><br /><br /><br />
        <Link  className='bookevent-btn md fluid' type="submite" to="/payment">Process Payment</Link>
       
      </Card>
    </div>

  )

}

export default EventSummary