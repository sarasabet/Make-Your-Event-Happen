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
  

  

  const temp = 6
  useEffect(() => {
    // for demo purposes, hardcded URL
    axios.get(`api/events/${temp}`)
      .then(res => {
        console.log("data", res.data)
        const data = res.data;
        setEventSummary(prev =>(data))
        //setEvent(res.data)
      })
  }, [])

  const { user, startHandleSelect } = useApplicationData()
  const summary = eventSummary

console.log("eventSummary", summary)
  const start_date = moment(summary.start_date).format().slice(0, 10).split('-').join('')
  const end_date = moment(summary.end_date).format().slice(0, 10).split('-').join('')
  const total_hours = summary.end_time - summary.start_time;
  const total_days = end_date - start_date;
  const price = 200

  const claculateTotalPrice = (total_hours, total_days) => {
    let total_price;
    if (summary.start_time && !summary.end_time) {
      total_price = (total_days + 1) * price * 14
    }
    else {
      total_price = total_hours * price;
    }
    return total_price
  }

  const total = claculateTotalPrice(total_hours, total_days)
  return (

    <div class='event-summary'>

      <Card style={{ width: '80rem' }}>
      <h4>
        Dear {user.name}, please review your event order:
      </h4><br /><br /><br />
        <h3>Event Summary</h3>
        <ListGroup variant="flush"><br />
          <ListGroup.Item>Start date: {moment(summary.start_date).format("LL")}</ListGroup.Item>
          <ListGroup.Item>End date: {moment(summary.end_date).format("LL")}</ListGroup.Item>
          <ListGroup.Item>Start time :{summary.start_time}</ListGroup.Item>
          <ListGroup.Item>End time :{summary.end_time} </ListGroup.Item>
          <ListGroup.Item>{summary.description} in</ListGroup.Item>
          <h3 style={{color:"tomato"}}> Total : {total}</h3>

        </ListGroup><br /><br /><br />
        <Link  className='bookevent-btn md fluid' type="submite" to="/payment">Process Payment</Link>
       
      </Card>
    </div>

  )

}

export default EventSummary